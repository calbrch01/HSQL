import { assert } from 'chai';
import { MapOutput } from '../../managers/OutputManagers';
import { TaskManager } from '../../managers/TaskManager';
import { ErrorSeverity } from '../../managers/ErrorManager';

describe('ECL Generation', function () {
    it('Simple Generation', async () => {
        const opm = new MapOutput();
        const tm = new TaskManager('mod', false, new Map([['mod', 'import abc;']]), opm);
        const { ast } = tm.generateAST();
        // const eclgenerator = new ECLGen(tm.errorManager);
        await tm.generateOutputs();
        assert.lengthOf(
            tm.errorManager.issues.filter(e => e.severity === ErrorSeverity.ERROR),
            0,
            'There should have been no errors'
        );
        assert.strictEqual(opm.fileMap.get('mod.ecl'), `IMPORT abc;`);

        // console.log(`opm`, opm);
    });
    it('Generation for alias', async () => {
        const opm = new MapOutput();
        const tm = new TaskManager('mod', false, new Map([['mod', 'import abc as bcd;']]), opm);
        const { ast } = tm.generateAST();
        // const eclgenerator = new ECLGen(tm.errorManager);
        await tm.generateOutputs();
        assert.lengthOf(
            tm.errorManager.issues.filter(e => e.severity === ErrorSeverity.ERROR),
            0,
            'There should have been no errors'
        );
        assert.strictEqual(opm.fileMap.get('mod.ecl'), `IMPORT abc as bcd;`);
        // console.log(`opm`, opm);
    });
    it('generation for assignment', async () => {
        const opm = new MapOutput();
        const tm = new TaskManager('mod', false, new Map([['mod', 'import abc as bcd;a=bcd.t1;']]), opm);
        const { ast } = tm.generateAST();
        // const eclgenerator = new ECLGen(tm.errorManager);
        await tm.generateOutputs();
        assert.lengthOf(
            tm.errorManager.issues.filter(e => e.severity === ErrorSeverity.ERROR),
            0,
            'There should have been no errors'
        );
        assert.strictEqual(opm.fileMap.get('mod.ecl'), `IMPORT abc as bcd;\na := bcd.t1;`);
    });
    describe('generation for select', function () {
        it('basic selects');
        it('query in query');
    });
});
