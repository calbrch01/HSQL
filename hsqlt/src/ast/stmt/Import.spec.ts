import { assert } from 'chai';
import { Import } from './Import';

describe('import AST node tests', function () {
    const moduleName1 = 'm1';
    const alias1 = 'a1';

    it('no alias', async () => {
        const a = new Import(moduleName1);
        assert.strictEqual(a.getModuleName(), moduleName1);
        assert.strictEqual(a.getImportedName(), moduleName1);
    });

    it('alias is equal', async () => {
        const a = new Import(moduleName1, moduleName1);
        assert.strictEqual(a.getModuleName(), moduleName1);
        assert.strictEqual(a.getImportedName(), moduleName1);
    });

    it('an alias', async () => {
        const a = new Import(moduleName1, alias1);
        assert.strictEqual(a.getModuleName(), moduleName1);
        assert.strictEqual(a.getImportedName(), alias1);
    });
});
