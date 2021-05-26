import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
import { Variable } from '../symbol/Variables';
import { ParserRuleContext } from 'antlr4ts';

export class Select implements StmtExpression {
    constructor(public node: ParserRuleContext, public sources: string[]) {}
    // TODO add data
    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitSelect(this);
    }
}
