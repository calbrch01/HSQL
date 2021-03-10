import { CollectionType } from './base/CollectionType';
import { DataType, EDataType } from './base/DataType';
import { Col } from './Col';

/**
 * Table
 */
export class Table extends CollectionType {
    /**
     *
     * @param cols Columns to contain
     */
    constructor(private cols: Col[] = []) {
        super(EDataType.TABLE);
    }

    /**
     * Duplicate a table type
     */
    cloneType() {
        const duplicatedColumns: Col[] = this.cols.map(col => col.cloneType());
        return new Table(duplicatedColumns);
    }
    list() {
        return this.cols;
    }
    has(C: Col) {
        return this.cols.findIndex(e => e.equals(C)) !== -1;
    }

    static isTable(x: DataType): x is Table {
        return x.type === EDataType.TABLE;
    }

    isExactType(t: DataType) {
        if (Table.isTable(t)) {
            // must have same number of cols
            if (t.cols.length !== this.cols.length) return false;
            //cache col length
            const colLength = t.cols.length;
            for (let i = 0; i < colLength; ++i) {
                // check all cols are the same
                if (!this.cols[i].isExactType(this.cols[i])) return false;
            }
            return true;
        }
        return false;
    }
}
