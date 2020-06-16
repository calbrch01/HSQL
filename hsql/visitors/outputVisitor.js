const antlr4 = require('antlr4')
const { HSQLVisitor } = require('../gen/HSQLVisitor')

///Used for JSDOC
const { HSQLParser } = require('../gen/HSQLParser')
const { HSQLVisitorErrorListener} = require('../HSQLErrorListener')
///Used for object creation
const { VisitorExchangeObject, IdentifierStore } = require('./misc')
var fs = require('fs')

/**
 * OUTPUT in ECL, is a rather strange statement. Eg.
 * OUTPUT(<something>,,EXPIRE(8));
 * OUTPUT(<something>,NAMED(<someString>))
 * and both arguments are exclusive of each other.
 * 
 */
class OutputVisitor extends HSQLVisitor {
    /**
     * Initialize a Output Visitor
     * @param {HSQLVisitorErrorListener} errorListener 
     * @param {IdentifierStore} identifierInformation
     */
    constructor(errorListener, identifierInformation) {
        super()
        this.errorListener = errorListener
        this.identifierInformation = identifierInformation

    }

    /**
     * 
     * @param {HSQLParser.OutputStmtContext} ctx 
     */
    visitOutputStmt(ctx) {
        const baseReturn = ctx.IDENTIFIER(0).getText()
        if(!this.identifierInformation.search(baseReturn).found){
            this.errorListener.syntaxWarningShort(ctx.IDENTIFIER(0),"Could not find identifier")
        }


        const outputVariant = ctx.outputVariant(0) ? [this.visit(ctx.outputVariant(0))] : []
        //get an array of changes
        const outputOptions = ctx.outputOptions().accept(this);
        //Minimal requirement for arguments
        const args = [baseReturn];
        //Add an extra comma if args are present
        if((outputOptions.length+outputVariant.length)>0){
            args.push('', ...outputVariant, ...outputOptions);
        }
        const argsJoined = args.join(",");

        const returnableStatement = `OUTPUT(${argsJoined})`
        const returnable = new VisitorExchangeObject(returnableStatement)
        return returnable
    }

    /**
     * Pass translated option up
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitOutputVariant(ctx) {
        return ctx.children[0].accept(this)
    }

    /**
     * Process title name
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitNamedOutputStatement(ctx) {
        return `NAMED(${ctx.string(0).getText()})`
    }

    /**
     * Format file types, and provide a default
     * @param {antl4.ParserRuleContext} ctx 
     */
    visitFileOutputStatement(ctx) {
        const fileTypeText = ctx.fileType.text.toUpperCase();
        const allowedFileTypes = ['XML', 'CSV', 'JSON','THOR'];
        if (allowedFileTypes.includes(fileTypeText)) {
            return `${ctx.fileName.getText()},${ctx.fileType.text.toUpperCase()}`;
        }
        else {
            this.errorListener.syntaxErrorAbort('Invalid File Type',ctx.fileType);
        }
    }



    /**
     * Just map the answers to an array
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitOutputOptions(ctx) {
        
        if(ctx.children){
            return ctx.children.map(e=>e.accept(this));
        }else{
            return [];
        }
    }

    /**
     * Blindly get the update option as it is letter-by-letter same
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitOutputUpdateOption(ctx) {
        return ctx.getText();
    }

    /**
     * Translate expiry format
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitOutputExpireOption(ctx) {
        return `EXPIRE(${ctx.number(0).getText()})`;
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


// module.exports = OutputVisitor;
exports.OutputVisitor = OutputVisitor;