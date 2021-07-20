import { ParserRuleContext } from 'antlr4ts';
import { FileOutputType } from '../../misc/ast/FileOutputType';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { SelectFromDatasetContext } from '../../misc/grammar/HSQLParser';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';

export class SelectData implements StmtExpression {
    constructor(
        protected _node: SelectFromDatasetContext,
        protected _source: string,
        protected _layoutId: QualifiedIdentifier,
        protected _fileType: FileOutputType
    ) {}

    public get node(): SelectFromDatasetContext {
        return this._node;
    }

    public get source(): string {
        return this._source;
    }

    public get layoutId(): QualifiedIdentifier {
        return this._layoutId;
    }

    public get fileType(): FileOutputType {
        return this._fileType;
    }

    accept<T>(visitor: IASTVisitor<T>): T {
        return visitor.visitSelectData?.(this) ?? visitor.defaultResult();
    }
}
