import fs from 'fs';

export interface OutputManager {
    /**
     * A function called for each file
     * @param fn
     * @param contents
     */
    do(fn: string, contents: string): boolean;
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

export class FileOutput implements OutputManager {
    do(fn: string, contents: string) {
        fs.writeFileSync(fn, contents);
        return true;
    }
}
