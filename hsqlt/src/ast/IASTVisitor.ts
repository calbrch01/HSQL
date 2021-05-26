import { AST } from './AST';
import { BaseASTNode } from './stmt/base/BaseASTNode';
import { EqualDefinition } from './stmt/EqualDefinition';
import { Import } from './stmt/Import';
import { Literal } from './stmt/Literal';
import { Output } from './stmt/Output';
import { Select } from './stmt/Select';

/**
 * Interface for traversing an AST
 */
export abstract class IASTVisitor<T> {
    /**
     * The default value for returning to start from
     */
    abstract defaultResult(): T;
    /**
     * How to join elements
     * @param total Total so far
     * @param current Current element
     */
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
    visitLiteral(x: Literal): T {
        return this.visit(x);
    }
    visitSelect(x: Select): T {
        return this.visit(x);
    }
    visitEqual(x: EqualDefinition): T {
        return this.visit(x);
    }

    visitOutput(x: Output): T {
        return this.visit(x);
    }

    visitImport(x: Import): T {
        return this.visit(x);
    }
}
