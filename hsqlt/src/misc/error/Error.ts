import { ANTLRErrorListener, BailErrorStrategy, RecognitionException, Recognizer, Token } from 'antlr4ts';
// export enum ErrorType {
//     SETUP,
//     IO,
//     SYNTAX,
//     SEMANTIC,
//     OTHER,
//     /**
//      * This should never occur
//      */
//     OTHERWORDLY,
// }

export enum ErrorMode {
    /**
     * Only stop on unrecoverable errors
     */
    STEAMROLL,
    /**
     * Stop with errors
     */
    NORMAL,
    /**
     * Stop with warnings
     */
    PEDANTIC,
}
export interface TranslationError {
    line: number;
    charPositionInLine: number;
    message: string;
}

export class SyntaxError implements TranslationError {
    constructor(public line: number, public charPositionInLine: number, public message: string) {}
}

export class SemanticError implements TranslationError {
    constructor(public line: number, public charPositionInLine: number, public message: string) {}
}

export type LexerOrParserSymbol = number | Token;
export class ErrorManager {
    protected _errors: TranslationError[];
    constructor(protected errorMode: ErrorMode) {
        this._errors = [];
    }
    /**
     * Get an error listener instance bound to this errormanager
     */
    get ErrorListener() {
        const errors = this._errors;
        const listener: ANTLRErrorListener<LexerOrParserSymbol> = {
            syntaxError(rec, offendingSymbol, line, charPositionInLine, msg, e) {
                errors.push(new SyntaxError(line, charPositionInLine, msg));
            },
        };
        return listener;
    }
}
