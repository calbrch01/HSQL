import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import { BaseASTNode } from './stmt/base/BaseASTNode';
import { DataMetaData, VariableTable, VariableVisibility } from './symbol/VariableTable';
import { TaskManager } from '../managers/TaskManager';
import { ImportStmtContext } from '../misc/grammar/HSQLParser';
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
    addImport(ctx: ImportStmtContext, name: QualifiedIdentifier, alias?: QualifiedIdentifier) {
        // note that it gets imported as whatever is the tail module
        const nameStr = name.tail;
        const aliasStr = alias?.toString();

        //resolve this import
        const res = this.TaskMgr.resolve(name);

        const x = this.variableManager.add(aliasStr ?? nameStr, DataMetaData(res, VariableVisibility.DEFAULT));

        if (x === false)
            this.TaskMgr.errorManager.push(
                TranslationIssue.semanticErrorToken(format(rs.existsError, [aliasStr ?? nameStr]), ctx)
            );
        // this not our problem - the ast generator must do this
        //this.stmts.push(new Import(ctx, name, alias));
    }
    accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitAST(this);
    }
}
