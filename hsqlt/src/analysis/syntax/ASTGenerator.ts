import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AST } from '../../ast/AST';
import { VariableTable } from '../../ast/symbol/VariableTable';

export class ASTGenerator extends AbstractParseTreeVisitor<void> {
    ast: AST;
    constructor() {
        super();
        this.ast = new AST();
    }
    defaultResult() {
        return undefined;
    }

    visitImportStatement() {}
}
