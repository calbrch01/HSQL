import { IASTVisitor } from '../../analysis/ast/IASTVisitor';
import { BaseASTNode, StmtExpression } from './Base';

/**
 * A literal expression
 * Note: needs a type stored for it
 */
export class Literal implements StmtExpression {
    constructor(private _val: string) {}
    public get val(): string {
        return this._val;
    }
    public set val(value: string) {
        this._val = value;
    }
    public getText() {
        return this.val;
    }
    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitLiteral(this);
    }
}
