import yargs, { Arguments } from 'yargs';
import { FileOutput, OutputManager, StandardOutput } from './managers/OutputManagers';
import { TaskManager } from './managers/TaskManager';
import { addCommandFileBuild, ExecMode } from './misc/execModes';

// 2 ignores the node call and the script name
// TODO add -t and -c
// This syntax is shorthand to writing `const args = yargs(...).argv`
const { argv: args } = yargs(process.argv.slice(2))
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
    })
    .option('e', {
        desc: 'Skip dependency type checks',
        alias: ['depcheck-skip'],
        type: 'boolean',
    })
    .option('p', {
        desc: 'pedantic (Throw errors for warnings too)',
        alias: ['pedantic'],
        type: 'boolean',
    })
    .option('o', {
        desc: 'Output to stdout',
        alias: ['output-std'],
        type: 'boolean',
    })
    .option('d', {
        desc: 'Skip writing dependencies to files',
        alias: 'dont-write-deps',
        type: 'boolean',
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
        default: process.env.ECL_WATCH_PORT ?? 8010,
    })
    .option('a', {
        desc: 'Show args',
        alias: ['show-args'],
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
            main(args, ExecMode.TREE);
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
            main(args, ExecMode.CHECK);
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
            main(args, ExecMode.MAKE);
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
            main(args, ExecMode.RUN);
        }
    )
    .demandCommand(2);

// type argType = yargs.Arguments<
//     { w: boolean | undefined } & { e: boolean | undefined } & { p: boolean | undefined } & {
//         o: boolean | undefined;
//     } & { d: boolean | undefined } & { t: string | undefined } & { c: string }
// >;
type argType = typeof args;

/**
 * Entrypoint
 * @param argv arguments
 * @param execMode execution mode
 */
function main(argv: argType, execMode: ExecMode): void {
    argv.a && console.log('<args>:', argv);
    // initialize managers
    const writer: OutputManager = argv.o ? new StandardOutput() : new FileOutput();
    const taskmanager = new TaskManager(argv.file, argv.p ?? false, undefined, writer);

    switch (execMode) {
        case ExecMode.TREE:
            const { strTree } = taskmanager.getStringTree();
            console.log(strTree, '\n');
            break;
        case ExecMode.CHECK:
            const { ast, tree } = taskmanager.generateAST();
            break;
        default:
            console.error('I>Not yet supported');
    }
    // need to report errors anyways
    taskmanager.reportErrors();
}

// main(); //.catch(console.log);
