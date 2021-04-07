import fs from 'fs';

export interface OutputManager {
    do(fn: string, contents: string): boolean;
}

export class StandardOutput implements OutputManager {
    do(fn: string, contents: string) {
        console.log('File:', fn);
        console.log(contents);
        return true;
    }
}

export class FileOutput implements OutputManager {
    do(fn: string, contents: string) {
        fs.writeFileSync(fn, contents);
        return true;
    }
}
