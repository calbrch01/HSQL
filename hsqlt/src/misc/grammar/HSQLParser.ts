// Generated from grammar/HSQL.g4 by ANTLR 4.9.0-SNAPSHOT


// for the join clause type
import {SelectJoinType} from '../ast/SelectHelpers';
import {SingularDataType} from '../ast/SingularDataType';
import {FileOutputType} from '../ast/FileOutputType';
import {VariableVisibility} from '../ast/VariableVisibility';
// import {FunctionArgument,FunctionArgumentType} from '../ast/FunctionArgumentType';
import {QualifiedIdentifier} from '../ast/QualifiedIdentifier';




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
	public static readonly CSV = 8;
	public static readonly THOR = 9;
	public static readonly XML = 10;
	public static readonly JSON = 11;
	public static readonly WRITE = 12;
	public static readonly UNSTABLE = 13;
	public static readonly STABLE = 14;
	public static readonly TABLE = 15;
	public static readonly ALTER = 16;
	public static readonly TO = 17;
	public static readonly ADD = 18;
	public static readonly DROP = 19;
	public static readonly MODIFY = 20;
	public static readonly EXPORT = 21;
	public static readonly SHARED = 22;
	public static readonly ASC = 23;
	public static readonly DESC = 24;
	public static readonly ORDER = 25;
	public static readonly DISTRIBUTE = 26;
	public static readonly GROUP = 27;
	public static readonly BY = 28;
	public static readonly TRAIN = 29;
	public static readonly PREDICT = 30;
	public static readonly PLOT = 31;
	public static readonly OUTPUT = 32;
	public static readonly OPTION = 33;
	public static readonly OPTIONS = 34;
	public static readonly OVERWRITE = 35;
	public static readonly UPDATE = 36;
	public static readonly ON = 37;
	public static readonly INDEPENDENT = 38;
	public static readonly IDCOLUMN = 39;
	public static readonly PROJECT = 40;
	public static readonly SELECT = 41;
	public static readonly DECLARE = 42;
	public static readonly FROM = 43;
	public static readonly TOP = 44;
	public static readonly WHERE = 45;
	public static readonly HAVING = 46;
	public static readonly DISTINCT = 47;
	public static readonly NATURAL = 48;
	public static readonly CROSS = 49;
	public static readonly JOIN = 50;
	public static readonly INNER = 51;
	public static readonly LEFT = 52;
	public static readonly RIGHT = 53;
	public static readonly FULL = 54;
	public static readonly OUTER = 55;
	public static readonly ONLY = 56;
	public static readonly CASE = 57;
	public static readonly TRUE = 58;
	public static readonly FALSE = 59;
	public static readonly IMPORT = 60;
	public static readonly AS = 61;
	public static readonly CREATE = 62;
	public static readonly LAYOUT = 63;
	public static readonly FILE = 64;
	public static readonly MAP = 65;
	public static readonly METHOD = 66;
	public static readonly DEPENDENT = 67;
	public static readonly TITLE = 68;
	public static readonly EXPIRE = 69;
	public static readonly LIMIT = 70;
	public static readonly OFFSET = 71;
	public static readonly MODULE = 72;
	public static readonly FUNCTION = 73;
	public static readonly RETURN = 74;
	public static readonly UESCAPE = 75;
	public static readonly TYPE = 76;
	public static readonly SEMICOLON = 77;
	public static readonly EQ = 78;
	public static readonly NEQ = 79;
	public static readonly LT = 80;
	public static readonly LTE = 81;
	public static readonly GT = 82;
	public static readonly GTE = 83;
	public static readonly PLUS = 84;
	public static readonly SUBSTRACT = 85;
	public static readonly MULTIPLY = 86;
	public static readonly DIVIDE = 87;
	public static readonly MODULO = 88;
	public static readonly XOR = 89;
	public static readonly AND = 90;
	public static readonly OR = 91;
	public static readonly NOT = 92;
	public static readonly IN = 93;
	public static readonly BETWEEN = 94;
	public static readonly EXISTS = 95;
	public static readonly STRING = 96;
	public static readonly UNICODE_STRING = 97;
	public static readonly BINARY_LITERAL = 98;
	public static readonly INTEGER_VALUE = 99;
	public static readonly DECIMAL_VALUE = 100;
	public static readonly DOUBLE_VALUE = 101;
	public static readonly IDENTIFIER = 102;
	public static readonly COMMA_ = 103;
	public static readonly BSTART_ = 104;
	public static readonly BEND_ = 105;
	public static readonly CURLY_BSTART_ = 106;
	public static readonly CURLY_BEND_ = 107;
	public static readonly ECL_SNIPPETS = 108;
	public static readonly SIMPLE_COMMENT = 109;
	public static readonly SIMPLE_C_COMMENT = 110;
	public static readonly BRACKETED_COMMENT = 111;
	public static readonly WS = 112;
	public static readonly RULE_program = 0;
	public static readonly RULE_completestmt = 1;
	public static readonly RULE_stmt = 2;
	public static readonly RULE_definitionStmt = 3;
	public static readonly RULE_expr = 4;
	public static readonly RULE_createStmt = 5;
	public static readonly RULE_functionStmt = 6;
	public static readonly RULE_returnStmt = 7;
	public static readonly RULE_functionArgs = 8;
	public static readonly RULE_functionArg = 9;
	public static readonly RULE_moduleStmt = 10;
	public static readonly RULE_layoutStmt = 11;
	public static readonly RULE_layoutContent = 12;
	public static readonly RULE_actionStmt = 13;
	public static readonly RULE_selectStmt = 14;
	public static readonly RULE_distributeByClause = 15;
	public static readonly RULE_distinctClause = 16;
	public static readonly RULE_selectGroupByClause = 17;
	public static readonly RULE_idSet = 18;
	public static readonly RULE_selectColumns = 19;
	public static readonly RULE_selectCol = 20;
	public static readonly RULE_col = 21;
	public static readonly RULE_aliasingCol = 22;
	public static readonly RULE_selectFromClause = 23;
	public static readonly RULE_selectFromRef = 24;
	public static readonly RULE_selectAlias = 25;
	public static readonly RULE_joinOperator = 26;
	public static readonly RULE_selectWhereClause = 27;
	public static readonly RULE_joinConstraint = 28;
	public static readonly RULE_joinSpecification = 29;
	public static readonly RULE_groupByClause = 30;
	public static readonly RULE_orderByClause = 31;
	public static readonly RULE_sortItem = 32;
	public static readonly RULE_ascSortItem = 33;
	public static readonly RULE_descSortItem = 34;
	public static readonly RULE_limitOffsetClause = 35;
	public static readonly RULE_offsetClause = 36;
	public static readonly RULE_comparisonOperator = 37;
	public static readonly RULE_logicalOperator = 38;
	public static readonly RULE_literal = 39;
	public static readonly RULE_dataType = 40;
	public static readonly RULE_alterOperator = 41;
	public static readonly RULE_overDefinition = 42;
	public static readonly RULE_overDefinitionRoot = 43;
	public static readonly RULE_overDefinitionTail = 44;
	public static readonly RULE_definition = 45;
	public static readonly RULE_expression = 46;
	public static readonly RULE_booleanExpression = 47;
	public static readonly RULE_predicate = 48;
	public static readonly RULE_valueExpressionList = 49;
	public static readonly RULE_valueExpression = 50;
	public static readonly RULE_primaryExpression = 51;
	public static readonly RULE_number = 52;
	public static readonly RULE_string = 53;
	public static readonly RULE_booleanValue = 54;
	public static readonly RULE_importStmt = 55;
	public static readonly RULE_outputStmt = 56;
	public static readonly RULE_fileOutputStmt = 57;
	public static readonly RULE_fileType = 58;
	public static readonly RULE_attribute = 59;
	public static readonly RULE_namedOutput = 60;
	public static readonly RULE_plotStmt = 61;
	public static readonly RULE_scope = 62;
	public static readonly RULE_declarations = 63;
	public static readonly RULE_declaration = 64;
	public static readonly RULE_colDefs = 65;
	public static readonly RULE_colDef = 66;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "completestmt", "stmt", "definitionStmt", "expr", "createStmt", 
		"functionStmt", "returnStmt", "functionArgs", "functionArg", "moduleStmt", 
		"layoutStmt", "layoutContent", "actionStmt", "selectStmt", "distributeByClause", 
		"distinctClause", "selectGroupByClause", "idSet", "selectColumns", "selectCol", 
		"col", "aliasingCol", "selectFromClause", "selectFromRef", "selectAlias", 
		"joinOperator", "selectWhereClause", "joinConstraint", "joinSpecification", 
		"groupByClause", "orderByClause", "sortItem", "ascSortItem", "descSortItem", 
		"limitOffsetClause", "offsetClause", "comparisonOperator", "logicalOperator", 
		"literal", "dataType", "alterOperator", "overDefinition", "overDefinitionRoot", 
		"overDefinitionTail", "definition", "expression", "booleanExpression", 
		"predicate", "valueExpressionList", "valueExpression", "primaryExpression", 
		"number", "string", "booleanValue", "importStmt", "outputStmt", "fileOutputStmt", 
		"fileType", "attribute", "namedOutput", "plotStmt", "scope", "declarations", 
		"declaration", "colDefs", "colDef",
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
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'='", undefined, "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", 
		"'*'", "'/'", "'%'", "'^'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "','", "'('", "')'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "REAL_TYPE", "INTEGER_TYPE", "DECIMAL_TYPE", "VARSTRING_TYPE", 
		"STRING_TYPE", "BOOLEAN", "CSV", "THOR", "XML", "JSON", "WRITE", "UNSTABLE", 
		"STABLE", "TABLE", "ALTER", "TO", "ADD", "DROP", "MODIFY", "EXPORT", "SHARED", 
		"ASC", "DESC", "ORDER", "DISTRIBUTE", "GROUP", "BY", "TRAIN", "PREDICT", 
		"PLOT", "OUTPUT", "OPTION", "OPTIONS", "OVERWRITE", "UPDATE", "ON", "INDEPENDENT", 
		"IDCOLUMN", "PROJECT", "SELECT", "DECLARE", "FROM", "TOP", "WHERE", "HAVING", 
		"DISTINCT", "NATURAL", "CROSS", "JOIN", "INNER", "LEFT", "RIGHT", "FULL", 
		"OUTER", "ONLY", "CASE", "TRUE", "FALSE", "IMPORT", "AS", "CREATE", "LAYOUT", 
		"FILE", "MAP", "METHOD", "DEPENDENT", "TITLE", "EXPIRE", "LIMIT", "OFFSET", 
		"MODULE", "FUNCTION", "RETURN", "UESCAPE", "TYPE", "SEMICOLON", "EQ", 
		"NEQ", "LT", "LTE", "GT", "GTE", "PLUS", "SUBSTRACT", "MULTIPLY", "DIVIDE", 
		"MODULO", "XOR", "AND", "OR", "NOT", "IN", "BETWEEN", "EXISTS", "STRING", 
		"UNICODE_STRING", "BINARY_LITERAL", "INTEGER_VALUE", "DECIMAL_VALUE", 
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
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HSQLParser.WRITE) | (1 << HSQLParser.EXPORT) | (1 << HSQLParser.SHARED) | (1 << HSQLParser.PLOT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (HSQLParser.OUTPUT - 32)) | (1 << (HSQLParser.SELECT - 32)) | (1 << (HSQLParser.TRUE - 32)) | (1 << (HSQLParser.FALSE - 32)) | (1 << (HSQLParser.IMPORT - 32)) | (1 << (HSQLParser.CREATE - 32)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (HSQLParser.STRING - 96)) | (1 << (HSQLParser.UNICODE_STRING - 96)) | (1 << (HSQLParser.INTEGER_VALUE - 96)) | (1 << (HSQLParser.DECIMAL_VALUE - 96)) | (1 << (HSQLParser.DOUBLE_VALUE - 96)) | (1 << (HSQLParser.IDENTIFIER - 96)))) !== 0)) {
				{
				{
				this.state = 134;
				this.completestmt();
				}
				}
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 140;
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
			this.state = 142;
			this.stmt();
			this.state = 143;
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
			this.state = 152;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.EXPORT:
			case HSQLParser.SHARED:
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 145;
				_localctx._definitionStmt = this.definitionStmt();
				_localctx._definitionStmt.willWrapModule && ((this.getInvokingContext(0) as ProgramContext).willWrapModule = true) 
						
				}
				break;
			case HSQLParser.WRITE:
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
				(this.getInvokingContext(0) as ProgramContext).actionCount++;
				this.state = 149;
				this.actionStmt();
				}
				break;
			case HSQLParser.IMPORT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 150;
				this.importStmt();
				}
				break;
			case HSQLParser.CREATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 151;
				this.functionStmt();
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
			this.state = 154;
			this.scope();
			this.state = 155;
			_localctx._label = this.match(HSQLParser.IDENTIFIER);
			this.state = 156;
			this.match(HSQLParser.EQ);
			this.state = 157;
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
			this.state = 162;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 159;
				this.definition();
				}
				break;
			case HSQLParser.WRITE:
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
				this.state = 160;
				this.actionStmt();
				}
				break;
			case HSQLParser.CREATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 161;
				this.createStmt();
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
	public createStmt(): CreateStmtContext {
		let _localctx: CreateStmtContext = new CreateStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, HSQLParser.RULE_createStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(HSQLParser.CREATE);
			this.state = 167;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.LAYOUT:
				{
				this.state = 165;
				this.layoutStmt();
				}
				break;
			case HSQLParser.MODULE:
				{
				this.state = 166;
				this.moduleStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public functionStmt(): FunctionStmtContext {
		let _localctx: FunctionStmtContext = new FunctionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, HSQLParser.RULE_functionStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(HSQLParser.CREATE);
			this.state = 170;
			this.match(HSQLParser.FUNCTION);
			this.state = 171;
			_localctx._fname = this.match(HSQLParser.IDENTIFIER);
			this.state = 172;
			this.match(HSQLParser.BSTART_);
			this.state = 173;
			this.functionArgs();
			this.state = 174;
			this.match(HSQLParser.BEND_);
			this.state = 175;
			this.match(HSQLParser.CURLY_BSTART_);
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.EXPORT || _la === HSQLParser.SHARED || _la === HSQLParser.IDENTIFIER) {
				{
				{
				this.state = 176;
				this.definitionStmt();
				this.state = 177;
				this.match(HSQLParser.SEMICOLON);
				}
				}
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 184;
			this.returnStmt();
			this.state = 185;
			this.match(HSQLParser.SEMICOLON);
			this.state = 186;
			this.match(HSQLParser.CURLY_BEND_);
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
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, HSQLParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.match(HSQLParser.RETURN);
			this.state = 189;
			this.definition();
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
	public functionArgs(): FunctionArgsContext {
		let _localctx: FunctionArgsContext = new FunctionArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, HSQLParser.RULE_functionArgs);
		let _la: number;
		try {
			this.state = 200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.REAL_TYPE:
			case HSQLParser.INTEGER_TYPE:
			case HSQLParser.DECIMAL_TYPE:
			case HSQLParser.VARSTRING_TYPE:
			case HSQLParser.STRING_TYPE:
			case HSQLParser.BOOLEAN:
			case HSQLParser.LAYOUT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 191;
				this.functionArg();
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HSQLParser.COMMA_) {
					{
					{
					this.state = 192;
					this.match(HSQLParser.COMMA_);
					this.state = 193;
					this.functionArg();
					}
					}
					this.state = 198;
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
	public functionArg(): FunctionArgContext {
		let _localctx: FunctionArgContext = new FunctionArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, HSQLParser.RULE_functionArg);
		try {
			this.state = 207;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.REAL_TYPE:
			case HSQLParser.INTEGER_TYPE:
			case HSQLParser.DECIMAL_TYPE:
			case HSQLParser.VARSTRING_TYPE:
			case HSQLParser.STRING_TYPE:
			case HSQLParser.BOOLEAN:
				_localctx = new FunctionDefaultArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 202;
				this.colDef();
				}
				break;
			case HSQLParser.LAYOUT:
				_localctx = new FunctionLayoutArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 203;
				this.match(HSQLParser.LAYOUT);
				this.state = 204;
				this.definition();
				this.state = 205;
				this.match(HSQLParser.IDENTIFIER);
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
	public moduleStmt(): ModuleStmtContext {
		let _localctx: ModuleStmtContext = new ModuleStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, HSQLParser.RULE_moduleStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(HSQLParser.MODULE);
			this.state = 210;
			this.match(HSQLParser.BSTART_);
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.EXPORT || _la === HSQLParser.SHARED || _la === HSQLParser.IDENTIFIER) {
				{
				{
				this.state = 211;
				this.definitionStmt();
				this.state = 212;
				this.match(HSQLParser.SEMICOLON);
				}
				}
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 219;
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
	public layoutStmt(): LayoutStmtContext {
		let _localctx: LayoutStmtContext = new LayoutStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, HSQLParser.RULE_layoutStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(HSQLParser.LAYOUT);
			this.state = 222;
			this.match(HSQLParser.BSTART_);
			this.state = 223;
			this.layoutContent();
			this.state = 224;
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
	public layoutContent(): LayoutContentContext {
		let _localctx: LayoutContentContext = new LayoutContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, HSQLParser.RULE_layoutContent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.colDefs();
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
		this.enterRule(_localctx, 26, HSQLParser.RULE_actionStmt);
		try {
			this.state = 233;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.SELECT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 228;
				this.selectStmt();
				}
				break;
			case HSQLParser.OUTPUT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 229;
				this.outputStmt();
				}
				break;
			case HSQLParser.PLOT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 230;
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
				this.state = 231;
				this.literal();
				}
				break;
			case HSQLParser.WRITE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 232;
				this.fileOutputStmt();
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
		this.enterRule(_localctx, 28, HSQLParser.RULE_selectStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this.match(HSQLParser.SELECT);
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.DISTINCT) {
				{
				this.state = 236;
				this.distinctClause();
				}
			}

			this.state = 239;
			this.selectColumns();
			this.state = 240;
			this.selectFromClause();
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.WHERE) {
				{
				this.state = 241;
				this.match(HSQLParser.WHERE);
				this.state = 242;
				this.selectWhereClause();
				}
			}

			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.GROUP) {
				{
				this.state = 245;
				this.selectGroupByClause();
				}
			}

			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.ORDER) {
				{
				this.state = 248;
				this.match(HSQLParser.ORDER);
				this.state = 249;
				this.match(HSQLParser.BY);
				this.state = 250;
				this.orderByClause();
				}
			}

			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.DISTRIBUTE) {
				{
				this.state = 253;
				this.match(HSQLParser.DISTRIBUTE);
				this.state = 254;
				this.match(HSQLParser.BY);
				this.state = 255;
				this.distributeByClause();
				}
			}

			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.LIMIT) {
				{
				this.state = 258;
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
	public distributeByClause(): DistributeByClauseContext {
		let _localctx: DistributeByClauseContext = new DistributeByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, HSQLParser.RULE_distributeByClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
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
	public distinctClause(): DistinctClauseContext {
		let _localctx: DistinctClauseContext = new DistinctClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, HSQLParser.RULE_distinctClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
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
		this.enterRule(_localctx, 34, HSQLParser.RULE_selectGroupByClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(HSQLParser.GROUP);
			this.state = 266;
			this.match(HSQLParser.BY);
			this.state = 267;
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
		this.enterRule(_localctx, 36, HSQLParser.RULE_idSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 270;
				this.match(HSQLParser.COMMA_);
				this.state = 271;
				this.match(HSQLParser.IDENTIFIER);
				}
				}
				this.state = 276;
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
		this.enterRule(_localctx, 38, HSQLParser.RULE_selectColumns);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.selectCol();
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 278;
				this.match(HSQLParser.COMMA_);
				this.state = 279;
				this.selectCol();
				}
				}
				this.state = 284;
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
		this.enterRule(_localctx, 40, HSQLParser.RULE_selectCol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
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
		this.enterRule(_localctx, 42, HSQLParser.RULE_col);
		let _la: number;
		try {
			this.state = 306;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				_localctx = new SelectAggregatedEverythingColContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 287;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 288;
				this.match(HSQLParser.BSTART_);
				this.state = 289;
				this.match(HSQLParser.MULTIPLY);
				this.state = 290;
				this.match(HSQLParser.BEND_);
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 291;
					this.aliasingCol();
					}
				}

				}
				break;

			case 2:
				_localctx = new SelectAggregatedOneColContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 294;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 295;
				this.match(HSQLParser.BSTART_);
				this.state = 296;
				(_localctx as SelectAggregatedOneColContext)._column = this.match(HSQLParser.IDENTIFIER);
				this.state = 297;
				this.match(HSQLParser.BEND_);
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 298;
					this.aliasingCol();
					}
				}

				}
				break;

			case 3:
				_localctx = new SelectOneColContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 301;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 302;
					this.aliasingCol();
					}
				}

				}
				break;

			case 4:
				_localctx = new WildAllContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 305;
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
		this.enterRule(_localctx, 44, HSQLParser.RULE_aliasingCol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.match(HSQLParser.AS);
			this.state = 309;
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
		this.enterRule(_localctx, 46, HSQLParser.RULE_selectFromClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.match(HSQLParser.FROM);
			{
			this.state = 312;
			this.selectFromRef(0);
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 313;
				this.match(HSQLParser.COMMA_);
				this.state = 314;
				this.selectFromRef(0);
				}
				}
				this.state = 319;
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
		let _startState: number = 48;
		this.enterRecursionRule(_localctx, 48, HSQLParser.RULE_selectFromRef, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				_localctx = new SelectFromDerivedTableContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 321;
				this.match(HSQLParser.BSTART_);
				this.state = 322;
				this.selectStmt();
				this.state = 323;
				this.match(HSQLParser.BEND_);
				this.state = 324;
				this.selectAlias();
				}
				break;

			case 2:
				{
				_localctx = new SelectFromDefinitionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 326;
				this.definition();
				this.state = 328;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 327;
					this.selectAlias();
					}
					break;
				}
				}
				break;

			case 3:
				{
				_localctx = new SelectFromDatasetContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 330;
				this.match(HSQLParser.STRING);
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.TYPE) {
					{
					this.state = 331;
					this.match(HSQLParser.TYPE);
					}
				}

				this.state = 334;
				this.fileType();
				this.state = 335;
				this.match(HSQLParser.LAYOUT);
				this.state = 336;
				this.definition();
				this.state = 338;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 337;
					this.selectAlias();
					}
					break;
				}
				}
				break;

			case 4:
				{
				_localctx = new SelectBracketedFromTableContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 340;
				this.match(HSQLParser.BSTART_);
				this.state = 341;
				this.selectFromRef(0);
				this.state = 346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HSQLParser.COMMA_) {
					{
					{
					this.state = 342;
					this.match(HSQLParser.COMMA_);
					this.state = 343;
					this.selectFromRef(0);
					}
					}
					this.state = 348;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 349;
				this.match(HSQLParser.BEND_);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 362;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
					this.state = 353;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 354;
					this.joinOperator();
					this.state = 355;
					this.selectFromRef(0);
					this.state = 356;
					this.joinConstraint();
					this.state = 358;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
					case 1:
						{
						this.state = 357;
						this.selectAlias();
						}
						break;
					}
					}
					}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
		this.enterRule(_localctx, 50, HSQLParser.RULE_selectAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.AS) {
				{
				this.state = 365;
				this.match(HSQLParser.AS);
				}
			}

			this.state = 368;
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
		this.enterRule(_localctx, 52, HSQLParser.RULE_joinOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.LEFT:
				{
				this.state = 370;
				this.match(HSQLParser.LEFT);
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.OUTER) {
					{
					this.state = 371;
					this.match(HSQLParser.OUTER);
					}
				}

				_localctx.joinType = SelectJoinType.LEFT;
				}
				break;
			case HSQLParser.RIGHT:
				{
				this.state = 375;
				this.match(HSQLParser.RIGHT);
				this.state = 377;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.OUTER) {
					{
					this.state = 376;
					this.match(HSQLParser.OUTER);
					}
				}

				_localctx.joinType = SelectJoinType.RIGHT;
				}
				break;
			case HSQLParser.FULL:
				{
				this.state = 380;
				this.match(HSQLParser.FULL);
				this.state = 382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.OUTER) {
					{
					this.state = 381;
					this.match(HSQLParser.OUTER);
					}
				}

				_localctx.joinType = SelectJoinType.OUTER;
				}
				break;
			case HSQLParser.INNER:
				{
				this.state = 385;
				this.match(HSQLParser.INNER);
				}
				break;
			case HSQLParser.JOIN:
				break;
			default:
				break;
			}
			this.state = 388;
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
		this.enterRule(_localctx, 54, HSQLParser.RULE_selectWhereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
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
		this.enterRule(_localctx, 56, HSQLParser.RULE_joinConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(HSQLParser.ON);
			this.state = 393;
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
		this.enterRule(_localctx, 58, HSQLParser.RULE_joinSpecification);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			_localctx._leftrecset = this.definition();
			this.state = 396;
			this.comparisonOperator();
			this.state = 397;
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
		this.enterRule(_localctx, 60, HSQLParser.RULE_groupByClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
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
		this.enterRule(_localctx, 62, HSQLParser.RULE_orderByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.sortItem();
			this.state = 406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 402;
				this.match(HSQLParser.COMMA_);
				this.state = 403;
				this.sortItem();
				}
				}
				this.state = 408;
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
		this.enterRule(_localctx, 64, HSQLParser.RULE_sortItem);
		try {
			this.state = 411;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 409;
				this.ascSortItem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 410;
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
		this.enterRule(_localctx, 66, HSQLParser.RULE_ascSortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.ASC) {
				{
				this.state = 414;
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
		this.enterRule(_localctx, 68, HSQLParser.RULE_descSortItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 418;
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
		this.enterRule(_localctx, 70, HSQLParser.RULE_limitOffsetClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this.match(HSQLParser.LIMIT);
			this.state = 421;
			this.match(HSQLParser.INTEGER_VALUE);
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OFFSET) {
				{
				this.state = 422;
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
		this.enterRule(_localctx, 72, HSQLParser.RULE_offsetClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this.match(HSQLParser.OFFSET);
			this.state = 426;
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
		this.enterRule(_localctx, 74, HSQLParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			_la = this._input.LA(1);
			if (!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (HSQLParser.EQ - 78)) | (1 << (HSQLParser.NEQ - 78)) | (1 << (HSQLParser.LT - 78)) | (1 << (HSQLParser.LTE - 78)) | (1 << (HSQLParser.GT - 78)) | (1 << (HSQLParser.GTE - 78)))) !== 0))) {
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
		this.enterRule(_localctx, 76, HSQLParser.RULE_logicalOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			_la = this._input.LA(1);
			if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (HSQLParser.AND - 90)) | (1 << (HSQLParser.OR - 90)) | (1 << (HSQLParser.NOT - 90)) | (1 << (HSQLParser.IN - 90)) | (1 << (HSQLParser.BETWEEN - 90)) | (1 << (HSQLParser.EXISTS - 90)))) !== 0))) {
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
		this.enterRule(_localctx, 78, HSQLParser.RULE_literal);
		try {
			this.state = 441;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 432;
				_localctx._number = this.number();
				_localctx.dt = _localctx._number.dt
				}
				break;
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 435;
				this.string();
				_localctx.dt = SingularDataType.STRING
				}
				break;
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 438;
				this.booleanValue();
				_localctx.dt = SingularDataType.BOOLEAN
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
		this.enterRule(_localctx, 80, HSQLParser.RULE_dataType);
		try {
			this.state = 454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.REAL_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 443;
				this.match(HSQLParser.REAL_TYPE);
				_localctx.dt=SingularDataType.REAL
				}
				break;
			case HSQLParser.INTEGER_TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 445;
				this.match(HSQLParser.INTEGER_TYPE);
				}
				break;
			case HSQLParser.DECIMAL_TYPE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 446;
				this.match(HSQLParser.DECIMAL_TYPE);
				_localctx.dt=SingularDataType.REAL
				}
				break;
			case HSQLParser.VARSTRING_TYPE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 448;
				this.match(HSQLParser.VARSTRING_TYPE);
				_localctx.dt=SingularDataType.STRING
				}
				break;
			case HSQLParser.STRING_TYPE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 450;
				this.match(HSQLParser.STRING_TYPE);
				_localctx.dt=SingularDataType.STRING
				}
				break;
			case HSQLParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 452;
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
		this.enterRule(_localctx, 82, HSQLParser.RULE_alterOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
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
		this.enterRule(_localctx, 84, HSQLParser.RULE_overDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this.overDefinitionRoot();
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.T__0) {
				{
				{
				this.state = 459;
				this.match(HSQLParser.T__0);
				this.state = 460;
				this.overDefinitionTail();
				}
				}
				this.state = 465;
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
		this.enterRule(_localctx, 86, HSQLParser.RULE_overDefinitionRoot);
		try {
			this.state = 469;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				_localctx = new NormalIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 466;
				this.match(HSQLParser.IDENTIFIER);
				}
				break;
			case HSQLParser.MODULO:
				_localctx = new RootIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 467;
				this.match(HSQLParser.MODULO);
				}
				break;
			case HSQLParser.XOR:
				_localctx = new ParentIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 468;
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
		this.enterRule(_localctx, 88, HSQLParser.RULE_overDefinitionTail);
		try {
			this.state = 473;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				_localctx = new NormalTailIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 471;
				this.match(HSQLParser.IDENTIFIER);
				}
				break;
			case HSQLParser.XOR:
				_localctx = new ParentTailIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 472;
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
		this.enterRule(_localctx, 90, HSQLParser.RULE_definition);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 480;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 476;
					this.match(HSQLParser.T__0);
					this.state = 477;
					this.match(HSQLParser.IDENTIFIER);
					}
					}
				}
				this.state = 482;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
		this.enterRule(_localctx, 92, HSQLParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
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
		let _startState: number = 94;
		this.enterRecursionRule(_localctx, 94, HSQLParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
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

				this.state = 486;
				(_localctx as PredicatedContext)._valueExpression = this.valueExpression();
				this.state = 488;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 487;
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
				this.state = 490;
				this.match(HSQLParser.NOT);
				this.state = 491;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 502;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 500;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, HSQLParser.RULE_booleanExpression);
						this.state = 494;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 495;
						(_localctx as LogicalBinaryContext)._operator = this.match(HSQLParser.AND);
						this.state = 496;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, HSQLParser.RULE_booleanExpression);
						this.state = 497;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 498;
						(_localctx as LogicalBinaryContext)._operator = this.match(HSQLParser.OR);
						this.state = 499;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 504;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
		this.enterRule(_localctx, 96, HSQLParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 524;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				_localctx = new ComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 505;
				this.comparisonOperator();
				this.state = 506;
				(_localctx as ComparisonContext)._right = this.valueExpression();
				}
				break;

			case 2:
				_localctx = new BetweenContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.NOT) {
					{
					this.state = 508;
					this.match(HSQLParser.NOT);
					}
				}

				this.state = 511;
				this.match(HSQLParser.BETWEEN);
				this.state = 512;
				(_localctx as BetweenContext)._lower = this.valueExpression();
				this.state = 513;
				this.match(HSQLParser.AND);
				this.state = 514;
				(_localctx as BetweenContext)._upper = this.valueExpression();
				}
				break;

			case 3:
				_localctx = new InListContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.NOT) {
					{
					this.state = 516;
					this.match(HSQLParser.NOT);
					}
				}

				this.state = 519;
				this.match(HSQLParser.IN);
				this.state = 520;
				this.match(HSQLParser.BSTART_);
				this.state = 521;
				this.valueExpressionList();
				this.state = 522;
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
		this.enterRule(_localctx, 98, HSQLParser.RULE_valueExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this.valueExpression();
			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 527;
				this.match(HSQLParser.COMMA_);
				this.state = 528;
				this.valueExpression();
				}
				}
				this.state = 533;
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
		this.enterRule(_localctx, 100, HSQLParser.RULE_valueExpression);
		try {
			_localctx = new ValueExpressionDefaultContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
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
		this.enterRule(_localctx, 102, HSQLParser.RULE_primaryExpression);
		try {
			this.state = 544;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				_localctx = new IdentifierLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 536;
				this.match(HSQLParser.IDENTIFIER);
				}
				break;
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				_localctx = new NumericLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 537;
				this.number();
				}
				break;
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 538;
				this.booleanValue();
				}
				break;
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 539;
				this.string();
				}
				break;
			case HSQLParser.BSTART_:
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 540;
				this.match(HSQLParser.BSTART_);
				this.state = 541;
				this.expression();
				this.state = 542;
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
		this.enterRule(_localctx, 104, HSQLParser.RULE_number);
		try {
			this.state = 551;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.DECIMAL_VALUE:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 546;
				this.match(HSQLParser.DECIMAL_VALUE);
				_localctx.dt = SingularDataType.DECIMAL
				}
				break;
			case HSQLParser.DOUBLE_VALUE:
				_localctx = new DoubleLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 548;
				this.match(HSQLParser.DOUBLE_VALUE);
				_localctx.dt=SingularDataType.REAL
				}
				break;
			case HSQLParser.INTEGER_VALUE:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 550;
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
		this.enterRule(_localctx, 106, HSQLParser.RULE_string);
		try {
			this.state = 559;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.STRING:
				_localctx = new BasicStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 553;
				this.match(HSQLParser.STRING);
				}
				break;
			case HSQLParser.UNICODE_STRING:
				_localctx = new UnicodeStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 554;
				this.match(HSQLParser.UNICODE_STRING);
				this.state = 557;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
				case 1:
					{
					this.state = 555;
					this.match(HSQLParser.UESCAPE);
					this.state = 556;
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
		this.enterRule(_localctx, 108, HSQLParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
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
		this.enterRule(_localctx, 110, HSQLParser.RULE_importStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this.match(HSQLParser.IMPORT);
			this.state = 564;
			this.overDefinition();
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.AS) {
				{
				this.state = 565;
				this.match(HSQLParser.AS);
				this.state = 566;
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
		this.enterRule(_localctx, 112, HSQLParser.RULE_outputStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this.match(HSQLParser.OUTPUT);
			this.state = 570;
			this.attribute();
			this.state = 572;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TITLE || _la === HSQLParser.IDENTIFIER) {
				{
				this.state = 571;
				this.namedOutput();
				}
			}

			this.state = 575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OVERWRITE) {
				{
				this.state = 574;
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
	public fileOutputStmt(): FileOutputStmtContext {
		let _localctx: FileOutputStmtContext = new FileOutputStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, HSQLParser.RULE_fileOutputStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this.match(HSQLParser.WRITE);
			this.state = 578;
			this.definition();
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TO) {
				{
				this.state = 579;
				this.match(HSQLParser.TO);
				this.state = 581;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.FILE) {
					{
					this.state = 580;
					this.match(HSQLParser.FILE);
					}
				}

				}
			}

			this.state = 586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TYPE) {
				{
				this.state = 585;
				this.match(HSQLParser.TYPE);
				}
			}

			this.state = 588;
			this.fileType();
			this.state = 589;
			this.match(HSQLParser.STRING);
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OVERWRITE) {
				{
				this.state = 590;
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
	public fileType(): FileTypeContext {
		let _localctx: FileTypeContext = new FileTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, HSQLParser.RULE_fileType);
		let _la: number;
		try {
			this.state = 602;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.CSV:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 593;
				this.match(HSQLParser.CSV);
				_localctx.fileOutputType=FileOutputType.CSV
				}
				break;
			case HSQLParser.JSON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 595;
				this.match(HSQLParser.JSON);
				_localctx.fileOutputType=FileOutputType.JSON
				}
				break;
			case HSQLParser.THOR:
			case HSQLParser.LAYOUT:
			case HSQLParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 598;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.THOR) {
					{
					this.state = 597;
					this.match(HSQLParser.THOR);
					}
				}

				}
				break;
			case HSQLParser.XML:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 600;
				this.match(HSQLParser.XML);
				_localctx.fileOutputType=FileOutputType.XML
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
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, HSQLParser.RULE_attribute);
		try {
			this.state = 607;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 604;
				this.definition();
				}
				break;
			case HSQLParser.SELECT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 605;
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
				this.state = 606;
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
		this.enterRule(_localctx, 120, HSQLParser.RULE_namedOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TITLE) {
				{
				this.state = 609;
				this.match(HSQLParser.TITLE);
				}
			}

			this.state = 612;
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
	public plotStmt(): PlotStmtContext {
		let _localctx: PlotStmtContext = new PlotStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, HSQLParser.RULE_plotStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			(this.getInvokingContext(0) as ProgramContext).needPlots=true
			this.state = 615;
			this.match(HSQLParser.PLOT);
			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.FROM) {
				{
				this.state = 616;
				this.match(HSQLParser.FROM);
				}
			}

			this.state = 619;
			_localctx._fromdef = this.definition();
			this.state = 621;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TITLE) {
				{
				this.state = 620;
				this.match(HSQLParser.TITLE);
				}
			}

			this.state = 623;
			_localctx._title = this.match(HSQLParser.IDENTIFIER);
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TYPE) {
				{
				this.state = 624;
				this.match(HSQLParser.TYPE);
				}
			}

			this.state = 627;
			_localctx._typePlot = this.match(HSQLParser.IDENTIFIER);
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
		this.enterRule(_localctx, 124, HSQLParser.RULE_scope);
		try {
			this.state = 634;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.EXPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 629;
				this.match(HSQLParser.EXPORT);
				_localctx.variableVisibility = VariableVisibility.EXPORT,(this.getInvokingContext(3) as DefinitionStmtContext).willWrapModule=true
				}
				break;
			case HSQLParser.SHARED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 631;
				this.match(HSQLParser.SHARED);
				_localctx.variableVisibility = VariableVisibility.SHARED,(this.getInvokingContext(3) as DefinitionStmtContext).willWrapModule=true
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
		this.enterRule(_localctx, 126, HSQLParser.RULE_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.DECLARE) {
				{
				{
				this.state = 636;
				this.declaration();
				this.state = 637;
				this.match(HSQLParser.SEMICOLON);
				}
				}
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 644;
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
		this.enterRule(_localctx, 128, HSQLParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 674;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				_localctx = new TableDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 646;
				this.match(HSQLParser.DECLARE);
				this.state = 647;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 649;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 648;
					this.match(HSQLParser.AS);
					}
				}

				this.state = 651;
				this.match(HSQLParser.TABLE);
				this.state = 652;
				this.match(HSQLParser.BSTART_);
				this.state = 653;
				this.colDefs();
				this.state = 654;
				this.match(HSQLParser.BEND_);
				}
				break;

			case 2:
				_localctx = new LayoutDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 656;
				this.match(HSQLParser.DECLARE);
				this.state = 657;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 658;
					this.match(HSQLParser.AS);
					}
				}

				this.state = 661;
				this.match(HSQLParser.LAYOUT);
				this.state = 662;
				this.match(HSQLParser.BSTART_);
				this.state = 663;
				this.colDefs();
				this.state = 664;
				this.match(HSQLParser.BEND_);
				}
				break;

			case 3:
				_localctx = new PlotDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 666;
				this.match(HSQLParser.DECLARE);
				this.state = 667;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 668;
					this.match(HSQLParser.AS);
					}
				}

				this.state = 671;
				this.match(HSQLParser.PLOT);
				this.state = 672;
				this.match(HSQLParser.ON);
				this.state = 673;
				this.match(HSQLParser.STRING);
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
	public colDefs(): ColDefsContext {
		let _localctx: ColDefsContext = new ColDefsContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, HSQLParser.RULE_colDefs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 676;
			this.colDef();
			this.state = 681;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 677;
				this.match(HSQLParser.COMMA_);
				this.state = 678;
				this.colDef();
				}
				}
				this.state = 683;
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
	public colDef(): ColDefContext {
		let _localctx: ColDefContext = new ColDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, HSQLParser.RULE_colDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.dataType();
			this.state = 685;
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
		case 24:
			return this.selectFromRef_sempred(_localctx as SelectFromRefContext, predIndex);

		case 47:
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03r\u02B2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x03\x02\x07" +
		"\x02\x8A\n\x02\f\x02\x0E\x02\x8D\v\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"\x9B\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\xA5\n\x06\x03\x07\x03\x07\x03\x07\x05\x07\xAA\n\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\xB6\n\b\f" +
		"\b\x0E\b\xB9\v\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n" +
		"\x03\n\x07\n\xC5\n\n\f\n\x0E\n\xC8\v\n\x03\n\x05\n\xCB\n\n\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x05\v\xD2\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\xD9" +
		"\n\f\f\f\x0E\f\xDC\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xEC\n\x0F\x03" +
		"\x10\x03\x10\x05\x10\xF0\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\xF6\n\x10\x03\x10\x05\x10\xF9\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\xFE" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0103\n\x10\x03\x10\x05\x10\u0106" +
		"\n\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x14\x07\x14\u0113\n\x14\f\x14\x0E\x14\u0116\v\x14" +
		"\x03\x15\x03\x15\x03\x15\x07\x15\u011B\n\x15\f\x15\x0E\x15\u011E\v\x15" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0127" +
		"\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u012E\n\x17\x03" +
		"\x17\x03\x17\x05\x17\u0132\n\x17\x03\x17\x05\x17\u0135\n\x17\x03\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u013E\n\x19\f\x19" +
		"\x0E\x19\u0141\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x05\x1A\u014B\n\x1A\x03\x1A\x03\x1A\x05\x1A\u014F\n\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0155\n\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x07\x1A\u015B\n\x1A\f\x1A\x0E\x1A\u015E\v\x1A\x03\x1A\x03\x1A" +
		"\x05\x1A\u0162\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0169" +
		"\n\x1A\x07\x1A\u016B\n\x1A\f\x1A\x0E\x1A\u016E\v\x1A\x03\x1B\x05\x1B\u0171" +
		"\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C\u0177\n\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x05\x1C\u017C\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0181" +
		"\n\x1C\x03\x1C\x03\x1C\x05\x1C\u0185\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03" +
		" \x03!\x03!\x03!\x07!\u0197\n!\f!\x0E!\u019A\v!\x03\"\x03\"\x05\"\u019E" +
		"\n\"\x03#\x03#\x05#\u01A2\n#\x03$\x03$\x03$\x03%\x03%\x03%\x05%\u01AA" +
		"\n%\x03&\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x05)\u01BC\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x05*\u01C9\n*\x03+\x03+\x03,\x03,\x03,\x07,\u01D0\n," +
		"\f,\x0E,\u01D3\v,\x03-\x03-\x03-\x05-\u01D8\n-\x03.\x03.\x05.\u01DC\n" +
		".\x03/\x03/\x03/\x07/\u01E1\n/\f/\x0E/\u01E4\v/\x030\x030\x031\x031\x03" +
		"1\x051\u01EB\n1\x031\x031\x051\u01EF\n1\x031\x031\x031\x031\x031\x031" +
		"\x071\u01F7\n1\f1\x0E1\u01FA\v1\x032\x032\x032\x032\x052\u0200\n2\x03" +
		"2\x032\x032\x032\x032\x032\x052\u0208\n2\x032\x032\x032\x032\x032\x05" +
		"2\u020F\n2\x033\x033\x033\x073\u0214\n3\f3\x0E3\u0217\v3\x034\x034\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x055\u0223\n5\x036\x036\x036\x03" +
		"6\x036\x056\u022A\n6\x037\x037\x037\x037\x057\u0230\n7\x057\u0232\n7\x03" +
		"8\x038\x039\x039\x039\x039\x059\u023A\n9\x03:\x03:\x03:\x05:\u023F\n:" +
		"\x03:\x05:\u0242\n:\x03;\x03;\x03;\x03;\x05;\u0248\n;\x05;\u024A\n;\x03" +
		";\x05;\u024D\n;\x03;\x03;\x03;\x05;\u0252\n;\x03<\x03<\x03<\x03<\x03<" +
		"\x05<\u0259\n<\x03<\x03<\x05<\u025D\n<\x03=\x03=\x03=\x05=\u0262\n=\x03" +
		">\x05>\u0265\n>\x03>\x03>\x03?\x03?\x03?\x05?\u026C\n?\x03?\x03?\x05?" +
		"\u0270\n?\x03?\x03?\x05?\u0274\n?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x05" +
		"@\u027D\n@\x03A\x03A\x03A\x07A\u0282\nA\fA\x0EA\u0285\vA\x03A\x03A\x03" +
		"B\x03B\x03B\x05B\u028C\nB\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05" +
		"B\u0296\nB\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u02A0\nB\x03B" +
		"\x03B\x03B\x05B\u02A5\nB\x03C\x03C\x03C\x07C\u02AA\nC\fC\x0EC\u02AD\v" +
		"C\x03D\x03D\x03D\x03D\x02\x02\x042`E\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x02\x06\x03\x02PU\x03\x02\\a\x03\x02\x14\x16\x03\x02<=\x02\u02D9\x02" +
		"\x8B\x03\x02\x02\x02\x04\x90\x03\x02\x02\x02\x06\x9A\x03\x02\x02\x02\b" +
		"\x9C\x03\x02\x02\x02\n\xA4\x03\x02\x02\x02\f\xA6\x03\x02\x02\x02\x0E\xAB" +
		"\x03\x02\x02\x02\x10\xBE\x03\x02\x02\x02\x12\xCA\x03\x02\x02\x02\x14\xD1" +
		"\x03\x02\x02\x02\x16\xD3\x03\x02\x02\x02\x18\xDF\x03\x02\x02\x02\x1A\xE4" +
		"\x03\x02\x02\x02\x1C\xEB\x03\x02\x02\x02\x1E\xED\x03\x02\x02\x02 \u0107" +
		"\x03\x02\x02\x02\"\u0109\x03\x02\x02\x02$\u010B\x03\x02\x02\x02&\u010F" +
		"\x03\x02\x02\x02(\u0117\x03\x02\x02\x02*\u011F\x03\x02\x02\x02,\u0134" +
		"\x03\x02\x02\x02.\u0136\x03\x02\x02\x020\u0139\x03\x02\x02\x022\u0161" +
		"\x03\x02\x02\x024\u0170\x03\x02\x02\x026\u0184\x03\x02\x02\x028\u0188" +
		"\x03\x02\x02\x02:\u018A\x03\x02\x02\x02<\u018D\x03\x02\x02\x02>\u0191" +
		"\x03\x02\x02\x02@\u0193\x03\x02\x02\x02B\u019D\x03\x02\x02\x02D\u019F" +
		"\x03\x02\x02\x02F\u01A3\x03\x02\x02\x02H\u01A6\x03\x02\x02\x02J\u01AB" +
		"\x03\x02\x02\x02L\u01AE\x03\x02\x02\x02N\u01B0\x03\x02\x02\x02P\u01BB" +
		"\x03\x02\x02\x02R\u01C8\x03\x02\x02\x02T\u01CA\x03\x02\x02\x02V\u01CC" +
		"\x03\x02\x02\x02X\u01D7\x03\x02\x02\x02Z\u01DB\x03\x02\x02\x02\\\u01DD" +
		"\x03\x02\x02\x02^\u01E5\x03\x02\x02\x02`\u01EE\x03\x02\x02\x02b\u020E" +
		"\x03\x02\x02\x02d\u0210\x03\x02\x02\x02f\u0218\x03\x02\x02\x02h\u0222" +
		"\x03\x02\x02\x02j\u0229\x03\x02\x02\x02l\u0231\x03\x02\x02\x02n\u0233" +
		"\x03\x02\x02\x02p\u0235\x03\x02\x02\x02r\u023B\x03\x02\x02\x02t\u0243" +
		"\x03\x02\x02\x02v\u025C\x03\x02\x02\x02x\u0261\x03\x02\x02\x02z\u0264" +
		"\x03\x02\x02\x02|\u0268\x03\x02\x02\x02~\u027C\x03\x02\x02\x02\x80\u0283" +
		"\x03\x02\x02\x02\x82\u02A4\x03\x02\x02\x02\x84\u02A6\x03\x02\x02\x02\x86" +
		"\u02AE\x03\x02\x02\x02\x88\x8A\x05\x04\x03\x02\x89\x88\x03\x02\x02\x02" +
		"\x8A\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02" +
		"\x8C\x8E\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E\x8F\x07\x02\x02\x03" +
		"\x8F\x03\x03\x02\x02\x02\x90\x91\x05\x06\x04\x02\x91\x92\x07O\x02\x02" +
		"\x92\x05\x03\x02\x02\x02\x93\x94\x05\b\x05\x02\x94\x95\b\x04\x01\x02\x95" +
		"\x9B\x03\x02\x02\x02\x96\x97\b\x04\x01\x02\x97\x9B\x05\x1C\x0F\x02\x98" +
		"\x9B\x05p9\x02\x99\x9B\x05\x0E\b\x02\x9A\x93\x03\x02\x02\x02\x9A\x96\x03" +
		"\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x99\x03\x02\x02\x02\x9B\x07\x03" +
		"\x02\x02\x02\x9C\x9D\x05~@\x02\x9D\x9E\x07h\x02\x02\x9E\x9F\x07P\x02\x02" +
		"\x9F\xA0\x05\n\x06\x02\xA0\t\x03\x02\x02\x02\xA1\xA5\x05\\/\x02\xA2\xA5" +
		"\x05\x1C\x0F\x02\xA3\xA5\x05\f\x07\x02\xA4\xA1\x03\x02\x02\x02\xA4\xA2" +
		"\x03\x02\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\v\x03\x02\x02\x02\xA6\xA9" +
		"\x07@\x02\x02\xA7\xAA\x05\x18\r\x02\xA8\xAA\x05\x16\f\x02\xA9\xA7\x03" +
		"\x02\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\r\x03\x02\x02\x02\xAB\xAC\x07" +
		"@\x02\x02\xAC\xAD\x07K\x02\x02\xAD\xAE\x07h\x02\x02\xAE\xAF\x07j\x02\x02" +
		"\xAF\xB0\x05\x12\n\x02\xB0\xB1\x07k\x02\x02\xB1\xB7\x07l\x02\x02\xB2\xB3" +
		"\x05\b\x05\x02\xB3\xB4\x07O\x02\x02\xB4\xB6\x03\x02\x02\x02\xB5\xB2\x03" +
		"\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03" +
		"\x02\x02\x02\xB8\xBA\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBB\x05" +
		"\x10\t\x02\xBB\xBC\x07O\x02\x02\xBC\xBD\x07m\x02\x02\xBD\x0F\x03\x02\x02" +
		"\x02\xBE\xBF\x07L\x02\x02\xBF\xC0\x05\\/\x02\xC0\x11\x03\x02\x02\x02\xC1" +
		"\xC6\x05\x14\v\x02\xC2\xC3\x07i\x02\x02\xC3\xC5\x05\x14\v\x02\xC4\xC2" +
		"\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7" +
		"\x03\x02\x02\x02\xC7\xCB\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCB" +
		"\x03\x02\x02\x02\xCA\xC1\x03\x02\x02\x02\xCA\xC9\x03\x02\x02\x02\xCB\x13" +
		"\x03\x02\x02\x02\xCC\xD2\x05\x86D\x02\xCD\xCE\x07A\x02\x02\xCE\xCF\x05" +
		"\\/\x02\xCF\xD0\x07h\x02\x02\xD0\xD2\x03\x02\x02\x02\xD1\xCC\x03\x02\x02" +
		"\x02\xD1\xCD\x03\x02\x02\x02\xD2\x15\x03\x02\x02\x02\xD3\xD4\x07J\x02" +
		"\x02\xD4\xDA\x07j\x02\x02\xD5\xD6\x05\b\x05\x02\xD6\xD7\x07O\x02\x02\xD7" +
		"\xD9\x03\x02\x02\x02\xD8\xD5\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA" +
		"\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC" +
		"\xDA\x03\x02\x02\x02\xDD\xDE\x07k\x02\x02\xDE\x17\x03\x02\x02\x02\xDF" +
		"\xE0\x07A\x02\x02\xE0\xE1\x07j\x02\x02\xE1\xE2\x05\x1A\x0E\x02\xE2\xE3" +
		"\x07k\x02\x02\xE3\x19\x03\x02\x02\x02\xE4\xE5\x05\x84C\x02\xE5\x1B\x03" +
		"\x02\x02\x02\xE6\xEC\x05\x1E\x10\x02\xE7\xEC\x05r:\x02\xE8\xEC\x05|?\x02" +
		"\xE9\xEC\x05P)\x02\xEA\xEC\x05t;\x02\xEB\xE6\x03\x02\x02\x02\xEB\xE7\x03" +
		"\x02\x02\x02\xEB\xE8\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEA\x03" +
		"\x02\x02\x02\xEC\x1D\x03\x02\x02\x02\xED\xEF\x07+\x02\x02\xEE\xF0\x05" +
		"\"\x12\x02\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03" +
		"\x02\x02\x02\xF1\xF2\x05(\x15\x02\xF2\xF5\x050\x19\x02\xF3\xF4\x07/\x02" +
		"\x02\xF4\xF6\x058\x1D\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02" +
		"\x02\xF6\xF8\x03\x02\x02\x02\xF7\xF9\x05$\x13\x02\xF8\xF7\x03\x02\x02" +
		"\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFD\x03\x02\x02\x02\xFA\xFB\x07\x1B\x02" +
		"\x02\xFB\xFC\x07\x1E\x02\x02\xFC\xFE\x05@!\x02\xFD\xFA\x03\x02\x02\x02" +
		"\xFD\xFE\x03\x02\x02\x02\xFE\u0102\x03\x02\x02\x02\xFF\u0100\x07\x1C\x02" +
		"\x02\u0100\u0101\x07\x1E\x02\x02\u0101\u0103\x05 \x11\x02\u0102\xFF\x03" +
		"\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0105\x03\x02\x02\x02\u0104" +
		"\u0106\x05H%\x02\u0105\u0104\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02" +
		"\u0106\x1F\x03\x02\x02\x02\u0107\u0108\x05&\x14\x02\u0108!\x03\x02\x02" +
		"\x02\u0109\u010A\x071\x02\x02\u010A#\x03\x02\x02\x02\u010B\u010C\x07\x1D" +
		"\x02\x02\u010C\u010D\x07\x1E\x02\x02\u010D\u010E\x05> \x02\u010E%\x03" +
		"\x02\x02\x02\u010F\u0114\x07h\x02\x02\u0110\u0111\x07i\x02\x02\u0111\u0113" +
		"\x07h\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113\u0116\x03\x02\x02\x02" +
		"\u0114\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\'\x03\x02" +
		"\x02\x02\u0116\u0114\x03\x02\x02\x02\u0117\u011C\x05*\x16\x02\u0118\u0119" +
		"\x07i\x02\x02\u0119\u011B\x05*\x16\x02\u011A\u0118\x03\x02\x02\x02\u011B" +
		"\u011E\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02" +
		"\x02\x02\u011D)\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0120" +
		"\x05,\x17\x02\u0120+\x03\x02\x02\x02\u0121\u0122\x07h\x02\x02\u0122\u0123" +
		"\x07j\x02\x02\u0123\u0124\x07X\x02\x02\u0124\u0126\x07k\x02\x02\u0125" +
		"\u0127\x05.\x18\x02\u0126\u0125\x03\x02\x02\x02\u0126\u0127\x03\x02\x02" +
		"\x02\u0127\u0135\x03\x02\x02\x02\u0128\u0129\x07h\x02\x02\u0129\u012A" +
		"\x07j\x02\x02\u012A\u012B\x07h\x02\x02\u012B\u012D\x07k\x02\x02\u012C" +
		"\u012E\x05.\x18\x02\u012D\u012C\x03\x02\x02\x02\u012D\u012E\x03\x02\x02" +
		"\x02\u012E\u0135\x03\x02\x02\x02\u012F\u0131\x07h\x02\x02\u0130\u0132" +
		"\x05.\x18\x02\u0131\u0130\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02" +
		"\u0132\u0135\x03\x02\x02\x02\u0133\u0135\x07X\x02\x02\u0134\u0121\x03" +
		"\x02\x02\x02\u0134\u0128\x03\x02\x02\x02\u0134\u012F\x03\x02\x02\x02\u0134" +
		"\u0133\x03\x02\x02\x02\u0135-\x03\x02\x02\x02\u0136\u0137\x07?\x02\x02" +
		"\u0137\u0138\x07h\x02\x02\u0138/\x03\x02\x02\x02\u0139\u013A\x07-\x02" +
		"\x02\u013A\u013F\x052\x1A\x02\u013B\u013C\x07i\x02\x02\u013C\u013E\x05" +
		"2\x1A\x02\u013D\u013B\x03\x02\x02\x02\u013E\u0141\x03\x02\x02\x02\u013F" +
		"\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u01401\x03\x02\x02" +
		"\x02\u0141\u013F\x03\x02\x02\x02\u0142\u0143\b\x1A\x01\x02\u0143\u0144" +
		"\x07j\x02\x02\u0144\u0145\x05\x1E\x10\x02\u0145\u0146\x07k\x02\x02\u0146" +
		"\u0147\x054\x1B\x02\u0147\u0162\x03\x02\x02\x02\u0148\u014A\x05\\/\x02" +
		"\u0149\u014B\x054\x1B\x02\u014A\u0149\x03\x02\x02\x02\u014A\u014B\x03" +
		"\x02\x02\x02\u014B\u0162\x03\x02\x02\x02\u014C\u014E\x07b\x02\x02\u014D" +
		"\u014F\x07N\x02\x02\u014E\u014D\x03\x02\x02\x02\u014E\u014F\x03\x02\x02" +
		"\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x05v<\x02\u0151\u0152\x07" +
		"A\x02\x02\u0152\u0154\x05\\/\x02\u0153\u0155\x054\x1B\x02\u0154\u0153" +
		"\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0162\x03\x02\x02\x02" +
		"\u0156\u0157\x07j\x02\x02\u0157\u015C\x052\x1A\x02\u0158\u0159\x07i\x02" +
		"\x02\u0159\u015B\x052\x1A\x02\u015A\u0158\x03\x02\x02\x02\u015B\u015E" +
		"\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02" +
		"\u015D\u015F\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015F\u0160\x07" +
		"k\x02\x02\u0160\u0162\x03\x02\x02\x02\u0161\u0142\x03\x02\x02\x02\u0161" +
		"\u0148\x03\x02\x02\x02\u0161\u014C\x03\x02\x02\x02\u0161\u0156\x03\x02" +
		"\x02\x02\u0162\u016C\x03\x02\x02\x02\u0163\u0164\f\x03\x02\x02\u0164\u0165" +
		"\x056\x1C\x02\u0165\u0166\x052\x1A\x02\u0166\u0168\x05:\x1E\x02\u0167" +
		"\u0169\x054\x1B\x02\u0168\u0167\x03\x02\x02\x02\u0168\u0169\x03\x02\x02" +
		"\x02\u0169\u016B\x03\x02\x02\x02\u016A\u0163\x03\x02\x02\x02\u016B\u016E" +
		"\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02" +
		"\u016D3\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016F\u0171\x07?\x02" +
		"\x02\u0170\u016F\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172" +
		"\x03\x02\x02\x02\u0172\u0173\x07h\x02\x02\u01735\x03\x02\x02\x02\u0174" +
		"\u0176\x076\x02\x02\u0175\u0177\x079\x02\x02\u0176\u0175\x03\x02\x02\x02" +
		"\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0185\b" +
		"\x1C\x01\x02\u0179\u017B\x077\x02\x02\u017A\u017C\x079\x02\x02\u017B\u017A" +
		"\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02" +
		"\u017D\u0185\b\x1C\x01\x02\u017E\u0180\x078\x02\x02\u017F\u0181\x079\x02" +
		"\x02\u0180\u017F\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0182" +
		"\x03\x02\x02\x02\u0182\u0185\b\x1C\x01\x02\u0183\u0185\x075\x02\x02\u0184" +
		"\u0174\x03\x02\x02\x02\u0184\u0179\x03\x02\x02\x02\u0184\u017E\x03\x02" +
		"\x02\x02\u0184\u0183\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185" +
		"\u0186\x03\x02\x02\x02\u0186\u0187\x074\x02\x02\u01877\x03\x02\x02\x02" +
		"\u0188\u0189\x05`1\x02\u01899\x03\x02\x02\x02\u018A\u018B\x07\'\x02\x02" +
		"\u018B\u018C\x05<\x1F\x02\u018C;\x03\x02\x02\x02\u018D\u018E\x05\\/\x02" +
		"\u018E\u018F\x05L\'\x02\u018F\u0190\x05\\/\x02\u0190=\x03\x02\x02\x02" +
		"\u0191\u0192\x05&\x14\x02\u0192?\x03\x02\x02\x02\u0193\u0198\x05B\"\x02" +
		"\u0194\u0195\x07i\x02\x02\u0195\u0197\x05B\"\x02\u0196\u0194\x03\x02\x02" +
		"\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0199" +
		"\x03\x02\x02\x02\u0199A\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019B" +
		"\u019E\x05D#\x02\u019C\u019E\x05F$\x02\u019D\u019B\x03\x02\x02\x02\u019D" +
		"\u019C\x03\x02\x02\x02\u019EC\x03\x02\x02\x02\u019F\u01A1\x07h\x02\x02" +
		"\u01A0\u01A2\x07\x19\x02\x02\u01A1\u01A0\x03\x02\x02\x02\u01A1\u01A2\x03" +
		"\x02\x02\x02\u01A2E\x03\x02\x02\x02\u01A3\u01A4\x07h\x02\x02\u01A4\u01A5" +
		"\x07\x1A\x02\x02\u01A5G\x03\x02\x02\x02\u01A6\u01A7\x07H\x02\x02\u01A7" +
		"\u01A9\x07e\x02\x02\u01A8\u01AA\x05J&\x02\u01A9\u01A8\x03\x02\x02\x02" +
		"\u01A9\u01AA\x03\x02\x02\x02\u01AAI\x03\x02\x02\x02\u01AB\u01AC\x07I\x02" +
		"\x02\u01AC\u01AD\x07e\x02\x02\u01ADK\x03\x02\x02\x02\u01AE\u01AF\t\x02" +
		"\x02\x02\u01AFM\x03\x02\x02\x02\u01B0\u01B1\t\x03\x02\x02\u01B1O\x03\x02" +
		"\x02\x02\u01B2\u01B3\x05j6\x02\u01B3\u01B4\b)\x01\x02\u01B4\u01BC\x03" +
		"\x02\x02\x02\u01B5\u01B6\x05l7\x02\u01B6\u01B7\b)\x01\x02\u01B7\u01BC" +
		"\x03\x02\x02\x02\u01B8\u01B9\x05n8\x02\u01B9\u01BA\b)\x01\x02\u01BA\u01BC" +
		"\x03\x02\x02\x02\u01BB\u01B2\x03\x02\x02\x02\u01BB\u01B5\x03\x02\x02\x02" +
		"\u01BB\u01B8\x03\x02\x02\x02\u01BCQ\x03\x02\x02\x02\u01BD\u01BE\x07\x04" +
		"\x02\x02\u01BE\u01C9\b*\x01\x02\u01BF\u01C9\x07\x05\x02\x02\u01C0\u01C1" +
		"\x07\x06\x02\x02\u01C1\u01C9\b*\x01\x02\u01C2\u01C3\x07\x07\x02\x02\u01C3" +
		"\u01C9\b*\x01\x02\u01C4\u01C5\x07\b\x02\x02\u01C5\u01C9\b*\x01\x02\u01C6" +
		"\u01C7\x07\t\x02\x02\u01C7\u01C9\b*\x01\x02\u01C8\u01BD\x03\x02\x02\x02" +
		"\u01C8\u01BF\x03\x02\x02\x02\u01C8\u01C0\x03\x02\x02\x02\u01C8\u01C2\x03" +
		"\x02\x02\x02\u01C8\u01C4\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C9" +
		"S\x03\x02\x02\x02\u01CA\u01CB\t\x04\x02\x02\u01CBU\x03\x02\x02\x02\u01CC" +
		"\u01D1\x05X-\x02\u01CD\u01CE\x07\x03\x02\x02\u01CE\u01D0\x05Z.\x02\u01CF" +
		"\u01CD\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03\x02" +
		"\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2W\x03\x02\x02\x02\u01D3\u01D1" +
		"\x03\x02\x02\x02\u01D4\u01D8\x07h\x02\x02\u01D5\u01D8\x07Z\x02\x02\u01D6" +
		"\u01D8\x07[\x02\x02\u01D7\u01D4\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02" +
		"\x02\u01D7\u01D6\x03\x02\x02\x02\u01D8Y\x03\x02\x02\x02\u01D9\u01DC\x07" +
		"h\x02\x02\u01DA\u01DC\x07[\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB\u01DA" +
		"\x03\x02\x02\x02\u01DC[\x03\x02\x02\x02\u01DD\u01E2\x07h\x02\x02\u01DE" +
		"\u01DF\x07\x03\x02\x02\u01DF\u01E1\x07h\x02\x02\u01E0\u01DE\x03\x02\x02" +
		"\x02\u01E1\u01E4\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E3" +
		"\x03\x02\x02\x02\u01E3]\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E5" +
		"\u01E6\x05`1\x02\u01E6_\x03\x02\x02\x02\u01E7\u01E8\b1\x01\x02\u01E8\u01EA" +
		"\x05f4\x02\u01E9\u01EB\x05b2\x02\u01EA\u01E9\x03\x02\x02\x02\u01EA\u01EB" +
		"\x03\x02\x02\x02\u01EB\u01EF\x03\x02\x02\x02\u01EC\u01ED\x07^\x02\x02" +
		"\u01ED\u01EF\x05`1\x05\u01EE\u01E7\x03\x02\x02\x02\u01EE\u01EC\x03\x02" +
		"\x02\x02\u01EF\u01F8\x03\x02\x02\x02\u01F0\u01F1\f\x04\x02\x02\u01F1\u01F2" +
		"\x07\\\x02\x02\u01F2\u01F7\x05`1\x05\u01F3\u01F4\f\x03\x02\x02\u01F4\u01F5" +
		"\x07]\x02\x02\u01F5\u01F7\x05`1\x04\u01F6\u01F0\x03\x02\x02\x02\u01F6" +
		"\u01F3\x03\x02\x02\x02\u01F7\u01FA\x03\x02\x02\x02\u01F8\u01F6\x03\x02" +
		"\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9a\x03\x02\x02\x02\u01FA\u01F8" +
		"\x03\x02\x02\x02\u01FB\u01FC\x05L\'\x02\u01FC\u01FD\x05f4\x02\u01FD\u020F" +
		"\x03\x02\x02\x02\u01FE\u0200\x07^\x02\x02\u01FF\u01FE\x03\x02\x02\x02" +
		"\u01FF\u0200\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0202\x07" +
		"`\x02\x02\u0202\u0203\x05f4\x02\u0203\u0204\x07\\\x02\x02\u0204\u0205" +
		"\x05f4\x02\u0205\u020F\x03\x02\x02\x02\u0206\u0208\x07^\x02\x02\u0207" +
		"\u0206\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0209\x03\x02" +
		"\x02\x02\u0209\u020A\x07_\x02\x02\u020A\u020B\x07j\x02\x02\u020B\u020C" +
		"\x05d3\x02\u020C\u020D\x07k\x02\x02\u020D\u020F\x03\x02\x02\x02\u020E" +
		"\u01FB\x03\x02\x02\x02\u020E\u01FF\x03\x02\x02\x02\u020E\u0207\x03\x02" +
		"\x02\x02\u020Fc\x03\x02\x02\x02\u0210\u0215\x05f4\x02\u0211\u0212\x07" +
		"i\x02\x02\u0212\u0214\x05f4\x02\u0213\u0211\x03\x02\x02\x02\u0214\u0217" +
		"\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02" +
		"\u0216e\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0218\u0219\x05h5" +
		"\x02\u0219g\x03\x02\x02\x02\u021A\u0223\x07h\x02\x02\u021B\u0223\x05j" +
		"6\x02\u021C\u0223\x05n8\x02\u021D\u0223\x05l7\x02\u021E\u021F\x07j\x02" +
		"\x02\u021F\u0220\x05^0\x02\u0220\u0221\x07k\x02\x02\u0221\u0223\x03\x02" +
		"\x02\x02\u0222\u021A\x03\x02\x02\x02\u0222\u021B\x03\x02\x02\x02\u0222" +
		"\u021C\x03\x02\x02\x02\u0222\u021D\x03\x02\x02\x02\u0222\u021E\x03\x02" +
		"\x02\x02\u0223i\x03\x02\x02\x02\u0224\u0225\x07f\x02\x02\u0225\u022A\b" +
		"6\x01\x02\u0226\u0227\x07g\x02\x02\u0227\u022A\b6\x01";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0228\u022A\x07e\x02\x02\u0229\u0224\x03\x02\x02\x02\u0229\u0226" +
		"\x03\x02\x02\x02\u0229\u0228\x03\x02\x02\x02\u022Ak\x03\x02\x02\x02\u022B" +
		"\u0232\x07b\x02\x02\u022C\u022F\x07c\x02\x02\u022D\u022E\x07M\x02\x02" +
		"\u022E\u0230\x07b\x02\x02\u022F\u022D\x03\x02\x02\x02\u022F\u0230\x03" +
		"\x02\x02\x02\u0230\u0232\x03\x02\x02\x02\u0231\u022B\x03\x02\x02\x02\u0231" +
		"\u022C\x03\x02\x02\x02\u0232m\x03\x02\x02\x02\u0233\u0234\t\x05\x02\x02" +
		"\u0234o\x03\x02\x02\x02\u0235\u0236\x07>\x02\x02\u0236\u0239\x05V,\x02" +
		"\u0237\u0238\x07?\x02\x02\u0238\u023A\x07h\x02\x02\u0239\u0237\x03\x02" +
		"\x02\x02\u0239\u023A\x03\x02\x02\x02\u023Aq\x03\x02\x02\x02\u023B\u023C" +
		"\x07\"\x02\x02\u023C\u023E\x05x=\x02\u023D\u023F\x05z>\x02\u023E\u023D" +
		"\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0241\x03\x02\x02\x02" +
		"\u0240\u0242\x07%\x02\x02\u0241\u0240\x03\x02\x02\x02\u0241\u0242\x03" +
		"\x02\x02\x02\u0242s\x03\x02\x02\x02\u0243\u0244\x07\x0E\x02\x02\u0244" +
		"\u0249\x05\\/\x02\u0245\u0247\x07\x13\x02\x02\u0246\u0248\x07B\x02\x02" +
		"\u0247\u0246\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248\u024A\x03" +
		"\x02\x02\x02\u0249\u0245\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A" +
		"\u024C\x03\x02\x02\x02\u024B\u024D\x07N\x02\x02\u024C\u024B\x03\x02\x02" +
		"\x02\u024C\u024D\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E\u024F" +
		"\x05v<\x02\u024F\u0251\x07b\x02\x02\u0250\u0252\x07%\x02\x02\u0251\u0250" +
		"\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252u\x03\x02\x02\x02\u0253" +
		"\u0254\x07\n\x02\x02\u0254\u025D\b<\x01\x02\u0255\u0256\x07\r\x02\x02" +
		"\u0256\u025D\b<\x01\x02\u0257\u0259\x07\v\x02\x02\u0258\u0257\x03\x02" +
		"\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025D\x03\x02\x02\x02\u025A" +
		"\u025B\x07\f\x02\x02\u025B\u025D\b<\x01\x02\u025C\u0253\x03\x02\x02\x02" +
		"\u025C\u0255\x03\x02\x02\x02\u025C\u0258\x03\x02\x02\x02\u025C\u025A\x03" +
		"\x02\x02\x02\u025Dw\x03\x02\x02\x02\u025E\u0262\x05\\/\x02\u025F\u0262" +
		"\x05\x1E\x10\x02\u0260\u0262\x05P)\x02\u0261\u025E\x03\x02\x02\x02\u0261" +
		"\u025F\x03\x02\x02\x02\u0261\u0260\x03\x02\x02\x02\u0262y\x03\x02\x02" +
		"\x02\u0263\u0265\x07F\x02\x02\u0264\u0263\x03\x02\x02\x02\u0264\u0265" +
		"\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u0267\x07h\x02\x02" +
		"\u0267{\x03\x02\x02\x02\u0268\u0269\b?\x01\x02\u0269\u026B\x07!\x02\x02" +
		"\u026A\u026C\x07-\x02\x02\u026B\u026A\x03\x02\x02\x02\u026B\u026C\x03" +
		"\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u026F\x05\\/\x02\u026E" +
		"\u0270\x07F\x02\x02\u026F\u026E\x03\x02\x02\x02\u026F\u0270\x03\x02\x02" +
		"\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0273\x07h\x02\x02\u0272\u0274" +
		"\x07N\x02\x02\u0273\u0272\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02" +
		"\u0274\u0275\x03\x02\x02\x02\u0275\u0276\x07h\x02\x02\u0276}\x03\x02\x02" +
		"\x02\u0277\u0278\x07\x17\x02\x02\u0278\u027D\b@\x01\x02\u0279\u027A\x07" +
		"\x18\x02\x02\u027A\u027D\b@\x01\x02\u027B\u027D\x03\x02\x02\x02\u027C" +
		"\u0277\x03\x02\x02\x02\u027C\u0279\x03\x02\x02\x02\u027C\u027B\x03\x02" +
		"\x02\x02\u027D\x7F\x03\x02\x02\x02\u027E\u027F\x05\x82B\x02\u027F\u0280" +
		"\x07O\x02\x02\u0280\u0282\x03\x02\x02\x02\u0281\u027E\x03\x02\x02\x02" +
		"\u0282\u0285\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0284\x03" +
		"\x02\x02\x02\u0284\u0286\x03\x02\x02\x02\u0285\u0283\x03\x02\x02\x02\u0286" +
		"\u0287\x07\x02\x02\x03\u0287\x81\x03\x02\x02\x02\u0288\u0289\x07,\x02" +
		"\x02\u0289\u028B\x07h\x02\x02\u028A\u028C\x07?\x02\x02\u028B\u028A\x03" +
		"\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D" +
		"\u028E\x07\x11\x02\x02\u028E\u028F\x07j\x02\x02\u028F\u0290\x05\x84C\x02" +
		"\u0290\u0291\x07k\x02\x02\u0291\u02A5\x03\x02\x02\x02\u0292\u0293\x07" +
		",\x02\x02\u0293\u0295\x07h\x02\x02\u0294\u0296\x07?\x02\x02\u0295\u0294" +
		"\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02" +
		"\u0297\u0298\x07A\x02\x02\u0298\u0299\x07j\x02\x02\u0299\u029A\x05\x84" +
		"C\x02\u029A\u029B\x07k\x02\x02\u029B\u02A5\x03\x02\x02\x02\u029C\u029D" +
		"\x07,\x02\x02\u029D\u029F\x07h\x02\x02\u029E\u02A0\x07?\x02\x02\u029F" +
		"\u029E\x03\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u02A1\x03\x02" +
		"\x02\x02\u02A1\u02A2\x07!\x02\x02\u02A2\u02A3\x07\'\x02\x02\u02A3\u02A5" +
		"\x07b\x02\x02\u02A4\u0288\x03\x02\x02\x02\u02A4\u0292\x03\x02\x02\x02" +
		"\u02A4\u029C\x03\x02\x02\x02\u02A5\x83\x03\x02\x02\x02\u02A6\u02AB\x05" +
		"\x86D\x02\u02A7\u02A8\x07i\x02\x02\u02A8\u02AA\x05\x86D\x02\u02A9\u02A7" +
		"\x03\x02\x02\x02\u02AA\u02AD\x03\x02\x02\x02\u02AB\u02A9\x03\x02\x02\x02" +
		"\u02AB\u02AC\x03\x02\x02\x02\u02AC\x85\x03\x02\x02\x02\u02AD\u02AB\x03" +
		"\x02\x02\x02\u02AE\u02AF\x05R*\x02\u02AF\u02B0\x07h\x02\x02\u02B0\x87" +
		"\x03\x02\x02\x02P\x8B\x9A\xA4\xA9\xB7\xC6\xCA\xD1\xDA\xEB\xEF\xF5\xF8" +
		"\xFD\u0102\u0105\u0114\u011C\u0126\u012D\u0131\u0134\u013F\u014A\u014E" +
		"\u0154\u015C\u0161\u0168\u016C\u0170\u0176\u017B\u0180\u0184\u0198\u019D" +
		"\u01A1\u01A9\u01BB\u01C8\u01D1\u01D7\u01DB\u01E2\u01EA\u01EE\u01F6\u01F8" +
		"\u01FF\u0207\u020E\u0215\u0222\u0229\u022F\u0231\u0239\u023E\u0241\u0247" +
		"\u0249\u024C\u0251\u0258\u025C\u0261\u0264\u026B\u026F\u0273\u027C\u0283" +
		"\u028B\u0295\u029F\u02A4\u02AB";
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
	public needML: boolean = false;
	public needPlots: boolean = false;
	public actionCount: number = 0;
	public willWrapModule: boolean = false;
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
	public _definitionStmt!: DefinitionStmtContext;
	public definitionStmt(): DefinitionStmtContext | undefined {
		return this.tryGetRuleContext(0, DefinitionStmtContext);
	}
	public actionStmt(): ActionStmtContext | undefined {
		return this.tryGetRuleContext(0, ActionStmtContext);
	}
	public importStmt(): ImportStmtContext | undefined {
		return this.tryGetRuleContext(0, ImportStmtContext);
	}
	public functionStmt(): FunctionStmtContext | undefined {
		return this.tryGetRuleContext(0, FunctionStmtContext);
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
	public willWrapModule: boolean = false;
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
	public createStmt(): CreateStmtContext | undefined {
		return this.tryGetRuleContext(0, CreateStmtContext);
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


export class CreateStmtContext extends ParserRuleContext {
	public CREATE(): TerminalNode { return this.getToken(HSQLParser.CREATE, 0); }
	public layoutStmt(): LayoutStmtContext | undefined {
		return this.tryGetRuleContext(0, LayoutStmtContext);
	}
	public moduleStmt(): ModuleStmtContext | undefined {
		return this.tryGetRuleContext(0, ModuleStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_createStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitCreateStmt) {
			return visitor.visitCreateStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionStmtContext extends ParserRuleContext {
	public _fname!: Token;
	public CREATE(): TerminalNode { return this.getToken(HSQLParser.CREATE, 0); }
	public FUNCTION(): TerminalNode { return this.getToken(HSQLParser.FUNCTION, 0); }
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public functionArgs(): FunctionArgsContext {
		return this.getRuleContext(0, FunctionArgsContext);
	}
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	public CURLY_BSTART_(): TerminalNode { return this.getToken(HSQLParser.CURLY_BSTART_, 0); }
	public returnStmt(): ReturnStmtContext {
		return this.getRuleContext(0, ReturnStmtContext);
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
	public CURLY_BEND_(): TerminalNode { return this.getToken(HSQLParser.CURLY_BEND_, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public definitionStmt(): DefinitionStmtContext[];
	public definitionStmt(i: number): DefinitionStmtContext;
	public definitionStmt(i?: number): DefinitionStmtContext | DefinitionStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionStmtContext);
		} else {
			return this.getRuleContext(i, DefinitionStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_functionStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitFunctionStmt) {
			return visitor.visitFunctionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(HSQLParser.RETURN, 0); }
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_returnStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionArgsContext extends ParserRuleContext {
	public functionArg(): FunctionArgContext[];
	public functionArg(i: number): FunctionArgContext;
	public functionArg(i?: number): FunctionArgContext | FunctionArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionArgContext);
		} else {
			return this.getRuleContext(i, FunctionArgContext);
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
	public get ruleIndex(): number { return HSQLParser.RULE_functionArgs; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitFunctionArgs) {
			return visitor.visitFunctionArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionArgContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_functionArg; }
	public copyFrom(ctx: FunctionArgContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionDefaultArgumentContext extends FunctionArgContext {
	public colDef(): ColDefContext {
		return this.getRuleContext(0, ColDefContext);
	}
	constructor(ctx: FunctionArgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitFunctionDefaultArgument) {
			return visitor.visitFunctionDefaultArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionLayoutArgumentContext extends FunctionArgContext {
	public LAYOUT(): TerminalNode { return this.getToken(HSQLParser.LAYOUT, 0); }
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	constructor(ctx: FunctionArgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitFunctionLayoutArgument) {
			return visitor.visitFunctionLayoutArgument(this);
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
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitModuleStmt) {
			return visitor.visitModuleStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LayoutStmtContext extends ParserRuleContext {
	public LAYOUT(): TerminalNode { return this.getToken(HSQLParser.LAYOUT, 0); }
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public layoutContent(): LayoutContentContext {
		return this.getRuleContext(0, LayoutContentContext);
	}
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_layoutStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitLayoutStmt) {
			return visitor.visitLayoutStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LayoutContentContext extends ParserRuleContext {
	public colDefs(): ColDefsContext {
		return this.getRuleContext(0, ColDefsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_layoutContent; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitLayoutContent) {
			return visitor.visitLayoutContent(this);
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
	public fileOutputStmt(): FileOutputStmtContext | undefined {
		return this.tryGetRuleContext(0, FileOutputStmtContext);
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
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.BY);
		} else {
			return this.getToken(HSQLParser.BY, i);
		}
	}
	public orderByClause(): OrderByClauseContext | undefined {
		return this.tryGetRuleContext(0, OrderByClauseContext);
	}
	public DISTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.DISTRIBUTE, 0); }
	public distributeByClause(): DistributeByClauseContext | undefined {
		return this.tryGetRuleContext(0, DistributeByClauseContext);
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


export class DistributeByClauseContext extends ParserRuleContext {
	public idSet(): IdSetContext {
		return this.getRuleContext(0, IdSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_distributeByClause; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDistributeByClause) {
			return visitor.visitDistributeByClause(this);
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
export class SelectFromDatasetContext extends SelectFromRefContext {
	public STRING(): TerminalNode { return this.getToken(HSQLParser.STRING, 0); }
	public fileType(): FileTypeContext {
		return this.getRuleContext(0, FileTypeContext);
	}
	public LAYOUT(): TerminalNode { return this.getToken(HSQLParser.LAYOUT, 0); }
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.TYPE, 0); }
	public selectAlias(): SelectAliasContext | undefined {
		return this.tryGetRuleContext(0, SelectAliasContext);
	}
	constructor(ctx: SelectFromRefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectFromDataset) {
			return visitor.visitSelectFromDataset(this);
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
	public dt: SingularDataType = SingularDataType.INTEGER;
	public _number!: NumberContext;
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
	public dt: SingularDataType = SingularDataType.INTEGER;
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_number; }
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
		this.dt = ctx.dt;
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
	public OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.OVERWRITE, 0); }
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


export class FileOutputStmtContext extends ParserRuleContext {
	public WRITE(): TerminalNode { return this.getToken(HSQLParser.WRITE, 0); }
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	public fileType(): FileTypeContext {
		return this.getRuleContext(0, FileTypeContext);
	}
	public STRING(): TerminalNode { return this.getToken(HSQLParser.STRING, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.TO, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.TYPE, 0); }
	public OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.OVERWRITE, 0); }
	public FILE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.FILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_fileOutputStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitFileOutputStmt) {
			return visitor.visitFileOutputStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileTypeContext extends ParserRuleContext {
	public fileOutputType: FileOutputType = FileOutputType.THOR;
	public CSV(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.CSV, 0); }
	public JSON(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.JSON, 0); }
	public THOR(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.THOR, 0); }
	public XML(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.XML, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_fileType; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitFileType) {
			return visitor.visitFileType(this);
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


export class PlotStmtContext extends ParserRuleContext {
	public _fromdef!: DefinitionContext;
	public _title!: Token;
	public _typePlot!: Token;
	public PLOT(): TerminalNode { return this.getToken(HSQLParser.PLOT, 0); }
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
	public FROM(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.FROM, 0); }
	public TITLE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.TITLE, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_plotStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitPlotStmt) {
			return visitor.visitPlotStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScopeContext extends ParserRuleContext {
	public variableVisibility: VariableVisibility = VariableVisibility.DEFAULT;
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_declaration; }
	public copyFrom(ctx: DeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class TableDeclarationContext extends DeclarationContext {
	public DECLARE(): TerminalNode { return this.getToken(HSQLParser.DECLARE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public TABLE(): TerminalNode { return this.getToken(HSQLParser.TABLE, 0); }
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public colDefs(): ColDefsContext {
		return this.getRuleContext(0, ColDefsContext);
	}
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.AS, 0); }
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTableDeclaration) {
			return visitor.visitTableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LayoutDeclarationContext extends DeclarationContext {
	public DECLARE(): TerminalNode { return this.getToken(HSQLParser.DECLARE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public LAYOUT(): TerminalNode { return this.getToken(HSQLParser.LAYOUT, 0); }
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public colDefs(): ColDefsContext {
		return this.getRuleContext(0, ColDefsContext);
	}
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.AS, 0); }
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitLayoutDeclaration) {
			return visitor.visitLayoutDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PlotDeclarationContext extends DeclarationContext {
	public DECLARE(): TerminalNode { return this.getToken(HSQLParser.DECLARE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public PLOT(): TerminalNode { return this.getToken(HSQLParser.PLOT, 0); }
	public ON(): TerminalNode { return this.getToken(HSQLParser.ON, 0); }
	public STRING(): TerminalNode { return this.getToken(HSQLParser.STRING, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.AS, 0); }
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitPlotDeclaration) {
			return visitor.visitPlotDeclaration(this);
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


