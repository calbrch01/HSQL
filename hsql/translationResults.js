
/**
 * Returns the state of translation
 */
class translationResults {
    /**
     * Accepts
     * @param {*} errors 
     * @param {*} warnings 
     * @param {Array<String>} translated 
     * @param {IdentifierStore} identifierInformation identifierStore
     */
    constructor(errors, translated = [], warnings = [], identifierInformation = null) {
        this.translated = translated;
        this.warnings = warnings;
        this.errors = errors;
        this.identifierInformation = identifierInformation
        this.status;
        if (errors.length > 0) {
            this.status = 2;
        } else if (warnings.length > 0) {
            this.status = 1;
        } else {
            this.status = 0;
        }
    }
    hasErrors() {
        if (this.errors)
            return this.errors.length != 0;
        else
            return false;
    }
    hasWarnings() {
        return this.warnings.length != 0;
    }

    /**
     * Get number of issues
     */
    getIssuesNumber() {
        return (this.errors ? this.errors.length : 0) + (this.warnings ? this.warnings.length : 0)
    }

    /**
     * Get warnings as list
     * @returns {{line:string,column:number,msg:string}[]}
     */
    getWarningsList() {
        return this.warnings.map(e => {
            const { line, column, msg } = e;
            return { line, column, msg }
        })
    }
    /**
     * Get warnings as list
     * @returns {{line:string,column:number,msg:string}[]}
     */
    getErrorsList() {
        return this.errors.map(e => {
            const { line, column, msg } = e;
            return { line, column, msg }
        })
    }


}

module.exports.translationResults = translationResults