/**
 * Generic Reader interface
 */
export interface IReader {
    read(): Promise<string>;
    readPart(pos: number, len: number): Promise<string>;
    getSourceName(): string;
}
