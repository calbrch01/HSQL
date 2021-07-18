import { ParserRuleContext } from 'antlr4ts';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { SelectJoinType } from '../../misc/ast/SelectHelpers';
import { SelectJoinedTableContext } from '../../misc/grammar/HSQLParser';
import { VEO } from '../../misc/holders/VEO';
import { DataType } from '../data/base/DataType';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';

/**
 * Select Joins. Currently used only for select statements, although it can be generalized pretty well.
 */
export class SelectJoin implements StmtExpression {
    // FUTURE consider comparisonOperators properly
    constructor(
        private _node: SelectJoinedTableContext,
        private _lhs: VEO<DataType, StmtExpression>,
        private _rhs: VEO<DataType, StmtExpression>,
        private _joinType: SelectJoinType,
        private _leftBitName: QualifiedIdentifier,
        private _rightBitName: QualifiedIdentifier,
        private _leftCmpName: string,
        private _rightCmpName: string,
        private _comparisonOperator: string
    ) {}

    public get node(): SelectJoinedTableContext {
        return this._node;
    }

    public get leftCmpName(): string {
        return this._leftCmpName;
    }

    public get rightCmpName(): string {
        return this._rightCmpName;
    }

    public get comparisonOperator(): string {
        return this._comparisonOperator;
    }

    public get rightBitName(): QualifiedIdentifier {
        return this._rightBitName;
    }

    public get leftBitName(): QualifiedIdentifier {
        return this._leftBitName;
    }

    public get joinType(): SelectJoinType {
        return this._joinType;
    }

    public get rhs(): VEO<DataType, StmtExpression> {
        return this._rhs;
    }

    public get lhs(): VEO<DataType, StmtExpression> {
        return this._lhs;
    }

    accept<T>(visitor: IASTVisitor<T>): T {
        return visitor.visitSelectJoin?.(this) ?? visitor.defaultResult();
    }
}
