import { DataType, EDataType } from './base/DataType';
import { SingularDataType } from '../../misc/ast/SingularDataType';

/**
 * available data types for singular
 */
export type SingularDataTypes = keyof typeof SingularDataType;

/**
 * Single-valued data types
 */
export class Singular extends DataType {
    constructor(private _dtype: SingularDataType) {
        super(EDataType.SINGULAR);
    }
    public get dtype(): SingularDataType {
        return this.dtype;
    }
    /**
     * get current data type in string
     */
    getDataType(): SingularDataTypes {
        // return this.val.toString();
        //TODO 10/03 work
        return SingularDataType[this._dtype] as SingularDataTypes;
    }

    /**
     * Duplicate singular data type
     */
    cloneType() {
        return new Singular(this._dtype);
    }

    static isSingular(x: DataType): x is Singular {
        return x.type === EDataType.SINGULAR;
    }

    isExactType(d: DataType): boolean {
        if (Singular.isSingular(d)) {
            return this.dtype === d.dtype;
        }
        return false;
    }
}
