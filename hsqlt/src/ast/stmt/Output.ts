import { ParserRuleContext } from 'antlr4ts';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
// import { StmtExpression } from './Base';

export enum OutputType {
    DEFAULT,
    NAMED,
    FILE,
    PIPE,
}

// TODO 11/03 FIXME add output support

export class Output implements StmtExpression {
    public get source(): StmtExpression {
        return this._source;
    }
    public set source(value: StmtExpression) {
        this._source = value;
    }
    constructor(
        public node: ParserRuleContext,
        private _source: StmtExpression,
        protected _type: OutputType = OutputType.DEFAULT
    ) {}

    // protected _source: string;
    // protected _type: OutputType;

    accept<T>(v: IASTVisitor<T>): T {
        return v.visitOutput?.(this) ?? v.defaultResult();
    }
}
