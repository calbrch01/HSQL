import { ParserRuleContext } from 'antlr4ts';
import { getJSDocReturnTag } from 'typescript';
import { ErrorManager } from '../../managers/ErrorManager';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { Any } from '../data/Any';
import { CollectionType } from '../data/base/CollectionType';
import { DataType } from '../data/base/DataType';
import { isCollection } from '../data/base/typechecks/isCollection';
import { VariableVisibility } from '../../misc/ast/VariableVisibility';
import { DataVisualization } from '../../misc/ast/DataVisualization';

export type DataMetaData = {
    data: DataType;
    vis: VariableVisibility;
    internal: boolean;
};

/**
 * Wrap the data in its metadata
 * @param data
 * @param vis
 * @param internal
 * @returns
 */
export function DataMetaData(
    data: DataType,
    vis: VariableVisibility = VariableVisibility.DEFAULT,
    internal: boolean = false
): DataMetaData {
    return {
        data,
        vis,
        internal,
    };
}

/**
 * Variable table
 * Stores the data
 */
export class VariableTable {
    static actionPrependString = '__r_action_' as const;
    protected actionCounter: number;

    /**
     * Generate variables
     * @param _vars Pre-existing variables to add
     */
    constructor(
        private _vars: Map<string, DataMetaData>[] = [new Map()],
        private _visualizationDeclarations: Map<string, DataVisualization> = new Map(),
        private _trainDeclaration: Map<string, string> = new Map()
    ) {
        this.actionCounter = 0;
    }

    get visualizationDeclarations() {
        return this._visualizationDeclarations;
    }

    // TODO set the correct datatype
    addTrainDeclaration(s: string, y: string) {
        // console.log('setting', s);
        s = s.toLowerCase();
        if (this._trainDeclaration.has(s)) {
            return false;
        }
        this._trainDeclaration.set(s, y);
        return true;
    }

    addVisualizationDeclaration(s: string, y: DataVisualization) {
        // console.log('setting', s);
        s = s.toLowerCase();
        if (this._visualizationDeclarations.has(s)) {
            return false;
        }
        this._visualizationDeclarations.set(s, y);
        return true;
    }
    getVisualizationDeclaration(s: string) {
        s = s.toLowerCase();
        return this._visualizationDeclarations.get(s);
    }

    /**
     * Avoid using this
     */
    get vars() {
        return this._vars;
    }

    // protected
    get scopeLength() {
        return this._vars.length;
    }

    /**
     * Add a variable into the scope
     *
     * @param s location
     * @param v the data to add
     * @param addtoOverLay whether to add to the root base(false) or to the latest overlay(true). (true)
     */
    add(s: string, v: DataMetaData, addtoOverLay: boolean = true): boolean {
        s = s.toLowerCase();
        const map: Map<string, DataMetaData> = this._vars[addtoOverLay ? this.scopeLength - 1 : 0];
        // this.vars.add(v);

        if (map.has(s)) {
            return false;
        }
        map.set(s, v);
        return true;
    }

    get(s: string): DataMetaData | undefined {
        s = s.toLowerCase();

        const l = this.scopeLength;
        let x: DataMetaData | undefined = undefined;
        for (let i = l - 1; i >= 0; i--) {
            x = this._vars[i].get(s);
            if (x !== undefined) break;
        }
        return x;
    }

    /**
     * check if variable exists
     * @param s variable name
     */
    exists(s: string) {
        s = s.toLowerCase();

        const l = this.scopeLength;
        // let x: boolean = false;
        for (let i = l - 1; i >= 0; i--) {
            const x = this._vars[i].has(s);
            if (x) return true;
        }
        return false;
        // return this._vars.has(s);
    }

    pushScope(overlay: Map<string, DataMetaData> = new Map()) {
        return this._vars.push(overlay);
    }
    popScope() {
        return this._vars.pop();
    }

    /**
     * Helper function to automatically push an overlay,
     * run the helper function, pop the scope and return the result from the helper scope.
     * @param callbackFn Callback function with access to current scope index
     * @returns whatever callbackFn returns
     */
    withNewScope<T>(callbackFn: (x: number) => T) {
        this.pushScope();
        const res = callbackFn(this._vars.length - 1);
        this.popScope();
        return res;
    }

    /**
     * Get a new variable name for a action.
     * Note that this does not claim it
     * This function merely indicates which is the next action variable that can be claimed
     */
    nextClaimableActionIdentifier(): string {
        let usableStr = VariableTable.actionPrependString + this.actionCounter;
        while (this.exists(usableStr)) {
            // console.log(`Claimed ${this.actionCounter}`);
            this.actionCounter++;
            usableStr = VariableTable.actionPrependString + this.actionCounter;
        }

        return usableStr;
    }

    /**
     * Find data type of identifier. Similar to {@link VariableTable.get}, but within the identifier
     * Returns undefined if does not exist
     * @param q Identifier to resolve
     */
    resolve(q: QualifiedIdentifier): DataType | undefined {
        // if its one deep, this is a trivial case of the get method
        if (q.length === 1) {
            const x = this.get(q.head);
            if (x) {
                return x.data;
            }
            // doesnt exist
            return undefined;
        } else {
            // Getting the data to traverse with
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
