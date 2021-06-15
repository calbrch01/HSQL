/**
 * Main tests for HSQL
 * @packageDocumentation
 */

import 'mocha';
import { assert } from 'chai';
import path from 'path';
import os from 'os';
import { Readable } from 'stream';
import { execAndGetCode } from './lib';
describe('Grammar generation tests', function () {
    //this test takes a bit of time
    this.timeout(10000);

    /**
     * Path for grammar
     */
    const gpath = path.join(process.cwd(), 'grammar', 'HSQL.g4');

    /**
     * Temporary directory - the OS provides it
     */
    const tmpdir = path.normalize(os.tmpdir());

    it('Grammar must be valid', async () => {
        // generate grammar and put it into a tmp file
        const {
            returnCode,
            // inspect these variables if the tests fail
            stdout: _stdout,
            stderr: _stderr,
        } = await execAndGetCode(`npx antlr4ts -visitor -no-listener ${gpath} -o ${tmpdir}`);
        // the returncode shall be 0 for valid grammar or non-zero for invalid grammar
        assert.strictEqual(returnCode, 0, 'Should have been valid grammar');
    });

    it('Help command in the program', async () => {
        const {
            returnCode,
            // inspect these variables if the tests fail
            stdout: _stdout,
            stderr: _stderr,
        } = await execAndGetCode(`npm run testing-help`);
        assert.strictEqual(returnCode, 0, 'Should have been valid grammar');
    });
});
