import { IASTVisitor } from "../../analysis/ast/IASTVisitor";

export interface BaseNode {
    /**
     * Must be visitable by AST Visitor
     * @param visitor Visitor
     */
    accept<T>(visitor: IASTVisitor<T>): T;
}
