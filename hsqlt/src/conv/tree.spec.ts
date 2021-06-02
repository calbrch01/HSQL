import 'mocha';
import { assert } from 'chai';
import { HSQLTreeFactory } from './tree';
import { ErrorManager, ErrorSeverity } from '../managers/ErrorManager';

describe('Tree generation', function () {
    it('error Reporting', async () => {
        const errorManager = ErrorManager.normal;
        const x = new HSQLTreeFactory(errorManager);
        // intentional missing semicolon
        const { tree } = x.makeTree('import a');
        assert.lengthOf(errorManager.issues, 1);
        const theBigIssue = errorManager.issues[0];
        // its an error
        assert.strictEqual(theBigIssue.severity, ErrorSeverity.ERROR, `Expected a 'Error'`);
        // its on line 1
        assert.strictEqual(theBigIssue.line, 1);
    });
    it('tree generates', async () => {
        const errorManager = ErrorManager.normal;
        const x = new HSQLTreeFactory(errorManager);
        // some random import, the syntax is not important
        // we are just making sure the tree generates
        const { tree } = x.makeTree('import a;');
        assert.lengthOf(errorManager.issues, 0);
    });
});
