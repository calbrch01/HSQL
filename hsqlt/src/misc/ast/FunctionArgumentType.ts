import { Any } from '../../ast/data/Any';
import { Singular } from '../../ast/data/Singular';
import { Table } from '../../ast/data/Table';
import { QualifiedIdentifier } from './QualifiedIdentifier';
import { SingularDataType } from './SingularDataType';

/**
 * Used for the discriminating unions for Function types
 */
export enum FunctionArgumentType {
    PRIMITIVE,
    LAYOUT,
}

/**
 * Function arguments, as part of the AST
 * Note: This union is used in the grammar and must be refactored accordingly
 */
export type FunctionArgument =
    | { type: FunctionArgumentType.PRIMITIVE; dataType: SingularDataType }
    | { type: FunctionArgumentType.LAYOUT; layoutId: QualifiedIdentifier };

/**
 * Function argument, but as a part of the variable table
 */
export type FunctionArgumentFilled =
    | { type: FunctionArgumentType.PRIMITIVE; dataType: Singular }
    | { type: FunctionArgumentType.LAYOUT; dataType: Table | Any };
