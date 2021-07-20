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
    static changeExtension(pathString: string, newExtension: Exclude<FileType, FileType.OTHER>): string {
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
                default:
                    pathParsed.ext = '';
                    break;
            }
        }
        // as per the docs, setting it to undefined leads it to use the other properties
        // this should be a safe way of changing extensions for files
        pathParsed.base = undefined!;
        return path.format(pathParsed);
    }

    /**
     * Convert a qid to a path string
     */
    static idToPathMap(s: QualifiedIdentifier): string[] {
        return s.qidentifier.map(e => {
            if (e === '$') return '.';
            if (e === '^') return '..';
            return e;
        });
    }
}
