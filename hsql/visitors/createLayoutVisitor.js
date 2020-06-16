const antlr4 = require('antlr4')

const { HSQLVisitor } = require('../gen/HSQLVisitor')
const { HSQLVisitorErrorListener} = require("../HSQLErrorListener")
const { VisitorExchangeObject, LayoutIdentifier, StandardIdentifier, ColumnNameIdentifier, IdentifierStore, IdentifierStoreResult } = require('./misc')

class CreateLayoutVisitor extends HSQLVisitor {
    /**
     * 
     * @param {IdentifierStore} identifierInformation Identifier Store
     * @param {HSQLVisitorErrorListener} errorListener Override for using identifierInformation
     */
    constructor(identifierInformation, errorListener = null) {
        super()
        this.errorListener = errorListener || identifierInformation.errorListener;
        this.identifierInformation = identifierInformation;
    }

    /**
     * Return the layout visitorExchangeObject to index
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitLayoutStmt(ctx) {
        const { inTerm, type } = ctx.layoutContent().accept(this)
        const text = "RECORD " + inTerm + " END";
        return new VisitorExchangeObject(text, [], [], type);
    }

    /**
     * Get the internal layout type and the record elements joined
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitLayoutContent(ctx) {
        //returns 
        const returns = ctx.identifierExport().map(e => e.accept(this));
        const inTerm = returns.map(e => e.inTerm).join(" ");
        const type = new LayoutIdentifier(null, returns.map(e => e.type), true);

        return { inTerm, type };
    }

    /**
     * Return an column's text and type
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitIdentifierExport(ctx) {
        return {
            inTerm: `${ctx.dataType().getText().toUpperCase()} ${ctx.IDENTIFIER(0)};`,
            type: new ColumnNameIdentifier(ctx.IDENTIFIER(0).getText(),ctx.dataType().getText())
        }
    }
}


// module.exports = CreateLayoutVisitor;
exports.CreateLayoutVisitor = CreateLayoutVisitor;