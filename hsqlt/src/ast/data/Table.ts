import { ParserRuleContext } from 'antlr4ts';
import format from 'string-template';
import { ErrorManager, TranslationIssue } from '../../managers/ErrorManager';
import rs from '../../misc/strings/resultStrings';
import { Any } from './Any';
import { AnyTable } from './AnyTable';
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
    static combine(err: ErrorManager, ctx: ParserRuleContext, ...collectionTypes: (Table | Any)[]): Table {
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
                // TODO raise warning
                if (result.has(name)) {
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
