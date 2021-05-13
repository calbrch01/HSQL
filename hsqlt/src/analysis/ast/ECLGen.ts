import { BaseASTNode } from '../../ast/stmt/base/BaseASTNode';
import { Literal } from '../../ast/stmt/Literal';
import { IASTVisitor } from './IASTVisitor';

export class ECLGen extends IASTVisitor<void> {
    defaultResult() {}
    reducer() {}
    visit(node: BaseASTNode) {
        return;
    }
    visitLiteral(x: Literal) {}
}
