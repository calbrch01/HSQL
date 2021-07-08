import { assert } from 'chai';
import 'mocha';
import { ErrorManager, ErrorSeverity, HaltError, TranslationIssue } from './ErrorManager';

describe('Error manager tests', function () {
    it('context should world', async () => {
        const em = ErrorManager.normal;
        em.pushFile('foo');
        assert.strictEqual(em.fileContextTop, 'foo');
        em.pushFile('bar');
        assert.strictEqual(em.fileContextTop, 'bar');
        em.popFile();
        assert.strictEqual(em.fileContextTop, 'foo');
    });
    it('halting should work', async () => {
        const em = ErrorManager.normal;
        try {
            em.halt();
            // we should never reach this part of code optimistically
            assert.fail('Theoretically unreachable code reached');
        } catch (e) {
            assert.instanceOf(e, HaltError);
        }
    });

    it('Info in pedantic mode should not halt', async () => {
        const em = ErrorManager.pedantic;
        em.pushFile('test context');
        try {
            em.push(new TranslationIssue('foo', undefined, undefined, ErrorSeverity.INFO));
            // we should never reach this part of code optimistically
        } catch (e) {
            assert.fail('Should not halt');
        }
        assert.lengthOf(em.issues, 1);
    });
});
