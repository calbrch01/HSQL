import { ParserRuleContext } from 'antlr4ts';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
// import { StmtExpression } from './Base';

export enum OutputType {
    NAMED,
    FILE,
    PIPE,
}

// TODO 11/03 FIXME add output support

export class Output implements StmtExpression {
    constructor(public node: ParserRuleContext, private _source: QualifiedIdentifier, protected _type: OutputType) {}

    protected get source(): QualifiedIdentifier {
        return this._source;
    }
    protected set source(value: QualifiedIdentifier) {
        this._source = value;
    }
    // protected _source: string;
    // protected _type: OutputType;

    accept<T>(v: IASTVisitor<T>): T {
        return v.visitOutput?.(this) ?? v.defaultResult();
    }
}
