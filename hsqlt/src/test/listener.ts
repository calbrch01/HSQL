import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { HSQLLexer } from '../misc/grammar/HSQLLexer';
import { HSQLListener } from '../misc/grammar/HSQLListener';
import { HSQLParser, ProgramContext, StmtContext } from '../misc/grammar/HSQLParser';

export class xListener implements HSQLListener {
    enterProgram(ctx: ProgramContext) {
        console.log('hello');
    }
    enterStmt(ctx: StmtContext) {
        console.log('HELLAJLFKAHGLAG');
    }

    visitTerminal = undefined;
}

describe('Miscellaneous antlr', function () {
    it('listeners', async () => {
        let inputStream = CharStreams.fromString('import abc;');
        let lexer = new HSQLLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new HSQLParser(tokenStream);
        const tree = parser.program();
        const l = new xListener();
        ParseTreeWalker.DEFAULT.walk(l, tree);
    });
});
