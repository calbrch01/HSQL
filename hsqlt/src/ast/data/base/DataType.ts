import { AnyTable } from '../AnyTable';
import { Table } from '../Table';

export enum EDataType {
    ANY,
    MODULE,
    LAYOUT,
    TABLE,
    /** not used yet */
    SET,
    SINGULAR,
    ACTION,
    NOTHING,
}

/**
 * Data type
 */
export abstract class DataType {
    // protected abstract _type: EDataType;

    protected _anyized: boolean = false;
    public get anyized() {
        return this._anyized;
    }

    get type() {
        return this._type;
    }
    constructor(protected _type: EDataType) {}
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
