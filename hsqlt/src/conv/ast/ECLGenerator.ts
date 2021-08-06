import { ParserRuleContext } from 'antlr4ts';
import format from 'string-template';
import { AST } from '../../ast/AST';
import { AbstractASTVisitor, IASTVisitor } from '../../ast/IASTVisitor';
import { Definition } from '../../ast/stmt/Definition';
import { EqualDefinition } from '../../ast/stmt/EqualDefinition';
import { Import } from '../../ast/stmt/Import';
import { Literal } from '../../ast/stmt/Literal';
import { Output } from '../../ast/stmt/Output';
import { Plot } from '../../ast/stmt/Plot';
import { Select } from '../../ast/stmt/Select';
import { SelectJoin } from '../../ast/stmt/SelectJoin';
import { Write } from '../../ast/stmt/Write';
import { DataMetaData } from '../../ast/symbol/VariableTable';
import { VariableVisibility } from '../../misc/ast/VariableVisibility';
import { ECLCode } from '../../code/ECLCode';
import { ErrorManager, TranslationIssue } from '../../managers/ErrorManager';
import { FileOutputType } from '../../misc/ast/FileOutputType';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { SelectColumnType, SelectJoinType, SortType } from '../../misc/ast/SelectHelpers';
import ecl from '../../misc/strings/ecl';
import rs from '../../misc/strings/resultStrings';
import { CreateLayout } from '../../ast/stmt/CreateLayout';
import { SingularDataType } from '../../misc/ast/SingularDataType';
import { SelectData } from '../../ast/stmt/SelectData';
import { CreateModule } from '../../ast/stmt/CreateModule';
import os from 'os';
import { CreateFunction } from '../../ast/stmt/CreateFunction';
import { FunctionArgumentType } from '../../misc/ast/FunctionArgumentType';
import { FunctionCall } from '../../ast/stmt/FunctionCall';
import { Train } from '../../ast/stmt/Train';
import { AnyTable } from '../../ast/data/Table';
import { Predict } from '../../ast/stmt/Predict';

/**
 * Semantically, Array is treated as a rest+top fashion -> the array is top to bottom
 */
export class ECLGenerator extends AbstractASTVisitor<ECLCode[]> implements IASTVisitor<ECLCode[]> {
    public get errorManager(): ErrorManager {
        return this._errorManager;
    }

    constructor(private _errorManager: ErrorManager, protected rootContext: AST) {
        super();
    }
    /**
     * Main calling
     * @returns
     */
    public getCode() {
        return this.visit(this.rootContext);
    }
    /**
     * Default method, start with no code
     * @returns empty array
     */
    defaultResult(): ECLCode[] {
        return [];
    }
    visitAST(x: AST) {
        const stmts = x.stmts;
        // if(x.)
        const res = stmts.reduce((t, e) => {
            const v: ECLCode[] = this.visit(e); //e.accept(this);
            return this.reducer(t, v);
        }, this.defaultResult());
        if (x.isModule) {
            res.unshift(new ECLCode(format(ecl.exportModule, x.fileName), false));
            res.push(new ECLCode(ecl.commmon.end));
        }
        return res;
    }
    /**
     * Concatenate code
     * @param total
     * @param current
     * @returns
     */
    reducer(total: ECLCode[], current: ECLCode[]): ECLCode[] {
        return [...total, ...current];
    }

    visitPredict(x: Predict) {
        const indepCode = this.visit(x.indepExpr);
        const [indepCodeTop] = this.getPopped(indepCode, x.node);
        const modelCode = this.visit(x.modelDef);
        const [modelCodeTop] = this.getPopped(modelCode, x.node);

        const resultCode: ECLCode[] = [];

        /** the latest result string to be used in the next phase */
        let finalIndep = indepCodeTop.toString(false);

        // if order clause is specified, push this in
        if (x.addOrder) {
            const indepOrder = this.rootContext.variableManager.nextClaimableActionIdentifier();
            this.rootContext.variableManager.add(
                indepOrder,
                DataMetaData(new AnyTable(), VariableVisibility.DEFAULT, true)
            );

            resultCode.push(new ECLCode(ecl.ml.addCount(finalIndep, indepOrder)));
            finalIndep = indepOrder;
        }

        const indepCell = this.rootContext.variableManager.nextClaimableActionIdentifier();
        this.rootContext.variableManager.add(indepCell, DataMetaData(new AnyTable(), VariableVisibility.DEFAULT, true));
        // toCell
        resultCode.push(new ECLCode(ecl.ml.toCell(finalIndep, indepCell)));
        finalIndep = indepCell;

        const predictStmtTemplated = format(x.predictTemplate, [
            x.bundleLoc ?? '',
            // do not put that dot if its already local
            x.bundleLoc !== undefined ? ecl.commmon.dot : '',
            finalIndep,
            modelCodeTop.toString(false),
        ]);
        resultCode.push(new ECLCode(predictStmtTemplated));
        return resultCode;
    }

    visitTrain(x: Train) {
        const trainArgs = [...x.trainOptions];
        let requiredCode: ECLCode[] = [],
            trainExprMains: [string, ECLCode][] = [];
        // setup the train options
        for (const [name, { stmt }] of trainArgs) {
            const code = this.visit(stmt);
            const [codeTop] = this.getPopped(code, x.node);
            requiredCode.push(...code);
            trainExprMains.push([name, codeTop]);
        }
        //make it into a string
        const trainOptions = trainExprMains
            .map(([name, expr]) => {
                const res = expr.coverCode(ecl.equal.eq(name), undefined, false, false);
                return res.toString(false);
            })
            .join(ecl.commmon.comma);

        const indep = this.visit(x.indep);
        const [indepTop] = this.getPopped(indep, x.node);
        const dep = this.visit(x.dep);
        const [depTop] = this.getPopped(dep, x.node);

        // array for code to go into. Will get destructured for return later.
        requiredCode.push(...indep, ...dep);

        let finalIndep = indepTop.toString(false),
            finalDep = depTop.toString(false);

        if (x.addOrder) {
            const depOrder = this.rootContext.variableManager.nextClaimableActionIdentifier();
            this.rootContext.variableManager.add(
                depOrder,
                DataMetaData(new AnyTable(), VariableVisibility.DEFAULT, true)
            );
            const indepOrder = this.rootContext.variableManager.nextClaimableActionIdentifier();
            this.rootContext.variableManager.add(
                indepOrder,
                DataMetaData(new AnyTable(), VariableVisibility.DEFAULT, true)
            );

            requiredCode.push(new ECLCode(ecl.ml.addCount(finalIndep, indepOrder)));
            finalIndep = indepOrder;
            requiredCode.push(new ECLCode(ecl.ml.addCount(finalDep, depOrder)));
            finalDep = depOrder;
        }
        const depCell = this.rootContext.variableManager.nextClaimableActionIdentifier();
        this.rootContext.variableManager.add(depCell, DataMetaData(new AnyTable(), VariableVisibility.DEFAULT, true));
        const indepCell = this.rootContext.variableManager.nextClaimableActionIdentifier();
        this.rootContext.variableManager.add(indepCell, DataMetaData(new AnyTable(), VariableVisibility.DEFAULT, true));
        // toCell
        const makeDepCell = new ECLCode(ecl.ml.toCell(finalDep, depCell));
        const makeinDepCell = new ECLCode(ecl.ml.toCell(finalIndep, indepCell));

        requiredCode.push(makeDepCell, makeinDepCell);
        finalIndep = indepCell;
        finalDep = depCell;
        if (x.requireDiscrete) {
            const discretizecell = this.rootContext.variableManager.nextClaimableActionIdentifier();
            this.rootContext.variableManager.add(
                discretizecell,
                DataMetaData(new AnyTable(), VariableVisibility.DEFAULT, true)
            );
            requiredCode.push(new ECLCode(ecl.ml.toDiscrete(discretizecell, finalDep)));
            finalDep = discretizecell;
        }
        const makeTemplate = format(x.traintemplate, [
            x.bundleLoc ?? '',
            // do not put that dot if its already local
            x.bundleLoc !== undefined ? ecl.commmon.dot : '',
            finalIndep,
            finalDep,
            trainOptions,
        ]);

        requiredCode.push(new ECLCode(makeTemplate));
        return requiredCode;
    }

    visitFunction(x: CreateFunction) {
        const functionArgs = [...x.args]
            .map(([name, arg]) => {
                if (arg.type === FunctionArgumentType.PRIMITIVE) {
                    return SingularDataType[arg.dataType] + ' ' + name;
                } else {
                    return ecl.commmon.ds(arg.layoutId.toString()) + ' ' + name;
                }
            })
            .join(ecl.commmon.comma);
        const header = new ECLCode(ecl.functions.functionHeader(x.name, functionArgs));
        const body = x.body.flatMap(e => this.visit(e));
        const returnVar = new ECLCode(ecl.functions.return + x.returns);
        const ender = new ECLCode(ecl.commmon.end);
        return [header, ...body, returnVar, ender];
    }

    visitLayout(x: CreateLayout) {
        // make column lists
        // map and join with comma
        const cols = x.layout
            .list()
            .map(([colname, col]) => `${SingularDataType[col.dtype]} ${colname}`)
            .join(ecl.commmon.comma);
        const code = new ECLCode(cols, false).coverCode(ecl.commmon.leftCurlyBracket, ecl.commmon.rightCurlyBracket);
        return [code];
    }

    visitWrite(x: Write) {
        const rhs = this.visit(x.source);
        const [rhstop] = this.getPopped(rhs, x.node);
        rhstop.coverCode(ecl.output.outputlhs(), ecl.commmon.comma, false);
        rhstop.coverCode(
            undefined,
            ecl.commmon.comma + x.fileLoc + ecl.commmon.comma + FileOutputType[x.fileType],
            false
        );
        if (x.overwrite) {
            rhstop.coverCode('', ecl.commmon.comma + ecl.commmon.overwrite, false);
        }

        rhstop.coverCode('', ecl.commmon.rightBracket, false);
        return [...rhs, rhstop];
    }

    // TODO 02/06 output -> tests+features
    visitOutput(x: Output) {
        const rhs = this.visit(x.source);
        const [rhstop] = this.getPopped(rhs, x.node);

        // this creates an extra ',' required for no record format
        rhstop.coverCode(ecl.output.outputlhs(), undefined, false);

        if (x.namedOutput) {
            rhstop.coverCode('', ecl.commmon.comma + ecl.output.named(x.namedOutput), false);
        }

        if (x.overwrite) {
            rhstop.coverCode('', ecl.commmon.comma + ecl.commmon.overwrite, false);
        }

        rhstop.coverCode('', ecl.commmon.rightBracket, false);
        return [...rhs, rhstop];
    }

    visitDefinition(x: Definition) {
        return [new ECLCode(x.val.toString())];
    }

    visitLiteral(ctx: Literal) {
        return [new ECLCode(ctx.val)];
    }

    visitModule(x: CreateModule) {
        const res: ECLCode = new ECLCode(
            x.contents
                .map(e => e.accept(this))
                .flat()
                .join(os.EOL),
            false
        ).coverCode(ecl.commmon.module, ecl.commmon.end);

        return [res];
    }

    visitEqual(x: EqualDefinition) {
        const rhs = this.visit(x.rhs);
        const [rhstop] = this.getPopped(rhs, x.node);

        //  note that the const is by reference, not mutability
        rhstop.coverCode(ecl.scopes[x.declType] + ecl.equal.eq(x.lhs.toString()), undefined, false);

        return [...rhs, rhstop];
    }

    visitPlot(x: Plot) {
        const rhs = this.visit(x.src);
        const [rhstop] = this.getPopped(rhs, x.node);

        const { dataVisualizationTemplate: dvt } = x;
        // the beginning of the function
        const sourceAndDotIdentifier = (dvt.source ?? '') + (dvt.source === undefined ? '' : '.');

        const template = sourceAndDotIdentifier + format(dvt.template, [x.titleText]);
        // console.log('ASJF', template);

        rhstop.coverCode(ecl.plot.left, ecl.plot.plotRight(x.titleText, template), false);
        // rhstop.coverCode()

        return [...rhs, rhstop];
    }

    visitFunctionCall(x: FunctionCall) {
        const codes = x.args.map(e => {
            const stmt = e.stmt;
            return stmt.accept(this);
        });
        const pre: ECLCode[] = [];
        const args: ECLCode[] = [];

        codes.forEach(e => {
            const [rhstop] = this.getPopped(e, x.node);
            // push pre to one array and args to one more array
            pre.push(...e);
            args.push(rhstop);
        });
        const mainCode = new ECLCode(
            ecl.functions.call(x.val.toString(), args.map(e => e.code).join(ecl.commmon.comma)),
            false
        );
        return [...pre, mainCode];
    }

    /**
     * Convenience function - pop out an element from stack.
     * If couldn't pop, throw an error and return empty code.
     * @param x ECL Program code stack
     * @param ctx Context used to throw errors
     * @returns
     */
    private getPopped(x: ECLCode[], ctx: ParserRuleContext): [ECLCode, ECLCode[]] {
        const xpopped = x.pop();
        if (xpopped === undefined)
            this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.emptyCode), ctx));
        return [xpopped ?? new ECLCode(''), x];
    }

    /** Codegen for import -> IMPORT */
    visitImport(x: Import) {
        const str = x.hasAlias ? ecl.import.aliased : ecl.import.regular;
        return [new ECLCode(str(x.moduleName, x.alias))];
    }

    visitSelectJoin(x: SelectJoin) {
        // this is a zombie statement, select will always do this right now, no need to visit
        // const res = x.lhs.stmt.accept(this);
        let maybeAll: string = '';
        if (x.comparisonOperator !== '=') {
            maybeAll = ecl.table.joinAll; //',ALL';
        }
        const code = new ECLCode(
            ecl.table.join[x.joinType](
                x.leftBitName,
                x.rightBitName,
                x.leftCmpName,
                x.comparisonOperator,
                x.rightCmpName,
                maybeAll
            )
        );
        return [code];
    }

    visitSelectData(x: SelectData) {
        const code = new ECLCode(ecl.table.ds(x.source, x.layoutId.toString(), FileOutputType[x.fileType]));
        return [code];
    }

    /**
     * Select codegen -> generates a function
     * @param x Select AST
     * @returns
     */
    visitSelect(x: Select) {
        // claim and add this identifier - this is where our function will go
        const varName = this.rootContext.variableManager.nextClaimableActionIdentifier();
        // note: we ignore the boolean value as the previous statement gets a variable name that is surely vacant
        this.rootContext.variableManager.add(varName, DataMetaData(x.finalDt, VariableVisibility.DEFAULT, true));

        /** this is a stack of variables used - we keep pushing the newest variable used onto this so that it can be referred*/
        const varStack: string[] = [];

        /** Stack of statements to push out at the end */
        const stmtStack: ECLCode[] = [];

        /** this is the <var> := FUNCTION term, we'll keep it ready here */
        const fnasn = new ECLCode(ecl.functions.functionTerm, false).coverCode(
            ecl.equal.eq(varName),
            undefined,
            undefined,
            false
        );

        // then, eval the changed sources list
        this.selectProcessFromClause(x, varStack, stmtStack);

        // where clause
        this.selectProcessWhereClause(x, varStack, stmtStack);

        //sort clause
        this.selectProcessSortClause(x, varStack, stmtStack);

        // get the table value ready
        this.selectProcessColFiltersAndGroups(x, varStack, stmtStack);

        this.selectProcessLimitOffset(x, varStack, stmtStack);

        this.selectProcessDistinct(x, varStack, stmtStack);

        this.selectProcessDistributes(x, varStack, stmtStack);
        // table preps done, let's move onto next step
        // add the function assignment header
        stmtStack.unshift(fnasn);
        //construct return statement
        const retVar = varStack[varStack.length - 1] ?? '';
        const returnCode = new ECLCode(ecl.functions.return).coverCode(undefined, retVar, false, true);
        //push return code
        stmtStack.push(returnCode, new ECLCode(ecl.commmon.end), new ECLCode(varName));
        return stmtStack;
    }
    // FUTURE - reorganize and remove this set of functions out of this object
    selectProcessDistributes(x: Select, varStack: string[], stmtStack: ECLCode[]) {
        if (x.distributes.length === 0) return;
        const tableVar = this.rootContext.variableManager.nextClaimableActionIdentifier();
        this.rootContext.variableManager.add(tableVar, DataMetaData(x.finalDt, VariableVisibility.DEFAULT, true));

        const cols = x.distributes.join(ecl.commmon.comma);
        // const stmt = new ECLCode()
        const stmt = new ECLCode(ecl.table.distributes(varStack[varStack.length - 1], cols), false).coverCode(
            ecl.equal.eq(tableVar)
        );
        varStack.push(tableVar);
        stmtStack.push(stmt);
    }
    selectProcessWhereClause(x: Select, varStack: string[], stmtStack: ECLCode[]): void {
        if (x.where === undefined) return;
        const tableVar = this.rootContext.variableManager.nextClaimableActionIdentifier();
        this.rootContext.variableManager.add(tableVar, DataMetaData(x.totalDt, VariableVisibility.DEFAULT, true));

        const { where: text } = x;
        const stmt = new ECLCode(varStack[varStack.length - 1], false)
            .coverCode(undefined, ecl.commmon.leftBracket, false, false)
            .coverCode(undefined, text, false, false)
            .coverCode(ecl.equal.eq(tableVar), ecl.commmon.rightBracket);
        varStack.push(tableVar);
        stmtStack.push(stmt);
    }
    selectProcessSortClause(x: Select, varStack: string[], stmtStack: ECLCode[]): void {
        // exit if no sort fields
        if (x.sortFields.length === 0) return;

        const tableVar = this.rootContext.variableManager.nextClaimableActionIdentifier();
        this.rootContext.variableManager.add(tableVar, DataMetaData(x.finalDt, VariableVisibility.DEFAULT, true));

        const sortByText = x.sortFields
            .map(e => {
                if (e.type === SortType.ASC) {
                    return e.col;
                } else {
                    return ecl.table.negSort(e.col);
                }
            })
            .join(ecl.commmon.comma);
        const stmt = new ECLCode(ecl.table.sort, false)
            .coverCode(undefined, varStack[varStack.length - 1], false, false)
            .coverCode(undefined, ecl.commmon.comma, false, false)
            .coverCode(undefined, sortByText, false, false)
            .coverCode(undefined, ecl.commmon.rightBracket, false, false)
            .coverCode(ecl.equal.eq(tableVar));

        varStack.push(tableVar);
        stmtStack.push(stmt);
    }
    selectProcessDistinct(x: Select, varStack: string[], stmtStack: ECLCode[]): void {
        if (x.distict) {
            const tableVar = this.rootContext.variableManager.nextClaimableActionIdentifier();
            this.rootContext.variableManager.add(tableVar, DataMetaData(x.finalDt, VariableVisibility.DEFAULT, true));
            const stmt = new ECLCode(ecl.table.dedup(varStack[varStack.length - 1]), false).coverCode(
                ecl.equal.eq(tableVar)
            );
            varStack.push(tableVar);
            stmtStack.push(stmt);
        }
    }

    selectProcessLimitOffset(x: Select, varStack: string[], stmtStack: ECLCode[]): void {
        if (x.limitOffset.limit !== undefined) {
            const tableVar = this.rootContext.variableManager.nextClaimableActionIdentifier();
            this.rootContext.variableManager.add(tableVar, DataMetaData(x.finalDt, VariableVisibility.DEFAULT, true));

            const stmt = new ECLCode(varStack[varStack.length - 1], false) // start with the variable
                .coverCode(undefined, ecl.commmon.comma, false)
                .coverCode(undefined, x.limitOffset.limit.toString(), false); // put the limitClause
            if (x.limitOffset.offset !== undefined) {
                stmt.coverCode(undefined, ecl.commmon.comma, false).coverCode(
                    undefined,
                    x.limitOffset.offset.toString(),
                    false
                );
            }
            stmt.coverCode(ecl.table.choosen, ecl.commmon.rightBracket, false, false) // add choosen
                .coverCode(ecl.equal.eq(tableVar)); //add the assignment

            varStack.push(tableVar);
            stmtStack.push(stmt);
            // .coverCode(format(ecl.equal.eq()));
        } else if (x.limitOffset.offset !== undefined) {
            // this means limit was undefined and we came here
            const tableVar = this.rootContext.variableManager.nextClaimableActionIdentifier();
            this.rootContext.variableManager.add(tableVar, DataMetaData(x.finalDt, VariableVisibility.DEFAULT, true));

            const stmt = new ECLCode(varStack[varStack.length - 1], false) // start with the variable
                .coverCode(undefined, ecl.table.offsetOnly((x.limitOffset.offset + 1).toString()), false) // put the offsetClause, increment by one as ecl arrays are one indexed
                .coverCode(ecl.equal.eq(tableVar), undefined, false); //add the assignment

            varStack.push(tableVar);
            stmtStack.push(stmt);
        }
    }

    /**
     *
     * @param x the AST node
     * @param varStack variable stack
     * @param stmtStack stmt stack/list
     */
    private selectProcessFromClause(x: Select, varStack: string[], stmtStack: ECLCode[]): void {
        const changedSourcesList = [...x.changedSources];
        changedSourcesList.forEach(([name, node]) => {
            const eq = new EqualDefinition(
                x.node,
                new QualifiedIdentifier(name),
                node.stmt,
                DataMetaData(node.datatype, VariableVisibility.DEFAULT)
            );
            const res = eq.accept(this);
            stmtStack.push(...res);
        });

        // console.debug(`csl`, stmtStack);
        // let's join and create the resultant table now, we can do filters on this
        varStack.push(x.fromTable[0].toString());
        const fromTableLength = x.fromTable.length;
        for (let i = 1; i < fromTableLength; i++) {
            const intermediateVar = this.rootContext.variableManager.nextClaimableActionIdentifier();
            // NOTE: THIS IS A BOGUS DATA TYPE, this is easier because there is no point in validations as we have already done that during ast generation
            // also, this is internal variable
            this.rootContext.variableManager.add(
                intermediateVar,
                DataMetaData(x.finalDt, VariableVisibility.DEFAULT, true)
            );
            // we can guess this will work because the we should have a functioning AST by the time we do codegen with atleast 1 for
            const oldVar = varStack.pop() ?? '';
            const nextVar = x.fromTable[i].toString();
            stmtStack.push(
                new ECLCode(ecl.table.joiner(oldVar, nextVar), false).coverCode(ecl.equal.eq(intermediateVar))
            );

            varStack.push(intermediateVar);
        }
    }

    /**
     * Process Column filters and group bys, for SELECT
     * @param x the AST Node
     * @param varStack Current variable name stack
     * @param stmtStack Current statement list/stack
     */
    private selectProcessColFiltersAndGroups(x: Select, varStack: string[], stmtStack: ECLCode[]): void {
        /** name of the TABLE -> used in colfilters+groups */
        const tableVar = this.rootContext.variableManager.nextClaimableActionIdentifier();
        this.rootContext.variableManager.add(tableVar, DataMetaData(x.finalDt, VariableVisibility.DEFAULT, true));
        /** List of columns to put while filtering */
        const colList: ECLCode[] = [];
        x.colSelect.forEach(e => {
            switch (e.type) {
                case SelectColumnType.ALL:
                    colList.push(new ECLCode(varStack[varStack.length - 1], false));
                    break;
                case SelectColumnType.COL:
                    if (e.alias) {
                        colList.push(
                            new ECLCode(ecl.equal.eq(e.alias), false).coverCode(undefined, e.col, false, false)
                        );
                    } else {
                        colList.push(new ECLCode(e.col, false));
                    }
                    break;
                case SelectColumnType.AGGR:
                    // if its count, the other argument will be automatically ignored
                    colList.push(
                        new ECLCode(ecl.equal.eq(e.alias), false).coverCode(
                            undefined,
                            ecl.table.aggr[e.aggr](e.col),
                            false,
                            false
                        )
                    );
                    break;
            }
        });
        const colListString = colList.map(e => e.toString()).join(ecl.commmon.comma);
        const groupListCode = x.groupBy.join(ecl.commmon.comma);

        const tableCode = new ECLCode(ecl.table.tableTerm, false)
            .coverCode(ecl.equal.eq(tableVar), varStack[varStack.length - 1], false, false) // add the x:= <TABLE(> var
            .coverCode(undefined, ecl.commmon.comma, false, false) // add the comma to the right
            .coverCode(undefined, ecl.table.colList(colListString), false, false); // add the colList
        // .coverCode(undefined, ecl.commmon.rightBracket, false, true);
        const numberOfGroups = x.groupBy.length;

        // add the groups in as required
        if (numberOfGroups > 0) {
            tableCode
                .coverCode(undefined, ecl.commmon.comma, false, false)
                .coverCode(undefined, groupListCode, false, false);
        }
        tableCode.coverCode(undefined, ecl.commmon.rightBracket, false, true);

        stmtStack.push(tableCode);
        varStack.push(tableVar);
    }
}
