// Generated from grammar/HSQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ComparisonContext } from "./HSQLParser";
import { BetweenContext } from "./HSQLParser";
import { InListContext } from "./HSQLParser";
import { DecimalLiteralContext } from "./HSQLParser";
import { DoubleLiteralContext } from "./HSQLParser";
import { IntegerLiteralContext } from "./HSQLParser";
import { ValueExpressionDefaultContext } from "./HSQLParser";
import { BasicStringLiteralContext } from "./HSQLParser";
import { UnicodeStringLiteralContext } from "./HSQLParser";
import { IdentifierContext } from "./HSQLParser";
import { NumericLiteralContext } from "./HSQLParser";
import { BooleanLiteralContext } from "./HSQLParser";
import { StringLiteralContext } from "./HSQLParser";
import { ParenthesizedExpressionContext } from "./HSQLParser";
import { PredicatedContext } from "./HSQLParser";
import { LogicalNotContext } from "./HSQLParser";
import { LogicalBinaryContext } from "./HSQLParser";
import { ProgramContext } from "./HSQLParser";
import { CompletestmtContext } from "./HSQLParser";
import { StmtContext } from "./HSQLParser";
import { AssignStmtContext } from "./HSQLParser";
import { ActionStmtContext } from "./HSQLParser";
import { TypeDefStmtContext } from "./HSQLParser";
import { TypeDefExportContext } from "./HSQLParser";
import { MapExportableContext } from "./HSQLParser";
import { TableExportContext } from "./HSQLParser";
import { LayoutExportContext } from "./HSQLParser";
import { IdentifierExportContext } from "./HSQLParser";
import { ImportStmtContext } from "./HSQLParser";
import { ImplicitActionStmtContext } from "./HSQLParser";
import { ExprContext } from "./HSQLParser";
import { SimpleIdentifierContext } from "./HSQLParser";
import { OutputStmtContext } from "./HSQLParser";
import { OutputVariantContext } from "./HSQLParser";
import { NamedOutputStatementContext } from "./HSQLParser";
import { FileOutputStatementContext } from "./HSQLParser";
import { OutputUpdateOptionContext } from "./HSQLParser";
import { OutputExpireOptionContext } from "./HSQLParser";
import { PlotStmtContext } from "./HSQLParser";
import { MlStmtContext } from "./HSQLParser";
import { TrainContext } from "./HSQLParser";
import { ElementaryMLContext } from "./HSQLParser";
import { TrainOptionsContext } from "./HSQLParser";
import { TrainOptionContext } from "./HSQLParser";
import { TrainValueContext } from "./HSQLParser";
import { PredictContext } from "./HSQLParser";
import { SelectStmtContext } from "./HSQLParser";
import { JoinClauseContext } from "./HSQLParser";
import { JoinTypeContext } from "./HSQLParser";
import { SelectColumnsContext } from "./HSQLParser";
import { AggregatedSelectColumnContext } from "./HSQLParser";
import { SelectColumnContext } from "./HSQLParser";
import { SelectFromClauseContext } from "./HSQLParser";
import { NestedSelectStmtContext } from "./HSQLParser";
import { SelectDatasetContext } from "./HSQLParser";
import { SelectDatasetFileContext } from "./HSQLParser";
import { SelectTableNameContext } from "./HSQLParser";
import { SelectWhereClauseContext } from "./HSQLParser";
import { OrderByClauseContext } from "./HSQLParser";
import { SortItemContext } from "./HSQLParser";
import { AscSortItemContext } from "./HSQLParser";
import { DescSortItemContext } from "./HSQLParser";
import { GroupByClauseContext } from "./HSQLParser";
import { LayoutStmtContext } from "./HSQLParser";
import { LayoutContentContext } from "./HSQLParser";
import { InlineStmtContext } from "./HSQLParser";
import { QualifiedIdentifierContext } from "./HSQLParser";
import { DataTypeContext } from "./HSQLParser";
import { ExpressionContext } from "./HSQLParser";
import { BooleanExpressionContext } from "./HSQLParser";
import { PredicateContext } from "./HSQLParser";
import { ValueExpressionContext } from "./HSQLParser";
import { PrimaryExpressionContext } from "./HSQLParser";
import { NumberContext } from "./HSQLParser";
import { StringContext } from "./HSQLParser";
import { BooleanValueContext } from "./HSQLParser";
import { ComparisonOperatorContext } from "./HSQLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HSQLParser`.
 */
export interface HSQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `comparison`
	 * labeled alternative in `HSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `comparison`
	 * labeled alternative in `HSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `between`
	 * labeled alternative in `HSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterBetween?: (ctx: BetweenContext) => void;
	/**
	 * Exit a parse tree produced by the `between`
	 * labeled alternative in `HSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitBetween?: (ctx: BetweenContext) => void;

	/**
	 * Enter a parse tree produced by the `inList`
	 * labeled alternative in `HSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterInList?: (ctx: InListContext) => void;
	/**
	 * Exit a parse tree produced by the `inList`
	 * labeled alternative in `HSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitInList?: (ctx: InListContext) => void;

	/**
	 * Enter a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `HSQLParser.number`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `HSQLParser.number`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `HSQLParser.number`.
	 * @param ctx the parse tree
	 */
	enterDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `HSQLParser.number`.
	 * @param ctx the parse tree
	 */
	exitDoubleLiteral?: (ctx: DoubleLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `integerLiteral`
	 * labeled alternative in `HSQLParser.number`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `HSQLParser.number`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `HSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `HSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `HSQLParser.string`.
	 * @param ctx the parse tree
	 */
	enterBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `HSQLParser.string`.
	 * @param ctx the parse tree
	 */
	exitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `HSQLParser.string`.
	 * @param ctx the parse tree
	 */
	enterUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `HSQLParser.string`.
	 * @param ctx the parse tree
	 */
	exitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `identifier`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `identifier`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `numericLiteral`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `stringLiteral`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `predicated`
	 * labeled alternative in `HSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterPredicated?: (ctx: PredicatedContext) => void;
	/**
	 * Exit a parse tree produced by the `predicated`
	 * labeled alternative in `HSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitPredicated?: (ctx: PredicatedContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalNot`
	 * labeled alternative in `HSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNot`
	 * labeled alternative in `HSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNot?: (ctx: LogicalNotContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalBinary`
	 * labeled alternative in `HSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `HSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.completestmt`.
	 * @param ctx the parse tree
	 */
	enterCompletestmt?: (ctx: CompletestmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.completestmt`.
	 * @param ctx the parse tree
	 */
	exitCompletestmt?: (ctx: CompletestmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.assignStmt`.
	 * @param ctx the parse tree
	 */
	enterAssignStmt?: (ctx: AssignStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.assignStmt`.
	 * @param ctx the parse tree
	 */
	exitAssignStmt?: (ctx: AssignStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.actionStmt`.
	 * @param ctx the parse tree
	 */
	enterActionStmt?: (ctx: ActionStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.actionStmt`.
	 * @param ctx the parse tree
	 */
	exitActionStmt?: (ctx: ActionStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.typeDefStmt`.
	 * @param ctx the parse tree
	 */
	enterTypeDefStmt?: (ctx: TypeDefStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.typeDefStmt`.
	 * @param ctx the parse tree
	 */
	exitTypeDefStmt?: (ctx: TypeDefStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.typeDefExport`.
	 * @param ctx the parse tree
	 */
	enterTypeDefExport?: (ctx: TypeDefExportContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.typeDefExport`.
	 * @param ctx the parse tree
	 */
	exitTypeDefExport?: (ctx: TypeDefExportContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.mapExportable`.
	 * @param ctx the parse tree
	 */
	enterMapExportable?: (ctx: MapExportableContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.mapExportable`.
	 * @param ctx the parse tree
	 */
	exitMapExportable?: (ctx: MapExportableContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.tableExport`.
	 * @param ctx the parse tree
	 */
	enterTableExport?: (ctx: TableExportContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.tableExport`.
	 * @param ctx the parse tree
	 */
	exitTableExport?: (ctx: TableExportContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.layoutExport`.
	 * @param ctx the parse tree
	 */
	enterLayoutExport?: (ctx: LayoutExportContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.layoutExport`.
	 * @param ctx the parse tree
	 */
	exitLayoutExport?: (ctx: LayoutExportContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.identifierExport`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExport?: (ctx: IdentifierExportContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.identifierExport`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExport?: (ctx: IdentifierExportContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.importStmt`.
	 * @param ctx the parse tree
	 */
	enterImportStmt?: (ctx: ImportStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.importStmt`.
	 * @param ctx the parse tree
	 */
	exitImportStmt?: (ctx: ImportStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.implicitActionStmt`.
	 * @param ctx the parse tree
	 */
	enterImplicitActionStmt?: (ctx: ImplicitActionStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.implicitActionStmt`.
	 * @param ctx the parse tree
	 */
	exitImplicitActionStmt?: (ctx: ImplicitActionStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.simpleIdentifier`.
	 * @param ctx the parse tree
	 */
	enterSimpleIdentifier?: (ctx: SimpleIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.simpleIdentifier`.
	 * @param ctx the parse tree
	 */
	exitSimpleIdentifier?: (ctx: SimpleIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.outputStmt`.
	 * @param ctx the parse tree
	 */
	enterOutputStmt?: (ctx: OutputStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.outputStmt`.
	 * @param ctx the parse tree
	 */
	exitOutputStmt?: (ctx: OutputStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.outputVariant`.
	 * @param ctx the parse tree
	 */
	enterOutputVariant?: (ctx: OutputVariantContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.outputVariant`.
	 * @param ctx the parse tree
	 */
	exitOutputVariant?: (ctx: OutputVariantContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.namedOutputStatement`.
	 * @param ctx the parse tree
	 */
	enterNamedOutputStatement?: (ctx: NamedOutputStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.namedOutputStatement`.
	 * @param ctx the parse tree
	 */
	exitNamedOutputStatement?: (ctx: NamedOutputStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.fileOutputStatement`.
	 * @param ctx the parse tree
	 */
	enterFileOutputStatement?: (ctx: FileOutputStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.fileOutputStatement`.
	 * @param ctx the parse tree
	 */
	exitFileOutputStatement?: (ctx: FileOutputStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.outputUpdateOption`.
	 * @param ctx the parse tree
	 */
	enterOutputUpdateOption?: (ctx: OutputUpdateOptionContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.outputUpdateOption`.
	 * @param ctx the parse tree
	 */
	exitOutputUpdateOption?: (ctx: OutputUpdateOptionContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.outputExpireOption`.
	 * @param ctx the parse tree
	 */
	enterOutputExpireOption?: (ctx: OutputExpireOptionContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.outputExpireOption`.
	 * @param ctx the parse tree
	 */
	exitOutputExpireOption?: (ctx: OutputExpireOptionContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.plotStmt`.
	 * @param ctx the parse tree
	 */
	enterPlotStmt?: (ctx: PlotStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.plotStmt`.
	 * @param ctx the parse tree
	 */
	exitPlotStmt?: (ctx: PlotStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.mlStmt`.
	 * @param ctx the parse tree
	 */
	enterMlStmt?: (ctx: MlStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.mlStmt`.
	 * @param ctx the parse tree
	 */
	exitMlStmt?: (ctx: MlStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.train`.
	 * @param ctx the parse tree
	 */
	enterTrain?: (ctx: TrainContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.train`.
	 * @param ctx the parse tree
	 */
	exitTrain?: (ctx: TrainContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.elementaryML`.
	 * @param ctx the parse tree
	 */
	enterElementaryML?: (ctx: ElementaryMLContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.elementaryML`.
	 * @param ctx the parse tree
	 */
	exitElementaryML?: (ctx: ElementaryMLContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.trainOptions`.
	 * @param ctx the parse tree
	 */
	enterTrainOptions?: (ctx: TrainOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.trainOptions`.
	 * @param ctx the parse tree
	 */
	exitTrainOptions?: (ctx: TrainOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.trainOption`.
	 * @param ctx the parse tree
	 */
	enterTrainOption?: (ctx: TrainOptionContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.trainOption`.
	 * @param ctx the parse tree
	 */
	exitTrainOption?: (ctx: TrainOptionContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.trainValue`.
	 * @param ctx the parse tree
	 */
	enterTrainValue?: (ctx: TrainValueContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.trainValue`.
	 * @param ctx the parse tree
	 */
	exitTrainValue?: (ctx: TrainValueContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.predict`.
	 * @param ctx the parse tree
	 */
	enterPredict?: (ctx: PredictContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.predict`.
	 * @param ctx the parse tree
	 */
	exitPredict?: (ctx: PredictContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.selectStmt`.
	 * @param ctx the parse tree
	 */
	enterSelectStmt?: (ctx: SelectStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.selectStmt`.
	 * @param ctx the parse tree
	 */
	exitSelectStmt?: (ctx: SelectStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.joinClause`.
	 * @param ctx the parse tree
	 */
	enterJoinClause?: (ctx: JoinClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.joinClause`.
	 * @param ctx the parse tree
	 */
	exitJoinClause?: (ctx: JoinClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.joinType`.
	 * @param ctx the parse tree
	 */
	enterJoinType?: (ctx: JoinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.joinType`.
	 * @param ctx the parse tree
	 */
	exitJoinType?: (ctx: JoinTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.selectColumns`.
	 * @param ctx the parse tree
	 */
	enterSelectColumns?: (ctx: SelectColumnsContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.selectColumns`.
	 * @param ctx the parse tree
	 */
	exitSelectColumns?: (ctx: SelectColumnsContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.aggregatedSelectColumn`.
	 * @param ctx the parse tree
	 */
	enterAggregatedSelectColumn?: (ctx: AggregatedSelectColumnContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.aggregatedSelectColumn`.
	 * @param ctx the parse tree
	 */
	exitAggregatedSelectColumn?: (ctx: AggregatedSelectColumnContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.selectColumn`.
	 * @param ctx the parse tree
	 */
	enterSelectColumn?: (ctx: SelectColumnContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.selectColumn`.
	 * @param ctx the parse tree
	 */
	exitSelectColumn?: (ctx: SelectColumnContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.selectFromClause`.
	 * @param ctx the parse tree
	 */
	enterSelectFromClause?: (ctx: SelectFromClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.selectFromClause`.
	 * @param ctx the parse tree
	 */
	exitSelectFromClause?: (ctx: SelectFromClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.nestedSelectStmt`.
	 * @param ctx the parse tree
	 */
	enterNestedSelectStmt?: (ctx: NestedSelectStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.nestedSelectStmt`.
	 * @param ctx the parse tree
	 */
	exitNestedSelectStmt?: (ctx: NestedSelectStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.selectDataset`.
	 * @param ctx the parse tree
	 */
	enterSelectDataset?: (ctx: SelectDatasetContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.selectDataset`.
	 * @param ctx the parse tree
	 */
	exitSelectDataset?: (ctx: SelectDatasetContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.selectDatasetFile`.
	 * @param ctx the parse tree
	 */
	enterSelectDatasetFile?: (ctx: SelectDatasetFileContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.selectDatasetFile`.
	 * @param ctx the parse tree
	 */
	exitSelectDatasetFile?: (ctx: SelectDatasetFileContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.selectTableName`.
	 * @param ctx the parse tree
	 */
	enterSelectTableName?: (ctx: SelectTableNameContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.selectTableName`.
	 * @param ctx the parse tree
	 */
	exitSelectTableName?: (ctx: SelectTableNameContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.selectWhereClause`.
	 * @param ctx the parse tree
	 */
	enterSelectWhereClause?: (ctx: SelectWhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.selectWhereClause`.
	 * @param ctx the parse tree
	 */
	exitSelectWhereClause?: (ctx: SelectWhereClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.orderByClause`.
	 * @param ctx the parse tree
	 */
	enterOrderByClause?: (ctx: OrderByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.orderByClause`.
	 * @param ctx the parse tree
	 */
	exitOrderByClause?: (ctx: OrderByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.sortItem`.
	 * @param ctx the parse tree
	 */
	enterSortItem?: (ctx: SortItemContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.sortItem`.
	 * @param ctx the parse tree
	 */
	exitSortItem?: (ctx: SortItemContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.ascSortItem`.
	 * @param ctx the parse tree
	 */
	enterAscSortItem?: (ctx: AscSortItemContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.ascSortItem`.
	 * @param ctx the parse tree
	 */
	exitAscSortItem?: (ctx: AscSortItemContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.descSortItem`.
	 * @param ctx the parse tree
	 */
	enterDescSortItem?: (ctx: DescSortItemContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.descSortItem`.
	 * @param ctx the parse tree
	 */
	exitDescSortItem?: (ctx: DescSortItemContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	enterGroupByClause?: (ctx: GroupByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	exitGroupByClause?: (ctx: GroupByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.layoutStmt`.
	 * @param ctx the parse tree
	 */
	enterLayoutStmt?: (ctx: LayoutStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.layoutStmt`.
	 * @param ctx the parse tree
	 */
	exitLayoutStmt?: (ctx: LayoutStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.layoutContent`.
	 * @param ctx the parse tree
	 */
	enterLayoutContent?: (ctx: LayoutContentContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.layoutContent`.
	 * @param ctx the parse tree
	 */
	exitLayoutContent?: (ctx: LayoutContentContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.inlineStmt`.
	 * @param ctx the parse tree
	 */
	enterInlineStmt?: (ctx: InlineStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.inlineStmt`.
	 * @param ctx the parse tree
	 */
	exitInlineStmt?: (ctx: InlineStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.qualifiedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.qualifiedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterDataType?: (ctx: DataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitDataType?: (ctx: DataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpression?: (ctx: ValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpression?: (ctx: ValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
}

