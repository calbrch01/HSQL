/**
 * Main tests for HSQL
 * @packageDocumentation
 */

import 'mocha';
import chai, { assert } from 'chai';
import path from 'path';
import os from 'os';
import { execAndGetCode, executeFile, removeECLFile, testFile } from './lib';
import xml2js from 'xml2js';
chai.should();
describe('Grammar generation tests', function () {
    //this test takes a bit of time
    this.timeout(10000);

    /**
     * Path for grammar
     */
    const gpath = path.join(process.cwd(), 'grammar', 'HSQL.g4');

    /**
     * Temporary directory - the OS provides it
     */
    const tmpdir = path.normalize(os.tmpdir());

    it('Grammar must be valid', async () => {
        // generate grammar and put it into a tmp file
        const {
            returnCode,
            // inspect these variables if the tests fail
            stdout: _stdout,
            stderr: _stderr,
        } = await execAndGetCode(`npx antlr4ts -visitor -no-listener ${gpath} -o ${tmpdir}`);
        // the returncode shall be 0 for valid grammar or non-zero for invalid grammar
        assert.strictEqual(returnCode, 0, 'Should have been valid grammar');
    });

    it('Help command in the program', async () => {
        const {
            returnCode,
            // inspect these variables if the tests fail
            stdout: _stdout,
            stderr: _stderr,
        } = await execAndGetCode(`npm run testing-help`);
        assert.strictEqual(returnCode, 0, 'Should have been valid grammar');
    });
});

describe('Convert and Write Test Cases for', function () {
    it('Import, Output, Comments', async () => testFile('importOutput'));
    it('Select, Plots', async () => testFile('select'));
    it.skip('Embedded ECL and Type definitions', async () => testFile('eclembed'));
    it('Train, predict - LinearRegression', async () => testFile('ols'));
    it('Train, predict - BinomialLogisticRegression', async () => testFile('binomialLogisticRegression'));
    it('Train, predict - RegressionForest', async () => testFile('regressionForest'));
    it('Train, predict - ClassificationForest', async () => testFile('classificationForest'));
    it('Train, predict - GeneralLinearModel', async () => testFile('generalLinearModel'));
    //Need to complete
    it.skip('Train, predict - SVMRegression', async () => testFile('svmc'));
    it('Train, predict - KMeans', async () => testFile('km'));
    it('Predict - DBScan', async () => testFile('dbs'));
    //Note: Do not try to execute the translation of this file.
    //      This is only a test for general conversion functionality
});

describe('Execute cases ', function () {
    before(async function () {
        const x = await execAndGetCode('ecl status');

        if (x.returnCode !== 0) {
            console.warn('No ECLCC, skipping execution');
            this.skip();
        }
    });

    this.timeout('15s');
    it('Import, Output, Comments', async () => executeFile('importOutput'));
    it('Select, Plots', async () => executeFile('select'));
    it.skip('commonsimple - the base module for all ML', async () => {
        //this shouldve been created already by dependencies, if not, itll fail
        const result = await executeFile('commonsimple');
        const parsed = await xml2js.parseStringPromise(result);
        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(1);
        parsed.Result.Dataset[0].should.have.property('Row');
        parsed.Result.Dataset[0].Row.should.be.length(6);
        //lets skip checking valuewise, 6 elements is a good indicator everything is fine
    });
    it.skip('Embedded ECL and Type definitions', async () => {
        const result = await executeFile('eclembed');
        const parsed = await xml2js.parseStringPromise(result);
        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(1);
        parsed.Result.Dataset[0].should.have.property('Row');
        parsed.Result.Dataset[0].Row.should.be.length(2);
        parsed.Result.Dataset[0].Row[0].should.have.property('col');
        parsed.Result.Dataset[0].Row[0].col.should.be.length(1);
        parseInt(parsed.Result.Dataset[0].Row[0].col[0]).should.be.equal(1);

        parsed.Result.Dataset[0].Row[1].should.have.property('col');
        parsed.Result.Dataset[0].Row[1].col.should.be.length(1);
        parseInt(parsed.Result.Dataset[0].Row[1].col[0]).should.be.equal(2);
    });
    it('Train, predict - LinearRegression', async () => {
        const result = await executeFile('ols');
        const parsed = await xml2js.parseStringPromise(result);
        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(3);
        parsed.Result.Dataset[2].should.have.property('Row');
        parsed.Result.Dataset[2].Row.should.be.length(2);

        parsed.Result.Dataset[2].Row[0].should.have.property('value');
        parseInt(parsed.Result.Dataset[2].Row[0].value[0]).should.be.at.most(1600);
        parsed.Result.Dataset[2].Row[1].should.have.property('value');
        parseInt(parsed.Result.Dataset[2].Row[1].value[0]).should.be.at.least(1800);
    });
    it('Train, predict - BinomialLogisticRegression', async () => {
        const result = await executeFile('binomialLogisticRegression');
        const parsed = await xml2js.parseStringPromise(result);

        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(3);
        parsed.Result.Dataset[2].should.have.property('Row');
        parsed.Result.Dataset[2].Row.should.be.length(2);

        parsed.Result.Dataset[2].Row[0].should.have.property('value');
        parsed.Result.Dataset[2].Row[0].value[0].should.equal('0');
        parsed.Result.Dataset[2].Row[1].should.have.property('value');
        parsed.Result.Dataset[2].Row[1].value[0].should.equal('1');
    });
    it('Train, predict - RegressionForest', async () => {
        const result = await executeFile('regressionForest');
        const parsed = await xml2js.parseStringPromise(result);

        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(3);
        parsed.Result.Dataset[2].should.have.property('Row');
        parsed.Result.Dataset[2].Row.should.be.length(2);

        parsed.Result.Dataset[2].Row[0].should.have.property('value');
        parseInt(parsed.Result.Dataset[2].Row[0].value[0]).should.be.at.most(1600);
        parsed.Result.Dataset[2].Row[1].should.have.property('value');
        parseInt(parsed.Result.Dataset[2].Row[1].value[0]).should.be.at.least(1800);
    });
    it('Train, predict - ClassificationForest', async () => {
        const result = await executeFile('classificationForest');
        const parsed = await xml2js.parseStringPromise(result);

        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(3);
        parsed.Result.Dataset[2].should.have.property('Row');
        parsed.Result.Dataset[2].Row.should.be.length(2);

        parsed.Result.Dataset[2].Row[0].should.have.property('value');
        parsed.Result.Dataset[2].Row[0].value[0].should.equal('0');
        parsed.Result.Dataset[2].Row[1].should.have.property('value');
        parsed.Result.Dataset[2].Row[1].value[0].should.equal('1');
    });
    it('Train, predict - GeneralLinearModel', async () => {
        const result = await executeFile('generalLinearModel');
        const parsed = await xml2js.parseStringPromise(result);

        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(3);
        parsed.Result.Dataset[2].should.have.property('Row');
        parsed.Result.Dataset[2].Row.should.be.length(2);

        parsed.Result.Dataset[2].Row[0].should.have.property('value');
        parseInt(parsed.Result.Dataset[2].Row[0].value[0]).should.be.at.most(1600);
        parsed.Result.Dataset[2].Row[1].should.have.property('value');
        parseInt(parsed.Result.Dataset[2].Row[1].value[0]).should.be.at.least(1800);
    });
    it.skip('Predict - DBScan', async () => {
        const result = await executeFile('dbs');
        const parsed = await xml2js.parseStringPromise(result);

        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(2);

        parsed.Result.Dataset[1].should.have.property('Row');
        parsed.Result.Dataset[1].Row.should.be.length(4);
        parsed.Result.Dataset[1].Row.map((e: { label?: string[] }) => {
            parseInt(e.label?.[0] ?? '-1').should.be.equal(0);
        });
    });
    it('Train, predict - KMeans', async () => {
        const result = await executeFile('km');
        const parsed = await xml2js.parseStringPromise(result);

        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(3);

        //last entry is from the model
        parsed.Result.Dataset[2].should.have.property('Row');
        parsed.Result.Dataset[2].Row.should.be.length(6);
    });
});

describe('Cleanups', function () {
    it('importOutput', async () => removeECLFile('importOutput'));
    it('commonsimple', async () => removeECLFile('commonsimple'));
    it('select', async () => removeECLFile('select'));
    it.skip('eclembed', async () => removeECLFile('eclembed'));
    it('linearRegression', async () => removeECLFile('ols'));
    it('binomialLogisticRegression', async () => removeECLFile('binomialLogisticRegression'));
    it('regressionForest', async () => removeECLFile('regressionForest'));
    it('classificationForest', async () => removeECLFile('classificationForest'));
    it('generalLinearModel', async () => removeECLFile('generalLinearModel'));
    it.skip('dbs', async () => removeECLFile('dbs'));
    it('km', async () => removeECLFile('km'));
});
