import { DataType } from '../../ast/data/base/DataType';
import { Table } from '../../ast/data/Table';

export enum TrainVarType {
    DEFAULT,
    ONESHOT,
}

export type TrainVar =
    | {
          type: TrainVarType.DEFAULT;
          makeTemplate: string;
          makeResult: Table;
          exported: boolean;
          declarationOpts: Map<string, DataType>;
      }
    | {
          type: TrainVarType.ONESHOT;
          makeTemplate: string;
          makeResult: Table;
          exported: boolean;
          declarationOpts: Map<string, DataType>;
      };
