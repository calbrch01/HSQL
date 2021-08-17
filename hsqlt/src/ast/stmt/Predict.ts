import { ParserRuleContext } from 'antlr4ts';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { PredictContext } from '../../misc/grammar/HSQLParser';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';

export class Predict implements StmtExpression {
    constructor(
        private _node: PredictContext,
        public modelDef: StmtExpression,
        public indepExpr: StmtExpression,
        public predictTemplate: string,
        public bundleLoc: QualifiedIdentifier | undefined,
        public addOrder: boolean
    ) {}
    public get node(): PredictContext {
        return this._node;
    }
    accept<T>(visitor: IASTVisitor<T>): T {
        return visitor.visitPredict?.(this) ?? visitor.defaultResult();
    }
}
