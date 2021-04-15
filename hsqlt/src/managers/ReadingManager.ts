import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import fs from 'fs';
import path, { sep } from 'path';
import { Module } from '../ast/data/Module';
import { ErrorManager } from '../misc/error/Error';
import { AnyModule } from '../ast/data/AnyModule';
export enum FILETYPE {
    ECL,
    DECL,
    HSQL,
}

/**
 * Read and resolve types for files
 */
export class ReadingManager {
    /**
     *
     * @param errorListener Error listener
     * @param memFileMap Override for files
     * @param baseLoc Base location to read from
     */
    constructor(
        protected errorListener: ErrorManager,
        protected memFileMap: Map<string, string> = new Map<string, string>(),
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
     * check if sourcefile exists in map
     * @param s source name
     * @returns
     */
    exists(s: string) {
        return this.memFileMap.has(s);
    }

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
    discoverFileType(q: QualifiedIdentifier) {}
}
