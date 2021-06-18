/**
 * This module contains eclcc calling snippets
 * @module
 */
export default {
    syntax: `eclcc -showpaths`,
    errors: {
        notFoundError: `eclcc not found`,
        unexpectedReturnCode: `Unexpected return code when running eclcc {0}`,
    },
} as const;
