import { QualifiedIdentifier } from './QualifiedIdentifier';

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
export enum SortType {
    ASC,
    DESC,
}

export type SelectJob =
    | { type: SelectJobDesc.FROM; from: QualifiedIdentifier[] } // from sets the contexts in the select part itself
    | { type: SelectJobDesc.FILTER; expr: string } // TODO 14/06 filter the set according to an expression
    | {
          type: SelectJobDesc.SORT;
          fields: [SortType, QualifiedIdentifier][];
      }
    | { type: SelectJobDesc.LIMITOFFSET; limit: number; offset?: number }
    | {
          type: SelectJobDesc.DISTINCT;
      };
