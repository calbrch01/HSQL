import { BaseASTNode } from '../../ast/stmt/Base';
import { Literal } from '../../ast/stmt/Literal';
import { Select } from '../../ast/stmt/Select';
import { ValuedExpression } from '../../ast/stmt/ValuedExpression';

/**
 * Interface for traversing an AST
 */
export abstract class IASTVisitor<T> {
    public abstract visit(node: BaseASTNode): T;
    visitLiteral(x: Literal): T {
        return this.visit(x);
    }
    visitSelect(x: Select): T {
        return this.visit(x);
    }
    visitValuedExpression(x: ValuedExpression): T {
        return this.visit(x);
    }
}
