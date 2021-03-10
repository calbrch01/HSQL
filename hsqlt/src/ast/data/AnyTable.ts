import { CollectionType } from './base/CollectionType';
import { DataType, EDataType } from './base/DataType';
import { Col } from './Col';

/**
 * Table but no decidable columns
 */
export class AnyTable extends CollectionType {
    constructor() {
        super(EDataType.TABLE);
    }
    public cloneType() {
        return new AnyTable();
    }
    has(c: Col) {
        return true;
    }

    isExactType(d: DataType | CollectionType) {
        // its not a collection, drop it
        // note that collectionTypes are instances of datatypes so this negation is important
        if (!(d instanceof CollectionType)) {
            return false;
        }
        // check self type first
        if (d.type === this._type) {
            // its an AnyTable, we do not care about contents.
            return true;
        }
        //not equal, drop
        return false;
    }

    list() {
        return [];
    }
}
