import { assert } from 'chai';
import { TagStore } from './tagstore';

describe('TagStore', function () {
    it('Should work', async function () {
        const ts = new TagStore();
        ts.set('hi', 2);
        assert.equal(ts.getNum('hi'), 2);
        assert.isUndefined(ts.getNum('not hi'));
    });
    it('should not return wrongly typed values', async function () {
        const ts = new TagStore();
        ts.set('1', 2);
        ts.set('2', 'hi');
        ts.set('3', true);

        assert.isUndefined(ts.getString('1'));
        assert.isUndefined(ts.getBool('1'));

        assert.isUndefined(ts.getNum('2'));
        assert.isUndefined(ts.getBool('2'));

        assert.isUndefined(ts.getNum('3'));
        assert.isUndefined(ts.getString('3'));
    });
    it('should be able to clear all data values', async function () {
        const ts = new TagStore();
        ts.set('1', 2);
        ts.set('2', 'hi');
        ts.set('3', true);

        assert.strictEqual(ts.getNum('1'), 2);
        assert.strictEqual(ts.getString('2'), 'hi');
        assert.strictEqual(ts.getBool('3'), true);

        ts.clear();

        assert.isUndefined(ts.getNum('1'));
        assert.isUndefined(ts.getString('2'));
        assert.isUndefined(ts.getBool('3'));
    });
});
