import { ParserRuleContext } from 'antlr4ts';
import { IASTVisitor } from '../IASTVisitor';
import { NonValuedExpression } from './base/NonValuedExpression';

export class Import implements NonValuedExpression {
    public hasAlias: boolean;
    constructor(public node: ParserRuleContext, public _moduleName: string, public alias?: string) {
        this.hasAlias = !(alias === undefined);
    }

    /**
     * The module name to be used
     */
    get moduleName() {
        return this._moduleName;
    }
    getImportedName() {
        return this.alias ?? this._moduleName;
    }
    accept<T>(t: IASTVisitor<T>) {
        return t.visitImport(this);
    }
}
