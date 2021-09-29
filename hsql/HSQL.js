const antlr4 = require('antlr4');
const path = require('path');

// Sync functions
const fs = require('fs');

// Async easier
const fsp = fs.promises;
const { HSQLVisitorErrorListener, HSQLErrorListener, HSQLCancellationError } = require("./HSQLErrorListener");
const {translationResults} = require('./translationResults')
const { parseString } = require('./HSQLParseString')
const {IdentifierStore} = require('./visitors/misc')

/**
 * Convert a file to ECL
 * @param {path.ParsedPath} inputFilePath 
 * @param {string[]} importStack An array of includes done so far
 * @param {{d:boolean,w:boolean}} options Optional configuration options
 */
async function fileToECL(inputFilePath, importStack = [],options={'d':false,'w':false}) {
    const val = await fsp.readFile(path.format(inputFilePath));
    return stringToECL(val.toString(), inputFilePath, importStack,options);
}

/**
 * Process and return ECL statements
 * if result's getErrorList() >0 only then is translated[] well defined
 * @param {String} data Input String
 * @param {path.ParsedPath} path Directory location
 * @param {string[]} importStack An optional array of includes done so far
 * @param {{d:boolean,w:boolean}} options Optional configuration options
 * @returns {Promise<translationResults>} Array of ECL statements. If failed, returns set of errors.
 */
function stringToECL(data, pathInfo = null, importStack = [],options={'d':false,'w':false}) {
    return new Promise((resolve, reject) => {
        const antlrErrorListener = new HSQLErrorListener()
        const { tree, parser } = parseString(data, antlrErrorListener);
        if (antlrErrorListener.errors.length > 0) {
            // Exit early if parsing error
            resolve(new translationResults(antlrErrorListener.errors))
        } else {
            let visitorErrorListener = new HSQLVisitorErrorListener();

            /**@type {generalVisitor} */
            let visitor;
            /**@type {string[]} */
            let returnable;
            try {
                //creation can create errors: needs to be in tre block
                //TODO ADD TO GENVISITOR ; OPTIONS
                visitor = new generalVisitor(parser, visitorErrorListener, pathInfo, importStack,options);
                returnable = visitor.visitProgram(tree)
            } catch (e) {
                /*
                 * Not all errors are recoverable.
                 * Catch the exception of the unrecoverable  error and help
                 * Pass it into the visitorErrorListener and report it through it
                 */
                if (!(e instanceof HSQLCancellationError)) {
                    //Something really bad happened
                    visitorErrorListener.generalError(e.message || "Undefined Error")
                }
            }

            const translationResultsObj = new translationResults(visitorErrorListener.errors, returnable || [], visitorErrorListener.warnings, visitor.identifierInformation)

            // The rest of the program has to check for errors in translation.
            // This program, however, exit cleanly
            resolve(translationResultsObj)

        }
    });

};

/**
 * Convert file synchronously
 * @param {path.ParsedPath} inputFilePath file path to convert
 * @param {string[]} importStack Optional import stack
 * @param {{d:boolean,w:boolean}} options Optional configuration options
 */
function fileToECLSync(inputFilePath, importStack = [],options={'d':false,'w':false}) {
    const val = fs.readFileSync(path.format(inputFilePath));
    return stringToECLSync(val.toString(), inputFilePath, importStack,options);
}

/**
 * Synchronously parse string to ECL
 * @param {String} data 
 * @param {path.ParsedPath} pathInfo Optional file path info
 * @param {string[]} importStack Optional import stack
 * @param {{d:boolean,w:boolean}} options Optional configuration options
 */
function stringToECLSync(data, pathInfo = null, importStack = [],options={'d':false,'w':false}) {

    const antlrErrorListener = new HSQLErrorListener()
    const { tree, parser } = parseString(data, antlrErrorListener);
    if (antlrErrorListener.errors.length > 0) {
        // Exit early if parsing error
        return new translationResults(antlrErrorListener.errors);
    } else {
        let visitorErrorListener = new HSQLVisitorErrorListener();

        /**@type {generalVisitor} */
        let visitor;
        /**@type {string[]} */
        let returnable;
        try {
            //creation can create errors: needs to be in tre block
            visitor = new generalVisitor(parser, visitorErrorListener, pathInfo, importStack,options);
            returnable = visitor.visitProgram(tree)
        } catch (e) {
            /*
             * Not all errors are recoverable.
             * Catch the exception of the unrecoverable  error and help
             * Pass it into the visitorErrorListener and report it through it
             */
            if (!(e instanceof HSQLCancellationError)) {
                //Something really bad happened
                visitorErrorListener.generalError(e.message || "Undefined Error")
            }
        }

        const translationResultsObj = new translationResults(visitorErrorListener.errors, returnable || [], visitorErrorListener.warnings, visitor.identifierInformation)

        // The rest of the program has to check for errors in translation.
        // This program, however, exit cleanly
        return translationResultsObj;

    }
};

exports.stringToECLSync = stringToECLSync;
exports.fileToECLSync = fileToECLSync;
exports.fileToECL = fileToECL;
exports.stringToECL = stringToECL;

/* This is weird - but needed to make sure everything doesnt crash.
 * 
 * generalVisitor will be initially hoisted as undefined, so it wont raise an error
 * this
 */
const {generalVisitor} = require('./visitors')