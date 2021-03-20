/**
 * stores and works with qualified identifiers
 */
export class QualifiedIdentifier {
    protected _qidentifier: string[];
    constructor(..._qidentifier: string[]) {
        this._qidentifier = _qidentifier;
    }

    /**
     * Make a QualifiedIdentifier out of dottedNotation format
     * @param identifier identifier in dot notation
     */
    static dottedNotation(identifier: string) {
        return new QualifiedIdentifier(...identifier.split('.'));
    }

    protected get qidentifier(): string[] {
        return this._qidentifier;
    }
    protected set qidentifier(value: string[]) {
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
