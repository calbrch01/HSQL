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

    visitOutput(x: Output): T {
        return this.visit(x);
    }

    visitImport(x: Import): T {
        return this.visit(x);
    }
}
