import { IASTVisitor } from '../../analysis/ast/IASTVisitor';
import { ValuedExpression } from './ValuedExpression';
import { Variable } from '../symbol/Variables';
import { Table } from '../data/Table';

export class Select implements ValuedExpression {
    constructor(public sources: Table[]) {}
    // TODO add data
    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitSelect(this);
    }
}
