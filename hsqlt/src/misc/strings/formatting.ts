/**
 * Stores various miscellaneous strings used by the project,
 * and some miscellaneous functions for formatting.
 * @module
 */

import { ErrorSeverity, ErrorType } from '../../managers/ErrorManager';

/**
 * Assign string codes to these enums
 * @param issueType
 */
function mapIssue(issueType: ErrorSeverity) {
    switch (issueType) {
        case ErrorSeverity.INFO:
            return 'I';
        case ErrorSeverity.WARNING:
            return 'W';
        case ErrorSeverity.ERROR:
            return 'E';
        default:
            return '?';
    }
}

/**
 * Attach the error tags and line numbers
 * @param reason
 * @param issueType
 * @param num1
 * @param num2
 * @returns
 */
export function issuePrepender(
    reason: string,
    issueType: ErrorSeverity = ErrorSeverity.INFO,
    num1?: number,
    num2?: number,
    str1?: string
) {
    return `${mapIssue(issueType)}(${str1 ?? '-'}:${num1 ?? '-'}:${num2 ?? '-'}):${reason}`;
}

/**
 * Short alias to {@link issuePrepender}
 */
export const iP = issuePrepender;
