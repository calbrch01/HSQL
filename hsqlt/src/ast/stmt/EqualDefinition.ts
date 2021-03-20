import { IASTVisitor } from '../../analysis/ast/IASTVisitor';
import { Action } from '../data/Action';
import { DataType } from '../data/base/DataType';
import { StmtExpression } from './base/StmtExpression';

/**
 * LHS is a data source, RHS is a valued stmt
 */
export class EqualDefinition<T extends DataType = DataType, U extends StmtExpression = StmtExpression>
    implements StmtExpression {
    lhs?: T;
    rhs?: U;
    constructor(_lhs?: T, _rhs?: U) {
        this.lhs = _lhs;
        this.rhs = _rhs;
    }

    accept<U>(v: IASTVisitor<U>): U {
        return v.visitEqual(this);
    }
}
