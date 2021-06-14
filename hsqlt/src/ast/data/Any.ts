import { CollectionType } from './base/CollectionType';
import { DataType, EDataType } from './base/DataType';

/**
 * Pseudo data type to represent anything.
 *
 */
export class Any extends CollectionType {
    get(c: string): DataType | undefined {
        return undefined;
    }
    list(): [string, DataType][] {
        return [];
    }
    constructor() {
        super(EDataType.ANY);
        this._anyized = true;
    }
    isExactType(type: DataType): boolean {
        return true;
    }
    cloneType(): CollectionType {
        return new Any();
    }
}
