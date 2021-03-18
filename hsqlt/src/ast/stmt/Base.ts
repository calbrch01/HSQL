import { IASTVisitor } from '../../analysis/ast/IASTVisitor';
import { AssignmentNode } from './ValuedExpression';

/**
 * A generic node
 */
export interface BaseASTNode {
    /**
     * Must be visitable by AST Visitor
     * @param visitor Visitor
     */
    accept<T>(visitor: IASTVisitor<T>): T;
}

/**
 * All values that do not yield an expression that is storable
 */
export interface NonValuedExpression extends BaseASTNode {}

/**
 * All statement related expressions
 */
export interface StmtExpression extends BaseASTNode {}
