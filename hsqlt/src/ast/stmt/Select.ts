import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
import { ParserRuleContext } from 'antlr4ts';
import { SelectJob } from '../../misc/ast/SelectJobDesc';

export class Select implements StmtExpression {
    constructor(
        public node: ParserRuleContext,
        protected isDistinct: boolean = false,
        public sources: StmtExpression[],
        private _layers: SelectJob[]
    ) {}
    // TODO 10/03 implement
    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitSelect?.(this) ?? visitor.defaultResult();
    }
    protected get layers(): SelectJob[] {
        return this._layers;
    }
    protected set layers(value: SelectJob[]) {
        this._layers = value;
    }
}
