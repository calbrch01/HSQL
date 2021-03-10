import { DataType, EDataType } from './base/DataType';

export enum ActionType {
    OUTPUT,
    MACROCALL,
}

export class Action extends DataType {
    /**
     * Create a new Action
     * @param atype defaults to OUTPUT
     */
    constructor(protected atype: ActionType = ActionType.OUTPUT) {
        super(EDataType.ACTION);
    }
    cloneType() {
        return new Action(this.atype);
    }
    static isAction(x: DataType): x is Action {
        return x.type === EDataType.ACTION;
    }

    isExactType(a: DataType): boolean {
        if (Action.isAction(a)) {
            return a._type === this._type;
        }
        return false;
    }
}
