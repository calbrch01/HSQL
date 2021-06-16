import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import format from 'string-template';
import { Any } from '../../../ast/data/Any';
import { CollectionType } from '../../../ast/data/base/CollectionType';
import { DataType, EDataType } from '../../../ast/data/base/DataType';
import { isDataType } from '../../../ast/data/base/typechecks/isDataType';
import { Col } from '../../../ast/data/Col';
import { dtype } from '../../../ast/data/Singular';
import { Table, AnyTable } from '../../../ast/data/Table';
import { BaseASTNode } from '../../../ast/stmt/base/BaseASTNode';
import { StmtExpression } from '../../../ast/stmt/base/StmtExpression';
import { Definition } from '../../../ast/stmt/Definition';
import { Select } from '../../../ast/stmt/Select';
import { VariableVisibility } from '../../../ast/symbol/VariableTable';
import { ErrorManager, ErrorSeverity, ErrorType, TranslationIssue } from '../../../managers/ErrorManager';
import { QualifiedIdentifier } from '../../../misc/ast/QualifiedIdentifier';
import {
    IncrementingCounter,
    mapAggregation,
    SelectAggregationType,
    SelectColumn,
    SelectColumnType,
    SelectJob,
    SelectJobDesc,
} from '../../../misc/ast/SelectHelpers';
import {
    DefinitionContext,
    SelectAggregatedEverythingColContext,
    SelectAggregatedOneColContext,
    SelectColumnsContext,
    SelectFromClauseContext,
    SelectFromDefinitionContext,
    SelectFromDerivedTableContext,
    SelectJoinedTableContext,
    SelectOneColContext,
    SelectStmtContext,
    WildAllContext,
} from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import { pullVEO, VEO, VEOMaybe } from '../../../misc/holders/VEO';
import miscHSQL from '../../../misc/strings/miscHSQL';
import rs from '../../../misc/strings/resultStrings';
import { ASTGenerator } from '../ASTGenerator';

/*
 * Let's talk about select. its really big.
 * We will have sources, cols and jobs.
 * Jobs are how we can do SELECT.
 * This is the safest order to the query.
 * Only step 1 uses other tables, rest all steps just act on the above
 * 1. from - create the gigantic source table. This involves
 *   a. Enumerating sources
 *   b. filling sources
 *   c. getting the table
 * 2. where - filter from above
 * 3. group
 * 4. sort
 * 5. having
 * 6. limit+offset
 * 7. colfilter
 * 8. distinct
 */

/*
 * Here is the AST Generation process for Select
 * Simplifying for ECL, the whole process becomes
 * 1. FROM
 *     a. Enumerate aliases
 *     b. Enumerate joins
 *     c. Store the table
 * 2. where
 * 3. sort
 * 4. groupandColfit
 * 5. LIMITOFFSET
 * 6. distinct
 */

/**
 * Select AST generator. This one uses internal fields that fill up after processing after returning the select node
 */
export class SelectASTGenerator extends AbstractParseTreeVisitor<VEOMaybe> implements HSQLVisitor<VEOMaybe> {
    /** The usual error manager required to report errors */
    errorManager: ErrorManager;
    incCounter: IncrementingCounter;
    static colPrefix = '__default_col_' as const;
    /**
     * The table sources that can be used for the rest of the select statement.
     * For these, the columns are looked up.
     * This is the definition for all those in the {@link SelectASTGenerator.fromTable} that are not directly in scope,
     * but are essentially aliases or derived queries.
     */
    protected _changedSources: Map<string, VEO<CollectionType, StmtExpression>>;

    /**
     * Columns selected
     */
    protected _colSelect: SelectColumn[];

    /**
     * What to do in the select -> treat as a stack of work
     */
    private _jobs: SelectJob[];

    /**
     * A set of identifiers that will recognize the from part of the query.
     */
    protected fromTable: QualifiedIdentifier[];

    /**
     * The total table set - Without any column filters
     */
    protected totalDt: Table;

    /**
     * The table set after column filters
     */
    protected finalDt: Table;

    constructor(protected parent: ASTGenerator) {
        super();
        this.errorManager = parent.errorManager;
        this.incCounter = new IncrementingCounter();
        // this.taskManager = parent.
        this._changedSources = new Map();
        this._jobs = [];
        this._colSelect = [];
        this.fromTable = [];
        this.totalDt = new AnyTable();
        this.finalDt = new AnyTable();
    }

    protected get jobs(): SelectJob[] {
        return this._jobs;
    }
    protected defaultResult(): VEOMaybe<DataType, BaseASTNode> {
        return null;
    }

    /**
     * The overall select statement, refer to the general algorithm above
     * @param ctx
     * @returns
     */
    visitSelectStmt(ctx: SelectStmtContext) {
        // parse and process the from clause
        this.visit(ctx.selectFromClause());

        // where
        // sort

        // then, the cols -> this._colSelect
        this.visit(ctx.selectColumns());
        // groups

        // limitOffset

        // push dedup if required
        const distinctCtx = ctx.distinctClause();
        distinctCtx !== undefined && this._jobs.push({ type: SelectJobDesc.DISTINCT, ctx: distinctCtx });

        // debug args
        // this.parent.taskManager.args.g && console.debug('G> this._changedSources', this._changedSources);
        // this.parent.taskManager.args.g && console.debug('G> this._cols', this._colSelect);

        //get the data type that we had set from visitSelectFromClause ->

        // create node
        const node = new Select(
            ctx,
            this._changedSources,
            this.fromTable,
            this.totalDt,
            this._colSelect,
            this._jobs,
            this.finalDt
        );

        // TODO FILTER DATATYPES
        return new VEO(this.finalDt, node);
    }

    visitSelectColumns(ctx: SelectColumnsContext) {
        // visit the children => this generates this._colSelect
        this.visitChildren(ctx);
        let anyIzed = true;
        const colMap = new Map<string, Col>();

        // generate finalDt
        if (!this.totalDt.anyized) {
            for (const element of this._colSelect) {
                switch (element.type) {
                    case SelectColumnType.COL:
                        if (element.alias) {
                            if (colMap.has(element.alias)) {
                                TranslationIssue.semanticErrorToken(
                                    format(rs.colAlreadyExistsError, [element.alias]),
                                    element.ctx
                                );
                            } else {
                                //add it
                                const col = this.totalDt.get(element.col);
                                if (col === undefined) {
                                    this.errorManager.halt(
                                        TranslationIssue.createIssue(
                                            format(rs.unexpectedErrorTagged, []),
                                            ErrorType.HALTING,
                                            ErrorSeverity.ERROR,
                                            element.ctx
                                        )
                                    );
                                }
                                colMap.set(element.alias, col);
                            }
                        } else {
                            //no alias, carry it over
                            const col = this.totalDt.get(element.col);
                            if (col === undefined) {
                                this.errorManager.halt(
                                    TranslationIssue.createIssue(
                                        format(rs.unexpectedErrorTagged, []),
                                        ErrorType.HALTING,
                                        ErrorSeverity.ERROR,
                                        element.ctx
                                    )
                                );
                            }
                            colMap.set(element.col, col);
                        }
                        break;
                    case SelectColumnType.ALL:
                        const colList = this.totalDt.list();
                        for (const [name, col] of colList) {
                            if (colMap.has(name)) {
                                this.errorManager.push(
                                    TranslationIssue.semanticErrorToken(
                                        format(rs.colAlreadyExistsError, [name]),
                                        element.ctx
                                    )
                                );
                            } else {
                                colMap.set(name, col);
                            }
                        }
                        break;
                    case SelectColumnType.AGGR:
                        if (colMap.has(element.alias)) {
                            TranslationIssue.semanticErrorToken(
                                format(rs.colAlreadyExistsError, [element.alias]),
                                element.ctx
                            );
                        } else {
                            //add it
                            // if its a COUNT(*) then create a new column else inherit
                            const col =
                                element.col === SelectColumnType.ALL
                                    ? new Col(dtype.INTEGER)
                                    : this.totalDt.get(element.col);
                            if (col === undefined) {
                                this.errorManager.halt(
                                    TranslationIssue.createIssue(
                                        format(rs.unexpectedErrorTagged, []),
                                        ErrorType.HALTING,
                                        ErrorSeverity.ERROR,
                                        element.ctx
                                    )
                                );
                            }
                            colMap.set(element.alias, col);
                        }
                        break;
                    //
                    // case SelectColumnType.ALL:
                }
            }
            this.finalDt = new Table(colMap);
        }
        // nothing for else, it is already anytable()
        this.parent.taskManager.args.g && console.debug('finalDt', this.finalDt);

        return null;
    }

    /**
     * For SELECT *
     * @param ctx
     * @returns
     */
    visitWildAll(ctx: WildAllContext) {
        this._colSelect.push({ type: SelectColumnType.ALL, ctx });
        return null;
    }

    visitSelectOneCol(ctx: SelectOneColContext) {
        const colname = ctx.IDENTIFIER().text;
        // this isn't like the other aliases, column aliases are totally fine as long as they don't already exist in the table
        // TODO check if aliased record already exists
        const alias = ctx.aliasingCol()?.IDENTIFIER().text;

        //look this up on fromTable
        if (this.totalDt.has(colname)) {
            this._colSelect.push({ type: SelectColumnType.COL, col: colname, alias, ctx });
        } else {
            this.errorManager.push(
                TranslationIssue.semanticErrorToken(format(rs.colDoesNotExistError, [colname]), ctx)
            );
        }

        return null;
    }

    /**
     * This is for COUNT(*) :P
     * @param ctx
     * @returns
     */
    visitSelectAggregatedEverythingCol(ctx: SelectAggregatedEverythingColContext) {
        const task = ctx.IDENTIFIER().text.toUpperCase();
        let alias = ctx.aliasingCol()?.IDENTIFIER().text;
        if (alias === undefined) {
            const c = this.incCounter.getAndIncrement();
            alias = SelectASTGenerator.colPrefix + c;
            this.errorManager.push(
                TranslationIssue.semanticInfoToken(format(rs.noAliasUsingFallbackInfo, [alias]), ctx)
            );
        }
        if (task === miscHSQL.count) {
            this._colSelect.push({
                type: SelectColumnType.AGGR,
                aggr: SelectAggregationType.COUNT,
                col: SelectColumnType.ALL,
                alias,
                ctx,
            });
        } else {
            this.errorManager.push(
                TranslationIssue.semanticErrorToken(format(rs.invalidAggregateError, [ctx.text]), ctx)
            );
        }
        return null;
    }

    visitSelectAggregatedOneCol(ctx: SelectAggregatedOneColContext) {
        const taskCtx = ctx.IDENTIFIER(0);
        const colname = ctx.IDENTIFIER(1).text;
        const task = taskCtx.text;
        let alias = ctx.aliasingCol()?.IDENTIFIER().text;
        if (alias === undefined) {
            const c = this.incCounter.getAndIncrement();
            alias = SelectASTGenerator.colPrefix + c;
            this.errorManager.push(
                TranslationIssue.semanticInfoToken(format(rs.noAliasUsingFallbackInfo, [alias]), ctx)
            );
        }
        const aggr = mapAggregation(task);
        if (aggr !== undefined) {
            if (this.totalDt.has(colname)) {
                this._colSelect.push({ type: SelectColumnType.AGGR, aggr, col: colname, alias, ctx });
            } else {
                this.errorManager.push(
                    TranslationIssue.semanticErrorToken(format(rs.colDoesNotExistError, [colname]), ctx)
                );
            }
        } else {
            this.errorManager.push(
                TranslationIssue.semanticErrorToken(format(rs.invalidAggregateError, [ctx.text]), ctx)
            );
        }
        return null;
    }

    visitSelectFromClause(ctx: SelectFromClauseContext) {
        const from: VEO<DataType, Definition>[] = ctx.selectFromRef().reduce((t, e, i) => {
            const result = e.accept(this);
            //dont push if null -> this means that a child node has error-ed out, and is not providing a source
            if (result === null) return t;
            const resultDefinite: VEO<DataType, BaseASTNode> = result;
            if (resultDefinite.stmt instanceof Definition) {
                resultDefinite.stmt;
                t.push(resultDefinite as VEO<DataType, Definition>);
                return t;
            } else {
                this.errorManager.halt(
                    TranslationIssue.createIssue(
                        format(rs.unexpectedErrorTagged, [rs.notCollection]),
                        ErrorType.HALTING,
                        ErrorSeverity.ERROR,
                        ctx.selectFromRef(i)
                    )
                );
            }
        }, new Array<VEO<DataType, Definition>>());

        this.parent.taskManager.args.g && console.debug('from', from);

        this.fromTable = from.map(e => e.stmt.val);

        this.parent.taskManager.args.g && console.debug('fromTable', this.fromTable);

        // The Table|Any can be provably correct as they would have been resolved in earlier steps
        this.totalDt = Table.combine(
            this.errorManager,
            ctx,
            ...(this.fromTable.map(e => this.parent.variableManager.resolve(e) ?? new Any()) as (Table | Any)[])
        );

        return null;
    }

    /**
     * Dealing with a recursive select query
     * @param ctx
     * @returns
     */
    visitSelectFromDerivedTable(ctx: SelectFromDerivedTableContext) {
        const aliasCtx = ctx.selectAlias();
        const idName = aliasCtx.IDENTIFIER().text;
        const resMaybe = ctx.selectStmt().accept(this.parent);

        // a table cannot ever even return a non-table, if it does, question reality
        if (!isDataType(resMaybe?.datatype, EDataType.TABLE)) {
            this.errorManager.halt(
                TranslationIssue.createIssue(
                    format(rs.unexpectedErrorTagged, [rs.notCollection]),
                    ErrorType.HALTING,
                    ErrorSeverity.ERROR,
                    ctx.selectStmt()
                )
            );
        }

        // weird cast, but we can roll with it as we ensure it with the check above
        const res = pullVEO<CollectionType, StmtExpression>(
            resMaybe as VEOMaybe<CollectionType, StmtExpression>,
            this.errorManager,
            ctx
        );

        // ECL does not allow variable shadowing - return null
        if (this.parent.variableManager.exists(idName)) {
            this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.existsError, [idName]), aliasCtx));
            return null;
        }

        // do two things, add to sources, and add to local varmanager.
        this._changedSources.set(idName, res);
        this.parent.variableManager.add(idName, { data: res.datatype, vis: VariableVisibility.PUBLIC });

        return new VEO(res.datatype, new Definition(aliasCtx, new QualifiedIdentifier(idName)));
    }

    /**
     * Redirect to parent
     * @param ctx
     * @returns
     */
    visitDefinition(ctx: DefinitionContext) {
        return this.parent.visit(ctx);
    }

    /**
     * Process the from clause
     * @param ctx
     * @returns Null if errors out(eg. the alias already exists), else a definition to use
     */
    visitSelectFromDefinition(ctx: SelectFromDefinitionContext) {
        const selectFromAlias = ctx.selectAlias();
        const childCtx = ctx.definition();
        const childRes = this.visit(childCtx);

        // this is the data about the variable
        let resultingVariable = pullVEO(childRes, this.errorManager, childCtx);

        let dt: Table | Any;

        // narrow down and error on tables
        if (isDataType(resultingVariable.datatype, EDataType.TABLE)) {
            dt = resultingVariable.datatype;
        } else {
            dt = new Any();
            this.errorManager.push(
                TranslationIssue.createIssue(
                    format(rs.cannotUse, EDataType[resultingVariable.datatype.type], EDataType[EDataType.TABLE]),
                    ErrorType.SEMANTIC,
                    ErrorSeverity.ERROR,
                    childCtx
                )
            );
        }

        // const dt = isDataType(x.datatype,EDataType.TABLE)?x.datatype:new Any();
        //
        if (selectFromAlias) {
            const idName = selectFromAlias.IDENTIFIER().text;

            // ECL does not allow variable shadowing - return null
            if (this.parent.variableManager.exists(idName)) {
                this.errorManager.push(
                    TranslationIssue.semanticErrorToken(format(rs.existsError, [idName]), selectFromAlias)
                );
                return null;
            }
            // if(this.parent.variableManager.ge)
            //push the variable to the the variable table
            this.parent.variableManager.add(idName, {
                data: resultingVariable.datatype,
                vis: VariableVisibility.PUBLIC,
            });
            this._changedSources.set(idName, new VEO(dt, resultingVariable.stmt));

            // this should never theoretically run but acts as a guard
            if (!(resultingVariable.stmt instanceof Definition)) {
                this.errorManager.halt(
                    TranslationIssue.semanticErrorToken(format(rs.notTagged, [Definition.name]), childCtx)
                );
            }

            resultingVariable = new VEO(
                dt,
                new Definition(ctx, new QualifiedIdentifier(selectFromAlias.IDENTIFIER().text))
            );
        }

        return resultingVariable; //new VEO(dt,);
    }

    // FIXME 16/06
    visitSelectJoinedTable(ctx: SelectJoinedTableContext) {
        // TODO 15/06 implement joins
        return null;
    }
}
