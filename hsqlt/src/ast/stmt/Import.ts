import { ParserRuleContext } from 'antlr4ts';
import { IASTVisitor } from '../IASTVisitor';
import { NonValuedExpression } from './base/NonValuedExpression';

export class Import implements NonValuedExpression {
    constructor(public node: ParserRuleContext, protected moduleName: string, protected alias?: string) {}

    /**
     * The module name to be used
     */
    getModuleName() {
        return this.moduleName;
    }
    getImportedName() {
        return this.alias ?? this.moduleName;
    }
    accept<T>(t: IASTVisitor<T>) {
        return t.visitImport(this);
    }
}
