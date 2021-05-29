import { AnyTable } from '../AnyTable';
import { Table } from '../Table';

export enum EDataType {
    ANY,
    MODULE,
    LAYOUT,
    TABLE,
    SET,
    SINGULAR,
    ACTION,
    NOTHING,
}

type dataMap = {
    [EDataType.TABLE]: Table | AnyTable;
};

type dataConv<T extends keyof dataMap> = (arg: T) => dataMap[T];

/**
 * Data type
 */
export abstract class DataType {
    protected _type: EDataType | null = null;
    get type() {
        return this._type;
    }
    constructor(type: EDataType) {}
    /**
     * Is of similar type (Does not use nesting)
     * @param type
     */
    is(type: EDataType) {
        return this._type === type;
    }

    /**
     * Is of the same type (Compares nested types too)
     * @param type
     */
    abstract isExactType(type: DataType): boolean;

    /**
     * Return self
     */
    abstract cloneType(): DataType;
}
