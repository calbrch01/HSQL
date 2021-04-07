import { ASTGenerator } from '../analysis/syntax/ASTGenerator';
import { HSQLTreeFactory } from '../analysis/tree';
import { AST } from '../ast/AST';
import { AnyModule } from '../ast/data/AnyModule';
import { Module } from '../ast/data/Module';
import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import { ErrorManager, ErrorMode, TranslationError } from '../misc/error/Error';
import { ImportStmtContext } from '../misc/grammar/HSQLParser';
import { OutputManager } from './OutputManagers';
import { ReadingManager } from './ReadingManager';

export enum Intent {
    CHECK, // construct AST
    MAKE, // Generate code from AST
    RUN, // Send to execution
}

export enum OutputMethod {
    FILES,
    STDOUT,
}

/**
 * Manage Tasks - Generate ASTs, Resolve vars
 *
 * Generating ASTs populate the ASTmap
 *
 * ASTmap then can be translated to ECL
 *
 * ECL can then be flushed to disk (if allowed) or printed out
 *
 */
export class TaskManager {
    protected readingMgr: ReadingManager;
    protected errorManager: ErrorManager;

    protected ASTMap: Map<string, AST>;
    constructor(
        public mainFile: string,
        public pedantic: boolean = false,
        public fileMap?: Map<string, string>,
        public baseLoc?: string
    ) {
        // choose either pedantic or normal based on the bool present
        this.errorManager = new ErrorManager(pedantic ? ErrorMode.PEDANTIC : ErrorMode.NORMAL);
        this.readingMgr = new ReadingManager(this.errorManager, fileMap, baseLoc);
        this.ASTMap = new Map<string, AST>();
    }

    /**
     * Generate AST for a given file
     * @param fn file (defaults to mainfile)
     * @param includes optional include guard
     * @param cause optional cause for import
     * @returns
     */
    generateAST(fn: string = this.mainFile, includes: string[] = [], cause?: ImportStmtContext) {
        if (includes.includes(fn)) {
            this.errorManager.push(
                TranslationError.semanticErrorToken('Import cycle detected. Please remove redundant import', cause)
            );
        }

        const file = this.readingMgr.readSync(fn);

        const { tree, charStreams, tokenStreams } = HSQLTreeFactory.makeTree(file);
        const x = new ASTGenerator(this, this.errorManager);
        // get AST will read imports and call the rest of the required generate ASTS
        const ast = x.getAST(tree);
        this.ASTMap.set(fn, ast);
        return { ast, tree, tokenStreams, asts: this.ASTMap };
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

    /**
     * use existing fileset to generate programs
     */
    make(outputmethod: OutputManager) {
        /* TODO:
         * generate code, and deal with them
         * note the flag where we skip deps
         */
    }
}
