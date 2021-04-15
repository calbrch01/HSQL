import {
    ANTLRErrorListener,
    BailErrorStrategy,
    ParserRuleContext,
    RecognitionException,
    Recognizer,
    Token,
} from 'antlr4ts';

export enum ErrorSeverity {
    INFO,
    WARNING,
    ERROR,
}
export enum ErrorType {
    SETUP,
    IO,
    SYNTAX,
    SEMANTIC,
    OTHER,
    /**
     * This should never occur
     */
    OTHERWORDLY,
}

export enum ErrorMode {
    /**
     * Stop with errors
     */
    NORMAL,
    /**
     * Stop with warnings
     */
    PEDANTIC,
}

export class TranslationError {
    constructor(
        public msg: string,
        public line?: number,
        public charPositionInLine?: number,
        public severity: ErrorSeverity = ErrorSeverity.ERROR,
        public type: ErrorType = ErrorType.SYNTAX
    ) {}

    static semanticError(msg: string, line?: number, charPositionInLine?: number) {
        return new TranslationError(msg, line, charPositionInLine, ErrorSeverity.ERROR, ErrorType.SEMANTIC);
    }
    static semanticErrorToken(msg: string, cause?: ParserRuleContext) {
        return new TranslationError(
            msg,
            cause?.start.line,
            cause?.start.charPositionInLine,
            ErrorSeverity.ERROR,
            ErrorType.SEMANTIC
        );
    }
}

export type LexerOrParserSymbol = number | Token;

// TODO abort based on error type
export class ErrorManager {
    protected _errors: TranslationError[];
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
        const errors = this._errors;
        const listener: ANTLRErrorListener<LexerOrParserSymbol> = {
            syntaxError(rec, offendingSymbol, line, charPositionInLine, msg, e) {
                errors.push(new TranslationError(msg, line, charPositionInLine));
            },
        };
        return listener;
    }

    /**
     *
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

    push(e: TranslationError) {
        this._errors.push(e);
    }
}
