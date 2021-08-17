import { ModuleStmtContext } from '../../misc/grammar/HSQLParser';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
import { EqualDefinition } from './EqualDefinition';

export class CreateModule implements StmtExpression {
    constructor(private _node: ModuleStmtContext, private _contents: EqualDefinition[]) {}

    public get node(): ModuleStmtContext {
        return this._node;
    }
    public get contents() {
        return this._contents;
    }
    accept<T>(visitor: IASTVisitor<T>): T {
        return visitor.visitModule?.(this) ?? visitor.defaultResult();
    }
}
