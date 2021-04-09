/**
 * Main tests for HSQL
 * @packageDocumentation
 */

import 'mocha';
import { assert } from 'chai';
import { exec } from 'child_process';
import path from 'path';
import os from 'os';

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
        const returncode = await execAndGetCode(`antlr4ts -visitor -no-listener ${gpath} -o ${tmpdir}`);
        // the returncode shall be 0 for valid grammar or non-zero for invalid grammar
        assert.strictEqual(returncode, 0, 'Should have been valid grammar');
    });
});

/**
 * Run a process and yield the return type
 */
async function execAndGetCode(command: string) {
    return new Promise<number | null>((res, rej) => {
        /*
         * Run this command and reject instantly if it fails.
         * We don't care about its output, but rather, its exit code
         */
        const proc = exec(command, (err, _stdout, _stderr) => {
            if (err) rej(err);
        });

        proc.on('error', err => {
            rej(err);
        });
        proc.on('exit', code => {
            res(code);
        });
        proc.on('close', code => {
            res(code);
        });
    });
}
