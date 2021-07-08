import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import { BaseASTNode } from './stmt/base/BaseASTNode';
import { DataMetaData, VariableTable } from './symbol/VariableTable';
import { VariableVisibility } from '../misc/ast/VariableVisibility';
import { TaskManager } from '../managers/TaskManager';
import { ImportStmtContext, ProgramContext } from '../misc/grammar/HSQLParser';
import { IASTVisitor } from './IASTVisitor';
import { ParserRuleContext } from 'antlr4ts';
import { TranslationIssue } from '../managers/ErrorManager';
import rs from '../misc/strings/resultStrings';
import format from 'string-template';
/**
 * AST root node
 */
export class AST implements BaseASTNode {
    /**
     * Holds existing variables
     */
    variableManager: VariableTable;

    stmts: BaseASTNode[];

    constructor(protected TaskMgr: TaskManager, public node: ParserRuleContext) {
        this.variableManager = new VariableTable();
        this.stmts = [];
    }

    /**
     * Add import to AST
     * @param ctx
     * @param name
     * @param alias
     */
    addImport(ctx: ImportStmtContext | ProgramContext, name: QualifiedIdentifier, alias?: QualifiedIdentifier) {
        // note that it gets imported as whatever is the tail module
        const nameStr = name.tail;
        const aliasStr = alias?.toString();

        //resolve this import
        const { output: res, viz } = this.TaskMgr.resolve(name, alias);

        viz.forEach((val, key) => {
            const res = this.variableManager.addVisualizationDeclaration(key, val);

            if (!res) {
                this.TaskMgr.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.existsError, [key]), ctx));
            }
        });

        const x = this.variableManager.add(aliasStr ?? nameStr, DataMetaData(res, VariableVisibility.DEFAULT));

        if (x === false)
            this.TaskMgr.errorManager.push(
                TranslationIssue.semanticErrorToken(format(rs.existsError, [aliasStr ?? nameStr]), ctx)
            );
    }
    accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitAST(this);
    }
}
