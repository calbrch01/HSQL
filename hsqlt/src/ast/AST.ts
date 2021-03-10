import { ValuedExpression } from './base/ValuedExpression';
import { VariableTable } from './symbol/VariableTable';

export class AST {
    /**
     * Holds existing variables
     */
    variableManager: VariableTable;

    // TODO fix something here
    defs: ValuedExpression[];

    constructor() {
        this.variableManager = new VariableTable();
        this.defs = [];
    }
}
