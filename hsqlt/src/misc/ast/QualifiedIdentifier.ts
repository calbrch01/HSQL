import { DefinitionContext as QualifiedIdentifierContext, OverDefinitionContext } from '../grammar/HSQLParser';

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
        return new QualifiedIdentifier(...ctx.IDENTIFIER().map(e => e.text));
    }

    static fromOverDefinition(ctx: OverDefinitionContext) {
        const head = ctx.overDefinitionRoot().text;
        // get all their texts as an array
        const tail = ctx.overDefinitionTail().map(e => e.text);
        return new QualifiedIdentifier(head, ...tail);
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
