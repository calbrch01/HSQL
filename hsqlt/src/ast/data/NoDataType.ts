import { DataType, EDataType } from './base/DataType';

/**
 * A data type representing nothing.
 */
export class NoDataType extends DataType {
    constructor() {
        super(EDataType.NOTHING);
    }
    isExactType(type: DataType): boolean {
        if (type instanceof NoDataType) {
            return true;
        }
        return false;
    }
    /**
     * Returns
     * @returns
     */
    cloneType() {
        return new NoDataType();
    }
}
