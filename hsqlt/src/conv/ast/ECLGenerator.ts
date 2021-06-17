import { ParserRuleContext } from 'antlr4ts';
import { statSync } from 'fs';
import format from 'string-template';
import { AST } from '../../ast/AST';
import { AbstractASTVisitor, IASTVisitor } from '../../ast/IASTVisitor';
import { Definition } from '../../ast/stmt/Definition';
import { EqualDefinition } from '../../ast/stmt/EqualDefinition';
import { Import } from '../../ast/stmt/Import';
import { StringLiteral } from '../../ast/stmt/Literal';
import { Output } from '../../ast/stmt/Output';
import { Select } from '../../ast/stmt/Select';
import { DataMetaData, VariableVisibility } from '../../ast/symbol/VariableTable';
import { ECLCode } from '../../code/ECLCode';
import { ErrorManager, TranslationIssue } from '../../managers/ErrorManager';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { SelectColumnType, SortType } from '../../misc/ast/SelectHelpers';
import ecl from '../../misc/strings/ecl';
import rs from '../../misc/strings/resultStrings';

/**
 * Semantically, Array is treated as a rest+top fashion -> the array is top to bottom
 */
export class ECLGenerator extends AbstractASTVisitor<ECLCode[]> implements IASTVisitor<ECLCode[]> {
    constructor(protected errorManager: ErrorManager, protected rootContext: AST) {
        super();
    }
    /**
     * Main calling
     * @returns
     */
    getCode() {
        return this.visit(this.rootContext);
    }
    // empty methods, return void/undefined
    defaultResult() {
        return [];
    }
    // concatenate
    reducer(total: ECLCode[], current: ECLCode[]): ECLCode[] {
        return [...total, ...current];
    }

    // TODO 02/06 output -> tests+features
    visitOutput(x: Output) {
        const rhs = this.visit(x.source);
        const [rhstop] = this.getPopped(rhs, x.node);

        // this creates an extra ',' required for no record format
        rhstop.coverCode(ecl.output.outputlhs(), ecl.commmon.comma, false);

        if (x.namedOutput) {
            rhstop.coverCode('', format(ecl.commmon.comma + ecl.output.named, [x.namedOutput]), false);
        }
        if (x.fileOutputOptions.fileName) {
            rhstop.coverCode('', ecl.commmon.comma + x.fileOutputOptions.fileName, false);
            if (x.fileOutputOptions.overwrite) {
                rhstop.coverCode('', ecl.commmon.comma + ecl.commmon.overwrite, false);
            }
        }

        rhstop.coverCode('', ecl.commmon.rightBracket, false);
        return [...rhs, rhstop];
    }

    visitDefinition(x: Definition) {
        return [new ECLCode(x.val.toString())];
    }

    visitStringLiteral(ctx: StringLiteral) {
        return [new ECLCode(ctx.val)];
    }

    visitEqual(x: EqualDefinition) {
        const rhs = this.visit(x.rhs);
        const [rhstop] = this.getPopped(rhs, x.node);

        //  note that the const is by reference, not mutability
        rhstop.coverCode(ecl.equal.eq(x.lhs.toString()), undefined, false);

        return [...rhs, rhstop];
    }

    /**
     * Convenience function - pop out an element from stack.
     * If couldn't pop, throw an error and return empty code.
     * @param x
     * @param ctx
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

        //sort clause
        this.selectProcessSortClause(x, varStack, stmtStack);

        // get the table value ready
        this.selectProcessColFiltersAndGroups(x, varStack, stmtStack);

        this.selectProcessLimitOffset(x, varStack, stmtStack);

        this.selectProcessDistinct(x, varStack, stmtStack);
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
    selectProcessSortClause(x: Select, varStack: string[], stmtStack: ECLCode[]) {
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
    selectProcessDistinct(x: Select, varStack: string[], stmtStack: ECLCode[]) {
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

    selectProcessLimitOffset(x: Select, varStack: string[], stmtStack: ECLCode[]) {
        if (x.limitOffset !== undefined) {
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
        }
    }

    /**
     *
     * @param x the AST node
     * @param varStack variable stack
     * @param stmtStack stmt stack/list
     */
    private selectProcessFromClause(x: Select, varStack: string[], stmtStack: ECLCode[]) {
        const changedSourcesList = [...x.changedSources];
        changedSourcesList.forEach(([name, node]) => {
            const eq = new EqualDefinition(x.node, new QualifiedIdentifier(name), node.stmt);
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
    private selectProcessColFiltersAndGroups(x: Select, varStack: string[], stmtStack: ECLCode[]) {
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
