import { assert } from 'chai';
import { StringReader } from '../../misc/readers';
import { HSQLTreeFactory } from '../tree';
import { ASTGenerator } from './ASTGenerator';

describe('AST Generator Visitor', function () {
    // this.timeout('100s');
    it('Simple Import statement', async () => {
        const treestuff = new HSQLTreeFactory(new StringReader('import abc;'));
        const { tree } = await treestuff.getResults();
        const v = new ASTGenerator();
        const ast = v.getAST(tree);

        //assertions
        assert.lengthOf(ast.stmts, 1, 'Expect one statement');
        assert.strictEqual(ast.variableManager.vars.size, 1, 'expect one data only');
        assert.isTrue(ast.variableManager.exists('abc'));
    });

    it('Two different import statements', async () => {
        const treestuff = new HSQLTreeFactory(new StringReader('import abc;import bcd as cde;'));
        const { tree } = await treestuff.getResults();
        const v = new ASTGenerator();
        const ast = v.getAST(tree);

        //assertions
        assert.lengthOf(ast.stmts, 2, 'Expect one statement');
        assert.strictEqual(ast.variableManager.vars.size, 2, 'expect two modules available only');

        assert.isTrue(ast.variableManager.exists('abc'));
        assert.isTrue(ast.variableManager.exists('cde'));
        assert.isFalse(ast.variableManager.exists('bcd'));

        // ast.variableManager.exists('cde');
    });
});
