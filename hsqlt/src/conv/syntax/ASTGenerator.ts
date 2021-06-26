import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import format from 'string-template';
import { AST } from '../../ast/AST';
import { Any } from '../../ast/data/Any';
import { DataType } from '../../ast/data/base/DataType';
import { NoDataType } from '../../ast/data/NoDataType';
import { Singular } from '../../ast/data/Singular';
import { SingularDataType } from '../../misc/ast/SingularDataType';
import { BaseASTNode } from '../../ast/stmt/base/BaseASTNode';
import { StmtExpression } from '../../ast/stmt/base/StmtExpression';
import { Definition } from '../../ast/stmt/Definition';
import { EqualDefinition } from '../../ast/stmt/EqualDefinition';
import { Import } from '../../ast/stmt/Import';
import { StringLiteral } from '../../ast/stmt/Literal';
import { DataMetaData, VariableTable, VariableVisibility } from '../../ast/symbol/VariableTable';
import { ErrorManager, TranslationIssue } from '../../managers/ErrorManager';
import { TaskManager } from '../../managers/TaskManager';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import {
    ActionStmtContext,
    BasicStringLiteralContext,
    DeclarationsContext,
    DefinitionContext,
    DefinitionStmtContext,
    ImportStmtContext,
    OutputStmtContext,
    PlotStmtContext,
    ProgramContext,
    ScopeContext,
    SelectStmtContext,
} from '../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../misc/grammar/HSQLVisitor';
import { pullVEO, VEO, VEOMaybe } from '../../misc/holders/VEO';
import rs from '../../misc/strings/resultStrings';
import { DefinitionGeneration } from './support/DefinitionsGeneration';
import { OutputASTGenerator } from './support/OutputASTGenerator';
import { SelectASTGenerator } from './support/SelectASTGenerator';
import { PlotASTGenerator } from './support/PlotASTGenerator';
/**
 * Generate an AST.
 * Imports are added to the variable table by this.ast.addImport
 * Definition assignments should be added during visiting
 * Note that in this ASTGenerator, the VEOs are returned as a singlet element, and if two rulenodes return a VEO, only the first is returned by a parent
 *
 */
export class ASTGenerator extends AbstractParseTreeVisitor<VEOMaybe> implements HSQLVisitor<VEOMaybe> {
    protected ast: AST;
    public variableManager: VariableTable;
    constructor(
        public taskManager: TaskManager,
        protected _errorManager: ErrorManager,
        protected rootContext: ProgramContext | DeclarationsContext
    ) {
        super();
        this.ast = new AST(taskManager, rootContext);
        this.variableManager = this.ast.variableManager;
    }
    public get errorManager() {
        return this._errorManager;
    }
    protected override defaultResult() {
        return null;
    }

    /**
     * Try to find a non null child
     * @param node Node whose children are being evaluated
     * @param curr Current aggregate state
     * @returns whether to continue or not
     */
    protected override shouldVisitNextChild(node: RuleNode, curr: VEOMaybe) {
        return curr === null;
    }

    visitImportStmt(ctx: ImportStmtContext) {
        const importFrom = QualifiedIdentifier.fromOverDefinition(ctx.overDefinition()); //ctx.overDefinition().accept(new IdentifierCollector());

        const importAs = ctx.IDENTIFIER()?.text;
        const importAsQID = importAs === undefined ? undefined : QualifiedIdentifier.fromString(importAs);

        this.ast.addImport(ctx, importFrom, importAsQID);
        // NoDataType as the import statement itself does not have a resultant data type
        return new VEO(new NoDataType(), new Import(ctx, importFrom, importAsQID));
    }
    /**
     * Get scope of a variable
     * @param ctx
     * @returns
     */
    protected getScope(ctx: ScopeContext): VariableVisibility {
        if (ctx.EXPORT() !== undefined) return VariableVisibility.PUBLIC;
        else if (ctx.SHARED() !== undefined) return VariableVisibility.SHARED;
        else return VariableVisibility.DEFAULT;
    }
    visitDefinitionStmt(ctx: DefinitionStmtContext) {
        const lhstext = ctx.IDENTIFIER().text;
        const rhsdata: VEOMaybe<DataType, StmtExpression> = ctx.expr().accept(this);
        //rhsdata is bound to exist
        const x: VEO<DataType, StmtExpression> = pullVEO(rhsdata, this.errorManager, ctx);
        // console.log(rhsdata);
        const vis = this.getScope(ctx.scope());

        const res = this.ast.variableManager.add(lhstext, DataMetaData(x.datatype, vis));
        if (!res) {
            this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.existsError, [lhstext]), ctx));
        }
        const ed = new EqualDefinition(ctx, QualifiedIdentifier.fromString(lhstext), x.stmt);
        return new VEO(new NoDataType(), ed); //new EqualDefinition(ctx,);
    }

    visitDefinition(ctx: DefinitionContext) {
        // todo - resolve a variable
        const qid = QualifiedIdentifier.fromGrammar(ctx);

        let dt = this.variableManager.resolve(qid);
        // throw an error saying that the definition used has been invalid
        // but use Any throughout the process
        if (dt === undefined) {
            dt = new Any();
            this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.notFound, [qid.toString()]), ctx));
        }
        return new VEO(dt, new Definition(ctx, qid));
    }

    // FIXME add actual code
    // visitSelectStmt(ctx: SelectStmtContext) {
    //     const ct = new Select(ctx, []);
    //     const dt = new Table();
    //     return new VEO(dt, ct);
    // }

    // add all the nodes to the AST in that order
    visitProgram(ctx: ProgramContext) {
        // this.visitChildren(ctx);

        // TODO 29/05 Maybe find a more elegant way of performing this operation.
        // extract the statements
        const visitedChildren = ctx.completestmt();

        if (ctx.actionCount === 0) {
            this.errorManager.push(TranslationIssue.semanticErrorToken(rs.noActions, ctx));
        }
        // for the automatic imports
        if (ctx.needPlots) {
            const importFrom = new QualifiedIdentifier('Visualizer');
            this.ast.addImport(ctx, importFrom);

            this.ast.stmts.push(new Import(ctx, importFrom));
        }

        const visitedAnswers = visitedChildren.map(e => e.accept(this));
        const results: VEO[] = visitedAnswers.reduce((t, e) => {
            if (e !== null) return t.concat(e);
            return t;
        }, new Array<VEO>());

        // console.debug(`importStats`, ctx.needPlots, ctx.needML, ctx.actionCount);

        // add the results of the statements
        this.ast.stmts.push(...results.map(e => e.stmt));
        return null;
    }

    visitOutputStmt(ctx: OutputStmtContext) {
        const outputVisitor = new OutputASTGenerator(this);
        return outputVisitor.visit(ctx); //new VEO();
    }

    visitSelectStmt(ctx: SelectStmtContext) {
        const selectVisitor = new SelectASTGenerator(this);
        return selectVisitor.visit(ctx);
    }

    visitPlotStmt(ctx: PlotStmtContext) {
        return new PlotASTGenerator(this).visit(ctx);
    }

    visitActionStmt(ctx: ActionStmtContext) {
        const res = this.visitChildren(ctx);
        // console.debug('G', res);
        return res;
    }

    visitBasicStringLiteral(ctx: BasicStringLiteralContext) {
        // console.debug('I was called');
        const dt = new Singular(SingularDataType.STRING);
        const node = new StringLiteral(ctx, ctx.text);
        return new VEO(dt, node);
    }

    visitDeclarations(ctx: DeclarationsContext) {
        // console.log('BEING CALEED');
        const declVisitor = new DefinitionGeneration(this).visit(ctx);
        return null;
    }

    getAST(): AST {
        this.visit(this.rootContext);
        return this.ast;
    }
}
