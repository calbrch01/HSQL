import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
import { ParserRuleContext } from 'antlr4ts';
import { SelectColumn, SelectJob } from '../../misc/ast/SelectHelpers';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { CollectionType } from '../data/base/CollectionType';
import { VEO } from '../../misc/holders/VEO';
import { Table } from '../data/Table';

/**
 * The Select AST Nodes
 * It does contain a lot of internal AST nodes, particularly changedSources
 * It also contains the datatype, which may be useful
 * Refer to SelectASTGenerator for information arguments and getters
 */
export class Select implements StmtExpression {
    constructor(
        public node: ParserRuleContext,
        private _changedSources: Map<string, VEO<CollectionType, StmtExpression>>,
        public fromTable: QualifiedIdentifier[],
        private _totalDt: Table,
        private _groupBy: string[],
        private _colSelect: SelectColumn[],
        private _jobs: SelectJob[],
        private _finalDt: Table
    ) {}
    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitSelect?.(this) ?? visitor.defaultResult();
    }
    public get jobs(): SelectJob[] {
        return this._jobs;
    }
    public get finalDt(): Table {
        return this._finalDt;
    }
    public get colSelect(): SelectColumn[] {
        return this._colSelect;
    }
    public get totalDt(): Table {
        return this._totalDt;
    }
    public get changedSources(): Map<string, VEO<CollectionType, StmtExpression>> {
        return this._changedSources;
    }
    public get groupBy(): string[] {
        return this._groupBy;
    }
}
