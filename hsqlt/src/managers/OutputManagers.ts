/**
 * A collection of classes that work to output code and other output (Eg. issues)
 * @module
 */

import { promises as fs } from 'fs';
import { ContexedTranslationError, TranslationError } from './ErrorManager';
import { iP } from '../misc/strings/formatting';

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
    constructor() {
        super();
        this.fileMap = new Map();
    }
    async do(fn: string, contents: string) {
        // could not write if already exists
        if (this.fileMap.has(fn)) throw Error('File already exists');
        this.fileMap.set(fn, contents);
    }
}

export class NoOutput extends OutputManager {
    async do(fn: string, contents: string) {
        // no need to do anything, our output is wrapped in a Promise automatically :)
    }
}

export class FileOutput extends OutputManager {
    async do(fn: string, contents: string) {
        await fs.writeFile(fn, contents);
    }
}
