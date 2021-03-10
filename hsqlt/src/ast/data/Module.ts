import { SelectFromClauseContext } from '../../misc/grammar/HSQLParser';
import { CollectionType } from './base/CollectionType';
import { DataType, EDataType } from './base/DataType';

export class Module extends CollectionType {
    constructor(private elems: DataType[] = []) {
        super(EDataType.MODULE);
    }

    cloneType() {
        const duplicatedColumns: DataType[] = this.elems.map(e => e.cloneType());
        return new Module(duplicatedColumns);
    }

    list() {
        return this.elems;
    }

    has(C: DataType) {
        return this.elems.findIndex(e => e.isExactType(C)) !== -1;
    }

    static isModule(x: DataType): x is Module {
        return x.type === EDataType.MODULE;
    }

    isExactType(t: DataType) {
        if (Module.isModule(t)) {
            if (t.elems.length !== this.elems.length) return false;
            //cache col length
            const colLength = t.elems.length;
            for (let i = 0; i < colLength; ++i) {
                // check all elems are the same
                if (!this.elems[i].isExactType(this.elems[i])) return false;
            }
            return true;
        }
        return false;
    }
}
