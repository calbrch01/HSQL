import path from 'path';
import format from 'string-template';
import { AnyModule, Module } from '../ast/data/Module';
import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import { ECLCCInterface } from '../misc/eclcc/ECLCCInterfacing';
import { FileHandler } from '../misc/file/FileHandler';
import { FileProvider, FSFileProvider, MemFileProvider } from '../misc/file/FileProvider';
import { pathResult } from '../misc/file/pathResult';
import { FileType, FileTypeLists } from '../misc/file/FileType';
import resultStrings from '../misc/strings/resultStrings';
import std from '../misc/strings/std';
import { ErrorManager, ErrorType, TranslationIssue } from './ErrorManager';

/**
 * Manages a set of file providers, does not create them.
 * Create them as required
 */
export class FSManager {
    protected _fh: FileHandler;
    /**
     *
     * @param _errorManager
     * @param _fsSets eval order first to last
     */
    constructor(private _errorManager: ErrorManager, protected _fsSets: FileProvider[] = []) {
        this._fh = new FileHandler(this._errorManager);
    }
    addFileManager(x: FileProvider, top: boolean = false) {
        if (top) return this._fsSets.unshift(x);
        return this._fsSets.push(x);
    }
    get relsupport(): boolean {
        throw new Error('Method not implemented.');
    }
    public get fsSets(): FileProvider[] {
        return this._fsSets;
    }
    public get errorManager(): ErrorManager {
        return this._errorManager;
    }
    public get fh(): FileHandler {
        return this._fh;
    }

    /**
     * Obtain a list of defaults that use the ECL Standard library.
     * Note: Raises errors if eclcc is not present (non-halting)
     * @param err
     * @returns
     */
    static async DefaultsProvidersFactory(err: ErrorManager) {
        const imports = await new ECLCCInterface(err).getImports();
        const stdDefs = new MemFileProvider(new Map(std), false);
        return [stdDefs, ...imports.eclLibPath.map(importPath => new FSFileProvider(importPath, false))];
    }

    /**
     * Tells if a file/folder exists
     * Really not that useful as this uses {@link FSManager.existsWithPosition} which is used otherwise too. Not that efficient.
     * @param strpath Path without extension (Extension is ignored if used)
     * @param isLocal
     * @returns
     */
    exists(strpath: string, isLocal: boolean): boolean {
        return this.existsWithPosition(strpath, isLocal).pos != -1;
    }

    /**
     * Get to know which parts of the filestack responded favourably
     * @param x
     * @returns
     */
    protected existsWithPosition(strpath: string, isLocal: boolean) {
        // go down step by step
        const fssLen = this._fsSets.length;
        for (let fsi = 0; fsi < fssLen; fsi++) {
            const fss = this._fsSets[fsi];
            // skip for local
            if (!fss.relsupport && isLocal) {
                continue;
            }
            const strPathList = FileTypeLists.FileTypeQueryableList.map(e => FileHandler.changeExtension(strpath, e));

            const res = strPathList.map((e, i) => [FileTypeLists.FileTypeQueryableList[i], fss.stat(e)] as const);

            if (res.some(e => e[1].found === true)) {
                return { pos: fsi, stat: res };
            }
        }
        return { pos: -1, stat: FileTypeLists.FileTypeQueryableList.map(e => [e, pathResult.notFound] as const) };
    }
    /**
     * Bring a stat about the program
     * @param strpath
     * @param isLocal
     * @returns
     */
    stat(strpath: string, isLocal: boolean, override?: FileType.DHSQL | FileType.HSQL): pathResult {
        const { pos, stat: stats } = this.existsWithPosition(strpath, isLocal);
        if (pos === -1) {
            return pathResult.notFound;
        }
        for (const [type, found] of stats) {
            // make it
            // got this expression from a Digital electronics SOP. This works perfectly but there's a lot of overhead
            // FUTURE simplify this expression
            if (
                (override !== undefined && found.type === override && found.found) ||
                (override === undefined && found.found)
            ) {
                return pathResult.fileType(type, found.path);
            }
            // }
            if (found.found) return pathResult.fileType(type, found.path);
        }
        return pathResult.notFound;
    }

    /**
     * Read from a file
     * @param strpath String path - extension is ignored
     * @param isLocal
     * @param override An optional override to choose
     * @returns
     */
    read(
        strpath: string,
        isLocal: boolean,
        override?: FileType.DHSQL | FileType.HSQL
    ): { content: string; realPath: string; type: FileType.DHSQL | FileType.HSQL } {
        // const strpath = strset.join(path.sep);
        // let res;
        // go down step by step
        const { pos, stat: stats } = this.existsWithPosition(strpath, isLocal);

        if (pos === -1) {
            this.errorManager.halt(
                TranslationIssue.generalErrorToken(format(resultStrings.couldNotFindFileError), ErrorType.IO)
            );
        }
        for (const [type, pathResultVal] of stats) {
            // FUTURE find a nice way to combine this
            if (override === undefined) {
                if ((type === FileType.HSQL || type === FileType.DHSQL) && pathResultVal.found) {
                    const readFile = this._fsSets[pos].read(FileHandler.changeExtension(strpath, type));
                    if (readFile === undefined) {
                        return this.errorManager.halt(
                            TranslationIssue.generalErrorToken(
                                format(resultStrings.couldNotFindFileError),
                                ErrorType.IO
                            )
                        );
                    }
                    return { content: readFile, realPath: pathResultVal.path, type };
                }
            } else {
                if (type === override && pathResultVal.found) {
                    const readFile = this._fsSets[pos].read(FileHandler.changeExtension(strpath, type));
                    if (readFile === undefined) {
                        return this.errorManager.halt(
                            TranslationIssue.generalErrorToken(
                                format(resultStrings.couldNotFindFileError),
                                ErrorType.IO
                            )
                        );
                    }
                    return { content: readFile, realPath: pathResultVal.path, type };
                }
            }
        }
        // gone through everything, pls stop
        return this.errorManager.halt(
            TranslationIssue.generalErrorToken(format(resultStrings.couldNotFindFileError), ErrorType.IO)
        );
    }

    static parseQid(x: QualifiedIdentifier, currentContext: string): { res: string; isLocal: boolean } {
        let res = path.join(
            ...x.qidentifier.map(e => {
                if (e === '$') return '.';
                if (e === '^') return '..';
                return e;
            })
        );

        const isLocal = x.qidentifier[0] === '$';

        if (isLocal) {
            res = path.join(path.parse(currentContext).dir, res);
        }
        return { res, isLocal };
    }

    // /**
    //  *
    //  * // FUTURE proper applications
    //  * @deprecated
    //  * @param s
    //  * @returns
    //  */
    // resolveName(s: QualifiedIdentifier): Module {
    //     const { res: pathString, isLocal } = FSManager.parseQid(s);
    //     const x = this.stat(pathString, isLocal);
    //     // if(x.type===FileType.DHSQL)
    //     // do something here

    //     return new AnyModule();
    // }
}
