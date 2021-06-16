import { assert, AssertionError } from 'chai';
import { ErrorManager } from '../../managers/ErrorManager';
import { ECLCCInterface } from './ECLCCInterfacing';

describe('ECLCC working', function () {
    const em = ErrorManager.normal;
    const x = new ECLCCInterface(em);
    it('can get includes', async function () {
        const res = await x.getImports();
        console.log(res);
        assert.exists(res.eclLibPath);
        assert.isArray(res.eclLibPath);
        assert.isAtLeast(res.eclLibPath.length, 1);
    });
});
