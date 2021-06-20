import { assert, AssertionError } from 'chai';
import { ErrorManager } from '../../managers/ErrorManager';
import { ECLCCInterface } from './ECLCCInterfacing';

describe('ECLCC working', function () {
    const em = ErrorManager.normal;
    const x = new ECLCCInterface(em);
    it('can get includes', async function () {
        const { eclLibPath } = await x.getImports();
        // console.log(res);
        assert.exists(eclLibPath);
        assert.isArray(eclLibPath);
        // when we can
        // assert.isAtLeast(res.eclLibPath.length, 1);
    });
});
