import { ParserRuleContext } from 'antlr4ts';
import { TrainContext } from '../../misc/grammar/HSQLParser';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';

export class Train implements StmtExpression {
    constructor(private _node: TrainContext) {}
    public get node() {
        return this._node;
    }
    accept<T>(visitor: IASTVisitor<T>): T {
        return visitor.visitTrain?.(this) ?? visitor.defaultResult();
    }
}
