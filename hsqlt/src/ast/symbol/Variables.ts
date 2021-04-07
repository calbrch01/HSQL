import { DataType } from '../data/base/DataType';
import { VariableVisibility } from './VariableTable';

/**
 * @deprecated
 */
export abstract class Variable {
    constructor(protected _name: string, public type: DataType, public visibility: VariableVisibility) {}
    get name() {
        return this._name;
    }

    /**
     * get name and type
     */
    ref(): [string, DataType] {
        return [this._name, this.type];
    }
    /**
     * Check if the variable is of the same data type as this or not
     * @param type A Variable or its type
     */
    isSameDataType(type: DataType | Variable) {
        if (type instanceof Variable) return this.type == type.type;
        else return this.type === type;
    }
}

export class SimpleVariable {}
