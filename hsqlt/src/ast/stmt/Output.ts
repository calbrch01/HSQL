import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
// import { StmtExpression } from './Base';

export enum OutputType {
    NAMED,
    FILE,
    PIPE,
}

// FIXME
export class Output implements StmtExpression {
    protected _source?: string;
    protected _type?: OutputType;

    setSource(s: string) {
        this._source = s;
    }
    getSource(): string | undefined {
        return this._source;
    }

    accept<T>(x: IASTVisitor<T>): T {
        return x.visitOutput(this);
    }
}
