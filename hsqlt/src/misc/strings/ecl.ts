/**
 * This module contains a lot of information on ECL Code snippets.
 * @module
 */

import { templateCompiler } from '../lib/templateCompiler';
import compile from 'string-template/compile';
import { SelectAggregationType, SelectJoinType } from '../ast/SelectHelpers';
import { VariableVisibility } from '../ast/VariableVisibility';
// this is compiled as there can be multiple outputs
export default {
    commmon: {
        leftBracket: '(',
        rightBracket: ')',
        leftCurlyBracket: '{',
        rightCurlyBracket: '}',
        comma: ',',
        overwrite: 'OVERWRITE',
        end: 'END',
        ds: compile('DATASET({0})'),
        module: 'MODULE ',
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
        functionHeader: compile('{0}({1}) := FUNCTION'),
        functionTerm: 'FUNCTION',
        return: 'RETURN ',
    },
    plot: {
        left: `PARALLEL(OUTPUT(`,
        plotRight: compile(`,,NAMED('{0}')),{1})`),
    },
    table: {
        tableTerm: 'TABLE(',
        joiner: compile('JOIN({0},{1},true,all)'),
        // the space is required to not accidentally escape the template
        colList: compile('{ {0} }'),
        dedup: compile('DEDUP({0},ALL)'),
        choosen: 'CHOOSEN(',
        ds: compile('DATASET({0},{1},{2})'),
        sort: 'SORT(',
        negSort: compile('-({0})'),
        distributes: compile('DISTRIBUTE({0},HASH32({1}))'),
        aggr: templateCompiler({
            [SelectAggregationType.AVG]: 'AVE(GROUP,{0})',
            [SelectAggregationType.COUNT]: 'COUNT(GROUP)',
            [SelectAggregationType.MAX]: 'MAX(GROUP,{0})',
            [SelectAggregationType.MIN]: 'MIN(GROUP,{0})',
            [SelectAggregationType.SUM]: 'SUM(GROUP,{0})',
            [SelectAggregationType.TRIM]: 'TRIM({0})',
        }),
        join: templateCompiler({
            [SelectJoinType.INNER]: 'JOIN({0},{1},LEFT.{2} {3} RIGHT.{4})',
            [SelectJoinType.OUTER]: 'JOIN({0},{1},LEFT.{2} {3} RIGHT.{4},FULL OUTER)',
            [SelectJoinType.LEFT]: 'JOIN({0},{1},LEFT.{2} {3} RIGHT.{4},LEFT OUTER)',
            [SelectJoinType.RIGHT]: 'JOIN({0},{1},LEFT.{2} {3} RIGHT.{4},RIGHT OUTER)',
        }),
    },
    scopes: {
        [VariableVisibility.DEFAULT]: '',
        [VariableVisibility.SHARED]: 'SHARED ',
        [VariableVisibility.EXPORT]: 'EXPORT ',
    },
    exportModule: 'export {0} := MODULE',
} as const;
