import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { DataType, EDataType } from '../../../ast/data/base/DataType';
import { BaseASTNode } from '../../../ast/stmt/base/BaseASTNode';
import { Select } from '../../../ast/stmt/Select';
import { ErrorManager, ErrorSeverity, ErrorType, TranslationError } from '../../../managers/ErrorManager';
import { QualifiedIdentifier } from '../../../misc/ast/QualifiedIdentifier';
import {
    DefinitionContext,
    SelectBracketedFromTableContext,
    SelectFromClauseContext,
    SelectFromDefinitionContext,
    SelectFromDerivedTableContext,
    SelectJoinedTableContext,
    SelectStmtContext,
} from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';

import { pullVEO, VEO, VEOMaybe } from '../../../misc/holders/VEO';
import { ASTGenerator } from '../ASTGenerator';
import { SelectJob, SelectJobDesc } from '../../../misc/ast/SelectJobDesc';
import { AnyTable } from '../../../ast/data/AnyTable';
import { StmtExpression } from '../../../ast/stmt/base/StmtExpression';
import { CollectionType } from '../../../ast/data/base/CollectionType';
import { isCollection, isDataType } from '../../../ast/data/base/misc';
import rs from '../../../misc/strings/resultStrings.json';
import { VariableVisibility } from '../../../ast/symbol/VariableTable';
import format from 'string-template';
import { Any } from '../../../ast/data/Any';
import { Table } from '../../../ast/data/Table';
import { debug } from 'console';
import { Definition } from '../../../ast/stmt/Definition';
import { args } from '../../..';
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

export class SelectASTGenerator extends AbstractParseTreeVisitor<VEOMaybe> implements HSQLVisitor<VEOMaybe> {
    errorManager: ErrorManager;
    /**
     * The table sources that can be used for the rest of the select statement.
     * For these, the columns are looked up.
     * This is the definition for all those in the {@link SelectASTGenerator.fromTable} that are not directly in scope,
     * but are essentially aliases or derived queries.
     */
    protected _changedSources: Map<string, VEO<CollectionType, StmtExpression>>;

    /**
     *
     */
    protected _colSelect: Map<string, string>;

    /**
     * What to do in the select, a stack of work to do
     */
    private _jobs: SelectJob[];

    /**
     * A set of identifiers that will recognize the from part of the query.
     */
    protected fromTable: QualifiedIdentifier[];

    constructor(protected parent: ASTGenerator) {
        super();
        this.errorManager = parent.errorManager;
        // this.taskManager = parent.
        this._changedSources = new Map();
        this._jobs = [];
        this._colSelect = new Map();
        this.fromTable = [];
    }

    protected get jobs(): SelectJob[] {
        return this._jobs;
    }
    protected defaultResult(): VEOMaybe<DataType, BaseASTNode> {
        return null;
    }

    visitSelectStmt(ctx: SelectStmtContext) {
        this.visit(ctx.selectFromClause());

        // create node
        const node = new Select(ctx, [], this._jobs);

        // push dedup if required
        const isDistinct = ctx.DISTINCT() !== undefined;
        isDistinct && this._jobs.push({ type: SelectJobDesc.DISTINCT });

        // debug args
        this.parent.taskManager.args.g && console.debug('G>node', this._changedSources);
        //change this data type
        const dt = new AnyTable();
        return new VEO(dt, node);
    }

    visitSelectFromClause(ctx: SelectFromClauseContext) {
        const from: VEO<DataType, Definition>[] = ctx.selectFromRef().map((e, i) => {
            const result = e.accept(this);
            const resultDefinite = pullVEO(result, this.errorManager, ctx);
            if (resultDefinite.stmt instanceof Definition) {
                resultDefinite.stmt;
                return resultDefinite as VEO<DataType, Definition>;
            } else {
                this.errorManager.halt(
                    TranslationError.createIssue(
                        format(rs.unexpectedErrorTagged, [rs.notCollection]),
                        ErrorType.HALTING,
                        ErrorSeverity.ERROR,
                        ctx.selectFromRef(i)
                    )
                );
            }
        });
        this.parent.taskManager.args.g && console.debug('from', from);

        this.fromTable = from.map(e => e.stmt.val);

        this.parent.taskManager.args.g && console.debug('fromTable', this.fromTable);
        return null;
    }

    visitSelectFromDerivedTable(ctx: SelectFromDerivedTableContext) {
        const aliasCtx = ctx.selectAlias();
        const idName = aliasCtx.IDENTIFIER().text;
        const resMaybe = ctx.selectStmt().accept(this.parent);

        // a table cannot ever even return a non-table, if it does, question reality
        if (!isDataType(resMaybe?.datatype, EDataType.TABLE)) {
            this.errorManager.halt(
                TranslationError.createIssue(
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

        // do two things, add to sources, and add to local varmanager.
        this._changedSources.set(idName, res);
        this.parent.variableManager.add(idName, { data: res.datatype, vis: VariableVisibility.PUBLIC });

        return new VEO(res.datatype, new Definition(aliasCtx, new QualifiedIdentifier(idName)));
    }

    visitDefinition(ctx: DefinitionContext) {
        return this.parent.visit(ctx);
    }

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
                TranslationError.createIssue(
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
            this._changedSources.set(idName, new VEO(dt, resultingVariable.stmt));

            // this should never theoretically run but acts as a guard
            if (!(resultingVariable.stmt instanceof Definition)) {
                this.errorManager.halt(
                    TranslationError.semanticErrorToken(format(rs.notTagged, [Definition.name]), childCtx)
                );
            }

            resultingVariable = new VEO(
                dt,
                new Definition(ctx, new QualifiedIdentifier(selectFromAlias.IDENTIFIER().text))
            );
        }

        return resultingVariable; //new VEO(dt,);
    }

    // this one can be ignored, as we just call the children and that is the default action anyways
    // visitSelectBracketedFromTable(ctx: SelectBracketedFromTableContext) {
    //     return this.visit(ctx);
    // }
    visitSelectJoinedTable(ctx: SelectJoinedTableContext) {
        // TODO 15/06 implement joins
        return null;
    }
}
