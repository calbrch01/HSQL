import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import { BaseASTNode } from './stmt/base/BaseASTNode';
import { DataMetaData, VariableTable } from './symbol/VariableTable';
import { VariableVisibility } from '../misc/ast/VariableVisibility';
import { TaskManager } from '../managers/TaskManager';
import { DeclarationContext, ImportStmtContext, ProgramContext } from '../misc/grammar/HSQLParser';
import { IASTVisitor } from './IASTVisitor';
import { ParserRuleContext } from 'antlr4ts';
import { TranslationIssue } from '../managers/ErrorManager';
import rs from '../misc/strings/resultStrings';
import format from 'string-template';
import path from 'path';
import { TagStore } from '../misc/ds/tagstore';
/**
 * AST root node
 */
export class AST implements BaseASTNode {
    /**
     * Holds existing variables
     */
    variableManager: VariableTable;

    stmts: BaseASTNode[];

    /**
     * Cached filename -> fileName getter will calculate this
     */
    protected _fileName: string | undefined;

    constructor(
        protected TaskMgr: TaskManager,
        public node: ParserRuleContext,
        protected _fileLoc: string,
        protected _isModule: boolean,
        private _insertDedupMacro: boolean
    ) {
        this.variableManager = new VariableTable();
        this.stmts = [];
        // this.insertDedupMacro = insertDedupMacro;
    }

    get fileName() {
        // cache this value
        if (this._fileName === undefined) {
            this._fileName = path.parse(this._fileLoc).name;
        }
        return this._fileName;
    }
    public get insertDedupMacro(): boolean {
        return this._insertDedupMacro;
    }
    public get isModule(): boolean {
        return this._isModule;
    }

    /**
     * Add import to AST
     * @param ctx
     * @param name
     * @param alias
     * @param internal whether it is an internal import
     */
    addImport(
        ctx: ImportStmtContext | ProgramContext | DeclarationContext,
        name: QualifiedIdentifier,
        alias: QualifiedIdentifier | undefined,
        includes: string[],
        internal: boolean = false
    ) {
        // note that it gets imported as whatever is the tail module
        const nameStr = name.tail;
        const aliasStr = alias?.toString();

        //resolve this import
        const { output: res, viz, trains } = this.TaskMgr.resolve(name, alias, includes, ctx);

        viz.forEach((val, key) => {
            const res = this.variableManager.addVisualizationDeclaration(key, val);

            if (!res) {
                this.TaskMgr.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.existsError, [key]), ctx));
            }
        });

        trains.forEach((val, key) => {
            const res = this.variableManager.addTrainDeclaration(key, val);

            if (!res) {
                this.TaskMgr.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.existsError, [key]), ctx));
            }
        });

        const x = this.variableManager.add(
            aliasStr ?? nameStr,
            DataMetaData(res, VariableVisibility.DEFAULT, internal)
        );

        if (x === false)
            this.TaskMgr.errorManager.push(
                TranslationIssue.semanticErrorToken(format(rs.existsError, [aliasStr ?? nameStr]), ctx)
            );
    }
    accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitAST?.(this) ?? visitor.defaultResult();
    }
}
