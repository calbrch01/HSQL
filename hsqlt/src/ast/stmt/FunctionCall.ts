import { ParserRuleContext } from 'antlr4ts';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { VEO } from '../../misc/holders/VEO';
import { DataType } from '../data/base/DataType';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';

export class FunctionCall implements StmtExpression {
    constructor(
        private _node: ParserRuleContext,
        public val: QualifiedIdentifier,
        public args: VEO<DataType, StmtExpression>[]
    ) {}
    public get node(): ParserRuleContext {
        return this._node;
    }

    accept<T>(visitor: IASTVisitor<T>): T {
        return visitor.visitFunctionCall?.(this) ?? visitor.defaultResult();
    }
}
