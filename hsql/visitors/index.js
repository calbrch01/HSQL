
const antlr4 = require('antlr4')
const fs = require('fs')
const path = require('path')
const compileExpr = require('string-template/compile')

const { HSQLParser } = require('../gen/HSQLParser')
const { HSQLVisitor } = require('../gen/HSQLVisitor')
const { HSQLVisitorErrorListener } = require('../HSQLErrorListener')

const { SelectVisitor } = require('./selectVisitor')
const { MLVisitor } = require('./mlVisitor')
const { PlotVisitor } = require('./plotVisitor')
const { OutputVisitor } = require('./outputVisitor')
const { ExportTypeVisitor } = require('./exportTypeVisitor')
const { CreateLayoutVisitor } = require('./createLayoutVisitor')
const { IdentifierStore, ImportableIdentifier, VisitorExchangeObject } = require('./misc');
const { fileToECLSync } = require('../HSQL')
const { EOL } = require('os');

class generalVisitor extends HSQLVisitor {

    /**
     * Create Visitor, using parsed information
     * @param {HSQLParser} parser Run visitor along using parser information
     * @param {HSQLVisitorErrorListener} errorListener Stores error information
     * @param {path.ParsedPath} fileInfo Optional file information
     * @param {string[]} importStack Optional imports done so far
     * @param {{d:boolean,w:boolean}} options Optional configuration options
     */
    constructor(parser, errorListener, fileInfo = null, importStack = [], options = { d: false, w: false }) {
        super()
        this.parser = parser
        this.errorListener = errorListener;
        this.fileInfo = fileInfo;

        this.importStack = importStack;
        this.options = options;

        //there are some more things to configure, itll be setup in visitProgram


        this.identifierInformation = new IdentifierStore(this.errorListener, this.parser);

    }

    /**
     * Process and return statements after inserting appropriate imports based on the statements used in HSQL
     * @param {Array<String>} statements 
     * @returns {Array<String>} 
     */
    processImports(statements) {
        let imported = []
        //get imports
        const refVal = this.identifierInformation.importRequired

        refVal.forEach(libraryObject => {
            imported.push(`IMPORT ${libraryObject.mainLib} ${libraryObject.alias ? ` AS ${libraryObject.alias}` : ''}`);
        })

        statements.unshift(...imported);
        return statements;
    }

    /**
     * Entry point for visiting
     * Process statements and wrap in module
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitProgram(ctx) {
        if (!ctx) {
            this.errorListener.syntaxErrorAbort("Empty context");
        }
        if (ctx.children) {


            //Initialize a lot of the members

            //Check for cyclic dependency
            if (this.fileInfo) {
                //standardize the file paths
                const myfilePath = path.normalize(path.format(this.fileInfo));

                //TODOF 05/06 includes vs find - decide
                //This is a check, it should never actually execute
                if (this.importStack.includes(myfilePath)) {
                    this.errorListener.syntaxErrorAbort(`Cyclic dependency, have already imported : \'${this.fileInfo.base}\'`)
                }
                this.importStack.push(myfilePath);
            }

            // Load up bundleData
            try {
                this.bundleData = JSON.parse(fs.readFileSync(path.join(__dirname, 'misc', 'bundledLibraryInfo.json')));
                //chuck to catch if theres no such fields
                if (!(this.bundleData.MLMethods && this.bundleData.PlotMethods && this.bundleData.templates))
                    this.errorListener.syntaxErrorAbort("Invalid format for bundledLibraryInfo.json");
            } catch (e) {
                this.errorListener.syntaxErrorAbort('Could not load valid bundledLibraryInfo.json');
            }
            //compile all the expressions
            for (var x in this.bundleData.templates) {
                if (x) {
                    this.bundleData.templates[x].compiled = compileExpr(this.bundleData.templates[x].base);
                }
            }
            /**
             * Misc library info
             * @type {{name:String,members:Array<{name:String,dataType:String}>}
             */
            this.libraryTypeInfo = this.bundleData.LibraryMemberTypeData


            //This part is translation
            ///Note: The statements are first translated before imports are checked
            /**@type {Array<{name:string,visited:boolean}>} */
            const preCalcExports = (ctx.exportStmt() && ctx.exportStmt().accept(this)) || [];

            //Set the exports for this visitor
            this.identifierInformation.setExports(preCalcExports);
            // this.identifierInformation.setExports()

            //let statements = this.visitChildren(ctx);
            /**@type {string[]} */
            let statements = ctx.stmt().map(e => e.accept(this)).flat();
            //the statements have been obtained
            // let newStatements = formatExports(statements);

            if (!this.identifierInformation.hasVisitedAll()) {
                // this.errorListener.syntaxErrorAbort("Invalid export variable - not all can be exported" , ctx.exportStmt());
                this.errorListener.syntaxWarningShort(ctx.exportStmt(), "Invalid export variable - not all can be exported");
            }

            //write the export
            const exportActions = this.identifierInformation.actionStatements.map(e => e.name).join(',');
            if (exportActions) {
                statements.push(`EXPORT main := FUNCTION return PARALLEL(${exportActions}); END`);
            }


            let moduleName = this.fileInfo && this.fileInfo.name
            if (!moduleName) {
                this.errorListener.syntaxWarningShort(ctx, "Cannot find module name, using \'foo\' D:");
                moduleName = 'foo';
            }

            statements.push("END;")
            //push the end so there's atleast 1 line, as MODULE cant have a ;
            statements[0] = (`export ${moduleName}:= MODULE\n` + statements[0]);



            //DEBUG
            //this.identifierInformation.searchIdentifier("dummy.someTable","table")
            return this.processImports(statements);
        }
    }


    /**
     * 
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitActionStmt(ctx) {
        /**@type {VisitorExchangeObject} */
        const result = ctx.children[0].accept(this);
        const newActionIdentifier = this.identifierInformation.addActionIdentifier(ctx);
        const { name } = newActionIdentifier;
        result.inTerm = `SHARED ${name} := ${result.inTerm}`;

        //flatten to array for parent stmt to process
        return [...result.preTerms, result.inTerm, ...result.postTerms];
    }

    /**
     * 
     * @param {antlr4.ParserRuleContext} ctx
     * @returns {Array<String>} List of statements related to the assign statement
     */
    visitAssignStmt(ctx) {
        /**@type {VisitorExchangeObject} */
        let newAssignment = ctx.expr(0).accept(this)[0];
        /**@type {String} */
        const varName = ctx.exprLabel(0).getText();
        if (varName.startsWith("_reserved")) {
            this.errorListener.syntaxErrorAbort("Reserved variables are restricted for use", ctx.exprLabel(0));
        }
        if (varName.toLowerCase() === "main") {
            this.errorListener.syntaxErrorAbort("Main exports forbidden, generated automatically", ctx.exprLabel(0));
        }

        ///if supposed to be exported
        var result = null;
        if (result = this.identifierInformation.preCalcExports.find(e => e.name === varName)) {
            //paranoid check - shouldnt occur cos variable assignments happen only once
            if (result.visited) {
                // this.errorListener.syntaxErrorAbort("Variable has already been exported - Serious error",ctx.exprLabel(0));
                this.errorListener.syntaxWarningShort(ctx.exprLabel(0), "Variable has already been exported - this usually means serious issues with the translation");
            }
            newAssignment.inTerm = `EXPORT ${varName} := ${newAssignment.inTerm}`;
            newAssignment.type.setExportType("export")
            result.visited = true;
        } else {
            newAssignment.inTerm = `SHARED ${varName} := ${newAssignment.inTerm}`;
        }

        if (newAssignment.type) {
            newAssignment.type.name = varName;
            this.identifierInformation.add(newAssignment.type, ctx.exprLabel(0))
        }


        ///For now, make do with the assurity that it is root
        return [...newAssignment.preTerms, newAssignment.inTerm, ...newAssignment.postTerms];
    }

    /**
     * Generic visit statment
     * @param {antlr4.ParserRuleContext} ctx 
     * @returns {Array<String>} Array of statements representing a statement
     */
    visitStmt(ctx) {
        const returnable = ctx.children[0].accept(this);
        if (returnable) {
            return returnable;
        } else {
            //fix all statements returning falsey values
            return [];
        }
    }


    /**
     * Allow for typing out inline ecl
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitInlineStmt(ctx) {
        /**
         * @type {String}
         */
        const inlineVal = ctx.STRING(0).getText();
        const toWrite = inlineVal.substring(1, inlineVal.length - 1).replace(/\\\'/g, '\'');
        return [toWrite];
    }

    /**
     * Wrap the export list of identifier names in an object which can be marked too 
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitExportStmt(ctx) {
        return ctx.exportList().accept(this).map(e => { return { name: e, visited: false } });
    }

    /**
     * Get list of exported identifiers
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitExportList(ctx) {
        //these return a list of identifier names
        /**@type {string[]} */
        const list = ctx.exportableIdentifier().map(e => e.accept(this));
        return list;
    }

    /**
     * Returns the identifier name, if present
     * Used later by identifierStore objects(ie. this.identifierInformation)
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitExportableIdentifier(ctx) {
        // const text = ctx.getText();
        return ctx.getText();
    }

    /**
     * Do preprocessing of the hsql types
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitImportStmt(ctx) {

        ///Warn users, that imported file not in current directory. Useful to debug, but noisy if user imports standard libraries

        ///Set a flag, if .t.hsql is present, remove this and get thpes
        let isForeign = true;
        const libraryName = ctx.IDENTIFIER(0).getText()


        const searchResults = this.identifierInformation.searchIdentifier(libraryName, "module")
        if (!searchResults.found) {
            //not already imported
            let libraryFound
            if (libraryFound = this.libraryTypeInfo.find(e => e.name == libraryFound)) {
                /* Note this part will never fire as of now 
                 * Why?
                 * ML and Visualizer are auto-imported
                 * This is a provision for further work
                 * Could be useful for importing Std?
                 */

                //is library
                //importableIdentifier
                isForeign = false;

            } else {
                ///To add, first check if in lib function
                //libraryFound.
                if (this.fileInfo) {
                    //there's a fileInfo given
                    const fileNameBase = path.join(this.fileInfo.dir, libraryName);

                    //This is a good time to do a dependency check
                    if(this.importStack.includes(fileNameBase+".hsql")||this.importStack.includes(fileNameBase+".d.hsql")){
                        this.errorListener.syntaxErrorAbort(`Cyclic dependency: Trying to reimport \'${fileNameBase}\'`)
                    }

                    let isFileHSQLAvailable = fs.existsSync(fileNameBase + ".hsql");
                    let isFileECLAvailable = fs.existsSync(fileNameBase + ".ecl");
                    let isFileDHSQLAvilable = fs.existsSync(fileNameBase + ".d.hsql");


                    if (!(isFileECLAvailable || isFileHSQLAvailable)) {
                        // Could not find any file that can give us type info.

                        this.errorListener.syntaxWarning(ctx, ctx.start, ctx.start.line, ctx.start.column, `${libraryName} not part of directory`);
                        //Proceeding blind
                        this.identifierInformation.add(new ImportableIdentifier((ctx.alias && ctx.alias.text) || libraryName, [], false, libraryName, false));

                    } else if (isFileECLAvailable && isFileDHSQLAvilable) {
                        // We did find a ecl file with a definitions file attached to it

                        isForeign = false;


                        const filePath = path.parse(fileNameBase + ".d.hsql")

                        //parse the dependency accordingly
                        const results = fileToECLSync(filePath, [...this.importStack]);
                        if (results.hasErrors()) {
                            this.errorListener.syntaxWarningShort(ctx, "Dependency has errors. Ignoring");
                            this.errorListener.syntaxWarningShort(ctx, "Errors:" + results.errors.map(e => e.msg).join(';'));
                            //go in blind
                            this.identifierInformation.add(new ImportableIdentifier((ctx.alias && ctx.alias.text) || libraryName, [], false, libraryName, false));
                        } else {


                            //get all the types out
                            const exported = results.identifierInformation.globalIdentifierStore.filter(e => e.exportType === "export");
                            const newImport = new ImportableIdentifier((ctx.alias && ctx.alias.text) || libraryName, exported, false, libraryName, true);

                            this.identifierInformation.add(newImport);
                        }

                        // if(results)


                    } else if (isFileHSQLAvailable) {

                        const filePath = path.parse(fileNameBase + ".hsql")
                        //parse the dependency accordingly
                        const results = fileToECLSync(filePath, [...this.importStack],this.options);
                        if (results.hasErrors()) {
                            this.errorListener.syntaxWarningShort(ctx, "Dependency has errors. Ignoring");
                            this.errorListener.syntaxWarningShort(ctx, "Errors:" + results.errors.map(e => e.msg).join(';'));
                            //go in blind
                            this.identifierInformation.add(new ImportableIdentifier((ctx.alias && ctx.alias.text) || libraryName, [], false, libraryName, false));
                        } else {
                            //get all the types out
                            const exported = results.identifierInformation.globalIdentifierStore.filter(e => e.exportType === "export");
                            const newImport = new ImportableIdentifier((ctx.alias && ctx.alias.text) || libraryName, exported, false, libraryName, true);
                            this.identifierInformation.add(newImport);

                            //write answers if flag present
                            if (this.options.d) {
                                const resultDependency = results.translated.join(`;${EOL}`);
                                fs.writeFileSync(path.normalize(fileNameBase + ".ecl"), resultDependency);
                            }

                        }


                    } else {
                        //we are blind to the modules
                        this.identifierInformation.add(new ImportableIdentifier((ctx.alias && ctx.alias.text) || libraryName, [], false, libraryName, false));

                    }
                } else {
                    //there is no fileInfo
                    this.identifierInformation.add(new ImportableIdentifier((ctx.alias && ctx.alias.text) || libraryName, [], false, libraryName, false));
                    this.errorListener.syntaxWarningShort(ctx, "Import data unavailable");
                }
            }

        } else {
            //Why import again?
            this.errorListener.syntaxErrorAbort(`Import \'${libraryName}\' already exists`);
        }

        // this.importRequired.push({ mainLib: libraryName, alias: ctx.alias ? ctx.alias.text : null })
        return null;
    }

    /**
     * Process map exports
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitTypeDefStmt(ctx) {
        new ExportTypeVisitor(this.identifierInformation).visit(ctx);
        return null;
    }

    /**
     * Wrap the output statement visitor call for action statement
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitOutputStmt(ctx) {
        let oStmt = new OutputVisitor(this.errorListener, this.identifierInformation).visit(ctx);
        return oStmt;
    }


    /**
     * Wrap the plot statement visitor call for action statement
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitPlotStmt(ctx) {
        let plotStmt = new PlotVisitor(this.identifierInformation, this.bundleData).visit(ctx)
        return plotStmt;
        // return [...plotStmt.preTerms, plotStmt.inTerm, ...plotStmt.postTerms]
    }

    /**
     * Wrapper for Select Statement
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitSelectStmt(ctx) {
        let sVisitor = new SelectVisitor(this.identifierInformation)
        //console.log(ctx.fromclause.getText())
        ///return the object directly
        return ctx.accept(sVisitor)
    }


    /**
     * Wrap the Layout visitor
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitLayoutStmt(ctx) {
        const lVisitor = new CreateLayoutVisitor(this.identifierInformation);
        return ctx.accept(lVisitor)
    }


    /**
     * Wrap the ML statements
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitMlStmt(ctx) {
        let mVisitor = new MLVisitor(this.errorListener, this.identifierInformation, this.bundleData);
        return ctx.accept(mVisitor);
    }

    /**
     * Wrap and visit children
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitChildren(ctx) {
        if (!ctx) {
            return;
        }
        if (ctx.children) {
            return ctx.children.map(child => {
                if (child.children && child.children.length != 0) {
                    return child.accept(this);
                } else {
                    return child.getText() + ' ';
                }
            }).flat();
        }
    }
}


// module.exports = generalVisitor;
exports.generalVisitor = generalVisitor;