import { assert } from 'chai';
import { dtype, dtypes, Singular } from './Singular';

describe('Singular values', function () {
    const types: dtypes[] = ['BOOLEAN', 'INTEGER', 'REAL', 'DECIMAL', 'STRING', 'QSTRING'];

    for (const x of types) {
        it(`For ${x}`, async () => {
            const y = new Singular(dtype[x]);
            assert.strictEqual(y.getDataType(), x);
        });
    }
});
