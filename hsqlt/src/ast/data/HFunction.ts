import { ParserRuleContext } from 'antlr4ts';
import { FunctionArgument, FunctionArgumentFilled } from '../../misc/ast/FunctionArgumentType';
import { IASTVisitor } from '../IASTVisitor';
import { StmtExpression } from '../stmt/base/StmtExpression';
import { DataType, EDataType } from './base/DataType';

/**
 * (Called HFunction to not interfere with the inbuilt Function)
 */
export class HFunction extends DataType {
    constructor(private _fargs: Map<string, FunctionArgumentFilled>, private _returnType: DataType) {
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
    public get fargs(): Map<string, FunctionArgumentFilled> {
        return this._fargs;
    }
    isExactType(type: DataType): boolean {
        // no two functions are equal unless they _are_ the same function
        return this === type;
    }
    cloneType(): DataType {
        // the `as any` is provably safe, its just easier than putting manual checks
        const fargs = [...this._fargs].map<[string, FunctionArgumentFilled]>(([name, { type, dataType }]) => [
            name,
            { type, dataType: dataType.cloneType() as any },
        ]);
        // deep clone it
        return new HFunction(new Map(fargs), this._returnType.cloneType());
    }
}
