import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { AST } from '../../ast/AST';
import { VariableTable } from '../../ast/symbol/VariableTable';
import { ImportStmtContext, ProgramContext } from '../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../misc/grammar/HSQLVisitor';
import { ReadingManager } from '../../managers/ReadingManager';
import { ErrorManager } from '../../misc/error/Error';
import { TaskManager } from '../../managers/TaskManager';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

class IdentifierCollector
    extends AbstractParseTreeVisitor<QualifiedIdentifier>
    implements HSQLVisitor<QualifiedIdentifier> {
    defaultResult() {
        return new QualifiedIdentifier();
    }
    visitTerminal(ctx: TerminalNode) {
        return new QualifiedIdentifier(ctx.text);
    }
    protected aggregateResult(aggregate: QualifiedIdentifier, nextResult: QualifiedIdentifier) {
        return new QualifiedIdentifier(...aggregate.qidentifier, ...nextResult.qidentifier);
    }
}
export class ASTGenerator extends AbstractParseTreeVisitor<void> implements HSQLVisitor<void> {
    protected ast: AST;
    constructor(protected taskManager: TaskManager, protected errorManager: ErrorManager) {
        super();
        this.ast = new AST(taskManager);
    }
    defaultResult() {
        return;
    }

    visitImportStmt(ctx: ImportStmtContext) {
        const importFrom = ctx.overQualifiedIdentifier().accept(new IdentifierCollector());
        const importAs = ctx.IDENTIFIER()?.text;
        /*
         * Now since the identifiers list is a ts tuple
         * the spread operator applies it as arguments, to this function
         * this would be equivalent to writing
         * this.ast.addImport(identifiers[0],identifiers[1]);
         * or if theres only one element
         * this.ast.addImport(identifiers[0]);
         */
        this.ast.addImport(importFrom, importAs);
    }

    getAST(x: ProgramContext) {
        this.visit(x);
        return this.ast;
    }
}
