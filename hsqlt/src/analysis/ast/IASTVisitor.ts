import { BaseASTNode } from '../../ast/stmt/base/BaseNode';
import { Literal } from '../../ast/stmt/Literal';
import { Select } from '../../ast/stmt/Select';
import { EqualDefinition } from '../../ast/stmt/EqualDefinition';

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
    visitEqual(x: EqualDefinition): T {
        return this.visit(x);
    }
}
