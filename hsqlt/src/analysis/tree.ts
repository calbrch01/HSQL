import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { HSQLLexer } from '../misc/grammar/HSQLLexer';
import { HSQLParser } from '../misc/grammar/HSQLParser';

/**
 * Obtain a Tree from a readable
 */
export class HSQLTreeFactory {
    // constructor(private readable: IReader) {}

    makeTree(str: string, fn?: string) {
        const charStreams = fn === undefined ? CharStreams.fromString(str) : CharStreams.fromString(str, fn);
        const lexer = new HSQLLexer(charStreams);
        lexer.removeErrorListeners();
        lexer.addErrorListener({
            syntaxError(a, b, c, d, e, g) {
                console.log('woops lexer');
                throw new Error();
            },
        });
        const tokenStreams = new CommonTokenStream(lexer);
        const parser = new HSQLParser(tokenStreams);
        parser.removeErrorListeners();

        parser.addErrorListener({
            syntaxError(a, b, c, d, e, g) {
                console.log('woops parser');
            },
        });
        const tree = parser.program();

        return {
            tree,
            tokenStreams,
            charStreams,
        };
    }
}
