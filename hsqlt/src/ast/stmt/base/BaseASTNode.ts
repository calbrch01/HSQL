import { IASTVisitor } from '../../IASTVisitor';

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
