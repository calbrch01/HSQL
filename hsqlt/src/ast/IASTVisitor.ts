import { AST } from './AST';
import { BaseASTNode } from './stmt/base/BaseASTNode';
import { Definition } from './stmt/DefinitionStmtlet';
import { EqualDefinition } from './stmt/EqualDefinition';
import { Import } from './stmt/Import';
import { Literal } from './stmt/Literal';
import { Output } from './stmt/Output';
import { Select } from './stmt/Select';

export abstract class AbstractASTVisitor<T> {
    abstract defaultResult(): T;
    abstract reducer(total: T, current: T): T;

    public visit(node: BaseASTNode): T {
        return node.accept(this);
    }
    visitAST(x: AST) {
        const stmts = x.stmts;
        return stmts.reduce((t, e) => {
            const v: T = e.accept(this);
            return this.reducer(t, v);
        }, this.defaultResult());
    }
}

/**
 * Interface for traversing an AST
 */
export interface IASTVisitor<T> {
    /**
     * The default value for returning to start from
     */
    defaultResult(): T;
    /**
     * How to join elements
     * @param total Total so far
     * @param current Current element
     */
    reducer(total: T, current: T): T;

    visit(node: BaseASTNode): T;

    visitAST: (x: AST) => T;
    visitLiteral?: (x: Literal) => T;
    visitSelect?: (x: Select) => T;
    visitEqual?: (x: EqualDefinition) => T;

    visitOutput?: (x: Output) => T;

    visitImport?: (x: Import) => T;

    visitDefinition?: (x: Definition) => T;
}
