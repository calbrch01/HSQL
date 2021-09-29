import { assert } from 'chai';
import { Any } from '../../Any';
import { Layout } from '../../Layout';
import { Table } from '../../Table';
import { EDataType } from '../DataType';
import { isCollection } from './isCollection';
import { isDataType } from './isDataType';

describe('Miscellaneous type tests', function () {
    it('isCollection', async () => {
        const y = new Table();
        assert.isTrue(isCollection(y));
    });

    it('isDataType', async () => {
        const x = new Table();
        const y = new Layout();
        const z = new Any();

        assert.isTrue(isDataType(x, EDataType.TABLE));
        assert.isFalse(isDataType(x, EDataType.LAYOUT));

        assert.isTrue(isDataType(y, EDataType.LAYOUT));
        assert.isFalse(isDataType(y, EDataType.TABLE));

        // any based checks
        assert.isTrue(isDataType(z, EDataType.LAYOUT));
        assert.isTrue(isDataType(z, EDataType.TABLE));

        assert.isFalse(isDataType(z, EDataType.LAYOUT, true));
    });
});
