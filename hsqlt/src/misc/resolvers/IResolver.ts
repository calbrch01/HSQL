import { DataType } from '../../ast/data/base/DataType';
import { QualifiedIdentifier } from '../ast';

export interface IResolver {
    getResult(q: QualifiedIdentifier): DataType;
}
