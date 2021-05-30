import { Collection } from 'typescript';
import { Col } from '../Col';
import { DataType, EDataType } from './DataType';
import { isDataType } from './misc';

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
    has(c: string, d?: EDataType) {
        const x = this.get(c);
        if (x === undefined) {
            return false;
        } else {
            if (d !== undefined) {
                return isDataType(x, d);
            } else {
                // we got it, so return true
                return true;
            }
        }
    }
    /**
     * children
     */
    abstract list(): [string, DataType][];
    abstract cloneType(): CollectionType;
}
