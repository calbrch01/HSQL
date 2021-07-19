import { CollectionType } from './base/CollectionType';
import { DataType, EDataType } from './base/DataType';
import { Col } from './Col';
import { AnyTable, Table } from './Table';

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
        c = c.toLowerCase();
        return this.cols.get(c);
    }

    static isLayout(x: DataType): x is Layout {
        return x.type === EDataType.LAYOUT;
    }

    toTable() {
        return new Table(new Map(this.list()));
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

export class AnyLayout extends Layout {
    constructor() {
        super();
        this._anyized = true;
    }
    public cloneType() {
        return new AnyLayout();
    }

    override isExactType(d: DataType) {
        if (AnyLayout.isLayout(d)) {
            return true;
        }
        return false;
    }

    override toTable() {
        return new AnyTable();
    }

    override list() {
        return [];
    }
}
