import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { DataType } from '../../../ast/data/base/DataType';
import { Col } from '../../../ast/data/Col';
import { Layout } from '../../../ast/data/Layout';
import { Table } from '../../../ast/data/Table';
import { DataMetaData, DataVisualization } from '../../../ast/symbol/VariableTable';
import { VariableVisibility } from '../../../misc/ast/VariableVisibility';
import {
    ColDefContext,
    LayoutDeclarationContext,
    PlotDeclarationContext,
    TableDeclarationContext,
    TrainDeclarationContext,
} from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import { VEOMaybe } from '../../../misc/holders/VEO';
import { getLiteralStringText } from '../../../misc/lib/formatting';
// import { HSQLVisitor } from '../../../lib';
import { ASTGenerator } from '../ASTGenerator';
import { ColDefsASTGenerator } from './ColDefASTGenerator';

/**
 * Generate an AST for declaration definitions
 */
export class DeclarationGeneration extends AbstractParseTreeVisitor<VEOMaybe> implements HSQLVisitor<VEOMaybe> {
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
        const strings = ctx.STRING().map(e => getLiteralStringText(e));
        return null;
    }
}
