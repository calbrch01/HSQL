import yargs from 'yargs';

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
    // all the commands that the program can run in
    .command('check <file>', 'Check syntax and correctness of file(s)')
    .command('make <file>', 'Compile to ECL')
    .command('run <file>', 'Compile and submit to cluster')
    .demandCommand(2);

//print out the arguments for showing
console.log('yargs', args);
