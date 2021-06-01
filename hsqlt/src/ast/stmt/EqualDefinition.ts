import { IASTVisitor } from '../IASTVisitor';
import { Action } from '../data/Action';
import { DataType } from '../data/base/DataType';
import { StmtExpression } from './base/StmtExpression';
import { ParserRuleContext } from 'antlr4ts';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';

/**
 * LHS is a data source, RHS is a valued stmt
 */
export class EqualDefinition<U extends StmtExpression = StmtExpression> implements StmtExpression {
    rhs: U;
    constructor(public node: ParserRuleContext, protected lhs: QualifiedIdentifier, _rhs: U) {
        this.rhs = _rhs;
    }

    accept<U>(v: IASTVisitor<U>): U {
        return v.visitEqual?.(this) ?? v.defaultResult();
    }
}
