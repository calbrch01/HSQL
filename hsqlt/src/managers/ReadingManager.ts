import fs from 'fs';
import path from 'path';
import format from 'string-template';
import { AnyModule } from '../ast/data/Module';
import { Module } from '../ast/data/Module';
import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import { FileHandler } from '../misc/file/FileHandler';
import rs from '../misc/strings/resultStrings';
import { ErrorManager, ErrorSeverity, ErrorType, TranslationIssue } from './ErrorManager';
import { FileType } from '../misc/file/FileType';
import resultStrings from '../misc/strings/resultStrings';
import { Table } from '../ast/data/Table';
import { Col } from '../ast/data/Col';
import { dtype } from '../ast/data/Singular';
import { pathResult } from '../misc/file/FileProvider';

/**
 * Read and resolve types for files
 * Additionally manages extensions.
 */
export class ReadingManager {
    /**
     * FileHandling Methods. Use this for some file/path specific methods
     */
    public fh: FileHandler;
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
        protected backed: boolean = false,
        protected baseLoc?: string
    ) {
        this.fh = new FileHandler(errorManager);
    }

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
        if (this.backed) {
            return fs.readFileSync(fileName).toString();
        } else {
            // there's no other file storages we can refer to
            this.errorManager.halt(
                TranslationIssue.createIssue(
                    format(resultStrings.couldNotFindFileError, [fileName]),
                    ErrorType.IO,
                    ErrorSeverity.ERROR
                )
            );
        }
    }

    /**
     * Asynchoronously read a file
     * @param fileName
     * @returns
     */
    async read(fileName: string): Promise<string> {
        // ! signifies that it exists for sure, of course it does because we check
        if (this.memFileMap.has(fileName)) return this.memFileMap.get(fileName)!;
        const file = await fs.promises.readFile(fileName);
        return file.toString();
    }

    // FIXME add
    /**
     * Discover the file type given the qid
     * @deprecated NOT YET READY
     * @param q
     */
    discoverFileType(q: QualifiedIdentifier) {}

    // TODO resolve to a module
    /**
     * Resolve a qid to a module being imported
     * @param s The identifier being imported
     * @returns
     */
    resolveName(s: QualifiedIdentifier): Module {
        // fallback
        // const qed = this.idToPathMap(s);

        // const pathJoined = path.join(...qed);
        // console.debug('importing', pathJoined);
        // const ret = this.pathScan(pathJoined);
        // console.log({ ...ret, type: FileType[ret.type] });
        // const stats = [FileType.HSQL, FileType.ECL, FileType.DIR].map(e => {
        //     const fpath = this.fh.changeExtension(pathJoined, e);
        //     // if the path exists, and if its a directory, if the directory exists
        //     const exists = fs.existsSync(fpath) && e === FileType.DIR && fs.statSync(fpath).isDirectory;
        //     return [e, FileType[e], exists];
        // });

        // console.debug(stats);

        // // very messed up override

        // return new Module(
        //     new Map([
        //         [
        //             't1',
        //             new Table(
        //                 new Map([
        //                     ['c1', new Col(dtype.DECIMAL)],
        //                     ['c2', new Col(dtype.DECIMAL)],
        //                 ])
        //             ),
        //         ],
        //         [
        //             't2',
        //             new Table(
        //                 new Map([
        //                     ['c4', new Col(dtype.DECIMAL)],
        //                     ['c3', new Col(dtype.DECIMAL)],
        //                 ])
        //             ),
        //         ],
        //     ])
        // );

        return new AnyModule();
    }

    /**
     * Convert a id path to that
     */
    // protected idToPathMap(s: QualifiedIdentifier): string[] {
    //     return s.qidentifier.map(e => {
    //         if (e === '$') return '.';
    //         if (e === '^') return '..';
    //         return e;
    //     });
    // }
}
