import { ASTGenerator } from '../analysis/syntax/ASTGenerator';
import { HSQLTreeFactory } from '../analysis/tree';
import { AST } from '../ast/AST';
import { AnyModule } from '../ast/data/AnyModule';
import { Module } from '../ast/data/Module';
import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import { ErrorManager, ErrorMode } from '../misc/error/Error';
import { ReadingManager } from './ReadingManager';

export enum Intent {
    CHECK, // construct AST
    MAKE, // Generate code from AST
    RUN, // Send to execution
}

/**
 * Manage Tasks - Generate ASTs, Resolve vars
 *
 */
export class TaskManager {
    protected readingMgr: ReadingManager;
    protected errorManager: ErrorManager;
    constructor(
        public mainFile: string,
        public pedantic: boolean = false,
        public fileMap?: Map<string, string>,
        public baseLoc?: string
    ) {
        // choose either pedantic or normal based on the bool present
        this.errorManager = new ErrorManager(pedantic ? ErrorMode.PEDANTIC : ErrorMode.NORMAL);
        this.readingMgr = new ReadingManager(this.errorManager, fileMap, baseLoc);
    }

    /**
     * Start point
     * @param fn file (defaults to mainfile)
     */
    generateAST(fn: string = this.mainFile) {
        const file = this.readingMgr.readSync(fn);
        const treefac = new HSQLTreeFactory();
        // equivalent to writing (x is not created in the actual code, but the rest are)
        // const x = treefac.makeTree(file)
        // const tree = x.tree
        // const charStreams = x.charStreams
        // const tokenStreams = x.tokenStreams
        const { tree, charStreams, tokenStreams } = treefac.makeTree(file);
        const x = new ASTGenerator(this, this.errorManager);
        const ast = x.getAST(tree);
        return { ast, tree, tokenStreams };
    }

    /**
     * resolve a file
     * @param q resolve this qualified identifier into face
     * @returns the module that was resolved
     */
    resolve(q: QualifiedIdentifier): Module {
        // const identifiers = q.qidentifier;
        // let joinable = '.';

        // for (const segment of identifiers) {
        //     joinable = path.join(joinable, segment);
        //     if (!fs.existsSync(joinable)) {
        //         this.errorListener;
        //     }
        // }
        // return joinable;

        // FIXME actually resolve
        return new AnyModule();
    }
}
