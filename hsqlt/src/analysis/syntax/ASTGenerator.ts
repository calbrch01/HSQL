import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { AST } from '../../ast/AST';
import { VariableTable } from '../../ast/symbol/VariableTable';
import {
    DefinitionContext,
    DefinitionStmtContext,
    ExprContext,
    ImportStmtContext,
    ProgramContext,
    SelectStmtContext,
} from '../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../misc/grammar/HSQLVisitor';
import { ReadingManager } from '../../managers/ReadingManager';
import { ErrorManager } from '../../managers/ErrorManager';
import { TaskManager } from '../../managers/TaskManager';
// import { IdentifierCollector } from './IdentifierCollector';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import { DataType } from '../../ast/data/base/DataType';
import { BaseASTNode } from '../../ast/stmt/base/BaseASTNode';
import { pullVEO, VEO, VEOMaybe } from '../../misc/holders/VEO';
import { StmtExpression } from '../../ast/stmt/base/StmtExpression';
import { Select } from '../../ast/stmt/Select';
import { Table } from '../../ast/data/Table';
import { NoDataType } from '../../ast/data/NoDataType';
import { Import } from '../../ast/stmt/Import';
import { RuleNode } from 'antlr4ts/tree/RuleNode';

/**
 * Generate an AST.
 *
 * Note that in this ASTGenerator, the VEOs are returned as a singlet element, and if two rulenodes return a VEO, only the first is returned by a parent
 *
 */
export class ASTGenerator extends AbstractParseTreeVisitor<VEOMaybe> implements HSQLVisitor<VEOMaybe> {
    protected ast: AST;
    constructor(
        protected taskManager: TaskManager,
        protected errorManager: ErrorManager,
        protected rootContext: ProgramContext
    ) {
        super();
        this.ast = new AST(taskManager, rootContext);
    }
    // TODO: may have to implement the aggregateResult also
    protected defaultResult() {
        return null;
    }

    /**
     * Try to find a non null child
     * @param node Node whose children are being evaluated
     * @param curr Current aggregate state
     * @returns whether to continue or not
     */
    protected shouldVisitNextChild(node: RuleNode, curr: VEOMaybe) {
        return curr === null;
    }

    visitImportStmt(ctx: ImportStmtContext) {
        const importFrom = QualifiedIdentifier.fromOverDefinition(ctx.overDefinition()); //ctx.overDefinition().accept(new IdentifierCollector());

        const importAs = ctx.IDENTIFIER()?.text;
        const importAsQID = importAs === undefined ? undefined : QualifiedIdentifier.fromString(importAs);
        /*
         * Now since the identifiers list is a ts tuple
         * the spread operator applies it as arguments, to this function
         * this would be equivalent to writing
         * this.ast.addImport(identifiers[0],identifiers[1]);
         * or if theres only one element
         * this.ast.addImport(identifiers[0]);
         */
        this.ast.addImport(ctx, importFrom, importAsQID);
        // NoDataType as the import statement itself does not have a resultant data type
        return new VEO(new NoDataType(), new Import(ctx, importFrom, importAsQID));
    }

    visitDefinitionStmt(ctx: DefinitionStmtContext) {
        const lhstext = ctx.IDENTIFIER().text;
        const rhsdata: VEOMaybe<DataType, StmtExpression> = ctx.expr().accept(this);
        //rhsdata is bound to exist
        const x = pullVEO(rhsdata, this.errorManager, ctx);

        return null;
    }

    // FIXME add actual code
    visitSelectStmt(ctx: SelectStmtContext) {
        const ct = new Select(ctx, []);
        const dt = new Table();
        return new VEO(dt, ct);
    }

    // add all the nodes to the AST in that order
    visitProgram(ctx: ProgramContext) {
        // this.visitChildren(ctx);

        // TODO Maybe find a more eloquent way of performing this operation.
        // extract the statements
        const visitedChildren = ctx.completestmt();
        const visitedAnswers = visitedChildren.map(e => e.accept(this));
        const results: VEO<DataType, BaseASTNode>[] = visitedAnswers.reduce((t, e) => {
            if (e !== null) return t.concat(e);
            return t;
        }, [] as VEO[]);

        // add the results of the statements
        this.ast.stmts.push(...results.map(e => e.stmt));
        return null;
    }

    getAST(): AST {
        this.visit(this.rootContext);
        return this.ast;
    }
}
