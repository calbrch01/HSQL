import { ParserRuleContext } from 'antlr4ts';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
// import { StmtExpression } from './Base';

export enum OutputType {
    NAMED,
    FILE,
    PIPE,
}

// FIXME add output support
export class Output implements StmtExpression {
    constructor(public node: ParserRuleContext, protected _source: string, protected _type: OutputType) {}
    // protected _source: string;
    // protected _type: OutputType;

    setSource(s: string) {
        this._source = s;
    }
    getSource(): string {
        return this._source;
    }

    accept<T>(v: IASTVisitor<T>): T {
        return v.visitOutput?.(this) ?? v.defaultResult();
    }
}
