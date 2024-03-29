/**
 * A class representing code generated in ECL.
 * It is barebones but isolates the insertion of the semicolon to join time
 */
export class ECLCode {
    /**
     *
     * @param code the code to represent
     * @param insertSemi whether to insert semicolons or not - default true
     */
    constructor(private _code: string, public insertSemi = true) {}
    /**
     * Enclose code in more code
     * @param leftSide left part of code
     * @param rightSide right part of code
     * @param respectSemi whether to place the semicolon inside (defaults to this.insertSemi old)
     * @param insertSemi  whether to enable insertSemi or not after this operation (true)
     * @returns
     */
    coverCode(leftSide: string = '', rightSide: string = '', respectSemi = this.insertSemi, insertSemi = true) {
        this._code = leftSide + this._code + (respectSemi ? ';' : '') + rightSide;
        this.insertSemi = insertSemi;
        return this;
    }

    public get code(): string {
        return this._code;
    }

    /**
     * Same as @see {coverCode} but creates a new object
     * @param leftSide left part of code
     * @param rightSide right part of code
     * @param respectSemi whether to place the semicolon inside (defaults to inner insertSemi)
     * @param insertSemi whether to enable insertSemi or not (defaults to true)
     * @returns
     */
    newCoverCode(leftSide: string, rightSide: string = '', respectSemi = this.insertSemi, insertSemi = true) {
        return new ECLCode(leftSide + this._code + (respectSemi ? ';' : '') + rightSide, insertSemi);
    }

    /**
     * Bring the code to String
     * @returns The string representation of the code
     */
    toString(doSemicolon: boolean = true) {
        if (this.insertSemi) return this._code + (doSemicolon ? ';' : '');
        else return this._code;
    }
}
