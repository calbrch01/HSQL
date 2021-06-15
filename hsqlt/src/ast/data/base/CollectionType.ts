import { DataType, EDataType } from './DataType';
import { isDataType } from './typechecks/isDataType';

export abstract class CollectionType extends DataType {
    abstract get(c: string): DataType | undefined;
    // abstract has(c: string, d?: EDataType): boolean;

    /**
     * A default implementation of has based on get.
     * Override if better implementation possible or required
     * @param c string index
     * @param d optional datatype filter
     * @returns
     */
    has(c: string) {
        const x = this.get(c);
        if (x === undefined) {
            return false;
        } else {
            // we got it, so return true
            return true;
        }
    }
    /**
     * children
     */
    abstract list(): [string, DataType][];
    abstract cloneType(): CollectionType;
}
