import { EOL } from 'os';
import format from 'string-template';
import { argType } from '..';
import { AST } from '../ast/AST';
import { AnyModule, Module } from '../ast/data/Module';
import { ECLGenerator } from '../conv/ast/ECLGenerator';
import { ASTGen, ASTGenerator } from '../conv/syntax/ASTGenerator';
import { HSQLTreeFactory } from '../conv/ParseTreeGenerator';
import { ICodeGenerator } from '../misc/ast/ICodeGenerator';
import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import { ImportStmtContext, ProgramContext } from '../misc/grammar/HSQLParser';
import { issueFormatter } from '../misc/lib/formatting';
import rs from '../misc/strings/resultStrings';
import { ErrorManager, ErrorMode, ErrorSeverity, ErrorType, TranslationIssue } from './ErrorManager';
import { NoOutput, OutputManager } from './OutputManagers';
import { FileType } from '../misc/file/FileType';
import { FileHandler } from '../misc/file/FileHandler';
import { FileProvider } from '../misc/file/FileProvider';
import { FSManager } from './FSManager';
import { DataVisualization } from '../ast/symbol/VariableTable';
import { VariableVisibility } from '../misc/ast/VariableVisibility';
import { join, relative } from 'path';

/**
 * Manage Tasks - Generate ASTs, Resolve vars
 *
 * Note that imports and location setup needs to be done first
 *
 * Generating ASTs populate the ASTmap
 *
 * ASTmap then can be translated to ECL
 *
 * ECL can then be flushed to disk (if allowed) or printed out
 *
 * To reset, use clear()
 *
 */
export class TaskManager {
    /** File system manager */
    private _fsmanager: FSManager;
    /** Error Manager */
    private _errorManager: ErrorManager;
    /** Parse Tree Creation */
    protected treeFactory: HSQLTreeFactory;
    private _ASTMap: Map<string, { fileType: FileType.HSQL | FileType.DHSQL; ast: AST }>;

    /**
     * Map the required input file paths to the real output paths
     */
    private _inputFileToOutputFile: Map<string, string>;

    /**
     * Create a Task Manager without any file sourcces.
     * @param mainFile Root file to start translation from
     * @param pedantic Whether to be pedantic or not
     * @param fileMap A fileMap. Missing files will be taken from disk
     * @param outputManager Output strategy - default is no output
     * @param baseLoc offset from current directory (undefined)
     * @param args Optional additional arguments
     */
    constructor(
        public mainFile: string,
        public pedantic: boolean = false,
        protected outputManager: OutputManager = new NoOutput(),
        protected suppressIssues: boolean = false,
        public args: Partial<argType> = {} // protected args:argType
    ) {
        // choose either pedantic or normal based on the bool present
        this._errorManager = new ErrorManager(pedantic ? ErrorMode.PEDANTIC : ErrorMode.NORMAL);
        // this.readingMgr = new ReadingManager(this._errorManager, fileMap, fsBacked, baseLoc);
        this._fsmanager = new FSManager(this._errorManager);
        this._ASTMap = new Map();
        this._inputFileToOutputFile = new Map();
        this.treeFactory = new HSQLTreeFactory(this._errorManager);
    }

    /**
     * Clear Issue Manager and remove built ASTs.
     * This is a better alternative to generating a new task manager every time
     * @param mainFile
     */
    public clear(mainFile?: string) {
        this._errorManager.clear();
        this._ASTMap.clear();
        this._inputFileToOutputFile.clear();
        // if passed, set it
        if (mainFile) {
            this.mainFile = mainFile;
        }
    }

    /**
     * Add in file providers
     * Note: Its a good idea to add these in after initializing an instance of {@link TaskManager}
     */
    public addFileProviders(...fileproviders: FileProvider[]) {
        for (const fileprovider of fileproviders) {
            this._fsmanager.addFileManager(fileprovider);
        }
    }

    /**
     * Generate AST for a given file.
     * Note that this creates ASTs for dependant files as well
     * @param fnNoExt file (defaults to mainfile)
     * @param fileType override
     * @param local is local file (true)
     * @param includes optional include guard
     * @param cause optional cause for import
     * @returns
     */
    generateAST(
        fnNoExt: string = this.mainFile,
        fileType?: FileType.DHSQL | FileType.HSQL,
        local: boolean = true,
        includes: string[] = [],
        cause?: ImportStmtContext | ProgramContext
    ) {
        if (includes.includes(fnNoExt)) {
            this._errorManager.halt(TranslationIssue.semanticErrorToken(rs.importCycleError, cause));
        }
        // read the file, getting the actual path for usage
        const { realPath, content: file, type } = this._fsmanager.read(fnNoExt, local, fileType);

        // error manager will hold the real paths, includes array *will hold the imaginary paths*
        this.errorManager.pushFile(realPath);
        includes.push(fnNoExt);

        // make the parse tree, and use it to generate the AST
        const { tree } = this.treeFactory.makeTree(file, type);
        const x: ASTGen = new ASTGenerator(this, this._errorManager, tree, includes);
        // get AST will read imports and call the rest of the required generate ASTS
        const ast = x.getAST();

        // set the ast
        this._ASTMap.set(realPath, { fileType: type, ast });
        // set the appropriate file path
        this._inputFileToOutputFile.set(fnNoExt, realPath);

        //pop the includes array and the error context
        includes.pop();
        this.errorManager.popFile();

        // return current ast, all the asts and the parse tree as well for reference
        return { ast, tree, asts: this._ASTMap };
    }

    /**
     * Get a lisp-style representation of the parse tree generated for a single file
     * @param fn filename (Leave empty to use mainfile)
     */
    getStringTree(fn: string = this.mainFile, override: FileType.DHSQL | FileType.HSQL = FileType.HSQL) {
        const { content: file, realPath, type } = this._fsmanager.read(fn, true, override);

        this.errorManager.pushFile(realPath);
        const treebundle = this.treeFactory.makeTree(file, type, realPath);
        this.errorManager.popFile();

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
        const fns = [...this._ASTMap.entries()];
        for (const [fn, { ast, fileType }] of fns) {
            // ignore dhsql files
            if (fileType === FileType.DHSQL) continue;
            const generator: ICodeGenerator = new ECLGenerator(this.errorManager, ast);
            // push error file context
            this.errorManager.pushFile(fn);
            // do the codegen with the above error context
            const x = generator.getCode();
            // pop error file context
            this.errorManager.popFile();
            // console.log(`Result`, x);

            // get new filename
            const newFn = FileHandler.changeExtension(fn, FileType.ECL);
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
            // this should ideally never happen - Promise.allSettled never rejects
            this.errorManager.push(
                TranslationIssue.generalErrorToken(
                    format(rs.unexpectedErrorTagged, [e.cause ?? e.msg ?? e.message ?? rs.unexpectedError]),
                    ErrorType.OTHER
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
            (this.outputManager.reportIssues(this._errorManager.issues) ??
                console.log(issueFormatter(rs.noErrorOutput)));
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
     * @returns [error count, warning count, info count]
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
     * Resolve a file, and get its contents
     * @param q resolve this qualified identifier into face
     * @returns the module that was resolved
     */
    resolve(
        q: QualifiedIdentifier,
        alias: QualifiedIdentifier | undefined,
        includes: string[],
        cause?: ImportStmtContext | ProgramContext
    ): { output: Module; viz: Map<string, DataVisualization> } {
        // const fsl = q.qidentifier;

        this.args.g && console.log(`DIRNAME`, __dirname);

        let { res: pathString, isLocal } = FSManager.parseQid(q, includes[includes.length - 1]);

        const x = this._fsmanager.stat(pathString, isLocal);

        if (!x.found) {
            this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.notFound, q.toString()), cause));
        } else if (x.type === FileType.DHSQL || x.type === FileType.HSQL) {
            const { ast } = this.generateAST(pathString, x.type, isLocal, includes, cause);

            // get the root stack
            const vars = ast.variableManager.vars[0];
            if (vars === undefined) {
                // This should not be happening, but we can be careful and return empty
                return { output: new AnyModule(), viz: new Map() };
            }
            const rows = [...vars]
                .filter(([_name, entry]) => entry.vis === VariableVisibility.EXPORT && entry.internal === false)
                .map(([name, entry]) => [name, entry.data] as const);

            // filter and get all the entries that are replaced, and now we are no longer exporting them
            const vizMaps = [...ast.variableManager.visualizationDeclarations]
                .filter(([_, entry]) => entry.exported === true)
                .map(([name, entry]) => {
                    entry.exported = false;
                    entry.source = alias?.toString() ?? q.tail;
                    return [name, entry] as const;
                });

            return { output: new Module(new Map(rows)), viz: new Map(vizMaps) };
        }

        return { output: new AnyModule(), viz: new Map() };
    }

    // getters and setters from here

    public get inputFileToOutputFile(): Map<string, string> {
        return this._inputFileToOutputFile;
    }
    public get ASTMap(): Map<string, { fileType: FileType.HSQL | FileType.DHSQL; ast: AST }> {
        return this._ASTMap;
    }
    /**
     * Obtain an instance of the ErrorManager
     */
    public get errorManager() {
        return this._errorManager;
    }
    protected get fsmanager(): FSManager {
        return this._fsmanager;
    }
}
