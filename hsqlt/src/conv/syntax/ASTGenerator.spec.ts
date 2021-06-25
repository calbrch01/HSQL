import { assert } from 'chai';
import { TaskManager } from '../../managers/TaskManager';
import { MemFileProvider } from '../../misc/file/FileProvider';
import { FileType } from '../../misc/file/FileType';

describe('AST Generator Visitor', function () {
    it('Simple Import statement', done => {
        const tm = new TaskManager('mod.hsql', false);
        tm.addFileProviders(
            new MemFileProvider(new Map([['mod.hsql', { content: 'import abc;', type: FileType.HSQL }]]), true)
        );

        const { ast } = tm.generateAST();
        // const treestuff = new HSQLTreeFactory();
        // const { tree } = treestuff.makeTree('import abc;');

        // const readingManager = new ReadingManager(ErrorManager.normal);
        // const v = new ASTGenerator(readingManager);
        // const ast = v.getAST(tree);

        //assertions
        assert.lengthOf(ast.stmts, 1, 'Expect one statement');
        assert.strictEqual(ast.variableManager.vars[0].size, 1, 'expect one data only');
        assert.isTrue(ast.variableManager.exists('abc'));

        done();
    });

    it('Two different import statements', async () => {
        const tm = new TaskManager('mod.hsql', false /* , new Map([['mod.hsql', 'import abc;import bcd as cde;']]) */);
        tm.addFileProviders(
            new MemFileProvider(
                new Map([['mod.hsql', { content: 'import abc;import bcd as cde;', type: FileType.HSQL }]]),
                true
            )
        );

        const { ast } = tm.generateAST();

        // const treestuff = new HSQLTreeFactory();

        // const { tree } = treestuff.makeTree('import abc;import bcd as cde;');
        // const readingManager = new ReadingManager(ErrorManager.normal);
        // const v = new ASTGenerator(readingManager);
        // const ast = v.getAST(tree);

        //assertions
        assert.lengthOf(ast.stmts, 2, 'Expect one statement');
        assert.strictEqual(ast.variableManager.vars[0].size, 2, 'expect two modules available only');

        assert.isTrue(ast.variableManager.exists('abc'));
        assert.isTrue(ast.variableManager.exists('cde'));
        assert.isFalse(ast.variableManager.exists('bcd'));

        // ast.variableManager.exists('cde');
    });
});
