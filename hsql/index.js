#!/usr/bin/env node
//@ts-check
const path = require('path');
const { fileToECL, stringToECL } = require('./HSQL');
const { EOL } = require('os');
const fs = require('fs')

if (require.main === module) {
    //called directly
    const yargs = require('yargs')
        .scriptName("hsqlc")
        .usage('$0 -i <filename> [-o <filename>]')
        .demandOption('i')
        .option('i', {
            'alias': ['input','f'],
            'describe': 'Input file path',
            'type': 'string'
        })
        .option('o', {
            'alias': ['output'],
            'describe': 'Output file path',
            'type': 'string'
        })
        .option('n',{
            'alias': 'no-parse',
            'describe':'Don\'t parse, just show selected input and output files',
            'boolean':true,
            'default':false
        })
        .option('w',{
            'alias':'no-warnings',
            'describe':'Skip warnings',
            'boolean':true,
            'default':false
        })
        .option('d',{
            'alias': 'writedeps',
            'describe':'Write all dependencies to their files too',
            'type': 'boolean',
            'boolean':true,
            'default':false
        })
        .epilogue('For more information, check our documentation')

    const argv = yargs.argv

    let fn = argv.i
    // Insta-parse this, no reason to not
    const inputPathInfo = path.parse(fn)


    //try to figure out the output
    let outputPathInfo = null;
    let outfn = null;

    //Allow an automatic filename inference
    if (argv.output === '') {
        outfn = path.join(path.dirname(fn), path.basename(fn, path.extname(fn)) + '.ecl');
        outputPathInfo = path.parse(outfn);
    } else if (typeof argv.output === 'string') {
        //Some actual filename was mentioned
        outfn = argv.output;
        outputPathInfo = path.parse(outfn);
    }//else theyre kept as null

    //subtle warning
    if (fn === outfn) {
        throw new Error("Matching input and output file name.")
    }

    // Parse if n flag not passed.
    if(!argv.n) {
        const flags = {
            'd':argv.d,
            'w':argv.w
        }
        toECL(inputPathInfo, outputPathInfo,[],flags);
    }else{
        // if n passed, or a value given to it
        console.log('I/P:',fn)
        console.log('O/P:',outfn)
    }
}

/**
 * Conversion file, and write/print
 * @param {path.ParsedPath} inputFilePath Input file name
 * @param {path.ParsedPath} outputFilePath Input file name
 * @param {string[]} importStack optional import stack used to check if cyclic imports occur
 * @param {{d:boolean,w:boolean}} options Optional configuration options
 */
function toECL(inputFilePath, outputFilePath = null,importStack=[],options={'d':false,'w':false}) {
    fileToECL(inputFilePath,importStack,options).then((eclTranslationResult) => {

        if (eclTranslationResult.getErrorsList().length > 0) {
            //Has Errors
            console.log(eclTranslationResult.getErrorsList()
                .map(e => `E: ${e.line}:${e.column} - ${e.msg}`)
                .join(EOL));
        } else {
            if (!options.w && eclTranslationResult.getWarningsList().length > 0) {
                console.log(eclTranslationResult.getWarningsList()
                    .map(e => `W: ${e.line}:${e.column} - ${e.msg}`)
                    .join(EOL));
            }

            //now this is the output
            const program = eclTranslationResult.translated.join(`;${EOL}`);
            //No errors - proceed to output
            if (outputFilePath) {
                const outfn = path.format(outputFilePath)
                fs.writeFile(outfn, program, err => {
                    if (err)
                        throw err;
                })
            } else {
                console.log(program)
            }
        }

    }, (reason) => {
        // Check if this method exists
        if (reason.getIssues)
            console.log(reason.getIssues().join(EOL));
        else
            console.log(reason)
        //console.log("E>" + reason.toString())
    }).catch(onrejected => {
        //something went terribly wrong: shouldnt happen
        console.log("E> ", onrejected);
    });

}

//Forward these
exports.toECL = toECL;
exports.fileToECL = fileToECL;
exports.stringToECL = stringToECL;