import { ParserRuleContext } from 'antlr4ts';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
// import { StmtExpression } from './Base';

export type fileOutputOptionsType = boolean; // { fileName: undefined; overwrite: boolean };

export class Output implements StmtExpression {
    public get source(): StmtExpression {
        return this._source;
    }
    public set source(value: StmtExpression) {
        this._source = value;
    }

    /**
     *
     * @param _node Base Parser node
     * @param _source Source node
     * @param namedOutput Whether to have a named emit
     * @param overwrite whether to overwrite
     */
    constructor(
        protected _node: ParserRuleContext,
        private _source: StmtExpression,
        public overwrite: boolean,
        public namedOutput?: string
    ) {}

    public get node() {
        return this._node;
    }

    // protected _source: string;
    // protected _type: OutputType;

    accept<T>(v: IASTVisitor<T>): T {
        return v.visitOutput?.(this) ?? v.defaultResult();
    }
}
