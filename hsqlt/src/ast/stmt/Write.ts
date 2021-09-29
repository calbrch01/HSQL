import { ParserRuleContext } from 'antlr4ts';
import { FileOutputType } from '../../misc/ast/FileOutputType';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';

export class Write implements StmtExpression {
    public get overwrite(): boolean {
        return this._overwrite;
    }
    public get source(): StmtExpression {
        return this._source;
    }
    public get fileType() {
        return this._fileType;
    }

    public get fileLoc() {
        return this._fileLoc;
    }

    constructor(
        protected _node: ParserRuleContext,
        private _source: StmtExpression,
        private _overwrite: boolean,
        protected _fileName: string,
        protected _fileType: FileOutputType,
        protected _fileLoc: string
    ) {}

    public get node() {
        return this._node;
    }

    accept<T>(v: IASTVisitor<T>): T {
        return v.visitWrite?.(this) ?? v.defaultResult();
    }
}
