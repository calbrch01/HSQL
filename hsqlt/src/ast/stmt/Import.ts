import { ParserRuleContext } from 'antlr4ts';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { IASTVisitor } from '../IASTVisitor';
import { NonValuedExpression } from './base/NonValuedExpression';

export class Import implements NonValuedExpression {
    public hasAlias: boolean;
    constructor(
        public node: ParserRuleContext,
        public _moduleName: QualifiedIdentifier,
        public alias?: QualifiedIdentifier
    ) {
        this.hasAlias = !(alias === undefined);
    }

    /**
     * The module name to be used
     */
    get moduleName() {
        return this._moduleName;
    }
    getImportedName() {
        return this.alias === undefined ? this._moduleName : this.alias;
    }
    accept<T>(t: IASTVisitor<T>) {
        return t.visitImport(this);
    }
}
