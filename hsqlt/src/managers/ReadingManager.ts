import fs from 'fs';
import path from 'path';
import format from 'string-template';
import { AnyModule } from '../ast/data/Module';
import { Module } from '../ast/data/Module';
import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import rs from '../misc/strings/resultStrings';
import { ErrorManager, TranslationIssue } from './ErrorManager';
/**
 * File type enum
 */
export enum FILETYPE {
    DIR,
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
     * @param backed Whether we can refer the filesystem as a fallback or not
     */
    constructor(
        protected errorManager: ErrorManager,
        protected memFileMap: Map<string, string> = new Map(),
        protected baseLoc?: string,
        protected backed: boolean = false
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
            // FUTURE Extensions are hardcoded - Fix them later?
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
                case FILETYPE.DIR:
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

    // TODO resolve to a
    resolveName(s: QualifiedIdentifier): Module {
        // fallback
        const qed = this.idToPathMap(s);
        console.debug('importing', qed);
        const pathJoined = path.join(...qed);
        const stats = [FILETYPE.HSQL, FILETYPE.ECL, FILETYPE.DIR].map(e => [
            FILETYPE[e],
            fs.existsSync(this.changeExtension(pathJoined, e)),
        ]);

        console.debug(stats);
        return new AnyModule();
    }

    /**
     *
     */
    protected idToPathMap(s: QualifiedIdentifier): string[] {
        return s.qidentifier.map(e => {
            if (e === '$') return '.';
            if (e === '^') return '..';
            return e;
        });
    }
}
