import { ParserRuleContext } from 'antlr4ts';
import { SingularDataType } from '../../misc/ast/SingularDataType';
import { IASTVisitor } from '../IASTVisitor';
import { BaseASTNode } from './base/BaseASTNode';
import { StmtExpression } from './base/StmtExpression';

// /**
//  * A literal expression
//  * Note: needs a type stored for it
//  */
// export abstract class Literal implements StmtExpression {
//     constructor(public node: ParserRuleContext) {}

//     public accept<T>(visitor: IASTVisitor<T>) {
//         return visitor.visitLiteral?.(this) ?? visitor.defaultResult();
//     }
// }

/**
 * Literal that is a string
 */
export class Literal implements StmtExpression {
    /**
     *
     * @param node Node
     * @param _val Stringified value
     * @param _dt Data Type
     */
    constructor(public node: ParserRuleContext, private _val: string, private _dt: SingularDataType) {}

    public get val(): string {
        return this._val;
    }

    public get dt() {
        return this._dt;
    }

    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitLiteral?.(this) ?? visitor.defaultResult();
    }
}
