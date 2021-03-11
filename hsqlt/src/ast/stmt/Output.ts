import { StmtContext } from '../../misc/grammar/HSQLParser';
import { Action } from '../data/Action';
import { StmtExpression } from './Base';
import { ValuedExpression } from './ValuedExpression';

export enum OutputType {
    NAMED,
    FILE,
    PIPE,
}

// FIXME
export class Output extends StmtContext {
    protected _source?: string;
    protected _type?: OutputType;

    setSource(s: string) {
        this._source = s;
    }
    getSource(): string | undefined {
        return this._source;
    }
}
