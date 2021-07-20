import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { typeMap } from '../ast/data/base/typeMap';
import { ErrorManager } from '../managers/ErrorManager';
import { FileType } from '../misc/file/FileType';
import { HSQLLexer } from '../misc/grammar/HSQLLexer';
import { DeclarationsContext, HSQLParser, ProgramContext } from '../misc/grammar/HSQLParser';

/**
 * Map what type of type of file is expected to return what type of tree root
 */
export type strReturn = {
    [FileType.HSQL]: ProgramContext;
    [FileType.DHSQL]: DeclarationsContext;
};
/**
 * Obtain a Tree from a readable
 */
export class HSQLTreeFactory {
    constructor(protected errorManager: ErrorManager) {}
    makeTree<T extends keyof strReturn>(str: string, ft: T, fn?: string) {
        const charStreams = fn === undefined ? CharStreams.fromString(str) : CharStreams.fromString(str, fn);
        const lexer = new HSQLLexer(charStreams);

        // extract error listener for use in the scanner and parser
        const errorListener = this.errorManager.newErrorListener();

        // remove the error listener. We want to put our own
        lexer.removeErrorListeners();
        lexer.addErrorListener(errorListener);

        const tokenStreams = new CommonTokenStream(lexer);
        const parser = new HSQLParser(tokenStreams);

        // remove the error listener. We want to put our own
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);

        const tree = (ft === FileType.HSQL ? parser.program() : parser.declarations()) as strReturn[T];

        return {
            tree,
            errorListener,
            tokenStreams,
        };
    }
    // makeDeclarationTree(str:string,fn?:string){
    //     const charStreams = fn === undefined ? CharStreams.fromString(str) : CharStreams.fromString(str, fn);
    //     const lexer = new HSQLLexer(charStreams);

    //     // extract error listener for use in the scanner and parser
    //     const errorListener = this.errorManager.newErrorListener();

    //     // remove the error listener. We want to put our own
    //     lexer.removeErrorListeners();
    //     lexer.addErrorListener(errorListener);

    //     const tokenStreams = new CommonTokenStream(lexer);
    //     const parser = new HSQLParser(tokenStreams);

    //     // remove the error listener. We want to put our own
    //     parser.removeErrorListeners();
    //     parser.addErrorListener(errorListener);
    //     const tree = parser.declarations();

    //     return {
    //         tree,
    //         errorListener,
    //         tokenStreams,
    //         charStreams,
    //     };
    // }
}
