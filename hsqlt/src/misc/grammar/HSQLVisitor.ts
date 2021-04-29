// Generated from grammar/HSQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SelectAggregatedEverythingColContext } from "./HSQLParser";
import { SelectAggregatedOneColContext } from "./HSQLParser";
import { SelectOneColContext } from "./HSQLParser";
import { ComparisonContext } from "./HSQLParser";
import { BetweenContext } from "./HSQLParser";
import { InListContext } from "./HSQLParser";
import { DecimalLiteralContext } from "./HSQLParser";
import { DoubleLiteralContext } from "./HSQLParser";
import { IntegerLiteralContext } from "./HSQLParser";
import { CountAggrContext } from "./HSQLParser";
import { AvgAggrContext } from "./HSQLParser";
import { MinAggrContext } from "./HSQLParser";
import { MaxAggrContext } from "./HSQLParser";
import { SumAggrContext } from "./HSQLParser";
import { TrimAggrContext } from "./HSQLParser";
import { ValueExpressionDefaultContext } from "./HSQLParser";
import { BasicStringLiteralContext } from "./HSQLParser";
import { UnicodeStringLiteralContext } from "./HSQLParser";
import { NormalColContext } from "./HSQLParser";
import { WildAllContext } from "./HSQLParser";
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
import { DefinitionStmtContext } from "./HSQLParser";
import { ExprContext } from "./HSQLParser";
import { ActionStmtContext } from "./HSQLParser";
import { SelectStmtContext } from "./HSQLParser";
import { SelectGroupByClauseContext } from "./HSQLParser";
import { DefinitionSetContext } from "./HSQLParser";
import { SelectColumnsContext } from "./HSQLParser";
import { SelectColContext } from "./HSQLParser";
import { ColContext } from "./HSQLParser";
import { AliasingColContext } from "./HSQLParser";
import { SelectFromClauseContext } from "./HSQLParser";
import { NestedSelectStmtContext } from "./HSQLParser";
import { SelectWhereClauseContext } from "./HSQLParser";
import { GroupByClauseContext } from "./HSQLParser";
import { OrderByClauseContext } from "./HSQLParser";
import { SortItemContext } from "./HSQLParser";
import { AscSortItemContext } from "./HSQLParser";
import { DescSortItemContext } from "./HSQLParser";
import { JoinClauseContext } from "./HSQLParser";
import { JoinTypeContext } from "./HSQLParser";
import { LimitClauseContext } from "./HSQLParser";
import { OffsetClauseContext } from "./HSQLParser";
import { AggregationOperatorContext } from "./HSQLParser";
import { ComparisonOperatorContext } from "./HSQLParser";
import { LogicalOperatorContext } from "./HSQLParser";
import { LiteralContext } from "./HSQLParser";
import { DataTypeContext } from "./HSQLParser";
import { AlterOperatorContext } from "./HSQLParser";
import { OverDefinitionContext } from "./HSQLParser";
import { OverDefinitionRootContext } from "./HSQLParser";
import { OverDefinitionTailContext } from "./HSQLParser";
import { DefinitionContext } from "./HSQLParser";
import { ExpressionContext } from "./HSQLParser";
import { BooleanExpressionContext } from "./HSQLParser";
import { PredicateContext } from "./HSQLParser";
import { ValueExpressionContext } from "./HSQLParser";
import { PrimaryExpressionContext } from "./HSQLParser";
import { NumberContext } from "./HSQLParser";
import { StringContext } from "./HSQLParser";
import { BooleanValueContext } from "./HSQLParser";
import { ImportStmtContext } from "./HSQLParser";
import { OutputStmtContext } from "./HSQLParser";
import { AttributeContext } from "./HSQLParser";
import { NamedOutputContext } from "./HSQLParser";
import { ToFileContext } from "./HSQLParser";
import { PlotStmtContext } from "./HSQLParser";
import { ModuleStmtContext } from "./HSQLParser";
import { TransformStmtContext } from "./HSQLParser";
import { MlStmtContext } from "./HSQLParser";
import { TrainContext } from "./HSQLParser";
import { ElementaryMLContext } from "./HSQLParser";
import { TrainOptionsContext } from "./HSQLParser";
import { TrainOptionContext } from "./HSQLParser";
import { TrainValueContext } from "./HSQLParser";
import { PredictContext } from "./HSQLParser";
import { ScopeContext } from "./HSQLParser";


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
	 * Visit a parse tree produced by the `countAggr`
	 * labeled alternative in `HSQLParser.aggregationOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCountAggr?: (ctx: CountAggrContext) => Result;

	/**
	 * Visit a parse tree produced by the `avgAggr`
	 * labeled alternative in `HSQLParser.aggregationOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAvgAggr?: (ctx: AvgAggrContext) => Result;

	/**
	 * Visit a parse tree produced by the `minAggr`
	 * labeled alternative in `HSQLParser.aggregationOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinAggr?: (ctx: MinAggrContext) => Result;

	/**
	 * Visit a parse tree produced by the `maxAggr`
	 * labeled alternative in `HSQLParser.aggregationOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaxAggr?: (ctx: MaxAggrContext) => Result;

	/**
	 * Visit a parse tree produced by the `sumAggr`
	 * labeled alternative in `HSQLParser.aggregationOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSumAggr?: (ctx: SumAggrContext) => Result;

	/**
	 * Visit a parse tree produced by the `trimAggr`
	 * labeled alternative in `HSQLParser.aggregationOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrimAggr?: (ctx: TrimAggrContext) => Result;

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
	 * Visit a parse tree produced by the `normalCol`
	 * labeled alternative in `HSQLParser.selectCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalCol?: (ctx: NormalColContext) => Result;

	/**
	 * Visit a parse tree produced by the `wildAll`
	 * labeled alternative in `HSQLParser.selectCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildAll?: (ctx: WildAllContext) => Result;

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
	 * Visit a parse tree produced by `HSQLParser.definitionStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinitionStmt?: (ctx: DefinitionStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.actionStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionStmt?: (ctx: ActionStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.selectStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectStmt?: (ctx: SelectStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.selectGroupByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectGroupByClause?: (ctx: SelectGroupByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.definitionSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinitionSet?: (ctx: DefinitionSetContext) => Result;

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
	 * Visit a parse tree produced by `HSQLParser.selectWhereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectWhereClause?: (ctx: SelectWhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.groupByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByClause?: (ctx: GroupByClauseContext) => Result;

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
	 * Visit a parse tree produced by `HSQLParser.limitClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClause?: (ctx: LimitClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.offsetClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffsetClause?: (ctx: OffsetClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.aggregationOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregationOperator?: (ctx: AggregationOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.logicalOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOperator?: (ctx: LogicalOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataType?: (ctx: DataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.alterOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterOperator?: (ctx: AlterOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.overDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverDefinition?: (ctx: OverDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.overDefinitionRoot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverDefinitionRoot?: (ctx: OverDefinitionRootContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.overDefinitionTail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverDefinitionTail?: (ctx: OverDefinitionTailContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;

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
	 * Visit a parse tree produced by `HSQLParser.importStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStmt?: (ctx: ImportStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.outputStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputStmt?: (ctx: OutputStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.namedOutput`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedOutput?: (ctx: NamedOutputContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.toFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToFile?: (ctx: ToFileContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.plotStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlotStmt?: (ctx: PlotStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.moduleStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleStmt?: (ctx: ModuleStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.transformStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransformStmt?: (ctx: TransformStmtContext) => Result;

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
	 * Visit a parse tree produced by `HSQLParser.scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScope?: (ctx: ScopeContext) => Result;
}

