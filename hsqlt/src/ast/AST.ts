import { BaseASTNode } from './stmt/base/BaseNode';
import { ValuedExpression } from './stmt/base/ValuedExpression';
import { VariableTable } from './symbol/VariableTable';

export class AST {
    /**
     * Holds existing variables
     */
    variableManager: VariableTable;

    // TODO fix something here
    defs: BaseASTNode[];

    constructor() {
        this.variableManager = new VariableTable();
        this.defs = [];
    }

    protected addDefinition(x: BaseASTNode) {}
}
