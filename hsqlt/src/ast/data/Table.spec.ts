import { assert } from 'chai';

import { ErrorManager } from '../../managers/ErrorManager';
import { Col } from './Col';
import { dtype } from './Singular';
import { AnyTable, Table } from './Table';

describe('Tables', function () {
    describe('Combining', function () {
        it('Combining - table and table', async () => {
            const em = ErrorManager.normal;
            const t1 = new Table(new Map([['c1', new Col(dtype.DECIMAL)]]));
            const t2 = new Table(new Map([['c2', new Col(dtype.DECIMAL)]]));

            const t3 = Table.combine(em, undefined, undefined, t1, t2);
            assert.isTrue(t3.has('c1'));
            assert.isTrue(t3.has('c2'));
            assert.isFalse(t3.has('c3'));

            assert.isFalse(t3.anyized);
        });
        it('combining - table + any', async () => {
            const em = ErrorManager.normal;
            const t1 = new Table(new Map([['c1', new Col(dtype.DECIMAL)]]));
            const t2 = new AnyTable();

            const t3 = Table.combine(em, undefined, undefined, t1, t2);

            assert.isTrue(t3.anyized);
        });
    });
});
