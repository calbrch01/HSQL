import { BaseASTNode } from '../../ast/stmt/base/BaseASTNode';
import { Literal } from '../../ast/stmt/Literal';
import { AbstractASTVisitor, IASTVisitor } from '../../ast/IASTVisitor';
import { ECLCode } from '../../code/ECLCode';
import { Import } from '../../ast/stmt/Import';
import ecl from '../../misc/strings/ecl.json';
import rs from '../../misc/strings/resultStrings.json';
import format from 'string-template';
import { ErrorManager, TranslationError } from '../../managers/ErrorManager';
import { AST } from '../../ast/AST';
import { EqualDefinition } from '../../ast/stmt/EqualDefinition';
import { ParserRuleContext } from 'antlr4ts';
import { Definition } from '../../ast/stmt/Definition';
import { Output } from '../../ast/stmt/Output';

/**
 * Semantically, Array is treated as a rest+top fashion
 */
export class ECLGenerator extends AbstractASTVisitor<ECLCode[]> implements IASTVisitor<ECLCode[]> {
    // protected stmts: ECLCode[] = [];
    constructor(protected errorManager: ErrorManager, protected rootContext: AST) {
        super();
    }

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
        rhstop.coverCode(ecl.output.outputlhs, ecl.commmon.comma, false);

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

    visitEqual(x: EqualDefinition) {
        const rhs = this.visit(x.rhs);
        const [rhstop] = this.getPopped(rhs, x.node);

        //  note that the const is by reference, not mutability
        rhstop.coverCode(format(ecl.equal.eq, [x.lhs.toString()]), undefined, false);

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
            this.errorManager.push(TranslationError.semanticErrorToken(format(rs.emptyCode), ctx));
        return [xpopped ?? new ECLCode(''), x];
    }

    visitImport(x: Import) {
        const str = x.hasAlias ? ecl.import.aliased : ecl.import.regular;
        return [new ECLCode(format(str, [x.moduleName, x.alias]))];
    }
}
