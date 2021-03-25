import { getJSDocReturnTag } from 'typescript';
import { DataType } from '../data/base/DataType';
import { Variable } from './Variables';

export enum VariableVisibility {
    DEFAULT,
    SHARED,
    PUBLIC,
}
export type DataMetaData = {
    data: DataType;
    vis: VariableVisibility;
};

export class VariableTable {
    static actionPrependString = '__r_action_';

    /**
     * Generate variables
     * @param _vars Pre-existing variables to add
     */
    constructor(protected _vars: Map<string, DataMetaData> = new Map(), protected actionCounter: number = 0) {}
    get vars() {
        return this._vars;
    }

    /**
     * Add a variable into the scope
     *
     * @param s location
     * @param v
     */
    add(s: string, v: DataMetaData): boolean {
        // this.vars.add(v);
        if (this._vars.has(s)) {
            return false;
        }
        this._vars.set(s, v);
        return true;
    }

    get(s: string) {
        return this._vars.get(s);
    }

    /**
     * check if variable exists
     * @param s variable name
     */
    exists(s: string) {
        return this._vars.has(s);
    }

    /**
     * Get a new variable name for a action.
     * Note that this does not claim it
     */
    claimActionIdentifier(): string {
        let usableStr = VariableTable.actionPrependString + this.actionCounter;
        while (this.exists(usableStr)) {
            // console.log(`Claimed ${this.actionCounter}`);
            this.actionCounter++;
            usableStr = VariableTable.actionPrependString + this.actionCounter;
        }

        return usableStr;
    }
}
