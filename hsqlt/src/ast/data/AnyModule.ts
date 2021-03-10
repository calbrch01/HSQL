import { Module } from './Module';
import { CollectionType } from './base/CollectionType';
import { DataType, EDataType } from './base/DataType';
import { Col } from './Col';

/**
 * Table but no decidable columns
 */
export class AnyModule extends Module {
    constructor() {
        super();
    }
    public cloneType() {
        return new AnyModule();
    }
    has(c: DataType) {
        return true;
    }

    isExactType(d: DataType) {
        if (AnyModule.isModule(d)) {
            return true;
        }
        return false;
    }

    list() {
        return [];
    }
}
