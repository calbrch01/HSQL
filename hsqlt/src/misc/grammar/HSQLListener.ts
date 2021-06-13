// Generated from grammar/HSQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SelectAggregatedEverythingColContext } from "./HSQLParser";
import { SelectAggregatedOneColContext } from "./HSQLParser";
import { SelectOneColContext } from "./HSQLParser";
import { NormalTailIdentifierContext } from "./HSQLParser";
import { ParentTailIdentifierContext } from "./HSQLParser";
import { ComparisonContext } from "./HSQLParser";
import { BetweenContext } from "./HSQLParser";
import { InListContext } from "./HSQLParser";
import { DecimalLiteralContext } from "./HSQLParser";
import { DoubleLiteralContext } from "./HSQLParser";
import { IntegerLiteralContext } from "./HSQLParser";
import { SelectFromDerivedTableContext } from "./HSQLParser";
import { SelectFromDefinitionContext } from "./HSQLParser";
import { SelectBracketedFromTableContext } from "./HSQLParser";
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
import { NormalIdentifierContext } from "./HSQLParser";
import { RootIdentifierContext } from "./HSQLParser";
import { ParentIdentifierContext } from "./HSQLParser";
import { ProgramContext } from "./HSQLParser";
import { CompletestmtContext } from "./HSQLParser";
import { StmtContext } from "./HSQLParser";
import { DefinitionStmtContext } from "./HSQLParser";
import { ExprContext } from "./HSQLParser";
import { ActionStmtContext } from "./HSQLParser";
import { SelectStmtContext } from "./HSQLParser";
import { SelectHavingClauseContext } from "./HSQLParser";
import { SelectGroupByClauseContext } from "./HSQLParser";
import { DefinitionSetContext } from "./HSQLParser";
import { SelectColumnsContext } from "./HSQLParser";
import { SelectColContext } from "./HSQLParser";
import { ColContext } from "./HSQLParser";
import { AliasingColContext } from "./HSQLParser";
import { SelectFromClauseContext } from "./HSQLParser";
import { SelectFromTableReferenceContext } from "./HSQLParser";
import { SelectAliasContext } from "./HSQLParser";
import { Join_operatorContext } from "./HSQLParser";
import { SelectWhereClauseContext } from "./HSQLParser";
import { JoinedTableContext } from "./HSQLParser";
import { JoinConstraintContext } from "./HSQLParser";
import { JoinSpecificationContext } from "./HSQLParser";
import { GroupByClauseContext } from "./HSQLParser";
import { OrderByClauseContext } from "./HSQLParser";
import { SortItemContext } from "./HSQLParser";
import { AscSortItemContext } from "./HSQLParser";
import { DescSortItemContext } from "./HSQLParser";
import { LimitOffsetClauseContext } from "./HSQLParser";
import { OffsetClauseContext } from "./HSQLParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `HSQLParser`.
 */
export interface HSQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `selectAggregatedEverythingCol`
	 * labeled alternative in `HSQLParser.col`.
	 * @param ctx the parse tree
	 */
	enterSelectAggregatedEverythingCol?: (ctx: SelectAggregatedEverythingColContext) => void;
	/**
	 * Exit a parse tree produced by the `selectAggregatedEverythingCol`
	 * labeled alternative in `HSQLParser.col`.
	 * @param ctx the parse tree
	 */
	exitSelectAggregatedEverythingCol?: (ctx: SelectAggregatedEverythingColContext) => void;

	/**
	 * Enter a parse tree produced by the `selectAggregatedOneCol`
	 * labeled alternative in `HSQLParser.col`.
	 * @param ctx the parse tree
	 */
	enterSelectAggregatedOneCol?: (ctx: SelectAggregatedOneColContext) => void;
	/**
	 * Exit a parse tree produced by the `selectAggregatedOneCol`
	 * labeled alternative in `HSQLParser.col`.
	 * @param ctx the parse tree
	 */
	exitSelectAggregatedOneCol?: (ctx: SelectAggregatedOneColContext) => void;

	/**
	 * Enter a parse tree produced by the `selectOneCol`
	 * labeled alternative in `HSQLParser.col`.
	 * @param ctx the parse tree
	 */
	enterSelectOneCol?: (ctx: SelectOneColContext) => void;
	/**
	 * Exit a parse tree produced by the `selectOneCol`
	 * labeled alternative in `HSQLParser.col`.
	 * @param ctx the parse tree
	 */
	exitSelectOneCol?: (ctx: SelectOneColContext) => void;

	/**
	 * Enter a parse tree produced by the `normalTailIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionTail`.
	 * @param ctx the parse tree
	 */
	enterNormalTailIdentifier?: (ctx: NormalTailIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `normalTailIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionTail`.
	 * @param ctx the parse tree
	 */
	exitNormalTailIdentifier?: (ctx: NormalTailIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `parentTailIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionTail`.
	 * @param ctx the parse tree
	 */
	enterParentTailIdentifier?: (ctx: ParentTailIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `parentTailIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionTail`.
	 * @param ctx the parse tree
	 */
	exitParentTailIdentifier?: (ctx: ParentTailIdentifierContext) => void;

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
	 * Enter a parse tree produced by the `selectFromDerivedTable`
	 * labeled alternative in `HSQLParser.selectFromTableReference`.
	 * @param ctx the parse tree
	 */
	enterSelectFromDerivedTable?: (ctx: SelectFromDerivedTableContext) => void;
	/**
	 * Exit a parse tree produced by the `selectFromDerivedTable`
	 * labeled alternative in `HSQLParser.selectFromTableReference`.
	 * @param ctx the parse tree
	 */
	exitSelectFromDerivedTable?: (ctx: SelectFromDerivedTableContext) => void;

	/**
	 * Enter a parse tree produced by the `selectFromDefinition`
	 * labeled alternative in `HSQLParser.selectFromTableReference`.
	 * @param ctx the parse tree
	 */
	enterSelectFromDefinition?: (ctx: SelectFromDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by the `selectFromDefinition`
	 * labeled alternative in `HSQLParser.selectFromTableReference`.
	 * @param ctx the parse tree
	 */
	exitSelectFromDefinition?: (ctx: SelectFromDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by the `selectBracketedFromTable`
	 * labeled alternative in `HSQLParser.selectFromTableReference`.
	 * @param ctx the parse tree
	 */
	enterSelectBracketedFromTable?: (ctx: SelectBracketedFromTableContext) => void;
	/**
	 * Exit a parse tree produced by the `selectBracketedFromTable`
	 * labeled alternative in `HSQLParser.selectFromTableReference`.
	 * @param ctx the parse tree
	 */
	exitSelectBracketedFromTable?: (ctx: SelectBracketedFromTableContext) => void;

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
	 * Enter a parse tree produced by the `normalCol`
	 * labeled alternative in `HSQLParser.selectCol`.
	 * @param ctx the parse tree
	 */
	enterNormalCol?: (ctx: NormalColContext) => void;
	/**
	 * Exit a parse tree produced by the `normalCol`
	 * labeled alternative in `HSQLParser.selectCol`.
	 * @param ctx the parse tree
	 */
	exitNormalCol?: (ctx: NormalColContext) => void;

	/**
	 * Enter a parse tree produced by the `wildAll`
	 * labeled alternative in `HSQLParser.selectCol`.
	 * @param ctx the parse tree
	 */
	enterWildAll?: (ctx: WildAllContext) => void;
	/**
	 * Exit a parse tree produced by the `wildAll`
	 * labeled alternative in `HSQLParser.selectCol`.
	 * @param ctx the parse tree
	 */
	exitWildAll?: (ctx: WildAllContext) => void;

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
	 * Enter a parse tree produced by the `normalIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionRoot`.
	 * @param ctx the parse tree
	 */
	enterNormalIdentifier?: (ctx: NormalIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `normalIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionRoot`.
	 * @param ctx the parse tree
	 */
	exitNormalIdentifier?: (ctx: NormalIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `rootIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionRoot`.
	 * @param ctx the parse tree
	 */
	enterRootIdentifier?: (ctx: RootIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `rootIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionRoot`.
	 * @param ctx the parse tree
	 */
	exitRootIdentifier?: (ctx: RootIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `parentIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionRoot`.
	 * @param ctx the parse tree
	 */
	enterParentIdentifier?: (ctx: ParentIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `parentIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionRoot`.
	 * @param ctx the parse tree
	 */
	exitParentIdentifier?: (ctx: ParentIdentifierContext) => void;

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
	 * Enter a parse tree produced by `HSQLParser.definitionStmt`.
	 * @param ctx the parse tree
	 */
	enterDefinitionStmt?: (ctx: DefinitionStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.definitionStmt`.
	 * @param ctx the parse tree
	 */
	exitDefinitionStmt?: (ctx: DefinitionStmtContext) => void;

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
	 * Enter a parse tree produced by `HSQLParser.selectHavingClause`.
	 * @param ctx the parse tree
	 */
	enterSelectHavingClause?: (ctx: SelectHavingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.selectHavingClause`.
	 * @param ctx the parse tree
	 */
	exitSelectHavingClause?: (ctx: SelectHavingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.selectGroupByClause`.
	 * @param ctx the parse tree
	 */
	enterSelectGroupByClause?: (ctx: SelectGroupByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.selectGroupByClause`.
	 * @param ctx the parse tree
	 */
	exitSelectGroupByClause?: (ctx: SelectGroupByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.definitionSet`.
	 * @param ctx the parse tree
	 */
	enterDefinitionSet?: (ctx: DefinitionSetContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.definitionSet`.
	 * @param ctx the parse tree
	 */
	exitDefinitionSet?: (ctx: DefinitionSetContext) => void;

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
	 * Enter a parse tree produced by `HSQLParser.selectCol`.
	 * @param ctx the parse tree
	 */
	enterSelectCol?: (ctx: SelectColContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.selectCol`.
	 * @param ctx the parse tree
	 */
	exitSelectCol?: (ctx: SelectColContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.col`.
	 * @param ctx the parse tree
	 */
	enterCol?: (ctx: ColContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.col`.
	 * @param ctx the parse tree
	 */
	exitCol?: (ctx: ColContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.aliasingCol`.
	 * @param ctx the parse tree
	 */
	enterAliasingCol?: (ctx: AliasingColContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.aliasingCol`.
	 * @param ctx the parse tree
	 */
	exitAliasingCol?: (ctx: AliasingColContext) => void;

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
	 * Enter a parse tree produced by `HSQLParser.selectFromTableReference`.
	 * @param ctx the parse tree
	 */
	enterSelectFromTableReference?: (ctx: SelectFromTableReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.selectFromTableReference`.
	 * @param ctx the parse tree
	 */
	exitSelectFromTableReference?: (ctx: SelectFromTableReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.selectAlias`.
	 * @param ctx the parse tree
	 */
	enterSelectAlias?: (ctx: SelectAliasContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.selectAlias`.
	 * @param ctx the parse tree
	 */
	exitSelectAlias?: (ctx: SelectAliasContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.join_operator`.
	 * @param ctx the parse tree
	 */
	enterJoin_operator?: (ctx: Join_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.join_operator`.
	 * @param ctx the parse tree
	 */
	exitJoin_operator?: (ctx: Join_operatorContext) => void;

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
	 * Enter a parse tree produced by `HSQLParser.joinedTable`.
	 * @param ctx the parse tree
	 */
	enterJoinedTable?: (ctx: JoinedTableContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.joinedTable`.
	 * @param ctx the parse tree
	 */
	exitJoinedTable?: (ctx: JoinedTableContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.joinConstraint`.
	 * @param ctx the parse tree
	 */
	enterJoinConstraint?: (ctx: JoinConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.joinConstraint`.
	 * @param ctx the parse tree
	 */
	exitJoinConstraint?: (ctx: JoinConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.joinSpecification`.
	 * @param ctx the parse tree
	 */
	enterJoinSpecification?: (ctx: JoinSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.joinSpecification`.
	 * @param ctx the parse tree
	 */
	exitJoinSpecification?: (ctx: JoinSpecificationContext) => void;

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
	 * Enter a parse tree produced by `HSQLParser.limitOffsetClause`.
	 * @param ctx the parse tree
	 */
	enterLimitOffsetClause?: (ctx: LimitOffsetClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.limitOffsetClause`.
	 * @param ctx the parse tree
	 */
	exitLimitOffsetClause?: (ctx: LimitOffsetClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.offsetClause`.
	 * @param ctx the parse tree
	 */
	enterOffsetClause?: (ctx: OffsetClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.offsetClause`.
	 * @param ctx the parse tree
	 */
	exitOffsetClause?: (ctx: OffsetClauseContext) => void;

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

	/**
	 * Enter a parse tree produced by `HSQLParser.logicalOperator`.
	 * @param ctx the parse tree
	 */
	enterLogicalOperator?: (ctx: LogicalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.logicalOperator`.
	 * @param ctx the parse tree
	 */
	exitLogicalOperator?: (ctx: LogicalOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

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
	 * Enter a parse tree produced by `HSQLParser.alterOperator`.
	 * @param ctx the parse tree
	 */
	enterAlterOperator?: (ctx: AlterOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.alterOperator`.
	 * @param ctx the parse tree
	 */
	exitAlterOperator?: (ctx: AlterOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.overDefinition`.
	 * @param ctx the parse tree
	 */
	enterOverDefinition?: (ctx: OverDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.overDefinition`.
	 * @param ctx the parse tree
	 */
	exitOverDefinition?: (ctx: OverDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.overDefinitionRoot`.
	 * @param ctx the parse tree
	 */
	enterOverDefinitionRoot?: (ctx: OverDefinitionRootContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.overDefinitionRoot`.
	 * @param ctx the parse tree
	 */
	exitOverDefinitionRoot?: (ctx: OverDefinitionRootContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.overDefinitionTail`.
	 * @param ctx the parse tree
	 */
	enterOverDefinitionTail?: (ctx: OverDefinitionTailContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.overDefinitionTail`.
	 * @param ctx the parse tree
	 */
	exitOverDefinitionTail?: (ctx: OverDefinitionTailContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;

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
	 * Enter a parse tree produced by `HSQLParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.namedOutput`.
	 * @param ctx the parse tree
	 */
	enterNamedOutput?: (ctx: NamedOutputContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.namedOutput`.
	 * @param ctx the parse tree
	 */
	exitNamedOutput?: (ctx: NamedOutputContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.toFile`.
	 * @param ctx the parse tree
	 */
	enterToFile?: (ctx: ToFileContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.toFile`.
	 * @param ctx the parse tree
	 */
	exitToFile?: (ctx: ToFileContext) => void;

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
	 * Enter a parse tree produced by `HSQLParser.moduleStmt`.
	 * @param ctx the parse tree
	 */
	enterModuleStmt?: (ctx: ModuleStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.moduleStmt`.
	 * @param ctx the parse tree
	 */
	exitModuleStmt?: (ctx: ModuleStmtContext) => void;

	/**
	 * Enter a parse tree produced by `HSQLParser.transformStmt`.
	 * @param ctx the parse tree
	 */
	enterTransformStmt?: (ctx: TransformStmtContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.transformStmt`.
	 * @param ctx the parse tree
	 */
	exitTransformStmt?: (ctx: TransformStmtContext) => void;

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
	 * Enter a parse tree produced by `HSQLParser.scope`.
	 * @param ctx the parse tree
	 */
	enterScope?: (ctx: ScopeContext) => void;
	/**
	 * Exit a parse tree produced by `HSQLParser.scope`.
	 * @param ctx the parse tree
	 */
	exitScope?: (ctx: ScopeContext) => void;
}

