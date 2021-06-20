import { AbstractParseTreeVisitor, TerminalNode } from 'antlr4ts/tree';
import { CollectionType } from '../../../ast/data/base/CollectionType';
import { TranslationIssue } from '../../../managers/ErrorManager';
import { QualifiedIdentifier } from '../../../misc/ast/QualifiedIdentifier';
import { IdentifierLiteralContext, ValueExpressionListContext } from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import resultStrings from '../../../misc/strings/resultStrings';
import { ASTGenerator } from '../ASTGenerator';
import format from 'string-template';

/**
 * Fast checking of boolean expressions for variable definitions.
 * Does not check type compatibility
 * // FUTURE
 */
export class ExpressionChecker extends AbstractParseTreeVisitor<string> implements HSQLVisitor<string> {
    protected defaultResult(): string {
        return '';
    }
    protected aggregateResult(aggregate: string, nextResult: string): string {
        return aggregate + ' ' + nextResult.trimLeft();
    }

    constructor(protected parent: ASTGenerator, protected addition?: CollectionType) {
        super();
    }

    visitIdentifierLiteral(ctx: IdentifierLiteralContext) {
        const { text } = ctx;
        const parentVarExists = this.parent.variableManager.resolve(QualifiedIdentifier.fromString(text)) !== undefined;
        const childAdditionHas = this.addition?.has(text);
        if (!(parentVarExists || childAdditionHas)) {
            this.parent.errorManager.push(TranslationIssue.semanticErrorToken(format(resultStrings.notFound, [text])));
        }
        return ctx.text;
    }

    visitValueExpressionList(ctx: ValueExpressionListContext) {
        return '[' + this.visitChildren(ctx) + ']';
    }

    visitTerminal(node: TerminalNode) {
        return node.text;
    }
}
