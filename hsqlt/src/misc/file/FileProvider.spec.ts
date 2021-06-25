import { FSFileProvider, MemFileMap } from './FileProvider';
import { FileType } from './FileType';
import path from 'path';
import { assert } from 'chai';
describe('File Provider', function () {
    it('memfile provider', async () => {
        const mfp = new MemFileMap();
        mfp.add('ab/bc/cd.ecl', FileType.ECL, 'hi');
        mfp.add('ab/abf.ecl', FileType.ECL, 'hi');
        // mfp.add('../ab', FileType.ECL, 'hi');
        throw 'pending';
    });
    it('fsfileprovider', async () => {
        const ffp = new FSFileProvider();

        const y = ffp.stat('input.hsql');
        const y1 = ffp.stat('input.HSQL');
        const y2 = ffp.stat('inpUt.HSQL');
        assert.isTrue(y.found);
        assert.isTrue(y1.found);
        assert.isTrue(y2.found);
        // throw 'pending';
        const z = ffp.stat('not.found');
        assert.isFalse(z.found);
    });
});
