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
} from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
// import { HSQLVisitor } from '../../../lib';
import { ASTGenerator } from '../ASTGenerator';

/**
 * Generate an AST for declaration definitions
 */
export class DeclarationGeneration
    extends AbstractParseTreeVisitor<readonly [string, DataType] | undefined>
    implements HSQLVisitor<readonly [string, DataType] | undefined>
{
    // protected parent:ASTGenerator;
    protected defaultResult(): undefined {
        return undefined;
    }
    constructor(protected parent: ASTGenerator) {
        super();
    }

    visitColDef(ctx: ColDefContext) {
        return [ctx.IDENTIFIER().text, new Col(ctx.dataType().dt)] as const;
    }
    visitTableDeclaration(ctx: TableDeclarationContext) {
        const entries = ctx
            .colDefs()
            .colDef()
            // .map(e => e.accept(this))
            .reduce((t, e, i) => {
                const res = this.visit(e); //e.accept(this);
                if (res === undefined) return t;
                else {
                    const y = [...t, res];
                    // safe, syntax allows it
                    return y as [string, Col][];
                }
            }, [] as [string, Col][]);

        const table: Table = new Table(new Map(entries));

        const text = ctx.IDENTIFIER().text;
        this.parent.variableManager.add(text, DataMetaData(table, VariableVisibility.EXPORT));

        // this.parent.variableManager.add()
        return undefined;
    }

    visitLayoutDeclaration(ctx: LayoutDeclarationContext) {
        const entries = ctx
            .colDefs()
            .colDef()
            // .map(e => e.accept(this))
            .reduce((t, e, i) => {
                const res = this.visit(e); //e.accept(this);
                if (res === undefined) return t;
                else {
                    const y = [...t, res];
                    // safe, syntax allows it
                    return y as [string, Col][];
                }
            }, [] as [string, Col][]);

        const table: Layout = new Layout(new Map(entries));

        const text = ctx.IDENTIFIER().text;
        this.parent.variableManager.add(text, DataMetaData(table, VariableVisibility.EXPORT));

        // this.parent.variableManager.add()
        return undefined;
    }

    visitPlotDeclaration(ctx: PlotDeclarationContext) {
        // put escapes into consideration, and strip out the first and last quote
        const templateExpression = ctx.STRING().text.replace(/\\'/g, "'").slice(1, -1);
        this.parent.variableManager.addVisualizationDeclaration(
            ctx.IDENTIFIER().text,

            DataVisualization(templateExpression, true)
        );
        return undefined;
    }
}
