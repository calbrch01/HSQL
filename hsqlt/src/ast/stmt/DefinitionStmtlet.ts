import { ParserRuleContext } from 'antlr4ts';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';

/**
 *
 */
export class Definition implements StmtExpression {
    constructor(public node: ParserRuleContext, public val: QualifiedIdentifier) {}
    accept<T>(visitor: IASTVisitor<T>): T {
        return visitor.visitDefinition?.(this) ?? visitor.defaultResult();
    }
}
