import { templateCompiler } from '../lib/templateCompiler';
import compile from 'string-template/compile';
// this is compiled as there can be multiple outputs
export default {
    commmon: {
        rightBracket: ')',
        comma: ',',
        overwrite: 'OVERWRITE',
        end: 'END',
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
    functions: {
        functionTerm: 'FUNCTION',
        return: 'RETURN ',
    },
    table: {
        tableTerm: 'TABLE(',
        joiner: compile('JOIN({0},{1},true,all)'),
    },
};
