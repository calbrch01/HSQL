import { AST } from '../../ast/AST';
import { VariableTable } from '../../ast/symbol/VariableTable';
import { ErrorManager } from '../../managers/ErrorManager';
import { TaskManager } from '../../managers/TaskManager';

/**
 * @deprecated
 */
export interface ASTContext {
    errorManager: ErrorManager;
    taskManager: TaskManager;
    variableManager: VariableTable;
    ast: AST;
}
