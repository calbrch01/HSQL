import format from 'string-template';
import { ErrorManager, ErrorSeverity, ErrorType, TranslationIssue } from '../../managers/ErrorManager';
import { execAndGetCode } from '../lib/execAndGetCode';
import eclcc from '../strings/eclcc';
import dotenv from 'dotenv';
import rs from '../strings/resultStrings';

export type getMethodsShape = {
    eclLibPath: string[];
};

/**
 * ECLCC Interfacing
 */
export class ECLClientToolsInterface {
    constructor(protected err: ErrorManager) {}
    /**
     * Always resolves, no worries.
     * Returns a set of imports
     * @returns
     */
    async getImports(): Promise<getMethodsShape> {
        try {
            const { returnCode, stdout } = await execAndGetCode(eclcc.showPaths);
            if (returnCode === 0) {
                /**
                 * Dotenv passes env files, which is how eclcc outputs its information
                 */
                const res = dotenv.parse(stdout);
                return {
                    eclLibPath: [
                        ...(res['ECLCC_ECLBUNDLE_PATH'] ?? '').split(':'),
                        ...(res['ECLCC_ECLLIBRARY_PATH'] ?? '').split(':'),
                    ],
                };
                // TranslationIssue.
            } else if (returnCode === 127) {
                this.err.push(
                    TranslationIssue.createIssue(eclcc.errors.notFoundError, ErrorType.SETUP, ErrorSeverity.WARNING)
                );
            } else {
                this.err.push(
                    TranslationIssue.createIssue(
                        format(eclcc.errors.unexpectedReturnCode),
                        ErrorType.SETUP,
                        ErrorSeverity.WARNING
                    )
                );
            }
            return { eclLibPath: [] };
        } catch (e) {
            return { eclLibPath: [] };
        }
    }

    /**
     * Run client tools for a given location
     * @param target target cluster
     * @param location file location
     * @returns
     */
    async runOutput(target: string, location: string) {
        try {
            const { returnCode, stdout, stderr } = await execAndGetCode(format(eclcc.run, target, location));
            if (returnCode === 127) {
                this.err.push(
                    TranslationIssue.createIssue(
                        format(eclcc.errors.notFoundError, eclcc.strings.eclcc),
                        ErrorType.SETUP,
                        ErrorSeverity.WARNING
                    )
                );
            }
            return stderr + '\n' + stdout;
        } catch (e) {
            this.err.push(
                TranslationIssue.createIssue(format(rs.couldNotSubmitError), ErrorType.SETUP, ErrorSeverity.WARNING)
            );
            return '';
        }
    }
}
