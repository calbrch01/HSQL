import { assert } from 'chai';
import { Table } from '../Table';
import { isCollection } from './misc';

describe('Miscellaneous type tests', function () {
    it('isCollection', async () => {
        const y = new Table();
        assert.isTrue(isCollection(y));
    });
});
