import { CollectionType } from './base/CollectionType';
import { DataType, EDataType } from './base/DataType';
import { Layout } from './Layout';

export class AnyLayout extends Layout {
    constructor() {
        super();
        this.anyized = true;
    }
    public cloneType() {
        return new AnyLayout();
    }
    has(c: DataType) {
        return true;
    }

    isExactType(d: DataType) {
        if (AnyLayout.isLayout(d)) {
            return true;
        }
        return false;
    }

    list() {
        return [];
    }
}
