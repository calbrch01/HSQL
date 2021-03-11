import { IASTVisitor } from '../../analysis/ast/IASTVisitor';
import { DataType } from '../data/base/DataType';
import { BaseASTNode, StmtExpression } from './Base';

/**
 * Assignment node
 */
export class AssignmentNode<U extends StmtExpression = StmtExpression> implements BaseASTNode {
    protected set rhs(value: U) {
        this._rhs = value;
    }
    //TODO FILL

    constructor(protected _lhs?: string, private _rhs?: U) {}

    accept<T>(visitor: IASTVisitor<T>): T {
        return visitor.visitValuedExpression(this);
    }

    get lhs() {
        return this._lhs;
    }
    set lhs(x) {
        this._lhs = x;
    }
}
