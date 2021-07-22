import { ParserRuleContext } from 'antlr4ts';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';

export class CreateFunction implements StmtExpression {
    constructor(private _node: ParserRuleContext) {}
    public get node(): ParserRuleContext {
        return this._node;
    }
    accept<T>(visitor: IASTVisitor<T>): T {
        return visitor.visitFunction?.(this) ?? visitor.defaultResult();
    }
}
