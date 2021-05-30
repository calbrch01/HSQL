import { CollectionType } from './base/CollectionType';
import { DataType, EDataType } from './base/DataType';

export class Layout extends CollectionType {
    constructor(private elems: DataType[] = []) {
        super(EDataType.LAYOUT);
    }

    cloneType() {
        const duplicatedColumns: DataType[] = this.elems.map(e => e.cloneType());
        return new Layout(duplicatedColumns);
    }

    list() {
        return this.elems;
    }

    has(C: DataType) {
        return this.elems.findIndex(e => e.isExactType(C)) !== -1;
    }

    static isLayout(x: DataType): x is Layout {
        return x.type === EDataType.LAYOUT;
    }

    isExactType(t: DataType) {
        if (Layout.isLayout(t)) {
            if (t.elems.length !== this.elems.length) return false;
            //cache col length
            const colLength = t.elems.length;
            for (let i = 0; i < colLength; ++i) {
                // check all elems are the same
                if (!this.elems[i].isExactType(this.elems[i])) return false;
            }
            return true;
        }
        return false;
    }
}
