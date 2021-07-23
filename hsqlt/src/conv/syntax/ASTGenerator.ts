import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import format from 'string-template';
import { AST } from '../../ast/AST';
import { Any } from '../../ast/data/Any';
import { DataType } from '../../ast/data/base/DataType';
import { NoDataType } from '../../ast/data/NoDataType';
import { Singular } from '../../ast/data/Singular';
import { StmtExpression } from '../../ast/stmt/base/StmtExpression';
import { Definition } from '../../ast/stmt/Definition';
import { EqualDefinition } from '../../ast/stmt/EqualDefinition';
import { Import } from '../../ast/stmt/Import';
import { Literal } from '../../ast/stmt/Literal';
import { DataMetaData, VariableTable } from '../../ast/symbol/VariableTable';
import { ErrorManager, ErrorType, TranslationIssue } from '../../managers/ErrorManager';
import { TaskManager } from '../../managers/TaskManager';
import { QualifiedIdentifier } from '../../misc/ast/QualifiedIdentifier';
import {
    ActionStmtContext,
    DeclarationsContext,
    DefinitionContext,
    DefinitionStmtContext,
    FileOutputStmtContext,
    FunctionStmtContext,
    ImportStmtContext,
    LayoutStmtContext,
    LiteralContext,
    ModuleStmtContext,
    OutputStmtContext,
    PlotStmtContext,
    ProgramContext,
    SelectStmtContext,
} from '../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../misc/grammar/HSQLVisitor';
import { pullVEO, VEO, VEOMaybe } from '../../misc/holders/VEO';
import rs from '../../misc/strings/resultStrings';
import { DeclarationGeneration } from './support/DeclarationGeneration';
import { OutputASTGenerator } from './support/OutputASTGenerator';
import { SelectASTGenerator } from './support/SelectASTGenerator';
import { PlotASTGenerator } from './support/PlotASTGenerator';
import { WriteASTGenerator } from './support/WriteASTGenerator';
import { ColDefsASTGenerator } from './support/ColDefASTGenerator';
import { Layout } from '../../ast/data/Layout';
import { CreateLayout } from '../../ast/stmt/CreateLayout';
import { Module } from '../../ast/data/Module';
import { VariableVisibility } from '../../misc/ast/VariableVisibility';
import { CreateModule } from '../../ast/stmt/CreateModule';

/**
 * Generate an AST.
 * Imports are added to the variable table by this.ast.addImport
 * Definition assignments should be added during visiting
 * Note that in this ASTGenerator, the VEOs are returned as a singlet element, and if two rulenodes return a VEO, only the first is returned by a parent
 *
 * For getting started, please refer to the Grammar to see what the members are for each context
 */
export class ASTGenerator extends AbstractParseTreeVisitor<VEOMaybe> implements HSQLVisitor<VEOMaybe>, ASTGen {
    protected ast: AST;
    public variableManager: VariableTable;
    protected colDefsASTGenerator: ColDefsASTGenerator;
    constructor(
        public taskManager: TaskManager,
        protected _errorManager: ErrorManager,
        protected rootContext: ProgramContext | DeclarationsContext,
        protected includeStack: string[]
    ) {
        super();
        this.colDefsASTGenerator = new ColDefsASTGenerator();
        if (includeStack.length === 0) {
            this._errorManager.halt(
                TranslationIssue.generalErrorToken(
                    format(rs.unexpectedErrorTagged, rs.includeStackEmptyError),
                    ErrorType.HALTING,
                    rootContext
                )
            );
        }
        // if it is a program context, use the property, else false
        const willWrap = rootContext instanceof ProgramContext ? rootContext.willWrapModule : false;
        this.ast = new AST(taskManager, rootContext, includeStack[includeStack.length - 1], willWrap);
        this.variableManager = this.ast.variableManager;
    }
    public get errorManager() {
        return this._errorManager;
    }
    protected override defaultResult() {
        return null;
    }
    /**
     * Visit next child as long as the current one is null - ie. stop when you find one and return
     * @param node Node whose children are being evaluated
     * @param curr Current aggregate state
     * @returns whether to continue or not
     */
    protected override shouldVisitNextChild(node: RuleNode, curr: VEOMaybe) {
        return curr === null;
    }

    /*
     * From here, the visit methods are defined
     * The signatures will be hinted by the IDE, but they are present in HSQLVisitor<T>.
     * Eg. a 'program' rule generates visitProgram(ctx:ProgramContext)=>T; (The first letter gets capitalized)
     *
     */

    visitImportStmt(ctx: ImportStmtContext) {
        const importFrom = QualifiedIdentifier.fromOverDefinition(ctx.overDefinition()); //ctx.overDefinition().accept(new IdentifierCollector());

        const importAs = ctx.IDENTIFIER()?.text;
        const importAsQID = importAs === undefined ? undefined : QualifiedIdentifier.fromString(importAs);

        this.ast.addImport(ctx, importFrom, importAsQID, this.includeStack);
        // NoDataType as the import statement itself does not have a resultant data type
        return new VEO(new NoDataType(), new Import(ctx, importFrom, importAsQID));
    }

    visitDefinitionStmt(ctx: DefinitionStmtContext) {
        const lhstext = ctx.IDENTIFIER().text;
        const rhsdata: VEOMaybe<DataType, StmtExpression> = ctx.expr().accept(this);
        //rhsdata is bound to exist
        const x: VEO<DataType, StmtExpression> = pullVEO(rhsdata, this.errorManager, ctx);

        // get variable visibility
        const vis = ctx.scope().variableVisibility;

        const res = this.ast.variableManager.add(lhstext, DataMetaData(x.datatype, vis));
        if (!res) {
            this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.existsError, [lhstext]), ctx));
        }
        const ed = new EqualDefinition(ctx, QualifiedIdentifier.fromString(lhstext), x.stmt, vis);
        return new VEO(new NoDataType(), ed); //new EqualDefinition(ctx,);
    }

    visitFunctionStmt(ctx: FunctionStmtContext) {
        const { text: fname } = ctx.IDENTIFIER();
        console.log('no', ctx.definitionStmt().length);

        // const fargs =
        //     const result = this.ast.variableManager.add(fname, DataMetaData(x.datatype, vis));
        // if (!result) {
        //     this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.existsError, [lhstext]), ctx));
        // }
        const centraldata = ctx.definitionStmt().map(e => {
            const res = e.accept(this);
            const veo = pullVEO(res, this._errorManager, e);
            if (veo.stmt instanceof EqualDefinition) {
                return [veo.datatype, veo.stmt] as [DataType, EqualDefinition<StmtExpression>];
            } else {
                return this.errorManager.halt(TranslationIssue.semanticErrorToken(rs.unexpectedError, e));
            }
        });
        return null;
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

    // add all the nodes to the AST in that order
    visitProgram(ctx: ProgramContext) {
        // this.visitChildren(ctx);

        if (ctx.willWrapModule && ctx.actionCount > 0) {
            this.errorManager.push(TranslationIssue.semanticErrorToken(rs.exportActionIncompatErrors, ctx));
        }

        // extract the statements
        const visitedChildren = ctx.completestmt();

        if (!ctx.willWrapModule && ctx.actionCount === 0) {
            this.errorManager.push(TranslationIssue.semanticErrorToken(rs.noActions, ctx));
        }
        // for the automatic imports
        if (ctx.needPlots) {
            const importFrom = new QualifiedIdentifier('Visualizer');
            this.ast.addImport(ctx, importFrom, undefined, this.includeStack);

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

    visitLayoutStmt(ctx: LayoutStmtContext) {
        // the declaration generation is used here as a shortcut to generate coldef mappings
        const entries = this.colDefsASTGenerator.visit(ctx.layoutContent().colDefs());

        // sadly we have to do some extra computations regarding the column names, just to check if it has been repeated or not
        const x = new Set<string>();
        // for each key in the entries, iterate and check if they exist
        entries.forEach(([k]) => {
            if (x.has(k)) {
                this.errorManager.push(
                    TranslationIssue.semanticWarningToken(format(rs.existsError, rs.column + ' ' + k), ctx)
                );
            }
            x.add(k);
        });

        const layout = new Layout(new Map(entries));

        // this.parent.variableManager.add(text, DataMetaData(layout, VariableVisibility.EXPORT));
        const layoutstmt = new CreateLayout(ctx, layout);

        return new VEO(layout, layoutstmt);
    }

    visitFileOutputStmt(ctx: FileOutputStmtContext) {
        const fileOutputVisitor = new WriteASTGenerator(this);
        return fileOutputVisitor.visit(ctx);
    }

    visitOutputStmt(ctx: OutputStmtContext) {
        const outputVisitor = new OutputASTGenerator(this);
        return outputVisitor.visit(ctx); //new VEO();
    }

    visitModuleStmt(ctx: ModuleStmtContext) {
        /*
         * This is a particularly trickly one
         * The idea here is to obtain all the EqualDefinitions, and accepting each subnode adds to the new variable scope.
         * This information can be then reused to contruct the datatype of the module, filtering out the internal and non-exported data types
         */
        return this.variableManager.withNewScope(scopedVars => {
            // console.log('scope1', scopedVars);
            const innerValues: EqualDefinition<StmtExpression>[] = ctx.definitionStmt().map(e => {
                const x = e.accept(this);
                const y = pullVEO(x, this.errorManager, e);
                if (y.stmt instanceof EqualDefinition) {
                    return y.stmt;
                } else {
                    return this.errorManager.halt(TranslationIssue.semanticErrorToken(rs.unexpectedError, e));
                }
            });
            // console.log('scope2', scopedVars);

            // scopedVars have been populated after being set by e.accept(this) above
            const scopedVarsList = [...scopedVars];
            // consider only public data -> ones which are not internal
            const publicScopedVarsList = scopedVarsList
                .filter(([name, data]) => data.vis === VariableVisibility.EXPORT && !data.internal)
                .map(([name, data]) => [name, data.data] as const);

            const dt = new Module(new Map(publicScopedVarsList));
            const stmt = new CreateModule(ctx, innerValues);
            return new VEO(dt, stmt);
        });
    }

    visitSelectStmt(ctx: SelectStmtContext) {
        const selectVisitor = new SelectASTGenerator(this);
        return this.variableManager.withNewScope(() => selectVisitor.visit(ctx));
        // return selectVisitor.visit(ctx);
    }

    visitPlotStmt(ctx: PlotStmtContext) {
        return new PlotASTGenerator(this).visit(ctx);
    }

    visitActionStmt(ctx: ActionStmtContext) {
        const res = this.visitChildren(ctx);
        // console.debug('G', res);
        return res;
    }

    // visitBasicStringLiteral(ctx: BasicStringLiteralContext) {

    visitLiteral(ctx: LiteralContext) {
        // console.debug('I was called');
        const dt = new Singular(ctx.dt);

        const node = new Literal(ctx, ctx.text, ctx.dt);
        return new VEO(dt, node);
    }

    visitDeclarations(ctx: DeclarationsContext) {
        // console.log('BEING CALEED');
        const declVisitor = new DeclarationGeneration(this).visit(ctx);
        return null;
    }

    /** Visit and return AST */
    public getAST(): AST {
        this.visit(this.rootContext);
        return this.ast;
    }
}
/**
 * This interface helps simplify the interface and keeps things simple
 * Use:
 * const x:ASTGen = new ASTGenerator(...);
 */
export interface ASTGen extends ErrorManagerContainer {
    getAST(): AST;
}

export interface ErrorManagerContainer {
    get errorManager(): ErrorManager;
}
