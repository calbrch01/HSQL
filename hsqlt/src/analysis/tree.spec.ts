import 'mocha';
import { assert } from 'chai';
import { HSQLTreeFactory } from './tree';
import { ErrorManager, ErrorSeverity } from '../misc/error/Error';

describe('Tree generation', function () {
    const errorManager = ErrorManager.normal;
    const x = new HSQLTreeFactory(errorManager);
    it('error Reporting', async () => {
        // intentional missing semicolon
        const { tree } = x.makeTree('import a');
        assert.lengthOf(errorManager.issues, 1);
        const theBigIssue = errorManager.issues[0];
        // its an error
        assert.strictEqual(theBigIssue.severity, ErrorSeverity.ERROR, `Expected a 'Error'`);
        // its on line 1
        assert.strictEqual(theBigIssue.line, 1);
    })
});