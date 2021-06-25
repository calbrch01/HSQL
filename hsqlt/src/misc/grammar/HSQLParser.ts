// Generated from grammar/HSQL.g4 by ANTLR 4.9.0-SNAPSHOT


// for the join clause type
import {SelectJoinType} from '../ast/SelectHelpers';
import {SingularDataType} from '../ast/SingularDataType';


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { HSQLVisitor } from "./HSQLVisitor";


export class HSQLParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly REAL_TYPE = 2;
	public static readonly INTEGER_TYPE = 3;
	public static readonly DECIMAL_TYPE = 4;
	public static readonly VARSTRING_TYPE = 5;
	public static readonly STRING_TYPE = 6;
	public static readonly BOOLEAN = 7;
	public static readonly UNSTABLE = 8;
	public static readonly STABLE = 9;
	public static readonly TABLE = 10;
	public static readonly ALTER = 11;
	public static readonly TO = 12;
	public static readonly ADD = 13;
	public static readonly DROP = 14;
	public static readonly MODIFY = 15;
	public static readonly EXPORT = 16;
	public static readonly SHARED = 17;
	public static readonly ASC = 18;
	public static readonly DESC = 19;
	public static readonly ORDER = 20;
	public static readonly GROUP = 21;
	public static readonly BY = 22;
	public static readonly TRAIN = 23;
	public static readonly PREDICT = 24;
	public static readonly PLOT = 25;
	public static readonly OUTPUT = 26;
	public static readonly OPTION = 27;
	public static readonly OPTIONS = 28;
	public static readonly OVERWRITE = 29;
	public static readonly UPDATE = 30;
	public static readonly ON = 31;
	public static readonly INDEPENDENT = 32;
	public static readonly IDCOLUMN = 33;
	public static readonly PROJECT = 34;
	public static readonly SELECT = 35;
	public static readonly DECLARE = 36;
	public static readonly FROM = 37;
	public static readonly TOP = 38;
	public static readonly WHERE = 39;
	public static readonly HAVING = 40;
	public static readonly DISTINCT = 41;
	public static readonly NATURAL = 42;
	public static readonly CROSS = 43;
	public static readonly JOIN = 44;
	public static readonly INNER = 45;
	public static readonly LEFT = 46;
	public static readonly RIGHT = 47;
	public static readonly FULL = 48;
	public static readonly OUTER = 49;
	public static readonly ONLY = 50;
	public static readonly CASE = 51;
	public static readonly TRUE = 52;
	public static readonly FALSE = 53;
	public static readonly IMPORT = 54;
	public static readonly AS = 55;
	public static readonly CREATE = 56;
	public static readonly LAYOUT = 57;
	public static readonly FILE = 58;
	public static readonly MAP = 59;
	public static readonly METHOD = 60;
	public static readonly DEPENDENT = 61;
	public static readonly TITLE = 62;
	public static readonly EXPIRE = 63;
	public static readonly LIMIT = 64;
	public static readonly OFFSET = 65;
	public static readonly MODULE = 66;
	public static readonly UESCAPE = 67;
	public static readonly TYPE = 68;
	public static readonly SEMICOLON = 69;
	public static readonly EQ = 70;
	public static readonly NEQ = 71;
	public static readonly LT = 72;
	public static readonly LTE = 73;
	public static readonly GT = 74;
	public static readonly GTE = 75;
	public static readonly PLUS = 76;
	public static readonly SUBSTRACT = 77;
	public static readonly MULTIPLY = 78;
	public static readonly DIVIDE = 79;
	public static readonly MODULO = 80;
	public static readonly XOR = 81;
	public static readonly AND = 82;
	public static readonly OR = 83;
	public static readonly NOT = 84;
	public static readonly IN = 85;
	public static readonly BETWEEN = 86;
	public static readonly EXISTS = 87;
	public static readonly STRING = 88;
	public static readonly UNICODE_STRING = 89;
	public static readonly BINARY_LITERAL = 90;
	public static readonly INTEGER_VALUE = 91;
	public static readonly DECIMAL_VALUE = 92;
	public static readonly DOUBLE_VALUE = 93;
	public static readonly IDENTIFIER = 94;
	public static readonly COMMA_ = 95;
	public static readonly BSTART_ = 96;
	public static readonly BEND_ = 97;
	public static readonly CURLY_BSTART_ = 98;
	public static readonly CURLY_BEND_ = 99;
	public static readonly ECL_SNIPPETS = 100;
	public static readonly SIMPLE_COMMENT = 101;
	public static readonly SIMPLE_C_COMMENT = 102;
	public static readonly BRACKETED_COMMENT = 103;
	public static readonly WS = 104;
	public static readonly RULE_program = 0;
	public static readonly RULE_completestmt = 1;
	public static readonly RULE_stmt = 2;
	public static readonly RULE_definitionStmt = 3;
	public static readonly RULE_expr = 4;
	public static readonly RULE_actionStmt = 5;
	public static readonly RULE_selectStmt = 6;
	public static readonly RULE_distinctClause = 7;
	public static readonly RULE_selectGroupByClause = 8;
	public static readonly RULE_idSet = 9;
	public static readonly RULE_selectColumns = 10;
	public static readonly RULE_selectCol = 11;
	public static readonly RULE_col = 12;
	public static readonly RULE_aliasingCol = 13;
	public static readonly RULE_selectFromClause = 14;
	public static readonly RULE_selectFromRef = 15;
	public static readonly RULE_selectAlias = 16;
	public static readonly RULE_joinOperator = 17;
	public static readonly RULE_selectWhereClause = 18;
	public static readonly RULE_joinConstraint = 19;
	public static readonly RULE_joinSpecification = 20;
	public static readonly RULE_groupByClause = 21;
	public static readonly RULE_orderByClause = 22;
	public static readonly RULE_sortItem = 23;
	public static readonly RULE_ascSortItem = 24;
	public static readonly RULE_descSortItem = 25;
	public static readonly RULE_limitOffsetClause = 26;
	public static readonly RULE_offsetClause = 27;
	public static readonly RULE_comparisonOperator = 28;
	public static readonly RULE_logicalOperator = 29;
	public static readonly RULE_literal = 30;
	public static readonly RULE_dataType = 31;
	public static readonly RULE_alterOperator = 32;
	public static readonly RULE_overDefinition = 33;
	public static readonly RULE_overDefinitionRoot = 34;
	public static readonly RULE_overDefinitionTail = 35;
	public static readonly RULE_definition = 36;
	public static readonly RULE_expression = 37;
	public static readonly RULE_booleanExpression = 38;
	public static readonly RULE_predicate = 39;
	public static readonly RULE_valueExpressionList = 40;
	public static readonly RULE_valueExpression = 41;
	public static readonly RULE_primaryExpression = 42;
	public static readonly RULE_number = 43;
	public static readonly RULE_string = 44;
	public static readonly RULE_booleanValue = 45;
	public static readonly RULE_importStmt = 46;
	public static readonly RULE_outputStmt = 47;
	public static readonly RULE_attribute = 48;
	public static readonly RULE_namedOutput = 49;
	public static readonly RULE_toFile = 50;
	public static readonly RULE_scope = 51;
	public static readonly RULE_declarations = 52;
	public static readonly RULE_declaration = 53;
	public static readonly RULE_typeClauses = 54;
	public static readonly RULE_tableClause = 55;
	public static readonly RULE_layoutClause = 56;
	public static readonly RULE_colDefs = 57;
	public static readonly RULE_colDef = 58;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "completestmt", "stmt", "definitionStmt", "expr", "actionStmt", 
		"selectStmt", "distinctClause", "selectGroupByClause", "idSet", "selectColumns", 
		"selectCol", "col", "aliasingCol", "selectFromClause", "selectFromRef", 
		"selectAlias", "joinOperator", "selectWhereClause", "joinConstraint", 
		"joinSpecification", "groupByClause", "orderByClause", "sortItem", "ascSortItem", 
		"descSortItem", "limitOffsetClause", "offsetClause", "comparisonOperator", 
		"logicalOperator", "literal", "dataType", "alterOperator", "overDefinition", 
		"overDefinitionRoot", "overDefinitionTail", "definition", "expression", 
		"booleanExpression", "predicate", "valueExpressionList", "valueExpression", 
		"primaryExpression", "number", "string", "booleanValue", "importStmt", 
		"outputStmt", "attribute", "namedOutput", "toFile", "scope", "declarations", 
		"declaration", "typeClauses", "tableClause", "layoutClause", "colDefs", 
		"colDef",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'='", undefined, "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", 
		"'%'", "'^'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"','", "'('", "')'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "REAL_TYPE", "INTEGER_TYPE", "DECIMAL_TYPE", "VARSTRING_TYPE", 
		"STRING_TYPE", "BOOLEAN", "UNSTABLE", "STABLE", "TABLE", "ALTER", "TO", 
		"ADD", "DROP", "MODIFY", "EXPORT", "SHARED", "ASC", "DESC", "ORDER", "GROUP", 
		"BY", "TRAIN", "PREDICT", "PLOT", "OUTPUT", "OPTION", "OPTIONS", "OVERWRITE", 
		"UPDATE", "ON", "INDEPENDENT", "IDCOLUMN", "PROJECT", "SELECT", "DECLARE", 
		"FROM", "TOP", "WHERE", "HAVING", "DISTINCT", "NATURAL", "CROSS", "JOIN", 
		"INNER", "LEFT", "RIGHT", "FULL", "OUTER", "ONLY", "CASE", "TRUE", "FALSE", 
		"IMPORT", "AS", "CREATE", "LAYOUT", "FILE", "MAP", "METHOD", "DEPENDENT", 
		"TITLE", "EXPIRE", "LIMIT", "OFFSET", "MODULE", "UESCAPE", "TYPE", "SEMICOLON", 
		"EQ", "NEQ", "LT", "LTE", "GT", "GTE", "PLUS", "SUBSTRACT", "MULTIPLY", 
		"DIVIDE", "MODULO", "XOR", "AND", "OR", "NOT", "IN", "BETWEEN", "EXISTS", 
		"STRING", "UNICODE_STRING", "BINARY_LITERAL", "INTEGER_VALUE", "DECIMAL_VALUE", 
		"DOUBLE_VALUE", "IDENTIFIER", "COMMA_", "BSTART_", "BEND_", "CURLY_BSTART_", 
		"CURLY_BEND_", "ECL_SNIPPETS", "SIMPLE_COMMENT", "SIMPLE_C_COMMENT", "BRACKETED_COMMENT", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(HSQLParser._LITERAL_NAMES, HSQLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return HSQLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "HSQL.g4"; }

	// @Override
	public get ruleNames(): string[] { return HSQLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return HSQLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(HSQLParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, HSQLParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HSQLParser.EXPORT) | (1 << HSQLParser.SHARED) | (1 << HSQLParser.OUTPUT))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (HSQLParser.SELECT - 35)) | (1 << (HSQLParser.TRUE - 35)) | (1 << (HSQLParser.FALSE - 35)) | (1 << (HSQLParser.IMPORT - 35)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (HSQLParser.STRING - 88)) | (1 << (HSQLParser.UNICODE_STRING - 88)) | (1 << (HSQLParser.INTEGER_VALUE - 88)) | (1 << (HSQLParser.DECIMAL_VALUE - 88)) | (1 << (HSQLParser.DOUBLE_VALUE - 88)) | (1 << (HSQLParser.IDENTIFIER - 88)))) !== 0)) {
				{
				{
				this.state = 118;
				this.completestmt();
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 124;
			this.match(HSQLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public completestmt(): CompletestmtContext {
		let _localctx: CompletestmtContext = new CompletestmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, HSQLParser.RULE_completestmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.stmt();
			this.state = 127;
			this.match(HSQLParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, HSQLParser.RULE_stmt);
		try {
			this.state = 132;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.EXPORT:
			case HSQLParser.SHARED:
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 129;
				this.definitionStmt();
				}
				break;
			case HSQLParser.OUTPUT:
			case HSQLParser.SELECT:
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 130;
				this.actionStmt();
				}
				break;
			case HSQLParser.IMPORT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 131;
				this.importStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definitionStmt(): DefinitionStmtContext {
		let _localctx: DefinitionStmtContext = new DefinitionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, HSQLParser.RULE_definitionStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.scope();
			this.state = 135;
			_localctx._label = this.match(HSQLParser.IDENTIFIER);
			this.state = 136;
			this.match(HSQLParser.EQ);
			this.state = 137;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, HSQLParser.RULE_expr);
		try {
			this.state = 141;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 139;
				this.definition();
				}
				break;
			case HSQLParser.OUTPUT:
			case HSQLParser.SELECT:
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 140;
				this.actionStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actionStmt(): ActionStmtContext {
		let _localctx: ActionStmtContext = new ActionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, HSQLParser.RULE_actionStmt);
		try {
			this.state = 146;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.SELECT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 143;
				this.selectStmt();
				}
				break;
			case HSQLParser.OUTPUT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 144;
				this.outputStmt();
				}
				break;
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 145;
				this.literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectStmt(): SelectStmtContext {
		let _localctx: SelectStmtContext = new SelectStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, HSQLParser.RULE_selectStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.match(HSQLParser.SELECT);
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.DISTINCT) {
				{
				this.state = 149;
				this.distinctClause();
				}
			}

			this.state = 152;
			this.selectColumns();
			this.state = 153;
			this.selectFromClause();
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.WHERE) {
				{
				this.state = 154;
				this.match(HSQLParser.WHERE);
				this.state = 155;
				this.selectWhereClause();
				}
			}

			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.GROUP) {
				{
				this.state = 158;
				this.selectGroupByClause();
				}
			}

			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.ORDER) {
				{
				this.state = 161;
				this.match(HSQLParser.ORDER);
				this.state = 162;
				this.match(HSQLParser.BY);
				this.state = 163;
				this.orderByClause();
				}
			}

			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.LIMIT) {
				{
				this.state = 166;
				this.limitOffsetClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public distinctClause(): DistinctClauseContext {
		let _localctx: DistinctClauseContext = new DistinctClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, HSQLParser.RULE_distinctClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(HSQLParser.DISTINCT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectGroupByClause(): SelectGroupByClauseContext {
		let _localctx: SelectGroupByClauseContext = new SelectGroupByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, HSQLParser.RULE_selectGroupByClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(HSQLParser.GROUP);
			this.state = 172;
			this.match(HSQLParser.BY);
			this.state = 173;
			this.groupByClause();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idSet(): IdSetContext {
		let _localctx: IdSetContext = new IdSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, HSQLParser.RULE_idSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 176;
				this.match(HSQLParser.COMMA_);
				this.state = 177;
				this.match(HSQLParser.IDENTIFIER);
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectColumns(): SelectColumnsContext {
		let _localctx: SelectColumnsContext = new SelectColumnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, HSQLParser.RULE_selectColumns);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.selectCol();
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 184;
				this.match(HSQLParser.COMMA_);
				this.state = 185;
				this.selectCol();
				}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectCol(): SelectColContext {
		let _localctx: SelectColContext = new SelectColContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, HSQLParser.RULE_selectCol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.col();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public col(): ColContext {
		let _localctx: ColContext = new ColContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, HSQLParser.RULE_col);
		let _la: number;
		try {
			this.state = 212;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new SelectAggregatedEverythingColContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 193;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 194;
				this.match(HSQLParser.BSTART_);
				this.state = 195;
				this.match(HSQLParser.MULTIPLY);
				this.state = 196;
				this.match(HSQLParser.BEND_);
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 197;
					this.aliasingCol();
					}
				}

				}
				break;

			case 2:
				_localctx = new SelectAggregatedOneColContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 200;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 201;
				this.match(HSQLParser.BSTART_);
				this.state = 202;
				(_localctx as SelectAggregatedOneColContext)._column = this.match(HSQLParser.IDENTIFIER);
				this.state = 203;
				this.match(HSQLParser.BEND_);
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 204;
					this.aliasingCol();
					}
				}

				}
				break;

			case 3:
				_localctx = new SelectOneColContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 207;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 208;
					this.aliasingCol();
					}
				}

				}
				break;

			case 4:
				_localctx = new WildAllContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 211;
				this.match(HSQLParser.MULTIPLY);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasingCol(): AliasingColContext {
		let _localctx: AliasingColContext = new AliasingColContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, HSQLParser.RULE_aliasingCol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(HSQLParser.AS);
			this.state = 215;
			_localctx._alias = this.match(HSQLParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectFromClause(): SelectFromClauseContext {
		let _localctx: SelectFromClauseContext = new SelectFromClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, HSQLParser.RULE_selectFromClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(HSQLParser.FROM);
			{
			this.state = 218;
			this.selectFromRef(0);
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 219;
				this.match(HSQLParser.COMMA_);
				this.state = 220;
				this.selectFromRef(0);
				}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public selectFromRef(): SelectFromRefContext;
	public selectFromRef(_p: number): SelectFromRefContext;
	// @RuleVersion(0)
	public selectFromRef(_p?: number): SelectFromRefContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SelectFromRefContext = new SelectFromRefContext(this._ctx, _parentState);
		let _prevctx: SelectFromRefContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, HSQLParser.RULE_selectFromRef, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				_localctx = new SelectFromDerivedTableContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 227;
				this.match(HSQLParser.BSTART_);
				this.state = 228;
				this.selectStmt();
				this.state = 229;
				this.match(HSQLParser.BEND_);
				this.state = 230;
				this.selectAlias();
				}
				break;

			case 2:
				{
				_localctx = new SelectFromDefinitionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 232;
				this.definition();
				this.state = 234;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 233;
					this.selectAlias();
					}
					break;
				}
				}
				break;

			case 3:
				{
				_localctx = new SelectBracketedFromTableContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 236;
				this.match(HSQLParser.BSTART_);
				this.state = 237;
				this.selectFromRef(0);
				this.state = 242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HSQLParser.COMMA_) {
					{
					{
					this.state = 238;
					this.match(HSQLParser.COMMA_);
					this.state = 239;
					this.selectFromRef(0);
					}
					}
					this.state = 244;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 245;
				this.match(HSQLParser.BEND_);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 258;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new SelectJoinedTableContext(new SelectFromRefContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, HSQLParser.RULE_selectFromRef);
					this.state = 249;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 250;
					this.joinOperator();
					this.state = 251;
					this.selectFromRef(0);
					this.state = 252;
					this.joinConstraint();
					this.state = 254;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
					case 1:
						{
						this.state = 253;
						this.selectAlias();
						}
						break;
					}
					}
					}
				}
				this.state = 260;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectAlias(): SelectAliasContext {
		let _localctx: SelectAliasContext = new SelectAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, HSQLParser.RULE_selectAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.AS) {
				{
				this.state = 261;
				this.match(HSQLParser.AS);
				}
			}

			this.state = 264;
			this.match(HSQLParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinOperator(): JoinOperatorContext {
		let _localctx: JoinOperatorContext = new JoinOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, HSQLParser.RULE_joinOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.LEFT:
				{
				this.state = 266;
				this.match(HSQLParser.LEFT);
				this.state = 268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.OUTER) {
					{
					this.state = 267;
					this.match(HSQLParser.OUTER);
					}
				}

				_localctx.joinType = SelectJoinType.LEFT;
				}
				break;
			case HSQLParser.RIGHT:
				{
				this.state = 271;
				this.match(HSQLParser.RIGHT);
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.OUTER) {
					{
					this.state = 272;
					this.match(HSQLParser.OUTER);
					}
				}

				_localctx.joinType = SelectJoinType.RIGHT;
				}
				break;
			case HSQLParser.FULL:
				{
				this.state = 276;
				this.match(HSQLParser.FULL);
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.OUTER) {
					{
					this.state = 277;
					this.match(HSQLParser.OUTER);
					}
				}

				_localctx.joinType = SelectJoinType.OUTER;
				}
				break;
			case HSQLParser.INNER:
				{
				this.state = 281;
				this.match(HSQLParser.INNER);
				}
				break;
			case HSQLParser.JOIN:
				break;
			default:
				break;
			}
			this.state = 284;
			this.match(HSQLParser.JOIN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectWhereClause(): SelectWhereClauseContext {
		let _localctx: SelectWhereClauseContext = new SelectWhereClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, HSQLParser.RULE_selectWhereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinConstraint(): JoinConstraintContext {
		let _localctx: JoinConstraintContext = new JoinConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, HSQLParser.RULE_joinConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			this.match(HSQLParser.ON);
			this.state = 289;
			this.joinSpecification();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinSpecification(): JoinSpecificationContext {
		let _localctx: JoinSpecificationContext = new JoinSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, HSQLParser.RULE_joinSpecification);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			_localctx._leftrecset = this.definition();
			this.state = 292;
			this.comparisonOperator();
			this.state = 293;
			_localctx._rightrecset = this.definition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupByClause(): GroupByClauseContext {
		let _localctx: GroupByClauseContext = new GroupByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, HSQLParser.RULE_groupByClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.idSet();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByClause(): OrderByClauseContext {
		let _localctx: OrderByClauseContext = new OrderByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, HSQLParser.RULE_orderByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.sortItem();
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 298;
				this.match(HSQLParser.COMMA_);
				this.state = 299;
				this.sortItem();
				}
				}
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sortItem(): SortItemContext {
		let _localctx: SortItemContext = new SortItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, HSQLParser.RULE_sortItem);
		try {
			this.state = 307;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 305;
				this.ascSortItem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 306;
				this.descSortItem();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ascSortItem(): AscSortItemContext {
		let _localctx: AscSortItemContext = new AscSortItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, HSQLParser.RULE_ascSortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.ASC) {
				{
				this.state = 310;
				this.match(HSQLParser.ASC);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public descSortItem(): DescSortItemContext {
		let _localctx: DescSortItemContext = new DescSortItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, HSQLParser.RULE_descSortItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 314;
			this.match(HSQLParser.DESC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limitOffsetClause(): LimitOffsetClauseContext {
		let _localctx: LimitOffsetClauseContext = new LimitOffsetClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, HSQLParser.RULE_limitOffsetClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.match(HSQLParser.LIMIT);
			this.state = 317;
			this.match(HSQLParser.INTEGER_VALUE);
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OFFSET) {
				{
				this.state = 318;
				this.offsetClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public offsetClause(): OffsetClauseContext {
		let _localctx: OffsetClauseContext = new OffsetClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, HSQLParser.RULE_offsetClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(HSQLParser.OFFSET);
			this.state = 322;
			this.match(HSQLParser.INTEGER_VALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, HSQLParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			_la = this._input.LA(1);
			if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (HSQLParser.EQ - 70)) | (1 << (HSQLParser.NEQ - 70)) | (1 << (HSQLParser.LT - 70)) | (1 << (HSQLParser.LTE - 70)) | (1 << (HSQLParser.GT - 70)) | (1 << (HSQLParser.GTE - 70)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalOperator(): LogicalOperatorContext {
		let _localctx: LogicalOperatorContext = new LogicalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, HSQLParser.RULE_logicalOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			_la = this._input.LA(1);
			if (!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (HSQLParser.AND - 82)) | (1 << (HSQLParser.OR - 82)) | (1 << (HSQLParser.NOT - 82)) | (1 << (HSQLParser.IN - 82)) | (1 << (HSQLParser.BETWEEN - 82)) | (1 << (HSQLParser.EXISTS - 82)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, HSQLParser.RULE_literal);
		try {
			this.state = 331;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 328;
				this.number();
				}
				break;
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 329;
				this.string();
				}
				break;
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 330;
				this.booleanValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataType(): DataTypeContext {
		let _localctx: DataTypeContext = new DataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, HSQLParser.RULE_dataType);
		try {
			this.state = 344;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.REAL_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 333;
				this.match(HSQLParser.REAL_TYPE);
				_localctx.dt=SingularDataType.REAL
				}
				break;
			case HSQLParser.INTEGER_TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 335;
				this.match(HSQLParser.INTEGER_TYPE);
				}
				break;
			case HSQLParser.DECIMAL_TYPE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 336;
				this.match(HSQLParser.DECIMAL_TYPE);
				_localctx.dt=SingularDataType.REAL
				}
				break;
			case HSQLParser.VARSTRING_TYPE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 338;
				this.match(HSQLParser.VARSTRING_TYPE);
				_localctx.dt=SingularDataType.STRING
				}
				break;
			case HSQLParser.STRING_TYPE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 340;
				this.match(HSQLParser.STRING_TYPE);
				_localctx.dt=SingularDataType.STRING
				}
				break;
			case HSQLParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 342;
				this.match(HSQLParser.BOOLEAN);
				_localctx.dt=SingularDataType.BOOLEAN
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterOperator(): AlterOperatorContext {
		let _localctx: AlterOperatorContext = new AlterOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, HSQLParser.RULE_alterOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HSQLParser.ADD) | (1 << HSQLParser.DROP) | (1 << HSQLParser.MODIFY))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overDefinition(): OverDefinitionContext {
		let _localctx: OverDefinitionContext = new OverDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, HSQLParser.RULE_overDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.overDefinitionRoot();
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.T__0) {
				{
				{
				this.state = 349;
				this.match(HSQLParser.T__0);
				this.state = 350;
				this.overDefinitionTail();
				}
				}
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overDefinitionRoot(): OverDefinitionRootContext {
		let _localctx: OverDefinitionRootContext = new OverDefinitionRootContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, HSQLParser.RULE_overDefinitionRoot);
		try {
			this.state = 359;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				_localctx = new NormalIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 356;
				this.match(HSQLParser.IDENTIFIER);
				}
				break;
			case HSQLParser.MODULO:
				_localctx = new RootIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 357;
				this.match(HSQLParser.MODULO);
				}
				break;
			case HSQLParser.XOR:
				_localctx = new ParentIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 358;
				this.match(HSQLParser.XOR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overDefinitionTail(): OverDefinitionTailContext {
		let _localctx: OverDefinitionTailContext = new OverDefinitionTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, HSQLParser.RULE_overDefinitionTail);
		try {
			this.state = 363;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				_localctx = new NormalTailIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 361;
				this.match(HSQLParser.IDENTIFIER);
				}
				break;
			case HSQLParser.XOR:
				_localctx = new ParentTailIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 362;
				this.match(HSQLParser.XOR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, HSQLParser.RULE_definition);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 370;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 366;
					this.match(HSQLParser.T__0);
					this.state = 367;
					this.match(HSQLParser.IDENTIFIER);
					}
					}
				}
				this.state = 372;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, HSQLParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public booleanExpression(): BooleanExpressionContext;
	public booleanExpression(_p: number): BooleanExpressionContext;
	// @RuleVersion(0)
	public booleanExpression(_p?: number): BooleanExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, _parentState);
		let _prevctx: BooleanExpressionContext = _localctx;
		let _startState: number = 76;
		this.enterRecursionRule(_localctx, 76, HSQLParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
			case HSQLParser.IDENTIFIER:
			case HSQLParser.BSTART_:
				{
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 376;
				(_localctx as PredicatedContext)._valueExpression = this.valueExpression();
				this.state = 378;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 377;
					this.predicate((_localctx as PredicatedContext)._valueExpression);
					}
					break;
				}
				}
				break;
			case HSQLParser.NOT:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 380;
				this.match(HSQLParser.NOT);
				this.state = 381;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 392;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 390;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, HSQLParser.RULE_booleanExpression);
						this.state = 384;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 385;
						(_localctx as LogicalBinaryContext)._operator = this.match(HSQLParser.AND);
						this.state = 386;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, HSQLParser.RULE_booleanExpression);
						this.state = 387;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 388;
						(_localctx as LogicalBinaryContext)._operator = this.match(HSQLParser.OR);
						this.state = 389;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 394;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicate(ctx: ParserRuleContext): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state, ctx);
		this.enterRule(_localctx, 78, HSQLParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 414;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				_localctx = new ComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 395;
				this.comparisonOperator();
				this.state = 396;
				(_localctx as ComparisonContext)._right = this.valueExpression();
				}
				break;

			case 2:
				_localctx = new BetweenContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.NOT) {
					{
					this.state = 398;
					this.match(HSQLParser.NOT);
					}
				}

				this.state = 401;
				this.match(HSQLParser.BETWEEN);
				this.state = 402;
				(_localctx as BetweenContext)._lower = this.valueExpression();
				this.state = 403;
				this.match(HSQLParser.AND);
				this.state = 404;
				(_localctx as BetweenContext)._upper = this.valueExpression();
				}
				break;

			case 3:
				_localctx = new InListContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.NOT) {
					{
					this.state = 406;
					this.match(HSQLParser.NOT);
					}
				}

				this.state = 409;
				this.match(HSQLParser.IN);
				this.state = 410;
				this.match(HSQLParser.BSTART_);
				this.state = 411;
				this.valueExpressionList();
				this.state = 412;
				this.match(HSQLParser.BEND_);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueExpressionList(): ValueExpressionListContext {
		let _localctx: ValueExpressionListContext = new ValueExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, HSQLParser.RULE_valueExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this.valueExpression();
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 417;
				this.match(HSQLParser.COMMA_);
				this.state = 418;
				this.valueExpression();
				}
				}
				this.state = 423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueExpression(): ValueExpressionContext {
		let _localctx: ValueExpressionContext = new ValueExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, HSQLParser.RULE_valueExpression);
		try {
			_localctx = new ValueExpressionDefaultContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.primaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, HSQLParser.RULE_primaryExpression);
		try {
			this.state = 434;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				_localctx = new IdentifierLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 426;
				this.match(HSQLParser.IDENTIFIER);
				}
				break;
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				_localctx = new NumericLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 427;
				this.number();
				}
				break;
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 428;
				this.booleanValue();
				}
				break;
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 429;
				this.string();
				}
				break;
			case HSQLParser.BSTART_:
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 430;
				this.match(HSQLParser.BSTART_);
				this.state = 431;
				this.expression();
				this.state = 432;
				this.match(HSQLParser.BEND_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, HSQLParser.RULE_number);
		try {
			this.state = 439;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.DECIMAL_VALUE:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 436;
				this.match(HSQLParser.DECIMAL_VALUE);
				}
				break;
			case HSQLParser.DOUBLE_VALUE:
				_localctx = new DoubleLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 437;
				this.match(HSQLParser.DOUBLE_VALUE);
				}
				break;
			case HSQLParser.INTEGER_VALUE:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 438;
				this.match(HSQLParser.INTEGER_VALUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, HSQLParser.RULE_string);
		try {
			this.state = 447;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.STRING:
				_localctx = new BasicStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 441;
				this.match(HSQLParser.STRING);
				}
				break;
			case HSQLParser.UNICODE_STRING:
				_localctx = new UnicodeStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 442;
				this.match(HSQLParser.UNICODE_STRING);
				this.state = 445;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					this.state = 443;
					this.match(HSQLParser.UESCAPE);
					this.state = 444;
					this.match(HSQLParser.STRING);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanValue(): BooleanValueContext {
		let _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, HSQLParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			_la = this._input.LA(1);
			if (!(_la === HSQLParser.TRUE || _la === HSQLParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStmt(): ImportStmtContext {
		let _localctx: ImportStmtContext = new ImportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, HSQLParser.RULE_importStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.match(HSQLParser.IMPORT);
			this.state = 452;
			this.overDefinition();
			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.AS) {
				{
				this.state = 453;
				this.match(HSQLParser.AS);
				this.state = 454;
				this.match(HSQLParser.IDENTIFIER);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public outputStmt(): OutputStmtContext {
		let _localctx: OutputStmtContext = new OutputStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, HSQLParser.RULE_outputStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.match(HSQLParser.OUTPUT);
			this.state = 458;
			this.attribute();
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TITLE || _la === HSQLParser.IDENTIFIER) {
				{
				this.state = 459;
				this.namedOutput();
				}
			}

			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.FILE || _la === HSQLParser.STRING) {
				{
				this.state = 462;
				this.toFile();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, HSQLParser.RULE_attribute);
		try {
			this.state = 468;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 465;
				this.definition();
				}
				break;
			case HSQLParser.SELECT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 466;
				this.selectStmt();
				}
				break;
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 467;
				this.literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedOutput(): NamedOutputContext {
		let _localctx: NamedOutputContext = new NamedOutputContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, HSQLParser.RULE_namedOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TITLE) {
				{
				this.state = 470;
				this.match(HSQLParser.TITLE);
				}
			}

			this.state = 473;
			this.match(HSQLParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public toFile(): ToFileContext {
		let _localctx: ToFileContext = new ToFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, HSQLParser.RULE_toFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.FILE) {
				{
				this.state = 475;
				this.match(HSQLParser.FILE);
				}
			}

			this.state = 478;
			this.match(HSQLParser.STRING);
			this.state = 480;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OVERWRITE) {
				{
				this.state = 479;
				this.match(HSQLParser.OVERWRITE);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scope(): ScopeContext {
		let _localctx: ScopeContext = new ScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, HSQLParser.RULE_scope);
		try {
			this.state = 485;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.EXPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 482;
				this.match(HSQLParser.EXPORT);
				}
				break;
			case HSQLParser.SHARED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 483;
				this.match(HSQLParser.SHARED);
				}
				break;
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarations(): DeclarationsContext {
		let _localctx: DeclarationsContext = new DeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, HSQLParser.RULE_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.DECLARE) {
				{
				{
				this.state = 487;
				this.declaration();
				}
				}
				this.state = 492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 493;
			this.match(HSQLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, HSQLParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.match(HSQLParser.DECLARE);
			this.state = 496;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 497;
			this.match(HSQLParser.AS);
			this.state = 498;
			this.typeClauses();
			this.state = 499;
			this.match(HSQLParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeClauses(): TypeClausesContext {
		let _localctx: TypeClausesContext = new TypeClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, HSQLParser.RULE_typeClauses);
		try {
			this.state = 503;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.TABLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 501;
				this.tableClause();
				}
				break;
			case HSQLParser.LAYOUT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 502;
				this.layoutClause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableClause(): TableClauseContext {
		let _localctx: TableClauseContext = new TableClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, HSQLParser.RULE_tableClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this.match(HSQLParser.TABLE);
			this.state = 506;
			this.match(HSQLParser.BSTART_);
			this.state = 507;
			this.colDefs();
			this.state = 508;
			this.match(HSQLParser.BEND_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public layoutClause(): LayoutClauseContext {
		let _localctx: LayoutClauseContext = new LayoutClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, HSQLParser.RULE_layoutClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this.match(HSQLParser.LAYOUT);
			this.state = 511;
			this.match(HSQLParser.BSTART_);
			this.state = 512;
			this.colDefs();
			this.state = 513;
			this.match(HSQLParser.BEND_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public colDefs(): ColDefsContext {
		let _localctx: ColDefsContext = new ColDefsContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, HSQLParser.RULE_colDefs);
		let _la: number;
		try {
			this.state = 524;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.REAL_TYPE:
			case HSQLParser.INTEGER_TYPE:
			case HSQLParser.DECIMAL_TYPE:
			case HSQLParser.VARSTRING_TYPE:
			case HSQLParser.STRING_TYPE:
			case HSQLParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 515;
				this.colDef();
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HSQLParser.COMMA_) {
					{
					{
					this.state = 516;
					this.match(HSQLParser.COMMA_);
					this.state = 517;
					this.colDef();
					}
					}
					this.state = 522;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case HSQLParser.BEND_:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public colDef(): ColDefContext {
		let _localctx: ColDefContext = new ColDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, HSQLParser.RULE_colDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this.dataType();
			this.state = 527;
			this.match(HSQLParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 15:
			return this.selectFromRef_sempred(_localctx as SelectFromRefContext, predIndex);

		case 38:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);
		}
		return true;
	}
	private selectFromRef_sempred(_localctx: SelectFromRefContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03j\u0214\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x03" +
		"\x02\x07\x02z\n\x02\f\x02\x0E\x02}\v\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x04\x05\x04\x87\n\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06\x90\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\x95\n\x07\x03\b\x03\b\x05\b\x99\n\b\x03\b\x03\b\x03\b" +
		"\x03\b\x05\b\x9F\n\b\x03\b\x05\b\xA2\n\b\x03\b\x03\b\x03\b\x05\b\xA7\n" +
		"\b\x03\b\x05\b\xAA\n\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v" +
		"\x03\v\x07\v\xB5\n\v\f\v\x0E\v\xB8\v\v\x03\f\x03\f\x03\f\x07\f\xBD\n\f" +
		"\f\f\x0E\f\xC0\v\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\xC9\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xD0" +
		"\n\x0E\x03\x0E\x03\x0E\x05\x0E\xD4\n\x0E\x03\x0E\x05\x0E\xD7\n\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xE0\n\x10" +
		"\f\x10\x0E\x10\xE3\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\xED\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07" +
		"\x11\xF3\n\x11\f\x11\x0E\x11\xF6\v\x11\x03\x11\x03\x11\x05\x11\xFA\n\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0101\n\x11\x07\x11\u0103" +
		"\n\x11\f\x11\x0E\x11\u0106\v\x11\x03\x12\x05\x12\u0109\n\x12\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x05\x13\u010F\n\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\u0114\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0119\n\x13\x03\x13\x03\x13" +
		"\x05\x13\u011D\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03" +
		"\x18\x07\x18\u012F\n\x18\f\x18\x0E\x18\u0132\v\x18\x03\x19\x03\x19\x05" +
		"\x19\u0136\n\x19\x03\x1A\x03\x1A\x05\x1A\u013A\n\x1A\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0142\n\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x05 \u014E\n \x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u015B\n!\x03\"\x03" +
		"\"\x03#\x03#\x03#\x07#\u0162\n#\f#\x0E#\u0165\v#\x03$\x03$\x03$\x05$\u016A" +
		"\n$\x03%\x03%\x05%\u016E\n%\x03&\x03&\x03&\x07&\u0173\n&\f&\x0E&\u0176" +
		"\v&\x03\'\x03\'\x03(\x03(\x03(\x05(\u017D\n(\x03(\x03(\x05(\u0181\n(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x07(\u0189\n(\f(\x0E(\u018C\v(\x03)\x03)\x03" +
		")\x03)\x05)\u0192\n)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u019A\n)\x03)" +
		"\x03)\x03)\x03)\x03)\x05)\u01A1\n)\x03*\x03*\x03*\x07*\u01A6\n*\f*\x0E" +
		"*\u01A9\v*\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u01B5" +
		"\n,\x03-\x03-\x03-\x05-\u01BA\n-\x03.\x03.\x03.\x03.\x05.\u01C0\n.\x05" +
		".\u01C2\n.\x03/\x03/\x030\x030\x030\x030\x050\u01CA\n0\x031\x031\x031" +
		"\x051\u01CF\n1\x031\x051\u01D2\n1\x032\x032\x032\x052\u01D7\n2\x033\x05" +
		"3\u01DA\n3\x033\x033\x034\x054\u01DF\n4\x034\x034\x054\u01E3\n4\x035\x03" +
		"5\x035\x055\u01E8\n5\x036\x076\u01EB\n6\f6\x0E6\u01EE\v6\x036\x036\x03" +
		"7\x037\x037\x037\x037\x037\x038\x038\x058\u01FA\n8\x039\x039\x039\x03" +
		"9\x039\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x07;\u0209\n;\f;\x0E;\u020C" +
		"\v;\x03;\x05;\u020F\n;\x03<\x03<\x03<\x03<\x02\x02\x04 N=\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02\x02\x06\x03\x02HM\x03\x02" +
		"TY\x03\x02\x0F\x11\x03\x0267\x02\u0229\x02{\x03\x02\x02\x02\x04\x80\x03" +
		"\x02\x02\x02\x06\x86\x03\x02\x02\x02\b\x88\x03\x02\x02\x02\n\x8F\x03\x02" +
		"\x02\x02\f\x94\x03\x02\x02\x02\x0E\x96\x03\x02\x02\x02\x10\xAB\x03\x02" +
		"\x02\x02\x12\xAD\x03\x02\x02\x02\x14\xB1\x03\x02\x02\x02\x16\xB9\x03\x02" +
		"\x02\x02\x18\xC1\x03\x02\x02\x02\x1A\xD6\x03\x02\x02\x02\x1C\xD8\x03\x02" +
		"\x02\x02\x1E\xDB\x03\x02\x02\x02 \xF9\x03\x02\x02\x02\"\u0108\x03\x02" +
		"\x02\x02$\u011C\x03\x02\x02\x02&\u0120\x03\x02\x02\x02(\u0122\x03\x02" +
		"\x02\x02*\u0125\x03\x02\x02\x02,\u0129\x03\x02\x02\x02.\u012B\x03\x02" +
		"\x02\x020\u0135\x03\x02\x02\x022\u0137\x03\x02\x02\x024\u013B\x03\x02" +
		"\x02\x026\u013E\x03\x02\x02\x028\u0143\x03\x02\x02\x02:\u0146\x03\x02" +
		"\x02\x02<\u0148\x03\x02\x02\x02>\u014D\x03\x02\x02\x02@\u015A\x03\x02" +
		"\x02\x02B\u015C\x03\x02\x02\x02D\u015E\x03\x02\x02\x02F\u0169\x03\x02" +
		"\x02\x02H\u016D\x03\x02\x02\x02J\u016F\x03\x02\x02\x02L\u0177\x03\x02" +
		"\x02\x02N\u0180\x03\x02\x02\x02P\u01A0\x03\x02\x02\x02R\u01A2\x03\x02" +
		"\x02\x02T\u01AA\x03\x02\x02\x02V\u01B4\x03\x02\x02\x02X\u01B9\x03\x02" +
		"\x02\x02Z\u01C1\x03\x02\x02\x02\\\u01C3\x03\x02\x02\x02^\u01C5\x03\x02" +
		"\x02\x02`\u01CB\x03\x02\x02\x02b\u01D6\x03\x02\x02\x02d\u01D9\x03\x02" +
		"\x02\x02f\u01DE\x03\x02\x02\x02h\u01E7\x03\x02\x02\x02j\u01EC\x03\x02" +
		"\x02\x02l\u01F1\x03\x02\x02\x02n\u01F9\x03\x02\x02\x02p\u01FB\x03\x02" +
		"\x02\x02r\u0200\x03\x02\x02\x02t\u020E\x03\x02\x02\x02v\u0210\x03\x02" +
		"\x02\x02xz\x05\x04\x03\x02yx\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02" +
		"\x02\x02{|\x03\x02\x02\x02|~\x03\x02\x02\x02}{\x03\x02\x02\x02~\x7F\x07" +
		"\x02\x02\x03\x7F\x03\x03\x02\x02\x02\x80\x81\x05\x06\x04\x02\x81\x82\x07" +
		"G\x02\x02\x82\x05\x03\x02\x02\x02\x83\x87\x05\b\x05\x02\x84\x87\x05\f" +
		"\x07\x02\x85\x87\x05^0\x02\x86\x83\x03\x02\x02\x02\x86\x84\x03\x02\x02" +
		"\x02\x86\x85\x03\x02\x02\x02\x87\x07\x03\x02\x02\x02\x88\x89\x05h5\x02" +
		"\x89\x8A\x07`\x02\x02\x8A\x8B\x07H\x02\x02\x8B\x8C\x05\n\x06\x02\x8C\t" +
		"\x03\x02\x02\x02\x8D\x90\x05J&\x02\x8E\x90\x05\f\x07\x02\x8F\x8D\x03\x02" +
		"\x02\x02\x8F\x8E\x03\x02\x02\x02\x90\v\x03\x02\x02\x02\x91\x95\x05\x0E" +
		"\b\x02\x92\x95\x05`1\x02\x93\x95\x05> \x02\x94\x91\x03\x02\x02\x02\x94" +
		"\x92\x03\x02\x02\x02\x94\x93\x03\x02\x02\x02\x95\r\x03\x02\x02\x02\x96" +
		"\x98\x07%\x02\x02\x97\x99\x05\x10\t\x02\x98\x97\x03\x02\x02\x02\x98\x99" +
		"\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x05\x16\f\x02\x9B\x9E" +
		"\x05\x1E\x10\x02\x9C\x9D\x07)\x02\x02\x9D\x9F\x05&\x14\x02\x9E\x9C\x03" +
		"\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\xA2\x05" +
		"\x12\n\x02\xA1\xA0\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA6\x03" +
		"\x02\x02\x02\xA3\xA4\x07\x16\x02\x02\xA4\xA5\x07\x18\x02\x02\xA5\xA7\x05" +
		".\x18\x02\xA6\xA3\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9\x03" +
		"\x02\x02\x02\xA8\xAA\x056\x1C\x02\xA9\xA8\x03\x02\x02\x02\xA9\xAA\x03" +
		"\x02\x02\x02\xAA\x0F\x03\x02\x02\x02\xAB\xAC\x07+\x02\x02\xAC\x11\x03" +
		"\x02\x02\x02\xAD\xAE\x07\x17\x02\x02\xAE\xAF\x07\x18\x02\x02\xAF\xB0\x05" +
		",\x17\x02\xB0\x13\x03\x02\x02\x02\xB1\xB6\x07`\x02\x02\xB2\xB3\x07a\x02" +
		"\x02\xB3\xB5\x07`\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB8\x03\x02\x02" +
		"\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\x15\x03\x02\x02" +
		"\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBE\x05\x18\r\x02\xBA\xBB\x07a\x02\x02" +
		"\xBB\xBD\x05\x18\r\x02\xBC\xBA\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02" +
		"\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\x17\x03\x02\x02\x02" +
		"\xC0\xBE\x03\x02\x02\x02\xC1\xC2\x05\x1A\x0E\x02\xC2\x19\x03\x02\x02\x02" +
		"\xC3\xC4\x07`\x02\x02\xC4\xC5\x07b\x02\x02\xC5\xC6\x07P\x02\x02\xC6\xC8" +
		"\x07c\x02\x02\xC7\xC9\x05\x1C\x0F\x02\xC8\xC7\x03\x02\x02\x02\xC8\xC9" +
		"\x03\x02\x02\x02\xC9\xD7\x03\x02\x02\x02\xCA\xCB\x07`\x02\x02\xCB\xCC" +
		"\x07b\x02\x02\xCC\xCD\x07`\x02\x02\xCD\xCF\x07c\x02\x02\xCE\xD0\x05\x1C" +
		"\x0F\x02\xCF\xCE\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD7\x03\x02" +
		"\x02\x02\xD1\xD3\x07`\x02\x02\xD2\xD4\x05\x1C\x0F\x02\xD3\xD2\x03\x02" +
		"\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD7\x07P" +
		"\x02\x02\xD6\xC3\x03\x02\x02\x02\xD6\xCA\x03\x02\x02\x02\xD6\xD1\x03\x02" +
		"\x02\x02\xD6\xD5\x03\x02\x02\x02\xD7\x1B\x03\x02\x02\x02\xD8\xD9\x079" +
		"\x02\x02\xD9\xDA\x07`\x02\x02\xDA\x1D\x03\x02\x02\x02\xDB\xDC\x07\'\x02" +
		"\x02\xDC\xE1\x05 \x11\x02\xDD\xDE\x07a\x02\x02\xDE\xE0\x05 \x11\x02\xDF" +
		"\xDD\x03\x02\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1" +
		"\xE2\x03\x02\x02\x02\xE2\x1F\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4" +
		"\xE5\b\x11\x01\x02\xE5\xE6\x07b\x02\x02\xE6\xE7\x05\x0E\b\x02\xE7\xE8" +
		"\x07c\x02\x02\xE8\xE9\x05\"\x12\x02\xE9\xFA\x03\x02\x02\x02\xEA\xEC\x05" +
		"J&\x02\xEB\xED\x05\"\x12\x02\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03\x02\x02" +
		"\x02\xED\xFA\x03\x02\x02\x02\xEE\xEF\x07b\x02\x02\xEF\xF4\x05 \x11\x02" +
		"\xF0\xF1\x07a\x02\x02\xF1\xF3\x05 \x11\x02\xF2\xF0\x03\x02\x02\x02\xF3" +
		"\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5" +
		"\xF7\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF8\x07c\x02\x02\xF8" +
		"\xFA\x03\x02\x02\x02\xF9\xE4\x03\x02\x02\x02\xF9\xEA\x03\x02\x02\x02\xF9" +
		"\xEE\x03\x02\x02\x02\xFA\u0104\x03\x02\x02\x02\xFB\xFC\f\x03\x02\x02\xFC" +
		"\xFD\x05$\x13\x02\xFD\xFE\x05 \x11\x02\xFE\u0100\x05(\x15\x02\xFF\u0101" +
		"\x05\"\x12\x02\u0100\xFF\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101" +
		"\u0103\x03\x02\x02\x02\u0102\xFB\x03\x02\x02\x02\u0103\u0106\x03\x02\x02" +
		"\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105!\x03" +
		"\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0107\u0109\x079\x02\x02\u0108" +
		"\u0107\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x03\x02" +
		"\x02\x02\u010A\u010B\x07`\x02\x02\u010B#\x03\x02\x02\x02\u010C\u010E\x07" +
		"0\x02\x02\u010D\u010F\x073\x02\x02\u010E\u010D\x03\x02\x02\x02\u010E\u010F" +
		"\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u011D\b\x13\x01\x02" +
		"\u0111\u0113\x071\x02\x02\u0112\u0114\x073\x02\x02\u0113\u0112\x03\x02" +
		"\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115" +
		"\u011D\b\x13\x01\x02\u0116\u0118\x072\x02\x02\u0117\u0119\x073\x02\x02" +
		"\u0118\u0117\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A\x03" +
		"\x02\x02\x02\u011A\u011D\b\x13\x01\x02\u011B\u011D\x07/\x02\x02\u011C" +
		"\u010C\x03\x02\x02\x02\u011C\u0111\x03\x02\x02\x02\u011C\u0116\x03\x02" +
		"\x02\x02\u011C\u011B\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D" +
		"\u011E\x03\x02\x02\x02\u011E\u011F\x07.\x02\x02\u011F%\x03\x02\x02\x02" +
		"\u0120\u0121\x05N(\x02\u0121\'\x03\x02\x02\x02\u0122\u0123\x07!\x02\x02" +
		"\u0123\u0124\x05*\x16\x02\u0124)\x03\x02\x02\x02\u0125\u0126\x05J&\x02" +
		"\u0126\u0127\x05:\x1E\x02\u0127\u0128\x05J&\x02\u0128+\x03\x02\x02\x02" +
		"\u0129\u012A\x05\x14\v\x02\u012A-\x03\x02\x02\x02\u012B\u0130\x050\x19" +
		"\x02\u012C\u012D\x07a\x02\x02\u012D\u012F\x050\x19\x02\u012E\u012C\x03" +
		"\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130" +
		"\u0131\x03\x02\x02\x02\u0131/\x03\x02\x02\x02\u0132\u0130\x03\x02\x02" +
		"\x02\u0133\u0136\x052\x1A\x02\u0134\u0136\x054\x1B\x02\u0135\u0133\x03" +
		"\x02\x02\x02\u0135\u0134\x03\x02\x02\x02\u01361\x03\x02\x02\x02\u0137" +
		"\u0139\x07`\x02\x02\u0138\u013A\x07\x14\x02\x02\u0139\u0138\x03\x02\x02" +
		"\x02\u0139\u013A\x03\x02\x02\x02\u013A3\x03\x02\x02\x02\u013B\u013C\x07" +
		"`\x02\x02\u013C\u013D\x07\x15\x02\x02\u013D5\x03\x02\x02\x02\u013E\u013F" +
		"\x07B\x02\x02\u013F\u0141\x07]\x02\x02\u0140\u0142\x058\x1D\x02\u0141" +
		"\u0140\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u01427\x03\x02\x02" +
		"\x02\u0143\u0144\x07C\x02\x02\u0144\u0145\x07]\x02\x02\u01459\x03\x02" +
		"\x02\x02\u0146\u0147\t\x02\x02\x02\u0147;\x03\x02\x02\x02\u0148\u0149" +
		"\t\x03\x02\x02\u0149=\x03\x02\x02\x02\u014A\u014E\x05X-\x02\u014B\u014E" +
		"\x05Z.\x02\u014C\u014E\x05\\/\x02\u014D\u014A\x03\x02\x02\x02\u014D\u014B" +
		"\x03\x02\x02\x02\u014D\u014C\x03\x02\x02\x02\u014E?\x03\x02\x02\x02\u014F" +
		"\u0150\x07\x04\x02\x02\u0150\u015B\b!\x01\x02\u0151\u015B\x07\x05\x02" +
		"\x02\u0152\u0153\x07\x06\x02\x02\u0153\u015B\b!\x01\x02\u0154\u0155\x07" +
		"\x07\x02\x02\u0155\u015B\b!\x01\x02\u0156\u0157\x07\b\x02\x02\u0157\u015B" +
		"\b!\x01\x02\u0158\u0159\x07\t\x02\x02\u0159\u015B\b!\x01\x02\u015A\u014F" +
		"\x03\x02\x02\x02\u015A\u0151\x03\x02\x02\x02\u015A\u0152\x03\x02\x02\x02" +
		"\u015A\u0154\x03\x02\x02\x02\u015A\u0156\x03\x02\x02\x02\u015A\u0158\x03" +
		"\x02\x02\x02\u015BA\x03\x02\x02\x02\u015C\u015D\t\x04\x02\x02\u015DC\x03" +
		"\x02\x02\x02\u015E\u0163\x05F$\x02\u015F\u0160\x07\x03\x02\x02\u0160\u0162" +
		"\x05H%\x02\u0161\u015F\x03\x02\x02\x02\u0162\u0165\x03\x02\x02\x02\u0163" +
		"\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164E\x03\x02\x02" +
		"\x02\u0165\u0163\x03\x02\x02\x02\u0166\u016A\x07`\x02\x02\u0167\u016A" +
		"\x07R\x02\x02\u0168\u016A\x07S\x02\x02\u0169\u0166\x03\x02\x02\x02\u0169" +
		"\u0167\x03\x02\x02\x02\u0169\u0168\x03\x02\x02\x02\u016AG\x03\x02\x02" +
		"\x02\u016B\u016E\x07`\x02\x02\u016C\u016E\x07S\x02\x02\u016D\u016B\x03" +
		"\x02\x02\x02\u016D\u016C\x03\x02\x02\x02\u016EI\x03\x02\x02\x02\u016F" +
		"\u0174\x07`\x02\x02\u0170\u0171\x07\x03\x02\x02\u0171\u0173\x07`\x02\x02" +
		"\u0172\u0170\x03\x02\x02\x02\u0173\u0176\x03\x02\x02\x02\u0174\u0172\x03" +
		"\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175K\x03\x02\x02\x02\u0176" +
		"\u0174\x03\x02\x02\x02\u0177\u0178\x05N(\x02\u0178M\x03\x02\x02\x02\u0179" +
		"\u017A\b(\x01\x02\u017A\u017C\x05T+\x02\u017B\u017D\x05P)\x02\u017C\u017B" +
		"\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u0181\x03\x02\x02\x02" +
		"\u017E\u017F\x07V\x02\x02\u017F\u0181\x05N(\x05\u0180\u0179\x03\x02\x02" +
		"\x02\u0180\u017E\x03\x02\x02\x02\u0181\u018A\x03\x02\x02\x02\u0182\u0183" +
		"\f\x04\x02\x02\u0183\u0184\x07T\x02\x02\u0184\u0189\x05N(\x05\u0185\u0186" +
		"\f\x03\x02\x02\u0186\u0187\x07U\x02\x02\u0187\u0189\x05N(\x04\u0188\u0182" +
		"\x03\x02\x02\x02\u0188\u0185\x03\x02\x02\x02\u0189\u018C\x03\x02\x02\x02" +
		"\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018BO\x03\x02" +
		"\x02\x02\u018C\u018A\x03\x02\x02\x02\u018D\u018E\x05:\x1E\x02\u018E\u018F" +
		"\x05T+\x02\u018F\u01A1\x03\x02\x02\x02\u0190\u0192\x07V\x02\x02\u0191" +
		"\u0190\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0193\x03\x02" +
		"\x02\x02\u0193\u0194\x07X\x02\x02\u0194\u0195\x05T+\x02\u0195\u0196\x07" +
		"T\x02\x02\u0196\u0197\x05T+\x02\u0197\u01A1\x03\x02\x02\x02\u0198\u019A" +
		"\x07V\x02\x02\u0199\u0198\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02" +
		"\u019A\u019B\x03\x02\x02\x02\u019B\u019C\x07W\x02\x02\u019C\u019D\x07" +
		"b\x02\x02\u019D\u019E\x05R*\x02\u019E\u019F\x07c\x02\x02\u019F\u01A1\x03" +
		"\x02\x02\x02\u01A0\u018D\x03\x02\x02\x02\u01A0\u0191\x03\x02\x02\x02\u01A0" +
		"\u0199\x03\x02\x02\x02\u01A1Q\x03\x02\x02\x02\u01A2\u01A7\x05T+\x02\u01A3" +
		"\u01A4\x07a\x02\x02\u01A4\u01A6\x05T+\x02\u01A5\u01A3\x03\x02\x02\x02" +
		"\u01A6\u01A9\x03\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03" +
		"\x02\x02\x02\u01A8S\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA" +
		"\u01AB\x05V,\x02\u01ABU\x03\x02\x02\x02\u01AC\u01B5\x07`\x02\x02\u01AD" +
		"\u01B5\x05X-\x02\u01AE\u01B5\x05\\/\x02\u01AF\u01B5\x05Z.\x02\u01B0\u01B1" +
		"\x07b\x02\x02\u01B1\u01B2\x05L\'\x02\u01B2\u01B3\x07c\x02\x02\u01B3\u01B5" +
		"\x03\x02\x02\x02\u01B4\u01AC\x03\x02\x02\x02\u01B4\u01AD\x03\x02\x02\x02" +
		"\u01B4\u01AE\x03\x02\x02\x02\u01B4\u01AF\x03\x02\x02\x02\u01B4\u01B0\x03" +
		"\x02\x02\x02\u01B5W\x03\x02\x02\x02\u01B6\u01BA\x07^\x02\x02\u01B7\u01BA" +
		"\x07_\x02\x02\u01B8\u01BA\x07]\x02\x02\u01B9\u01B6\x03\x02\x02\x02\u01B9" +
		"\u01B7\x03\x02\x02\x02\u01B9\u01B8\x03\x02\x02\x02\u01BAY\x03\x02\x02" +
		"\x02\u01BB\u01C2\x07Z\x02\x02\u01BC\u01BF\x07[\x02\x02\u01BD\u01BE\x07" +
		"E\x02\x02\u01BE\u01C0\x07Z\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0" +
		"\x03\x02\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01BB\x03\x02\x02\x02" +
		"\u01C1\u01BC\x03\x02\x02\x02\u01C2[\x03\x02\x02\x02\u01C3\u01C4\t\x05" +
		"\x02\x02\u01C4]\x03\x02\x02\x02\u01C5\u01C6\x078\x02\x02\u01C6\u01C9\x05" +
		"D#\x02\u01C7\u01C8\x079\x02\x02\u01C8\u01CA\x07`\x02\x02\u01C9\u01C7\x03" +
		"\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA_\x03\x02\x02\x02\u01CB" +
		"\u01CC\x07\x1C\x02\x02\u01CC\u01CE\x05b2\x02\u01CD\u01CF\x05d3\x02\u01CE" +
		"\u01CD\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D1\x03\x02" +
		"\x02\x02\u01D0\u01D2\x05f4\x02\u01D1\u01D0\x03\x02\x02\x02\u01D1\u01D2" +
		"\x03\x02\x02\x02\u01D2a\x03\x02\x02\x02\u01D3\u01D7\x05J&\x02\u01D4\u01D7" +
		"\x05\x0E\b\x02\u01D5\u01D7\x05> \x02\u01D6\u01D3\x03\x02\x02\x02\u01D6" +
		"\u01D4\x03\x02\x02\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7c\x03\x02\x02" +
		"\x02\u01D8\u01DA\x07@\x02\x02\u01D9\u01D8\x03\x02\x02\x02\u01D9\u01DA" +
		"\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x07`\x02\x02" +
		"\u01DCe\x03\x02\x02\x02\u01DD\u01DF\x07<\x02\x02\u01DE\u01DD\x03\x02\x02" +
		"\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E2" +
		"\x07Z\x02\x02\u01E1\u01E3\x07\x1F\x02\x02\u01E2\u01E1\x03\x02\x02\x02" +
		"\u01E2\u01E3\x03\x02\x02\x02\u01E3g\x03\x02\x02\x02\u01E4\u01E8\x07\x12" +
		"\x02\x02\u01E5\u01E8\x07\x13\x02\x02\u01E6\u01E8\x03\x02\x02\x02\u01E7" +
		"\u01E4\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E6\x03\x02" +
		"\x02\x02\u01E8i\x03\x02\x02\x02\u01E9\u01EB\x05l7\x02\u01EA\u01E9\x03" +
		"\x02\x02\x02\u01EB\u01EE\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC" +
		"\u01ED\x03\x02\x02\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE\u01EC\x03\x02" +
		"\x02\x02\u01EF\u01F0\x07\x02\x02\x03\u01F0k\x03\x02\x02\x02\u01F1\u01F2" +
		"\x07&\x02\x02\u01F2\u01F3\x07`\x02\x02\u01F3\u01F4\x079\x02\x02\u01F4" +
		"\u01F5\x05n8\x02\u01F5\u01F6\x07G\x02\x02\u01F6m\x03\x02\x02\x02\u01F7" +
		"\u01FA\x05p9\x02\u01F8\u01FA\x05r:\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9" +
		"\u01F8\x03\x02\x02\x02\u01FAo\x03\x02\x02\x02\u01FB\u01FC\x07\f\x02\x02" +
		"\u01FC\u01FD\x07b\x02\x02\u01FD\u01FE\x05t;\x02\u01FE\u01FF\x07c\x02\x02" +
		"\u01FFq\x03\x02\x02\x02\u0200\u0201\x07;\x02\x02\u0201\u0202\x07b\x02" +
		"\x02\u0202\u0203\x05t;\x02\u0203\u0204\x07c\x02\x02\u0204s\x03\x02\x02" +
		"\x02\u0205\u020A\x05v<\x02\u0206\u0207\x07a\x02\x02\u0207\u0209\x05v<" +
		"\x02\u0208\u0206\x03\x02\x02\x02\u0209\u020C\x03\x02\x02\x02\u020A\u0208" +
		"\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020F\x03\x02\x02\x02" +
		"\u020C\u020A\x03\x02\x02\x02\u020D\u020F\x03\x02\x02\x02\u020E\u0205\x03" +
		"\x02\x02\x02\u020E\u020D\x03\x02\x02\x02\u020Fu\x03\x02\x02\x02\u0210" +
		"\u0211\x05@!\x02\u0211\u0212\x07`\x02\x02\u0212w\x03\x02\x02\x02>{\x86" +
		"\x8F\x94\x98\x9E\xA1\xA6\xA9\xB6\xBE\xC8\xCF\xD3\xD6\xE1\xEC\xF4\xF9\u0100" +
		"\u0104\u0108\u010E\u0113\u0118\u011C\u0130\u0135\u0139\u0141\u014D\u015A" +
		"\u0163\u0169\u016D\u0174\u017C\u0180\u0188\u018A\u0191\u0199\u01A0\u01A7" +
		"\u01B4\u01B9\u01BF\u01C1\u01C9\u01CE\u01D1\u01D6\u01D9\u01DE\u01E2\u01E7" +
		"\u01EC\u01F9\u020A\u020E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HSQLParser.__ATN) {
			HSQLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HSQLParser._serializedATN));
		}

		return HSQLParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(HSQLParser.EOF, 0); }
	public completestmt(): CompletestmtContext[];
	public completestmt(i: number): CompletestmtContext;
	public completestmt(i?: number): CompletestmtContext | CompletestmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CompletestmtContext);
		} else {
			return this.getRuleContext(i, CompletestmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_program; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompletestmtContext extends ParserRuleContext {
	public stmt(): StmtContext {
		return this.getRuleContext(0, StmtContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(HSQLParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_completestmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitCompletestmt) {
			return visitor.visitCompletestmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public definitionStmt(): DefinitionStmtContext | undefined {
		return this.tryGetRuleContext(0, DefinitionStmtContext);
	}
	public actionStmt(): ActionStmtContext | undefined {
		return this.tryGetRuleContext(0, ActionStmtContext);
	}
	public importStmt(): ImportStmtContext | undefined {
		return this.tryGetRuleContext(0, ImportStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_stmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionStmtContext extends ParserRuleContext {
	public _label!: Token;
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	public EQ(): TerminalNode { return this.getToken(HSQLParser.EQ, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_definitionStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDefinitionStmt) {
			return visitor.visitDefinitionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public definition(): DefinitionContext | undefined {
		return this.tryGetRuleContext(0, DefinitionContext);
	}
	public actionStmt(): ActionStmtContext | undefined {
		return this.tryGetRuleContext(0, ActionStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_expr; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionStmtContext extends ParserRuleContext {
	public selectStmt(): SelectStmtContext | undefined {
		return this.tryGetRuleContext(0, SelectStmtContext);
	}
	public outputStmt(): OutputStmtContext | undefined {
		return this.tryGetRuleContext(0, OutputStmtContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_actionStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitActionStmt) {
			return visitor.visitActionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectStmtContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(HSQLParser.SELECT, 0); }
	public selectColumns(): SelectColumnsContext {
		return this.getRuleContext(0, SelectColumnsContext);
	}
	public selectFromClause(): SelectFromClauseContext {
		return this.getRuleContext(0, SelectFromClauseContext);
	}
	public distinctClause(): DistinctClauseContext | undefined {
		return this.tryGetRuleContext(0, DistinctClauseContext);
	}
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.WHERE, 0); }
	public selectWhereClause(): SelectWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, SelectWhereClauseContext);
	}
	public selectGroupByClause(): SelectGroupByClauseContext | undefined {
		return this.tryGetRuleContext(0, SelectGroupByClauseContext);
	}
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.ORDER, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.BY, 0); }
	public orderByClause(): OrderByClauseContext | undefined {
		return this.tryGetRuleContext(0, OrderByClauseContext);
	}
	public limitOffsetClause(): LimitOffsetClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitOffsetClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectStmt) {
			return visitor.visitSelectStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DistinctClauseContext extends ParserRuleContext {
	public DISTINCT(): TerminalNode { return this.getToken(HSQLParser.DISTINCT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_distinctClause; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDistinctClause) {
			return visitor.visitDistinctClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectGroupByClauseContext extends ParserRuleContext {
	public GROUP(): TerminalNode { return this.getToken(HSQLParser.GROUP, 0); }
	public BY(): TerminalNode { return this.getToken(HSQLParser.BY, 0); }
	public groupByClause(): GroupByClauseContext {
		return this.getRuleContext(0, GroupByClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectGroupByClause; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectGroupByClause) {
			return visitor.visitSelectGroupByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdSetContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.IDENTIFIER);
		} else {
			return this.getToken(HSQLParser.IDENTIFIER, i);
		}
	}
	public COMMA_(): TerminalNode[];
	public COMMA_(i: number): TerminalNode;
	public COMMA_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.COMMA_);
		} else {
			return this.getToken(HSQLParser.COMMA_, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_idSet; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitIdSet) {
			return visitor.visitIdSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectColumnsContext extends ParserRuleContext {
	public selectCol(): SelectColContext[];
	public selectCol(i: number): SelectColContext;
	public selectCol(i?: number): SelectColContext | SelectColContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectColContext);
		} else {
			return this.getRuleContext(i, SelectColContext);
		}
	}
	public COMMA_(): TerminalNode[];
	public COMMA_(i: number): TerminalNode;
	public COMMA_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.COMMA_);
		} else {
			return this.getToken(HSQLParser.COMMA_, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectColumns; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectColumns) {
			return visitor.visitSelectColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectColContext extends ParserRuleContext {
	public col(): ColContext {
		return this.getRuleContext(0, ColContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectCol; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectCol) {
			return visitor.visitSelectCol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_col; }
	public copyFrom(ctx: ColContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectAggregatedEverythingColContext extends ColContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public MULTIPLY(): TerminalNode { return this.getToken(HSQLParser.MULTIPLY, 0); }
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	public aliasingCol(): AliasingColContext | undefined {
		return this.tryGetRuleContext(0, AliasingColContext);
	}
	constructor(ctx: ColContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectAggregatedEverythingCol) {
			return visitor.visitSelectAggregatedEverythingCol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectAggregatedOneColContext extends ColContext {
	public _column!: Token;
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.IDENTIFIER);
		} else {
			return this.getToken(HSQLParser.IDENTIFIER, i);
		}
	}
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	public aliasingCol(): AliasingColContext | undefined {
		return this.tryGetRuleContext(0, AliasingColContext);
	}
	constructor(ctx: ColContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectAggregatedOneCol) {
			return visitor.visitSelectAggregatedOneCol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectOneColContext extends ColContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public aliasingCol(): AliasingColContext | undefined {
		return this.tryGetRuleContext(0, AliasingColContext);
	}
	constructor(ctx: ColContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectOneCol) {
			return visitor.visitSelectOneCol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WildAllContext extends ColContext {
	public MULTIPLY(): TerminalNode { return this.getToken(HSQLParser.MULTIPLY, 0); }
	constructor(ctx: ColContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitWildAll) {
			return visitor.visitWildAll(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasingColContext extends ParserRuleContext {
	public _alias!: Token;
	public AS(): TerminalNode { return this.getToken(HSQLParser.AS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_aliasingCol; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitAliasingCol) {
			return visitor.visitAliasingCol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectFromClauseContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(HSQLParser.FROM, 0); }
	public selectFromRef(): SelectFromRefContext[];
	public selectFromRef(i: number): SelectFromRefContext;
	public selectFromRef(i?: number): SelectFromRefContext | SelectFromRefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectFromRefContext);
		} else {
			return this.getRuleContext(i, SelectFromRefContext);
		}
	}
	public COMMA_(): TerminalNode[];
	public COMMA_(i: number): TerminalNode;
	public COMMA_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.COMMA_);
		} else {
			return this.getToken(HSQLParser.COMMA_, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectFromClause; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectFromClause) {
			return visitor.visitSelectFromClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectFromRefContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectFromRef; }
	public copyFrom(ctx: SelectFromRefContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectFromDerivedTableContext extends SelectFromRefContext {
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public selectStmt(): SelectStmtContext {
		return this.getRuleContext(0, SelectStmtContext);
	}
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	public selectAlias(): SelectAliasContext {
		return this.getRuleContext(0, SelectAliasContext);
	}
	constructor(ctx: SelectFromRefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectFromDerivedTable) {
			return visitor.visitSelectFromDerivedTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectFromDefinitionContext extends SelectFromRefContext {
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	public selectAlias(): SelectAliasContext | undefined {
		return this.tryGetRuleContext(0, SelectAliasContext);
	}
	constructor(ctx: SelectFromRefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectFromDefinition) {
			return visitor.visitSelectFromDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectBracketedFromTableContext extends SelectFromRefContext {
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public selectFromRef(): SelectFromRefContext[];
	public selectFromRef(i: number): SelectFromRefContext;
	public selectFromRef(i?: number): SelectFromRefContext | SelectFromRefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectFromRefContext);
		} else {
			return this.getRuleContext(i, SelectFromRefContext);
		}
	}
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	public COMMA_(): TerminalNode[];
	public COMMA_(i: number): TerminalNode;
	public COMMA_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.COMMA_);
		} else {
			return this.getToken(HSQLParser.COMMA_, i);
		}
	}
	constructor(ctx: SelectFromRefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectBracketedFromTable) {
			return visitor.visitSelectBracketedFromTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectJoinedTableContext extends SelectFromRefContext {
	public selectFromRef(): SelectFromRefContext[];
	public selectFromRef(i: number): SelectFromRefContext;
	public selectFromRef(i?: number): SelectFromRefContext | SelectFromRefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectFromRefContext);
		} else {
			return this.getRuleContext(i, SelectFromRefContext);
		}
	}
	public joinOperator(): JoinOperatorContext {
		return this.getRuleContext(0, JoinOperatorContext);
	}
	public joinConstraint(): JoinConstraintContext {
		return this.getRuleContext(0, JoinConstraintContext);
	}
	public selectAlias(): SelectAliasContext | undefined {
		return this.tryGetRuleContext(0, SelectAliasContext);
	}
	constructor(ctx: SelectFromRefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectJoinedTable) {
			return visitor.visitSelectJoinedTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectAliasContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectAlias; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectAlias) {
			return visitor.visitSelectAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinOperatorContext extends ParserRuleContext {
	public joinType: SelectJoinType = SelectJoinType.INNER;
	public JOIN(): TerminalNode { return this.getToken(HSQLParser.JOIN, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.LEFT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.RIGHT, 0); }
	public FULL(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.FULL, 0); }
	public INNER(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.INNER, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.OUTER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_joinOperator; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitJoinOperator) {
			return visitor.visitJoinOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectWhereClauseContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectWhereClause; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectWhereClause) {
			return visitor.visitSelectWhereClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinConstraintContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(HSQLParser.ON, 0); }
	public joinSpecification(): JoinSpecificationContext {
		return this.getRuleContext(0, JoinSpecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_joinConstraint; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitJoinConstraint) {
			return visitor.visitJoinConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinSpecificationContext extends ParserRuleContext {
	public _leftrecset!: DefinitionContext;
	public _rightrecset!: DefinitionContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_joinSpecification; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitJoinSpecification) {
			return visitor.visitJoinSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByClauseContext extends ParserRuleContext {
	public idSet(): IdSetContext {
		return this.getRuleContext(0, IdSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_groupByClause; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitGroupByClause) {
			return visitor.visitGroupByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByClauseContext extends ParserRuleContext {
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public COMMA_(): TerminalNode[];
	public COMMA_(i: number): TerminalNode;
	public COMMA_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.COMMA_);
		} else {
			return this.getToken(HSQLParser.COMMA_, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_orderByClause; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitOrderByClause) {
			return visitor.visitOrderByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SortItemContext extends ParserRuleContext {
	public ascSortItem(): AscSortItemContext | undefined {
		return this.tryGetRuleContext(0, AscSortItemContext);
	}
	public descSortItem(): DescSortItemContext | undefined {
		return this.tryGetRuleContext(0, DescSortItemContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_sortItem; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSortItem) {
			return visitor.visitSortItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AscSortItemContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.ASC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_ascSortItem; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitAscSortItem) {
			return visitor.visitAscSortItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescSortItemContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public DESC(): TerminalNode { return this.getToken(HSQLParser.DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_descSortItem; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDescSortItem) {
			return visitor.visitDescSortItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitOffsetClauseContext extends ParserRuleContext {
	public LIMIT(): TerminalNode { return this.getToken(HSQLParser.LIMIT, 0); }
	public INTEGER_VALUE(): TerminalNode { return this.getToken(HSQLParser.INTEGER_VALUE, 0); }
	public offsetClause(): OffsetClauseContext | undefined {
		return this.tryGetRuleContext(0, OffsetClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_limitOffsetClause; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitLimitOffsetClause) {
			return visitor.visitLimitOffsetClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OffsetClauseContext extends ParserRuleContext {
	public OFFSET(): TerminalNode { return this.getToken(HSQLParser.OFFSET, 0); }
	public INTEGER_VALUE(): TerminalNode { return this.getToken(HSQLParser.INTEGER_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_offsetClause; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitOffsetClause) {
			return visitor.visitOffsetClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.NEQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.LTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.GTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_comparisonOperator; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOperatorContext extends ParserRuleContext {
	public AND(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.OR, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.NOT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.IN, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.BETWEEN, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_logicalOperator; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitLogicalOperator) {
			return visitor.visitLogicalOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public booleanValue(): BooleanValueContext | undefined {
		return this.tryGetRuleContext(0, BooleanValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_literal; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataTypeContext extends ParserRuleContext {
	public dt: SingularDataType = SingularDataType.INTEGER;
	public REAL_TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.REAL_TYPE, 0); }
	public INTEGER_TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.INTEGER_TYPE, 0); }
	public DECIMAL_TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.DECIMAL_TYPE, 0); }
	public VARSTRING_TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.VARSTRING_TYPE, 0); }
	public STRING_TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.STRING_TYPE, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_dataType; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDataType) {
			return visitor.visitDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterOperatorContext extends ParserRuleContext {
	public ADD(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.ADD, 0); }
	public DROP(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.DROP, 0); }
	public MODIFY(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.MODIFY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_alterOperator; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitAlterOperator) {
			return visitor.visitAlterOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverDefinitionContext extends ParserRuleContext {
	public overDefinitionRoot(): OverDefinitionRootContext {
		return this.getRuleContext(0, OverDefinitionRootContext);
	}
	public overDefinitionTail(): OverDefinitionTailContext[];
	public overDefinitionTail(i: number): OverDefinitionTailContext;
	public overDefinitionTail(i?: number): OverDefinitionTailContext | OverDefinitionTailContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverDefinitionTailContext);
		} else {
			return this.getRuleContext(i, OverDefinitionTailContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_overDefinition; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitOverDefinition) {
			return visitor.visitOverDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverDefinitionRootContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_overDefinitionRoot; }
	public copyFrom(ctx: OverDefinitionRootContext): void {
		super.copyFrom(ctx);
	}
}
export class NormalIdentifierContext extends OverDefinitionRootContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	constructor(ctx: OverDefinitionRootContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitNormalIdentifier) {
			return visitor.visitNormalIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RootIdentifierContext extends OverDefinitionRootContext {
	public MODULO(): TerminalNode { return this.getToken(HSQLParser.MODULO, 0); }
	constructor(ctx: OverDefinitionRootContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitRootIdentifier) {
			return visitor.visitRootIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParentIdentifierContext extends OverDefinitionRootContext {
	public XOR(): TerminalNode { return this.getToken(HSQLParser.XOR, 0); }
	constructor(ctx: OverDefinitionRootContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitParentIdentifier) {
			return visitor.visitParentIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverDefinitionTailContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_overDefinitionTail; }
	public copyFrom(ctx: OverDefinitionTailContext): void {
		super.copyFrom(ctx);
	}
}
export class NormalTailIdentifierContext extends OverDefinitionTailContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	constructor(ctx: OverDefinitionTailContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitNormalTailIdentifier) {
			return visitor.visitNormalTailIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParentTailIdentifierContext extends OverDefinitionTailContext {
	public XOR(): TerminalNode { return this.getToken(HSQLParser.XOR, 0); }
	constructor(ctx: OverDefinitionTailContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitParentTailIdentifier) {
			return visitor.visitParentTailIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.IDENTIFIER);
		} else {
			return this.getToken(HSQLParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_definition; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDefinition) {
			return visitor.visitDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_expression; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_booleanExpression; }
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PredicatedContext extends BooleanExpressionContext {
	public _valueExpression!: ValueExpressionContext;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitPredicated) {
			return visitor.visitPredicated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	public NOT(): TerminalNode { return this.getToken(HSQLParser.NOT, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalBinaryContext extends BooleanExpressionContext {
	public _left!: BooleanExpressionContext;
	public _operator!: Token;
	public _right!: BooleanExpressionContext;
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.OR, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitLogicalBinary) {
			return visitor.visitLogicalBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public ctx: ParserRuleContext;
	constructor(parent: ParserRuleContext | undefined, invokingState: number, ctx: ParserRuleContext) {
		super(parent, invokingState);
		this.ctx = ctx;
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_predicate; }
	public copyFrom(ctx: PredicateContext): void {
		super.copyFrom(ctx);
		this.ctx = ctx.ctx;
	}
}
export class ComparisonContext extends PredicateContext {
	public _right!: ValueExpressionContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.ctx);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BetweenContext extends PredicateContext {
	public _lower!: ValueExpressionContext;
	public _upper!: ValueExpressionContext;
	public BETWEEN(): TerminalNode { return this.getToken(HSQLParser.BETWEEN, 0); }
	public AND(): TerminalNode { return this.getToken(HSQLParser.AND, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.ctx);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitBetween) {
			return visitor.visitBetween(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InListContext extends PredicateContext {
	public IN(): TerminalNode { return this.getToken(HSQLParser.IN, 0); }
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public valueExpressionList(): ValueExpressionListContext {
		return this.getRuleContext(0, ValueExpressionListContext);
	}
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.ctx);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitInList) {
			return visitor.visitInList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueExpressionListContext extends ParserRuleContext {
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public COMMA_(): TerminalNode[];
	public COMMA_(i: number): TerminalNode;
	public COMMA_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.COMMA_);
		} else {
			return this.getToken(HSQLParser.COMMA_, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_valueExpressionList; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitValueExpressionList) {
			return visitor.visitValueExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_valueExpression; }
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitValueExpressionDefault) {
			return visitor.visitValueExpressionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentifierLiteralContext extends PrimaryExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitIdentifierLiteral) {
			return visitor.visitIdentifierLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLiteralContext extends PrimaryExpressionContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends PrimaryExpressionContext {
	public booleanValue(): BooleanValueContext {
		return this.getRuleContext(0, BooleanValueContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends PrimaryExpressionContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_number; }
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	public DECIMAL_VALUE(): TerminalNode { return this.getToken(HSQLParser.DECIMAL_VALUE, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoubleLiteralContext extends NumberContext {
	public DOUBLE_VALUE(): TerminalNode { return this.getToken(HSQLParser.DOUBLE_VALUE, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDoubleLiteral) {
			return visitor.visitDoubleLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegerLiteralContext extends NumberContext {
	public INTEGER_VALUE(): TerminalNode { return this.getToken(HSQLParser.INTEGER_VALUE, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_string; }
	public copyFrom(ctx: StringContext): void {
		super.copyFrom(ctx);
	}
}
export class BasicStringLiteralContext extends StringContext {
	public STRING(): TerminalNode { return this.getToken(HSQLParser.STRING, 0); }
	constructor(ctx: StringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitBasicStringLiteral) {
			return visitor.visitBasicStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnicodeStringLiteralContext extends StringContext {
	public UNICODE_STRING(): TerminalNode { return this.getToken(HSQLParser.UNICODE_STRING, 0); }
	public UESCAPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.UESCAPE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.STRING, 0); }
	constructor(ctx: StringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitUnicodeStringLiteral) {
			return visitor.visitUnicodeStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_booleanValue; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitBooleanValue) {
			return visitor.visitBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStmtContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(HSQLParser.IMPORT, 0); }
	public overDefinition(): OverDefinitionContext {
		return this.getRuleContext(0, OverDefinitionContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.AS, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_importStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitImportStmt) {
			return visitor.visitImportStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputStmtContext extends ParserRuleContext {
	public OUTPUT(): TerminalNode { return this.getToken(HSQLParser.OUTPUT, 0); }
	public attribute(): AttributeContext {
		return this.getRuleContext(0, AttributeContext);
	}
	public namedOutput(): NamedOutputContext | undefined {
		return this.tryGetRuleContext(0, NamedOutputContext);
	}
	public toFile(): ToFileContext | undefined {
		return this.tryGetRuleContext(0, ToFileContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_outputStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitOutputStmt) {
			return visitor.visitOutputStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public definition(): DefinitionContext | undefined {
		return this.tryGetRuleContext(0, DefinitionContext);
	}
	public selectStmt(): SelectStmtContext | undefined {
		return this.tryGetRuleContext(0, SelectStmtContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_attribute; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedOutputContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public TITLE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.TITLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_namedOutput; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitNamedOutput) {
			return visitor.visitNamedOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ToFileContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(HSQLParser.STRING, 0); }
	public FILE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.FILE, 0); }
	public OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.OVERWRITE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_toFile; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitToFile) {
			return visitor.visitToFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScopeContext extends ParserRuleContext {
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.EXPORT, 0); }
	public SHARED(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.SHARED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_scope; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitScope) {
			return visitor.visitScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationsContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(HSQLParser.EOF, 0); }
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_declarations; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDeclarations) {
			return visitor.visitDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public DECLARE(): TerminalNode { return this.getToken(HSQLParser.DECLARE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public AS(): TerminalNode { return this.getToken(HSQLParser.AS, 0); }
	public typeClauses(): TypeClausesContext {
		return this.getRuleContext(0, TypeClausesContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(HSQLParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_declaration; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeClausesContext extends ParserRuleContext {
	public tableClause(): TableClauseContext | undefined {
		return this.tryGetRuleContext(0, TableClauseContext);
	}
	public layoutClause(): LayoutClauseContext | undefined {
		return this.tryGetRuleContext(0, LayoutClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_typeClauses; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTypeClauses) {
			return visitor.visitTypeClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableClauseContext extends ParserRuleContext {
	public TABLE(): TerminalNode { return this.getToken(HSQLParser.TABLE, 0); }
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public colDefs(): ColDefsContext {
		return this.getRuleContext(0, ColDefsContext);
	}
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_tableClause; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTableClause) {
			return visitor.visitTableClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LayoutClauseContext extends ParserRuleContext {
	public LAYOUT(): TerminalNode { return this.getToken(HSQLParser.LAYOUT, 0); }
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public colDefs(): ColDefsContext {
		return this.getRuleContext(0, ColDefsContext);
	}
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_layoutClause; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitLayoutClause) {
			return visitor.visitLayoutClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColDefsContext extends ParserRuleContext {
	public colDef(): ColDefContext[];
	public colDef(i: number): ColDefContext;
	public colDef(i?: number): ColDefContext | ColDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColDefContext);
		} else {
			return this.getRuleContext(i, ColDefContext);
		}
	}
	public COMMA_(): TerminalNode[];
	public COMMA_(i: number): TerminalNode;
	public COMMA_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.COMMA_);
		} else {
			return this.getToken(HSQLParser.COMMA_, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_colDefs; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitColDefs) {
			return visitor.visitColDefs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColDefContext extends ParserRuleContext {
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_colDef; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitColDef) {
			return visitor.visitColDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


