import { DataType, EDataType } from './base/DataType';
import { Module } from './Module';

/**
 * Table but no decidable columns
 */
export class AnyModule extends Module {
    constructor() {
        super();
        this._anyized = true;
    }
    public cloneType() {
        return new AnyModule();
    }
    has(c: string, d?: EDataType) {
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
