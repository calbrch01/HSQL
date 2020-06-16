
const antlr4 = require('antlr4')

const { HSQLParser } = require('../gen/HSQLParser')
const { SelectStmtContext } = HSQLParser
const { HSQLVisitor } = require('../gen/HSQLVisitor')
const { HSQLVisitorErrorListener} = require("../HSQLErrorListener")
const { VisitorExchangeObject, TableIdentifier, StandardIdentifier, ColumnNameIdentifier, IdentifierStore, IdentifierStoreResult } = require('./misc')

class SelectVisitor extends HSQLVisitor {
    /**
     * 
     * @param {IdentifierStore} identifierInformation List of identifiers
     * @param {HSQLVisitorErrorListener} errorListener An optional error listener to use instead of the embedded one in IdentifierStore
     */
    constructor(identifierInformation,errorListener=null) {
        super();
        this.identifierInformation = identifierInformation;
        this.errorListener = errorListener||identifierInformation.errorListener;
        this.aggregators = [];
    }

    /**
     * Visits the aggregate and returns the column
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitAggregatedSelectColumn(ctx) {
        ///Deal with the sum aggregate within, since its possible
        const { type } = ctx.aggregate;
        const typeText = ctx.aggregate.getText().toUpperCase();
        const allowedTypeText = ['SUM','COUNT','AVG'];
        if(!allowedTypeText.includes(typeText)){
            this.errorListener.syntaxErrorAbort(`Invalid aggregate \'${typeText}\'`,ctx.aggregate);
        }

        if (ctx.aggregate.sum) {
            return `${type ? type.text : 'REAL'} ${(ctx.aggregate.alias || ctx.selectedCol).getText()} := sum(GROUP,${ctx.selectedCol.getText()})`
        } else if (ctx.aggregate.avg) {
            return `${type ? type.text : 'REAL'} ${(ctx.aggregate.alias || ctx.selectedCol).getText()} := ave(GROUP,${ctx.selectedCol.getText()})`
        }
        return ctx.selectedCol.getText()
    }

    /**
     * Get column text
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitSelectColumn(ctx) {
        if (ctx.alias) {
            return `${ctx.type.getText()} ${ctx.alias.text} := ${ctx.column.text}`
        }
        return ctx.getText();
    }

    /**
     * Generate Select Columns List, including the arrays
     * @param {antlr4.ParserRuleContext} ctx 
     * @returns {Array<String>} Contains 'empty' and 'columns'
     */
    visitSelectColumns(ctx) {
        return ctx.children.reduce((columnsArray, child) => {

            let textObtained = child.accept(this)
            if (child.children) {
                ///If it was not a wildcard
                if (textObtained != '*') {
                    columnsArray.push(child.accept(this))
                }
            }
            return columnsArray
        },
            []
        );
        //return 
    }

    /**
     * Process and return a select statement, after conversion
     * 
     * @param {SelectStmtContext} ctx 
     * @returns A VisitorExchangeObject
     */
    visitSelectStmt(ctx) {
        let fromClauseResult = ctx.fromclause.accept(this);
        let fromClause = fromClauseResult.text;
        let foundInfo = fromClauseResult.typeResult;

        //get the type        

        //check if found: otherwise invalid
        //this.identifierInformation.assertExists(fromClause,"table",ctx.fromClause);
        //^this isnt required anymore as fromclauses can be from other places too


        //Get type info - only if can find type
        const selectTypeResult = new SelectTypeGatherer(this.errorListener, foundInfo, this.identifierInformation, fromClause).visit(ctx.columns);


        //check if join exists
        if (ctx.joinClause()) {
            let joinVisitor = new JoinVisitor(ctx.fromclause, this.errorListener);
            let joinedVisitorEO = joinVisitor.visit(ctx.joinClause());
            fromClause = joinedVisitorEO.inTerm;
        }

        //figure out the column conditions
        let selectWhereSection = ctx.whereclause ? `(${ctx.whereclause.accept(this)})` : ''
        let selectWhat = ctx.columns.accept(this)
        let selectWhatColumns = selectWhat.length ? `,{${selectWhat.join(",")}}` : ''
        let groupByClause = ctx.groupbyclause ? `,${ctx.groupbyclause.getText()}` : ''
        let visitorSuperFunctions = new AggregateVisitor()
        visitorSuperFunctions.visit(ctx)

        let visitorReturnableStatement = `TABLE(${fromClause}${selectWhereSection}${selectWhatColumns}${groupByClause})`
        visitorSuperFunctions.superFunctions.forEach(ele => {
            visitorReturnableStatement = `${ele.prop}(${visitorReturnableStatement}${ele.arg ? `,${ele.arg.join(',')}` : ''})`
        })
        
        
        let visitorReturn = new VisitorExchangeObject(visitorReturnableStatement, [], [], selectTypeResult)
        return visitorReturn
    }


    
    // These select fromo types return {text,typeResult}

    visitSelectFromClause(ctx){
        //theres only one child, safely use the first
        return ctx.children[0].accept(this);
    }

    visitNestedSelectStmt(ctx){
        const returnable = ctx.children[1].accept(this);
        return{
            text:returnable.inTerm,
            typeResult:new IdentifierStoreResult(true,returnable.type.canGetTypes, returnable.type)
        }
    }

    visitSelectTableName(ctx){
        // const returnable = 
        const text = ctx.getText();
        const typeResult = this.identifierInformation.searchIdentifier(text,"table");
        if(!typeResult.found){
            this.errorListener.syntaxErrorAbort(`Could not find table '${text}'`,ctx);
        }
        return {text,typeResult};
    }
    visitSelectDataset(ctx){
        const layoutName = ctx.qualifiedIdentifier().getText();
        const fileType =  (ctx.selectDatasetFile()&&ctx.selectDatasetFile().accept(this)) || 'CSV(HEADING(1))' ;

        const text = `DATASET(${ctx.str.text},${layoutName},${fileType})`
        const layoutResult = this.identifierInformation.searchIdentifier(layoutName,"layout")
        if(!layoutResult.found){
            this.errorListener.syntaxErrorAbort(`Could not find layout '${layoutName}'`,ctx);
        }

        const newTableType = new TableIdentifier("__self",[],undefined,layoutResult.canGetTypes);
        if(layoutResult.result){
            newTableType.children = layoutResult.result.children.map(e=>{
                return new ColumnNameIdentifier(e.name,e.specialTypes);
            })
        }
        const typeResult = new IdentifierStoreResult(true,newTableType.canGetTypes,newTableType);
        return {text,typeResult};
    }

    visitSelectDatasetFileType(ctx){
        /**@type {string} */
        const text = ctx.getText().toLowerCase();
        //TODOF Refactor this hell
        if(text==='csv'){
            return 'CSV(HEADING(1))';
        }else if(text==='thor'){
            return 'THOR'
        }else if(text==='flat'){
            return 'FLAT'
        }
        this.errorListener.syntaxErrorAbort('Invalid file type: Accepted:(CSV,THOR,FLAT)',ctx);
    }


    /**
     * Standard child visitor
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
            }).join(" ");
        }
    }
}


/**
 * Internal set of objects used to gather the aggregates by reading the parse tree.
 * Usage: Calling it and Passing a selectStatement
 */
class AggregateVisitor extends HSQLVisitor {
    /**
     * 
     * @param {HSQLVisitorErrorListener} errorListener 
     */
    constructor(errorListener) {
        super()
        this.superFunctions = []
        this.errorListener = errorListener
    }
    /**
     * Return a object containing the function to layer above the 
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitAggregatedSelectColumn(ctx) {
        if (ctx.aggregate.count)
            this.superFunctions.push({ prop: 'COUNT', arg: null })
    }

    /**
     * 
     * @param {antlr4.ParserRuleContext} ctx 
     * @returns Object with "prop"->String and "arg"->Array for layering onto the default select statement generated
     */
    visitOrderByClause(ctx) {

        let args = ctx.children.reduce((totalArgs, child) => {
            if (child.children) {
                totalArgs.push(child.getText())
            }
            return totalArgs
        }, [])
        this.superFunctions.push({ "prop": 'SORT', "arg": args })

    }

}

/**
 * Process the join section of the select statement
 */
class JoinVisitor extends HSQLVisitor {
    /**
     * Construct a join Statement, and return type
     * @param {*} fromCtx 
     * @param {HSQLVisitorErrorListener} errorListener 
     */
    constructor(fromCtx, errorListener) {
        super()
        this.fromCtx = fromCtx;
        this.errorListener = errorListener;
    }

    getLeftRight(joinQualifiedIdentifier, ctx1, ctx2) {
        let joinQualifiedIdentifierText = joinQualifiedIdentifier.getText();
        let leftrecName = getParentName(ctx1)
        let rightrecName = getParentName(ctx2)
        if (this.fromCtx.selectBranch) {
            this.errorListener.syntaxErrorShort(joinctx, "Attempting to join on a nested statement")

        } else if (leftrecName == this.fromCtx.getText() && rightrecName == joinQualifiedIdentifierText) {
            return {
                left: ctx1.getChild(ctx1.getChildCount() - 1).getText(),
                right: ctx2.getChild(ctx2.getChildCount() - 1).getText()
            }
        } else if (leftrecName == joinQualifiedIdentifierText && rightrecName == this.fromCtx.getText()) {
            return {
                left: ctx2.getChild(ctx2.getChildCount() - 1).getText(),
                right: ctx1.getChild(ctx1.getChildCount() - 1).getText()
            }
        } else {
            this.errorListener.syntaxErrorAbort("Selected wrong tables",ctx1);
        }
    }

    /**
     * Returns a usable join statement clause
     * @returns {VisitorExchangeObject}
     */
    visitJoinClause(ctx) {
        let { left, right } = this.getLeftRight(ctx.joinidentifier, ctx.leftrecset, ctx.rightrecset)
        let returnable = new VisitorExchangeObject(`JOIN(${this.fromCtx.getText()},${ctx.joinidentifier.getText()},LEFT.${left} ${ctx.joincondition.getText()} RIGHT.${right},${ctx.joinType() ? ctx.joinType().children.map(e => e.getText()).join(" ") : 'INNER'})`);
        return returnable
        //return new VisitorExchangeObject(,[],[]);
    }

}


/**
 * Gathers column names and their aliases(if present)
 */
class SelectTypeGatherer extends HSQLVisitor {
    /**
     * 
     * @param {HSQLVisitorErrorListener} errorListener 
     * @param {IdentifierStoreResult} fromClauseInfo 
     * @param {IdentifierStore} identifierInformation
     * @param {String} fromClauseText
     */
    constructor(errorListener, fromClauseInfo, identifierInformation, fromClauseText) {
        super();
        this.errorListener = errorListener;
        this.fromClauseInfo = fromClauseInfo;
        this.identifierInformation = identifierInformation;
        this.fromClauseText = fromClauseText;

        //Name of table
        this.foundTableName = fromClauseInfo.result && fromClauseInfo.result.name;
    }

    visitSelectColumns(ctx) {

        if (this.fromClauseInfo.canGetTypes) {
            //created the joined table states
            if (ctx.parentCtx.joinClause()) {
                //there is a join
                const joinClause = ctx.parentCtx.joinClause()
                const joinTableSearchResult = this.identifierInformation.searchIdentifier(joinClause.joinidentifier.getText(), "table");
                //not found. Throw
                if (!this.fromClauseInfo.found) {
                    this.errorListener.syntaxErrorAbort(`Invalid table: \'${joinClause.joinidentifier.getText()}\'`,joinClause);
                }
                if (this.fromClauseInfo.found && joinTableSearchResult.found) {
                    //construct new Table, with original name
                    const joinedTable = new TableIdentifier(this.foundTableName, [...joinTableSearchResult.result.children, ...this.fromClauseInfo.result.children], undefined, true)
                    this.fromClauseInfo = new IdentifierStoreResult(true, true, joinedTable);
                } else {
                    //not found
                    this.fromClauseInfo = new IdentifierStoreResult(true, false);
                }
            }


            //wildcard special exit
            //only one select column/aggregate
            const needWildCardExit = (ctx.selectColumn().length === 1 && ctx.aggregatedSelectColumn().length === 0) || (ctx.selectColumn().length === 0 && ctx.aggregatedSelectColumn().length === 1)

            const fetchedWild = (ctx.selectColumn(0) && ctx.selectColumn(0).wild) || (ctx.aggregatedSelectColumn(0) && ctx.aggregatedSelectColumn(0).selectColumn(0) && ctx.aggregatedSelectColumn(0).selectColumn(0).wild);
            if (needWildCardExit && fetchedWild) {
                return this.fromClauseInfo.result.clone();// JSON.parse(JSON.stringify(this.fromClauseInfo))
            } else {
                //Nameless, will be assigned by the equality statement
                const newTable = new TableIdentifier(null, [], undefined, this.fromClauseInfo.found);


                if (this.fromClauseInfo.canHaveType) {
                    const childrenColTypes = this.visitChildren(ctx);
                    newTable.children.push(...childrenColTypes)
                }
                
                return newTable
            }
        }else{
            //cant find
            return new TableIdentifier(null, [],undefined,false);
        }
    }
    visitSelectColumn(ctx) {
        //Throw an error because control shouldnt have passed here with only one *
        if (ctx.wild) {
            this.errorListener.syntaxErrorAbort('Invalid \'*\'',ctx);
        }
        //const returnable;
        //decide the type - look at main name from the table name
        //and copy as required
        let colName = ctx.column.text;
        let alias = ctx.alias && ctx.alias.text;
        // const columnNeeded = this.fromClauseText + "." + colName;
        // const searchResults = this.identifierInformation.searchIdentifier(columnNeeded, "column");
        const columnNeeded = this.fromClauseInfo.found && this.fromClauseInfo.result.name + '.' + colName;
        const searchResults = this.fromClauseInfo.result && this.fromClauseInfo.result.search(columnNeeded);

        if (searchResults.canGetTypes) {
            if (searchResults.found) {
                return new ColumnNameIdentifier(alias || colName, searchResults.result.type);
            } else {
                //TODOF - Non-fatal error - continue with parsing?
                this.errorListener.syntaxErrorAbort(`Invalid column: \'${colName}\'`,ctx)
            }
        }
    }

    /**
     * Calls the child below
     * @param {antlr4.ParserRuleContext} ctx 
     */
    visitAggregatedSelectColumn(ctx) {
        return this.visit(ctx.selectedCol)
    }
    visitChildren(ctx) {
        //paranoia
        if (ctx && ctx.children) {

            return ctx.children.reduce((acc, cur) => {
                const returnable = cur.accept(this);
                if (returnable) {
                    if (Array.isArray(returnable)) {
                        acc.push(...returnable);
                    } else {
                        acc.push(returnable);
                    }
                }
                return acc;
            }, [])
        }
        return []
    }

}




//#region Miscellaneous functions

/**
 * Split a qualifiedIdentifier into its segments
 * @param {*} ctx 
 */
function getNameList(ctx) {
    return ctx.IDENTIFIER().map(e => e.getText())
}

/**
 * Getting a list of parents, for a qualified identifier
 * @param {*} ctx 
 */
function getParentNameList(ctx) {
    let rec = getNameList(ctx)
    rec.pop()
    return rec;
}

/**
 * Getting a parent identifier name for a qualifiedIdentifier
 * @param {*} ctx 
 */
function getParentName(ctx) {
    return getParentNameList(ctx).join(".");
}

//#endregion

//module.exports = SelectVisitor
exports.SelectVisitor = SelectVisitor;
