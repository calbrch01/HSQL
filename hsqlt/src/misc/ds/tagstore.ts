/**
 * A key value datastore
 * // TODO currently only modules, layouts and tables clone their tagstores. add
 */
export class TagStore {
    static trainStore = 'trainmethod' as const;
    private map: Map<string, string | number | boolean>;
    constructor() {
        this.map = new Map();
    }
    getNum(key: string): number | undefined {
        const entry = this.map.get(key);
        if (typeof entry === 'number') {
            return entry;
        } else {
            return undefined;
        }
    }

    getBool(key: string) {
        const entry = this.map.get(key);
        if (typeof entry === 'boolean') {
            return entry;
        } else {
            return undefined;
        }
    }

    set(key: string, val: string | number | boolean) {
        this.map.set(key, val);
        return this;
    }

    clear() {
        return this.map.clear();
    }
}
