// import { assert } from 'console';
import { VariableTable, VariableVisibility } from './VariableTable';
import { assert } from 'chai';
import { Action } from '../data/Action';
describe('Variable Table Tests', function () {
    const varTable = new VariableTable();
    // capture this for use -> identical to const aps = VariableTable.actionPrependString
    const { actionPrependString: aps } = VariableTable;

    /**
     * Reuse this for first two tests
     */
    const firstVarName = aps + '0';
    const secVarName = aps + '1';

    /**
     * Hook for running code before tests
     */
    this.beforeAll(async () => {
        // console.log('test output');
    });

    it('Correctly claims action identifier', async () => {
        const aname1 = varTable.claimActionIdentifier();
        assert.strictEqual(aname1, firstVarName);
    });

    it('Action identifier does not exist now', async () => {
        assert.isFalse(varTable.exists(firstVarName));
    });

    it('Can add a action-like variable', async () => {
        const ret = varTable.add(firstVarName, { data: new Action(), vis: VariableVisibility.DEFAULT });
        assert.isTrue(ret);
        assert.isTrue(varTable.exists(firstVarName));
    });

    it('Can claim another action variable, which is now the next one', async () => {
        const aname2 = varTable.claimActionIdentifier();
        assert.strictEqual(aname2, secVarName);
    });
});
