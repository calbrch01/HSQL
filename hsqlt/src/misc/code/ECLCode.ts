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
    constructor(protected code: string, public insertSemi = true) {}
    /**
     * Enclose code in more code
     * @param leftSide left part of code
     * @param rightSide right part of code
     * @param respectSemi whether to place the semicolon inside
     * @param insertSemi  whether to enable insertSemi or not
     * @returns
     */
    coverCode(leftSide: string, rightSide: string = '', respectSemi = this.insertSemi, insertSemi = true) {
        this.code = leftSide + this.code + (respectSemi ? ';' : '') + rightSide;
        this.insertSemi = insertSemi;
        return this.code;
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
        return new ECLCode(leftSide + this.code + (respectSemi ? ';' : '') + rightSide, insertSemi);
    }

    /**
     * Bring the code to String
     * @returns The string representation of the code
     */
    toString() {
        if (this.insertSemi) return this.code + ';';
        else return this.code;
    }
}
