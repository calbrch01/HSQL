import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { FunctionStmtContext } from '../../misc/grammar/HSQLParser';
import { DataType } from '../data/base/DataType';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
import { EqualDefinition } from './EqualDefinition';

export class CreateFunction implements StmtExpression {
    constructor(
        private _node: FunctionStmtContext,
        private _args: [string, DataType][],
        private _returns: QualifiedIdentifier,
        private _body: EqualDefinition[]
    ) {}

    public get node(): FunctionStmtContext {
        return this._node;
    }
    public get args(): [string, DataType][] {
        return this._args;
    }
    public get returns(): QualifiedIdentifier {
        return this._returns;
    }
    public get body(): EqualDefinition[] {
        return this._body;
    }

    accept<T>(visitor: IASTVisitor<T>): T {
        return visitor.visitFunction?.(this) ?? visitor.defaultResult();
    }
}
