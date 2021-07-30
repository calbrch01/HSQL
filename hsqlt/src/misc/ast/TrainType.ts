import { DataType } from '../../ast/data/base/DataType';
import { Table } from '../../ast/data/Table';
import { QualifiedIdentifier } from './QualifiedIdentifier';

export enum TrainVarType {
    DEFAULT,
    ONESHOT,
}

export type TrainVar =
    | {
          type: TrainVarType.DEFAULT;
          makeTemplate: string;
          makeResult: Table;
          predictTemplate: string;
          predictResult: Table;
          exported: boolean;
          declarationOpts: Map<string, DataType>;
          importList: QualifiedIdentifier[];
          source?: string;
      }
    | {
          type: TrainVarType.ONESHOT;
          makeTemplate: string;
          makeResult: Table;
          exported: boolean;
          declarationOpts: Map<string, DataType>;
          importList: QualifiedIdentifier[];
          source?: string;
      };
