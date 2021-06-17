import { EOL } from 'os';
import format from 'string-template';
import { argType } from '..';
import { AST } from '../ast/AST';
import { Module } from '../ast/data/Module';
import { ECLGenerator } from '../conv/ast/ECLGenerator';
import { ASTGenerator } from '../conv/syntax/ASTGenerator';
import { HSQLTreeFactory } from '../conv/tree';
import { ICodeGenerator } from '../misc/ast/ICodeGenerator';
import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import { ImportStmtContext } from '../misc/grammar/HSQLParser';
import { iP } from '../misc/lib/formatting';
import rs from '../misc/strings/resultStrings';
import { ErrorManager, ErrorMode, ErrorSeverity, TranslationIssue } from './ErrorManager';
import { NoOutput, OutputManager } from './OutputManagers';
import { ReadingManager } from './ReadingManager';
import { FileType } from '../misc/file/FileType';

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
    public ASTMap: Map<string, AST>;

    /**
     *
     * @param mainFile Root file to start translation from
     * @param pedantic Whether to be pedantic or not
     * @param fileMap A fileMap. Missing files will be taken from disk
     * @param outputManager Output strategy - default is no output
     * @param baseLoc (does nothing for now) output relocation
     * @param fsBacked Whether we can fall back to disk if fileMap cannot provide file (Useful in IDEs where fileMap acts as an overlay)
     * @param args Optional presence of the arguments
     */
    constructor(
        public mainFile: string,
        public pedantic: boolean = false,
        public fileMap?: Map<string, string>,
        protected outputManager: OutputManager = new NoOutput(),
        public baseLoc?: string,
        protected fsBacked: boolean = false,
        protected suppressIssues: boolean = false,
        public args: Partial<argType> = {} // protected args:argType
    ) {
        // choose either pedantic or normal based on the bool present
        this._errorManager = new ErrorManager(pedantic ? ErrorMode.PEDANTIC : ErrorMode.NORMAL);
        this.readingMgr = new ReadingManager(this._errorManager, fileMap, fsBacked, baseLoc);
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
                TranslationIssue.semanticErrorToken('Import cycle detected. Please remove redundant import', cause)
            );
        }

        this.errorManager.pushFile(fn);

        const file = this.readingMgr.readSync(fn);

        const { tree, tokenStreams } = this.treeFactory.makeTree(file);
        const x = new ASTGenerator(this, this._errorManager, tree);
        // get AST will read imports and call the rest of the required generate ASTS
        const ast = x.getAST();
        this.ASTMap.set(fn, ast);

        this.errorManager.popFile();
        return { ast, tree, asts: this.ASTMap };
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
    async generateOutputs() {
        /** Entries needed to write */
        const work: Promise<void>[] = [];
        const fns = [...this.ASTMap.entries()];
        for (const [fn, ast] of fns) {
            // console.debug(`File:${fn}`);
            const generator: ICodeGenerator = new ECLGenerator(this.errorManager, ast); //new ECLGen(this.errorManager, ast);
            //push error file context
            this.errorManager.pushFile(fn);
            //do the codegen
            const x = generator.getCode();
            //pop error file context
            this.errorManager.popFile();
            // console.log(`Result`, x);
            //get new filename
            const newFn = this.readingMgr.fh.changeExtension(fn, FileType.ECL);
            const res = this.outputManager.do(newFn, x.join(EOL));
            work.push(res);
        }
        // Note: Promise.allSettled does not as per API throw any errors.
        // This was put in because as the MDN does not explicitly state if
        // there's _ever_ any condition on which it rejects. Remove if sure.
        try {
            const results = await Promise.allSettled(work);
            this.outputManager.done?.();
            //gather the rejected errors
            results.forEach((e, i) => {
                if (e.status === 'rejected') {
                    // equivalent to writing `const fn = fns[i][0]`
                    const [fn] = fns[i];

                    //push error file context
                    this.errorManager.pushFile(fn);

                    this.errorManager.push(new TranslationIssue(format(rs.couldNotWrite, [fn])));
                    //pop error file context
                    this.errorManager.popFile();
                }
            });
        } catch (e) {
            this.errorManager.push(
                new TranslationIssue(
                    format(rs.unexpectedErrorTagged, [e.cause ?? e.msg ?? e.message ?? rs.unexpectedError])
                )
            );
        }
        // if (!res) this.errorManager.push(new TranslationError(format(rs.couldNotWrite)));
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
     * Get list of issues
     */
    getIssues() {
        return {
            suppressed: this.suppressIssues,
            issues: this._errorManager.issues,
        };
    }

    /**
     * Counts of issues
     * @returns
     */
    issueStats() {
        const { suppressed, issues } = this.getIssues();
        let ecount = 0,
            wcount = 0,
            icount = 0;
        for (const issue of issues) {
            switch (issue.severity) {
                case ErrorSeverity.ERROR:
                    ecount++;
                    break;
                case ErrorSeverity.WARNING:
                    wcount++;
                    break;
                case ErrorSeverity.INFO:
                    icount++;
                    break;
            }
        }
        return {
            suppressed,
            counts: [ecount, wcount, icount] as const,
        };
    }

    /**
     * resolve a file
     * @param q resolve this qualified identifier into face
     * @returns the module that was resolved
     */
    resolve(q: QualifiedIdentifier): Module {
        // const identifiers = q.qidentifier;
        // let joinable = '.';
        const fsl = q.qidentifier;

        this.args.g && console.log(`DIRNAME`, __dirname);

        // for (const segment of identifiers) {
        //     joinable = path.join(joinable, segment);
        //     if (!fs.existsSync(joinable)) {
        //         this.errorListener;
        //     }
        // }
        // return joinable;
        const res = this.readingMgr.resolveName(q);
        // FIXME 03/06 actually resolve, currently we just eject an anymodule
        return res;
    }
}
