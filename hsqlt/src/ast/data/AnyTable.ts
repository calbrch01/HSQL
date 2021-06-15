import { DataType } from './base/DataType';
import { Table } from './Table';

/**
 * Table but no decidable columns
 * eg. the result of a select query whose types are undecidable
 */
export class AnyTable extends Table {
    get(c: string) {
        return undefined;
    }

    constructor() {
        super();
        this._anyized = true;
    }
    /**
     * return a new anytable
     */
    public cloneType() {
        return new AnyTable();
    }

    isExactType(d: DataType) {
        // check self type first
        if (AnyTable.isTable(d)) {
            // its an AnyTable, we do not care about contents.
            return true;
        }
        //not equal, drop
        return false;
    }

    /**
     * Method returns an empty list as there is no understandable list of columns
     */
    list() {
        return [];
    }
}
