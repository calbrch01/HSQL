import { IReader } from './Reader';
import { promises as fs } from 'fs';
import path from 'path';
/**
 * Read files
 */
export class FileReader implements IReader {
    /**
     *
     * @param location Location
     * @param sourceName Optional sourcename override
     */
    constructor(private location: string, private sourceName?: string) {}
    /**
     * read file and get string
     */
    async read() {
        return (await fs.readFile(this.location)).toString();
    }
    /**
     * read part of file
     * @param pos position zero based
     * @param len number of chars to read
     */
    async readPart(pos: number, len: number) {
        const str = await this.read();
        return str.substring(pos, pos + len);
    }

    getSourceName() {
        return this.sourceName ?? path.basename(this.location);
    }
}
