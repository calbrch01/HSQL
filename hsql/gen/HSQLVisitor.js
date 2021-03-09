// Generated from HSQL.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by HSQLParser.

function HSQLVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

HSQLVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
HSQLVisitor.prototype.constructor = HSQLVisitor;

// Visit a parse tree produced by HSQLParser#program.
HSQLVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#stmt.
HSQLVisitor.prototype.visitStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#actionStmt.
HSQLVisitor.prototype.visitActionStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#exportStmt.
HSQLVisitor.prototype.visitExportStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#exportList.
HSQLVisitor.prototype.visitExportList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#exportableIdentifier.
HSQLVisitor.prototype.visitExportableIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#assignStmt.
HSQLVisitor.prototype.visitAssignStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#typeDefStmt.
HSQLVisitor.prototype.visitTypeDefStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#typeDefExport.
HSQLVisitor.prototype.visitTypeDefExport = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#mapExportable.
HSQLVisitor.prototype.visitMapExportable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#tableExport.
HSQLVisitor.prototype.visitTableExport = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#layoutExport.
HSQLVisitor.prototype.visitLayoutExport = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#identifierExport.
HSQLVisitor.prototype.visitIdentifierExport = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#importStmt.
HSQLVisitor.prototype.visitImportStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#expr.
HSQLVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#outputStmt.
HSQLVisitor.prototype.visitOutputStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#outputVariant.
HSQLVisitor.prototype.visitOutputVariant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#namedOutputStatement.
HSQLVisitor.prototype.visitNamedOutputStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#fileOutputStatement.
HSQLVisitor.prototype.visitFileOutputStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#outputOptions.
HSQLVisitor.prototype.visitOutputOptions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#outputUpdateOption.
HSQLVisitor.prototype.visitOutputUpdateOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#outputExpireOption.
HSQLVisitor.prototype.visitOutputExpireOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#plotStmt.
HSQLVisitor.prototype.visitPlotStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#plotType.
HSQLVisitor.prototype.visitPlotType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#mlStmt.
HSQLVisitor.prototype.visitMlStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#train.
HSQLVisitor.prototype.visitTrain = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#elementaryML.
HSQLVisitor.prototype.visitElementaryML = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#trainOptions.
HSQLVisitor.prototype.visitTrainOptions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#trainOption.
HSQLVisitor.prototype.visitTrainOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#trainValue.
HSQLVisitor.prototype.visitTrainValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#predict.
HSQLVisitor.prototype.visitPredict = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#selectStmt.
HSQLVisitor.prototype.visitSelectStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#joinClause.
HSQLVisitor.prototype.visitJoinClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#joinType.
HSQLVisitor.prototype.visitJoinType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#selectColumns.
HSQLVisitor.prototype.visitSelectColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#exprLabel.
HSQLVisitor.prototype.visitExprLabel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#aggregatedSelectColumn.
HSQLVisitor.prototype.visitAggregatedSelectColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#selectColumn.
HSQLVisitor.prototype.visitSelectColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#aggregateIdentifier.
HSQLVisitor.prototype.visitAggregateIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#selectFromClause.
HSQLVisitor.prototype.visitSelectFromClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#nestedSelectStmt.
HSQLVisitor.prototype.visitNestedSelectStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#selectDataset.
HSQLVisitor.prototype.visitSelectDataset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#selectDatasetFile.
HSQLVisitor.prototype.visitSelectDatasetFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#selectTableName.
HSQLVisitor.prototype.visitSelectTableName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#selectWhereClause.
HSQLVisitor.prototype.visitSelectWhereClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#orderByClause.
HSQLVisitor.prototype.visitOrderByClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#sortItem.
HSQLVisitor.prototype.visitSortItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#ascSortItem.
HSQLVisitor.prototype.visitAscSortItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#descSortItem.
HSQLVisitor.prototype.visitDescSortItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#groupByClause.
HSQLVisitor.prototype.visitGroupByClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#layoutStmt.
HSQLVisitor.prototype.visitLayoutStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#layoutContent.
HSQLVisitor.prototype.visitLayoutContent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#inlineStmt.
HSQLVisitor.prototype.visitInlineStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#qualifiedIdentifier.
HSQLVisitor.prototype.visitQualifiedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#dataType.
HSQLVisitor.prototype.visitDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#expression.
HSQLVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#logicalNot.
HSQLVisitor.prototype.visitLogicalNot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#predicated.
HSQLVisitor.prototype.visitPredicated = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#logicalBinary.
HSQLVisitor.prototype.visitLogicalBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#comparison.
HSQLVisitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#between.
HSQLVisitor.prototype.visitBetween = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#inList.
HSQLVisitor.prototype.visitInList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#valueExpressionDefault.
HSQLVisitor.prototype.visitValueExpressionDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#identifier.
HSQLVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#numericLiteral.
HSQLVisitor.prototype.visitNumericLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#booleanLiteral.
HSQLVisitor.prototype.visitBooleanLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#stringLiteral.
HSQLVisitor.prototype.visitStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#parenthesizedExpression.
HSQLVisitor.prototype.visitParenthesizedExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#decimalLiteral.
HSQLVisitor.prototype.visitDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#doubleLiteral.
HSQLVisitor.prototype.visitDoubleLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#integerLiteral.
HSQLVisitor.prototype.visitIntegerLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#basicStringLiteral.
HSQLVisitor.prototype.visitBasicStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#unicodeStringLiteral.
HSQLVisitor.prototype.visitUnicodeStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#booleanValue.
HSQLVisitor.prototype.visitBooleanValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HSQLParser#comparisonOperator.
HSQLVisitor.prototype.visitComparisonOperator = function(ctx) {
  return this.visitChildren(ctx);
};



exports.HSQLVisitor = HSQLVisitor;