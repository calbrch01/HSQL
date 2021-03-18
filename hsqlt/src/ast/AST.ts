import { BaseASTNode } from './stmt/Base';
import { AssignmentNode } from './stmt/ValuedExpression';
import { VariableTable } from './symbol/VariableTable';

export class AST {
    /**
     * Holds existing variables
     */
    variableManager: VariableTable;

    // TODO fix something here
    defs: BaseASTNode[];
    actions: AssignmentNode[] = [];
    constructor() {
        this.variableManager = new VariableTable();
        this.defs = [];
    }

    protected addDefinition(x: BaseASTNode) {}
}
