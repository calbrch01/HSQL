/**
 * Main tests for HSQL
 * @packageDocumentation
 */

import 'mocha';
import { assert } from 'chai';
import { exec } from 'child_process';
import path from 'path';
import os from 'os';
import { Readable } from 'stream';
describe('Grammar generation tests', function () {
    //this test takes a bit of time
    this.timeout(5000);

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

type execResult = {
    returnCode: number | null;
    stdout: string;
    stderr: string;
};

/**
 * Run a process and yield the return type
 */
async function execAndGetCode(command: string) {
    return new Promise<execResult>((res, rej) => {
        /*
         * Run this command and reject instantly if it fails.
         * We care about its output & its exit code
         */
        const proc = exec(command, (err, _stdout, _stderr) => {
            if (err) rej(err);
        });
        let stdout = '',
            stderr = '';
        proc.stdout?.on('data', chunk => (stdout += chunk.toString()));
        proc.stderr?.on('data', chunk => (stderr += chunk.toString()));

        /** If we error out, bail and reject */
        proc.on('error', err => {
            rej(err);
        });

        /** If we are done, exit */
        proc.on('exit', returnCode => {
            res({ returnCode, stdout, stderr });
        });

        /** If we close, exit */
        proc.on('close', returnCode => {
            res({ returnCode, stdout, stderr });
        });
    });
}
