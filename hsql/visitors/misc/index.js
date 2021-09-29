//@ts-check
const { ParserRuleContext } = require('antlr4')
const { HSQLParser } = require('../../gen/HSQLParser')
const { HSQLVisitorErrorListener} = require('../../HSQLErrorListener')

/**
 * Childless identifier base
 */
class GeneralIdentifier {
    /**
     * 
     * @param {String} name
     */
    constructor(name) {
        this.name = name;
        /**Type as referened by the searchIdentifier method
         * @type {string} 
         */
        this.type = "generic";
        this.exportType = "shared"
    }

    /**
     * Set export
     * @param {String} exportType 
     */
    setExportType(exportType) {
        this.exportType = exportType;
    }

    /**
     * Set a new Name
     * @param {string} newName
     */
    setName(newName) {
        this.name = newName;
    }

    /**
     * Generic terminal search function
     * @param {String} identifierName 
     * @return {IdentifierStoreResult} if canGetTypes, result will be null
     */
    search(identifierName) {
        if (identifierName.toLowerCase() === this.name.toLowerCase()) {
            return new IdentifierStoreResult(true, true, this);
        } else { return new IdentifierStoreResult(false, true) }
    }

    toString() {
        return this.name;
    }
}

/**
 * Base for 
 * Identifiers with children
 */
class StandardIdentifier extends GeneralIdentifier {
    /**
     * 
     * @param {String} name 
     * @param {Array<GeneralIdentifier>} children 
     * @param {Boolean} canGetTypes Represents whether it can be queried for types
     */
    constructor(name, children = [], canGetTypes = false) {
        super(name);
        this.children = children;
        this.canGetTypes = canGetTypes;
    }

    /**
     * Add a child segment
     * @param {StandardIdentifier} child 
     */
    addChildren(child) {
        this.children.push(child);
    }

    /**
     * Get the child segments
     * @returns {Array<GeneralIdentifier>}
     */
    getChildren() {
        return this.children;
    }

    /**
     * Non terminal search
     * @param {string} qualifiedIdentifierName
     */
    search(qualifiedIdentifierName) {
        ///Split the thing, pop out one element
        const wholeState = qualifiedIdentifierName.split(".")
        //sanity check - nothing left after splitting
        if (!wholeState) {
            return new IdentifierStoreResult();
        }
        //this is the name of self, apparently, so check
        const currentSearchableName = wholeState.shift()
        ///Was it supposed to be the module being looked for?
        if (currentSearchableName.toLowerCase() === this.name.toLowerCase() && wholeState.length === 0) {
            return new IdentifierStoreResult(true, this.canGetTypes, this);
        } else if (currentSearchableName.toLowerCase() === this.name.toLowerCase()) {//if my name matches, propagate downwards
            //this is a job for children - let them search
            if (this.canGetTypes) {
                const childName = wholeState.join(".")
                //doing a traditional search cos maps will perform slowly
                let searchResultContainer
                for (var child of this.children) {
                    searchResultContainer = child.search(childName)
                    if (searchResultContainer.found) return searchResultContainer
                }
            } else {
                //found is irrelevant
                return new IdentifierStoreResult(true, false)
            }
            //couldnt find
            return new IdentifierStoreResult();
        }
        return new IdentifierStoreResult();
    }
}

class ImportableIdentifier extends StandardIdentifier {
    /**
     * 
     * @param {String} name 
     * @param {Array<GeneralIdentifier>} children Non/terminal children nodes
     * @param {boolean} isLibrary Used and implies use of internal type data
     * @param {String} mainName
     * @param {boolean} canGetTypes If can get types
     */
    constructor(name, children = [], isLibrary = false, mainName = null, canGetTypes = false) {
        super(name, children, canGetTypes)
        this.isLibrary = isLibrary
        this.mainName = mainName || name;
        this.type = "module"
    }
}

class LayoutIdentifier extends StandardIdentifier {
    /**
     * 
     * @param {String} name 
     * @param {Array<ColumnNameIdentifier>} children 
     * @param {Boolean} canGetTypes Type Store info presence
     */
    constructor(name, children = [], canGetTypes = false) {
        super(name, children, canGetTypes)
        this.type = "layout";
    }

}

class TableIdentifier extends LayoutIdentifier {
    /**
     * 
     * @param {String} name
     * @param {Array<ColumnNameIdentifier>} children 
     * @param {String} specialType Type if required
     * @param {Boolean} canGetTypes Type Store info presence
     * 
     */
    constructor(name, children, specialType = null, canGetTypes = false) {
        super(name, children, canGetTypes)
        this.children = children;
        this.specialType = specialType;
        this.type = "table"
    }

    clone() {
        const children = this.children.map(e => {
            return new ColumnNameIdentifier(e.name, e.specialTypes);
        })
        const table = new TableIdentifier(new String(this.name).toString(), children, this.specialType, this.canGetTypes);
        return table;
        //this wont work, itll ruin the methods
        // return JSON.parse(JSON.stringify(this));
    }
}

/**
 * Table column names, or constant, or field elements
 */
class ColumnNameIdentifier extends GeneralIdentifier {
    /**
     * @param {string} name
     * @param {String} specialTypes Optional type description
     */
    constructor(name, specialTypes = "Generic") {
        super(name);
        this.type = "column";
        this.specialTypes = specialTypes;
    }
}

class ModelIdentifier extends ColumnNameIdentifier {
    /**
     * @param {string} name
     */
    constructor(name, specialTypes = "model") {
        super(name, specialTypes);
        this.type = "model";
    }
}

/**
 * Represents actions
 * Is not exported as its not very useful
 */
class ActionIdentifier extends GeneralIdentifier {
    /**
     * 
     * @param {String} name 
     */
    constructor(name) {
        super(name);
        this.type = "action";
    }
}

/**
 * Type store class
 */
class IdentifierStore {
    /**
     * 
     * @param {HSQLVisitorErrorListener} errorListener
     * @param {HSQLParser} parser
     */
    constructor(errorListener, parser = null) {
        /**
         * @type {Array<GeneralIdentifier>}
         */
        this.globalIdentifierStore = [];

        /**List containing only actions 
         * @type {ActionIdentifier[]} 
         */
        this.actionStatements = [];

        /**
         * Needs to be set before all else
         * @type {Array<{name:string,visited:boolean}>}
         */
        this.preCalcExports = [];
        this.errorListener = errorListener;
        if (parser && parser.flags) {
            if (parser.flags.ML) {
                this.globalIdentifierStore.push(
                    new ImportableIdentifier("ML_Core", [], true, undefined, false),
                    new ImportableIdentifier("Types", [], true, "ML_Core.Types", false),
                );
            }
            if (parser.flags.plot) {
                this.globalIdentifierStore.push(new ImportableIdentifier("Visualizer", [], true, undefined, false));
            }
        }
    }

    /**
     * Call before visiting
     * @param {Array<{name:string,visited:boolean}>} arrayList 
     */
    setExports(arrayList) {
        this.preCalcExports = [...arrayList];
    }
    hasVisitedAll() {
        // run an and over all the values
        //!! forces it to boolean
        return !!this.preCalcExports.reduce((acc, val) => {
            return acc && val.visited;
         }, true);
    }

    /**
     * 
     * @param {String} name qualified identifier being search
     * @returns {IdentifierStoreResult} Result of the Search
     */
    search(name) {
        let searchResult
        for (const element of this.globalIdentifierStore) {
            searchResult = element.search(name);
            if (searchResult.found) return searchResult;
        }

        //Not found
        //could be - throw new HSQLError
        //Not now though; just say not found. Let other part deal with it
        return new IdentifierStoreResult();
    }

    /**
     * Search, specifying an identifier type
     * @param {string} name
     * @param {string} typeName
     * @return {IdentifierStoreResult}
     */
    searchIdentifier(name, typeName) {
        const result = this.search(name)
        if (result.found) {
            // if it cant get types, or the types match, send it
            if (!result.canGetTypes || result.result.type === typeName) {
                return result
            }
        }
        return new IdentifierStoreResult();
    }

    /**
     * Search by alias
     * @param {String} libraryName 
     * @return {IdentifierStoreResult}
     */
    searchImportAlias(libraryName) {
        return this.searchIdentifier(libraryName, "module");
    }

    /**
     * Search for a import by its actual name
     * @param {String} libraryName 
     * @returns {IdentifierStoreResult}
     */
    searchImport(libraryName) {
        /**@type {ImportableIdentifier} */
        // @ts-ignore
        let result = this.globalIdentifierStore.find(e => {
            if (e instanceof ImportableIdentifier) {
                /**@type {ImportableIdentifier} */
                const element = e;
                return (element.mainName.toLowerCase() === libraryName.toLowerCase());
            } else return false
        })
        if (result) {
            return new IdentifierStoreResult(true, result.canGetTypes, result);
        }
        return new IdentifierStoreResult();
    }

    /**
     * Add a reserved ML/else model variable
     * @param {String} data 
     * @param {String} fieldType 
     * @param {ParserRuleContext} ctx 
     * @returns {ModelIdentifier} the new reserved variable
     */
    addReservedModelVariable(data, fieldType = "numericField", ctx = null) {

        const temp = data.startsWith('_reserved_') ? data : ('_reserved_' + data);
        let tempModelName;
        for (let i = 0; i < 255; i++) {
            tempModelName = temp + i;
            if (!this.search(tempModelName).found) {
                let newVar = new ModelIdentifier(tempModelName, fieldType);
                this.add(newVar);
                return newVar;
            }
        }

        this.errorListener.syntaxErrorAbort(`Could not reserve variable for \'${temp}\'`,ctx);
    }

    /**
     * Create new action identifier
     * The arguments are reversed, cos ctx is more important to be provided
     * @param {String} data Suggested name, defaults to "action"
     * @param {ParserRuleContext} ctx 
     * @return {ActionIdentifier}
     */
    addActionIdentifier(ctx = null,data="action") {
        const temp = data.startsWith('_reserved') ? data : ('_reserved' + data);
        let tempModelName;
        for (let i = 0; i < 255; i++) {
            //this length allows for as many outputs as required, but allows for retries/reallocs if required
            tempModelName = temp +( this.actionStatements.length +i);
            if (!this.search(tempModelName).found) {
                let newVar = new ActionIdentifier(tempModelName);
                this.add(newVar);
                //add to this also
                this.actionStatements.push(newVar);
                return newVar;
            }
        }

        this.errorListener.syntaxErrorAbort(`Could not reserve action for \'${temp}\'`)
    }

    /**
     * Add the import ifn't present
     * Will raise an error if already something in that place
     * @param {String} libraryName 
     * @return {IdentifierStoreResult}
     */
    searchImportAppend(libraryName, ctx = null) {
        const searchResult = this.searchImport(libraryName);
        if (!searchResult.found) {
            const element = new ImportableIdentifier(libraryName, [], true, null, false);
            this.add(element, ctx);
            return new IdentifierStoreResult(true, element.canGetTypes, element);
        }
        return searchResult;
    }

    get vars() {
        return this.globalIdentifierStore;
    }

    /**
     * An object array of imports required for quick processing
     * @returns {Array<{mainLib:String,alias?:String}>}
     */
    get importRequired() {
        return this.globalIdentifierStore.filter(val => val instanceof ImportableIdentifier)
            .map(e => {
                /**@type {ImportableIdentifier} */
                // @ts-ignore
                const element = e;
                return { mainLib: element.mainName || element.name, alias: (element.name.toLowerCase() === element.mainName.toLowerCase() ? null : element.name) }
            })

        // return []
    }

    /**
     * Add identifier info for a single identifier
     * @param {GeneralIdentifier} element Element
     * @param {any} ctx the current parse table context
     * @return {IdentifierStore} The current state
     */
    add(element, ctx = null) {
        if (this.search(element.name).canHaveType) {
            this.errorListener.syntaxErrorAbort(`\'${element.name}\' already exists`,ctx);
        }
        this.globalIdentifierStore.push(element);
        return this;
    }

    /**
     * Add identifier info for a identifiers. DOES NOT DO ASSERTIONS.
     * @param {Array<StandardIdentifier>} elements Set of elements
     * @return {IdentifierStore} The current state
     */
    addAll(elements) {
        this.globalIdentifierStore.push(...elements);
        return this;
    }

    /**
     * Assert that it exists, else throw an error
     * @param {String} qualifiedIdentifier 
     * @param {String} typeName 
     * @param {*} ctx
     */
    assertExists(qualifiedIdentifier, typeName, ctx) {
        if (!this.searchIdentifier(qualifiedIdentifier, typeName).found) {
            this.errorListener.syntaxErrorAbort(`No ${typeName} found as \'${qualifiedIdentifier}\'`);
        }
        return true;
    }
}

/**
 * The results from IdentifierStore
 */
class IdentifierStoreResult {
    /**
     * Empty constructor is shorthand for not found
     * @param {Boolean} [found=false]
     * @param {Boolean} [canGetTypes=true] 
     * @param {GeneralIdentifier} [result=null]
     */
    constructor(found = false, canGetTypes = true, result = null) {
        this.found = found;
        this.canGetTypes = canGetTypes;
        this.result = result;
    }

    /**
     * Use if type processing needed
     */
    get canHaveType() {
        return this.found && this.canGetTypes;
    }
}


class VisitorExchangeObject {
    /**
     * Create a new object for communication.
     * @param {Array<String>} pre Array of strings for inclusion before
     * @param {String} inTerm The actual statement
     * @param {Array<String>} post Array of strings for inclusion after 
     * @param {GeneralIdentifier} type Type data
     */
    constructor(inTerm, pre = [], post = [], type = null) {
        this.inTerm = inTerm;
        this.preTerms = pre;
        this.postTerms = post;
        this.type = type;
    }
}

//Should not be used, only as templates for the classes
exports.GeneralIdentifier = GeneralIdentifier;

//interface
exports.StandardIdentifier = StandardIdentifier;

//The actually used identifiers
exports.ImportableIdentifier = ImportableIdentifier;
exports.LayoutIdentifier = LayoutIdentifier;
exports.TableIdentifier = TableIdentifier;
exports.ModelIdentifier = ModelIdentifier;
exports.ColumnNameIdentifier = ColumnNameIdentifier;
exports.ActionIdentifier = ActionIdentifier;
exports.VisitorExchangeObject = VisitorExchangeObject;

//The Identifier Store
exports.IdentifierStore = IdentifierStore;
exports.IdentifierStoreResult = IdentifierStoreResult;