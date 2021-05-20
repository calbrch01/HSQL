import { ASTGenerator } from '../analysis/syntax/ASTGenerator';
import { HSQLTreeFactory } from '../analysis/tree';
import { AST } from '../ast/AST';
import { AnyModule } from '../ast/data/AnyModule';
import { Module } from '../ast/data/Module';
import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import { ErrorManager, ErrorMode, ErrorSeverity, TranslationError } from '../misc/error/Error';
import { ImportStmtContext } from '../misc/grammar/HSQLParser';
import { NoOutput, OutputManager } from './OutputManagers';
import { ReadingManager } from './ReadingManager';
import { iP } from '../misc/strings/misc';
import rs from '../misc/strings/resultStrings.json';
import { ECLCode } from '../code/ECLCode';
import { ECLGen } from '../analysis/ast/ECLGen';
import format from 'string-template';

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
    protected _errorManager: ErrorManager;
    protected treeFactory: HSQLTreeFactory;
    protected ASTMap: Map<string, AST>;

    /**
     *
     * @param mainFile Root file to start translation from
     * @param pedantic Whether to be pedantic or not
     * @param fileMap A fileMap. Missing files will be taken from disk
     * @param outputManager Output strategy - default is no output
     * @param baseLoc (does nothing for now) output relocation
     */
    constructor(
        public mainFile: string,
        public pedantic: boolean = false,
        public fileMap?: Map<string, string>,
        protected outputManager: OutputManager = new NoOutput(),
        public baseLoc?: string,
        protected suppressIssues: boolean = false
    ) {
        // choose either pedantic or normal based on the bool present
        this._errorManager = new ErrorManager(pedantic ? ErrorMode.PEDANTIC : ErrorMode.NORMAL);
        this.readingMgr = new ReadingManager(this._errorManager, fileMap, baseLoc);
        this.ASTMap = new Map<string, AST>();
        this.treeFactory = new HSQLTreeFactory(this._errorManager);
    }

    public get errorManager() {
        return this._errorManager;
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
            this._errorManager.push(
                TranslationError.semanticErrorToken('Import cycle detected. Please remove redundant import', cause)
            );
        }

        const file = this.readingMgr.readSync(fn);

        const { tree, charStreams, tokenStreams } = this.treeFactory.makeTree(file);
        const x = new ASTGenerator(this, this._errorManager, tree);
        // get AST will read imports and call the rest of the required generate ASTS
        const ast = x.getAST();
        this.ASTMap.set(fn, ast);
        return { ast, tree, tokenStreams, asts: this.ASTMap };
    }

    /**
     * Get a lisp-style representation of the parse tree generated for a single file
     * @param fn filename (Leave empty to use mainfile)
     */
    getStringTree(fn: string = this.mainFile) {
        const file = this.readingMgr.readSync(fn);

        const treebundle = this.treeFactory.makeTree(file);
        // return whatever x was, and add `strTree` to it
        return {
            ...treebundle,
            strTree: treebundle.tree.toStringTree(),
        };
    }

    /**
     * Generate outputs for all files
     *
     */
    generateOutputs() {
        // TODO: add support for specific files only
        for (const [fn, ast] of this.ASTMap) {
            // console.debug(`File:${fn}`);
            const x = new ECLGen(this.errorManager, ast).getCode();
            // console.log(`Result`, x);
            const res = this.outputManager.do(fn, x.toString());
            if (!res) this.errorManager.push(new TranslationError(format(rs.couldNotWrite)));
        }
    }

    /**
     * reportErrors if suppress
     */
    reportErrors() {
        // run this function if it exists else warn the user
        // but, only if its true
        !this.suppressIssues &&
            (this.outputManager.reportIssues(this._errorManager.issues) ?? console.log(iP(rs.noErrorOutput)));
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

        // FIXME actually resolve, currently we just eject an anymodule
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

        outputmethod.done?.();
    }
}
