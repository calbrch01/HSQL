import { IASTVisitor } from '../IASTVisitor';
import { Action } from '../data/Action';
import { DataType } from '../data/base/DataType';
import { StmtExpression } from './base/StmtExpression';
import { ParserRuleContext } from 'antlr4ts';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { VariableVisibility } from '../../misc/ast/VariableVisibility';

/**
 * LHS is a data source, RHS is a valued stmt
 */
export class EqualDefinition<U extends StmtExpression = StmtExpression> implements StmtExpression {
    rhs: U;
    constructor(
        protected _node: ParserRuleContext,
        protected _lhs: QualifiedIdentifier,
        _rhs: U,
        private _declType: VariableVisibility
    ) {
        this.rhs = _rhs;
    }

    public get declType(): VariableVisibility {
        return this._declType;
    }
    public set declType(value: VariableVisibility) {
        this._declType = value;
    }
    public get node() {
        return this._node;
    }

    get lhs() {
        return this._lhs;
    }

    accept<U>(v: IASTVisitor<U>): U {
        return v.visitEqual?.(this) ?? v.defaultResult();
    }
}
