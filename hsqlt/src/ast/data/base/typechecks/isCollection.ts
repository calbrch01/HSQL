import { CollectionType } from '../CollectionType';
import { DataType } from '../DataType';

/**
 *
 * @param x
 * @returns
 */

export function isCollection(x: DataType | null | undefined): x is CollectionType {
    return x instanceof CollectionType;
}
