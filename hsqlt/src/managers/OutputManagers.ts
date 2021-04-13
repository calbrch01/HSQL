import fs from 'fs';
import { TranslationError } from '../misc/error/Error';




export interface OutputManager {
    /**
     * A function called for each file
     * @param fn
     * @param contents
     */
    do(fn: string, contents: string): boolean;

    /**
     * Report issues
     */
    reportIssues?(issues: TranslationError[]): boolean;
    /**
     * An optional function called at the end
     */
    done?(): void;
}

export class StandardOutput implements OutputManager {
    do(fn: string, contents: string) {
        console.log('File:', fn);
        console.log(contents);
        return true;
    }
    done() {
        console.log();
    }
}

export class NoOutput implements OutputManager {
    do(fn: string, contents: string): boolean {
        return true;
    }

}

export class FileOutput implements OutputManager {
    do(fn: string, contents: string) {
        fs.writeFileSync(fn, contents);
        return true;
    }
}
