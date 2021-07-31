import { DataType } from '../../ast/data/base/DataType';
import { Table } from '../../ast/data/Table';
import { QualifiedIdentifier } from './QualifiedIdentifier';

export enum TrainVarType {
    DEFAULT,
    ONESHOT,
}

export type TrainVarDefault = {
    makeTemplate: string;
    makeResult: Table;
    predictTemplate: string;
    predictResult: Table;
    /** Whether it is allowed to be used outside or not */
    exported: boolean;
    declarationOpts: Map<string, DataType>;
    importList: QualifiedIdentifier[];
    isDiscrete: boolean;
    /** Is this from myself or from another source? In this case it makes sense to include toImport */
    internal: boolean;
    /** where it should use canonically -> This is what it should import.
     * This will usually become aliased.
     *  Undefined means no need to worry about importing some other module.
     */
    toImport?: QualifiedIdentifier;
    /** this is what it can use actually; this is the actual alias point. This will be undefined till the alias gets created due to the train stmt */
    target?: QualifiedIdentifier;
};
export type TrainVar =
    | ({ type: TrainVarType.DEFAULT } & TrainVarDefault)
    | ({
          type: TrainVarType.ONESHOT;
      } & Omit<TrainVarDefault, 'predictTemplate' | 'predictResult'>);
