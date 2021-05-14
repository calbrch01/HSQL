/**
 * A collection of classes that work to output code and other output (Eg. issues)
 * @module
 */

import fs from 'fs';
import { TranslationError } from '../misc/error/Error';
import { iP } from '../misc/strings/misc';

/**
 * Represents an output method.
 * Note that by default {@link OutputManager.reportIssues} uses stdout to output. Override if required.
 */
export abstract class OutputManager {
    /**
     * A function called for each file
     * @param fn
     * @param contents
     */
    abstract do(fn: string, contents: string): boolean;

    /**
     * Report issues
     */
    reportIssues(issues: TranslationError[]): boolean {
        for (const issue of issues) {
            console.log(iP(issue.msg, issue.severity, issue.line, issue.charPositionInLine));
        }
        return true;
    }
    /**
     * An optional function called at the end
     */
    done?(): void;
}

export class StandardOutput extends OutputManager {
    do(fn: string, contents: string) {
        console.log('File:', fn);
        console.log(contents);
        return true;
    }
    done() {
        console.log();
    }
}

export class NoOutput extends OutputManager {
    do(fn: string, contents: string): boolean {
        return true;
    }
}

export class FileOutput extends OutputManager {
    do(fn: string, contents: string) {
        fs.writeFileSync(fn, contents);
        return true;
    }
}
