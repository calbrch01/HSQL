import { templateCompiler } from '../lib/templateCompiler';

// this is compiled as there can be multiple outputs
export default {
    commmon: {
        rightBracket: ')',
        comma: ',',
        overwrite: 'OVERWRITE',
    },
    import: templateCompiler({
        regular: 'IMPORT {0}',
        aliased: 'IMPORT {0} as {1}',
    }),
    equal: templateCompiler({
        eq: '{0} := ',
    }),
    output: templateCompiler({
        outputlhs: 'OUTPUT(',
        named: "NAMED('{0}')",
    }),
};
