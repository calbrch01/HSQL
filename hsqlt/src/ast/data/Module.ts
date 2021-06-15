import { CollectionType } from './base/CollectionType';
import { DataType, EDataType } from './base/DataType';
import { isDataType } from './base/misc';

export class Module extends CollectionType {
    get(c: string) {
        return this.elems.get(c);
    }
    constructor(private elems: Map<string, DataType> = new Map()) {
        super(EDataType.MODULE);
    }

    cloneType() {
        const cols = [...this.elems];
        const duplicatedColumns: [string, DataType][] = cols.map(([eName, eVar]) => [eName, eVar.cloneType()]);
        return new Module(new Map(duplicatedColumns));
    }

    list() {
        return [...this.elems];
    }

    has(c: string, d?: EDataType) {
        const x = this.get(c);
        if (x === undefined) {
            return false;
        } else {
            if (d !== undefined) {
                return isDataType(x, d);
            } else {
                return true;
            }
        }
    }

    static isModule(x: DataType): x is Module {
        return x.type === EDataType.MODULE;
    }

    isExactType(t: DataType) {
        const myElems = [...this.elems];
        if (Module.isModule(t)) {
            if (t.elems.size !== this.elems.size) return false;
            //cache col length
            // const colLength = t.elems.size;
            // for (let i = 0; i < colLength; ++i) {
            //     // check all elems are the same
            //     if (!this.elems[i].isExactType(t.elems[i])) return false;

            // their lengths are the same, so if every lhs = rhs, then every rhs = lhs
            for (const [lhsName, lhsVar] of this.elems) {
                const rhsVar = t.get(lhsName);
                if (rhsVar === undefined) return false;
                else {
                    if (!lhsVar.isExactType(rhsVar)) return false;
                }
            }
            return true;
        }
        return false;
    }
}

/**
 * Module but no decidable columns
 */
export class AnyModule extends Module {
    constructor() {
        super();
        this._anyized = true;
    }
    public cloneType() {
        return new AnyModule();
    }
    has(c: string, d?: EDataType) {
        return true;
    }

    isExactType(d: DataType) {
        if (AnyModule.isModule(d)) {
            return true;
        }
        return false;
    }

    list() {
        return [];
    }
}
