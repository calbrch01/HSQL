import { FunctionArgument } from '../../misc/ast/FunctionArgumentType';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { FunctionStmtContext } from '../../misc/grammar/HSQLParser';
import { DataType } from '../data/base/DataType';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
import { EqualDefinition } from './EqualDefinition';

export class CreateFunction implements StmtExpression {
    constructor(
        private _node: FunctionStmtContext,
        private _name: string,
        private _args: Map<string, FunctionArgument>,
        private _body: EqualDefinition[],
        private _returns: QualifiedIdentifier
    ) {}
    public get name() {
        return this._name;
    }
    public get node(): FunctionStmtContext {
        return this._node;
    }
    public get args(): Map<string, FunctionArgument> {
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
