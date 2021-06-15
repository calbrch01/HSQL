import { Any } from '../../Any';
import { CollectionType } from '../CollectionType';
import { DataType } from '../DataType';

export function isAny(x: DataType) {
    if (x instanceof CollectionType) {
        return x instanceof Any;
    }
    return x.anyized;
}
