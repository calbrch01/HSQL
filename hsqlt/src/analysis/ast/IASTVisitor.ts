import { AST } from '../../ast/AST';
import { BaseASTNode } from '../../ast/stmt/base/BaseASTNode';
import { EqualDefinition } from '../../ast/stmt/EqualDefinition';
import { Import } from '../../ast/stmt/Import';
import { Literal } from '../../ast/stmt/Literal';
import { Output } from '../../ast/stmt/Output';
import { Select } from '../../ast/stmt/Select';

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

    public abstract visit(node: BaseASTNode): T;

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
