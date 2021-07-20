import { ParserRuleContext } from 'antlr4ts';
import format from 'string-template';
import { ErrorManager, TranslationIssue } from '../../managers/ErrorManager';
import rs from '../../misc/strings/resultStrings';
import { Any } from './Any';
import { CollectionType } from './base/CollectionType';
import { DataType, EDataType } from './base/DataType';
import { Col } from './Col';

/**
 * Table
 */
export class Table extends CollectionType {
    /**
     *
     * @param cols Columns to contain
     */
    constructor(private cols: Map<string, Col> = new Map()) {
        super(EDataType.TABLE);
    }

    /**
     * Duplicate a table type
     */
    cloneType() {
        const cols = this.list();
        const duplicatedColumns: [string, Col][] = cols.map(([eName, eVar]) => [eName, eVar.cloneType()]);
        return new Table(new Map(duplicatedColumns));
    }
    list() {
        return [...this.cols];
    }
    get(c: string) {
        c = c.toLowerCase();

        return this.cols.get(c);
    }
    // has(C: Col) {
    //     return this.cols.has(e => e.equals(C)) !== -1;
    // }

    static isTable(x: DataType): x is Table {
        return x.type === EDataType.TABLE;
    }

    /**
     * Combine multiple table expressions
     * @param collectionTypes
     * @param y
     */
    static combine(
        err: ErrorManager,
        forJoins: boolean = false,
        ctx?: ParserRuleContext,
        ...collectionTypes: (Table | Any)[]
    ): Table {
        const result: Map<string, Col> = new Map();
        for (const collectionType of collectionTypes) {
            // if anyized, return this special version and short circuit
            if (collectionType.anyized) {
                err.push(TranslationIssue.semanticWarningToken(format(rs.tableSelectionHasAnyWarning), ctx));
                return new AnyTable();
            }
            const list = collectionType.list();
            // add these items to the list
            for (const [name, data] of list) {
                if (result.has(name) && !forJoins) {
                    err.push(
                        TranslationIssue.semanticWarningToken(format(rs.existsError, [rs.column + ' ' + name]), ctx)
                    );
                }
                // this is safe, as Any will be empty
                result.set(name, data as Col);
            }
        }
        return new Table(result);
    }

    isExactType(t: DataType) {
        const myElems = [...this.cols];
        if (Table.isTable(t)) {
            if (t.cols.size !== this.cols.size) return false;
            //cache col length
            // const colLength = t.cols.size;
            // for (let i = 0; i < colLength; ++i) {
            //     // check all cols are the same
            //     if (!this.cols[i].isExactType(t.cols[i])) return false;

            // their lengths are the same, so if every lhs = rhs, then every rhs = lhs
            for (const [lhsName, lhsVar] of this.cols) {
                const rhsVar = t.get(lhsName);
                if (rhsVar === undefined) return false;
                else {
                    if (!lhsVar.isExactType(rhsVar)) return false;
                }
            }
            return true;
        }
        return false;
    }
}

/**
 * Table but no decidable columns
 * eg. the result of a select query whose types are undecidable
 */
export class AnyTable extends Table {
    get(c: string) {
        return undefined;
    }

    constructor() {
        super();
        this._anyized = true;
    }
    /**
     * return a new anytable
     */
    public cloneType() {
        return new AnyTable();
    }

    isExactType(d: DataType) {
        // check self type first
        if (AnyTable.isTable(d)) {
            // its an AnyTable, we do not care about contents.
            return true;
        }
        //not equal, drop
        return false;
    }
    /**
     * It always has any asked element
     * @returns
     */
    has() {
        return true;
    }

    /**
     * Method returns an empty list as there is no understandable list of columns
     */
    list() {
        return [];
    }
}
