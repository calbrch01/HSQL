import { BaseASTNode } from '../../ast/stmt/base/BaseASTNode';
import { Literal } from '../../ast/stmt/Literal';
import { IASTVisitor } from '../../ast/IASTVisitor';
import { ECLCode } from '../../code/ECLCode';
import { Import } from '../../ast/stmt/Import';
import ecl from '../../misc/strings/ecl.json';
import format from 'string-template';
import { ErrorManager } from '../../misc/error/Error';
import { AST } from '../../ast/AST';
export class ECLGen extends IASTVisitor<void> {
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
