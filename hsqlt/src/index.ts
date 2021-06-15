#!/usr/bin/env node
/**
 * CLI Interface to HSQL.
 * Note that this module is called `main` and not `index` as otherwise it wipes the index
 * @module main
 */

import yargs from 'yargs';
import { FileOutput, OutputManager, StandardOutput } from './managers/OutputManagers';
import { TaskManager } from './managers/TaskManager';
import { ErrorType, HaltError, TranslationError } from './managers/ErrorManager';
import { ExecIntent, ExecCheckMode, ExecUnimplemented, ExecTreeMode, ExecMakeMode } from './misc/execModes';
import format from 'string-template';
import rs from './misc/strings/resultStrings.json';
// 2 ignores the node call and the script name
// This syntax is shorthand to writing `const args = yargs(...).argv`
export const { argv: args } = yargs(process.argv.slice(2))
    // add the help option
    .help()
    // only commands/options defined will work
    .strict()
    // version for --version
    .version('0.0.1alpha')
    // all the options
    .option('w', {
        desc: 'No warnings',
        alias: ['no-warn'],
        type: 'boolean',
        default: false,
    })
    .option('e', {
        desc: 'Skip dependency type checks',
        alias: ['depcheck-skip'],
        type: 'boolean',
        default: false,
    })
    .option('p', {
        desc: 'pedantic (Throw errors for warnings too)',
        alias: ['pedantic'],
        type: 'boolean',
        default: false,
    })
    .option('o', {
        desc: 'Output to stdout',
        alias: ['output-std'],
        type: 'boolean',
        default: false,
    })
    .option('d', {
        desc: 'Skip writing dependencies to files',
        alias: 'dont-write-deps',
        type: 'boolean',
        default: false,
    })
    .option('t', {
        desc: 'Target',
        choices: ['hthor', 'thor', 'roxie', 'thor_roxie'],
        alias: ['target'],
        type: 'string',
    })
    .option('c', {
        desc: 'Cluster location',
        alias: ['cluster'],
        type: 'string',
        default: process.env.ECL_WATCH_IP ?? 'localhost',
    })
    .option('r', {
        desc: 'Cluster poRt',
        alias: ['port'],
        type: 'number',
        default: isNaN(parseInt(process.env.ECL_WATCH_PORT ?? '')) ? 8010 : parseInt(process.env.ECL_WATCH_PORT ?? ''),
    })
    .option('a', {
        desc: 'Show args',
        alias: ['show-args'],
        type: 'boolean',
        default: false,
    })
    .option('k', {
        desc: 'Suppress issues',
        alias: ['suppress-issues'],
        type: 'boolean',
        default: false,
    })
    .option('g', {
        desc: 'Debug mode(Prints more output)',
        alias: ['debug-output'],
        type: 'boolean',
        default: false,
    })
    // all the commands that the program can run in
    .command(
        'tree <file',
        'Print out Lisp S-expr for syntax (Debug)',
        yargs =>
            yargs.option('file', {
                desc: 'filename',
                type: 'string',
                demandOption: true,
            }),
        args => {
            main(args, new ExecTreeMode());
        }
    )
    .command(
        'check <file>',
        'Check syntax and correctness of file(s)',
        yargs =>
            yargs.option('file', {
                desc: 'filename',
                type: 'string',
                demandOption: true,
            }),
        args => {
            main(args, /* ExecMode.CHECK */ new ExecCheckMode());
        }
    )
    .command(
        'make <file>',
        'Compile to ECL',
        yargs =>
            yargs.option('file', {
                desc: 'filename',
                type: 'string',
                demandOption: true,
            }),
        args => {
            main(args, /* ExecMode.MAKE */ new ExecMakeMode());
        }
    )
    .command(
        'run <file>',
        'Compile and submit to cluster',
        yargs =>
            yargs.option('file', {
                desc: 'filename',
                type: 'string',
                demandOption: true,
            }),
        args => {
            main(args, new ExecUnimplemented());
        }
    )
    .demandCommand(2);

export type argType = typeof args;
/**
 * Entrypoint
 * @param argv arguments
 * @param execMode execution mode
 */
export async function main(argv: argType, /*execMode: ExecMode*/ execMode: ExecIntent): Promise<void> {
    argv.a && console.log('<args>:', argv);
    // initialize managers
    const writer: OutputManager = argv.o ? new StandardOutput() : new FileOutput();
    //taskmap must have no map, and no baseloc for now
    const taskmanager = new TaskManager(argv.file, argv.p, undefined, writer, undefined, argv.k, argv);

    try {
        await execMode.do(taskmanager, writer);
    } catch (e) {
        // if e is an instance, that means we have already added it, and it is a error that was used to halt the process.
        // if it is not, we should report.
        if (!(e instanceof HaltError)) {
            // throw this error into the error manager
            taskmanager.errorManager.push(
                TranslationError.generalErrorToken(
                    format(rs.unexpectedErrorTagged, [e.msg ?? e.message ?? 'Unexpected Error']),
                    ErrorType.OTHER
                )
            );
        }
    } finally {
        // need to report errors
        taskmanager.reportErrors();
    }
}
