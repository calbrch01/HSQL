import 'mocha';
import { assert } from 'chai';
import { ReadingManager } from './ReadingManager';
import { FileType } from '../misc/file/FileType';
import { ErrorManager, HaltError } from './ErrorManager';
import path from 'path';
// FIXME add other files
describe('Extension tests', function () {
    const { DHSQL, OTHER, ECL, HSQL } = FileType;
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
            const ft = feh.fh.getFileType(fn);
            assert.strictEqual(
                ft,
                answer,
                `Expected file ${fn} to have a filetype of ${FileType[answer]}, got ${FileType[ft]} instead`
            );
        }
    });
    describe('Extension conversion', function () {
        const feh = new ReadingManager(ErrorManager.pedantic);
        const q1 = 'hello.ecl';
        const q2 = path.join('foo', 'bar.hsql');
        const q3 = 'foobar.temp.txt';

        it('ENUM based', async () => {
            assert.strictEqual(feh.fh.changeExtension(q1, FileType.ECL), q1);
            assert.strictEqual(feh.fh.changeExtension(q2, FileType.ECL), path.join('foo', 'bar.ecl'));
            assert.strictEqual(feh.fh.changeExtension(q3, FileType.ECL), 'foobar.temp.ecl');
        });
        it('STRING based', async () => {
            assert.strictEqual(feh.fh.changeExtension(q1, '.ecl'), q1);
            assert.strictEqual(feh.fh.changeExtension(q1, '.txt'), `hello.txt`);
        });
    });
    it('should error out selecting OTHER extension', async () => {
        const feh = new ReadingManager(ErrorManager.pedantic);
        try {
            feh.fh.changeExtension('./hello.ecl', FileType.OTHER);
            // ideally if correct it should throw an error right above, we shouldnt be able to reach this place
            throw Error('Invalid ');
        } catch (e) {
            assert.instanceOf(e, HaltError);
        }
    });
    it('should error on unbacked and unavailable file', async () => {
        const em = ErrorManager.normal;
        const rm = new ReadingManager(em);
        try {
            rm.readSync('hello');
            assert.fail('unreachable code');
        } catch (e) {
            assert.instanceOf(e, HaltError, 'Should have been a halterror');
        }
    });
    it('should fall back to disk on unavailable file', async () => {
        const em = ErrorManager.normal;
        const rm = new ReadingManager(em, new Map(), true);

        // this file is part of our repo, guaranteed to exist
        const x = rm.readSync('input.hsql');

        assert.typeOf(x, 'string');
    });

    it('should resolve hsql');
    it('should resolve ecl');
});
