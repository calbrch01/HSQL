import { getJSDocReturnTag } from 'typescript';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { Any } from '../data/Any';
import { DataType } from '../data/base/DataType';
import { isCollection } from '../data/base/misc';

export enum VariableVisibility {
    DEFAULT,
    SHARED,
    PUBLIC,
}
export type DataMetaData = {
    data: DataType;
    vis: VariableVisibility;
};

function MakeDataMetaData(data: DataType, vis: VariableVisibility): DataMetaData {
    return {
        data,
        vis,
    };
}

/**
 * Variable table
 * Stores the data
 */
export class VariableTable {
    static actionPrependString: '__r_action_' = '__r_action_';

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

    /**
     * Find data type of identifier. Similar to {@code VariableTable.get}
     * Returns undefined if does not exist
     * @param q Identifier to resolve
     */
    resolve(q: QualifiedIdentifier): DataType | undefined {
        // make a mutable copy
        if (q.length === 1) {
            const x = this.get(q.head);
            if (x) {
                return x.data;
            }
            // doesnt exist
            return undefined;
        } else {
            let root = this.get(q.head)?.data;
            // quick shortcut - redundant here, but helps skip all the extra work a bit later
            if (root === undefined) return undefined;
            else {
                q = new QualifiedIdentifier(...q.qidentifier);
                q.qidentifier.shift();
                // let anyized = false;

                // the process goes as below
                // 1. try to expand and find the current id being searched
                //     1.5 check if its anyizable, then shortcut and return true
                // 2. if found, set that as root
                // 3. any other case return undefined
                for (const id of q.qidentifier) {
                    if (root === undefined) return undefined;
                    // const f = root;
                    if (isCollection(root)) {
                        if (root.anyized) {
                            // no point in searching, short circuit and return an any
                            return new Any();
                        } else {
                            // not anyized, we can dig deeper
                            root = root.get(id);
                        }
                    } else {
                        // we had to go
                        return undefined;
                    }
                }
                // return what became our last element after traversal
                // which is what is the answer
                return root;

                // return undefined;
            }
        }
    }
}
