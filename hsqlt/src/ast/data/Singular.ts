import { DataType, EDataType } from './base/DataType';

/**
 * Supported elementary data types
 */
export enum dtype {
    BOOLEAN,
    INTEGER,
    REAL,
    DECIMAL,
    STRING,
    QSTRING,
}

/**
 * available data types for singular
 */
export type dtypes = keyof typeof dtype;

/**
 * Single-valued data types
 */
export class Singular extends DataType {
    constructor(private _dtype: dtype) {
        super(EDataType.SINGULAR);
    }
    public get dtype(): dtype {
        return this.dtype;
    }
    /**
     * get current data type in string
     */
    getDataType(): dtypes {
        // return this.val.toString();
        //TODO work
        return dtype[this._dtype] as dtypes;
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
