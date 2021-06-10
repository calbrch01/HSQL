import { QualifiedIdentifier } from './QualifiedIdentifier';

export enum SelectJobDesc {
    SORT,
    DEDUP,
}
export type SelectJob =
    | {
          type: SelectJobDesc.SORT;
          fields: QualifiedIdentifier[];
      }
    | {
          type: SelectJobDesc.DEDUP;
      };
