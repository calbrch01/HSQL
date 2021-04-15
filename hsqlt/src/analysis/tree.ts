import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ErrorManager } from '../misc/error/Error';
import { HSQLLexer } from '../misc/grammar/HSQLLexer';
import { HSQLParser } from '../misc/grammar/HSQLParser';

/**
 * Obtain a Tree from a readable
 */
export class HSQLTreeFactory {
    constructor(protected errorManager: ErrorManager) {}
    makeTree(str: string, fn?: string) {
        const charStreams = fn === undefined ? CharStreams.fromString(str) : CharStreams.fromString(str, fn);
        const lexer = new HSQLLexer(charStreams);
        const errorListener = this.errorManager.newErrorListener();

        // remove the error listener. We want to put our own
        lexer.removeErrorListeners();
        lexer.addErrorListener(errorListener);

        const tokenStreams = new CommonTokenStream(lexer);
        const parser = new HSQLParser(tokenStreams);

        // remove the error listener. We want to put our own
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);
        const tree = parser.program();

        return {
            tree,
            errorListener,
            tokenStreams,
            charStreams,
        };
    }
}
