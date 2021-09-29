const antlr4 = require('antlr4')
const { HSQLParser } = require("../gen/HSQLParser")
const {TrainContext} = HSQLParser
const { HSQLVisitor } = require('../gen/HSQLVisitor')
const { HSQLVisitorErrorListener } = require('../HSQLErrorListener')
const { VisitorExchangeObject ,ModelIdentifier,IdentifierStore,TableIdentifier} = require('./misc')
var fs = require('fs')
const path = require('path')
const format = require('string-template')
//const {TableIdentifier} = require('./misc');

class MLVisitor extends HSQLVisitor {
    /**
     * 
     * @param {HSQLVisitorErrorListener} errorListener Error Listener
     * @param {bundleDataSchema} bundleData
     * @param {IdentifierStore} identifierInformation
     */
    constructor(errorListener,identifierInformation,bundleData) {
        super()
        this.identifierInformation = identifierInformation;
        this.errorListener = errorListener;
        this.bundleData = bundleData;
    }

    /**
     * Gets information about an ML method
     * @param {String} methodName 
     * @returns {Object}
     */
    getMethodInfo(methodName,  ctx = null,isElementary=false) {
        let bundleConfig;
        //Was an elementary ML method requested?
        if(isElementary){
            bundleConfig = this.bundleData.ElementaryMLMethods[methodName];
        }else{
            bundleConfig = this.bundleData.MLMethods[methodName];
        }
        if (!bundleConfig) {
            this.errorListener.syntaxErrorAbort('Invalid method:\''+methodName+'\'',ctx);
        }

        // Make copy
        // This is a deep copy, and possible only as There's no complex Sets/Functions/data types in this object
        bundleConfig = JSON.parse(JSON.stringify(bundleConfig));

        //search and add ifn't present
        const foundVal = this.identifierInformation.searchImportAppend(bundleConfig.bundle);
        bundleConfig.bundle = foundVal.result.name;

        //return all the info about methods
        return bundleConfig;
    }

    /**
     * Check if a library exists, if it does, return its alias, else add it
     * @param {String} libraryName 
     * @return {String} Name of library used
     */
    findImport(libraryName) {
        const searchRes = this.identifierInformation.searchImportAppend(libraryName)
        if(!searchRes.found){
            this.errorListener.syntaxErrorAbort("Assertion Error - Could not find ML library and import");
        }
        return searchRes.result.name;
    }

    /**
     * Form prestatements and model statements based on statement and bundled info
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitTrain(ctx) {
        const getLibraryName = this.findImport("ML_Core");
        
        //get a copy of the method that matches this
        let methodInfo = this.getMethodInfo(ctx.method.text, ctx)
        let ind = ctx.ind.getText()
        this.identifierInformation.assertExists(ind,"table",ctx.ind);
        
        let dep = ctx.dep.getText()
        this.identifierInformation.assertExists(dep,"table",ctx.dep);
        
        let preStatements = [];

        //convert to numeric fields
        const indToField = this.identifierInformation.addReservedModelVariable(ind,'numericField',ctx.ind);
        const depToField = this.identifierInformation.addReservedModelVariable(dep,'numericField',ctx.dep);

        //These will catch the above variables and make them shared
        const indToFieldShared = this.identifierInformation.addReservedModelVariable(ind,'numericField',ctx.ind);
        const depToFieldShared = this.identifierInformation.addReservedModelVariable(dep,'numericField',ctx.dep);

        preStatements.push(
            this.bundleData.templates.toNumericField.compiled({
                libraryName:getLibraryName,
                table:ind,
                field: indToField.name
            }),
            `SHARED ${indToFieldShared.name} := ${indToField.name}`,
            this.bundleData.templates.toNumericField.compiled({
                libraryName:getLibraryName,
                table:dep,
                field:depToField.name
            }),
            `SHARED ${depToFieldShared.name} := ${depToField.name}`
        );

        //make numeric fields sequential
        const indCountRegular = this.identifierInformation.addReservedModelVariable(
            indToFieldShared.name,
            "numericField",
            ctx.ind
        );
        const depCountRegular = this.identifierInformation.addReservedModelVariable(
            depToFieldShared.name,
            "numericField",
            ctx.dep
        );
        preStatements.push(
            this.bundleData.templates.resetId.compiled({
                newField:indCountRegular.name,
                field:indToFieldShared.name
            }),
            this.bundleData.templates.resetId.compiled({
                newField:depCountRegular.name,
                field:depToFieldShared.name
            })
        );
        
        let finalInd = indCountRegular.name;
        let finalDep = depCountRegular.name;
        
        ///we havent used this, but here we are
        if(methodInfo.requiresIndDiscrete===true){
            const newDiscreteInd = this.identifierInformation.addReservedModelVariable(finalInd,"discreteField",ctx.ind);
            preStatements.push(
                this.bundleData.templates.numericToDiscrete.compiled({
                    compiled: newDiscreteInd.name,
                    libraryName: getLibraryName,
                    field:finalInd
                })
            );
            finalInd = newDiscreteInd.name;
        }

        if(methodInfo.requiresDepDiscrete===true){
            const newDiscreteDep = this.identifierInformation.addReservedModelVariable(finalDep,"discreteField",ctx.dep);
            preStatements.push(
                this.bundleData.templates.numericToDiscrete.compiled({
                    compiled: newDiscreteDep.name,
                    libraryName: getLibraryName,
                    field:finalDep
                })
            );
            finalDep = newDiscreteDep.name;
        }
        
        // if()
        //
        /**@type {Array<Array<string>>} */
        const options = ctx.trainOptions() ? ctx.trainOptions().accept(this):[]
        if(options.length>methodInfo.options.number){
            this.errorListener.syntaxErrorAbort("Too many options",ctx.trainOptions());
        }
        for(const option of options){
            // Copying not required, marking is local as getMethod returns a deep copy
            /**@type {Array<{name:String,desc:String,default:number}>} */
            const {config} = methodInfo.options
            let result;
            //find if method matches
            if(result = config.find(e=>e.name.toLowerCase()===option[0].toLowerCase())){
                if(result.mark){
                    this.errorListener.syntaxErrorAbort("Duplicate option "+ result.name,ctx.trainOptions());
                }
                result.mark=1;
            }else{
                const message = `Could not find trainOption '${option[0]}', allowed:${methodInfo.options.config.map(e=>e.name).join(",")}`;
                this.errorListener.syntaxErrorAbort(message,ctx.trainOptions());
            }
        }

        const optionsList = options.map(e=>e.join(" "));
        const optionsJoined = optionsList.join(",");

        let formattedGetModel = format(methodInfo.getModelSuffix, {
            "options": optionsJoined,
            "bundleName": methodInfo.bundle,
            "comma":(optionsList.length>0?",":""),
            "ind_new": finalInd,
            "dep_new": finalDep
        });
        //let modelType = new identifierClasses.ColumnNameIdentifier("", null, `ML:${ctx.method.text}`)
        let modelType = new ModelIdentifier("",ctx.method.text);
        return new VisitorExchangeObject(formattedGetModel, preStatements, [], modelType);
    }

    /**
     * This is for ml methods which yield results instantly
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitElementaryML(ctx){
        const getLibraryName = this.findImport("ML_Core");
        
        //get a copy of the method that matches this
        let methodInfo = this.getMethodInfo(ctx.method.text, ctx,true);
        let ind = ctx.ind.getText();
        this.identifierInformation.assertExists(ind,"table",ctx.ind);

        let preStatements = [];

        //convert to numeric fields
        const indToField = this.identifierInformation.addReservedModelVariable(ind,'numericField',ctx.ind);
        //Will catch above variable and make it shared
        const indToFieldShared = this.identifierInformation.addReservedModelVariable(ind,'numericField',ctx.ind);

        //make numeric fields sequential
        const indCountRegular = this.identifierInformation.addReservedModelVariable(
            indToFieldShared.name,
            "numericField",
            ctx.ind
        );

        //Make the three elementary statements
        //tonumeric field, capture it to shared, then make id sequential
        preStatements.push(
            this.bundleData.templates.toNumericField.compiled({
                libraryName:getLibraryName,
                table:ind,
                field: indToField.name
            }),
            `SHARED ${indToFieldShared.name} := ${indToField.name}`,
            this.bundleData.templates.resetId.compiled({
                newField:indCountRegular.name,
                field:indToFieldShared.name
            })
        );

        let finalInd = indCountRegular.name;

        ///if theres a need for the ind field to be a discrete field, its setup here
        if(methodInfo.requiresIndDiscrete===true){
            const newDiscreteInd = this.identifierInformation.addReservedModelVariable(finalInd,"discreteField",ctx.ind);
            preStatements.push(
                this.bundleData.templates.numericToDiscrete.compiled({
                    compiled: newDiscreteInd.name,
                    libraryName: getLibraryName,
                    field:finalInd
                })
            );
            finalInd = newDiscreteInd.name;
        }

        //TODOF ind2 is present if one needs extra arguments.
        //Currently only DBScan is there, and its not needed, so not implementing it


        //deal with the options
        const options = ctx.trainOptions() ? ctx.trainOptions().accept(this):[]
        if(options.length>methodInfo.options.number){
            this.errorListener.syntaxErrorAbort("Too many options",ctx.trainOptions());
        }
        for(const option of options){
            // Copying not required, marking is local as getMethod returns a deep copy
            /**@type {Array<{name:String,desc:String,default:number}>} */
            const {config} = methodInfo.options
            let result;
            //find if method matches
            if(result = config.find(e=>e.name.toLowerCase()===option[0].toLowerCase())){
                if(result.mark){
                    this.errorListener.syntaxErrorAbort("Duplicate option "+ result.name,ctx.trainOptions());
                }
                result.mark=1;
            }else{
                const message = `Could not find trainOption '${option[0]}', allowed:${methodInfo.options.config.map(e=>e.name).join(",")}`;
                this.errorListener.syntaxErrorAbort(message,ctx.trainOptions());
            }
        }
        const optionsList = options.map(e=>e.join(" "));
        const optionsJoined = optionsList.join(",");

        //the final ML statement that produces the answer
        let formattedGetModel = format(methodInfo.predictSuffix, {
            "options": optionsJoined,
            "comma":(optionsList.length>0?",":""),
            "bundleName": methodInfo.bundle,
            "ind_new": finalInd
        });
        
        //This is the difference, the resultant is a table
        let resultType = new TableIdentifier("",[],undefined,false);
        return new VisitorExchangeObject(formattedGetModel, preStatements, [], resultType);

    }
    
    /**
     * Fetch the Trainoptions, and return them as an array
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitTrainOptions(ctx){
        return ctx.trainOption().map(e=>{
            return e.accept(this);
        })
    }

    /**
     * Wrap the option with its value
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitTrainOption(ctx){
        return [ctx.IDENTIFIER(0).getText(),':=',ctx.trainValue().getText()];
    }

    /**
     * Wrap prestatements and prediction statement from corresponding ecl statement and bundled info
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitPredict(ctx) {
        //get the library name
        const getLibraryName = this.findImport("ML_Core");

        //get a copy of the method details
        const foundMethod = this.identifierInformation.searchIdentifier(ctx.model.getText(),"model")
        
        let methodName = (ctx.method&&ctx.method.text) || (foundMethod.result&&foundMethod.result.specialTypes);
        if(!methodName){
            this.errorListener.syntaxErrorAbort("Could not extrapolate model method",ctx);
        }

        //get a copy of the method that matches this
        let methodInfo = this.getMethodInfo(methodName, ctx)
       
        const preStatements = [];

        let ind = ctx.ind.getText();

        this.identifierInformation.assertExists(ind,"table",ctx.ind);        

        // let ind_new = this.addModelIdentifier(ctx.ind,ind);
        // let ind_new_new = this.addModelIdentifier(ctx.ind,ind)

        const indToField = this.identifierInformation.addReservedModelVariable(ind,"numericField",ctx.ind);

        const indToFieldShared = this.identifierInformation.addReservedModelVariable(ind,"numericField",ctx.ind);

        const indCountRegular = this.identifierInformation.addReservedModelVariable(indToField.name,"numericField",ctx.ind);
        
        preStatements.push(
            this.bundleData.templates.toNumericField.compiled({
                libraryName:getLibraryName,
                table:ind,
                field:indToField.name
            }),
            `SHARED ${indToFieldShared} := ${indToField}`,
            this.bundleData.templates.resetId.compiled({
                newField:indCountRegular.name,
                field:indToFieldShared.name
            })
        );

        let indFinal = indCountRegular.name;

        let returnableStatement = format(methodInfo.predictSuffix, {
            "bundleName": methodInfo.bundle,
            "modelName": ctx.model.getText(),
            "indepFields": indFinal
        })
        
        return new VisitorExchangeObject(returnableStatement, preStatements,[],new TableIdentifier("",[],undefined,false));
        // return new VisitorExchangeObject(returnableStatement, preStatements)
    }

    /**
     * Generic node child visitor
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
                    return child.getText();
                }
            });
        }
    }
}

// module.exports = MLVisitor
exports.MLVisitor = MLVisitor;