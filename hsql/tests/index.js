const mocha = require('mocha')
const chai = require('chai')
chai.should()
const xml2js = require('xml2js')

const fs = require('fs')
const fsp = require('fs').promises

const path = require('path')
const { EOL } = require('os')
const { exec } = require('child_process')

const HSQLTranspiler = require('../HSQL')

let pathScripts = path.join(__dirname, "testScripts")



describe('Sanity cases', function () {
    it("ECL client tools", function (done) {
        exec("ecl status", (error, stdout, stderr) => {
            if (error)
                done(error)
            else {
                done()
            }
        })
    })
    it("Should be able to deal with an empty file", function () {
        return HSQLTranspiler.stringToECL("").then(function (data) {
            //no errors
            data.getErrorsList().should.have.lengthOf(0);

            //exactly one module start and end line
            data.translated.should.be.length(1);
        })
    })
    it("Fail at dealing with malformed sample statement", function () {
        return HSQLTranspiler.stringToECL("abc").then(function (data) {
            data.hasErrors().should.be.true;
        }, function (errors) {
            errors.hasErrors().should.be.true;
            throw new Error("Disgraceful exit")
            //console.log(errors)
            //errors
        })
    })

})

describe('Convert and Write Test Cases for', function () {
    it("Import, Output, Comments", async () => testFile("importOutput"))
    it("Select, Plots", async () => testFile("select"));
    it("Embedded ECL and Type definitions", async () => testFile("eclembed"));
    it("Train, predict - LinearRegression", async () => testFile("ols"));
    it("Train, predict - BinomialLogisticRegression", async () => testFile("binomialLogisticRegression"));
    it("Train, predict - RegressionForest", async () => testFile("regressionForest"));
    it("Train, predict - ClassificationForest", async () => testFile("classificationForest"));
    it("Train, predict - GeneralLinearModel", async () => testFile("generalLinearModel"));
    //Need to complete
    it("Train, predict - SVMRegression", async () => testFile("svmc"));
    it("Train, predict - KMeans", async () => testFile("km"));
    it("Predict - DBScan", async () => testFile("dbs"));
    //Note: Do not try to execute the translation of this file.
    //      This is only a test for general conversion functionality
    it("General syntax", async () => testFile("summary"));

});

describe('Execute Test Cases', function () {
    it("Import, Output, Comments", async () => executeFile("importOutput"))
    it("Select, Plots", async () => executeFile("select"));
    it("commonsimple - the base module for all ML", async () => {
        //this shouldve been created already by dependencies, if not, itll fail
        const result = await executeFile("commonsimple");
        const parsed = await xml2js.parseStringPromise(result);
        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(1);
        parsed.Result.Dataset[0].should.have.property('Row');
        parsed.Result.Dataset[0].Row.should.be.length(6);
        //lets skip checking valuewise, 6 elements is a good indicator everything is fine

    })
    it("Embedded ECL and Type definitions", async () =>{
        const result = await executeFile("eclembed");
        const parsed = await xml2js.parseStringPromise(result);
        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(1);
        parsed.Result.Dataset[0].should.have.property('Row');
        parsed.Result.Dataset[0].Row.should.be.length(2);
        parsed.Result.Dataset[0].Row[0].should.have.property('col');
        parsed.Result.Dataset[0].Row[0].col.should.be.length(1);
        parseInt( parsed.Result.Dataset[0].Row[0].col[0]).should.be.equal(1);

        parsed.Result.Dataset[0].Row[1].should.have.property('col');
        parsed.Result.Dataset[0].Row[1].col.should.be.length(1);
        parseInt( parsed.Result.Dataset[0].Row[1].col[0]).should.be.equal(2);

    });
    it("Train, predict - LinearRegression", async () => {
        const result = await executeFile("ols");
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
    it("Train, predict - BinomialLogisticRegression", async () => {
        const result = await executeFile("binomialLogisticRegression");
        const parsed = await xml2js.parseStringPromise(result);

        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(3);
        parsed.Result.Dataset[2].should.have.property('Row');
        parsed.Result.Dataset[2].Row.should.be.length(2);

        parsed.Result.Dataset[2].Row[0].should.have.property('value');
        parsed.Result.Dataset[2].Row[0].value[0].should.equal('0')
        parsed.Result.Dataset[2].Row[1].should.have.property('value');
        parsed.Result.Dataset[2].Row[1].value[0].should.equal('1')
    });
    it("Train, predict - RegressionForest", async () => {
        const result = await executeFile("regressionForest");
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
    it("Train, predict - ClassificationForest", async () => {
        const result = await executeFile("classificationForest");
        const parsed = await xml2js.parseStringPromise(result);

        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(3);
        parsed.Result.Dataset[2].should.have.property('Row');
        parsed.Result.Dataset[2].Row.should.be.length(2);

        parsed.Result.Dataset[2].Row[0].should.have.property('value');
        parsed.Result.Dataset[2].Row[0].value[0].should.equal('0')
        parsed.Result.Dataset[2].Row[1].should.have.property('value');
        parsed.Result.Dataset[2].Row[1].value[0].should.equal('1')
    });
    it("Train, predict - GeneralLinearModel", async () => {
        const result = await executeFile("generalLinearModel");
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
    it("Predict - DBScan", async () => {
        const result = await executeFile("dbs");
        const parsed = await xml2js.parseStringPromise(result);

        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(2);

        parsed.Result.Dataset[1].should.have.property('Row');
        parsed.Result.Dataset[1].Row.should.be.length(4);
        parsed.Result.Dataset[1].Row.map(e => {
            parseInt( e.label[0] ).should.be.equal(0);
        });
    });
    it("Train, predict - KMeans",async ()=>{
        const result = await executeFile("km");
        const parsed = await xml2js.parseStringPromise(result);

        parsed.should.have.property('Result');
        parsed.Result.Dataset.should.be.length(3);

        //last entry is from the model
        parsed.Result.Dataset[2].should.have.property('Row');
        parsed.Result.Dataset[2].Row.should.be.length(6);
    })

})

describe("Cleanup ECL", function () {
    it("importOutput", async () => removeECLFile("importOutput"));
    it("commonsimple", async () => removeECLFile("commonsimple"));
    it("select", async () => removeECLFile("select"));
    it("eclembed", async () => removeECLFile("eclembed"));
    it("linearRegression", async () => removeECLFile("ols"));
    it("binomialLogisticRegression", async () => removeECLFile("binomialLogisticRegression"));
    it("regressionForest", async () => removeECLFile("regressionForest"));
    it("classificationForest", async () => removeECLFile("classificationForest"));
    it("generalLinearModel", async () => removeECLFile("generalLinearModel"));
    it("dbs", async () => removeECLFile("dbs"));
    it("km", async () => removeECLFile("km"));
    it("summary", async () => removeECLFile("summary"));
})

/**
 * Convert HSQL text and write to ecl file
 * @param {String} fileNameCase Filename to test, without extension
 */
function testFile(fileNameCase) {
    const pathRequired = path.join(pathScripts, fileNameCase + ".hsql")
    return new Promise((resolve, reject) => {

        HSQLTranspiler.fileToECL(path.parse(pathRequired), [], { d: true, w: false }).then((results) => {
            const errors = results.getErrorsList();
            if (errors.length > 0) reject(errors);
            const statements = results.translated.join(";" + EOL);
            fs.writeFile(path.join(pathScripts, fileNameCase + ".ecl"), statements, (err) => {
                if (err)
                    reject(err)
                else resolve("Done writing " + fileNameCase);
            })
        }, (reason) => reject(reason));
    })
}

/**
 * Execute a given ecl file, get its standard output
 * @param {String} fileNameCase File name to execute without extention
 * @return {Promise<String>}
 */
function executeFile(fileNameCase) {
    return new Promise((resolve, reject) => {
        exec("cd tests/testScripts;ecl run -u hsql-test -pw \" \" thor " + fileNameCase + ".ecl", (error, stdout, stderr) => {
            if (error) {
                reject(error.toString())
            }
            resolve(stdout)
        })
    })
}

/**
 * Delete an ecl file
 * @param {String} fileNameCase 
 */
async function removeECLFile(fileNameCase) {
    return fsp.unlink(path.join(pathScripts, fileNameCase + '.ecl'))
}