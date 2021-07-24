import { assert } from 'chai';
import 'mocha';
import { ErrorManager, ErrorSeverity, HaltError, TranslationIssue } from './ErrorManager';

describe('Error manager tests', function () {
    it('Contexts', async () => {
        const em = ErrorManager.normal;
        //push a context
        em.pushFile('foo');
        assert.strictEqual(em.fileContextTop, 'foo');
        // push an error in this `foo` context
        em.push(new TranslationIssue('1st issue', undefined, undefined, ErrorSeverity.INFO));
        //push a new context
        em.pushFile('bar');
        // push an error in this foo->bar context
        em.push(new TranslationIssue('2nd issue', undefined, undefined, ErrorSeverity.INFO));
        assert.strictEqual(em.fileContextTop, 'bar');
        em.popFile();
        assert.strictEqual(em.fileContextTop, 'foo');

        //lets check is there are 2 issues
        assert.lengthOf(em.issues, 2);
        // now lets check if the 2 issues had their contexts perfectly saved
        const [issue1, issue2] = em.issues;
        //1st issue tests
        assert.strictEqual(issue1.ctx, 'foo');
        assert.strictEqual(issue1.msg, '1st issue');
        //2nd issue tests
        assert.strictEqual(issue2.ctx, 'bar');
        assert.strictEqual(issue2.msg, '2nd issue');
    });
    it('Halting', async () => {
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
