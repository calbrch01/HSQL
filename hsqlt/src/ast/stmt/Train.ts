import { TrainContext } from '../../misc/grammar/HSQLParser';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';

export class Train implements StmtExpression {
    constructor(
        private _node: TrainContext,
        private _indep: StmtExpression,
        private _dep: StmtExpression,
        private _requireDiscrete: boolean,
        private _traintemplate: string
    ) {}
    public get node() {
        return this._node;
    }
    accept<T>(visitor: IASTVisitor<T>): T {
        return visitor.visitTrain?.(this) ?? visitor.defaultResult();
    }
}
