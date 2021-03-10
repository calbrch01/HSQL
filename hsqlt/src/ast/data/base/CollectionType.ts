import { Collection } from 'typescript';
import { Col } from '../Col';
import { DataType } from './DataType';

export abstract class CollectionType extends DataType {
    abstract has(c: Col): boolean;
    /**
     * children
     */
    abstract list(): DataType[];
    abstract cloneType(): CollectionType;
}
