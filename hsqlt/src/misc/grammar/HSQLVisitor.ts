// Generated from grammar/HSQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SelectAggregatedEverythingColContext } from "./HSQLParser";
import { SelectAggregatedOneColContext } from "./HSQLParser";
import { SelectOneColContext } from "./HSQLParser";
import { SelectWildContext } from "./HSQLParser";
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
import { InnerJoinContext } from "./HSQLParser";
import { OuterJoinContext } from "./HSQLParser";
import { FullOuterJoinContext } from "./HSQLParser";
import { ProgramContext } from "./HSQLParser";
import { CompletestmtContext } from "./HSQLParser";
import { StmtContext } from "./HSQLParser";
import { ActionStmtContext } from "./HSQLParser";
import { AssignStmtContext } from "./HSQLParser";
import { TypeDefStmtContext } from "./HSQLParser";
import { TypeDefExportContext } from "./HSQLParser";
import { MapExportableContext } from "./HSQLParser";
import { TableExportContext } from "./HSQLParser";
import { LayoutExportContext } from "./HSQLParser";
import { IdentifierExportContext } from "./HSQLParser";
import { ImportStmtContext } from "./HSQLParser";
import { ExprContext } from "./HSQLParser";
import { SimpleIdentifierContext } from "./HSQLParser";
import { OutputStmtContext } from "./HSQLParser";
import { OutputVariantContext } from "./HSQLParser";
import { NamedOutputStatementContext } from "./HSQLParser";
import { NamedOutputStringContext } from "./HSQLParser";
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
import { SelectColContext } from "./HSQLParser";
import { ColContext } from "./HSQLParser";
import { AliasingColContext } from "./HSQLParser";
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
import { OverQualifiedIdentifierContext } from "./HSQLParser";
import { OverIdentifierContext } from "./HSQLParser";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HSQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface HSQLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `selectAggregatedEverythingCol`
	 * labeled alternative in `HSQLParser.col`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectAggregatedEverythingCol?: (ctx: SelectAggregatedEverythingColContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectAggregatedOneCol`
	 * labeled alternative in `HSQLParser.col`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectAggregatedOneCol?: (ctx: SelectAggregatedOneColContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectOneCol`
	 * labeled alternative in `HSQLParser.col`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectOneCol?: (ctx: SelectOneColContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectWild`
	 * labeled alternative in `HSQLParser.col`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectWild?: (ctx: SelectWildContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `HSQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `between`
	 * labeled alternative in `HSQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetween?: (ctx: BetweenContext) => Result;

	/**
	 * Visit a parse tree produced by the `inList`
	 * labeled alternative in `HSQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInList?: (ctx: InListContext) => Result;

	/**
	 * Visit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `HSQLParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `HSQLParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoubleLiteral?: (ctx: DoubleLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `HSQLParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `HSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `HSQLParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `HSQLParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifier`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `predicated`
	 * labeled alternative in `HSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `HSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `HSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `innerJoin`
	 * labeled alternative in `HSQLParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerJoin?: (ctx: InnerJoinContext) => Result;

	/**
	 * Visit a parse tree produced by the `outerJoin`
	 * labeled alternative in `HSQLParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOuterJoin?: (ctx: OuterJoinContext) => Result;

	/**
	 * Visit a parse tree produced by the `fullOuterJoin`
	 * labeled alternative in `HSQLParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullOuterJoin?: (ctx: FullOuterJoinContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.completestmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompletestmt?: (ctx: CompletestmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.actionStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionStmt?: (ctx: ActionStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.assignStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStmt?: (ctx: AssignStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.typeDefStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDefStmt?: (ctx: TypeDefStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.typeDefExport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDefExport?: (ctx: TypeDefExportContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.mapExportable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapExportable?: (ctx: MapExportableContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.tableExport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableExport?: (ctx: TableExportContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.layoutExport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLayoutExport?: (ctx: LayoutExportContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.identifierExport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExport?: (ctx: IdentifierExportContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.importStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStmt?: (ctx: ImportStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.simpleIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleIdentifier?: (ctx: SimpleIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.outputStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputStmt?: (ctx: OutputStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.outputVariant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputVariant?: (ctx: OutputVariantContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.namedOutputStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedOutputStatement?: (ctx: NamedOutputStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.namedOutputString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedOutputString?: (ctx: NamedOutputStringContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.fileOutputStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFileOutputStatement?: (ctx: FileOutputStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.outputUpdateOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputUpdateOption?: (ctx: OutputUpdateOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.outputExpireOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputExpireOption?: (ctx: OutputExpireOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.plotStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlotStmt?: (ctx: PlotStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.mlStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMlStmt?: (ctx: MlStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.train`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrain?: (ctx: TrainContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.elementaryML`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementaryML?: (ctx: ElementaryMLContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.trainOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrainOptions?: (ctx: TrainOptionsContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.trainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrainOption?: (ctx: TrainOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.trainValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrainValue?: (ctx: TrainValueContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.predict`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredict?: (ctx: PredictContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.selectStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectStmt?: (ctx: SelectStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.joinClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinClause?: (ctx: JoinClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinType?: (ctx: JoinTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.selectColumns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectColumns?: (ctx: SelectColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.selectCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectCol?: (ctx: SelectColContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.col`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCol?: (ctx: ColContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.aliasingCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasingCol?: (ctx: AliasingColContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.selectFromClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectFromClause?: (ctx: SelectFromClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.nestedSelectStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNestedSelectStmt?: (ctx: NestedSelectStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.selectDataset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectDataset?: (ctx: SelectDatasetContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.selectDatasetFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectDatasetFile?: (ctx: SelectDatasetFileContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.selectTableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectTableName?: (ctx: SelectTableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.selectWhereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectWhereClause?: (ctx: SelectWhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.orderByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByClause?: (ctx: OrderByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.sortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortItem?: (ctx: SortItemContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.ascSortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAscSortItem?: (ctx: AscSortItemContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.descSortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescSortItem?: (ctx: DescSortItemContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.groupByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByClause?: (ctx: GroupByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.layoutStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLayoutStmt?: (ctx: LayoutStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.layoutContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLayoutContent?: (ctx: LayoutContentContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.inlineStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineStmt?: (ctx: InlineStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.overQualifiedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverQualifiedIdentifier?: (ctx: OverQualifiedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.overIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverIdentifier?: (ctx: OverIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.qualifiedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataType?: (ctx: DataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpression?: (ctx: ValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
}

