import yargs from 'yargs';

export const addCommandFileBuild = <T extends {}>(yargs: yargs.Argv<T>) => {
    return yargs.option('file', {
        desc: 'filename',
        type: 'string',
        // requiresArg: true,
    });
};

export enum ExecMode {
    TREE,
    CHECK,
    MAKE,
    RUN,
}
