import yargs from 'yargs';

/**
 * @deprecated
 * @param yargs
 * @returns
 */
export const addCommandFileBuild = <T extends {}>(yargs: yargs.Argv<T>) => {
    return yargs.option('file', {
        desc: 'filename',
        type: 'string',
        // requiresArg: true,
    });
};

/**
 * Execution Mode
 */
export enum ExecMode {
    TREE,
    CHECK,
    MAKE,
    RUN,
}
