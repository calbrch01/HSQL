import { ParserRuleContext } from 'antlr4ts';
import { DataType } from '../../ast/data/base/DataType';
import { BaseASTNode } from '../../ast/stmt/base/BaseASTNode';
import { ErrorManager, ErrorType, TranslationError } from '../../managers/ErrorManager';
import rs from '../strings/resultStrings.json';
/**
 * An Exchanging between AST nodes
 * {@link ASTGenerator}
 */
export class VEO<T extends DataType = DataType, U extends BaseASTNode = BaseASTNode> {
    /**
     *
     * @param _datatype Data type of the variable
     * @param _stmt
     */
    constructor(private _datatype: T, private _stmt: U) {}

    public get stmt(): U {
        return this._stmt;
    }
    public set stmt(value: U) {
        this._stmt = value;
    }
    public get datatype(): T {
        return this._datatype;
    }
    public set datatype(value: T) {
        this._datatype = value;
    }
}

export type VEOMaybe<T extends DataType = DataType, U extends BaseASTNode = BaseASTNode> = VEO<T, U> | null;

/**
 * Pull a VEO out typewise.
 * Please ensure while implementing that the VEO will be guaranteed to exist, else the program will stop
 * (by design)
 * @param x
 * @returns
 */
export function pullVEO<T extends DataType = DataType, U extends BaseASTNode = BaseASTNode>(
    x: VEOMaybe<T, U>,
    e: ErrorManager,
    ctx?: ParserRuleContext
): VEO<T, U> {
    if (x === null) {
        e.halt(TranslationError.generalErrorToken(rs.unexpectedError, ErrorType.HALTING, ctx));
    } else return x;
}
