import { QualifiedIdentifier } from '../misc/ast/QualifiedIdentifier';
import { ReadingManager } from '../managers/ReadingManager';
import { DataType } from './data/base/DataType';
import { BaseASTNode } from './stmt/base/BaseASTNode';
import { StmtExpression } from './stmt/base/StmtExpression';
import { Import } from './stmt/Import';
import { VariableTable, VariableVisibility } from './symbol/VariableTable';
import { TaskManager } from '../managers/TaskManager';

/**
 * AST root node
 */
export class AST {
    /**
     * Holds existing variables
     */
    variableManager: VariableTable;

    // TODO fix something here
    stmts: BaseASTNode[];

    constructor(protected TaskMgr: TaskManager) {
        this.variableManager = new VariableTable();
        this.stmts = [];
    }

    async addImport(name: string, alias?: string) {
        // FIXME
        // assert that it doesnt exist
        const res = this.TaskMgr.resolve(QualifiedIdentifier.fromString(name));
        this.variableManager.add(alias ?? name, {
            data: res,
            vis: VariableVisibility.DEFAULT,
        });
        this.stmts.push(new Import(name, alias));
    }
}
