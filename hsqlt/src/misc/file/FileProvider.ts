import path from 'path';
import { FileTreeDirNode, FileTreeFileNode, FileTreeNode } from '../ds/filetree';
import { FileType } from './FileType';
import fs from 'fs';
import { FileHandler } from './FileHandler';

/**
 * A path result. If found, its actual path (non-case sensitive version)
 */
export type pathResult =
    | {
          type: Exclude<FileType, FileType.OTHER>;
          path: string;
          found: true;
      }
    | {
          type: FileType.OTHER;
          found: false;
      };

/**
 * A path result, where the path result is not known
 */
export type pathResultFragment =
    | {
          type: Exclude<FileType, FileType.OTHER>;
          found: true;
      }
    | {
          type: FileType.OTHER;
          found: false;
      };

/**
 * Methods and constants for helping create pathResult objeects
 */
export namespace pathResult {
    export const notFound: pathResult = {
        found: false,
        type: FileType.OTHER,
    };
    export function fileType<T extends Exclude<FileType, FileType.OTHER>>(x: T, path: string) {
        return { found: true as const, type: x, path };
    }
    export function fileTypeFragment<T extends Exclude<FileType, FileType.OTHER>>(x: T) {
        return { found: true as const, type: x };
    }
}

/**
 * A file provider - provides files for resolving.
 */
export interface FileProvider {
    /** Whether relative paths are supported or not . Also note that this means whether we can use this as a starting file or not*/
    get relsupport(): boolean;
    exists(x: string): boolean;
    stat(x: string): pathResult;
    read(x: string): string | undefined;
}

/** A file map held in memory */
export class MemFileProvider implements FileProvider {
    protected _fileMap: FileTreeDirNode;
    constructor(
        fileMap: Map<string, { content: string; type: Exclude<FileType, FileType.OTHER | FileType.DIR> }> = new Map(),
        protected _relsupport: boolean = false
    ) {
        this._fileMap = new FileTreeDirNode();
        for (const [fn, { content, type }] of fileMap) {
            let fnn = path.normalize(fn);
            this._fileMap.lookupAndAdd(FileTreeNode.splitFileTreeNodeName(fnn), new FileTreeFileNode(type, content));
        }
    }
    get relsupport() {
        return this._relsupport;
    }
    get fileMap() {
        return this._fileMap;
    }

    add(fn: string, type: Exclude<FileType, FileType.OTHER | FileType.DIR>, content: string) {
        const fnn = path.normalize(fn);
        return this._fileMap.lookupAndAdd(FileTreeNode.splitFileTreeNodeName(fnn), new FileTreeFileNode(type, content));
    }

    exists(x: string): boolean {
        x = path.normalize(x);
        const res = this.fileMap.stat(FileTreeNode.splitFileTreeNodeName(x));
        return res.found;
    }
    stat(x: string): pathResult {
        x = path.normalize(x);
        return this.fileMap.stat(FileTreeNode.splitFileTreeNodeName(x));
    }
    read(x: string): string | undefined {
        const res = this._fileMap.lookup(FileTreeNode.splitFileTreeNodeName(path.normalize(x)));
        // throw new Error('Method not implemented.');
        if (res instanceof FileTreeFileNode) {
            return res.content;
        } else {
            return undefined;
        }
    }
}

/**
 * Using this file provider allows for file access (Please note as there is a flag to help with access)
 */
export class FSFileProvider implements FileProvider {
    constructor(protected _loc: string = '', protected _relsupport: boolean = true, protected _allowOutside = false) {}
    get relsupport(): boolean {
        return this._relsupport;
    }
    exists(x: string): boolean {
        // const fnn = path.join(this._loc, path.normalize(x));
        // // if we ended up with a file location outside this, bail.
        // if (path.relative(this._loc, fnn).startsWith('..') && !this._allowOutside) return false;
        // const pn = path.relative(this._loc, fnn);
        // return fs.existsSync(path.join(this._loc, x));

        return this.stat(x).found;
    }

    /**
     * Stat a file, and get its source location if its valid
     * @param x
     * @returns
     */
    stat(x: string): pathResult {
        // add the new path to the location
        x = path.join(this._loc, path.normalize(x));
        // if its outside
        const relpath = path.relative(this._loc, x);
        if (relpath.startsWith('..') && !this._allowOutside) {
            return pathResult.notFound;
        }

        const pathSplit = relpath.split(path.sep);
        let realpath = this._loc;
        try {
            for (const pathSplitElement of pathSplit) {
                const res = fs.readdirSync(path.normalize(realpath));
                const allowed = res.filter(e => e.toLowerCase() === pathSplitElement.toLowerCase());
                if (allowed.length >= 1) {
                } else {
                    return pathResult.notFound;
                }
                //sorry, if you're working with a case insensitive language, this is a good assumption
                realpath = path.join(realpath, allowed[0]);
            }
        } catch (e) {
            return pathResult.notFound;
        }

        const res = this.getFileType(realpath);
        if (res.found) {
            return { ...res, path: relpath };
        }
        return res;
    }

    protected getFileType(x: string): pathResultFragment {
        const y = fs.statSync(x);
        if (y.isDirectory()) {
            return { type: FileType.DIR, found: true };
        }
        const loc = path.parse(x);
        switch (loc.ext.toLowerCase()) {
            case '.ecl':
                return pathResult.fileTypeFragment(FileType.ECL);
            case '.hsql':
                return pathResult.fileTypeFragment(FileType.HSQL);
            case '.dhsql':
                return pathResult.fileTypeFragment(FileType.DHSQL);
            default:
                // just the same as not found
                return pathResult.notFound;
        }
    }

    /**
     * Read a file.
     *
     * @param x
     * @returns
     */
    read(x: string): string | undefined {
        // this is a reusable way of finding the real file name
        const res = this.stat(x);
        if (res.found === false) return undefined;
        const { path: pathLoc, type } = res;
        if (pathLoc == undefined || type === FileType.DIR) return undefined;
        try {
            return fs.readFileSync(pathLoc).toString();
        } catch (e) {
            return undefined;
        }
    }
}
