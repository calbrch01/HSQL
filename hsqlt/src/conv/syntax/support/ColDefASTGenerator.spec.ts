import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { assert } from 'chai';
import { Col } from '../../../ast/data/Col';
import { SingularDataType } from '../../../misc/ast/SingularDataType';
import { HSQLLexer } from '../../../misc/grammar/HSQLLexer';
import { HSQLParser } from '../../../misc/grammar/HSQLParser';
import { ColDefsASTGenerator, ColTuple } from './ColDefASTGenerator';

describe('Column Definition', function () {
    it('can get', async function () {
        const charStreams = CharStreams.fromString('integer a,string b');
        const lexer = new HSQLLexer(charStreams);
        const tokenStreams = new CommonTokenStream(lexer);
        const parser = new HSQLParser(tokenStreams);
        const tree = parser.colDefs();

        const visitor = new ColDefsASTGenerator();
        const res = visitor.visit(tree);
        // console.debug(res);
        assert.deepEqual(res, [
            ['a', new Col(SingularDataType.INTEGER)],
            ['b', new Col(SingularDataType.STRING)],
        ] as ColTuple[]);
    });
    it('can work with layouts', async function () {
        const charStreams = CharStreams.fromString('integer a,string b');
        const lexer = new HSQLLexer(charStreams);
        const tokenStreams = new CommonTokenStream(lexer);
        const parser = new HSQLParser(tokenStreams);
        const tree = parser.layoutContent();

        const visitor = new ColDefsASTGenerator();
        const res = visitor.visit(tree);
        // console.debug(res);
        assert.deepEqual(res, [
            ['a', new Col(SingularDataType.INTEGER)],
            ['b', new Col(SingularDataType.STRING)],
        ] as ColTuple[]);
    });
});
