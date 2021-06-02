import { BaseASTNode } from '../../ast/stmt/base/BaseASTNode';
import { Literal } from '../../ast/stmt/Literal';
import { AbstractASTVisitor, IASTVisitor } from '../../ast/IASTVisitor';
import { ECLCode } from '../../code/ECLCode';
import { Import } from '../../ast/stmt/Import';
import ecl from '../../misc/strings/ecl.json';
import format from 'string-template';
import { ErrorManager } from '../../managers/ErrorManager';
import { AST } from '../../ast/AST';
/**
 * @deprecated Deprecated as it is difficult to manage the stack easily
 */
export class ECLGen extends AbstractASTVisitor<void> implements IASTVisitor<void> {
    protected stmts: ECLCode[] = [];
    constructor(protected errorManager: ErrorManager, protected rootContext: AST) {
        super();
    }

    getCode() {
        this.visit(this.rootContext);
        return this.stmts;
    }
    // empty methods, return void/undefined
    defaultResult() {}
    reducer() {}

    visitLiteral(x: Literal) {}

    visitImport(x: Import) {
        const str = x.hasAlias ? ecl.import.aliased : ecl.import.regular;
        this.stmts.push(new ECLCode(format(str, [x.moduleName, x.alias])));
    }
}
