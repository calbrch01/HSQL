import { IASTVisitor } from '../../analysis/ast/IASTVisitor';
import { Action } from '../data/Action';
import { DataType } from '../data/base/DataType';
import { ValuedExpression } from './base/ValuedExpression';

/**
 * LHS is a data source, RHS is a valued stmt
 */
export class EqualDefinition<T extends DataType = DataType, U extends ValuedExpression = ValuedExpression>
    implements ValuedExpression {
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
