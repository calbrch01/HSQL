import { templateCompiler } from '../lib/templateCompiler';
import compile from 'string-template/compile';
import { SelectAggregationType } from '../ast/SelectHelpers';
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
        // the space is required to not accidentally escape the template
        colList: compile('{ {0} }'),
        dedup: compile('DEDUP({0},ALL)'),
        choosen: 'CHOOSEN(',
        aggr: templateCompiler({
            [SelectAggregationType.AVG]: 'AVE(GROUP,{0})',
            [SelectAggregationType.COUNT]: 'COUNT(GROUP)',
            [SelectAggregationType.MAX]: 'MAX(GROUP,{0})',
            [SelectAggregationType.MIN]: 'MIN(GROUP,{0})',
            [SelectAggregationType.SUM]: 'SUM(GROUP,{0})',
            [SelectAggregationType.TRIM]: 'TRIM({0})',
        }),
    },
} as const;
