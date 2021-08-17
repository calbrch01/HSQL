import { Singular } from './Singular';
import { SingularDataType } from '../../misc/ast/SingularDataType';

/**
 * Column (for a table/layout)
 */
export class Col extends Singular {
    constructor(dtype: SingularDataType) {
        super(dtype);
    }
    cloneType() {
        return new Col(this.dtype);
    }

    equals(c: Col) {
        return c.type === this.type;
    }
}
