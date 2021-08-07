import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import format from 'string-template';
import { DataType, EDataType } from '../../../ast/data/base/DataType';
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
    OneShotTrainDeclarationContext,
    PlotDeclarationContext,
    TableDeclarationContext,
    TableDeclarationSegmentContext,
    TrainDeclarationContext,
} from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import { getLiteralStringText } from '../../../misc/lib/formatting';
import rs from '../../../misc/strings/resultStrings';
import { ASTGenerator } from '../ASTGenerator';
import { ColDefsASTGenerator } from './ColDefASTGenerator';
import { Singular } from '../../../ast/data/Singular';
import { TrainVar, TrainVarType } from '../../../misc/ast/TrainType';
import { isDataType } from '../../../ast/data/base/typechecks/isDataType';
import { QualifiedIdentifier } from '../../../misc/ast/QualifiedIdentifier';
import { Any } from '../../../ast/data/Any';
import { CollectionType } from '../../../ast/data/base/CollectionType';

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
        const plotName = ctx.IDENTIFIER().text;
        const res = this.parent.variableManager.addVisualizationDeclaration(
            plotName,

            DataVisualization(templateExpression, true)
        );
        if (res === false)
            this.parent.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.existsError, plotName), ctx));
        return null;
    }

    visitTrainDeclaration(ctx: TrainDeclarationContext) {
        const [trainStmtFormat, predictStmtFormat] = ctx.STRING().map(e => getLiteralStringText(e));
        const { willDiscrete } = ctx.declarationModelType();

        const [modelReturnTable, predictReturnTable] = ctx.tableDeclarationSegment().map(e => {
            const childRes = e.accept(this);
            // it should never be null, this might be caused by some syntax error.
            if (childRes === null || !isDataType(childRes.dt, EDataType.TABLE, true)) {
                return this.parent.errorManager.halt(
                    TranslationIssue.semanticErrorToken(format(rs.unexpectedErrorTagged, rs.emptyAST), e)
                );
            } else {
                return childRes.dt;
            }
        });

        const trainOptions: Map<string, DataType> = new Map();
        ctx.declarationModelOptions()
            .declarationModelOption()
            .forEach(e => {
                const { dt } = e.dataType();
                const { text: name } = e.IDENTIFIER();
                const nameLower = name.toLowerCase();
                if (trainOptions.has(nameLower)) {
                    this.parent.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.existsError, name), e));
                }

                trainOptions.set(nameLower, new Singular(dt));
            });

        const importList: Set<string> = new Set();

        const imports = ctx
            .modelImportSegment()
            .definition()
            .map(e => {
                const definition = QualifiedIdentifier.fromGrammar(e);
                const defString = definition.toString();
                const defStringLowerCase = defString.toLowerCase();
                if (importList.has(defStringLowerCase)) {
                    this.parent.errorManager.push(
                        TranslationIssue.semanticErrorToken(format(rs.existsError, defString), e)
                    );
                } else {
                    importList.add(defStringLowerCase);
                }

                return definition;
            });

        const internal = ctx.modelUseSegment().isInternal;
        const internalName = ctx.modelUseSegment().definition();
        const internalNameQid = internalName != undefined ? QualifiedIdentifier.fromGrammar(internalName) : undefined;
        // wrap into object
        const trainVar: TrainVar = {
            type: TrainVarType.DEFAULT,
            exported: true,
            isDiscrete: willDiscrete,
            makeTemplate: trainStmtFormat,
            makeResult: modelReturnTable,
            predictTemplate: predictStmtFormat,
            predictResult: predictReturnTable,
            declarationOpts: trainOptions,
            internal,
            toImport: internalNameQid,
            importList: imports,
        };

        const trainName = ctx.IDENTIFIER().text;
        const res = this.parent.variableManager.addTrainDeclaration(trainName, trainVar);
        if (res === false)
            this.parent.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.existsError, trainName), ctx));
        return null;
    }

    visitOneShotTrainDeclaration(ctx: OneShotTrainDeclarationContext) {
        const trainStmtFormat = getLiteralStringText(ctx.STRING());
        const { willDiscrete } = ctx.declarationModelType();

        const tableDeclCtx = ctx.tableDeclarationSegment();
        const childRes = tableDeclCtx.accept(this);

        let predictReturnTable: Table;
        // it should never be null, this might be caused by some syntax error.
        if (childRes === null || !isDataType(childRes.dt, EDataType.TABLE, true)) {
            return this.parent.errorManager.halt(
                TranslationIssue.semanticErrorToken(format(rs.unexpectedErrorTagged, rs.emptyAST), tableDeclCtx)
            );
        } else {
            predictReturnTable = childRes.dt;
        }

        const trainOptions: Map<string, DataType> = new Map();
        ctx.declarationModelOptions()
            .declarationModelOption()
            .forEach(e => {
                const { dt } = e.dataType();
                const { text: name } = e.IDENTIFIER();
                const nameLower = name.toLowerCase();
                if (trainOptions.has(nameLower)) {
                    this.parent.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.existsError, name), e));
                }

                trainOptions.set(nameLower, new Singular(dt));
            });

        const importList: Set<string> = new Set();

        const imports = ctx
            .modelImportSegment()
            .definition()
            .map(e => {
                const definition = QualifiedIdentifier.fromGrammar(e);
                const defString = definition.toString();
                const defStringLowerCase = defString.toLowerCase();
                if (importList.has(defStringLowerCase)) {
                    this.parent.errorManager.push(
                        TranslationIssue.semanticErrorToken(format(rs.existsError, defString), e)
                    );
                } else {
                    importList.add(defStringLowerCase);
                }

                return definition;
            });

        const internal = ctx.modelUseSegment().isInternal;
        const internalName = ctx.modelUseSegment().definition();
        const internalNameQid = internalName != undefined ? QualifiedIdentifier.fromGrammar(internalName) : undefined;
        // wrap into object
        const trainVar: TrainVar = {
            type: TrainVarType.ONESHOT,
            exported: true,
            isDiscrete: willDiscrete,
            predictTemplate: trainStmtFormat,
            predictResult: predictReturnTable,
            declarationOpts: trainOptions,
            internal,
            toImport: internalNameQid,
            importList: imports,
        };

        const trainName = ctx.IDENTIFIER().text;
        const res = this.parent.variableManager.addTrainDeclaration(trainName, trainVar);
        if (res === false)
            this.parent.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.existsError, trainName), ctx));
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
