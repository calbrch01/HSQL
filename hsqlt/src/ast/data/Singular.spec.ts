import { assert } from 'chai';
import { SingularDataTypes, Singular } from './Singular';
import { SingularDataType } from '../../misc/ast/SingularDataType';

describe('Singular values', function () {
    const types: SingularDataTypes[] = ['BOOLEAN', 'INTEGER', 'REAL', 'DECIMAL', 'STRING', 'QSTRING'];

    for (const x of types) {
        it(`For ${x}`, async () => {
            const y = new Singular(SingularDataType[x]);
            assert.strictEqual(y.getDataType(), x);
        });
    }
});
