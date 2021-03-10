import { Action } from '../data/Action';
import { DataType } from '../data/base/DataType';

export class EqualDefinition<K extends DataType = DataType> {
    lhs?: K;
    constructor(_lhs: K) {
        this.lhs = _lhs;
    }
}
