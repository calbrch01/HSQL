import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from './base/StmtExpression';
import { ParserRuleContext } from 'antlr4ts';
import { SelectColumn, limitOffsetType, SortField } from '../../misc/ast/SelectHelpers';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { CollectionType } from '../data/base/CollectionType';
import { VEO } from '../../misc/holders/VEO';
import { Table } from '../data/Table';

export type SelectASTArguments = {
    changedSources: Map<string, VEO<CollectionType, StmtExpression>>;
    fromTable: QualifiedIdentifier[];
    totalDt: Table;
    where?: string;
    sortFields: SortField[];
    groupBy: string[];
    colSelect: SelectColumn[];
    limitOffset: limitOffsetType;
    distinct: boolean;
    distributes: string[];
    finalDt: Table;
};

/**
 * Shorthand for generating argument object for the Select AST
 * @param changedSources
 * @param fromTable
 * @param totalDt
 * @param where
 * @param sortFields
 * @param groupBy
 * @param colSelect
 * @param limitOffset
 * @param distinct
 * @param finalDt
 * @returns
 */
export function SelectASTArguments(
    changedSources: Map<string, VEO<CollectionType, StmtExpression>>,
    fromTable: QualifiedIdentifier[],
    totalDt: Table,
    where: string | undefined,
    sortFields: SortField[],
    groupBy: string[],
    colSelect: SelectColumn[],
    limitOffset: limitOffsetType,
    distinct: boolean,
    distributes: string[],
    finalDt: Table
): SelectASTArguments {
    return {
        changedSources,
        fromTable,
        totalDt,
        where,
        sortFields,
        groupBy,
        colSelect,
        limitOffset,
        distinct,
        distributes,
        finalDt,
    };
}

/**
 * The Select AST Nodes
 * It does contain a lot of internal AST nodes, particularly changedSources
 * It also contains the datatype, which may be useful
 * Refer to SelectASTGenerator for information arguments and getters
 */
export class Select implements StmtExpression {
    private _changedSources: Map<string, VEO<CollectionType, StmtExpression>>;
    private _fromTable: QualifiedIdentifier[];
    private _totalDt: Table;
    private _where: string | undefined;
    private _sortFields: SortField[];
    private _groupBy: string[];
    private _colSelect: SelectColumn[];
    private _limitOffset: limitOffsetType;
    private _distinct: boolean;
    private _distributes: string[];

    private _finalDt: Table;
    constructor(public node: ParserRuleContext, selectASTArguments: SelectASTArguments) {
        this._changedSources = selectASTArguments.changedSources;
        this._fromTable = selectASTArguments.fromTable;
        this._totalDt = selectASTArguments.totalDt;
        this._where = selectASTArguments.where;
        this._sortFields = selectASTArguments.sortFields;
        this._groupBy = selectASTArguments.groupBy;
        this._colSelect = selectASTArguments.colSelect;
        this._limitOffset = selectASTArguments.limitOffset;
        this._distinct = selectASTArguments.distinct;
        this._finalDt = selectASTArguments.finalDt;
        this._distributes = selectASTArguments.distributes;
    }
    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitSelect?.(this) ?? visitor.defaultResult();
    }
    public get finalDt(): Table {
        return this._finalDt;
    }
    public get distributes(): string[] {
        return this._distributes;
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
    public get where(): string | undefined {
        return this._where;
    }
    public get sortFields(): SortField[] {
        return this._sortFields;
    }
    public get limitOffset(): limitOffsetType {
        return this._limitOffset;
    }
    public get distict(): boolean {
        return this._distinct;
    }
    public get fromTable(): QualifiedIdentifier[] {
        return this._fromTable;
    }
}
