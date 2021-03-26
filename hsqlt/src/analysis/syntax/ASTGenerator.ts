import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { AST } from '../../ast/AST';
import { VariableTable } from '../../ast/symbol/VariableTable';
import { ImportStmtContext, ProgramContext } from '../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../misc/grammar/HSQLVisitor';
import { ReadingManager } from '../../managers/ReadingManager';
import { ErrorManager } from '../../misc/error/Error';
import { TaskManager } from '../../managers/TaskManager';

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
        /* ctx.IDENTIFIER() returns a list of nodes that are identifiers
         * Grammar states two of them where one is optional
         * import <x> (as <y>)?
         * this means ctx.IDENTIFIER() will return an array with one or two elements
         *
         * Then, map is used to create a new array, corresponding to the texts inside the elements
         * (which are conveniently in an array already)
         *
         * the `as` part is used to coerce the string[] which typescript things will come
         * into a typescript tuple (which is basically an array of known size), which can have one or two elements
         */
        const identifiers = ctx.IDENTIFIER().map(e => e.text) as [string, string?];
        /*
         * Now since the identifiers list is a ts tuple
         * the spread operator applies it as arguments, to this function
         * this would be equivalent to writing
         * this.ast.addImport(identifiers[0],identifiers[1]);
         * or if theres only one element
         * this.ast.addImport(identifiers[0]);
         */
        this.ast.addImport(...identifiers);
    }

    getAST(x: ProgramContext) {
        this.visit(x);
        return this.ast;
    }
}
