import { IASTVisitor } from "../analysis/ast/IASTVisitor";
import { BaseNode } from "./base/BaseNode";
import { ValuedExpression } from "./base/ValuedExpression";

export class Literal implements ValuedExpression {
    constructor(private _name: string) {}
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public getText() {
        return this.name;
    }
    public accept<T>(visitor: IASTVisitor<T>) {
        return visitor.visitLiteral(this);
    }
}
