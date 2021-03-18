import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { HSQLVisitor } from '../../misc/grammar/HSQLVisitor';
import { AssignStmtContext, InlineStmtContext, ProgramContext, StmtContext } from '../../misc/grammar/HSQLParser';

export class BaseVisitor extends AbstractParseTreeVisitor<void> implements HSQLVisitor<void> {
    // useful for initializing for reducing during the visitChildren method
    defaultResult() {
        return;
    }
    visitProgram(ctx: ProgramContext) {
        console.log('hello world');
        this.visitChildren(ctx);
    }
    visitStmt(ctx: StmtContext) {
        console.log('stmt', ctx.text);
        this.visitChildren(ctx);
    }

    visitAssignStmt(ctx: AssignStmtContext) {
        console.log('where am i storing?', ctx.IDENTIFIER().text);
        //new Object()
    }

    visitInlineStmt(ctx: InlineStmtContext) {
        console.log('I am inline stmt');
    }
}
