import { BaseASTNode } from '../../ast/stmt/Base';
import { Import } from '../../ast/stmt/Import';
import { Literal } from '../../ast/stmt/Literal';
import { Output } from '../../ast/stmt/Output';
import { Select } from '../../ast/stmt/Select';
import { AssignmentNode } from '../../ast/stmt/ValuedExpression';

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
    visitValuedExpression(x: AssignmentNode): T {
        return this.visit(x);
    }

    visitOutput(x: Output): T {
        return this.visit(x);
    }

    visitImport(x: Import): T {
        return this.visit(x);
    }
}
