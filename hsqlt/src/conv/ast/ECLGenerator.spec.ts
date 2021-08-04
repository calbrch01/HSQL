import { assert } from 'chai';
import { MapOutput } from '../../managers/OutputManagers';
import { TaskManager } from '../../managers/TaskManager';
import { ErrorSeverity } from '../../managers/ErrorManager';
import { FSFileProvider, MemFileProvider } from '../../misc/file/FileProvider';
import { FileType } from '../../misc/file/FileType';

// Note that this test uses a.dhsql from the root folder
// TODO this is too general of a test. It might make sense to remake this, but by using only ECLGenerator.
describe('ECL Generation', function () {
    it('Simple Generation', async () => {
        const opm = new MapOutput();
        const tm = new TaskManager('mod.hsql', false, opm);
        tm.addFileProviders(
            new MemFileProvider(
                new Map([['mod.hsql', { content: 'import a;output a.t1;', type: FileType.HSQL }]]),
                true
            ),
            new FSFileProvider(undefined, true, false)
        );
        const { ast } = tm.generateAST();
        // const eclgenerator = new ECLGen(tm.errorManager);
        await tm.generateOutputs();
        assert.lengthOf(
            tm.errorManager.issues.filter(e => e.severity === ErrorSeverity.ERROR),
            0,
            'There should have been no errors'
        );
        assert.strictEqual(opm.fileMap.get('mod.ecl'), `IMPORT a;\nOUTPUT(a.t1);`);

        // console.log(`opm`, opm);
    });
    it('Generation for alias', async () => {
        const opm = new MapOutput();
        const tm = new TaskManager('mod.hsql', false, opm);
        tm.addFileProviders(
            new MemFileProvider(
                new Map([['mod.hsql', { content: 'import a as bcd;output bcd.t1;', type: FileType.HSQL }]]),
                true
            ),
            new FSFileProvider(undefined, true, false)
        );

        const { ast } = tm.generateAST();
        // const eclgenerator = new ECLGen(tm.errorManager);
        await tm.generateOutputs();
        assert.lengthOf(
            tm.errorManager.issues.filter(e => e.severity === ErrorSeverity.ERROR),
            0,
            'There should have been no errors'
        );
        assert.strictEqual(opm.fileMap.get('mod.ecl'), `IMPORT a as bcd;\nOUTPUT(bcd.t1);`);
        // console.log(`opm`, opm);
    });
    it('generation for assignment', async () => {
        const opm = new MapOutput();
        const tm = new TaskManager('mod.hsql', false, opm);
        tm.addFileProviders(
            new MemFileProvider(
                new Map([['mod.hsql', { content: 'import a as bcd;ab=bcd.t1;output ab;', type: FileType.HSQL }]]),
                true
            ),
            new FSFileProvider(undefined, true, false)
        );

        const { ast } = tm.generateAST();
        // const eclgenerator = new ECLGen(tm.errorManager);
        await tm.generateOutputs();
        assert.lengthOf(
            tm.errorManager.issues.filter(e => e.severity === ErrorSeverity.ERROR),
            0,
            'There should have been no errors'
        );
        assert.strictEqual(opm.fileMap.get('mod.ecl'), `IMPORT a as bcd;\nab := bcd.t1;\nOUTPUT(ab);`);
    });
    describe('generation for select', function () {
        it('basic selects');
        it('query in query');
    });
});
