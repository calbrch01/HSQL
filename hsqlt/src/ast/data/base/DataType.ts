import { TagStore } from '../../../misc/ds/tagstore';

export enum EDataType {
    ANY,
    MODULE,
    LAYOUT,
    TABLE,
    /** not used yet */
    SET,
    FUNCTION,
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
    private _tags: TagStore;
    public get tags(): TagStore {
        return this._tags;
    }
    // public
    public get anyized() {
        return this._anyized;
    }

    get type() {
        return this._type;
    }
    constructor(protected _type: EDataType, map?: TagStore) {
        this._tags = map ?? new TagStore();
    }
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
