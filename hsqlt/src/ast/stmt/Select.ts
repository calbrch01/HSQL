import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
import { ParserRuleContext } from 'antlr4ts';

export class Select implements StmtExpression {
    constructor(public node: ParserRuleContext, public sources: string[]) {}
    // TODO 10/03 implement
    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitSelect?.(this) ?? visitor.defaultResult();
    }
}
