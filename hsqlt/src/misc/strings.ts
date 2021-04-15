import { ErrorSeverity, ErrorType } from './error/Error';

/**
 * Fixed string outputs can be looked up from here. Makes it easy to change them later
 */
export const resultStrings = {
    noErrorOutput: 'Issues are being suppressed',
};

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
    num2?: number
) {
    return `${mapIssue(issueType)}(${num1 ?? '-'}:${num2 ?? '-'}):${reason}`;
}

/**
 * Refer to @see issuePrepender
 */
export const iP = issuePrepender;
