/**
 * Stores various miscellaneous strings used by the project,
 * and some miscellaneous functions for formatting.
 * @module
 */

import { ErrorSeverity } from '../../managers/ErrorManager';

/**
 * Mapping of the issue severity
 */
const issueSeverityMap = {
    [ErrorSeverity.INFO]: 'I',
    [ErrorSeverity.WARNING]: 'W',
    [ErrorSeverity.ERROR]: 'E',
};

/**
 * Assign string codes to these enums
 * @param issueType
 */
export function mapIssue(issueType: ErrorSeverity) {
    return issueSeverityMap[issueType] ?? '?';
}

/**
 * Attach the error tags and line numbers
 * @param reason
 * @param issueType
 * @param num1
 * @param num2
 * @returns
 */
export function issueFormatter(
    reason: string,
    issueType: ErrorSeverity = ErrorSeverity.INFO,
    num1?: number,
    num2?: number,
    str1?: string
) {
    return `${mapIssue(issueType)}(${str1 ?? '-'}:${num1 ?? '-'}:${num2 ?? '-'}):${reason}`;
}
