import { assert } from 'chai';
import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import { ECLCCInterface } from '../misc/eclcc/ECLCCInterfacing';
import { FSFileProvider } from '../misc/file/FileProvider';
import { ErrorManager } from './ErrorManager';
import { FSManager } from './FSManager';

describe('FSManager', function () {
    it('basics', async () => {
        const em = ErrorManager.normal;
        const fsm = new FSManager(em);
        const { eclLibPath } = await new ECLCCInterface(em).getImports();
        assert.exists(eclLibPath);
        for (const importPath of eclLibPath) {
            fsm.addFileManager(new FSFileProvider(importPath, false));
        }
        fsm.addFileManager(new FSFileProvider());

        // const res = fsm.exists(new QualifiedIdentifier('input'));

        // const res2 = fsm.exists(new QualifiedIdentifier('std'));
        assert.isTrue(fsm.exists('input', true));
        assert.isTrue(fsm.exists('std', false));
        assert.isTrue(fsm.exists('sTd', false));
        assert.isFalse(fsm.exists('aaa', true));
        assert.isFalse(fsm.exists('tsconfig', true));
    });
    it('Offset', async () => {
        const em = ErrorManager.normal;
        const fsm = new FSManager(em);
        const { eclLibPath } = await new ECLCCInterface(em).getImports();
        assert.exists(eclLibPath);
        for (const importPath of eclLibPath) {
            fsm.addFileManager(new FSFileProvider(importPath, false));
        }
        fsm.addFileManager(new FSFileProvider('samples'));

        // const res = fsm.exists(new QualifiedIdentifier('input'));

        // const res2 = fsm.exists(new QualifiedIdentifier('std'));
        assert.isFalse(fsm.exists('input', true));
        assert.isTrue(fsm.exists('std', false));
        assert.isTrue(fsm.exists('sTd', false));
        assert.isFalse(fsm.exists('aaa', true));
        assert.isFalse(fsm.exists('tsconfig', true));
        assert.isTrue(fsm.exists('test.hsql', true));
        const { content, realPath, type } = fsm.read('test.hsql', true);
        assert.strictEqual(content, "p = 'hello';");
    });
});
