import { assert } from 'chai';
import { HSQLTreeFactory } from '../../conv/tree';
import { ErrorManager } from '../../managers/ErrorManager';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { Import } from './Import';

describe('import AST node tests', function () {
    const moduleName1 = 'm1';
    const alias1 = 'a1';

    // get trees
    const trees = [
        `import ${moduleName1};`,
        `import ${moduleName1} as ${moduleName1};`,
        `import ${moduleName1} as ${alias1};`,
    ].map(e => new HSQLTreeFactory(ErrorManager.normal).makeTree(e).tree);

    const importContexts = trees.map(e => e.completestmt()[0].stmt().importStmt());
    // const im1 = tree1.completestmt()[0].stmt().importStmt();
    it('Import check', async () => {
        assert.isArray(importContexts);
        assert.lengthOf(importContexts, 3);
        importContexts.forEach(e => assert.exists(e));
    });
    it('no alias', async () => {
        const a = new Import(importContexts[0]!, QualifiedIdentifier.fromString(moduleName1));
        assert.deepStrictEqual(a.moduleName, QualifiedIdentifier.fromString(moduleName1));
        assert.deepStrictEqual(a.getImportedName(), QualifiedIdentifier.fromString(moduleName1));
    });

    it('alias is equal', async () => {
        const a = new Import(
            importContexts[1]!,
            QualifiedIdentifier.fromString(moduleName1),
            QualifiedIdentifier.fromString(moduleName1)
        );
        assert.deepStrictEqual(a.moduleName, QualifiedIdentifier.fromString(moduleName1));
        assert.deepStrictEqual(a.getImportedName(), QualifiedIdentifier.fromString(moduleName1));
    });

    it('an alias', async () => {
        const a = new Import(
            importContexts[2]!,
            QualifiedIdentifier.fromString(moduleName1),
            QualifiedIdentifier.fromString(alias1)
        );
        assert.deepStrictEqual(a.moduleName, QualifiedIdentifier.fromString(moduleName1));
        assert.deepStrictEqual(a.getImportedName(), QualifiedIdentifier.fromString(alias1));
    });
});
