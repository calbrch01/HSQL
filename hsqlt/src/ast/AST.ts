import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import { ReadingManager } from '../managers/ReadingManager';
import { DataType } from './data/base/DataType';
import { BaseASTNode } from './stmt/base/BaseASTNode';
import { StmtExpression } from './stmt/base/StmtExpression';
import { Import } from './stmt/Import';
import { VariableTable, VariableVisibility } from './symbol/VariableTable';
import { TaskManager } from '../managers/TaskManager';
import { ImportStmtContext } from '../misc/grammar/HSQLParser';
import { IASTVisitor } from './IASTVisitor';
import { ParserRuleContext } from 'antlr4ts';

/**
 * AST root node
 */
export class AST implements BaseASTNode {
    /**
     * Holds existing variables
     */
    variableManager: VariableTable;

    // TODO fix something here
    stmts: BaseASTNode[];

    constructor(protected TaskMgr: TaskManager, public node: ParserRuleContext) {
        this.variableManager = new VariableTable();
        this.stmts = [];
    }

    async addImport(ctx: ImportStmtContext, name: QualifiedIdentifier, alias?: string) {
        // FIXME
        // assert that it doesnt exist
        const nameStr = name.toString();
        const res = this.TaskMgr.resolve(name);
        this.variableManager.add(alias ?? nameStr, {
            data: res,
            vis: VariableVisibility.DEFAULT,
        });
        this.stmts.push(new Import(ctx, nameStr, alias));
    }
    accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitAST(this);
    }
}
