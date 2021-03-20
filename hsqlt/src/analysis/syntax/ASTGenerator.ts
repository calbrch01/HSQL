import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AST } from '../../ast/AST';
import { VariableTable } from '../../ast/symbol/VariableTable';
import { ImportStmtContext, ProgramContext } from '../../misc/grammar/HSQLParser';
import { AnyResolver } from '../../misc/resolvers/AnyResolver';
import { IResolver } from '../../misc/resolvers/IResolver';

export class ASTGenerator extends AbstractParseTreeVisitor<void> {
    protected ast: AST;
    constructor(typeResolver: IResolver = new AnyResolver()) {
        super();
        this.ast = new AST(typeResolver);
    }
    defaultResult() {}

    visitImportStmt(ctx: ImportStmtContext) {
        //get the text out of them
        const identifiers = ctx.IDENTIFIER().map(e => e.text) as [string, string?];
        //apply it to this function
        this.ast.addImport(...identifiers);
    }

    getAST(x: ProgramContext) {
        this.visit(x);
        return this.ast;
    }
}
