import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import {
    DefinitionContext,
    DefinitionContext as QualifiedIdentifierContext,
    NormalIdentifierContext,
    NormalTailIdentifierContext,
    OverDefinitionContext,
    ParentIdentifierContext,
    ParentTailIdentifierContext,
    RootIdentifierContext,
} from '../grammar/HSQLParser';
import { HSQLVisitor } from '../grammar/HSQLVisitor';

/**
 * stores and works with qualified identifiers
 */
export class QualifiedIdentifier {
    protected _qidentifier: string[];
    constructor(..._qidentifier: string[]) {
        this._qidentifier = _qidentifier;
    }

    toString() {
        return this._qidentifier.join('.');
    }

    /**
     * Make a QualifiedIdentifier out of dottedNotation format
     * @param identifier identifier in dot notation
     */
    static fromString(identifier: string) {
        return new QualifiedIdentifier(...identifier.split('.'));
    }

    static fromGrammar(ctx: QualifiedIdentifierContext) {
        // return new QualifiedIdentifier(...ctx.IDENTIFIER().map(e => e.text));
        return new QualifiedIdentifierGenerator().visit(ctx);
    }

    static fromOverDefinition(ctx: OverDefinitionContext) {
        // const head = ctx.overDefinitionRoot().text;
        // // get all their texts as an array
        // const tail = ctx.overDefinitionTail().map(e => e.text);
        // return new QualifiedIdentifier(head, ...tail);
        return new QualifiedIdentifierGenerator().visit(ctx);
    }

    static equals(q1: QualifiedIdentifier, q2: QualifiedIdentifier): boolean {
        if (q1.length !== q2.length) {
            return false;
        }
        const arrayLen = q1.length;
        for (let i = 0; i < arrayLen; i++) {
            if (q1._qidentifier[i] !== q2._qidentifier[i]) {
                return false;
            }
        }
        return true;
    }

    public get qidentifier(): string[] {
        return this._qidentifier;
    }
    public set qidentifier(value: string[]) {
        this._qidentifier = value;
    }

    /**
     * Last identifier
     */
    get tail() {
        return this._qidentifier[this._qidentifier.length - 1];
    }
    /**
     * first identifier
     */
    get head() {
        return this._qidentifier[0];
    }

    /**
     * Leaving the tail
     */
    get first() {
        const x = [...this._qidentifier];
        x.pop();
        return x;
    }

    firstIdentifier() {
        return new QualifiedIdentifier(...this.first);
    }

    /**
     * Add identifier bits to the end
     * @param s Elements to add to end of string
     */
    addEnd(...s: string[]) {
        this._qidentifier.push(...s);
    }

    /**
     * Add identifier bits to the beginning
     * @param s
     */
    addBeginning(...s: string[]) {
        this._qidentifier.unshift(...s);
    }

    /**
     * size of the qualified identifier
     */
    get length() {
        return this._qidentifier.length;
    }

    /**
     * check if they are equal
     * @param q
     */
    isEquals(q: QualifiedIdentifier) {
        const l = this.length;
        if (l === q.length) {
            for (let i = 0; i < l; i++) {
                if (this._qidentifier[i] !== q._qidentifier[i]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}

class QualifiedIdentifierGenerator
    extends AbstractParseTreeVisitor<QualifiedIdentifier>
    implements HSQLVisitor<QualifiedIdentifier>
{
    protected defaultResult(): QualifiedIdentifier {
        return new QualifiedIdentifier();
    }
    aggregateResult(total: QualifiedIdentifier, next: QualifiedIdentifier) {
        return new QualifiedIdentifier(...total.qidentifier, ...next.qidentifier);
    }

    visitNormalIdentifier(ctx: NormalIdentifierContext) {
        return new QualifiedIdentifier(ctx.text);
    }
    visitRootIdentifier(ctx: RootIdentifierContext) {
        return new QualifiedIdentifier(`$`);
    }
    visitParentIdentifier(ctx: ParentIdentifierContext) {
        return new QualifiedIdentifier(ctx.text);
    }

    visitNormalTailIdentifier(ctx: NormalTailIdentifierContext) {
        return new QualifiedIdentifier(ctx.text);
    }
    visitParentTailIdentifier(ctx: ParentTailIdentifierContext) {
        return new QualifiedIdentifier(ctx.text);
    }

    // visitDefinition(ctx: DefinitionContext) {
    //     return this.visitChildren(ctx);
    // }
    // visitOverDefinition(ctx: OverDefinitionContext) {
    //     return this.visitChildren(ctx);
    // }
    visitDefinition(ctx: DefinitionContext) {
        return new QualifiedIdentifier(...ctx.IDENTIFIER().map(e => e.text));
    }
}
