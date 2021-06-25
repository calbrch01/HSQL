// Generated from grammar/HSQL.g4 by ANTLR 4.9.0-SNAPSHOT


// for the join clause type
import {SelectJoinType} from '../ast/SelectHelpers';
import {SingularDataType} from '../ast/SingularDataType';


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SelectAggregatedEverythingColContext } from "./HSQLParser";
import { SelectAggregatedOneColContext } from "./HSQLParser";
import { SelectOneColContext } from "./HSQLParser";
import { WildAllContext } from "./HSQLParser";
import { NormalTailIdentifierContext } from "./HSQLParser";
import { ParentTailIdentifierContext } from "./HSQLParser";
import { ComparisonContext } from "./HSQLParser";
import { BetweenContext } from "./HSQLParser";
import { InListContext } from "./HSQLParser";
import { DecimalLiteralContext } from "./HSQLParser";
import { DoubleLiteralContext } from "./HSQLParser";
import { IntegerLiteralContext } from "./HSQLParser";
import { ValueExpressionDefaultContext } from "./HSQLParser";
import { BasicStringLiteralContext } from "./HSQLParser";
import { UnicodeStringLiteralContext } from "./HSQLParser";
import { SelectFromDerivedTableContext } from "./HSQLParser";
import { SelectFromDefinitionContext } from "./HSQLParser";
import { SelectBracketedFromTableContext } from "./HSQLParser";
import { SelectJoinedTableContext } from "./HSQLParser";
import { IdentifierLiteralContext } from "./HSQLParser";
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
import { DistinctClauseContext } from "./HSQLParser";
import { SelectGroupByClauseContext } from "./HSQLParser";
import { IdSetContext } from "./HSQLParser";
import { SelectColumnsContext } from "./HSQLParser";
import { SelectColContext } from "./HSQLParser";
import { ColContext } from "./HSQLParser";
import { AliasingColContext } from "./HSQLParser";
import { SelectFromClauseContext } from "./HSQLParser";
import { SelectFromRefContext } from "./HSQLParser";
import { SelectAliasContext } from "./HSQLParser";
import { JoinOperatorContext } from "./HSQLParser";
import { SelectWhereClauseContext } from "./HSQLParser";
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
import { ValueExpressionListContext } from "./HSQLParser";
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
import { ScopeContext } from "./HSQLParser";
import { DeclarationsContext } from "./HSQLParser";
import { DeclarationContext } from "./HSQLParser";
import { TypeClausesContext } from "./HSQLParser";
import { TableClauseContext } from "./HSQLParser";
import { LayoutClauseContext } from "./HSQLParser";
import { ColDefsContext } from "./HSQLParser";
import { ColDefContext } from "./HSQLParser";


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
	 * Visit a parse tree produced by the `wildAll`
	 * labeled alternative in `HSQLParser.col`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildAll?: (ctx: WildAllContext) => Result;

	/**
	 * Visit a parse tree produced by the `normalTailIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionTail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalTailIdentifier?: (ctx: NormalTailIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `parentTailIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionTail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentTailIdentifier?: (ctx: ParentTailIdentifierContext) => Result;

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
	 * Visit a parse tree produced by the `selectFromDerivedTable`
	 * labeled alternative in `HSQLParser.selectFromRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectFromDerivedTable?: (ctx: SelectFromDerivedTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectFromDefinition`
	 * labeled alternative in `HSQLParser.selectFromRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectFromDefinition?: (ctx: SelectFromDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectBracketedFromTable`
	 * labeled alternative in `HSQLParser.selectFromRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectBracketedFromTable?: (ctx: SelectBracketedFromTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectJoinedTable`
	 * labeled alternative in `HSQLParser.selectFromRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectJoinedTable?: (ctx: SelectJoinedTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierLiteral`
	 * labeled alternative in `HSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierLiteral?: (ctx: IdentifierLiteralContext) => Result;

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
	 * Visit a parse tree produced by the `normalIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionRoot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalIdentifier?: (ctx: NormalIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `rootIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionRoot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootIdentifier?: (ctx: RootIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `parentIdentifier`
	 * labeled alternative in `HSQLParser.overDefinitionRoot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentIdentifier?: (ctx: ParentIdentifierContext) => Result;

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
	 * Visit a parse tree produced by `HSQLParser.distinctClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistinctClause?: (ctx: DistinctClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.selectGroupByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectGroupByClause?: (ctx: SelectGroupByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.idSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdSet?: (ctx: IdSetContext) => Result;

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
	 * Visit a parse tree produced by `HSQLParser.selectFromRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectFromRef?: (ctx: SelectFromRefContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.selectAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectAlias?: (ctx: SelectAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.joinOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinOperator?: (ctx: JoinOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.selectWhereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectWhereClause?: (ctx: SelectWhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.joinConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinConstraint?: (ctx: JoinConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.joinSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinSpecification?: (ctx: JoinSpecificationContext) => Result;

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
	 * Visit a parse tree produced by `HSQLParser.limitOffsetClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitOffsetClause?: (ctx: LimitOffsetClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.offsetClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffsetClause?: (ctx: OffsetClauseContext) => Result;

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
	 * Visit a parse tree produced by `HSQLParser.valueExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionList?: (ctx: ValueExpressionListContext) => Result;

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
	 * Visit a parse tree produced by `HSQLParser.scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScope?: (ctx: ScopeContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.declarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarations?: (ctx: DeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.typeClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeClauses?: (ctx: TypeClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.tableClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableClause?: (ctx: TableClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.layoutClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLayoutClause?: (ctx: LayoutClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.colDefs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColDefs?: (ctx: ColDefsContext) => Result;

	/**
	 * Visit a parse tree produced by `HSQLParser.colDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColDef?: (ctx: ColDefContext) => Result;
}

