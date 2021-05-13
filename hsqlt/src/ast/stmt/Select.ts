import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
import { Variable } from '../symbol/Variables';

export class Select implements StmtExpression {
    constructor(public sources: string[]) {}
    // TODO add data
    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitSelect(this);
    }
}
