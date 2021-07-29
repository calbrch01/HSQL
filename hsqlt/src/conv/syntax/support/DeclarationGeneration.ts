import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import format from 'string-template';
import { DataType } from '../../../ast/data/base/DataType';
import { Col } from '../../../ast/data/Col';
import { Layout } from '../../../ast/data/Layout';
import { AnyTable, Table } from '../../../ast/data/Table';
import { DataMetaData } from '../../../ast/symbol/VariableTable';
import { DataVisualization } from '../../../misc/ast/DataVisualization';
import { TranslationIssue } from '../../../managers/ErrorManager';
import { VariableVisibility } from '../../../misc/ast/VariableVisibility';
import {
    AnyTableDeclarationContext,
    ColDefContext,
    FixedTableDeclarationContext,
    LayoutDeclarationContext,
    LayoutStmtContext,
    PlotDeclarationContext,
    TableDeclarationContext,
    TableDeclarationSegmentContext,
    TrainDeclarationContext,
} from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import { VEOMaybe } from '../../../misc/holders/VEO';
import { getLiteralStringText } from '../../../misc/lib/formatting';
import resultStrings from '../../../misc/strings/resultStrings';
// import { HSQLVisitor } from '../../../lib';
import { ASTGenerator } from '../ASTGenerator';
import { ColDefsASTGenerator } from './ColDefASTGenerator';

/**
 * Generate an AST for declaration definitions
 */
export class DeclarationGeneration
    extends AbstractParseTreeVisitor<{ dt: DataType } | null>
    implements HSQLVisitor<{ dt: DataType } | null>
{
    protected colDefsASTGenerator: ColDefsASTGenerator;
    protected defaultResult(): null {
        return null;
    }
    constructor(protected parent: ASTGenerator) {
        super();
        this.colDefsASTGenerator = new ColDefsASTGenerator();
    }

    visitTableDeclaration(ctx: TableDeclarationContext) {
        // get coldefs, visit them and get their data

        const entries = this.colDefsASTGenerator.visit(ctx.colDefs());

        const table: Table = new Table(new Map(entries));

        const text = ctx.IDENTIFIER().text;
        this.parent.variableManager.add(text, DataMetaData(table, VariableVisibility.EXPORT));

        // this.parent.variableManager.add()
        return null;
    }

    visitLayoutDeclaration(ctx: LayoutDeclarationContext) {
        // get coldefs, visit them and get their data
        const entries = this.colDefsASTGenerator.visit(ctx.colDefs());

        const layout: Layout = new Layout(new Map(entries));

        const text = ctx.IDENTIFIER().text;
        this.parent.variableManager.add(text, DataMetaData(layout, VariableVisibility.EXPORT));

        // this.parent.variableManager.add()
        return null;
    }

    visitPlotDeclaration(ctx: PlotDeclarationContext) {
        // put escapes into consideration, and strip out the first and last quote
        // const templateExpression = ctx.STRING().text.replace(/\\'/g, "'").slice(1, -1);
        const templateExpression = getLiteralStringText(ctx.STRING());
        this.parent.variableManager.addVisualizationDeclaration(
            ctx.IDENTIFIER().text,

            DataVisualization(templateExpression, true)
        );
        return null;
    }

    visitTrainDeclaration(ctx: TrainDeclarationContext) {
        const [trainStmtFormat, predictStmtFormat] = ctx.STRING().map(e => getLiteralStringText(e));
        const { declarationIsReal: isReal } = ctx.declarationModelType();
        const [modelReturnTable, predictReturnTable] = ctx.tableDeclarationSegment().map(e => {
            const childRes = e.accept(this);
            if (childRes === null) {
                return this.parent.errorManager.halt(
                    TranslationIssue.semanticErrorToken(
                        format(resultStrings.unexpectedErrorTagged, resultStrings.emptyAST),
                        e
                    )
                );
            } else {
                return childRes.dt;
            }
        });
        return null;
    }

    visitFixedTableDeclaration(ctx: FixedTableDeclarationContext) {
        const entries = this.colDefsASTGenerator.visit(ctx.colDefs());

        const dt: Table = new Table(new Map(entries));
        return { dt };
    }
    visitAnyTableDeclaration(ctx: AnyTableDeclarationContext) {
        return { dt: new AnyTable() };
    }

    visitLayoutStmt(ctx: LayoutStmtContext) {
        const entries = this.colDefsASTGenerator.visit(ctx.layoutContent());

        const dt: Table = new Table(new Map(entries));
        return { dt };
    }
}
