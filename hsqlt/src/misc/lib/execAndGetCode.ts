import { exec } from 'child_process';

type execResult = {
    returnCode: number | null;
    stdout: string;
    stderr: string;
};
/**
 * Run a process and yield the return type.
 * Note: Duped in tests
 * @param command Run a command
 */
export async function execAndGetCode(command: string) {
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
