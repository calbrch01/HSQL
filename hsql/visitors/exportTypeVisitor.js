const antlr4 = require('antlr4')
const { HSQLVisitor } = require('../gen/HSQLVisitor')
const { HSQLVisitorErrorListener } = require('../HSQLErrorListener')
const {IdentifierStore,TableIdentifier,LayoutIdentifier,ColumnNameIdentifier,GeneralIdentifier} = require('./misc')
// const  = identifierTypes

class ExportTypeVisitor extends HSQLVisitor {
    /**
     * 
     * @param {IdentifierStore} identifierInformation 
     * @param {*} errorListener An optional error listener to override identifierInfomation
     */
    constructor(identifierInformation,errorListener=null){
        super();
        this.identifierInformation = identifierInformation;
        this.errorListener = errorListener || identifierInformation.errorListener;
    }

    /**
     * Process the type from child and add it to the IdentifierStore
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitTypeDefStmt(ctx){
        /**@type {TableIdentifier|LayoutIdentifier|ColumnNameIdentifier} */
        const typeMap = ctx.mapExportable().accept(this);
        if(ctx.typeDefExport()){
            typeMap.setExportType("export");
        }
        this.identifierInformation.add(typeMap,ctx);
        return null;
    }

    /**
     * Return the value of the child
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitMapExportable(ctx){
        return ctx.children[0].accept(this);
    }

    /**
     * Create and return new table
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitTableExport(ctx){
        /**@type {ColumnNameIdentifier[]} */
        const children = ctx.identifierExport().map(e=>e.accept(this))
        const tableName = ctx.IDENTIFIER(0).getText();
        const newTable = new TableIdentifier(tableName,children,undefined,true);
        return newTable;
    }

    /**
     * Create and return new Layout
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitLayoutExport(ctx){
        /**@type {ColumnNameIdentifier[]} */
        const children = ctx.identifierExport().map(e=>e.accept(this))
        const tableName = ctx.IDENTIFIER(0).getText();
        const newLayout = new LayoutIdentifier(tableName,children,true);
        return newLayout;
    }

    /**
     * Return a column identifier
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitIdentifierExport(ctx){
        return new ColumnNameIdentifier(ctx.IDENTIFIER(0).getText(),ctx.dataType().getText());
    }

    /**
     * Generic child visitor: Optional, but kept here for future use
     * @param {antlr4.ParserRuleContext} ctx 
     */ 
    visitChildren(ctx) {
        if (ctx && ctx.children) {
            let answer
            return ctx.children.reduce((total, element) => {
                if (answer = element.accept(this)) {
                    total.push(answer)
                }
                return total;
            }, [])
        }
        return null;
    }
}

exports.ExportTypeVisitor = ExportTypeVisitor;