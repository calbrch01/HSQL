import { IASTVisitor } from '../../analysis/ast/IASTVisitor';
import { NonValuedExpression } from './base/NonValuedExpression';

export class Import implements NonValuedExpression {
    constructor(protected moduleName: string, protected alias?: string) {}

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
