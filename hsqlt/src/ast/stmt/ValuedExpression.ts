import { IASTVisitor } from '../../analysis/ast/IASTVisitor';
import { DataType } from '../data/base/DataType';
import { BaseASTNode, StmtExpression } from './Base';

/**
 * Assignment node
 */
export class ValuedExpression<T extends DataType = DataType, U extends StmtExpression = StmtExpression>
    implements BaseASTNode {
    //TODO FILL
    lhs?: T;

    rhs?: U;

    constructor(protected _lhs?: T, protected _rhs?: U) {}

    accept<T>(visitor: IASTVisitor<T>): T {
        return visitor.visitValuedExpression(this);
    }
}
