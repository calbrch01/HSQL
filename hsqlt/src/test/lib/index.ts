import { assert } from 'chai';
import { exec } from 'child_process';
import fsp from 'fs/promises';
import path from 'path';
import { ErrorSeverity, FileOutput, FSFileProvider, FSManager, TaskManager } from '../../lib';
import { ExecMakeIntent } from '../../misc/execIntent';
type execResult = {
    returnCode: number | null;
    stdout: string;
    stderr: string;
};
/**
 * Run a process and yield the return type
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

/**
 * Path of the scripts
 */
const pathScripts = path.join('.', 'src', 'test', 'testScripts');

/**
 * Execute a given ecl file, get its standard output
 * @param fileNameCase File name to execute without extension
 * @return string output
 */
export function executeFile(fileNameCase: string) {
    return new Promise<string>((resolve, reject) => {
        exec(`cd ${pathScripts};ecl run -u hsql-test -pw " " thor ${fileNameCase}.ecl`, (error, stdout, stderr) => {
            if (error) {
                reject(error.toString());
            }
            resolve(stdout);
        });
    });
}

/**
 * Convert HSQL text and write to ecl file
 * @param fileNameCase Filename to test, without extension
 */
export async function testFile(fileNameCase: string) {
    const pathRequired = path.join(pathScripts, fileNameCase + '.hsql');
    const writer = new FileOutput();
    const taskmanager = new TaskManager(pathRequired, false, writer);
    taskmanager.addFileProviders(
        ...(await FSManager.DefaultsProvidersFactory(taskmanager.errorManager)),
        new FSFileProvider()
    );
    await new ExecMakeIntent().do(taskmanager, writer);

    assert.lengthOf(
        taskmanager.errorManager.issues.filter(e => e.severity === ErrorSeverity.ERROR),
        0
    );
}

/**
 * Delete an ecl file
 * @param fileNameCase
 */
export async function removeECLFile(fileNameCase: string) {
    return fsp.unlink(path.join(pathScripts, fileNameCase + '.ecl'));
}
