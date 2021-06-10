import { ParserRuleContext } from 'antlr4ts';
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
export class StringLiteral implements StmtExpression {
    constructor(public node: ParserRuleContext, private _val: string) {}

    public get val(): string {
        return this._val;
    }

    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitStringLiteral?.(this) ?? visitor.defaultResult();
    }
}
