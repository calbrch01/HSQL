import { assert } from 'chai';
import { IncrementingCounter, mapAggregation, SelectAggregationType } from './SelectHelpers';

describe('Select Helpers', function () {
    it('Aggregation mapping', async function () {
        const res1 = mapAggregation(`COUNT`);
        assert.strictEqual(res1, SelectAggregationType.COUNT);
        const res2 = mapAggregation(`count`);
        assert.strictEqual(res2, SelectAggregationType.COUNT);
        const res3 = mapAggregation(`avg`);
        assert.strictEqual(res3, SelectAggregationType.AVG);
        const res4 = mapAggregation(`no`);
        assert.strictEqual(res4, undefined);
    });
    it('increment counting', async function () {
        const counter = new IncrementingCounter();
        assert.strictEqual(counter.count, 0);
        const count1 = counter.getAndIncrement();
        assert.strictEqual(count1, 0);
        const count2 = counter.getAndIncrement();
        assert.strictEqual(count2, 1);
    });
});
