import { assert } from 'chai';
import { ErrorManager } from '../../misc/error/Error';
import { ReadingManager } from '../../misc/ReadingManager';
import { HSQLTreeFactory } from '../tree';
import { ASTGenerator } from './ASTGenerator';

describe('AST Generator Visitor', function () {
    // this.timeout('100s');
    it('Simple Import statement', async () => {
        const treestuff = new HSQLTreeFactory();
        const { tree } = treestuff.makeTree('import abc;');

        const readingManager = new ReadingManager(ErrorManager.normal);
        const v = new ASTGenerator(readingManager);
        const ast = v.getAST(tree);

        //assertions
        assert.lengthOf(ast.stmts, 1, 'Expect one statement');
        assert.strictEqual(ast.variableManager.vars.size, 1, 'expect one data only');
        assert.isTrue(ast.variableManager.exists('abc'));
    });

    it('Two different import statements', async () => {
        const treestuff = new HSQLTreeFactory();

        const { tree } = treestuff.makeTree('import abc;import bcd as cde;');
        const readingManager = new ReadingManager(ErrorManager.normal);
        const v = new ASTGenerator(readingManager);
        const ast = v.getAST(tree);

        //assertions
        assert.lengthOf(ast.stmts, 2, 'Expect one statement');
        assert.strictEqual(ast.variableManager.vars.size, 2, 'expect two modules available only');

        assert.isTrue(ast.variableManager.exists('abc'));
        assert.isTrue(ast.variableManager.exists('cde'));
        assert.isFalse(ast.variableManager.exists('bcd'));

        // ast.variableManager.exists('cde');
    });
    it('what your test is', async () => {
        // data fetching
        //assertions
    });
});
