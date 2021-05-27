import 'mocha';
import { assert } from 'chai';
import { FILETYPE, ReadingManager } from './ReadingManager';
import { ErrorManager, HaltError } from './ErrorManager';
import path from 'path';
// FIXME add other files
describe('Extension tests', function () {
    const { DHSQL, OTHER, ECL, HSQL } = FILETYPE;
    const questionAndAnswers = new Map([
        ['./path.ecl', ECL],
        ['./.gitignore', OTHER],
        ['something', OTHER],
        ['something/x.cpp', OTHER],
        ['a.d.hsql', HSQL],
        ['', OTHER],
        ['hello.dhsql', DHSQL],
    ]);
    it('Extensions lookup', async () => {
        const feh = new ReadingManager(ErrorManager.pedantic);

        // conduct the question answer
        for (const [fn, answer] of questionAndAnswers.entries()) {
            const ft = feh.getFileType(fn);
            assert.strictEqual(
                ft,
                answer,
                `Expected file ${fn} to have a filetype of ${FILETYPE[answer]}, got ${FILETYPE[ft]} instead`
            );
        }
    });
    describe('Extension conversion', function () {
        const feh = new ReadingManager(ErrorManager.pedantic);
        const q1 = 'hello.ecl';
        const q2 = path.join('foo', 'bar.hsql');
        const q3 = 'foobar.temp.txt';

        it('ENUM based', async () => {
            assert.strictEqual(feh.changeExtension(q1, FILETYPE.ECL), q1);
            assert.strictEqual(feh.changeExtension(q2, FILETYPE.ECL), path.join('foo', 'bar.ecl'));
            assert.strictEqual(feh.changeExtension(q3, FILETYPE.ECL), 'foobar.temp.ecl');
        });
        it('STRING based', async () => {
            assert.strictEqual(feh.changeExtension(q1, '.ecl'), q1);
            assert.strictEqual(feh.changeExtension(q1, '.txt'), `hello.txt`);
        });
    });
    it('should error out selecting OTHER extension', async () => {
        const feh = new ReadingManager(ErrorManager.pedantic);
        try {
            feh.changeExtension('./hello.ecl', FILETYPE.OTHER);
            // ideally if correct it should throw an error right above, we shouldnt be able to reach this place
            throw Error('Invalid ');
        } catch (e) {
            assert.instanceOf(e, HaltError);
        }
    });
});
