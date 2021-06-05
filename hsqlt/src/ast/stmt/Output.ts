import { ParserRuleContext } from 'antlr4ts';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
// import { StmtExpression } from './Base';

export type fileOutputOptionsType =
    | { fileName: string; overwrite: boolean }
    | { fileName: undefined; overwrite: false };

export class Output implements StmtExpression {
    public get source(): StmtExpression {
        return this._source;
    }
    public set source(value: StmtExpression) {
        this._source = value;
    }

    /**
     *
     * @param node Base Parser node
     * @param _source Source node
     * @param namedOutput Whether to have a named emit
     * @param fileOutputOptions file output options if any
     * @param useSingular Whether to use the singular
     */
    constructor(
        public node: ParserRuleContext,
        private _source: StmtExpression,
        public namedOutput?: string,
        public fileOutputOptions: fileOutputOptionsType = { fileName: undefined, overwrite: false }
    ) {}

    // protected _source: string;
    // protected _type: OutputType;

    accept<T>(v: IASTVisitor<T>): T {
        return v.visitOutput?.(this) ?? v.defaultResult();
    }
}
