import { ParserRuleContext } from 'antlr4ts';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from '../stmt/base/StmtExpression';
import { DataType, EDataType } from './base/DataType';

/**
 * (Called HFunction to not interfere with the inbuilt Function)
 */
export class HFunction extends DataType {
    constructor(private _fargs: [string, DataType][], private _returnType: DataType) {
        super(EDataType.FUNCTION);
    }
    /**
     * Get the return type of the function
     */
    public get returnType(): DataType {
        return this._returnType;
    }
    /**
     * Get the type of function arguments
     */
    public get fargs(): [string, DataType][] {
        return this._fargs;
    }
    isExactType(type: DataType): boolean {
        // no two functions are equal unless they _are_ the same function
        return this === type;
    }
    cloneType(): DataType {
        // deep clone it
        return new HFunction(
            [...this._fargs.map(([name, dt]) => [name, dt.cloneType()])] as [string, DataType][],
            this._returnType.cloneType()
        );
    }
}
