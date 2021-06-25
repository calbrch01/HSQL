import path from 'path';
import { pathResult, pathResultFragment } from '../file/FileProvider';
import { FileType } from '../file/FileType';

// export type FileNode =
//     | {
//           type: FileType.DIR;
//           children: FileNode[];
//       }
//     | {
//           type: Omit<FileType, FileType.DIR>;
//           contents: string;
//       };

export type FileNameSegmented = string[];

export interface FileTreeNode {
    exists(s: FileNameSegmented): boolean;
    stat(s: FileNameSegmented): pathResult;
    lookupAndAdd(s: FileNameSegmented, x: FileTreeNode): FileTreeNode | undefined;
    lookup(s: FileNameSegmented): FileTreeNode | undefined;
    get self(): Exclude<pathResultFragment, { type: FileType.OTHER; found: false }>;
    // get realPath(): string;
    setAsChild(s: string, x: FileTreeNode): FileTreeNode | undefined;
}

export namespace FileTreeNode {
    export function splitFileTreeNodeName(s: string): FileNameSegmented {
        return s.split(path.sep);
    }
}

/**
 * Non leaf nodes
 */
export class FileTreeDirNode implements FileTreeNode {
    constructor(private _rootNodes: Map<string, { realName: string; element: FileTreeNode }> = new Map()) {}

    protected get rootNodes(): Map<string, { realName: string; element: FileTreeNode }> {
        return this._rootNodes;
    }
    protected set rootNodes(value: Map<string, { realName: string; element: FileTreeNode }>) {
        this._rootNodes = value;
    }
    get self() {
        return { type: FileType.DIR, found: true } as const;
    }

    /**
     * Do NOT use this for 0 length, its the same as 1 length
     * @param s string[] of *atleast* one element length
     */
    lookupAndAdd(s: FileNameSegmented, x: FileTreeNode): FileTreeNode | undefined {
        if (s.length === 0) {
            return undefined;
        }
        if (s.length <= 1) {
            this._rootNodes.set(s[0].toLowerCase(), { realName: s[0], element: x });
            return x;
        }
        // for any other length, traverse or add

        // shift() mutably edits the data, this creates a copy
        const childPath = s.slice(1);

        // create child if not exists, this allows for reuse of existing directories
        let child = this._rootNodes.get(s[0].toLowerCase());
        if (child === undefined) child = { realName: s[0], element: new FileTreeDirNode() };

        this.lookupAndAdd([s[0]], child.element);
        return child.element.lookupAndAdd(childPath, x);
    }

    lookup(s: FileNameSegmented): FileTreeNode | undefined {
        if (s.length === 0) {
            return undefined;
        }
        if (s.length <= 1) {
            return this._rootNodes.get(s[0].toLowerCase())?.element;
            // return x;
        }
        // for any other length, traverse or add

        // shift() mutably edits the data, this creates a copy
        const childPath = s.slice(1);

        // create child if not exists, this allows for reuse of existing directories
        let child = this._rootNodes.get(s[0].toLowerCase());
        if (child === undefined) return undefined;

        return child.element.lookup(childPath);
    }
    setAsChild(s: string, x: FileTreeNode): FileTreeNode {
        this._rootNodes.set(s.toLowerCase(), { realName: s, element: x });
        return this;
    }
    /**
     * Look up if a file exists
     * @param s
     * @returns
     */
    exists(s: FileNameSegmented): boolean {
        // GIGO - Garbage in, Garbage out. Don't give empty queries
        // FUTURE - should this be true or false?
        if (s.length === 0) return true;
        // const x = s[0];
        if (this._rootNodes.has(s[0].toLowerCase())) {
            return this._rootNodes.get(s[0].toLowerCase())?.element.exists(s.slice(1)) ?? false;
        } else {
            return false;
        }
    }
    stat(x: FileNameSegmented): pathResult {
        if (x.length === 0) return { type: FileType.OTHER, found: false };
        if (x.length === 1) {
            const element = this._rootNodes.get(x[0].toLowerCase());
            if (element !== undefined) {
                return { ...element.element.self, path: element?.realName };
            }
            return pathResult.notFound; /* { type: FileType.OTHER, found: false }; */
        }
        //length>=1

        const element = this._rootNodes.get(x[0].toLowerCase());
        if (element !== undefined) {
            const resSegment = element.element.stat(x.slice(1));
            if (resSegment.found) {
                return { ...resSegment, path: path.join(element.realName, resSegment.path) };
            }
            return resSegment;
        } else {
            return pathResult.notFound;
        }

        // if (this._rootNodes.has(x[0].toLowerCase())) {
        //     return (
        //         this._rootNodes.get(x[0].toLowerCase())?.element.lookup(x.slice(1)) ?? {
        //             type: FileType.OTHER,
        //             found: false,
        //         }
        //     );
        // } else {
        //     return { type: FileType.OTHER, found: false };
        // }
    }
}
/**
 * Leaf nodes
 */
export class FileTreeFileNode implements FileTreeNode {
    constructor(protected file: Exclude<FileType, FileType.DIR | FileType.OTHER>, protected _content: string) {}

    get self() {
        return {
            type: this.file,
            found: true,
        } as const;
    }
    public get content() {
        return this._content;
    }
    exists(s: FileNameSegmented): boolean {
        if (s.length === 0) return false;
        return false;
    }
    stat(s: FileNameSegmented): pathResult {
        if (s.length === 0) return { ...this.self, path: '' };
        return { type: FileType.OTHER, found: false };
    }
    lookupAndAdd(s: FileNameSegmented, x: FileTreeNode): FileTreeNode | undefined {
        return undefined;
    }
    lookup(s: FileNameSegmented): FileTreeNode | undefined {
        return undefined;
    }
    setAsChild(s: string, x: FileTreeNode): FileTreeNode | undefined {
        return undefined;
    }
}
