import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
import { ParserRuleContext } from 'antlr4ts';
import { SelectJob } from '../../misc/ast/SelectJobDesc';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';

export class Select implements StmtExpression {
    constructor(public node: ParserRuleContext, public fromTable: QualifiedIdentifier[], private _jobs: SelectJob[]) {}
    // TODO 10/03 implement
    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitSelect?.(this) ?? visitor.defaultResult();
    }
    protected get layers(): SelectJob[] {
        return this._jobs;
    }
    protected set layers(value: SelectJob[]) {
        this._jobs = value;
    }
}
