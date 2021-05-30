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
    constructor(private cols: Map<string, Col> = new Map()) {
        super(EDataType.TABLE);
    }

    /**
     * Duplicate a table type
     */
    cloneType() {
        const cols = this.list();
        const duplicatedColumns: [string, Col][] = cols.map(([eName, eVar]) => [eName, eVar.cloneType()]);
        return new Table(new Map(duplicatedColumns));
    }
    list() {
        return [...this.cols];
    }
    get(c: string) {
        return this.cols.get(c);
    }
    // has(C: Col) {
    //     return this.cols.has(e => e.equals(C)) !== -1;
    // }

    static isTable(x: DataType): x is Table {
        return x.type === EDataType.TABLE;
    }

    isExactType(t: DataType) {
        const myElems = [...this.cols];
        if (Table.isTable(t)) {
            if (t.cols.size !== this.cols.size) return false;
            //cache col length
            // const colLength = t.cols.size;
            // for (let i = 0; i < colLength; ++i) {
            //     // check all cols are the same
            //     if (!this.cols[i].isExactType(t.cols[i])) return false;

            // their lengths are the same, so if every lhs = rhs, then every rhs = lhs
            for (const [lhsName, lhsVar] of this.cols) {
                const rhsVar = t.get(lhsName);
                if (rhsVar === undefined) return false;
                else {
                    if (!lhsVar.isExactType(rhsVar)) return false;
                }
            }
            return true;
        }
        return false;
    }
}
