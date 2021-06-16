import { ParserRuleContext } from 'antlr4ts';
import format from 'string-template';
import { AST } from '../../ast/AST';
import { AbstractASTVisitor, IASTVisitor } from '../../ast/IASTVisitor';
import { Definition } from '../../ast/stmt/Definition';
import { EqualDefinition } from '../../ast/stmt/EqualDefinition';
import { Import } from '../../ast/stmt/Import';
import { StringLiteral } from '../../ast/stmt/Literal';
import { Output } from '../../ast/stmt/Output';
import { ECLCode } from '../../code/ECLCode';
import { ErrorManager, TranslationIssue } from '../../managers/ErrorManager';
import ecl from '../../misc/strings/ecl';
import rs from '../../misc/strings/resultStrings';

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

    visitImport(x: Import) {
        const str = x.hasAlias ? ecl.import.aliased : ecl.import.regular;
        return [new ECLCode(str(x.moduleName, x.alias))];
    }
}
