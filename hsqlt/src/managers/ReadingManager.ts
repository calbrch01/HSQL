import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import fs from 'fs';
import path from 'path';
import { Module } from '../ast/data/Module';
import { ErrorManager, TranslationError } from './ErrorManager';
import { AnyModule } from '../ast/data/AnyModule';
import { iP } from '../misc/strings/formatting';
import rs from '../misc/strings/resultStrings.json';
import format from 'string-template';

/**
 * File type enum
 */
export enum FILETYPE {
    OTHER,
    ECL,
    DHSQL,
    HSQL,
}

/**
 * Read and resolve types for files
 * Additionally manages extensions.
 */
export class ReadingManager {
    /**
     *
     * @param errorManager Error listener
     * @param memFileMap Override for files
     * @param baseLoc Base location to read from
     */
    constructor(
        protected errorManager: ErrorManager,
        protected memFileMap: Map<string, string> = new Map(),
        protected baseLoc?: string
    ) {}

    /**
     * remove file map
     * @param s source name
     * @returns
     */
    removeMap(s: string) {
        return this.memFileMap.delete(s);
    }
    /**
     * Add file map cautiously
     * @param s
     * @param file
     * @returns false if exists or could not set
     */
    addMap(s: string, file: string) {
        if (this.memFileMap.has(s)) return false;
        return this.memFileMap.set(s, file);
    }
    /**
     * Set file map
     * @param s
     * @param file
     * @returns
     */
    setMap(s: string, file: string) {
        return this.memFileMap.set(s, file);
    }

    /**
     * Check if sourcefile exists in map
     * @param s source name
     * @returns
     */
    exists(s: string) {
        return this.memFileMap.has(s);
    }

    /**
     * Entries of the memory map
     * @returns
     */
    entries() {
        return this.memFileMap.entries();
    }

    /**
     * read a file
     * @param fileName
     */
    readSync(fileName: string) {
        if (this.memFileMap.has(fileName)) return this.memFileMap.get(fileName) as string;
        return fs.readFileSync(fileName).toString();
    }

    /**
     * Asynchoronously read a file
     * @param fileName
     * @returns
     */
    async read(fileName: string): Promise<string> {
        if (this.memFileMap.has(fileName)) return this.memFileMap.get(fileName)!;
        const file = await fs.promises.readFile(fileName);
        return file.toString();
    }
    // FIXME add
    discoverFileType(q: QualifiedIdentifier) {}

    /**
     * Get the file type
     * @param pathString
     * @param override
     * @returns
     */
    getFileType(pathString: string, override?: FILETYPE): FILETYPE {
        const x = path.extname(pathString);
        // are switch cases really bad?
        // TODO Discuss whether fallback should be ECL
        switch (x) {
            case '.hsql':
                return override ?? FILETYPE.HSQL;
            case '.dhsql':
                return override ?? FILETYPE.DHSQL;
            case '.ecl':
                return override ?? FILETYPE.ECL;
            default:
                return override ?? FILETYPE.OTHER;
        }
    }

    /**
     * Change extension of a file
     * @param pathString path of the file
     * @param newExtension either the extension or the string
     * @returns
     */
    changeExtension(pathString: string, newExtension: FILETYPE | string): string {
        const pathParsed = path.parse(pathString);
        if (typeof newExtension === 'string') {
            pathParsed.ext = newExtension;
        } else {
            // TODO Extensions are hardcoded - Fix them later?
            switch (newExtension) {
                case FILETYPE.HSQL:
                    pathParsed.ext = '.hsql';
                    break;
                case FILETYPE.ECL:
                    pathParsed.ext = '.ecl';
                    break;
                case FILETYPE.DHSQL:
                    pathParsed.ext = '.dhsql';
                    break;
                default:
                    this.errorManager.halt(new TranslationError(format(rs.invalidFileExtension, [pathString])));
            }
        }
        // as per the docs, setting it to undefined leads it to use the other properties
        // this should be a safe way of changing extensions for files
        pathParsed.base = undefined!;
        return path.format(pathParsed);
    }
}
