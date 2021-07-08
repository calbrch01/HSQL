/**
 * A collection of classes that work to output code and other output (Eg. issues)
 * @module
 */

import { promises as fs } from 'fs';
import path from 'path';
import { iP } from '../misc/lib/formatting';
import { ContexedTranslationError } from './ErrorManager';

/**
 * Represents an output method.
 * Note that by default {@link OutputManager.reportIssues} uses stdout to output. Override if required.
 */
export abstract class OutputManager {
    /**
     * A function called for each file.
     * Resolves on done, else rejects
     * @param fn Filename
     * @param contents File contents
     */
    abstract do(fn: string, contents: string): Promise<void>;

    /**
     * Report issues
     * @returns if successful
     */
    reportIssues(issues: ContexedTranslationError[]): boolean {
        for (const issue of issues) {
            console.log(iP(issue.msg, issue.severity, issue.line, issue.charPositionInLine, issue.ctx));
        }
        return true;
    }
    /**
     * An optional function called at the end
     */
    done?(): void;
}

export class StandardOutput extends OutputManager {
    async do(fn: string, contents: string) {
        console.log('File:', fn);
        console.log(contents);
    }
    done() {
        console.log();
    }
}

/**
 * Write to a map
 * Useful for Debug Output and maintaining a workspace
 */
export class MapOutput extends OutputManager {
    public fileMap: Map<string, string>;
    constructor(protected offset?: string) {
        super();
        this.fileMap = new Map();
    }
    async do(fn: string, contents: string) {
        if (this.offset !== undefined) {
            fn = path.join(this.offset, fn);
        }
        // could not write if already exists
        if (this.fileMap.has(fn)) throw Error('File already exists');
        this.fileMap.set(fn, contents);
    }
}

export class NoOutput extends OutputManager {
    async do() {
        // no need to do anything, our output is wrapped in a Promise automatically :)
    }
}

export class FileOutput extends OutputManager {
    constructor(protected offset?: string) {
        super();
    }
    async do(fn: string, contents: string) {
        if (this.offset !== undefined) {
            fn = path.join(this.offset, fn);
        }
        return fs.writeFile(fn, contents);
    }
}
