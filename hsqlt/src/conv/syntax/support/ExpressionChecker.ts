import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { CollectionType } from '../../../ast/data/base/CollectionType';
import { TranslationIssue } from '../../../managers/ErrorManager';
import { QualifiedIdentifier } from '../../../misc/ast/QualifiedIdentifier';
import { IdentifierLiteralContext } from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import resultStrings from '../../../misc/strings/resultStrings';
import { ASTGenerator } from '../ASTGenerator';
import format from 'string-template';

export class ExpressionChecker extends AbstractParseTreeVisitor<void> implements HSQLVisitor<void> {
    protected defaultResult(): void {}

    constructor(protected parent: ASTGenerator, protected addition?: CollectionType) {
        super();
    }

    visitIdentifierLiteral(ctx: IdentifierLiteralContext) {
        console.log('called');
        const { text } = ctx;
        const parentVarExists = this.parent.variableManager.resolve(QualifiedIdentifier.fromString(text)) !== undefined;
        const childAdditionHas = this.addition?.has(text);
        if (!(parentVarExists || childAdditionHas)) {
            this.parent.errorManager.push(TranslationIssue.semanticErrorToken(format(resultStrings.notFound, [text])));
        }
    }
}
