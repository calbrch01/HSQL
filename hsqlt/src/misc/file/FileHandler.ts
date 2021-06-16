import { ErrorManager, TranslationIssue } from '../../managers/ErrorManager';
import path from 'path';
import { QualifiedIdentifier } from '../ast/QualifiedIdentifier';
import format from 'string-template';
import rs from '../strings/resultStrings';
import { FileType } from './FileType';

/**
 * Miscellaneous file/path based operations
 * Internally used to provide {@link ReadingManager.fh}
 */
export class FileHandler {
    constructor(protected errorManager: ErrorManager) {}

    /**
     * Change extension of a file
     * @param pathString path of the file
     * @param newExtension either the extension or the string
     * @returns
     */
    changeExtension(pathString: string, newExtension: FileType | string): string {
        const pathParsed = path.parse(pathString);
        if (typeof newExtension === 'string') {
            pathParsed.ext = newExtension;
        } else {
            // FUTURE Extensions are hardcoded - Fix them later?
            switch (newExtension) {
                case FileType.HSQL:
                    pathParsed.ext = '.hsql';
                    break;
                case FileType.ECL:
                    pathParsed.ext = '.ecl';
                    break;
                case FileType.DHSQL:
                    pathParsed.ext = '.dhsql';
                    break;
                case FileType.DIR:
                    pathParsed.ext = '';
                    break;
                default:
                    this.errorManager.halt(new TranslationIssue(format(rs.invalidFileExtension, [pathString])));
            }
        }
        // as per the docs, setting it to undefined leads it to use the other properties
        // this should be a safe way of changing extensions for files
        pathParsed.base = undefined!;
        return path.format(pathParsed);
    }

    /**
     * Get the file type
     * @param pathString
     * @param override
     * @returns
     */
    getFileType(pathString: string, override?: FileType): FileType {
        const x = path.extname(pathString);
        // are switch cases really bad?
        switch (x) {
            case '.hsql':
                return override ?? FileType.HSQL;
            case '.dhsql':
                return override ?? FileType.DHSQL;
            case '.ecl':
                return override ?? FileType.ECL;
            default:
                return override ?? FileType.OTHER;
        }
    }
}
