import { ParserRuleContext } from 'antlr4ts';
import { LayoutStmtContext } from '../../misc/grammar/HSQLParser';
import { Layout } from '../data/Layout';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';

export class CreateLayout implements StmtExpression {
    constructor(private _node: LayoutStmtContext, private _layout: Layout) {}

    get node(): LayoutStmtContext {
        return this._node;
    }
    get layout(): Layout {
        return this._layout;
    }

    accept<T>(visitor: IASTVisitor<T>): T {
        return visitor.visitLayout?.(this) ?? visitor.defaultResult();
    }
}
