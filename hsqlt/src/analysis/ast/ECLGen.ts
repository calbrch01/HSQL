import { BaseASTNode } from '../../ast/stmt/base/BaseASTNode';
import { Literal } from '../../ast/stmt/Literal';
import { IASTVisitor } from '../../ast/IASTVisitor';
import { ECLCode } from '../../code/ECLCode';
import { Import } from '../../ast/stmt/Import';

export class ECLGen extends IASTVisitor<void> {
    protected stmts: ECLCode[] = [];

    // empty methods, return void/undefined
    defaultResult() {}
    reducer() {}

    visit(node: BaseASTNode) {
        return;
    }
    visitLiteral(x: Literal) {}

    visitImport(x: Import) {
        this.stmts.push();
    }
}
