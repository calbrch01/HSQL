// Generated from grammar/HSQL.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { HSQLListener } from "./HSQLListener";
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
	public static readonly FROM = 36;
	public static readonly TOP = 37;
	public static readonly WHERE = 38;
	public static readonly HAVING = 39;
	public static readonly DISTINCT = 40;
	public static readonly NATURAL = 41;
	public static readonly CROSS = 42;
	public static readonly JOIN = 43;
	public static readonly INNER = 44;
	public static readonly LEFT = 45;
	public static readonly RIGHT = 46;
	public static readonly FULL = 47;
	public static readonly OUTER = 48;
	public static readonly ONLY = 49;
	public static readonly CASE = 50;
	public static readonly TRUE = 51;
	public static readonly FALSE = 52;
	public static readonly IMPORT = 53;
	public static readonly AS = 54;
	public static readonly CREATE = 55;
	public static readonly LAYOUT = 56;
	public static readonly FILE = 57;
	public static readonly MAP = 58;
	public static readonly METHOD = 59;
	public static readonly DEPENDENT = 60;
	public static readonly TITLE = 61;
	public static readonly EXPIRE = 62;
	public static readonly LIMIT = 63;
	public static readonly OFFSET = 64;
	public static readonly MODULE = 65;
	public static readonly UESCAPE = 66;
	public static readonly TYPE = 67;
	public static readonly SEMICOLON = 68;
	public static readonly EQ = 69;
	public static readonly NEQ = 70;
	public static readonly LT = 71;
	public static readonly LTE = 72;
	public static readonly GT = 73;
	public static readonly GTE = 74;
	public static readonly PLUS = 75;
	public static readonly SUBSTRACT = 76;
	public static readonly MULTIPLY = 77;
	public static readonly DIVIDE = 78;
	public static readonly MODULO = 79;
	public static readonly XOR = 80;
	public static readonly AND = 81;
	public static readonly OR = 82;
	public static readonly NOT = 83;
	public static readonly IN = 84;
	public static readonly BETWEEN = 85;
	public static readonly EXISTS = 86;
	public static readonly STRING = 87;
	public static readonly UNICODE_STRING = 88;
	public static readonly BINARY_LITERAL = 89;
	public static readonly INTEGER_VALUE = 90;
	public static readonly DECIMAL_VALUE = 91;
	public static readonly DOUBLE_VALUE = 92;
	public static readonly IDENTIFIER = 93;
	public static readonly COMMA_ = 94;
	public static readonly BSTART_ = 95;
	public static readonly BEND_ = 96;
	public static readonly CURLY_BSTART_ = 97;
	public static readonly CURLY_BEND_ = 98;
	public static readonly ECL_SNIPPETS = 99;
	public static readonly SIMPLE_COMMENT = 100;
	public static readonly SIMPLE_C_COMMENT = 101;
	public static readonly BRACKETED_COMMENT = 102;
	public static readonly WS = 103;
	public static readonly RULE_program = 0;
	public static readonly RULE_completestmt = 1;
	public static readonly RULE_stmt = 2;
	public static readonly RULE_definitionStmt = 3;
	public static readonly RULE_expr = 4;
	public static readonly RULE_actionStmt = 5;
	public static readonly RULE_selectStmt = 6;
	public static readonly RULE_selectHavingClause = 7;
	public static readonly RULE_selectGroupByClause = 8;
	public static readonly RULE_definitionSet = 9;
	public static readonly RULE_selectColumns = 10;
	public static readonly RULE_selectCol = 11;
	public static readonly RULE_col = 12;
	public static readonly RULE_aliasingCol = 13;
	public static readonly RULE_selectFromClause = 14;
	public static readonly RULE_selectFromTableReference = 15;
	public static readonly RULE_selectAlias = 16;
	public static readonly RULE_join_operator = 17;
	public static readonly RULE_selectWhereClause = 18;
	public static readonly RULE_joinedTable = 19;
	public static readonly RULE_joinSpecification = 20;
	public static readonly RULE_groupByClause = 21;
	public static readonly RULE_orderByClause = 22;
	public static readonly RULE_sortItem = 23;
	public static readonly RULE_ascSortItem = 24;
	public static readonly RULE_descSortItem = 25;
	public static readonly RULE_limitClause = 26;
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
	public static readonly RULE_valueExpression = 40;
	public static readonly RULE_primaryExpression = 41;
	public static readonly RULE_number = 42;
	public static readonly RULE_string = 43;
	public static readonly RULE_booleanValue = 44;
	public static readonly RULE_importStmt = 45;
	public static readonly RULE_outputStmt = 46;
	public static readonly RULE_attribute = 47;
	public static readonly RULE_namedOutput = 48;
	public static readonly RULE_toFile = 49;
	public static readonly RULE_plotStmt = 50;
	public static readonly RULE_moduleStmt = 51;
	public static readonly RULE_transformStmt = 52;
	public static readonly RULE_mlStmt = 53;
	public static readonly RULE_train = 54;
	public static readonly RULE_elementaryML = 55;
	public static readonly RULE_trainOptions = 56;
	public static readonly RULE_trainOption = 57;
	public static readonly RULE_trainValue = 58;
	public static readonly RULE_predict = 59;
	public static readonly RULE_scope = 60;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "completestmt", "stmt", "definitionStmt", "expr", "actionStmt", 
		"selectStmt", "selectHavingClause", "selectGroupByClause", "definitionSet", 
		"selectColumns", "selectCol", "col", "aliasingCol", "selectFromClause", 
		"selectFromTableReference", "selectAlias", "join_operator", "selectWhereClause", 
		"joinedTable", "joinSpecification", "groupByClause", "orderByClause", 
		"sortItem", "ascSortItem", "descSortItem", "limitClause", "offsetClause", 
		"comparisonOperator", "logicalOperator", "literal", "dataType", "alterOperator", 
		"overDefinition", "overDefinitionRoot", "overDefinitionTail", "definition", 
		"expression", "booleanExpression", "predicate", "valueExpression", "primaryExpression", 
		"number", "string", "booleanValue", "importStmt", "outputStmt", "attribute", 
		"namedOutput", "toFile", "plotStmt", "moduleStmt", "transformStmt", "mlStmt", 
		"train", "elementaryML", "trainOptions", "trainOption", "trainValue", 
		"predict", "scope",
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
		undefined, undefined, undefined, undefined, undefined, undefined, "'='", 
		undefined, "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'%'", 
		"'^'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"','", "'('", "')'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "REAL_TYPE", "INTEGER_TYPE", "DECIMAL_TYPE", "VARSTRING_TYPE", 
		"STRING_TYPE", "BOOLEAN", "UNSTABLE", "STABLE", "TABLE", "ALTER", "TO", 
		"ADD", "DROP", "MODIFY", "EXPORT", "SHARED", "ASC", "DESC", "ORDER", "GROUP", 
		"BY", "TRAIN", "PREDICT", "PLOT", "OUTPUT", "OPTION", "OPTIONS", "OVERWRITE", 
		"UPDATE", "ON", "INDEPENDENT", "IDCOLUMN", "PROJECT", "SELECT", "FROM", 
		"TOP", "WHERE", "HAVING", "DISTINCT", "NATURAL", "CROSS", "JOIN", "INNER", 
		"LEFT", "RIGHT", "FULL", "OUTER", "ONLY", "CASE", "TRUE", "FALSE", "IMPORT", 
		"AS", "CREATE", "LAYOUT", "FILE", "MAP", "METHOD", "DEPENDENT", "TITLE", 
		"EXPIRE", "LIMIT", "OFFSET", "MODULE", "UESCAPE", "TYPE", "SEMICOLON", 
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
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HSQLParser.EXPORT) | (1 << HSQLParser.SHARED) | (1 << HSQLParser.PLOT) | (1 << HSQLParser.OUTPUT))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (HSQLParser.SELECT - 35)) | (1 << (HSQLParser.TRUE - 35)) | (1 << (HSQLParser.FALSE - 35)) | (1 << (HSQLParser.IMPORT - 35)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (HSQLParser.STRING - 87)) | (1 << (HSQLParser.UNICODE_STRING - 87)) | (1 << (HSQLParser.INTEGER_VALUE - 87)) | (1 << (HSQLParser.DECIMAL_VALUE - 87)) | (1 << (HSQLParser.DOUBLE_VALUE - 87)) | (1 << (HSQLParser.IDENTIFIER - 87)))) !== 0)) {
				{
				{
				this.state = 122;
				this.completestmt();
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 128;
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
			this.state = 130;
			this.stmt();
			this.state = 131;
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
			this.state = 136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.EXPORT:
			case HSQLParser.SHARED:
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 133;
				this.definitionStmt();
				}
				break;
			case HSQLParser.PLOT:
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
				this.state = 134;
				this.actionStmt();
				}
				break;
			case HSQLParser.IMPORT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 135;
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
			this.state = 138;
			this.scope();
			this.state = 139;
			_localctx._label = this.match(HSQLParser.IDENTIFIER);
			this.state = 140;
			this.match(HSQLParser.EQ);
			this.state = 141;
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
			this.state = 148;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 143;
				this.definition();
				}
				break;
			case HSQLParser.PLOT:
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
				this.state = 144;
				this.actionStmt();
				}
				break;
			case HSQLParser.ALTER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 145;
				this.transformStmt();
				}
				break;
			case HSQLParser.TRAIN:
			case HSQLParser.PREDICT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 146;
				this.mlStmt();
				}
				break;
			case HSQLParser.MODULE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 147;
				this.moduleStmt();
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
			this.state = 154;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.SELECT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 150;
				this.selectStmt();
				}
				break;
			case HSQLParser.OUTPUT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 151;
				this.outputStmt();
				}
				break;
			case HSQLParser.PLOT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 152;
				this.plotStmt();
				}
				break;
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 153;
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
			this.state = 156;
			this.match(HSQLParser.SELECT);
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.DISTINCT) {
				{
				this.state = 157;
				this.match(HSQLParser.DISTINCT);
				}
			}

			this.state = 160;
			_localctx._columns = this.selectColumns();
			this.state = 161;
			this.selectFromClause();
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.WHERE) {
				{
				this.state = 162;
				this.match(HSQLParser.WHERE);
				this.state = 163;
				_localctx._whereclause = this.selectWhereClause();
				}
			}

			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.GROUP) {
				{
				this.state = 166;
				this.selectGroupByClause();
				}
			}

			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.ORDER) {
				{
				this.state = 169;
				this.match(HSQLParser.ORDER);
				this.state = 170;
				this.match(HSQLParser.BY);
				this.state = 171;
				_localctx._orderbyclause = this.orderByClause();
				}
			}

			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.HAVING) {
				{
				this.state = 174;
				this.match(HSQLParser.HAVING);
				this.state = 175;
				this.selectHavingClause();
				}
			}

			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.LIMIT) {
				{
				this.state = 178;
				this.limitClause();
				}
			}

			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OFFSET) {
				{
				this.state = 181;
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
	public selectHavingClause(): SelectHavingClauseContext {
		let _localctx: SelectHavingClauseContext = new SelectHavingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, HSQLParser.RULE_selectHavingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
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
	public selectGroupByClause(): SelectGroupByClauseContext {
		let _localctx: SelectGroupByClauseContext = new SelectGroupByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, HSQLParser.RULE_selectGroupByClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(HSQLParser.GROUP);
			this.state = 187;
			this.match(HSQLParser.BY);
			this.state = 188;
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
	public definitionSet(): DefinitionSetContext {
		let _localctx: DefinitionSetContext = new DefinitionSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, HSQLParser.RULE_definitionSet);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.definition();
			this.state = 195;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 191;
					this.match(HSQLParser.COMMA_);
					this.state = 192;
					this.definition();
					}
					}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
			this.state = 198;
			this.selectCol();
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 199;
				this.match(HSQLParser.COMMA_);
				this.state = 200;
				this.selectCol();
				}
				}
				this.state = 205;
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
		let _la: number;
		try {
			this.state = 211;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				_localctx = new NormalColContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 206;
				(_localctx as NormalColContext)._col = this.col();
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 207;
					this.aliasingCol((_localctx as NormalColContext)._col);
					}
				}

				}
				break;
			case HSQLParser.MULTIPLY:
				_localctx = new WildAllContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 210;
				this.match(HSQLParser.MULTIPLY);
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
	public col(): ColContext {
		let _localctx: ColContext = new ColContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, HSQLParser.RULE_col);
		try {
			this.state = 223;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				_localctx = new SelectAggregatedEverythingColContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 213;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 214;
				this.match(HSQLParser.BSTART_);
				this.state = 215;
				this.match(HSQLParser.MULTIPLY);
				this.state = 216;
				this.match(HSQLParser.BEND_);
				}
				break;

			case 2:
				_localctx = new SelectAggregatedOneColContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 217;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 218;
				this.match(HSQLParser.BSTART_);
				this.state = 219;
				(_localctx as SelectAggregatedOneColContext)._column = this.definition();
				this.state = 220;
				this.match(HSQLParser.BEND_);
				}
				break;

			case 3:
				_localctx = new SelectOneColContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 222;
				(_localctx as SelectOneColContext)._column = this.definition();
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
	public aliasingCol(ctx: ParserRuleContext): AliasingColContext {
		let _localctx: AliasingColContext = new AliasingColContext(this._ctx, this.state, ctx);
		this.enterRule(_localctx, 26, HSQLParser.RULE_aliasingCol);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.match(HSQLParser.AS);
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HSQLParser.REAL_TYPE) | (1 << HSQLParser.INTEGER_TYPE) | (1 << HSQLParser.DECIMAL_TYPE) | (1 << HSQLParser.VARSTRING_TYPE) | (1 << HSQLParser.STRING_TYPE) | (1 << HSQLParser.BOOLEAN))) !== 0)) {
				{
				this.state = 226;
				this.dataType();
				}
			}

			this.state = 229;
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
			this.state = 231;
			this.match(HSQLParser.FROM);
			this.state = 241;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 232;
				this.selectFromTableReference();
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HSQLParser.COMMA_) {
					{
					{
					this.state = 233;
					this.match(HSQLParser.COMMA_);
					this.state = 234;
					this.selectFromTableReference();
					}
					}
					this.state = 239;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				{
				this.state = 240;
				this.joinedTable();
				}
				break;
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
	public selectFromTableReference(): SelectFromTableReferenceContext {
		let _localctx: SelectFromTableReferenceContext = new SelectFromTableReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, HSQLParser.RULE_selectFromTableReference);
		let _la: number;
		try {
			this.state = 263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				_localctx = new SelectFromDerivedTableContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 243;
				this.match(HSQLParser.BSTART_);
				this.state = 244;
				(_localctx as SelectFromDerivedTableContext)._selectStmt = this.selectStmt();
				this.state = 245;
				this.match(HSQLParser.BEND_);
				this.state = 246;
				this.selectAlias((_localctx as SelectFromDerivedTableContext)._selectStmt);
				}
				break;

			case 2:
				_localctx = new SelectFromDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 248;
				(_localctx as SelectFromDefinitionContext)._definition = this.definition();
				this.state = 250;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 249;
					this.selectAlias((_localctx as SelectFromDefinitionContext)._definition);
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new SelectBracketedFromTableContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 252;
				this.match(HSQLParser.BSTART_);
				this.state = 253;
				this.selectFromTableReference();
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HSQLParser.COMMA_) {
					{
					{
					this.state = 254;
					this.match(HSQLParser.COMMA_);
					this.state = 255;
					this.selectFromTableReference();
					}
					}
					this.state = 260;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 261;
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
	public selectAlias(ctx: ParserRuleContext): SelectAliasContext {
		let _localctx: SelectAliasContext = new SelectAliasContext(this._ctx, this.state, ctx);
		this.enterRule(_localctx, 32, HSQLParser.RULE_selectAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.AS) {
				{
				this.state = 265;
				this.match(HSQLParser.AS);
				}
			}

			this.state = 268;
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
	public join_operator(): Join_operatorContext {
		let _localctx: Join_operatorContext = new Join_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, HSQLParser.RULE_join_operator);
		let _la: number;
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.COMMA_:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 270;
				this.match(HSQLParser.COMMA_);
				}
				break;
			case HSQLParser.NATURAL:
			case HSQLParser.CROSS:
			case HSQLParser.JOIN:
			case HSQLParser.INNER:
			case HSQLParser.LEFT:
			case HSQLParser.RIGHT:
			case HSQLParser.FULL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.NATURAL) {
					{
					this.state = 271;
					this.match(HSQLParser.NATURAL);
					}
				}

				this.state = 288;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case HSQLParser.LEFT:
					{
					this.state = 274;
					this.match(HSQLParser.LEFT);
					this.state = 276;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === HSQLParser.OUTER) {
						{
						this.state = 275;
						this.match(HSQLParser.OUTER);
						}
					}

					}
					break;
				case HSQLParser.RIGHT:
					{
					this.state = 278;
					this.match(HSQLParser.RIGHT);
					this.state = 280;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === HSQLParser.OUTER) {
						{
						this.state = 279;
						this.match(HSQLParser.OUTER);
						}
					}

					}
					break;
				case HSQLParser.FULL:
					{
					this.state = 282;
					this.match(HSQLParser.FULL);
					this.state = 284;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === HSQLParser.OUTER) {
						{
						this.state = 283;
						this.match(HSQLParser.OUTER);
						}
					}

					}
					break;
				case HSQLParser.INNER:
					{
					this.state = 286;
					this.match(HSQLParser.INNER);
					}
					break;
				case HSQLParser.CROSS:
					{
					this.state = 287;
					this.match(HSQLParser.CROSS);
					}
					break;
				case HSQLParser.JOIN:
					break;
				default:
					break;
				}
				this.state = 290;
				this.match(HSQLParser.JOIN);
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
	public selectWhereClause(): SelectWhereClauseContext {
		let _localctx: SelectWhereClauseContext = new SelectWhereClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, HSQLParser.RULE_selectWhereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
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
	public joinedTable(): JoinedTableContext {
		let _localctx: JoinedTableContext = new JoinedTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, HSQLParser.RULE_joinedTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.selectFromTableReference();
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (HSQLParser.NATURAL - 41)) | (1 << (HSQLParser.CROSS - 41)) | (1 << (HSQLParser.JOIN - 41)) | (1 << (HSQLParser.INNER - 41)) | (1 << (HSQLParser.LEFT - 41)) | (1 << (HSQLParser.RIGHT - 41)) | (1 << (HSQLParser.FULL - 41)))) !== 0) || _la === HSQLParser.COMMA_) {
				{
				{
				this.state = 296;
				this.join_operator();
				this.state = 297;
				this.selectFromTableReference();
				this.state = 298;
				this.match(HSQLParser.ON);
				this.state = 299;
				this.joinSpecification();
				}
				}
				this.state = 305;
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
	public joinSpecification(): JoinSpecificationContext {
		let _localctx: JoinSpecificationContext = new JoinSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, HSQLParser.RULE_joinSpecification);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			_localctx._leftrecset = this.definition();
			this.state = 307;
			this.comparisonOperator();
			this.state = 308;
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
			this.state = 310;
			this.definitionSet();
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
			this.state = 312;
			this.sortItem();
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 313;
				this.match(HSQLParser.COMMA_);
				this.state = 314;
				this.sortItem();
				}
				}
				this.state = 319;
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
			this.state = 322;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 320;
				this.ascSortItem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 321;
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
			this.state = 324;
			this.definitionSet();
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.ASC) {
				{
				this.state = 325;
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
			this.state = 328;
			this.definitionSet();
			this.state = 329;
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
	public limitClause(): LimitClauseContext {
		let _localctx: LimitClauseContext = new LimitClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, HSQLParser.RULE_limitClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.match(HSQLParser.LIMIT);
			this.state = 332;
			this.number();
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
			this.state = 334;
			this.match(HSQLParser.OFFSET);
			this.state = 335;
			this.number();
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
			this.state = 337;
			_la = this._input.LA(1);
			if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (HSQLParser.EQ - 69)) | (1 << (HSQLParser.NEQ - 69)) | (1 << (HSQLParser.LT - 69)) | (1 << (HSQLParser.LTE - 69)) | (1 << (HSQLParser.GT - 69)) | (1 << (HSQLParser.GTE - 69)))) !== 0))) {
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
			this.state = 339;
			_la = this._input.LA(1);
			if (!(((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (HSQLParser.AND - 81)) | (1 << (HSQLParser.OR - 81)) | (1 << (HSQLParser.NOT - 81)) | (1 << (HSQLParser.IN - 81)) | (1 << (HSQLParser.BETWEEN - 81)) | (1 << (HSQLParser.EXISTS - 81)))) !== 0))) {
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
			this.state = 344;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 341;
				this.number();
				}
				break;
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 342;
				this.string();
				}
				break;
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 343;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HSQLParser.REAL_TYPE) | (1 << HSQLParser.INTEGER_TYPE) | (1 << HSQLParser.DECIMAL_TYPE) | (1 << HSQLParser.VARSTRING_TYPE) | (1 << HSQLParser.STRING_TYPE) | (1 << HSQLParser.BOOLEAN))) !== 0))) {
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
	public alterOperator(): AlterOperatorContext {
		let _localctx: AlterOperatorContext = new AlterOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, HSQLParser.RULE_alterOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
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
			this.state = 350;
			this.overDefinitionRoot();
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.T__0) {
				{
				{
				this.state = 351;
				this.match(HSQLParser.T__0);
				this.state = 352;
				this.overDefinitionTail();
				}
				}
				this.state = 357;
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
			this.state = 361;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				_localctx = new NormalIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 358;
				this.match(HSQLParser.IDENTIFIER);
				}
				break;
			case HSQLParser.MODULO:
				_localctx = new RootIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 359;
				this.match(HSQLParser.MODULO);
				}
				break;
			case HSQLParser.XOR:
				_localctx = new ParentIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 360;
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
			this.state = 365;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				_localctx = new NormalTailIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 363;
				this.match(HSQLParser.IDENTIFIER);
				}
				break;
			case HSQLParser.XOR:
				_localctx = new ParentTailIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 364;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.T__0) {
				{
				{
				this.state = 368;
				this.match(HSQLParser.T__0);
				this.state = 369;
				this.match(HSQLParser.IDENTIFIER);
				}
				}
				this.state = 374;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, HSQLParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
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
			this.state = 384;
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

				this.state = 378;
				(_localctx as PredicatedContext)._valueExpression = this.valueExpression();
				this.state = 380;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 379;
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
				this.state = 382;
				this.match(HSQLParser.NOT);
				this.state = 383;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 394;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 392;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, HSQLParser.RULE_booleanExpression);
						this.state = 386;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 387;
						(_localctx as LogicalBinaryContext)._operator = this.match(HSQLParser.AND);
						this.state = 388;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, HSQLParser.RULE_booleanExpression);
						this.state = 389;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 390;
						(_localctx as LogicalBinaryContext)._operator = this.match(HSQLParser.OR);
						this.state = 391;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 396;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
			this.state = 423;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				_localctx = new ComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 397;
				this.comparisonOperator();
				this.state = 398;
				(_localctx as ComparisonContext)._right = this.valueExpression();
				}
				break;

			case 2:
				_localctx = new BetweenContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.NOT) {
					{
					this.state = 400;
					this.match(HSQLParser.NOT);
					}
				}

				this.state = 403;
				this.match(HSQLParser.BETWEEN);
				this.state = 404;
				(_localctx as BetweenContext)._lower = this.valueExpression();
				this.state = 405;
				this.match(HSQLParser.AND);
				this.state = 406;
				(_localctx as BetweenContext)._upper = this.valueExpression();
				}
				break;

			case 3:
				_localctx = new InListContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.NOT) {
					{
					this.state = 408;
					this.match(HSQLParser.NOT);
					}
				}

				this.state = 411;
				this.match(HSQLParser.IN);
				this.state = 412;
				this.match(HSQLParser.BSTART_);
				this.state = 413;
				this.valueExpression();
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HSQLParser.COMMA_) {
					{
					{
					this.state = 414;
					this.match(HSQLParser.COMMA_);
					this.state = 415;
					this.valueExpression();
					}
					}
					this.state = 420;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 421;
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
	public valueExpression(): ValueExpressionContext {
		let _localctx: ValueExpressionContext = new ValueExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, HSQLParser.RULE_valueExpression);
		try {
			_localctx = new ValueExpressionDefaultContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
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
		this.enterRule(_localctx, 82, HSQLParser.RULE_primaryExpression);
		try {
			this.state = 435;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				_localctx = new IdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 427;
				this.match(HSQLParser.IDENTIFIER);
				}
				break;
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				_localctx = new NumericLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 428;
				this.number();
				}
				break;
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 429;
				this.booleanValue();
				}
				break;
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 430;
				this.string();
				}
				break;
			case HSQLParser.BSTART_:
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 431;
				this.match(HSQLParser.BSTART_);
				this.state = 432;
				this.expression();
				this.state = 433;
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
		this.enterRule(_localctx, 84, HSQLParser.RULE_number);
		try {
			this.state = 440;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.DECIMAL_VALUE:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 437;
				this.match(HSQLParser.DECIMAL_VALUE);
				}
				break;
			case HSQLParser.DOUBLE_VALUE:
				_localctx = new DoubleLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 438;
				this.match(HSQLParser.DOUBLE_VALUE);
				}
				break;
			case HSQLParser.INTEGER_VALUE:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 439;
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
		this.enterRule(_localctx, 86, HSQLParser.RULE_string);
		try {
			this.state = 448;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.STRING:
				_localctx = new BasicStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 442;
				this.match(HSQLParser.STRING);
				}
				break;
			case HSQLParser.UNICODE_STRING:
				_localctx = new UnicodeStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 443;
				this.match(HSQLParser.UNICODE_STRING);
				this.state = 446;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 444;
					this.match(HSQLParser.UESCAPE);
					this.state = 445;
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
		this.enterRule(_localctx, 88, HSQLParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
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
		this.enterRule(_localctx, 90, HSQLParser.RULE_importStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			this.match(HSQLParser.IMPORT);
			this.state = 453;
			this.overDefinition();
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.AS) {
				{
				this.state = 454;
				this.match(HSQLParser.AS);
				this.state = 455;
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
		this.enterRule(_localctx, 92, HSQLParser.RULE_outputStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this.match(HSQLParser.OUTPUT);
			this.state = 459;
			this.attribute();
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TITLE || _la === HSQLParser.IDENTIFIER) {
				{
				this.state = 460;
				this.namedOutput();
				}
			}

			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.FILE || _la === HSQLParser.STRING) {
				{
				this.state = 463;
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
		this.enterRule(_localctx, 94, HSQLParser.RULE_attribute);
		try {
			this.state = 469;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 466;
				this.definition();
				}
				break;
			case HSQLParser.SELECT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 467;
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
				this.state = 468;
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
		this.enterRule(_localctx, 96, HSQLParser.RULE_namedOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TITLE) {
				{
				this.state = 471;
				this.match(HSQLParser.TITLE);
				}
			}

			this.state = 474;
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
		this.enterRule(_localctx, 98, HSQLParser.RULE_toFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.FILE) {
				{
				this.state = 476;
				this.match(HSQLParser.FILE);
				}
			}

			this.state = 479;
			this.match(HSQLParser.STRING);
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OVERWRITE) {
				{
				this.state = 480;
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
	public plotStmt(): PlotStmtContext {
		let _localctx: PlotStmtContext = new PlotStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, HSQLParser.RULE_plotStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.match(HSQLParser.PLOT);
			this.state = 484;
			this.match(HSQLParser.FROM);
			this.state = 485;
			this.definition();
			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TITLE) {
				{
				this.state = 486;
				this.match(HSQLParser.TITLE);
				}
			}

			this.state = 489;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TYPE || _la === HSQLParser.IDENTIFIER) {
				{
				this.state = 491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.TYPE) {
					{
					this.state = 490;
					this.match(HSQLParser.TYPE);
					}
				}

				this.state = 493;
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
	public moduleStmt(): ModuleStmtContext {
		let _localctx: ModuleStmtContext = new ModuleStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, HSQLParser.RULE_moduleStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this.match(HSQLParser.MODULE);
			this.state = 497;
			this.match(HSQLParser.BSTART_);
			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.EXPORT || _la === HSQLParser.SHARED || _la === HSQLParser.IDENTIFIER) {
				{
				{
				this.state = 498;
				this.definitionStmt();
				this.state = 499;
				this.match(HSQLParser.SEMICOLON);
				}
				}
				this.state = 505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 506;
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
	public transformStmt(): TransformStmtContext {
		let _localctx: TransformStmtContext = new TransformStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, HSQLParser.RULE_transformStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.match(HSQLParser.ALTER);
			this.state = 509;
			this.match(HSQLParser.TABLE);
			this.state = 510;
			this.definition();
			this.state = 513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TO) {
				{
				this.state = 511;
				this.match(HSQLParser.TO);
				this.state = 512;
				this.match(HSQLParser.IDENTIFIER);
				}
			}

			this.state = 515;
			this.alterOperator();
			this.state = 516;
			_localctx._colName = this.match(HSQLParser.IDENTIFIER);
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.COMMA_) {
				{
				this.state = 517;
				this.match(HSQLParser.COMMA_);
				this.state = 518;
				this.dataType();
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
	public mlStmt(): MlStmtContext {
		let _localctx: MlStmtContext = new MlStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, HSQLParser.RULE_mlStmt);
		try {
			this.state = 524;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 521;
				this.train();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 522;
				this.predict();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 523;
				this.elementaryML();
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
	public train(): TrainContext {
		let _localctx: TrainContext = new TrainContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, HSQLParser.RULE_train);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this.match(HSQLParser.TRAIN);
			this.state = 527;
			this.match(HSQLParser.FROM);
			this.state = 528;
			_localctx._ind = this.definition();
			this.state = 529;
			this.match(HSQLParser.COMMA_);
			this.state = 530;
			_localctx._dep = this.definition();
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.COMMA_) {
				{
				this.state = 531;
				this.match(HSQLParser.COMMA_);
				this.state = 532;
				_localctx._test = this.definition();
				}
			}

			this.state = 535;
			this.match(HSQLParser.METHOD);
			this.state = 536;
			_localctx._method = this.match(HSQLParser.IDENTIFIER);
			this.state = 539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OPTION) {
				{
				this.state = 537;
				this.match(HSQLParser.OPTION);
				this.state = 538;
				this.trainOptions();
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
	public elementaryML(): ElementaryMLContext {
		let _localctx: ElementaryMLContext = new ElementaryMLContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, HSQLParser.RULE_elementaryML);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.match(HSQLParser.PREDICT);
			this.state = 542;
			this.match(HSQLParser.FROM);
			this.state = 543;
			_localctx._ind = this.definition();
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.COMMA_) {
				{
				this.state = 544;
				this.match(HSQLParser.COMMA_);
				this.state = 545;
				_localctx._ind2 = this.definition();
				}
			}

			this.state = 548;
			this.match(HSQLParser.METHOD);
			this.state = 549;
			_localctx._method = this.match(HSQLParser.IDENTIFIER);
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OPTION) {
				{
				this.state = 550;
				this.match(HSQLParser.OPTION);
				this.state = 551;
				this.trainOptions();
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
	public trainOptions(): TrainOptionsContext {
		let _localctx: TrainOptionsContext = new TrainOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, HSQLParser.RULE_trainOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 554;
			this.trainOption();
			}
			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 555;
				this.match(HSQLParser.COMMA_);
				this.state = 556;
				this.trainOption();
				}
				}
				this.state = 561;
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
	public trainOption(): TrainOptionContext {
		let _localctx: TrainOptionContext = new TrainOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, HSQLParser.RULE_trainOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 563;
			this.match(HSQLParser.EQ);
			this.state = 564;
			this.trainValue();
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
	public trainValue(): TrainValueContext {
		let _localctx: TrainValueContext = new TrainValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, HSQLParser.RULE_trainValue);
		try {
			this.state = 569;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 566;
				this.number();
				}
				break;
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 567;
				this.string();
				}
				break;
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 568;
				this.definition();
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
	public predict(): PredictContext {
		let _localctx: PredictContext = new PredictContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, HSQLParser.RULE_predict);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 571;
			this.match(HSQLParser.PREDICT);
			this.state = 572;
			_localctx._model = this.definition();
			this.state = 573;
			this.match(HSQLParser.FROM);
			this.state = 574;
			_localctx._ind = this.definition();
			this.state = 577;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.METHOD) {
				{
				this.state = 575;
				this.match(HSQLParser.METHOD);
				this.state = 576;
				_localctx._method = this.match(HSQLParser.IDENTIFIER);
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
		this.enterRule(_localctx, 120, HSQLParser.RULE_scope);
		try {
			this.state = 582;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.EXPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 579;
				this.match(HSQLParser.EXPORT);
				}
				break;
			case HSQLParser.SHARED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 580;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 38:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03i\u024B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x03\x02\x07\x02~\n\x02\f\x02\x0E\x02\x81\v\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05\x04\x8B\n\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06\x97\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x9D" +
		"\n\x07\x03\b\x03\b\x05\b\xA1\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\xA7\n\b" +
		"\x03\b\x05\b\xAA\n\b\x03\b\x03\b\x03\b\x05\b\xAF\n\b\x03\b\x03\b\x05\b" +
		"\xB3\n\b\x03\b\x05\b\xB6\n\b\x03\b\x05\b\xB9\n\b\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\v\x03\v\x03\v\x07\v\xC4\n\v\f\v\x0E\v\xC7\v\v\x03\f" +
		"\x03\f\x03\f\x07\f\xCC\n\f\f\f\x0E\f\xCF\v\f\x03\r\x03\r\x05\r\xD3\n\r" +
		"\x03\r\x05\r\xD6\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xE2\n\x0E\x03\x0F\x03\x0F\x05\x0F" +
		"\xE6\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xEE" +
		"\n\x10\f\x10\x0E\x10\xF1\v\x10\x03\x10\x05\x10\xF4\n\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xFD\n\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x07\x11\u0103\n\x11\f\x11\x0E\x11\u0106\v\x11\x03" +
		"\x11\x03\x11\x05\x11\u010A\n\x11\x03\x12\x05\x12\u010D\n\x12\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x05\x13\u0113\n\x13\x03\x13\x03\x13\x05\x13\u0117" +
		"\n\x13\x03\x13\x03\x13\x05\x13\u011B\n\x13\x03\x13\x03\x13\x05\x13\u011F" +
		"\n\x13\x03\x13\x03\x13\x05\x13\u0123\n\x13\x03\x13\x05\x13\u0126\n\x13" +
		"\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15" +
		"\u0130\n\x15\f\x15\x0E\x15\u0133\v\x15\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x07\x18\u013E\n\x18\f\x18\x0E" +
		"\x18\u0141\v\x18\x03\x19\x03\x19\x05\x19\u0145\n\x19\x03\x1A\x03\x1A\x05" +
		"\x1A\u0149\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x05 \u015B" +
		"\n \x03!\x03!\x03\"\x03\"\x03#\x03#\x03#\x07#\u0164\n#\f#\x0E#\u0167\v" +
		"#\x03$\x03$\x03$\x05$\u016C\n$\x03%\x03%\x05%\u0170\n%\x03&\x03&\x03&" +
		"\x07&\u0175\n&\f&\x0E&\u0178\v&\x03\'\x03\'\x03(\x03(\x03(\x05(\u017F" +
		"\n(\x03(\x03(\x05(\u0183\n(\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u018B\n" +
		"(\f(\x0E(\u018E\v(\x03)\x03)\x03)\x03)\x05)\u0194\n)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x05)\u019C\n)\x03)\x03)\x03)\x03)\x03)\x07)\u01A3\n)\f)\x0E" +
		")\u01A6\v)\x03)\x03)\x05)\u01AA\n)\x03*\x03*\x03+\x03+\x03+\x03+\x03+" +
		"\x03+\x03+\x03+\x05+\u01B6\n+\x03,\x03,\x03,\x05,\u01BB\n,\x03-\x03-\x03" +
		"-\x03-\x05-\u01C1\n-\x05-\u01C3\n-\x03.\x03.\x03/\x03/\x03/\x03/\x05/" +
		"\u01CB\n/\x030\x030\x030\x050\u01D0\n0\x030\x050\u01D3\n0\x031\x031\x03" +
		"1\x051\u01D8\n1\x032\x052\u01DB\n2\x032\x032\x033\x053\u01E0\n3\x033\x03" +
		"3\x053\u01E4\n3\x034\x034\x034\x034\x054\u01EA\n4\x034\x034\x054\u01EE" +
		"\n4\x034\x054\u01F1\n4\x035\x035\x035\x035\x035\x075\u01F8\n5\f5\x0E5" +
		"\u01FB\v5\x035\x035\x036\x036\x036\x036\x036\x056\u0204\n6\x036\x036\x03" +
		"6\x036\x056\u020A\n6\x037\x037\x037\x057\u020F\n7\x038\x038\x038\x038" +
		"\x038\x038\x038\x058\u0218\n8\x038\x038\x038\x038\x058\u021E\n8\x039\x03" +
		"9\x039\x039\x039\x059\u0225\n9\x039\x039\x039\x039\x059\u022B\n9\x03:" +
		"\x03:\x03:\x07:\u0230\n:\f:\x0E:\u0233\v:\x03;\x03;\x03;\x03;\x03<\x03" +
		"<\x03<\x05<\u023C\n<\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u0244\n=\x03>" +
		"\x03>\x03>\x05>\u0249\n>\x03>\x02\x02\x03N?\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
		"6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02\x02\x07\x03\x02GL\x03\x02SX\x03\x02" +
		"\x04\t\x03\x02\x0F\x11\x03\x0256\x02\u026C\x02\x7F\x03\x02\x02\x02\x04" +
		"\x84\x03\x02\x02\x02\x06\x8A\x03\x02\x02\x02\b\x8C\x03\x02\x02\x02\n\x96" +
		"\x03\x02\x02\x02\f\x9C\x03\x02\x02\x02\x0E\x9E\x03\x02\x02\x02\x10\xBA" +
		"\x03\x02\x02\x02\x12\xBC\x03\x02\x02\x02\x14\xC0\x03\x02\x02\x02\x16\xC8" +
		"\x03\x02\x02\x02\x18\xD5\x03\x02\x02\x02\x1A\xE1\x03\x02\x02\x02\x1C\xE3" +
		"\x03\x02\x02\x02\x1E\xE9\x03\x02\x02\x02 \u0109\x03\x02\x02\x02\"\u010C" +
		"\x03\x02\x02\x02$\u0125\x03\x02\x02\x02&\u0127\x03\x02\x02\x02(\u0129" +
		"\x03\x02\x02\x02*\u0134\x03\x02\x02\x02,\u0138\x03\x02\x02\x02.\u013A" +
		"\x03\x02\x02\x020\u0144\x03\x02\x02\x022\u0146\x03\x02\x02\x024\u014A" +
		"\x03\x02\x02\x026\u014D\x03\x02\x02\x028\u0150\x03\x02\x02\x02:\u0153" +
		"\x03\x02\x02\x02<\u0155\x03\x02\x02\x02>\u015A\x03\x02\x02\x02@\u015C" +
		"\x03\x02\x02\x02B\u015E\x03\x02\x02\x02D\u0160\x03\x02\x02\x02F\u016B" +
		"\x03\x02\x02\x02H\u016F\x03\x02\x02\x02J\u0171\x03\x02\x02\x02L\u0179" +
		"\x03\x02\x02\x02N\u0182\x03\x02\x02\x02P\u01A9\x03\x02\x02\x02R\u01AB" +
		"\x03\x02\x02\x02T\u01B5\x03\x02\x02\x02V\u01BA\x03\x02\x02\x02X\u01C2" +
		"\x03\x02\x02\x02Z\u01C4\x03\x02\x02\x02\\\u01C6\x03\x02\x02\x02^\u01CC" +
		"\x03\x02\x02\x02`\u01D7\x03\x02\x02\x02b\u01DA\x03\x02\x02\x02d\u01DF" +
		"\x03\x02\x02\x02f\u01E5\x03\x02\x02\x02h\u01F2\x03\x02\x02\x02j\u01FE" +
		"\x03\x02\x02\x02l\u020E\x03\x02\x02\x02n\u0210\x03\x02\x02\x02p\u021F" +
		"\x03\x02\x02\x02r\u022C\x03\x02\x02\x02t\u0234\x03\x02\x02\x02v\u023B" +
		"\x03\x02\x02\x02x\u023D\x03\x02\x02\x02z\u0248\x03\x02\x02\x02|~\x05\x04" +
		"\x03\x02}|\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x7F" +
		"\x80\x03\x02\x02\x02\x80\x82\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x82" +
		"\x83\x07\x02\x02\x03\x83\x03\x03\x02\x02\x02\x84\x85\x05\x06\x04\x02\x85" +
		"\x86\x07F\x02\x02\x86\x05\x03\x02\x02\x02\x87\x8B\x05\b\x05\x02\x88\x8B" +
		"\x05\f\x07\x02\x89\x8B\x05\\/\x02\x8A\x87\x03\x02\x02\x02\x8A\x88\x03" +
		"\x02\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x07\x03\x02\x02\x02\x8C\x8D\x05" +
		"z>\x02\x8D\x8E\x07_\x02\x02\x8E\x8F\x07G\x02\x02\x8F\x90\x05\n\x06\x02" +
		"\x90\t\x03\x02\x02\x02\x91\x97\x05J&\x02\x92\x97\x05\f\x07\x02\x93\x97" +
		"\x05j6\x02\x94\x97\x05l7\x02\x95\x97\x05h5\x02\x96\x91\x03\x02\x02\x02" +
		"\x96\x92\x03\x02\x02\x02\x96\x93\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02" +
		"\x96\x95\x03\x02\x02\x02\x97\v\x03\x02\x02\x02\x98\x9D\x05\x0E\b\x02\x99" +
		"\x9D\x05^0\x02\x9A\x9D\x05f4\x02\x9B\x9D\x05> \x02\x9C\x98\x03\x02\x02" +
		"\x02\x9C\x99\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9B\x03\x02\x02" +
		"\x02\x9D\r\x03\x02\x02\x02\x9E\xA0\x07%\x02\x02\x9F\xA1\x07*\x02\x02\xA0" +
		"\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2" +
		"\xA3\x05\x16\f\x02\xA3\xA6\x05\x1E\x10\x02\xA4\xA5\x07(\x02\x02\xA5\xA7" +
		"\x05&\x14\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9" +
		"\x03\x02\x02\x02\xA8\xAA\x05\x12\n\x02\xA9\xA8\x03\x02\x02\x02\xA9\xAA" +
		"\x03\x02\x02\x02\xAA\xAE\x03\x02\x02\x02\xAB\xAC\x07\x16\x02\x02\xAC\xAD" +
		"\x07\x18\x02\x02\xAD\xAF\x05.\x18\x02\xAE\xAB\x03\x02\x02\x02\xAE\xAF" +
		"\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xB1\x07)\x02\x02\xB1\xB3" +
		"\x05\x10\t\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB5" +
		"\x03\x02\x02\x02\xB4\xB6\x056\x1C\x02\xB5\xB4\x03\x02\x02\x02\xB5\xB6" +
		"\x03\x02\x02\x02\xB6\xB8\x03\x02\x02\x02\xB7\xB9\x058\x1D\x02\xB8\xB7" +
		"\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\x0F\x03\x02\x02\x02\xBA\xBB" +
		"\x05N(\x02\xBB\x11\x03\x02\x02\x02\xBC\xBD\x07\x17\x02\x02\xBD\xBE\x07" +
		"\x18\x02\x02\xBE\xBF\x05,\x17\x02\xBF\x13\x03\x02\x02\x02\xC0\xC5\x05" +
		"J&\x02\xC1\xC2\x07`\x02\x02\xC2\xC4\x05J&\x02\xC3\xC1\x03\x02\x02\x02" +
		"\xC4\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02" +
		"\xC6\x15\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCD\x05\x18\r\x02" +
		"\xC9\xCA\x07`\x02\x02\xCA\xCC\x05\x18\r\x02\xCB\xC9\x03\x02\x02\x02\xCC" +
		"\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE" +
		"\x17\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD2\x05\x1A\x0E\x02\xD1" +
		"\xD3\x05\x1C\x0F\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3" +
		"\xD6\x03\x02\x02\x02\xD4\xD6\x07O\x02\x02\xD5\xD0\x03\x02\x02\x02\xD5" +
		"\xD4\x03\x02\x02\x02\xD6\x19\x03\x02\x02\x02\xD7\xD8\x07_\x02\x02\xD8" +
		"\xD9\x07a\x02\x02\xD9\xDA\x07O\x02\x02\xDA\xE2\x07b\x02\x02\xDB\xDC\x07" +
		"_\x02\x02\xDC\xDD\x07a\x02\x02\xDD\xDE\x05J&\x02\xDE\xDF\x07b\x02\x02" +
		"\xDF\xE2\x03\x02\x02\x02\xE0\xE2\x05J&\x02\xE1\xD7\x03\x02\x02\x02\xE1" +
		"\xDB\x03\x02\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2\x1B\x03\x02\x02\x02\xE3" +
		"\xE5\x078\x02\x02\xE4\xE6\x05@!\x02\xE5\xE4\x03\x02\x02\x02\xE5\xE6\x03" +
		"\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x07_\x02\x02\xE8\x1D\x03" +
		"\x02\x02\x02\xE9\xF3\x07&\x02\x02\xEA\xEF\x05 \x11\x02\xEB\xEC\x07`\x02" +
		"\x02\xEC\xEE\x05 \x11\x02\xED\xEB\x03\x02\x02\x02\xEE\xF1\x03\x02\x02" +
		"\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF4\x03\x02\x02" +
		"\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF4\x05(\x15\x02\xF3\xEA\x03\x02\x02" +
		"\x02\xF3\xF2\x03\x02\x02\x02\xF4\x1F\x03\x02\x02\x02\xF5\xF6\x07a\x02" +
		"\x02\xF6\xF7\x05\x0E\b\x02\xF7\xF8\x07b\x02\x02\xF8\xF9\x05\"\x12\x02" +
		"\xF9\u010A\x03\x02\x02\x02\xFA\xFC\x05J&\x02\xFB\xFD\x05\"\x12\x02\xFC" +
		"\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\u010A\x03\x02\x02\x02" +
		"\xFE\xFF\x07a\x02\x02\xFF\u0104\x05 \x11\x02\u0100\u0101\x07`\x02\x02" +
		"\u0101\u0103\x05 \x11\x02\u0102\u0100\x03\x02\x02\x02\u0103\u0106\x03" +
		"\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105" +
		"\u0107\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0107\u0108\x07b\x02" +
		"\x02\u0108\u010A\x03\x02\x02\x02\u0109\xF5\x03\x02\x02\x02\u0109\xFA\x03" +
		"\x02\x02\x02\u0109\xFE\x03\x02\x02\x02\u010A!\x03\x02\x02\x02\u010B\u010D" +
		"\x078\x02\x02\u010C\u010B\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02" +
		"\u010D\u010E\x03\x02\x02\x02\u010E\u010F\x07_\x02\x02\u010F#\x03\x02\x02" +
		"\x02\u0110\u0126\x07`\x02\x02\u0111\u0113\x07+\x02\x02\u0112\u0111\x03" +
		"\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0122\x03\x02\x02\x02\u0114" +
		"\u0116\x07/\x02\x02\u0115\u0117\x072\x02\x02\u0116\u0115\x03\x02\x02\x02" +
		"\u0116\u0117\x03\x02\x02\x02\u0117\u0123\x03\x02\x02\x02\u0118\u011A\x07" +
		"0\x02\x02\u0119\u011B\x072\x02\x02\u011A\u0119\x03\x02\x02\x02\u011A\u011B" +
		"\x03\x02\x02\x02\u011B\u0123\x03\x02\x02\x02\u011C\u011E\x071\x02\x02" +
		"\u011D\u011F\x072\x02\x02\u011E\u011D\x03\x02\x02\x02\u011E\u011F\x03" +
		"\x02\x02\x02\u011F\u0123\x03\x02\x02\x02\u0120\u0123\x07.\x02\x02\u0121" +
		"\u0123\x07,\x02\x02\u0122\u0114\x03\x02\x02\x02\u0122\u0118\x03\x02\x02" +
		"\x02\u0122\u011C\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122\u0121" +
		"\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02" +
		"\u0124\u0126\x07-\x02\x02\u0125\u0110\x03\x02\x02\x02\u0125\u0112\x03" +
		"\x02\x02\x02\u0126%\x03\x02\x02\x02\u0127\u0128\x05N(\x02\u0128\'\x03" +
		"\x02\x02\x02\u0129\u0131\x05 \x11\x02\u012A\u012B\x05$\x13\x02\u012B\u012C" +
		"\x05 \x11\x02\u012C\u012D\x07!\x02\x02\u012D\u012E\x05*\x16\x02\u012E" +
		"\u0130\x03\x02\x02\x02\u012F\u012A\x03\x02\x02\x02\u0130\u0133\x03\x02" +
		"\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
		")\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0134\u0135\x05J&\x02\u0135" +
		"\u0136\x05:\x1E\x02\u0136\u0137\x05J&\x02\u0137+\x03\x02\x02\x02\u0138" +
		"\u0139\x05\x14\v\x02\u0139-\x03\x02\x02\x02\u013A\u013F\x050\x19\x02\u013B" +
		"\u013C\x07`\x02\x02\u013C\u013E\x050\x19\x02\u013D\u013B\x03\x02\x02\x02" +
		"\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03" +
		"\x02\x02\x02\u0140/\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0142" +
		"\u0145\x052\x1A\x02\u0143\u0145\x054\x1B\x02\u0144\u0142\x03\x02\x02\x02" +
		"\u0144\u0143\x03\x02\x02\x02\u01451\x03\x02\x02\x02\u0146\u0148\x05\x14" +
		"\v\x02\u0147\u0149\x07\x14\x02\x02\u0148\u0147\x03\x02\x02\x02\u0148\u0149" +
		"\x03\x02\x02\x02\u01493\x03\x02\x02\x02\u014A\u014B\x05\x14\v\x02\u014B" +
		"\u014C\x07\x15\x02\x02\u014C5\x03\x02\x02\x02\u014D\u014E\x07A\x02\x02" +
		"\u014E\u014F\x05V,\x02\u014F7\x03\x02\x02\x02\u0150\u0151\x07B\x02\x02" +
		"\u0151\u0152\x05V,\x02\u01529\x03\x02\x02\x02\u0153\u0154\t\x02\x02\x02" +
		"\u0154;\x03\x02\x02\x02\u0155\u0156\t\x03\x02\x02\u0156=\x03\x02\x02\x02" +
		"\u0157\u015B\x05V,\x02\u0158\u015B\x05X-\x02\u0159\u015B\x05Z.\x02\u015A" +
		"\u0157\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015A\u0159\x03\x02" +
		"\x02\x02\u015B?\x03\x02\x02\x02\u015C\u015D\t\x04\x02\x02\u015DA\x03\x02" +
		"\x02\x02\u015E\u015F\t\x05\x02\x02\u015FC\x03\x02\x02\x02\u0160\u0165" +
		"\x05F$\x02\u0161\u0162\x07\x03\x02\x02\u0162\u0164\x05H%\x02\u0163\u0161" +
		"\x03\x02\x02\x02\u0164\u0167\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02" +
		"\u0165\u0166\x03\x02\x02\x02\u0166E\x03\x02\x02\x02\u0167\u0165\x03\x02" +
		"\x02\x02\u0168\u016C\x07_\x02\x02\u0169\u016C\x07Q\x02\x02\u016A\u016C" +
		"\x07R\x02\x02\u016B\u0168\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02" +
		"\u016B\u016A\x03\x02\x02\x02\u016CG\x03\x02\x02\x02\u016D\u0170\x07_\x02" +
		"\x02\u016E\u0170\x07R\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F\u016E" +
		"\x03\x02\x02\x02\u0170I\x03\x02\x02\x02\u0171\u0176\x07_\x02\x02\u0172" +
		"\u0173\x07\x03\x02\x02\u0173\u0175\x07_\x02\x02\u0174\u0172\x03\x02\x02" +
		"\x02\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0176\u0177" +
		"\x03\x02\x02\x02\u0177K\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0179" +
		"\u017A\x05N(\x02\u017AM\x03\x02\x02\x02\u017B\u017C\b(\x01\x02\u017C\u017E" +
		"\x05R*\x02\u017D\u017F\x05P)\x02\u017E\u017D\x03\x02\x02\x02\u017E\u017F" +
		"\x03\x02\x02\x02\u017F\u0183\x03\x02\x02\x02\u0180\u0181\x07U\x02\x02" +
		"\u0181\u0183\x05N(\x05\u0182\u017B\x03\x02\x02\x02\u0182\u0180\x03\x02" +
		"\x02\x02\u0183\u018C\x03\x02\x02\x02\u0184\u0185\f\x04\x02\x02\u0185\u0186" +
		"\x07S\x02\x02\u0186\u018B\x05N(\x05\u0187\u0188\f\x03\x02\x02\u0188\u0189" +
		"\x07T\x02\x02\u0189\u018B\x05N(\x04\u018A\u0184\x03\x02\x02\x02\u018A" +
		"\u0187\x03\x02\x02\x02\u018B\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02" +
		"\x02\x02\u018C\u018D\x03\x02\x02\x02\u018DO\x03\x02\x02\x02\u018E\u018C" +
		"\x03\x02\x02\x02\u018F\u0190\x05:\x1E\x02\u0190\u0191\x05R*\x02\u0191" +
		"\u01AA\x03\x02\x02\x02\u0192\u0194\x07U\x02\x02\u0193\u0192\x03\x02\x02" +
		"\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0196" +
		"\x07W\x02\x02\u0196\u0197\x05R*\x02\u0197\u0198\x07S\x02\x02\u0198\u0199" +
		"\x05R*\x02\u0199\u01AA\x03\x02\x02\x02\u019A\u019C\x07U\x02\x02\u019B" +
		"\u019A\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019D\x03\x02" +
		"\x02\x02\u019D\u019E\x07V\x02\x02\u019E\u019F\x07a\x02\x02\u019F\u01A4" +
		"\x05R*\x02\u01A0\u01A1\x07`\x02\x02\u01A1\u01A3\x05R*\x02\u01A2\u01A0" +
		"\x03\x02\x02\x02\u01A3\u01A6\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02" +
		"\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A7\x03\x02\x02\x02\u01A6\u01A4\x03" +
		"\x02\x02\x02\u01A7\u01A8\x07b\x02\x02\u01A8\u01AA\x03\x02\x02\x02\u01A9" +
		"\u018F\x03\x02\x02\x02\u01A9\u0193\x03\x02\x02\x02\u01A9\u019B\x03\x02" +
		"\x02\x02\u01AAQ\x03\x02\x02\x02\u01AB\u01AC\x05T+\x02\u01ACS\x03\x02\x02" +
		"\x02\u01AD\u01B6\x07_\x02\x02\u01AE\u01B6\x05V,\x02\u01AF\u01B6\x05Z." +
		"\x02\u01B0\u01B6\x05X-\x02\u01B1\u01B2\x07a\x02\x02\u01B2\u01B3\x05L\'" +
		"\x02\u01B3\u01B4\x07b\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01AD" +
		"\x03\x02\x02\x02\u01B5\u01AE\x03\x02\x02\x02\u01B5\u01AF\x03\x02\x02\x02" +
		"\u01B5\u01B0\x03\x02\x02\x02\u01B5\u01B1\x03\x02\x02\x02\u01B6U\x03\x02" +
		"\x02\x02\u01B7\u01BB\x07]\x02\x02\u01B8\u01BB\x07^\x02\x02\u01B9\u01BB" +
		"\x07\\\x02\x02\u01BA\u01B7\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02" +
		"\u01BA\u01B9\x03\x02\x02\x02\u01BBW\x03\x02\x02\x02\u01BC\u01C3\x07Y\x02" +
		"\x02\u01BD\u01C0\x07Z\x02\x02\u01BE\u01BF\x07D\x02\x02\u01BF\u01C1\x07" +
		"Y\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1" +
		"\u01C3\x03\x02\x02\x02\u01C2\u01BC\x03\x02\x02\x02\u01C2\u01BD\x03\x02" +
		"\x02\x02\u01C3Y\x03\x02\x02\x02\u01C4\u01C5\t\x06\x02\x02\u01C5[\x03\x02" +
		"\x02\x02\u01C6\u01C7\x077\x02\x02\u01C7\u01CA\x05D#\x02\u01C8\u01C9\x07" +
		"8\x02\x02\u01C9\u01CB\x07_\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA\u01CB" +
		"\x03\x02\x02\x02\u01CB]\x03\x02\x02\x02\u01CC\u01CD\x07\x1C\x02\x02\u01CD" +
		"\u01CF\x05`1\x02\u01CE\u01D0\x05b2\x02\u01CF\u01CE\x03\x02\x02\x02\u01CF" +
		"\u01D0\x03\x02\x02\x02\u01D0\u01D2\x03\x02\x02\x02\u01D1\u01D3\x05d3\x02" +
		"\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3_\x03\x02" +
		"\x02\x02\u01D4\u01D8\x05J&\x02\u01D5\u01D8\x05\x0E\b\x02\u01D6\u01D8\x05" +
		"> \x02\u01D7\u01D4\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D6" +
		"\x03\x02\x02\x02\u01D8a\x03\x02\x02\x02\u01D9\u01DB\x07?\x02\x02\u01DA" +
		"\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x03\x02" +
		"\x02\x02\u01DC\u01DD\x07_\x02\x02\u01DDc\x03\x02\x02\x02\u01DE\u01E0\x07" +
		";\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0" +
		"\u01E1\x03\x02\x02\x02\u01E1\u01E3\x07Y\x02\x02\u01E2\u01E4\x07\x1F\x02" +
		"\x02\u01E3\u01E2\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4e\x03" +
		"\x02\x02\x02\u01E5\u01E6\x07\x1B\x02\x02\u01E6\u01E7\x07&\x02\x02\u01E7" +
		"\u01E9\x05J&\x02\u01E8\u01EA\x07?\x02\x02\u01E9\u01E8\x03\x02\x02\x02" +
		"\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01F0\x07" +
		"_\x02\x02\u01EC\u01EE\x07E\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01ED\u01EE" +
		"\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F1\x07_\x02\x02" +
		"\u01F0\u01ED\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1g\x03\x02" +
		"\x02\x02\u01F2\u01F3\x07C\x02\x02\u01F3\u01F9\x07a\x02\x02\u01F4\u01F5" +
		"\x05\b\x05\x02\u01F5\u01F6\x07F\x02\x02\u01F6\u01F8\x03\x02\x02\x02\u01F7" +
		"\u01F4\x03\x02\x02\x02\u01F8\u01FB\x03\x02\x02\x02\u01F9\u01F7\x03\x02" +
		"\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FC\x03\x02\x02\x02\u01FB" +
		"\u01F9\x03\x02\x02\x02\u01FC\u01FD\x07b\x02\x02\u01FDi\x03\x02\x02\x02" +
		"\u01FE\u01FF\x07\r\x02\x02\u01FF\u0200\x07\f\x02\x02\u0200\u0203\x05J" +
		"&\x02\u0201\u0202\x07\x0E\x02\x02\u0202\u0204\x07_\x02\x02\u0203\u0201" +
		"\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02" +
		"\u0205\u0206\x05B\"\x02\u0206\u0209\x07_\x02\x02\u0207\u0208\x07`\x02" +
		"\x02\u0208\u020A\x05@!\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03" +
		"\x02\x02\x02\u020Ak\x03\x02\x02\x02\u020B\u020F\x05n8\x02\u020C\u020F" +
		"\x05x=\x02\u020D\u020F\x05p9\x02\u020E\u020B\x03\x02\x02\x02\u020E\u020C" +
		"\x03\x02\x02\x02\u020E\u020D\x03\x02\x02\x02\u020Fm\x03\x02\x02\x02\u0210" +
		"\u0211\x07\x19\x02\x02\u0211\u0212\x07&\x02\x02\u0212\u0213\x05J&\x02" +
		"\u0213\u0214\x07`\x02\x02\u0214\u0217\x05J&\x02\u0215\u0216\x07`\x02\x02" +
		"\u0216\u0218\x05J&\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02" +
		"\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u021A\x07=\x02\x02\u021A\u021D" +
		"\x07_\x02\x02\u021B\u021C\x07\x1D\x02\x02\u021C\u021E\x05r:\x02\u021D" +
		"\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021Eo\x03\x02\x02" +
		"\x02\u021F\u0220\x07\x1A\x02\x02\u0220\u0221\x07&\x02\x02\u0221\u0224" +
		"\x05J&\x02\u0222\u0223\x07`\x02\x02\u0223\u0225\x05J&\x02\u0224\u0222" +
		"\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02" +
		"\u0226\u0227\x07=\x02\x02\u0227\u022A\x07_\x02\x02\u0228\u0229\x07\x1D" +
		"\x02\x02\u0229\u022B\x05r:\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B" +
		"\x03\x02\x02\x02\u022Bq\x03\x02\x02\x02\u022C\u0231\x05t;\x02\u022D\u022E" +
		"\x07`\x02\x02\u022E\u0230\x05t;\x02\u022F\u022D\x03\x02\x02\x02\u0230" +
		"\u0233\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232\x03\x02" +
		"\x02\x02\u0232s\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0234\u0235" +
		"\x07_\x02\x02\u0235\u0236\x07G\x02\x02\u0236\u0237\x05v<\x02\u0237u\x03" +
		"\x02\x02\x02\u0238\u023C\x05V,\x02\u0239\u023C\x05X-\x02\u023A";
	private static readonly _serializedATNSegment1: string =
		"\u023C\x05J&\x02\u023B\u0238\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02" +
		"\u023B\u023A\x03\x02\x02\x02\u023Cw\x03\x02\x02\x02\u023D\u023E\x07\x1A" +
		"\x02\x02\u023E\u023F\x05J&\x02\u023F\u0240\x07&\x02\x02\u0240\u0243\x05" +
		"J&\x02\u0241\u0242\x07=\x02\x02\u0242\u0244\x07_\x02\x02\u0243\u0241\x03" +
		"\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244y\x03\x02\x02\x02\u0245" +
		"\u0249\x07\x12\x02\x02\u0246\u0249\x07\x13\x02\x02\u0247\u0249\x03\x02" +
		"\x02\x02\u0248\u0245\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0248" +
		"\u0247\x03\x02\x02\x02\u0249{\x03\x02\x02\x02J\x7F\x8A\x96\x9C\xA0\xA6" +
		"\xA9\xAE\xB2\xB5\xB8\xC5\xCD\xD2\xD5\xE1\xE5\xEF\xF3\xFC\u0104\u0109\u010C" +
		"\u0112\u0116\u011A\u011E\u0122\u0125\u0131\u013F\u0144\u0148\u015A\u0165" +
		"\u016B\u016F\u0176\u017E\u0182\u018A\u018C\u0193\u019B\u01A4\u01A9\u01B5" +
		"\u01BA\u01C0\u01C2\u01CA\u01CF\u01D2\u01D7\u01DA\u01DF\u01E3\u01E9\u01ED" +
		"\u01F0\u01F9\u0203\u0209\u020E\u0217\u021D\u0224\u022A\u0231\u023B\u0243" +
		"\u0248";
	public static readonly _serializedATN: string = Utils.join(
		[
			HSQLParser._serializedATNSegment0,
			HSQLParser._serializedATNSegment1,
		],
		"",
	);
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterCompletestmt) {
			listener.enterCompletestmt(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitCompletestmt) {
			listener.exitCompletestmt(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterDefinitionStmt) {
			listener.enterDefinitionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitDefinitionStmt) {
			listener.exitDefinitionStmt(this);
		}
	}
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
	public transformStmt(): TransformStmtContext | undefined {
		return this.tryGetRuleContext(0, TransformStmtContext);
	}
	public mlStmt(): MlStmtContext | undefined {
		return this.tryGetRuleContext(0, MlStmtContext);
	}
	public moduleStmt(): ModuleStmtContext | undefined {
		return this.tryGetRuleContext(0, ModuleStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_expr; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
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
	public plotStmt(): PlotStmtContext | undefined {
		return this.tryGetRuleContext(0, PlotStmtContext);
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterActionStmt) {
			listener.enterActionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitActionStmt) {
			listener.exitActionStmt(this);
		}
	}
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
	public _columns!: SelectColumnsContext;
	public _whereclause!: SelectWhereClauseContext;
	public _orderbyclause!: OrderByClauseContext;
	public SELECT(): TerminalNode { return this.getToken(HSQLParser.SELECT, 0); }
	public selectFromClause(): SelectFromClauseContext {
		return this.getRuleContext(0, SelectFromClauseContext);
	}
	public selectColumns(): SelectColumnsContext {
		return this.getRuleContext(0, SelectColumnsContext);
	}
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.DISTINCT, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.WHERE, 0); }
	public selectGroupByClause(): SelectGroupByClauseContext | undefined {
		return this.tryGetRuleContext(0, SelectGroupByClauseContext);
	}
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.ORDER, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.BY, 0); }
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.HAVING, 0); }
	public selectHavingClause(): SelectHavingClauseContext | undefined {
		return this.tryGetRuleContext(0, SelectHavingClauseContext);
	}
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	public offsetClause(): OffsetClauseContext | undefined {
		return this.tryGetRuleContext(0, OffsetClauseContext);
	}
	public selectWhereClause(): SelectWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, SelectWhereClauseContext);
	}
	public orderByClause(): OrderByClauseContext | undefined {
		return this.tryGetRuleContext(0, OrderByClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectStmt; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterSelectStmt) {
			listener.enterSelectStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitSelectStmt) {
			listener.exitSelectStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectStmt) {
			return visitor.visitSelectStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectHavingClauseContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectHavingClause; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterSelectHavingClause) {
			listener.enterSelectHavingClause(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitSelectHavingClause) {
			listener.exitSelectHavingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectHavingClause) {
			return visitor.visitSelectHavingClause(this);
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterSelectGroupByClause) {
			listener.enterSelectGroupByClause(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitSelectGroupByClause) {
			listener.exitSelectGroupByClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectGroupByClause) {
			return visitor.visitSelectGroupByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionSetContext extends ParserRuleContext {
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
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
	public get ruleIndex(): number { return HSQLParser.RULE_definitionSet; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterDefinitionSet) {
			listener.enterDefinitionSet(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitDefinitionSet) {
			listener.exitDefinitionSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDefinitionSet) {
			return visitor.visitDefinitionSet(this);
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterSelectColumns) {
			listener.enterSelectColumns(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitSelectColumns) {
			listener.exitSelectColumns(this);
		}
	}
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectCol; }
	public copyFrom(ctx: SelectColContext): void {
		super.copyFrom(ctx);
	}
}
export class NormalColContext extends SelectColContext {
	public _col!: ColContext;
	public col(): ColContext {
		return this.getRuleContext(0, ColContext);
	}
	public aliasingCol(): AliasingColContext | undefined {
		return this.tryGetRuleContext(0, AliasingColContext);
	}
	constructor(ctx: SelectColContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterNormalCol) {
			listener.enterNormalCol(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitNormalCol) {
			listener.exitNormalCol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitNormalCol) {
			return visitor.visitNormalCol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WildAllContext extends SelectColContext {
	public MULTIPLY(): TerminalNode { return this.getToken(HSQLParser.MULTIPLY, 0); }
	constructor(ctx: SelectColContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterWildAll) {
			listener.enterWildAll(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitWildAll) {
			listener.exitWildAll(this);
		}
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
	constructor(ctx: ColContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterSelectAggregatedEverythingCol) {
			listener.enterSelectAggregatedEverythingCol(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitSelectAggregatedEverythingCol) {
			listener.exitSelectAggregatedEverythingCol(this);
		}
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
	public _column!: DefinitionContext;
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	constructor(ctx: ColContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterSelectAggregatedOneCol) {
			listener.enterSelectAggregatedOneCol(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitSelectAggregatedOneCol) {
			listener.exitSelectAggregatedOneCol(this);
		}
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
	public _column!: DefinitionContext;
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	constructor(ctx: ColContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterSelectOneCol) {
			listener.enterSelectOneCol(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitSelectOneCol) {
			listener.exitSelectOneCol(this);
		}
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


export class AliasingColContext extends ParserRuleContext {
	public ctx: ParserRuleContext;
	public _alias!: Token;
	public AS(): TerminalNode { return this.getToken(HSQLParser.AS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public dataType(): DataTypeContext | undefined {
		return this.tryGetRuleContext(0, DataTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, ctx: ParserRuleContext) {
		super(parent, invokingState);
		this.ctx = ctx;
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_aliasingCol; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterAliasingCol) {
			listener.enterAliasingCol(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitAliasingCol) {
			listener.exitAliasingCol(this);
		}
	}
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
	public selectFromTableReference(): SelectFromTableReferenceContext[];
	public selectFromTableReference(i: number): SelectFromTableReferenceContext;
	public selectFromTableReference(i?: number): SelectFromTableReferenceContext | SelectFromTableReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectFromTableReferenceContext);
		} else {
			return this.getRuleContext(i, SelectFromTableReferenceContext);
		}
	}
	public joinedTable(): JoinedTableContext | undefined {
		return this.tryGetRuleContext(0, JoinedTableContext);
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterSelectFromClause) {
			listener.enterSelectFromClause(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitSelectFromClause) {
			listener.exitSelectFromClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectFromClause) {
			return visitor.visitSelectFromClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectFromTableReferenceContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectFromTableReference; }
	public copyFrom(ctx: SelectFromTableReferenceContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectFromDerivedTableContext extends SelectFromTableReferenceContext {
	public _selectStmt!: SelectStmtContext;
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public selectStmt(): SelectStmtContext {
		return this.getRuleContext(0, SelectStmtContext);
	}
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	public selectAlias(): SelectAliasContext {
		return this.getRuleContext(0, SelectAliasContext);
	}
	constructor(ctx: SelectFromTableReferenceContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterSelectFromDerivedTable) {
			listener.enterSelectFromDerivedTable(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitSelectFromDerivedTable) {
			listener.exitSelectFromDerivedTable(this);
		}
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
export class SelectFromDefinitionContext extends SelectFromTableReferenceContext {
	public _definition!: DefinitionContext;
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	public selectAlias(): SelectAliasContext | undefined {
		return this.tryGetRuleContext(0, SelectAliasContext);
	}
	constructor(ctx: SelectFromTableReferenceContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterSelectFromDefinition) {
			listener.enterSelectFromDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitSelectFromDefinition) {
			listener.exitSelectFromDefinition(this);
		}
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
export class SelectBracketedFromTableContext extends SelectFromTableReferenceContext {
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public selectFromTableReference(): SelectFromTableReferenceContext[];
	public selectFromTableReference(i: number): SelectFromTableReferenceContext;
	public selectFromTableReference(i?: number): SelectFromTableReferenceContext | SelectFromTableReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectFromTableReferenceContext);
		} else {
			return this.getRuleContext(i, SelectFromTableReferenceContext);
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
	constructor(ctx: SelectFromTableReferenceContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterSelectBracketedFromTable) {
			listener.enterSelectBracketedFromTable(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitSelectBracketedFromTable) {
			listener.exitSelectBracketedFromTable(this);
		}
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


export class SelectAliasContext extends ParserRuleContext {
	public ctx: ParserRuleContext;
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number, ctx: ParserRuleContext) {
		super(parent, invokingState);
		this.ctx = ctx;
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectAlias; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterSelectAlias) {
			listener.enterSelectAlias(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitSelectAlias) {
			listener.exitSelectAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectAlias) {
			return visitor.visitSelectAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Join_operatorContext extends ParserRuleContext {
	public COMMA_(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.COMMA_, 0); }
	public JOIN(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.JOIN, 0); }
	public NATURAL(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.NATURAL, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.LEFT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.RIGHT, 0); }
	public FULL(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.FULL, 0); }
	public INNER(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.INNER, 0); }
	public CROSS(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.CROSS, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.OUTER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_join_operator; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterJoin_operator) {
			listener.enterJoin_operator(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitJoin_operator) {
			listener.exitJoin_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitJoin_operator) {
			return visitor.visitJoin_operator(this);
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterSelectWhereClause) {
			listener.enterSelectWhereClause(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitSelectWhereClause) {
			listener.exitSelectWhereClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectWhereClause) {
			return visitor.visitSelectWhereClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinedTableContext extends ParserRuleContext {
	public selectFromTableReference(): SelectFromTableReferenceContext[];
	public selectFromTableReference(i: number): SelectFromTableReferenceContext;
	public selectFromTableReference(i?: number): SelectFromTableReferenceContext | SelectFromTableReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectFromTableReferenceContext);
		} else {
			return this.getRuleContext(i, SelectFromTableReferenceContext);
		}
	}
	public join_operator(): Join_operatorContext[];
	public join_operator(i: number): Join_operatorContext;
	public join_operator(i?: number): Join_operatorContext | Join_operatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Join_operatorContext);
		} else {
			return this.getRuleContext(i, Join_operatorContext);
		}
	}
	public ON(): TerminalNode[];
	public ON(i: number): TerminalNode;
	public ON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.ON);
		} else {
			return this.getToken(HSQLParser.ON, i);
		}
	}
	public joinSpecification(): JoinSpecificationContext[];
	public joinSpecification(i: number): JoinSpecificationContext;
	public joinSpecification(i?: number): JoinSpecificationContext | JoinSpecificationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JoinSpecificationContext);
		} else {
			return this.getRuleContext(i, JoinSpecificationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_joinedTable; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterJoinedTable) {
			listener.enterJoinedTable(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitJoinedTable) {
			listener.exitJoinedTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitJoinedTable) {
			return visitor.visitJoinedTable(this);
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterJoinSpecification) {
			listener.enterJoinSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitJoinSpecification) {
			listener.exitJoinSpecification(this);
		}
	}
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
	public definitionSet(): DefinitionSetContext {
		return this.getRuleContext(0, DefinitionSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_groupByClause; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterGroupByClause) {
			listener.enterGroupByClause(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitGroupByClause) {
			listener.exitGroupByClause(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterOrderByClause) {
			listener.enterOrderByClause(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitOrderByClause) {
			listener.exitOrderByClause(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterSortItem) {
			listener.enterSortItem(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitSortItem) {
			listener.exitSortItem(this);
		}
	}
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
	public definitionSet(): DefinitionSetContext {
		return this.getRuleContext(0, DefinitionSetContext);
	}
	public ASC(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.ASC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_ascSortItem; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterAscSortItem) {
			listener.enterAscSortItem(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitAscSortItem) {
			listener.exitAscSortItem(this);
		}
	}
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
	public definitionSet(): DefinitionSetContext {
		return this.getRuleContext(0, DefinitionSetContext);
	}
	public DESC(): TerminalNode { return this.getToken(HSQLParser.DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_descSortItem; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterDescSortItem) {
			listener.enterDescSortItem(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitDescSortItem) {
			listener.exitDescSortItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDescSortItem) {
			return visitor.visitDescSortItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitClauseContext extends ParserRuleContext {
	public LIMIT(): TerminalNode { return this.getToken(HSQLParser.LIMIT, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_limitClause; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterLimitClause) {
			listener.enterLimitClause(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitLimitClause) {
			listener.exitLimitClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitLimitClause) {
			return visitor.visitLimitClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OffsetClauseContext extends ParserRuleContext {
	public OFFSET(): TerminalNode { return this.getToken(HSQLParser.OFFSET, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_offsetClause; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterOffsetClause) {
			listener.enterOffsetClause(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitOffsetClause) {
			listener.exitOffsetClause(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterLogicalOperator) {
			listener.enterLogicalOperator(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitLogicalOperator) {
			listener.exitLogicalOperator(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterDataType) {
			listener.enterDataType(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitDataType) {
			listener.exitDataType(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterAlterOperator) {
			listener.enterAlterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitAlterOperator) {
			listener.exitAlterOperator(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterOverDefinition) {
			listener.enterOverDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitOverDefinition) {
			listener.exitOverDefinition(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterNormalIdentifier) {
			listener.enterNormalIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitNormalIdentifier) {
			listener.exitNormalIdentifier(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterRootIdentifier) {
			listener.enterRootIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitRootIdentifier) {
			listener.exitRootIdentifier(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterParentIdentifier) {
			listener.enterParentIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitParentIdentifier) {
			listener.exitParentIdentifier(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterNormalTailIdentifier) {
			listener.enterNormalTailIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitNormalTailIdentifier) {
			listener.exitNormalTailIdentifier(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterParentTailIdentifier) {
			listener.enterParentTailIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitParentTailIdentifier) {
			listener.exitParentTailIdentifier(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterDefinition) {
			listener.enterDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitDefinition) {
			listener.exitDefinition(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterPredicated) {
			listener.enterPredicated(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitPredicated) {
			listener.exitPredicated(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterLogicalNot) {
			listener.enterLogicalNot(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitLogicalNot) {
			listener.exitLogicalNot(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterLogicalBinary) {
			listener.enterLogicalBinary(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitLogicalBinary) {
			listener.exitLogicalBinary(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterBetween) {
			listener.enterBetween(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitBetween) {
			listener.exitBetween(this);
		}
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
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.NOT, 0); }
	public COMMA_(): TerminalNode[];
	public COMMA_(i: number): TerminalNode;
	public COMMA_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.COMMA_);
		} else {
			return this.getToken(HSQLParser.COMMA_, i);
		}
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.ctx);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterInList) {
			listener.enterInList(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitInList) {
			listener.exitInList(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterValueExpressionDefault) {
			listener.enterValueExpressionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitValueExpressionDefault) {
			listener.exitValueExpressionDefault(this);
		}
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
export class IdentifierContext extends PrimaryExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitDecimalLiteral) {
			listener.exitDecimalLiteral(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterDoubleLiteral) {
			listener.enterDoubleLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitDoubleLiteral) {
			listener.exitDoubleLiteral(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterBasicStringLiteral) {
			listener.enterBasicStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitBasicStringLiteral) {
			listener.exitBasicStringLiteral(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterUnicodeStringLiteral) {
			listener.enterUnicodeStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitUnicodeStringLiteral) {
			listener.exitUnicodeStringLiteral(this);
		}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterImportStmt) {
			listener.enterImportStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitImportStmt) {
			listener.exitImportStmt(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterOutputStmt) {
			listener.enterOutputStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitOutputStmt) {
			listener.exitOutputStmt(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterNamedOutput) {
			listener.enterNamedOutput(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitNamedOutput) {
			listener.exitNamedOutput(this);
		}
	}
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterToFile) {
			listener.enterToFile(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitToFile) {
			listener.exitToFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitToFile) {
			return visitor.visitToFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlotStmtContext extends ParserRuleContext {
	public PLOT(): TerminalNode { return this.getToken(HSQLParser.PLOT, 0); }
	public FROM(): TerminalNode { return this.getToken(HSQLParser.FROM, 0); }
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.IDENTIFIER);
		} else {
			return this.getToken(HSQLParser.IDENTIFIER, i);
		}
	}
	public TITLE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.TITLE, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_plotStmt; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterPlotStmt) {
			listener.enterPlotStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitPlotStmt) {
			listener.exitPlotStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitPlotStmt) {
			return visitor.visitPlotStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleStmtContext extends ParserRuleContext {
	public MODULE(): TerminalNode { return this.getToken(HSQLParser.MODULE, 0); }
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	public definitionStmt(): DefinitionStmtContext[];
	public definitionStmt(i: number): DefinitionStmtContext;
	public definitionStmt(i?: number): DefinitionStmtContext | DefinitionStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionStmtContext);
		} else {
			return this.getRuleContext(i, DefinitionStmtContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.SEMICOLON);
		} else {
			return this.getToken(HSQLParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_moduleStmt; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterModuleStmt) {
			listener.enterModuleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitModuleStmt) {
			listener.exitModuleStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitModuleStmt) {
			return visitor.visitModuleStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformStmtContext extends ParserRuleContext {
	public _colName!: Token;
	public ALTER(): TerminalNode { return this.getToken(HSQLParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(HSQLParser.TABLE, 0); }
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	public alterOperator(): AlterOperatorContext {
		return this.getRuleContext(0, AlterOperatorContext);
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.IDENTIFIER);
		} else {
			return this.getToken(HSQLParser.IDENTIFIER, i);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.TO, 0); }
	public COMMA_(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.COMMA_, 0); }
	public dataType(): DataTypeContext | undefined {
		return this.tryGetRuleContext(0, DataTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_transformStmt; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterTransformStmt) {
			listener.enterTransformStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitTransformStmt) {
			listener.exitTransformStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTransformStmt) {
			return visitor.visitTransformStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MlStmtContext extends ParserRuleContext {
	public train(): TrainContext | undefined {
		return this.tryGetRuleContext(0, TrainContext);
	}
	public predict(): PredictContext | undefined {
		return this.tryGetRuleContext(0, PredictContext);
	}
	public elementaryML(): ElementaryMLContext | undefined {
		return this.tryGetRuleContext(0, ElementaryMLContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_mlStmt; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterMlStmt) {
			listener.enterMlStmt(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitMlStmt) {
			listener.exitMlStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitMlStmt) {
			return visitor.visitMlStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrainContext extends ParserRuleContext {
	public _ind!: DefinitionContext;
	public _dep!: DefinitionContext;
	public _test!: DefinitionContext;
	public _method!: Token;
	public TRAIN(): TerminalNode { return this.getToken(HSQLParser.TRAIN, 0); }
	public FROM(): TerminalNode { return this.getToken(HSQLParser.FROM, 0); }
	public COMMA_(): TerminalNode[];
	public COMMA_(i: number): TerminalNode;
	public COMMA_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.COMMA_);
		} else {
			return this.getToken(HSQLParser.COMMA_, i);
		}
	}
	public METHOD(): TerminalNode { return this.getToken(HSQLParser.METHOD, 0); }
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.OPTION, 0); }
	public trainOptions(): TrainOptionsContext | undefined {
		return this.tryGetRuleContext(0, TrainOptionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_train; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterTrain) {
			listener.enterTrain(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitTrain) {
			listener.exitTrain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTrain) {
			return visitor.visitTrain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementaryMLContext extends ParserRuleContext {
	public _ind!: DefinitionContext;
	public _ind2!: DefinitionContext;
	public _method!: Token;
	public PREDICT(): TerminalNode { return this.getToken(HSQLParser.PREDICT, 0); }
	public FROM(): TerminalNode { return this.getToken(HSQLParser.FROM, 0); }
	public METHOD(): TerminalNode { return this.getToken(HSQLParser.METHOD, 0); }
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public COMMA_(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.COMMA_, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.OPTION, 0); }
	public trainOptions(): TrainOptionsContext | undefined {
		return this.tryGetRuleContext(0, TrainOptionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_elementaryML; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterElementaryML) {
			listener.enterElementaryML(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitElementaryML) {
			listener.exitElementaryML(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitElementaryML) {
			return visitor.visitElementaryML(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrainOptionsContext extends ParserRuleContext {
	public trainOption(): TrainOptionContext[];
	public trainOption(i: number): TrainOptionContext;
	public trainOption(i?: number): TrainOptionContext | TrainOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TrainOptionContext);
		} else {
			return this.getRuleContext(i, TrainOptionContext);
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
	public get ruleIndex(): number { return HSQLParser.RULE_trainOptions; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterTrainOptions) {
			listener.enterTrainOptions(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitTrainOptions) {
			listener.exitTrainOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTrainOptions) {
			return visitor.visitTrainOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrainOptionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public EQ(): TerminalNode { return this.getToken(HSQLParser.EQ, 0); }
	public trainValue(): TrainValueContext {
		return this.getRuleContext(0, TrainValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_trainOption; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterTrainOption) {
			listener.enterTrainOption(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitTrainOption) {
			listener.exitTrainOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTrainOption) {
			return visitor.visitTrainOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrainValueContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public definition(): DefinitionContext | undefined {
		return this.tryGetRuleContext(0, DefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_trainValue; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterTrainValue) {
			listener.enterTrainValue(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitTrainValue) {
			listener.exitTrainValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTrainValue) {
			return visitor.visitTrainValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredictContext extends ParserRuleContext {
	public _model!: DefinitionContext;
	public _ind!: DefinitionContext;
	public _method!: Token;
	public PREDICT(): TerminalNode { return this.getToken(HSQLParser.PREDICT, 0); }
	public FROM(): TerminalNode { return this.getToken(HSQLParser.FROM, 0); }
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	public METHOD(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.METHOD, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_predict; }
	// @Override
	public enterRule(listener: HSQLListener): void {
		if (listener.enterPredict) {
			listener.enterPredict(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitPredict) {
			listener.exitPredict(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitPredict) {
			return visitor.visitPredict(this);
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
	public enterRule(listener: HSQLListener): void {
		if (listener.enterScope) {
			listener.enterScope(this);
		}
	}
	// @Override
	public exitRule(listener: HSQLListener): void {
		if (listener.exitScope) {
			listener.exitScope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitScope) {
			return visitor.visitScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


