import { IASTVisitor } from '../../analysis/ast/IASTVisitor';
import { StmtExpression } from './Base';

export class Import implements StmtExpression {
    symbolname: string;
    constructor(public context: string, public alias?: string) {
        this.symbolname = alias ?? context;
    }

    accept<T>(v: IASTVisitor<T>): T {
        return v.visitImport(this);
    }
}
