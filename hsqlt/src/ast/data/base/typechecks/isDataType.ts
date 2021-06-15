import { Any } from '../../Any';
import { DataType, EDataType } from '../DataType';
import { typeMap } from '../typeMap';

/**
 *
 * @param x
 * @param y
 * @param ignoreDataAny Ignore data being anyized. This allows checking if data is any
 * @returns
 */
export function isDataType<T extends keyof typeMap, U extends typeMap[T]>(
    x: DataType | null | undefined,
    y: T,
    ignoreDataAny: boolean = false
): x is U {
    if (x === null || x === undefined) return false;
    if (y === EDataType.ANY) {
        return true;
    }
    // if it can be anyized, it doesn't matter
    return (!ignoreDataAny && x instanceof Any) || x.type === y;
}
