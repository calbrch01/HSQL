import { IASTVisitor } from '../../analysis/ast/IASTVisitor';
import { AssignmentNode } from './ValuedExpression';
import { Table } from '../data/Table';
import { StmtExpression } from './Base';

export class Select implements StmtExpression {
    constructor(public sources: Table[]) {}
    // TODO add data
    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitSelect(this);
    }
}
