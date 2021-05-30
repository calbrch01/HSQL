import { DataType, EDataType } from './base/DataType';

export class Any extends DataType {
    constructor() {
        super(EDataType.ANY);
        this._anyized = true;
    }
    isExactType(type: DataType): boolean {
        // TODO Is this a good assumption to make?
        return false;
    }
    cloneType(): DataType {
        return new Any();
    }
}
