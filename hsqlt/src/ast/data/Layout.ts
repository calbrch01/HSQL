import { CollectionType } from './base/CollectionType';
import { DataType, EDataType } from './base/DataType';
import { Col } from './Col';

export class Layout extends CollectionType {
    constructor(private cols: Map<string, Col> = new Map()) {
        super(EDataType.LAYOUT);
    }

    cloneType() {
        const cols = this.list();
        const duplicatedColumns: [string, Col][] = cols.map(([eName, eVar]) => [eName, eVar.cloneType()]);
        return new Layout(new Map(duplicatedColumns));
    }

    list() {
        return [...this.cols];
    }
    get(c: string) {
        return this.cols.get(c);
    }

    static isLayout(x: DataType): x is Layout {
        return x.type === EDataType.LAYOUT;
    }

    isExactType(t: DataType) {
        const myElems = [...this.cols];
        if (Layout.isLayout(t)) {
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
