import { assert } from 'chai';
import { ECLCode } from './ECLCode';
describe('ECL Code class', () => {
    it('ECL code is represented', async () => {
        const code = new ECLCode('import abc');
        const codeString = code.toString();
        assert.strictEqual(codeString, 'import abc;', 'The semicolon should have been inserted');
    });
    it('ECL code is represented (Skipping semicolons)', async () => {
        const code = new ECLCode('import abc', false);
        const codeString = code.toString();
        assert.strictEqual(codeString, 'import abc', 'The semicolon should have not been inserted');
    });

    it('Cover code works as intended', async () => {
        const code = new ECLCode('5', true);
        const code1 = code.newCoverCode('OUTPUT(', ')', true);
        const code2 = code.newCoverCode('OUTPUT(', ')', false);

        assert.strictEqual(code1.toString(), 'OUTPUT(5;);');
        assert.strictEqual(code2.toString(), 'OUTPUT(5);');
    });

    it('Mutability', () => {
        const code = new ECLCode('5');
        const code1 = code.newCoverCode('OUTPUT(', ')', false);
        assert.strictEqual(code.toString(), '5;', 'Initial string should not be changed');
        assert.strictEqual(code1.toString(), 'OUTPUT(5);', 'Initial cover code');

        code1.coverCode('return ', '', false, true);
        assert.strictEqual(code1.toString(), 'return OUTPUT(5);');
        // code1.coverCode;
    });
});
