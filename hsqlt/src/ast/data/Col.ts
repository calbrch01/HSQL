import { dtype, Singular } from './Singular';

/**
 * Column (for a table/layout)
 */
export class Col extends Singular {
    constructor(dtype: dtype) {
        super(dtype);
    }
    cloneType() {
        return new Col(this.dtype);
    }

    equals(c: Col) {
        return c.type === this.type;
    }
}
