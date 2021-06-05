import { DataType, EDataType } from './base/DataType';

export class Any extends DataType {
    constructor() {
        super(EDataType.ANY);
        this._anyized = true;
    }
    isExactType(type: DataType): boolean {
        return true;
    }
    cloneType(): DataType {
        return new Any();
    }
}
