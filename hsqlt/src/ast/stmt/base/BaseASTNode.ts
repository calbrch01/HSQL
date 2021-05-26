import { ParserRuleContext } from 'antlr4ts';
import { IASTVisitor } from '../../IASTVisitor';

/**
 * A generic node
 */
export interface BaseASTNode {
    node: ParserRuleContext;
    /**
     * Must be visitable by AST Visitor
     * @param visitor Visitor
     */
    accept<T>(visitor: IASTVisitor<T>): T;
}
