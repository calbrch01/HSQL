import { assert } from 'chai';
import { Table } from '../../Table';
import { isCollection } from './isCollection';

describe('Miscellaneous type tests', function () {
    it('isCollection', async () => {
        const y = new Table();
        assert.isTrue(isCollection(y));
    });
});
