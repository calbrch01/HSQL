import { IASTVisitor } from '../../analysis/ast/IASTVisitor';
import { ValuedExpression } from '../stmt/base/ValuedExpression';
import { Variable } from '../symbol/Variables';

export class Select implements ValuedExpression {
    constructor(public sources: Variable[]) {}
    // TODO add data
    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitSelect(this);
    }
}
