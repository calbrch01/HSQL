const antlr4 = require('antlr4')

const { HSQLParser } = require('../gen/HSQLParser')
const { PlotStmtContext } = HSQLParser

const { HSQLVisitor } = require('../gen/HSQLVisitor')
const { HSQLVisitorErrorListener } = require('../HSQLErrorListener')
const { VisitorExchangeObject, IdentifierStore } = require('./misc')
const format = require('string-template')

class PlotVisitor extends HSQLVisitor {
    /**
     * @param {HSQLVisitorErrorListener} errorListener
     * @param {IdentifierStore} identifierInformation
     * @param {bundleDataSchema} bundleData
     * @param {HSQLVisitorErrorListener} errorListener Optional override
     */
    constructor(identifierInformation, bundleData, errorListener = null) {
        super()
        this.errorListener = errorListener || identifierInformation.errorListener;
        this.identifierInformation = identifierInformation;
        this.bundleData = bundleData;
    }

    /**
     * Return plot statement text and output prestatement
     * @param {PlotStmtContext} ctx 
     */
    visitPlotStmt(ctx) {
        //WIP
        //claim an action first
        const claimedActionIdentifier = this.identifierInformation.addActionIdentifier(ctx);
        let outputStatement = `SHARED ${claimedActionIdentifier.name}:= OUTPUT(${ctx.labelIdentifier.text},NAMED(${ctx.titleIdentifier.text}))`
        const vizSearchRes = this.identifierInformation.searchImport('Visualizer');
        if (!vizSearchRes.found) this.errorListener.syntaxErrorAbort(ctx, "Assertion failed: existence of Visualizer");
        ///If not present, dont 

        // let plotStmt = `Visualizer.${plotTypeLabel}(${ctx.titleIdentifier.text})`
        let plotType;
        if (ctx.plottype) {
            plotType = this.bundleData.PlotMethods[ctx.plottype.getText().toLowerCase()]
            if (!plotType) this.errorListener.syntaxErrorAbort(ctx.plottype, "Invalid plot type");
        }else{
            //default if not mentioned
            plotType = this.bundleData.PlotMethods["bar"];
        }

        const plotStmt = format(plotType.translation, {
            moduleName: vizSearchRes.result.name,
            name: ctx.titleIdentifier.text
        });
        let returnable = new VisitorExchangeObject(plotStmt, [outputStatement]);

        return returnable;
    }
}

// module.exports = PlotVisitor
exports.PlotVisitor = PlotVisitor;