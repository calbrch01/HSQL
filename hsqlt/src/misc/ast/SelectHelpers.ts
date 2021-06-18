import { ParserRuleContext } from 'antlr4ts';
import { QualifiedIdentifier } from './QualifiedIdentifier';

export enum SelectColumnType {
    COL,
    ALL,
    AGGR,
}

export enum SelectAggregationType {
    COUNT,
    MIN,
    MAX,
    AVG,
    SUM,
    TRIM,
}

/**
 * Type of join used.
 *
 * @warn WARNING: This is used in the grammar. Please refer when refactoring.
 */
export enum SelectJoinType {
    INNER,
    OUTER,
    /* CROSS, */
    LEFT,
    RIGHT,
}

export type SelectColumn = { ctx: ParserRuleContext } & (
    | {
          type: SelectColumnType.ALL;
      }
    | {
          type: SelectColumnType.COL;
          /**
           * old name , new name
           */
          col: string;
          alias?: string;
      }
    | {
          type: SelectColumnType.AGGR;
          aggr: SelectAggregationType;
          col: SelectColumnType.ALL | string;
          alias: string;
      }
);

/** @deprecated */
export enum SelectJobDesc {
    /** The big from */
    FROM,
    /** for WHERE and HAVING */
    FILTER,

    /** Sort some objects */
    SORT,

    /** Group keys and filter out columns*/
    GROUPANDCOLFILT,

    //having is skipped

    /** for limit and offset */
    LIMITOFFSET,
    /** Do a dedup */
    DISTINCT,
}

export type SortField = {
    type: SortType;
    col: string;
};
export enum SortType {
    ASC,
    DESC,
}

export type limitOffsetType = { limit: number; offset?: number };

/**
 * Map a string to an aggregation Task
 * A function brought to you by VSCode's multicursor support (look at the source)
 * @param task
 * @returns
 */
export function mapAggregation(task: string): SelectAggregationType | undefined {
    const taskUpper = task.toUpperCase();
    // dangerous cast, but this depends on tsc's implementation of the enum.
    return (SelectAggregationType as any)[taskUpper];
    // this is a fallback if the above method stops working
    // switch (taskUpper) {
    //     case SelectAggregationType[SelectAggregationType.COUNT]:
    //         return SelectAggregationType.COUNT;
    //     case SelectAggregationType[SelectAggregationType.MIN]:
    //         return SelectAggregationType.MIN;
    //     case SelectAggregationType[SelectAggregationType.MAX]:
    //         return SelectAggregationType.MAX;
    //     case SelectAggregationType[SelectAggregationType.AVG]:
    //         return SelectAggregationType.AVG;
    //     case SelectAggregationType[SelectAggregationType.SUM]:
    //         return SelectAggregationType.SUM;
    //     case SelectAggregationType[SelectAggregationType.TRIM]:
    //         return SelectAggregationType.TRIM;
    //     default:
    //         return undefined;
    // }
}

/**
 * A simple incrementing counter
 */
export class IncrementingCounter {
    /**
     *
     * @param _count Init number
     */
    constructor(protected _count: number = 0) {}

    getAndIncrement() {
        return this._count++;
    }
    /**
     * Gets next available value
     */
    get count() {
        return this._count;
    }
}
