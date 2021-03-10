import { BaseNode } from '../../ast/base/BaseNode';
import { Literal } from '../../ast/Literal';
import { Select } from '../../ast/Select';

/**
 * Interface for traversing an AST
 */
export abstract class IASTVisitor<T> {
    public abstract visit(node: BaseNode): T;
    visitLiteral(x: Literal): T {
        return this.visit(x);
    }
    visitSelect(x: Select): T {
        return this.visit(x);
    }
}
