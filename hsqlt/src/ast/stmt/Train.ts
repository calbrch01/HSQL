import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { TrainContext } from '../../misc/grammar/HSQLParser';
import { VEO } from '../../misc/holders/VEO';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';

export class Train implements StmtExpression {
    constructor(
        private _node: TrainContext,
        private _indep: StmtExpression,
        private _dep: StmtExpression,
        private _requireDiscrete: boolean,
        private _traintemplate: string,
        private _bundleLoc: QualifiedIdentifier | undefined,
        private _addOrder: boolean,
        private _trainOptions: Map<string, VEO>
    ) {}
    public get node() {
        return this._node;
    }

    public get addOrder(): boolean {
        return this._addOrder;
    }
    public get trainOptions(): Map<string, VEO> {
        return this._trainOptions;
    }

    public get bundleLoc(): QualifiedIdentifier | undefined {
        return this._bundleLoc;
    }
    public get traintemplate(): string {
        return this._traintemplate;
    }
    public get requireDiscrete(): boolean {
        return this._requireDiscrete;
    }
    public get dep(): StmtExpression {
        return this._dep;
    }
    public get indep(): StmtExpression {
        return this._indep;
    }
    accept<T>(visitor: IASTVisitor<T>): T {
        return visitor.visitTrain?.(this) ?? visitor.defaultResult();
    }
}
