import format from 'string-template';
import { ErrorManager, ErrorSeverity, ErrorType, TranslationIssue } from '../../managers/ErrorManager';
import { execAndGetCode } from '../lib/execAndGetCode';
import eclcc from '../strings/eclcc';
import dotenv from 'dotenv';

export type getMethodsShape = {
    eclLibPath: string[];
};

export class ECLCCInterface {
    constructor(protected err: ErrorManager) {}
    async getImports(): Promise<getMethodsShape> {
        const { returnCode, stdout } = await execAndGetCode(eclcc.syntax);
        if (returnCode === 0) {
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
    }
    async getImportPath(): Promise<string | undefined> {
        const x = await this.getImports();
        return x.eclLibPath[0];
    }
}
