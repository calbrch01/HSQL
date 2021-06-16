import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
import { ParserRuleContext } from 'antlr4ts';
import { SelectColumn, SelectJob } from '../../misc/ast/SelectHelpers';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { CollectionType } from '../data/base/CollectionType';
import { VEO } from '../../misc/holders/VEO';
import { Table } from '../data/Table';

export class Select implements StmtExpression {
    constructor(
        public node: ParserRuleContext,
        protected changedSources: Map<string, VEO<CollectionType, StmtExpression>>,
        public fromTable: QualifiedIdentifier[],
        protected totalDt: Table,
        protected colSelect: SelectColumn[],
        protected _jobs: SelectJob[],
        protected finalDt: Table
    ) {}
    // TODO 10/03 implement
    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitSelect?.(this) ?? visitor.defaultResult();
    }
    protected get layers(): SelectJob[] {
        return this._jobs;
    }
    protected set layers(value: SelectJob[]) {
        this._jobs = value;
    }
}
