import { Singular } from '../../ast/data/Singular';
import { QualifiedIdentifier } from './QualifiedIdentifier';
import { SingularDataType } from './SingularDataType';

export enum FunctionArgumentType {
    PRIMITIVE,
    LAYOUT,
}
export type FunctionArgument =
    | { type: FunctionArgumentType.PRIMITIVE; name: string; dataType: SingularDataType }
    | { type: FunctionArgumentType.LAYOUT; name: string; layoutId: QualifiedIdentifier };
