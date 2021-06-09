import { ErrorSeverity, TaskManager } from 'hsqlt';

/**
 * Extract Issue counts from
 * @param x
 * @returns [errors, warnings]
 */
export function extractErrors(x: TaskManager) {
    return x.errorManager.issues.reduce(
        (t, e) => {
            t[e.severity]++;
            return t;
        },
        {
            [ErrorSeverity.ERROR]: 0,
            [ErrorSeverity.WARNING]: 0,
            [ErrorSeverity.INFO]: 0,
        }
    );
}
