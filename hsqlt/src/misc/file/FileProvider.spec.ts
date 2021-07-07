import { FSFileProvider, MemFileProvider } from './FileProvider';
import { FileType } from './FileType';
import path from 'path';
import { assert } from 'chai';
describe('File Provider', function () {
    it('memfile provider', async () => {
        const mfp = new MemFileProvider();
        mfp.add('ab/bc/cd.ecl', FileType.ECL, 'hi');
        mfp.add('ab/abf.ecl', FileType.ECL, 'hi');
        // mfp.add('../ab', FileType.ECL, 'hi');
        // throw 'pending';
        assert.isTrue(mfp.stat('AB/BC/CD.ecl').found);
        assert.isTrue(mfp.stat('ab/abf.ecl').found);
        //nonexistest cannot be found
        assert.isFalse(mfp.stat('cd/abf.ecl').found);
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

        const ffp2 = new FSFileProvider('samples');
        const z1 = ffp2.stat('test.hsql');
        const z2 = ffp2.stat('input.hsql');
        assert.isFalse(z2.found);
        assert.isTrue(z1.found);
        assert.strictEqual(z1.type, FileType.HSQL);

        const z3 = ffp2.read('test.hsql');
        assert.strictEqual(z3, "p = 'hello';");
    });
});
