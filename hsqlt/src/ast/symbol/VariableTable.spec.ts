import { DataMetaData, DataMetaDataType, VariableTable, VariableVisibility } from './VariableTable';
import { assert } from 'chai';
import { Action } from '../data/Action';
import { dtype, Singular } from '../data/Singular';
import { Layout } from '../data/Layout';
import { Col } from '../data/Col';
import { Table } from '../data/Table';
import { Module } from '../data/Module';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
describe('Variable Table Tests', function () {
    const varTable = new VariableTable();
    // capture this for use -> identical to const aps = VariableTable.actionPrependString
    const { actionPrependString: aps } = VariableTable;

    /**
     * Reuse this for first two tests
     */
    const firstVarName = aps + '0';
    const secVarName = aps + '1';

    it('Correctly claims action identifier', async () => {
        const aname1 = varTable.nextClaimableActionIdentifier();
        assert.strictEqual(aname1, firstVarName);
    });

    it('Action identifier does not exist now', async () => {
        assert.isFalse(varTable.exists(firstVarName));
    });

    it('Can add a action-like variable', async () => {
        const ret = varTable.add(firstVarName, DataMetaData(new Action(), VariableVisibility.DEFAULT));
        assert.isTrue(ret);
        assert.isTrue(varTable.exists(firstVarName));
    });

    it('Can claim another action variable, which is now the next one', async () => {
        const aname2 = varTable.nextClaimableActionIdentifier();
        assert.strictEqual(aname2, secVarName);
    });

    it('module-table resolves', async () => {
        const col = new Col(dtype.DECIMAL);
        const table = new Table(new Map([['c1', col]]));
        const module = new Module(new Map([['t1', table]]));
        const x = new VariableTable([new Map([['m1', DataMetaData(module, VariableVisibility.DEFAULT)]])]);
        const res = x.resolve(new QualifiedIdentifier('m1', 't1', 'c1'));
        assert.strictEqual(col, res);

        const res2 = x.resolve(new QualifiedIdentifier('m1', 't2', 'c1'));
        assert.isUndefined(res2);
    });

    it('contexts', async () => {
        // const x = varTable.get(secVarName);
        // assert.instanceOf(x?.data, Action); // exists and is instance of at one go

        //push a new map, shadowing the old variable -> although note that ECL does not do this often. This will be prevented by the add() function preventing dupes
        varTable.pushScope();
        assert.isFalse(varTable.exists('hello'), 'should not exist before');
        const layoutObj = new Layout();
        varTable.add('hello', DataMetaData(layoutObj, VariableVisibility.DEFAULT));
        assert.isTrue(varTable.exists('hello'), 'should exist during');
        const x = varTable.get('hello');
        assert.strictEqual(x?.data, layoutObj, 'should be the same instance');
        varTable.popScope();
        assert.isFalse(varTable.exists('hello'), 'should not exist after pop');
    });
});
