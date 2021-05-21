import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { assert } from 'chai';
import { HSQLLexer } from '../grammar/HSQLLexer';
import { HSQLParser } from '../grammar/HSQLParser';
import { QualifiedIdentifier } from './QualifiedIdentifier';

describe('Qualified Identifier tests', function () {
    const identifierSet = ['a', 'c', 'b'];
    const identifierString = identifierSet.join('.'); //a.c.b

    const overIdentifierSet = ['%', 'a', 'c', 'b'];
    const overIdentifierString = overIdentifierSet.join('.');
    it('constructor tests', async () => {
        const qid = new QualifiedIdentifier(...identifierSet);
        //assert that the members created are the same
        assert.sameDeepOrderedMembers(qid.qidentifier, identifierSet);
    });
    it('From dotted notation', async () => {
        const qid = QualifiedIdentifier.fromString(identifierString);
        //assert that it stored a.c.b indeed
        assert.sameDeepOrderedMembers(qid.qidentifier, identifierSet);
    });

    it('From grammar -> definition', async () => {
        const chars = CharStreams.fromString(identifierString);
        const lexer = new HSQLLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new HSQLParser(tokens);
        const treeRoot = parser.definition();

        const qid = QualifiedIdentifier.fromGrammar(treeRoot);

        assert.sameDeepOrderedMembers(qid.qidentifier, identifierSet);
    });

    it('From grammar -> import stmt', async () => {
        const chars = CharStreams.fromString(overIdentifierString);
        const lexer = new HSQLLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new HSQLParser(tokens);
        const treeRoot = parser.overDefinition();

        const qid = QualifiedIdentifier.fromOverDefinition(treeRoot);

        const newOrderedSet = [...overIdentifierSet];
        newOrderedSet[0] = '$';
        assert.sameDeepOrderedMembers(qid.qidentifier, newOrderedSet);
    });

    it('to String', async () => {
        const qid = new QualifiedIdentifier(...identifierSet);
        assert.strictEqual(identifierString, qid.toString());
    });
});
