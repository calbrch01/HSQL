const { ErrorListener } = require('antlr4/error/ErrorListener');

/**
 * Error Listener for Lexer/Parser Errors.
 */
class HSQLErrorListener extends ErrorListener {
    constructor() {
        super();
        this.partialFruit = null;

        this.errors = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push({ offendingSymbol, line, column, msg });
    }
}

/**
 * Error Listener for Visitor Errors
 */
class HSQLVisitorErrorListener extends HSQLErrorListener {
    constructor() {
        super();
        /**
         * @type {Array<{offendingSymbol:Object,line:Number,column:Number,msg:String}>}
         */
        this.warnings = [];
    }

    /**
     * A syntax error
     * @param {*} ctx 
     * @param {String} msg 
     */
    syntaxErrorShort(ctx=null, msg) {
        if (ctx) {
            this.errors.push({
                offendingSymbol: ctx.start,
                //This is for the CommonTokens, they dont have ctx.start
                //A lot of alternatives here, just as a failsafe for any ctx passed to it
                line: (ctx.start&&ctx.start.line)||ctx.line||(ctx.symbol&&ctx.symbol.start.line) || 0,
                column: (ctx.start && ctx.start.column) ||ctx.column||(ctx.symbol&&ctx.symbol.column) || 0,
                msg
            })
        } else {
            this.errors.push({
                offendingSymbol: null,
                line: -1,
                column: 0,
                msg
            })

        }
    }

    /**
     * Abort if required
     * Arguments swapped wrt to argument importance
     * @param {string} msg 
     * @param {*} ctx 
     */
    syntaxErrorAbort(msg,ctx=null){
        throw new HSQLCancellationError(this,ctx,msg);
    }

    syntaxWarning(recognizer, offendingSymbol, line, column, msg, e) {
        this.warnings.push({ offendingSymbol, line, column, msg })
    }

    /**
     * Generic Errors that can't have specifications
     * @param {*} ctx 
     * @param {String} msg 
     */
    generalError(msg) {
        this.errors.push({
            offendingSymbol: null,
            line: -1,
            column: 0,
            msg
        })
    }

    /**
     * 
     * @param {*} ctx 
     * @param {String} msg 
     */
    syntaxWarningShort(ctx, msg) {
        this.warnings.push({
            offendingSymbol: ctx.start,
            line: (ctx.start&&ctx.start.line)||ctx.line||(ctx.symbol&&ctx.symbol.line) || 0,
            column: (ctx.start&&ctx.start.column)||ctx.column||(ctx.symbol&&ctx.symbol.column) || 0,
            // (ctx.start && ctx.start.column) ||ctx.column||(ctx.symbol&&ctx.symbol.column) || 0,
            
            msg
        })
    }
}

/**
 * Simple Error class - logs into the listener, and can view message
 */
class HSQLCancellationError extends Error {
    /**
     * 
     * @param {HSQLVisitorErrorListener} errorListener 
     * @param {*} ctx 
     * @param {String} msg 
     */
    constructor(errorListener, ctx=null, msg) {
        super(msg);
        this.errorListener = errorListener;
        if (errorListener) {
            errorListener.syntaxErrorShort(ctx, msg);
        } else {
            console.warn("Error listener not initialized")
        }
    }
}

exports.HSQLCancellationError = HSQLCancellationError;
exports.HSQLErrorListener = HSQLErrorListener;
exports.HSQLVisitorErrorListener = HSQLVisitorErrorListener;