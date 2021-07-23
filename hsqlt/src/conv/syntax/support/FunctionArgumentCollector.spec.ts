import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { assert } from 'chai';
import { ErrorManager } from '../../../managers/ErrorManager';
import { HSQLLexer } from '../../../misc/grammar/HSQLLexer';
import { HSQLParser } from '../../../misc/grammar/HSQLParser';
import { FunctionArgumentCollector } from './FunctionArgumentCollector';

describe('FunctionArgumentCollector', function () {
    it('basic', async () => {
        const charStreams = CharStreams.fromString('integer a,string b,layout b c');
        const lexer = new HSQLLexer(charStreams);
        const tokenStreams = new CommonTokenStream(lexer);
        const parser = new HSQLParser(tokenStreams);
        const tree = parser.functionArgs();

        // const em = ErrorManager.normal;
        const visitor = new FunctionArgumentCollector();
        const res = visitor.visit(tree);
        assert.lengthOf(res, 3);
        // void 0;
    });
});
