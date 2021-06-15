import { DataType } from './base/DataType';
import { Layout } from './Layout';

export class AnyLayout extends Layout {
    constructor() {
        super();
        this._anyized = true;
    }
    public cloneType() {
        return new AnyLayout();
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
