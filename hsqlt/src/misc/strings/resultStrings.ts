import { templateCompiler } from '../lib/templateCompiler';

export default {
    output: 'OUTPUT',
    column: 'COLUMN',

    notCollection: 'Not a collection type',
    colDoesNotExistError: 'Column {0} does not exist',
    colAlreadyExistsError: 'Column {0} does already exists',
    noAliasUsingFallbackInfo: 'No column alias provided, using {0}',
    tableSelectionHasAnyWarning: 'Any-ish tables used as sources. Result will be any-ish',

    couldNotFindFileError: 'File {0} could not be found',

    invalidAggregateError: 'Invalid aggregate {0}',

    noErrorOutput: 'Issues are being suppressed',
    notImplemented: 'Method or command not implemented',
    couldNotWrite: 'Could not write file {0}',
    notTagged: 'Not {0}',
    unexpectedError: 'Unexpected issue',
    unexpectedErrorTagged: 'Unexpected issue: {0}',
    notFound: '{0} could not be found',
    cannotInfer: 'Cannot infer data type used, which is required for {0}. Assuming {1}',
    cannotUse: 'Cannot use data type {0} for {1}',
    existsError: '{0} already exists',

    invalidFileExtension: 'Invalid File Extension for file {0}',

    didNotOutput: 'Did not make outputs because of issues',
    emptyCode: 'Empty code generation',
};
