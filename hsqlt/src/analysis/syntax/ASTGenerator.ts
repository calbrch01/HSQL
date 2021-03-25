import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { AST } from '../../ast/AST';
import { VariableTable } from '../../ast/symbol/VariableTable';
import { ImportStmtContext, ProgramContext } from '../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../misc/grammar/HSQLVisitor';
import { ReadingManager } from '../../managers/ReadingManager';

export class ASTGenerator extends AbstractParseTreeVisitor<void> implements HSQLVisitor<void> {
    protected ast: AST;
    constructor(protected readingManager: ReadingManager) {
        super();
        this.ast = new AST(readingManager);
    }
    defaultResult() {
        return;
    }

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
