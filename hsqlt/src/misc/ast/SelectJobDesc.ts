import { QualifiedIdentifier } from './QualifiedIdentifier';

export enum SelectJobDesc {
    /** The big from */
    FROM,
    /** for WHERE and HAVING */
    FILTER,

    /** Sort some objects */
    SORT,

    /** Group keys */
    GROUP,

    //having is skipped

    /** Filter out columns */
    COLFILTER,

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
    | { type: SelectJobDesc.FROM }
    | {
          type: SelectJobDesc.SORT;
          fields: [SortType, QualifiedIdentifier][];
      }
    | { type: SelectJobDesc.LIMITOFFSET; limit: number; offset?: number }
    | {
          type: SelectJobDesc.DISTINCT;
      };
