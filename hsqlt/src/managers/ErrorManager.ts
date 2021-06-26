/**
 * Contains Error handlers, and supporting code
 * @module
 */

import { ANTLRErrorListener, ParserRuleContext, Token } from 'antlr4ts';

/**
 * Severity of errors
 */
export enum ErrorSeverity {
    INFO,
    WARNING,
    ERROR,
}
/**
 * Source/Type of Error
 */
export enum ErrorType {
    SETUP,
    IO,
    SYNTAX,
    SEMANTIC,
    OTHER,
    /**
     * Halt on these errors
     */
    HALTING,
}

/**
 * Error management strategy
 */
export enum ErrorMode {
    /**
     * Errors are bad
     */
    NORMAL,
    /**
     * Warnings are bad too
     */
    PEDANTIC,
}

/**
 * An Error with respect to translation.
 * The static methods are commonly used invocations that simplify the creation of errors.
 */
export class TranslationIssue {
    /**
     * Creating an error. Prefer using {@link TranslationError.createIssue} or other such static methods if there is a parser node to help.
     * @param msg Message
     * @param line Line of origin of error (starting)
     * @param charPositionInLine character position of error (starting)
     * @param severity Severity of error
     * @param type Type of error
     * @param lineEnd Line of origin of error (end)
     * @param charPositionInLineEnd character position of error (end)
     */
    constructor(
        public msg: string,
        public line?: number,
        public charPositionInLine?: number,
        public severity: ErrorSeverity = ErrorSeverity.ERROR,
        public type: ErrorType = ErrorType.SYNTAX,
        public lineEnd?: number,
        public charPositionInLineEnd?: number
    ) {}

    /**
     * Create a semantic error
     * @param msg Message
     * @param cause Cause of the error
     * @returns
     */
    static semanticErrorToken(msg: string, cause?: ParserRuleContext) {
        return new TranslationIssue(
            msg,
            cause?._start.line,
            cause?._start.charPositionInLine,
            ErrorSeverity.ERROR,
            ErrorType.SEMANTIC,
            cause?._stop?.line,
            cause?._stop?.charPositionInLine
        );
    }
    static semanticWarningToken(msg: string, cause?: ParserRuleContext) {
        return new TranslationIssue(
            msg,
            cause?._start.line,
            cause?._start.charPositionInLine,
            ErrorSeverity.WARNING,
            ErrorType.SEMANTIC,
            cause?._stop?.line,
            cause?._stop?.charPositionInLine
        );
    }
    static semanticInfoToken(msg: string, cause?: ParserRuleContext) {
        return new TranslationIssue(
            msg,
            cause?._start.line,
            cause?._start.charPositionInLine,
            ErrorSeverity.INFO,
            ErrorType.SEMANTIC,
            cause?._stop?.line,
            cause?._stop?.charPositionInLine
        );
    }
    /**
     * Create an issue - Warning/Error/Info
     * @param msg Message
     * @param et Error Type
     * @param es Severity of the error
     * @param cause An optional cause (Can be taken from the a parser node)
     * @returns
     */
    static createIssue(msg: string, et: ErrorType, es: ErrorSeverity, cause?: ParserRuleContext) {
        return new TranslationIssue(
            msg,
            cause?._start.line,
            cause?._start.charPositionInLine,
            es,
            et,
            cause?._stop?.line,
            cause?._stop?.charPositionInLine
        );
    }
    /**
     * Creating an error
     * @param msg
     * @param et
     * @param cause
     * @returns
     */
    static generalErrorToken(msg: string, et: ErrorType, cause?: ParserRuleContext) {
        return new TranslationIssue(
            msg,
            cause?._start.line,
            cause?._start.charPositionInLine,
            ErrorSeverity.ERROR,
            et,
            cause?._stop?.line,
            cause?._stop?.charPositionInLine
        );
    }
}

/**
 * A Translation error that handles these issues
 */
export class ContexedTranslationError extends TranslationIssue {
    /**
     * Location of error
     */
    ctx: string;
    constructor(_ctx: string, te: TranslationIssue) {
        super(te.msg, te.line, te.charPositionInLine, te.severity, te.type, te.lineEnd, te.charPositionInLineEnd);
        this.ctx = _ctx;
    }
}

export type LexerOrParserSymbol = number | Token;

/**
 * Error management system.
 * Note that the file reporting may feel a bit messy, might have to discuss
 */
export class ErrorManager {
    protected _errors: ContexedTranslationError[];

    /**
     * Stack represents the error for the file in question.
     *
     * How is this used?
     * Each file is an AST -> Pushing an popping a context as you _start and stop generating an AST should be good.
     */
    public errorContext: string[] = [];

    constructor(protected errorMode: ErrorMode) {
        this._errors = [];
    }
    public get issues() {
        return this._errors;
    }
    /**
     * Get an error listener instance bound to this errormanager.
     * Note: They are bound via closures so it can be relocated freely
     */
    newErrorListener() {
        const errors = this;
        const listener: ANTLRErrorListener<LexerOrParserSymbol> = {
            syntaxError(rec, offendingSymbol, line, charPositionInLine, msg, e) {
                errors.push(new TranslationIssue(msg, line, charPositionInLine));
            },
        };
        return listener;
    }

    pushFile(f: string) {
        return this.errorContext.push(f);
    }
    popFile() {
        return this.errorContext.pop();
    }
    get contextTop() {
        return this.errorContext[this.errorContext.length - 1];
    }

    /**
     * Static method initializing a generic file listener
     * @returns that is standard Errormanager
     */
    static get normal() {
        return new ErrorManager(ErrorMode.NORMAL);
    }
    /**
     *
     * @returns Pedantic errormanager instance
     */
    static get pedantic() {
        return new ErrorManager(ErrorMode.PEDANTIC);
    }

    /**
     * Halt with given error
     * @param e
     */
    halt(e?: TranslationIssue): never {
        if (e !== undefined) {
            this._errors.push(new ContexedTranslationError(this.contextTop, e));
        }
        throw new HaltError();
    }

    push(e: TranslationIssue): void {
        this._errors.push(new ContexedTranslationError(this.contextTop, e));
        if (e.type === ErrorType.HALTING) {
            this.halt();
        }
    }
}

/**
 * Tag class
 * This class is useful for halting when any error occurs
 */
export class HaltError extends Error {}
