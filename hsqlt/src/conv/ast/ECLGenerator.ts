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

        // get the table value ready
        // const tableVar = this.rootContext.variableManager.nextClaimableActionIdentifier();
        // this.rootContext.variableManager.add(tableVar, DataMetaData(x.finalDt, VariableVisibility.DEFAULT, true));

        // add the function assignment header
        stmtStack.unshift(fnasn);
        //construct return statement
        const retVar = varStack[varStack.length - 1] ?? '';
        const returnCode = new ECLCode(ecl.functions.return).coverCode(undefined, retVar, false, true);
        //push return code
        stmtStack.push(returnCode, new ECLCode(ecl.commmon.end), new ECLCode(varName));
        return stmtStack;
    }
}
