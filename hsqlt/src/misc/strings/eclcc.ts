/**
 * This module contains eclcc calling snippets
 * @module
 */
export default {
    showPaths: `eclcc -showpaths`,
    strings: {
        ecl: `ecl`,
        eclcc: `eclcc`,
    },
    errors: {
        notFoundError: `{0} not found`,
        unexpectedReturnCode: `Unexpected return code when running eclcc {0}`,
    },
    run: `ecl run {0} {1}`,
} as const;
