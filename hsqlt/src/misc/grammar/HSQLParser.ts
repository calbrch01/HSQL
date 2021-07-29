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
	public static readonly ANYTABLE = 15;
	public static readonly TABLE = 16;
	public static readonly ALTER = 17;
	public static readonly TO = 18;
	public static readonly ADD = 19;
	public static readonly DROP = 20;
	public static readonly MODIFY = 21;
	public static readonly EXPORT = 22;
	public static readonly SHARED = 23;
	public static readonly ASC = 24;
	public static readonly DESC = 25;
	public static readonly ORDER = 26;
	public static readonly DISTRIBUTE = 27;
	public static readonly GROUP = 28;
	public static readonly BY = 29;
	public static readonly TRAIN = 30;
	public static readonly PREDICT = 31;
	public static readonly PLOT = 32;
	public static readonly OUTPUT = 33;
	public static readonly OPTION = 34;
	public static readonly OPTIONS = 35;
	public static readonly OVERWRITE = 36;
	public static readonly UPDATE = 37;
	public static readonly ON = 38;
	public static readonly INDEPENDENT = 39;
	public static readonly IDCOLUMN = 40;
	public static readonly PROJECT = 41;
	public static readonly SELECT = 42;
	public static readonly DECLARE = 43;
	public static readonly FROM = 44;
	public static readonly TOP = 45;
	public static readonly WHERE = 46;
	public static readonly HAVING = 47;
	public static readonly DISTINCT = 48;
	public static readonly NATURAL = 49;
	public static readonly CROSS = 50;
	public static readonly JOIN = 51;
	public static readonly INNER = 52;
	public static readonly LEFT = 53;
	public static readonly RIGHT = 54;
	public static readonly FULL = 55;
	public static readonly OUTER = 56;
	public static readonly ONLY = 57;
	public static readonly CASE = 58;
	public static readonly TRUE = 59;
	public static readonly FALSE = 60;
	public static readonly IMPORT = 61;
	public static readonly AS = 62;
	public static readonly CREATE = 63;
	public static readonly LAYOUT = 64;
	public static readonly FILE = 65;
	public static readonly MAP = 66;
	public static readonly METHOD = 67;
	public static readonly DEPENDENT = 68;
	public static readonly TITLE = 69;
	public static readonly EXPIRE = 70;
	public static readonly LIMIT = 71;
	public static readonly OFFSET = 72;
	public static readonly MODULE = 73;
	public static readonly FUNCTION = 74;
	public static readonly RETURN = 75;
	public static readonly UESCAPE = 76;
	public static readonly TYPE = 77;
	public static readonly SEMICOLON = 78;
	public static readonly EQ = 79;
	public static readonly NEQ = 80;
	public static readonly LT = 81;
	public static readonly LTE = 82;
	public static readonly GT = 83;
	public static readonly GTE = 84;
	public static readonly PLUS = 85;
	public static readonly SUBSTRACT = 86;
	public static readonly MULTIPLY = 87;
	public static readonly DIVIDE = 88;
	public static readonly MODULO = 89;
	public static readonly XOR = 90;
	public static readonly AND = 91;
	public static readonly OR = 92;
	public static readonly NOT = 93;
	public static readonly IN = 94;
	public static readonly BETWEEN = 95;
	public static readonly EXISTS = 96;
	public static readonly STRING = 97;
	public static readonly UNICODE_STRING = 98;
	public static readonly BINARY_LITERAL = 99;
	public static readonly INTEGER_VALUE = 100;
	public static readonly DECIMAL_VALUE = 101;
	public static readonly DOUBLE_VALUE = 102;
	public static readonly IDENTIFIER = 103;
	public static readonly COMMA_ = 104;
	public static readonly BSTART_ = 105;
	public static readonly BEND_ = 106;
	public static readonly CURLY_BSTART_ = 107;
	public static readonly CURLY_BEND_ = 108;
	public static readonly ECL_SNIPPETS = 109;
	public static readonly SIMPLE_COMMENT = 110;
	public static readonly SIMPLE_C_COMMENT = 111;
	public static readonly BRACKETED_COMMENT = 112;
	public static readonly WS = 113;
	public static readonly RULE_program = 0;
	public static readonly RULE_completestmt = 1;
	public static readonly RULE_stmt = 2;
	public static readonly RULE_definitionStmt = 3;
	public static readonly RULE_expr = 4;
	public static readonly RULE_createStmt = 5;
	public static readonly RULE_functionCall = 6;
	public static readonly RULE_functionCallArgs = 7;
	public static readonly RULE_functionStmt = 8;
	public static readonly RULE_returnStmt = 9;
	public static readonly RULE_functionArgs = 10;
	public static readonly RULE_functionArg = 11;
	public static readonly RULE_moduleStmt = 12;
	public static readonly RULE_layoutStmt = 13;
	public static readonly RULE_layoutContent = 14;
	public static readonly RULE_actionStmt = 15;
	public static readonly RULE_importStmt = 16;
	public static readonly RULE_outputStmt = 17;
	public static readonly RULE_fileOutputStmt = 18;
	public static readonly RULE_fileType = 19;
	public static readonly RULE_attribute = 20;
	public static readonly RULE_namedOutput = 21;
	public static readonly RULE_plotStmt = 22;
	public static readonly RULE_mlStmt = 23;
	public static readonly RULE_train = 24;
	public static readonly RULE_trainAddOrderSegment = 25;
	public static readonly RULE_trainOptions = 26;
	public static readonly RULE_trainOption = 27;
	public static readonly RULE_trainValue = 28;
	public static readonly RULE_selectStmt = 29;
	public static readonly RULE_distributeByClause = 30;
	public static readonly RULE_distinctClause = 31;
	public static readonly RULE_selectGroupByClause = 32;
	public static readonly RULE_idSet = 33;
	public static readonly RULE_selectColumns = 34;
	public static readonly RULE_selectCol = 35;
	public static readonly RULE_col = 36;
	public static readonly RULE_aliasingCol = 37;
	public static readonly RULE_selectFromClause = 38;
	public static readonly RULE_selectFromRef = 39;
	public static readonly RULE_selectAlias = 40;
	public static readonly RULE_joinOperator = 41;
	public static readonly RULE_selectWhereClause = 42;
	public static readonly RULE_joinConstraint = 43;
	public static readonly RULE_joinSpecification = 44;
	public static readonly RULE_groupByClause = 45;
	public static readonly RULE_orderByClause = 46;
	public static readonly RULE_sortItem = 47;
	public static readonly RULE_ascSortItem = 48;
	public static readonly RULE_descSortItem = 49;
	public static readonly RULE_limitOffsetClause = 50;
	public static readonly RULE_offsetClause = 51;
	public static readonly RULE_comparisonOperator = 52;
	public static readonly RULE_logicalOperator = 53;
	public static readonly RULE_literal = 54;
	public static readonly RULE_dataType = 55;
	public static readonly RULE_alterOperator = 56;
	public static readonly RULE_overDefinition = 57;
	public static readonly RULE_overDefinitionRoot = 58;
	public static readonly RULE_overDefinitionTail = 59;
	public static readonly RULE_definition = 60;
	public static readonly RULE_expression = 61;
	public static readonly RULE_booleanExpression = 62;
	public static readonly RULE_predicate = 63;
	public static readonly RULE_valueExpressionList = 64;
	public static readonly RULE_valueExpression = 65;
	public static readonly RULE_primaryExpression = 66;
	public static readonly RULE_booleanValue = 67;
	public static readonly RULE_number = 68;
	public static readonly RULE_string = 69;
	public static readonly RULE_scope = 70;
	public static readonly RULE_declarations = 71;
	public static readonly RULE_declaration = 72;
	public static readonly RULE_declarationModelOptions = 73;
	public static readonly RULE_modelImportSegment = 74;
	public static readonly RULE_declarationModeOption = 75;
	public static readonly RULE_declarationModelType = 76;
	public static readonly RULE_modelReturnSegment = 77;
	public static readonly RULE_colDefs = 78;
	public static readonly RULE_colDef = 79;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "completestmt", "stmt", "definitionStmt", "expr", "createStmt", 
		"functionCall", "functionCallArgs", "functionStmt", "returnStmt", "functionArgs", 
		"functionArg", "moduleStmt", "layoutStmt", "layoutContent", "actionStmt", 
		"importStmt", "outputStmt", "fileOutputStmt", "fileType", "attribute", 
		"namedOutput", "plotStmt", "mlStmt", "train", "trainAddOrderSegment", 
		"trainOptions", "trainOption", "trainValue", "selectStmt", "distributeByClause", 
		"distinctClause", "selectGroupByClause", "idSet", "selectColumns", "selectCol", 
		"col", "aliasingCol", "selectFromClause", "selectFromRef", "selectAlias", 
		"joinOperator", "selectWhereClause", "joinConstraint", "joinSpecification", 
		"groupByClause", "orderByClause", "sortItem", "ascSortItem", "descSortItem", 
		"limitOffsetClause", "offsetClause", "comparisonOperator", "logicalOperator", 
		"literal", "dataType", "alterOperator", "overDefinition", "overDefinitionRoot", 
		"overDefinitionTail", "definition", "expression", "booleanExpression", 
		"predicate", "valueExpressionList", "valueExpression", "primaryExpression", 
		"booleanValue", "number", "string", "scope", "declarations", "declaration", 
		"declarationModelOptions", "modelImportSegment", "declarationModeOption", 
		"declarationModelType", "modelReturnSegment", "colDefs", "colDef",
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
		undefined, undefined, "'='", undefined, "'<'", "'<='", "'>'", "'>='", 
		"'+'", "'-'", "'*'", "'/'", "'%'", "'^'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "','", "'('", "')'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "REAL_TYPE", "INTEGER_TYPE", "DECIMAL_TYPE", "VARSTRING_TYPE", 
		"STRING_TYPE", "BOOLEAN", "CSV", "THOR", "XML", "JSON", "WRITE", "UNSTABLE", 
		"STABLE", "ANYTABLE", "TABLE", "ALTER", "TO", "ADD", "DROP", "MODIFY", 
		"EXPORT", "SHARED", "ASC", "DESC", "ORDER", "DISTRIBUTE", "GROUP", "BY", 
		"TRAIN", "PREDICT", "PLOT", "OUTPUT", "OPTION", "OPTIONS", "OVERWRITE", 
		"UPDATE", "ON", "INDEPENDENT", "IDCOLUMN", "PROJECT", "SELECT", "DECLARE", 
		"FROM", "TOP", "WHERE", "HAVING", "DISTINCT", "NATURAL", "CROSS", "JOIN", 
		"INNER", "LEFT", "RIGHT", "FULL", "OUTER", "ONLY", "CASE", "TRUE", "FALSE", 
		"IMPORT", "AS", "CREATE", "LAYOUT", "FILE", "MAP", "METHOD", "DEPENDENT", 
		"TITLE", "EXPIRE", "LIMIT", "OFFSET", "MODULE", "FUNCTION", "RETURN", 
		"UESCAPE", "TYPE", "SEMICOLON", "EQ", "NEQ", "LT", "LTE", "GT", "GTE", 
		"PLUS", "SUBSTRACT", "MULTIPLY", "DIVIDE", "MODULO", "XOR", "AND", "OR", 
		"NOT", "IN", "BETWEEN", "EXISTS", "STRING", "UNICODE_STRING", "BINARY_LITERAL", 
		"INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_VALUE", "IDENTIFIER", "COMMA_", 
		"BSTART_", "BEND_", "CURLY_BSTART_", "CURLY_BEND_", "ECL_SNIPPETS", "SIMPLE_COMMENT", 
		"SIMPLE_C_COMMENT", "BRACKETED_COMMENT", "WS",
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
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HSQLParser.WRITE) | (1 << HSQLParser.EXPORT) | (1 << HSQLParser.SHARED))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (HSQLParser.PLOT - 32)) | (1 << (HSQLParser.OUTPUT - 32)) | (1 << (HSQLParser.SELECT - 32)) | (1 << (HSQLParser.TRUE - 32)) | (1 << (HSQLParser.FALSE - 32)) | (1 << (HSQLParser.IMPORT - 32)) | (1 << (HSQLParser.CREATE - 32)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (HSQLParser.STRING - 97)) | (1 << (HSQLParser.UNICODE_STRING - 97)) | (1 << (HSQLParser.INTEGER_VALUE - 97)) | (1 << (HSQLParser.DECIMAL_VALUE - 97)) | (1 << (HSQLParser.DOUBLE_VALUE - 97)) | (1 << (HSQLParser.IDENTIFIER - 97)))) !== 0)) {
				{
				{
				this.state = 160;
				this.completestmt();
				}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 166;
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
			this.state = 168;
			this.stmt();
			this.state = 169;
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
			this.state = 178;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.EXPORT:
			case HSQLParser.SHARED:
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 171;
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
				this.state = 175;
				this.actionStmt();
				}
				break;
			case HSQLParser.IMPORT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 176;
				this.importStmt();
				}
				break;
			case HSQLParser.CREATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 177;
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
			this.state = 180;
			this.scope();
			this.state = 181;
			_localctx._label = this.match(HSQLParser.IDENTIFIER);
			this.state = 182;
			this.match(HSQLParser.EQ);
			this.state = 183;
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
			this.state = 190;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 185;
				this.functionCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 186;
				this.definition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 187;
				this.actionStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 188;
				this.createStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 189;
				this.mlStmt();
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
	public createStmt(): CreateStmtContext {
		let _localctx: CreateStmtContext = new CreateStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, HSQLParser.RULE_createStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(HSQLParser.CREATE);
			this.state = 195;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.LAYOUT:
				{
				this.state = 193;
				this.layoutStmt();
				}
				break;
			case HSQLParser.MODULE:
				{
				this.state = 194;
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, HSQLParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.definition();
			this.state = 198;
			this.match(HSQLParser.BSTART_);
			this.state = 199;
			this.functionCallArgs();
			this.state = 200;
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
	public functionCallArgs(): FunctionCallArgsContext {
		let _localctx: FunctionCallArgsContext = new FunctionCallArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, HSQLParser.RULE_functionCallArgs);
		let _la: number;
		try {
			this.state = 211;
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
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 202;
				this.attribute();
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HSQLParser.COMMA_) {
					{
					{
					this.state = 203;
					this.match(HSQLParser.COMMA_);
					this.state = 204;
					this.attribute();
					}
					}
					this.state = 209;
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
	public functionStmt(): FunctionStmtContext {
		let _localctx: FunctionStmtContext = new FunctionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, HSQLParser.RULE_functionStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(HSQLParser.CREATE);
			this.state = 214;
			this.match(HSQLParser.FUNCTION);
			this.state = 215;
			_localctx._fname = this.match(HSQLParser.IDENTIFIER);
			this.state = 216;
			this.match(HSQLParser.BSTART_);
			this.state = 217;
			this.functionArgs();
			this.state = 218;
			this.match(HSQLParser.BEND_);
			this.state = 219;
			this.match(HSQLParser.CURLY_BSTART_);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.EXPORT || _la === HSQLParser.SHARED || _la === HSQLParser.IDENTIFIER) {
				{
				{
				this.state = 220;
				this.definitionStmt();
				this.state = 221;
				this.match(HSQLParser.SEMICOLON);
				}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 228;
			this.returnStmt();
			this.state = 229;
			this.match(HSQLParser.SEMICOLON);
			this.state = 230;
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
		this.enterRule(_localctx, 18, HSQLParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(HSQLParser.RETURN);
			this.state = 233;
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
		this.enterRule(_localctx, 20, HSQLParser.RULE_functionArgs);
		let _la: number;
		try {
			this.state = 244;
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
				this.state = 235;
				this.functionArg();
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HSQLParser.COMMA_) {
					{
					{
					this.state = 236;
					this.match(HSQLParser.COMMA_);
					this.state = 237;
					this.functionArg();
					}
					}
					this.state = 242;
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
		this.enterRule(_localctx, 22, HSQLParser.RULE_functionArg);
		try {
			this.state = 251;
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
				this.state = 246;
				this.colDef();
				}
				break;
			case HSQLParser.LAYOUT:
				_localctx = new FunctionLayoutArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 247;
				this.match(HSQLParser.LAYOUT);
				this.state = 248;
				this.definition();
				this.state = 249;
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
		this.enterRule(_localctx, 24, HSQLParser.RULE_moduleStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.match(HSQLParser.MODULE);
			this.state = 254;
			this.match(HSQLParser.BSTART_);
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.EXPORT || _la === HSQLParser.SHARED || _la === HSQLParser.IDENTIFIER) {
				{
				{
				this.state = 255;
				this.definitionStmt();
				this.state = 256;
				this.match(HSQLParser.SEMICOLON);
				}
				}
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 263;
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
		this.enterRule(_localctx, 26, HSQLParser.RULE_layoutStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(HSQLParser.LAYOUT);
			this.state = 266;
			this.match(HSQLParser.BSTART_);
			this.state = 267;
			this.layoutContent();
			this.state = 268;
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
		this.enterRule(_localctx, 28, HSQLParser.RULE_layoutContent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
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
		this.enterRule(_localctx, 30, HSQLParser.RULE_actionStmt);
		try {
			this.state = 277;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.SELECT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 272;
				this.selectStmt();
				}
				break;
			case HSQLParser.OUTPUT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 273;
				this.outputStmt();
				}
				break;
			case HSQLParser.PLOT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 274;
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
				this.state = 275;
				this.literal();
				}
				break;
			case HSQLParser.WRITE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 276;
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
	public importStmt(): ImportStmtContext {
		let _localctx: ImportStmtContext = new ImportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, HSQLParser.RULE_importStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.match(HSQLParser.IMPORT);
			this.state = 280;
			this.overDefinition();
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.AS) {
				{
				this.state = 281;
				this.match(HSQLParser.AS);
				this.state = 282;
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
		this.enterRule(_localctx, 34, HSQLParser.RULE_outputStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.match(HSQLParser.OUTPUT);
			this.state = 286;
			this.attribute();
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TITLE || _la === HSQLParser.IDENTIFIER) {
				{
				this.state = 287;
				this.namedOutput();
				}
			}

			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OVERWRITE) {
				{
				this.state = 290;
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
		this.enterRule(_localctx, 36, HSQLParser.RULE_fileOutputStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(HSQLParser.WRITE);
			this.state = 294;
			this.definition();
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TO) {
				{
				this.state = 295;
				this.match(HSQLParser.TO);
				this.state = 297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.FILE) {
					{
					this.state = 296;
					this.match(HSQLParser.FILE);
					}
				}

				}
			}

			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TYPE) {
				{
				this.state = 301;
				this.match(HSQLParser.TYPE);
				}
			}

			this.state = 304;
			this.fileType();
			this.state = 305;
			this.match(HSQLParser.STRING);
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OVERWRITE) {
				{
				this.state = 306;
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
		this.enterRule(_localctx, 38, HSQLParser.RULE_fileType);
		let _la: number;
		try {
			this.state = 318;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.CSV:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 309;
				this.match(HSQLParser.CSV);
				_localctx.fileOutputType=FileOutputType.CSV
				}
				break;
			case HSQLParser.JSON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 311;
				this.match(HSQLParser.JSON);
				_localctx.fileOutputType=FileOutputType.JSON
				}
				break;
			case HSQLParser.THOR:
			case HSQLParser.LAYOUT:
			case HSQLParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.THOR) {
					{
					this.state = 313;
					this.match(HSQLParser.THOR);
					}
				}

				}
				break;
			case HSQLParser.XML:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 316;
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
		this.enterRule(_localctx, 40, HSQLParser.RULE_attribute);
		try {
			this.state = 327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 320;
				this.definition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 321;
				this.match(HSQLParser.BSTART_);
				this.state = 322;
				this.selectStmt();
				this.state = 323;
				this.match(HSQLParser.BEND_);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 325;
				this.literal();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 326;
				this.functionCall();
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
	public namedOutput(): NamedOutputContext {
		let _localctx: NamedOutputContext = new NamedOutputContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, HSQLParser.RULE_namedOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TITLE) {
				{
				this.state = 329;
				this.match(HSQLParser.TITLE);
				}
			}

			this.state = 332;
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
		this.enterRule(_localctx, 44, HSQLParser.RULE_plotStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			(this.getInvokingContext(0) as ProgramContext).needPlots=true
			this.state = 335;
			this.match(HSQLParser.PLOT);
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.FROM) {
				{
				this.state = 336;
				this.match(HSQLParser.FROM);
				}
			}

			this.state = 339;
			_localctx._fromdef = this.definition();
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TITLE) {
				{
				this.state = 340;
				this.match(HSQLParser.TITLE);
				}
			}

			this.state = 343;
			_localctx._title = this.match(HSQLParser.IDENTIFIER);
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TYPE) {
				{
				this.state = 344;
				this.match(HSQLParser.TYPE);
				}
			}

			this.state = 347;
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
	public mlStmt(): MlStmtContext {
		let _localctx: MlStmtContext = new MlStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, HSQLParser.RULE_mlStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.train();
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
		this.enterRule(_localctx, 48, HSQLParser.RULE_train);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.match(HSQLParser.TRAIN);
			this.state = 352;
			this.match(HSQLParser.FROM);
			this.state = 353;
			_localctx._ind = this.definition();
			this.state = 354;
			this.match(HSQLParser.COMMA_);
			this.state = 355;
			_localctx._dep = this.definition();
			this.state = 356;
			this.match(HSQLParser.METHOD);
			this.state = 357;
			_localctx._method = this.match(HSQLParser.IDENTIFIER);
			this.state = 358;
			this.trainAddOrderSegment();
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OPTION) {
				{
				this.state = 359;
				this.match(HSQLParser.OPTION);
				}
			}

			this.state = 362;
			this.trainOptions();
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
	public trainAddOrderSegment(): TrainAddOrderSegmentContext {
		let _localctx: TrainAddOrderSegmentContext = new TrainAddOrderSegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, HSQLParser.RULE_trainAddOrderSegment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.match(HSQLParser.ADD);
			this.state = 365;
			this.match(HSQLParser.ORDER);
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
		this.enterRule(_localctx, 52, HSQLParser.RULE_trainOptions);
		try {
			let _alt: number;
			this.state = 376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 367;
				this.trainOption();
				this.state = 372;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 368;
						this.match(HSQLParser.COMMA_);
						this.state = 369;
						this.trainOption();
						}
						}
					}
					this.state = 374;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				}
				}
				break;
			case HSQLParser.SEMICOLON:
			case HSQLParser.COMMA_:
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
	public trainOption(): TrainOptionContext {
		let _localctx: TrainOptionContext = new TrainOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, HSQLParser.RULE_trainOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 379;
			this.match(HSQLParser.AS);
			this.state = 380;
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
		this.enterRule(_localctx, 56, HSQLParser.RULE_trainValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
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
	public selectStmt(): SelectStmtContext {
		let _localctx: SelectStmtContext = new SelectStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, HSQLParser.RULE_selectStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(HSQLParser.SELECT);
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.DISTINCT) {
				{
				this.state = 385;
				this.distinctClause();
				}
			}

			this.state = 388;
			this.selectColumns();
			this.state = 389;
			this.selectFromClause();
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.WHERE) {
				{
				this.state = 390;
				this.match(HSQLParser.WHERE);
				this.state = 391;
				this.selectWhereClause();
				}
			}

			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.GROUP) {
				{
				this.state = 394;
				this.selectGroupByClause();
				}
			}

			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.ORDER) {
				{
				this.state = 397;
				this.match(HSQLParser.ORDER);
				this.state = 398;
				this.match(HSQLParser.BY);
				this.state = 399;
				this.orderByClause();
				}
			}

			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.DISTRIBUTE) {
				{
				this.state = 402;
				this.match(HSQLParser.DISTRIBUTE);
				this.state = 403;
				this.match(HSQLParser.BY);
				this.state = 404;
				this.distributeByClause();
				}
			}

			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.LIMIT) {
				{
				this.state = 407;
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
		this.enterRule(_localctx, 60, HSQLParser.RULE_distributeByClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
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
		this.enterRule(_localctx, 62, HSQLParser.RULE_distinctClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
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
		this.enterRule(_localctx, 64, HSQLParser.RULE_selectGroupByClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.match(HSQLParser.GROUP);
			this.state = 415;
			this.match(HSQLParser.BY);
			this.state = 416;
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
		this.enterRule(_localctx, 66, HSQLParser.RULE_idSet);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 423;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 419;
					this.match(HSQLParser.COMMA_);
					this.state = 420;
					this.match(HSQLParser.IDENTIFIER);
					}
					}
				}
				this.state = 425;
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
	public selectColumns(): SelectColumnsContext {
		let _localctx: SelectColumnsContext = new SelectColumnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, HSQLParser.RULE_selectColumns);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.selectCol();
			this.state = 431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 427;
				this.match(HSQLParser.COMMA_);
				this.state = 428;
				this.selectCol();
				}
				}
				this.state = 433;
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
		this.enterRule(_localctx, 70, HSQLParser.RULE_selectCol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
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
		this.enterRule(_localctx, 72, HSQLParser.RULE_col);
		let _la: number;
		try {
			this.state = 455;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				_localctx = new SelectAggregatedEverythingColContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 436;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 437;
				this.match(HSQLParser.BSTART_);
				this.state = 438;
				this.match(HSQLParser.MULTIPLY);
				this.state = 439;
				this.match(HSQLParser.BEND_);
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 440;
					this.aliasingCol();
					}
				}

				}
				break;

			case 2:
				_localctx = new SelectAggregatedOneColContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 443;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 444;
				this.match(HSQLParser.BSTART_);
				this.state = 445;
				(_localctx as SelectAggregatedOneColContext)._column = this.match(HSQLParser.IDENTIFIER);
				this.state = 446;
				this.match(HSQLParser.BEND_);
				this.state = 448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 447;
					this.aliasingCol();
					}
				}

				}
				break;

			case 3:
				_localctx = new SelectOneColContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 450;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 451;
					this.aliasingCol();
					}
				}

				}
				break;

			case 4:
				_localctx = new WildAllContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 454;
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
		this.enterRule(_localctx, 74, HSQLParser.RULE_aliasingCol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.match(HSQLParser.AS);
			this.state = 458;
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
		this.enterRule(_localctx, 76, HSQLParser.RULE_selectFromClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.match(HSQLParser.FROM);
			{
			this.state = 461;
			this.selectFromRef(0);
			this.state = 466;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 462;
					this.match(HSQLParser.COMMA_);
					this.state = 463;
					this.selectFromRef(0);
					}
					}
				}
				this.state = 468;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
		let _startState: number = 78;
		this.enterRecursionRule(_localctx, 78, HSQLParser.RULE_selectFromRef, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				_localctx = new SelectFromDerivedTableContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 470;
				this.match(HSQLParser.BSTART_);
				this.state = 471;
				this.selectStmt();
				this.state = 472;
				this.match(HSQLParser.BEND_);
				this.state = 473;
				this.selectAlias();
				}
				break;

			case 2:
				{
				_localctx = new SelectFromDefinitionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 475;
				this.definition();
				this.state = 477;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 476;
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
				this.state = 479;
				this.match(HSQLParser.STRING);
				this.state = 481;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.TYPE) {
					{
					this.state = 480;
					this.match(HSQLParser.TYPE);
					}
				}

				this.state = 483;
				this.fileType();
				this.state = 484;
				this.match(HSQLParser.LAYOUT);
				this.state = 485;
				this.definition();
				this.state = 487;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 486;
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
				this.state = 489;
				this.match(HSQLParser.BSTART_);
				this.state = 490;
				this.selectFromRef(0);
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HSQLParser.COMMA_) {
					{
					{
					this.state = 491;
					this.match(HSQLParser.COMMA_);
					this.state = 492;
					this.selectFromRef(0);
					}
					}
					this.state = 497;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 498;
				this.match(HSQLParser.BEND_);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 511;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
					this.state = 502;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 503;
					this.joinOperator();
					this.state = 504;
					this.selectFromRef(0);
					this.state = 505;
					this.joinConstraint();
					this.state = 507;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
					case 1:
						{
						this.state = 506;
						this.selectAlias();
						}
						break;
					}
					}
					}
				}
				this.state = 513;
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
	public selectAlias(): SelectAliasContext {
		let _localctx: SelectAliasContext = new SelectAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, HSQLParser.RULE_selectAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.AS) {
				{
				this.state = 514;
				this.match(HSQLParser.AS);
				}
			}

			this.state = 517;
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
		this.enterRule(_localctx, 82, HSQLParser.RULE_joinOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.LEFT:
				{
				this.state = 519;
				this.match(HSQLParser.LEFT);
				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.OUTER) {
					{
					this.state = 520;
					this.match(HSQLParser.OUTER);
					}
				}

				_localctx.joinType = SelectJoinType.LEFT;
				}
				break;
			case HSQLParser.RIGHT:
				{
				this.state = 524;
				this.match(HSQLParser.RIGHT);
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.OUTER) {
					{
					this.state = 525;
					this.match(HSQLParser.OUTER);
					}
				}

				_localctx.joinType = SelectJoinType.RIGHT;
				}
				break;
			case HSQLParser.FULL:
				{
				this.state = 529;
				this.match(HSQLParser.FULL);
				this.state = 531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.OUTER) {
					{
					this.state = 530;
					this.match(HSQLParser.OUTER);
					}
				}

				_localctx.joinType = SelectJoinType.OUTER;
				}
				break;
			case HSQLParser.INNER:
				{
				this.state = 534;
				this.match(HSQLParser.INNER);
				}
				break;
			case HSQLParser.JOIN:
				break;
			default:
				break;
			}
			this.state = 537;
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
		this.enterRule(_localctx, 84, HSQLParser.RULE_selectWhereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
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
		this.enterRule(_localctx, 86, HSQLParser.RULE_joinConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.match(HSQLParser.ON);
			this.state = 542;
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
		this.enterRule(_localctx, 88, HSQLParser.RULE_joinSpecification);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			_localctx._leftrecset = this.definition();
			this.state = 545;
			this.comparisonOperator();
			this.state = 546;
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
		this.enterRule(_localctx, 90, HSQLParser.RULE_groupByClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 548;
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
		this.enterRule(_localctx, 92, HSQLParser.RULE_orderByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this.sortItem();
			this.state = 555;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 551;
					this.match(HSQLParser.COMMA_);
					this.state = 552;
					this.sortItem();
					}
					}
				}
				this.state = 557;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
		this.enterRule(_localctx, 94, HSQLParser.RULE_sortItem);
		try {
			this.state = 560;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 558;
				this.ascSortItem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 559;
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
		this.enterRule(_localctx, 96, HSQLParser.RULE_ascSortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.ASC) {
				{
				this.state = 563;
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
		this.enterRule(_localctx, 98, HSQLParser.RULE_descSortItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 566;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 567;
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
		this.enterRule(_localctx, 100, HSQLParser.RULE_limitOffsetClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this.match(HSQLParser.LIMIT);
			this.state = 570;
			this.match(HSQLParser.INTEGER_VALUE);
			this.state = 572;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OFFSET) {
				{
				this.state = 571;
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
		this.enterRule(_localctx, 102, HSQLParser.RULE_offsetClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this.match(HSQLParser.OFFSET);
			this.state = 575;
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
		this.enterRule(_localctx, 104, HSQLParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			_la = this._input.LA(1);
			if (!(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (HSQLParser.EQ - 79)) | (1 << (HSQLParser.NEQ - 79)) | (1 << (HSQLParser.LT - 79)) | (1 << (HSQLParser.LTE - 79)) | (1 << (HSQLParser.GT - 79)) | (1 << (HSQLParser.GTE - 79)))) !== 0))) {
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
		this.enterRule(_localctx, 106, HSQLParser.RULE_logicalOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			_la = this._input.LA(1);
			if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (HSQLParser.AND - 91)) | (1 << (HSQLParser.OR - 91)) | (1 << (HSQLParser.NOT - 91)) | (1 << (HSQLParser.IN - 91)) | (1 << (HSQLParser.BETWEEN - 91)) | (1 << (HSQLParser.EXISTS - 91)))) !== 0))) {
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
		this.enterRule(_localctx, 108, HSQLParser.RULE_literal);
		try {
			this.state = 590;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 581;
				_localctx._number = this.number();
				_localctx.dt = _localctx._number.dt
				}
				break;
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 584;
				this.string();
				_localctx.dt = SingularDataType.STRING
				}
				break;
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 587;
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
		this.enterRule(_localctx, 110, HSQLParser.RULE_dataType);
		try {
			this.state = 603;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.REAL_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 592;
				this.match(HSQLParser.REAL_TYPE);
				_localctx.dt=SingularDataType.REAL
				}
				break;
			case HSQLParser.INTEGER_TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 594;
				this.match(HSQLParser.INTEGER_TYPE);
				}
				break;
			case HSQLParser.DECIMAL_TYPE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 595;
				this.match(HSQLParser.DECIMAL_TYPE);
				_localctx.dt=SingularDataType.REAL
				}
				break;
			case HSQLParser.VARSTRING_TYPE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 597;
				this.match(HSQLParser.VARSTRING_TYPE);
				_localctx.dt=SingularDataType.STRING
				}
				break;
			case HSQLParser.STRING_TYPE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 599;
				this.match(HSQLParser.STRING_TYPE);
				_localctx.dt=SingularDataType.STRING
				}
				break;
			case HSQLParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 601;
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
		this.enterRule(_localctx, 112, HSQLParser.RULE_alterOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 605;
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
		this.enterRule(_localctx, 114, HSQLParser.RULE_overDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this.overDefinitionRoot();
			this.state = 612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.T__0) {
				{
				{
				this.state = 608;
				this.match(HSQLParser.T__0);
				this.state = 609;
				this.overDefinitionTail();
				}
				}
				this.state = 614;
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
		this.enterRule(_localctx, 116, HSQLParser.RULE_overDefinitionRoot);
		try {
			this.state = 618;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				_localctx = new NormalIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 615;
				this.match(HSQLParser.IDENTIFIER);
				}
				break;
			case HSQLParser.MODULO:
				_localctx = new RootIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 616;
				this.match(HSQLParser.MODULO);
				}
				break;
			case HSQLParser.XOR:
				_localctx = new ParentIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 617;
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
		this.enterRule(_localctx, 118, HSQLParser.RULE_overDefinitionTail);
		try {
			this.state = 622;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				_localctx = new NormalTailIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 620;
				this.match(HSQLParser.IDENTIFIER);
				}
				break;
			case HSQLParser.XOR:
				_localctx = new ParentTailIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 621;
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
		this.enterRule(_localctx, 120, HSQLParser.RULE_definition);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 624;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 629;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 625;
					this.match(HSQLParser.T__0);
					this.state = 626;
					this.match(HSQLParser.IDENTIFIER);
					}
					}
				}
				this.state = 631;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
		this.enterRule(_localctx, 122, HSQLParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
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
		let _startState: number = 124;
		this.enterRecursionRule(_localctx, 124, HSQLParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
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

				this.state = 635;
				(_localctx as PredicatedContext)._valueExpression = this.valueExpression();
				this.state = 637;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
				case 1:
					{
					this.state = 636;
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
				this.state = 639;
				this.match(HSQLParser.NOT);
				this.state = 640;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 651;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 649;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, HSQLParser.RULE_booleanExpression);
						this.state = 643;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 644;
						(_localctx as LogicalBinaryContext)._operator = this.match(HSQLParser.AND);
						this.state = 645;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, HSQLParser.RULE_booleanExpression);
						this.state = 646;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 647;
						(_localctx as LogicalBinaryContext)._operator = this.match(HSQLParser.OR);
						this.state = 648;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 653;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
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
		this.enterRule(_localctx, 126, HSQLParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 673;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				_localctx = new ComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 654;
				this.comparisonOperator();
				this.state = 655;
				(_localctx as ComparisonContext)._right = this.valueExpression();
				}
				break;

			case 2:
				_localctx = new BetweenContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.NOT) {
					{
					this.state = 657;
					this.match(HSQLParser.NOT);
					}
				}

				this.state = 660;
				this.match(HSQLParser.BETWEEN);
				this.state = 661;
				(_localctx as BetweenContext)._lower = this.valueExpression();
				this.state = 662;
				this.match(HSQLParser.AND);
				this.state = 663;
				(_localctx as BetweenContext)._upper = this.valueExpression();
				}
				break;

			case 3:
				_localctx = new InListContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.NOT) {
					{
					this.state = 665;
					this.match(HSQLParser.NOT);
					}
				}

				this.state = 668;
				this.match(HSQLParser.IN);
				this.state = 669;
				this.match(HSQLParser.BSTART_);
				this.state = 670;
				this.valueExpressionList();
				this.state = 671;
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
		this.enterRule(_localctx, 128, HSQLParser.RULE_valueExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 675;
			this.valueExpression();
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 676;
				this.match(HSQLParser.COMMA_);
				this.state = 677;
				this.valueExpression();
				}
				}
				this.state = 682;
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
		this.enterRule(_localctx, 130, HSQLParser.RULE_valueExpression);
		try {
			_localctx = new ValueExpressionDefaultContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
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
		this.enterRule(_localctx, 132, HSQLParser.RULE_primaryExpression);
		try {
			this.state = 693;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				_localctx = new IdentifierLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 685;
				this.match(HSQLParser.IDENTIFIER);
				}
				break;
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				_localctx = new NumericLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 686;
				this.number();
				}
				break;
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 687;
				this.booleanValue();
				}
				break;
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 688;
				this.string();
				}
				break;
			case HSQLParser.BSTART_:
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 689;
				this.match(HSQLParser.BSTART_);
				this.state = 690;
				this.expression();
				this.state = 691;
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
	public booleanValue(): BooleanValueContext {
		let _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, HSQLParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, HSQLParser.RULE_number);
		try {
			this.state = 702;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.DECIMAL_VALUE:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 697;
				this.match(HSQLParser.DECIMAL_VALUE);
				_localctx.dt = SingularDataType.DECIMAL
				}
				break;
			case HSQLParser.DOUBLE_VALUE:
				_localctx = new DoubleLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 699;
				this.match(HSQLParser.DOUBLE_VALUE);
				_localctx.dt=SingularDataType.REAL
				}
				break;
			case HSQLParser.INTEGER_VALUE:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 701;
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
		this.enterRule(_localctx, 138, HSQLParser.RULE_string);
		try {
			this.state = 710;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.STRING:
				_localctx = new BasicStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 704;
				this.match(HSQLParser.STRING);
				}
				break;
			case HSQLParser.UNICODE_STRING:
				_localctx = new UnicodeStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 705;
				this.match(HSQLParser.UNICODE_STRING);
				this.state = 708;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 706;
					this.match(HSQLParser.UESCAPE);
					this.state = 707;
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
	public scope(): ScopeContext {
		let _localctx: ScopeContext = new ScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, HSQLParser.RULE_scope);
		try {
			this.state = 717;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.EXPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 712;
				this.match(HSQLParser.EXPORT);
				_localctx.variableVisibility = VariableVisibility.EXPORT,(this.getInvokingContext(3) as DefinitionStmtContext).willWrapModule=true
							
				}
				break;
			case HSQLParser.SHARED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 714;
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
		this.enterRule(_localctx, 142, HSQLParser.RULE_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.DECLARE) {
				{
				{
				this.state = 719;
				this.declaration();
				this.state = 720;
				this.match(HSQLParser.SEMICOLON);
				}
				}
				this.state = 726;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 727;
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
		this.enterRule(_localctx, 144, HSQLParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 783;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				_localctx = new TableDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 729;
				this.match(HSQLParser.DECLARE);
				this.state = 730;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 731;
					this.match(HSQLParser.AS);
					}
				}

				this.state = 734;
				this.match(HSQLParser.TABLE);
				this.state = 735;
				this.match(HSQLParser.BSTART_);
				this.state = 736;
				this.colDefs();
				this.state = 737;
				this.match(HSQLParser.BEND_);
				}
				break;

			case 2:
				_localctx = new LayoutDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 739;
				this.match(HSQLParser.DECLARE);
				this.state = 740;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 742;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 741;
					this.match(HSQLParser.AS);
					}
				}

				this.state = 744;
				this.match(HSQLParser.LAYOUT);
				this.state = 745;
				this.match(HSQLParser.BSTART_);
				this.state = 746;
				this.colDefs();
				this.state = 747;
				this.match(HSQLParser.BEND_);
				}
				break;

			case 3:
				_localctx = new PlotDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 749;
				this.match(HSQLParser.DECLARE);
				this.state = 750;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 751;
					this.match(HSQLParser.AS);
					}
				}

				this.state = 754;
				this.match(HSQLParser.PLOT);
				this.state = 755;
				this.match(HSQLParser.ON);
				this.state = 756;
				this.match(HSQLParser.STRING);
				}
				break;

			case 4:
				_localctx = new TrainDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 757;
				this.match(HSQLParser.DECLARE);
				this.state = 758;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 759;
					this.match(HSQLParser.AS);
					}
				}

				this.state = 762;
				this.match(HSQLParser.TRAIN);
				this.state = 763;
				this.match(HSQLParser.STRING);
				{
				this.state = 764;
				this.declarationModelType();
				}
				this.state = 765;
				this.declarationModelOptions();
				this.state = 766;
				this.modelReturnSegment();
				this.state = 767;
				this.match(HSQLParser.WHERE);
				this.state = 768;
				this.match(HSQLParser.STRING);
				this.state = 769;
				this.modelReturnSegment();
				this.state = 770;
				this.modelImportSegment();
				}
				break;

			case 5:
				_localctx = new OneShotTrainDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 772;
				this.match(HSQLParser.DECLARE);
				this.state = 773;
				this.match(HSQLParser.IDENTIFIER);
				this.state = 775;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 774;
					this.match(HSQLParser.AS);
					}
				}

				this.state = 777;
				this.match(HSQLParser.PREDICT);
				this.state = 778;
				this.match(HSQLParser.STRING);
				this.state = 779;
				this.declarationModelType();
				this.state = 780;
				this.declarationModelOptions();
				this.state = 781;
				this.modelReturnSegment();
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
	public declarationModelOptions(): DeclarationModelOptionsContext {
		let _localctx: DeclarationModelOptionsContext = new DeclarationModelOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, HSQLParser.RULE_declarationModelOptions);
		let _la: number;
		try {
			this.state = 798;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.WHERE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 785;
				this.match(HSQLParser.WHERE);
				this.state = 786;
				this.match(HSQLParser.BSTART_);
				this.state = 787;
				this.declarationModeOption();
				this.state = 792;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HSQLParser.COMMA_) {
					{
					{
					this.state = 788;
					this.match(HSQLParser.COMMA_);
					this.state = 789;
					this.declarationModeOption();
					}
					}
					this.state = 794;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 795;
				this.match(HSQLParser.BEND_);
				}
				break;
			case HSQLParser.RETURN:
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
	public modelImportSegment(): ModelImportSegmentContext {
		let _localctx: ModelImportSegmentContext = new ModelImportSegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, HSQLParser.RULE_modelImportSegment);
		let _la: number;
		try {
			this.state = 810;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IMPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 800;
				this.match(HSQLParser.IMPORT);
				this.state = 801;
				this.definition();
				this.state = 806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HSQLParser.COMMA_) {
					{
					{
					this.state = 802;
					this.match(HSQLParser.COMMA_);
					this.state = 803;
					this.definition();
					}
					}
					this.state = 808;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case HSQLParser.SEMICOLON:
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
	public declarationModeOption(): DeclarationModeOptionContext {
		let _localctx: DeclarationModeOptionContext = new DeclarationModeOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, HSQLParser.RULE_declarationModeOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 813;
			this.match(HSQLParser.AS);
			this.state = 814;
			this.dataType();
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
	public declarationModelType(): DeclarationModelTypeContext {
		let _localctx: DeclarationModelTypeContext = new DeclarationModelTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, HSQLParser.RULE_declarationModelType);
		try {
			this.state = 820;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.INTEGER_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 816;
				this.match(HSQLParser.INTEGER_TYPE);
				}
				break;
			case HSQLParser.REAL_TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 817;
				this.match(HSQLParser.REAL_TYPE);
				_localctx.declarationIsReal=true
				}
				break;
			case HSQLParser.WHERE:
			case HSQLParser.RETURN:
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
	public modelReturnSegment(): ModelReturnSegmentContext {
		let _localctx: ModelReturnSegmentContext = new ModelReturnSegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, HSQLParser.RULE_modelReturnSegment);
		try {
			this.state = 830;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 822;
				this.match(HSQLParser.RETURN);
				this.state = 823;
				this.match(HSQLParser.TABLE);
				this.state = 824;
				this.match(HSQLParser.BSTART_);
				this.state = 825;
				this.colDefs();
				this.state = 826;
				this.match(HSQLParser.BEND_);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 828;
				this.match(HSQLParser.RETURN);
				this.state = 829;
				this.match(HSQLParser.ANYTABLE);
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
		this.enterRule(_localctx, 156, HSQLParser.RULE_colDefs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 832;
			this.colDef();
			this.state = 837;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.COMMA_) {
				{
				{
				this.state = 833;
				this.match(HSQLParser.COMMA_);
				this.state = 834;
				this.colDef();
				}
				}
				this.state = 839;
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
		this.enterRule(_localctx, 158, HSQLParser.RULE_colDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 840;
			this.dataType();
			this.state = 841;
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
		case 39:
			return this.selectFromRef_sempred(_localctx as SelectFromRefContext, predIndex);

		case 62:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03s\u034E\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x03\x02\x07\x02\xA4\n\x02\f\x02\x0E\x02\xA7\v\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04\xB5\n\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xC1\n\x06" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\xC6\n\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\t\x03\t\x03\t\x07\t\xD0\n\t\f\t\x0E\t\xD3\v\t\x03\t\x05\t\xD6\n" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xE2" +
		"\n\n\f\n\x0E\n\xE5\v\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f" +
		"\x03\f\x03\f\x07\f\xF1\n\f\f\f\x0E\f\xF4\v\f\x03\f\x05\f\xF7\n\f\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\xFE\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x07\x0E\u0105\n\x0E\f\x0E\x0E\x0E\u0108\v\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x05\x11\u0118\n\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x05\x12\u011E\n\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0123\n\x13\x03" +
		"\x13\x05\x13\u0126\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u012C" +
		"\n\x14\x05\x14\u012E\n\x14\x03\x14\x05\x14\u0131\n\x14\x03\x14\x03\x14" +
		"\x03\x14\x05\x14\u0136\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05" +
		"\x15\u013D\n\x15\x03\x15\x03\x15\x05\x15\u0141\n\x15\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u014A\n\x16\x03\x17\x05\x17" +
		"\u014D\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x05\x18\u0154\n\x18" +
		"\x03\x18\x03\x18\x05\x18\u0158\n\x18\x03\x18\x03\x18\x05\x18\u015C\n\x18" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u016B\n\x1A\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0175\n\x1C\f\x1C" +
		"\x0E\x1C\u0178\v\x1C\x03\x1C\x05\x1C\u017B\n\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u0185\n\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x05\x1F\u018B\n\x1F\x03\x1F\x05\x1F\u018E\n\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x05\x1F\u0193\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F" +
		"\u0198\n\x1F\x03\x1F\x05\x1F\u019B\n\x1F\x03 \x03 \x03!\x03!\x03\"\x03" +
		"\"\x03\"\x03\"\x03#\x03#\x03#\x07#\u01A8\n#\f#\x0E#\u01AB\v#\x03$\x03" +
		"$\x03$\x07$\u01B0\n$\f$\x0E$\u01B3\v$\x03%\x03%\x03&\x03&\x03&\x03&\x03" +
		"&\x05&\u01BC\n&\x03&\x03&\x03&\x03&\x03&\x05&\u01C3\n&\x03&\x03&\x05&" +
		"\u01C7\n&\x03&\x05&\u01CA\n&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x07" +
		"(\u01D3\n(\f(\x0E(\u01D6\v(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05" +
		")\u01E0\n)\x03)\x03)\x05)\u01E4\n)\x03)\x03)\x03)\x03)\x05)\u01EA\n)\x03" +
		")\x03)\x03)\x03)\x07)\u01F0\n)\f)\x0E)\u01F3\v)\x03)\x03)\x05)\u01F7\n" +
		")\x03)\x03)\x03)\x03)\x03)\x05)\u01FE\n)\x07)\u0200\n)\f)\x0E)\u0203\v" +
		")\x03*\x05*\u0206\n*\x03*\x03*\x03+\x03+\x05+\u020C\n+\x03+\x03+\x03+" +
		"\x05+\u0211\n+\x03+\x03+\x03+\x05+\u0216\n+\x03+\x03+\x05+\u021A\n+\x03" +
		"+\x03+\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03/\x03/\x030\x03" +
		"0\x030\x070\u022C\n0\f0\x0E0\u022F\v0\x031\x031\x051\u0233\n1\x032\x03" +
		"2\x052\u0237\n2\x033\x033\x033\x034\x034\x034\x054\u023F\n4\x035\x035" +
		"\x035\x036\x036\x037\x037\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x058\u0251\n8\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x059\u025E\n9\x03:\x03:\x03;\x03;\x03;\x07;\u0265\n;\f;\x0E;\u0268\v" +
		";\x03<\x03<\x03<\x05<\u026D\n<\x03=\x03=\x05=\u0271\n=\x03>\x03>\x03>" +
		"\x07>\u0276\n>\f>\x0E>\u0279\v>\x03?\x03?\x03@\x03@\x03@\x05@\u0280\n" +
		"@\x03@\x03@\x05@\u0284\n@\x03@\x03@\x03@\x03@\x03@\x03@\x07@\u028C\n@" +
		"\f@\x0E@\u028F\v@\x03A\x03A\x03A\x03A\x05A\u0295\nA\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x05A\u029D\nA\x03A\x03A\x03A\x03A\x03A\x05A\u02A4\nA\x03B" +
		"\x03B\x03B\x07B\u02A9\nB\fB\x0EB\u02AC\vB\x03C\x03C\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x05D\u02B8\nD\x03E\x03E\x03F\x03F\x03F\x03F\x03" +
		"F\x05F\u02C1\nF\x03G\x03G\x03G\x03G\x05G\u02C7\nG\x05G\u02C9\nG\x03H\x03" +
		"H\x03H\x03H\x03H\x05H\u02D0\nH\x03I\x03I\x03I\x07I\u02D5\nI\fI\x0EI\u02D8" +
		"\vI\x03I\x03I\x03J\x03J\x03J\x05J\u02DF\nJ\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x05J\u02E9\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05" +
		"J\u02F3\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u02FB\nJ\x03J\x03J\x03J" +
		"\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u030A\nJ\x03J" +
		"\x03J\x03J\x03J\x03J\x03J\x05J\u0312\nJ\x03K\x03K\x03K\x03K\x03K\x07K" +
		"\u0319\nK\fK\x0EK\u031C\vK\x03K\x03K\x03K\x05K\u0321\nK\x03L\x03L\x03" +
		"L\x03L\x07L\u0327\nL\fL\x0EL\u032A\vL\x03L\x05L\u032D\nL\x03M\x03M\x03" +
		"M\x03M\x03N\x03N\x03N\x03N\x05N\u0337\nN\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x03O\x05O\u0341\nO\x03P\x03P\x03P\x07P\u0346\nP\fP\x0EP\u0349\v" +
		"P\x03Q\x03Q\x03Q\x03Q\x02\x02\x04P~R\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\x02\x06\x03\x02QV\x03\x02]b\x03\x02\x15" +
		"\x17\x03\x02=>\x02\u037B\x02\xA5\x03\x02\x02\x02\x04\xAA\x03\x02\x02\x02" +
		"\x06\xB4\x03\x02\x02\x02\b\xB6\x03\x02\x02\x02\n\xC0\x03\x02\x02\x02\f" +
		"\xC2\x03\x02\x02\x02\x0E\xC7\x03\x02\x02\x02\x10\xD5\x03\x02\x02\x02\x12" +
		"\xD7\x03\x02\x02\x02\x14\xEA\x03\x02\x02\x02\x16\xF6\x03\x02\x02\x02\x18" +
		"\xFD\x03\x02\x02\x02\x1A\xFF\x03\x02\x02\x02\x1C\u010B\x03\x02\x02\x02" +
		"\x1E\u0110\x03\x02\x02\x02 \u0117\x03\x02\x02\x02\"\u0119\x03\x02\x02" +
		"\x02$\u011F\x03\x02\x02\x02&\u0127\x03\x02\x02\x02(\u0140\x03\x02\x02" +
		"\x02*\u0149\x03\x02\x02\x02,\u014C\x03\x02\x02\x02.\u0150\x03\x02\x02" +
		"\x020\u015F\x03\x02\x02\x022\u0161\x03\x02\x02\x024\u016E\x03\x02\x02" +
		"\x026\u017A\x03\x02\x02\x028\u017C\x03\x02\x02\x02:\u0180\x03\x02\x02" +
		"\x02<\u0182\x03\x02\x02\x02>\u019C\x03\x02\x02\x02@\u019E\x03\x02\x02" +
		"\x02B\u01A0\x03\x02\x02\x02D\u01A4\x03\x02\x02\x02F\u01AC\x03\x02\x02" +
		"\x02H\u01B4\x03\x02\x02\x02J\u01C9\x03\x02\x02\x02L\u01CB\x03\x02\x02" +
		"\x02N\u01CE\x03\x02\x02\x02P\u01F6\x03\x02\x02\x02R\u0205\x03\x02\x02" +
		"\x02T\u0219\x03\x02\x02\x02V\u021D\x03\x02\x02\x02X\u021F\x03\x02\x02" +
		"\x02Z\u0222\x03\x02\x02\x02\\\u0226\x03\x02\x02\x02^\u0228\x03\x02\x02" +
		"\x02`\u0232\x03\x02\x02\x02b\u0234\x03\x02\x02\x02d\u0238\x03\x02\x02" +
		"\x02f\u023B\x03\x02\x02\x02h\u0240\x03\x02\x02\x02j\u0243\x03\x02\x02" +
		"\x02l\u0245\x03\x02\x02\x02n\u0250\x03\x02\x02\x02p\u025D\x03\x02\x02" +
		"\x02r\u025F\x03\x02\x02\x02t\u0261\x03\x02\x02\x02v\u026C\x03\x02\x02" +
		"\x02x\u0270\x03\x02\x02\x02z\u0272\x03\x02\x02\x02|\u027A\x03\x02\x02" +
		"\x02~\u0283\x03\x02\x02\x02\x80\u02A3\x03\x02\x02\x02\x82\u02A5\x03\x02" +
		"\x02\x02\x84\u02AD\x03\x02\x02\x02\x86\u02B7\x03\x02\x02\x02\x88\u02B9" +
		"\x03\x02\x02\x02\x8A\u02C0\x03\x02\x02\x02\x8C\u02C8\x03\x02\x02\x02\x8E" +
		"\u02CF\x03\x02\x02\x02\x90\u02D6\x03\x02\x02\x02\x92\u0311\x03\x02\x02" +
		"\x02\x94\u0320\x03\x02\x02\x02\x96\u032C\x03\x02\x02\x02\x98\u032E\x03" +
		"\x02\x02\x02\x9A\u0336\x03\x02\x02\x02\x9C\u0340\x03\x02\x02\x02\x9E\u0342" +
		"\x03\x02\x02\x02\xA0\u034A\x03\x02\x02\x02\xA2\xA4\x05\x04\x03\x02\xA3" +
		"\xA2\x03\x02\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5" +
		"\xA6\x03\x02\x02\x02\xA6\xA8\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8" +
		"\xA9\x07\x02\x02\x03\xA9\x03\x03\x02\x02\x02\xAA\xAB\x05\x06\x04\x02\xAB" +
		"\xAC\x07P\x02\x02\xAC\x05\x03\x02\x02\x02\xAD\xAE\x05\b\x05\x02\xAE\xAF" +
		"\b\x04\x01\x02\xAF\xB5\x03\x02\x02\x02\xB0\xB1\b\x04\x01\x02\xB1\xB5\x05" +
		" \x11\x02\xB2\xB5\x05\"\x12\x02\xB3\xB5\x05\x12\n\x02\xB4\xAD\x03\x02" +
		"\x02\x02\xB4\xB0\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB3\x03\x02" +
		"\x02\x02\xB5\x07\x03\x02\x02\x02\xB6\xB7\x05\x8EH\x02\xB7\xB8\x07i\x02" +
		"\x02\xB8\xB9\x07Q\x02\x02\xB9\xBA\x05\n\x06\x02\xBA\t\x03\x02\x02\x02" +
		"\xBB\xC1\x05\x0E\b\x02\xBC\xC1\x05z>\x02\xBD\xC1\x05 \x11\x02\xBE\xC1" +
		"\x05\f\x07\x02\xBF\xC1\x050\x19\x02\xC0\xBB\x03\x02\x02\x02\xC0\xBC\x03" +
		"\x02\x02\x02\xC0\xBD\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0\xBF\x03" +
		"\x02\x02\x02\xC1\v\x03\x02\x02\x02\xC2\xC5\x07A\x02\x02\xC3\xC6\x05\x1C" +
		"\x0F\x02\xC4\xC6\x05\x1A\x0E\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC4\x03\x02" +
		"\x02\x02\xC6\r\x03\x02\x02\x02\xC7\xC8\x05z>\x02\xC8\xC9\x07k\x02\x02" +
		"\xC9\xCA\x05\x10\t\x02\xCA\xCB\x07l\x02\x02\xCB\x0F\x03\x02\x02\x02\xCC" +
		"\xD1\x05*\x16\x02\xCD\xCE\x07j\x02\x02\xCE\xD0\x05*\x16\x02\xCF\xCD\x03" +
		"\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03" +
		"\x02\x02\x02\xD2\xD6\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD6\x03" +
		"\x02\x02\x02\xD5\xCC\x03\x02\x02\x02\xD5\xD4\x03\x02\x02\x02\xD6\x11\x03" +
		"\x02\x02\x02\xD7\xD8\x07A\x02\x02\xD8\xD9\x07L\x02\x02\xD9\xDA\x07i\x02" +
		"\x02\xDA\xDB\x07k\x02\x02\xDB\xDC\x05\x16\f\x02\xDC\xDD\x07l\x02\x02\xDD" +
		"\xE3\x07m\x02\x02\xDE\xDF\x05\b\x05\x02\xDF\xE0\x07P\x02\x02\xE0\xE2\x03" +
		"\x02\x02\x02\xE1\xDE\x03\x02\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03" +
		"\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE6\x03\x02\x02\x02\xE5\xE3\x03" +
		"\x02\x02\x02\xE6\xE7\x05\x14\v\x02\xE7\xE8\x07P\x02\x02\xE8\xE9\x07n\x02" +
		"\x02\xE9\x13\x03\x02\x02\x02\xEA\xEB\x07M\x02\x02\xEB\xEC\x05z>\x02\xEC" +
		"\x15\x03\x02\x02\x02\xED\xF2\x05\x18\r\x02\xEE\xEF\x07j\x02\x02\xEF\xF1" +
		"\x05\x18\r\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF0" +
		"\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF7\x03\x02\x02\x02\xF4\xF2" +
		"\x03\x02\x02\x02\xF5\xF7\x03\x02\x02\x02\xF6\xED\x03\x02\x02\x02\xF6\xF5" +
		"\x03\x02\x02\x02\xF7\x17\x03\x02\x02\x02\xF8\xFE\x05\xA0Q\x02\xF9\xFA" +
		"\x07B\x02\x02\xFA\xFB\x05z>\x02\xFB\xFC\x07i\x02\x02\xFC\xFE\x03\x02\x02" +
		"\x02\xFD\xF8\x03\x02\x02\x02\xFD\xF9\x03\x02\x02\x02\xFE\x19\x03\x02\x02" +
		"\x02\xFF\u0100\x07K\x02\x02\u0100\u0106\x07k\x02\x02\u0101\u0102\x05\b" +
		"\x05\x02\u0102\u0103\x07P\x02\x02\u0103\u0105\x03\x02\x02\x02\u0104\u0101" +
		"\x03\x02\x02\x02\u0105\u0108\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02" +
		"\u0106\u0107\x03\x02\x02\x02\u0107\u0109\x03\x02\x02\x02\u0108\u0106\x03" +
		"\x02\x02\x02\u0109\u010A\x07l\x02\x02\u010A\x1B\x03\x02\x02\x02\u010B" +
		"\u010C\x07B\x02\x02\u010C\u010D\x07k\x02\x02\u010D\u010E\x05\x1E\x10\x02" +
		"\u010E\u010F\x07l\x02\x02\u010F\x1D\x03\x02\x02\x02\u0110\u0111\x05\x9E" +
		"P\x02\u0111\x1F\x03\x02\x02\x02\u0112\u0118\x05<\x1F\x02\u0113\u0118\x05" +
		"$\x13\x02\u0114\u0118\x05.\x18\x02\u0115\u0118\x05n8\x02\u0116\u0118\x05" +
		"&\x14\x02\u0117\u0112\x03\x02\x02\x02\u0117\u0113\x03\x02\x02\x02\u0117" +
		"\u0114\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0116\x03\x02" +
		"\x02\x02\u0118!\x03\x02\x02\x02\u0119\u011A\x07?\x02\x02\u011A\u011D\x05" +
		"t;\x02\u011B\u011C\x07@\x02\x02\u011C\u011E\x07i\x02\x02\u011D\u011B\x03" +
		"\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E#\x03\x02\x02\x02\u011F" +
		"\u0120\x07#\x02\x02\u0120\u0122\x05*\x16\x02\u0121\u0123\x05,\x17\x02" +
		"\u0122\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0125\x03" +
		"\x02\x02\x02\u0124\u0126\x07&\x02\x02\u0125\u0124\x03\x02\x02\x02\u0125" +
		"\u0126\x03\x02\x02\x02\u0126%\x03\x02\x02\x02\u0127\u0128\x07\x0E\x02" +
		"\x02\u0128\u012D\x05z>\x02\u0129\u012B\x07\x14\x02\x02\u012A\u012C\x07" +
		"C\x02\x02\u012B\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C" +
		"\u012E\x03\x02\x02\x02\u012D\u0129\x03\x02\x02\x02\u012D\u012E\x03\x02" +
		"\x02\x02\u012E\u0130\x03\x02\x02\x02\u012F\u0131\x07O\x02\x02\u0130\u012F" +
		"\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02" +
		"\u0132\u0133\x05(\x15\x02\u0133\u0135\x07c\x02\x02\u0134\u0136\x07&\x02" +
		"\x02\u0135\u0134\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\'\x03" +
		"\x02\x02\x02\u0137\u0138\x07\n\x02\x02\u0138\u0141\b\x15\x01\x02\u0139" +
		"\u013A\x07\r\x02\x02\u013A\u0141\b\x15\x01\x02\u013B\u013D\x07\v\x02\x02" +
		"\u013C\u013B\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u0141\x03" +
		"\x02\x02\x02\u013E\u013F\x07\f\x02\x02\u013F\u0141\b\x15\x01\x02\u0140" +
		"\u0137\x03\x02\x02\x02\u0140\u0139\x03\x02\x02\x02\u0140\u013C\x03\x02" +
		"\x02\x02\u0140\u013E\x03\x02\x02\x02\u0141)\x03\x02\x02\x02\u0142\u014A" +
		"\x05z>\x02\u0143\u0144\x07k\x02\x02\u0144\u0145\x05<\x1F\x02\u0145\u0146" +
		"\x07l\x02\x02\u0146\u014A\x03\x02\x02\x02\u0147\u014A\x05n8\x02\u0148" +
		"\u014A\x05\x0E\b\x02\u0149\u0142\x03\x02\x02\x02\u0149\u0143\x03\x02\x02" +
		"\x02\u0149\u0147\x03\x02\x02\x02\u0149\u0148\x03\x02\x02\x02\u014A+\x03" +
		"\x02\x02\x02\u014B\u014D\x07G\x02\x02\u014C\u014B\x03\x02\x02\x02\u014C" +
		"\u014D\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u014F\x07i\x02" +
		"\x02\u014F-\x03\x02\x02\x02\u0150\u0151\b\x18\x01\x02\u0151\u0153\x07" +
		"\"\x02\x02\u0152\u0154\x07.\x02\x02\u0153\u0152\x03\x02\x02\x02\u0153" +
		"\u0154\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0157\x05z>\x02" +
		"\u0156\u0158\x07G\x02\x02\u0157\u0156\x03\x02\x02\x02\u0157\u0158\x03" +
		"\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015B\x07i\x02\x02\u015A" +
		"\u015C\x07O\x02\x02\u015B\u015A\x03\x02\x02\x02\u015B\u015C\x03\x02\x02" +
		"\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015E\x07i\x02\x02\u015E/\x03\x02" +
		"\x02\x02\u015F\u0160\x052\x1A\x02\u01601\x03\x02\x02\x02\u0161\u0162\x07" +
		" \x02\x02\u0162\u0163\x07.\x02\x02\u0163\u0164\x05z>\x02\u0164\u0165\x07" +
		"j\x02\x02\u0165\u0166\x05z>\x02\u0166\u0167\x07E\x02\x02\u0167\u0168\x07" +
		"i\x02\x02\u0168\u016A\x054\x1B\x02\u0169\u016B\x07$\x02\x02\u016A\u0169" +
		"\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02" +
		"\u016C\u016D\x056\x1C\x02\u016D3\x03\x02\x02\x02\u016E\u016F\x07\x15\x02" +
		"\x02\u016F\u0170\x07\x1C\x02\x02\u01705\x03\x02\x02\x02\u0171\u0176\x05" +
		"8\x1D\x02\u0172\u0173\x07j\x02\x02\u0173\u0175\x058\x1D\x02\u0174\u0172" +
		"\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02" +
		"\u0176\u0177\x03\x02\x02\x02\u0177\u017B\x03\x02\x02\x02\u0178\u0176\x03" +
		"\x02\x02\x02\u0179\u017B\x03\x02\x02\x02\u017A\u0171\x03\x02\x02\x02\u017A" +
		"\u0179\x03\x02\x02\x02\u017B7\x03\x02\x02\x02\u017C\u017D\x07i\x02\x02" +
		"\u017D\u017E\x07@\x02\x02\u017E\u017F\x05:\x1E\x02\u017F9\x03\x02\x02" +
		"\x02\u0180\u0181\x05\n\x06\x02\u0181;\x03\x02\x02\x02\u0182\u0184\x07" +
		",\x02\x02\u0183\u0185\x05@!\x02\u0184\u0183\x03\x02\x02\x02\u0184\u0185" +
		"\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x05F$\x02\u0187" +
		"\u018A\x05N(\x02\u0188\u0189\x070\x02\x02\u0189\u018B\x05V,\x02\u018A" +
		"\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018D\x03\x02" +
		"\x02\x02\u018C\u018E\x05B\"\x02\u018D\u018C\x03\x02\x02\x02\u018D\u018E" +
		"\x03\x02\x02\x02\u018E\u0192\x03\x02\x02\x02\u018F\u0190\x07\x1C\x02\x02" +
		"\u0190\u0191\x07\x1F\x02\x02\u0191\u0193\x05^0\x02\u0192\u018F\x03\x02" +
		"\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0197\x03\x02\x02\x02\u0194" +
		"\u0195\x07\x1D\x02\x02\u0195\u0196\x07\x1F\x02\x02\u0196\u0198\x05> \x02" +
		"\u0197\u0194\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019A\x03" +
		"\x02\x02\x02\u0199\u019B\x05f4\x02\u019A\u0199\x03\x02\x02\x02\u019A\u019B" +
		"\x03\x02\x02\x02\u019B=\x03\x02\x02\x02\u019C\u019D\x05D#\x02\u019D?\x03" +
		"\x02\x02\x02\u019E\u019F\x072\x02\x02\u019FA\x03\x02\x02\x02\u01A0\u01A1" +
		"\x07\x1E\x02\x02\u01A1\u01A2\x07\x1F\x02\x02\u01A2\u01A3\x05\\/\x02\u01A3" +
		"C\x03\x02\x02\x02\u01A4\u01A9\x07i\x02\x02\u01A5\u01A6\x07j\x02\x02\u01A6" +
		"\u01A8\x07i\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02" +
		"\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AAE\x03" +
		"\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AC\u01B1\x05H%\x02\u01AD\u01AE" +
		"\x07j\x02\x02\u01AE\u01B0\x05H%\x02\u01AF\u01AD\x03\x02\x02\x02\u01B0" +
		"\u01B3\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02" +
		"\x02\x02\u01B2G\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B4\u01B5" +
		"\x05J&\x02\u01B5I\x03\x02\x02\x02\u01B6\u01B7\x07i\x02\x02\u01B7\u01B8" +
		"\x07k\x02\x02\u01B8\u01B9\x07Y\x02\x02\u01B9\u01BB\x07l\x02\x02\u01BA" +
		"\u01BC\x05L\'\x02\u01BB\u01BA\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02" +
		"\x02\u01BC\u01CA\x03\x02\x02\x02\u01BD\u01BE\x07i\x02\x02\u01BE\u01BF" +
		"\x07k\x02\x02\u01BF\u01C0\x07i\x02\x02\u01C0\u01C2\x07l\x02\x02\u01C1" +
		"\u01C3\x05L\'\x02\u01C2\u01C1\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02" +
		"\x02\u01C3\u01CA\x03\x02\x02\x02\u01C4\u01C6\x07i\x02\x02\u01C5\u01C7" +
		"\x05L\'\x02\u01C6\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7" +
		"\u01CA\x03\x02\x02\x02\u01C8\u01CA\x07Y\x02\x02\u01C9\u01B6\x03\x02\x02" +
		"\x02\u01C9\u01BD\x03\x02\x02\x02\u01C9\u01C4\x03\x02\x02\x02\u01C9\u01C8" +
		"\x03\x02\x02\x02\u01CAK\x03\x02\x02\x02\u01CB\u01CC\x07@\x02\x02\u01CC" +
		"\u01CD\x07i\x02\x02\u01CDM\x03\x02\x02\x02\u01CE\u01CF\x07.\x02\x02\u01CF" +
		"\u01D4\x05P)\x02\u01D0\u01D1\x07j\x02\x02\u01D1\u01D3\x05P)\x02\u01D2" +
		"\u01D0\x03\x02\x02\x02\u01D3\u01D6\x03\x02\x02\x02\u01D4\u01D2\x03\x02" +
		"\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5O\x03\x02\x02\x02\u01D6\u01D4" +
		"\x03\x02\x02\x02\u01D7\u01D8\b)\x01\x02\u01D8\u01D9\x07k\x02\x02\u01D9" +
		"\u01DA\x05<\x1F\x02\u01DA\u01DB\x07l\x02\x02\u01DB\u01DC\x05R*\x02\u01DC" +
		"\u01F7\x03\x02\x02\x02\u01DD\u01DF\x05z>\x02\u01DE\u01E0\x05R*\x02\u01DF" +
		"\u01DE\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01F7\x03\x02" +
		"\x02\x02\u01E1\u01E3\x07c\x02\x02\u01E2\u01E4\x07O\x02\x02\u01E3\u01E2" +
		"\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02" +
		"\u01E5\u01E6\x05(\x15\x02\u01E6\u01E7\x07B\x02\x02\u01E7\u01E9\x05z>\x02" +
		"\u01E8\u01EA\x05R*\x02\u01E9\u01E8\x03\x02\x02\x02\u01E9\u01EA\x03\x02" +
		"\x02\x02\u01EA\u01F7\x03\x02\x02\x02\u01EB\u01EC\x07k\x02\x02\u01EC\u01F1" +
		"\x05P)\x02\u01ED\u01EE\x07j\x02\x02\u01EE\u01F0\x05P)\x02\u01EF\u01ED" +
		"\x03\x02\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02" +
		"\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F4\x03\x02\x02\x02\u01F3\u01F1\x03" +
		"\x02\x02\x02\u01F4\u01F5\x07l\x02\x02\u01F5\u01F7\x03\x02\x02\x02\u01F6" +
		"\u01D7\x03\x02\x02\x02\u01F6\u01DD\x03\x02\x02\x02\u01F6\u01E1\x03\x02" +
		"\x02\x02\u01F6\u01EB\x03\x02\x02\x02\u01F7\u0201\x03\x02\x02\x02\u01F8" +
		"\u01F9\f\x03\x02\x02\u01F9\u01FA\x05T+\x02\u01FA\u01FB\x05P)\x02\u01FB" +
		"\u01FD\x05X-\x02\u01FC\u01FE\x05R*\x02\u01FD\u01FC\x03\x02\x02\x02\u01FD" +
		"\u01FE\x03\x02\x02\x02\u01FE\u0200\x03\x02\x02\x02\u01FF\u01F8\x03\x02" +
		"\x02\x02\u0200\u0203\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0201" +
		"\u0202\x03\x02\x02\x02\u0202Q\x03\x02\x02\x02\u0203\u0201\x03\x02\x02" +
		"\x02\u0204\u0206\x07@\x02\x02\u0205\u0204\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207" +
		"\u0208\x07i\x02\x02\u0208S\x03\x02\x02\x02\u0209\u020B\x077\x02\x02\u020A" +
		"\u020C\x07:\x02\x02\u020B\u020A\x03\x02\x02\x02\u020B\u020C\x03\x02\x02" +
		"\x02\u020C\u020D\x03\x02\x02\x02\u020D\u021A\b+\x01\x02\u020E\u0210\x07" +
		"8\x02\x02\u020F\u0211\x07:\x02\x02\u0210\u020F\x03\x02\x02\x02\u0210\u0211" +
		"\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u021A\b+\x01\x02\u0213" +
		"\u0215\x079\x02\x02\u0214\u0216\x07:\x02\x02\u0215\u0214\x03\x02\x02\x02" +
		"\u0215\u0216\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u021A\b" +
		"+\x01\x02\u0218\u021A\x076\x02\x02\u0219\u0209\x03\x02\x02\x02\u0219\u020E" +
		"\x03\x02\x02\x02\u0219\u0213\x03\x02\x02\x02\u0219\u0218\x03\x02\x02\x02" +
		"\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021C\x07" +
		"5\x02\x02\u021CU\x03\x02\x02\x02\u021D\u021E\x05~@\x02\u021EW\x03\x02" +
		"\x02\x02\u021F\u0220\x07(\x02\x02\u0220\u0221\x05Z.\x02\u0221Y\x03\x02" +
		"\x02\x02\u0222\u0223\x05z>\x02\u0223\u0224\x05j6\x02\u0224\u0225\x05z" +
		">\x02\u0225[\x03\x02\x02\x02\u0226\u0227\x05D#\x02\u0227]\x03\x02\x02" +
		"\x02\u0228\u022D\x05`1\x02\u0229\u022A\x07j\x02\x02\u022A\u022C\x05`1" +
		"\x02\u022B\u0229\x03\x02\x02\x02\u022C\u022F\x03\x02\x02\x02\u022D\u022B" +
		"\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E_\x03\x02\x02\x02\u022F" +
		"\u022D\x03\x02\x02\x02\u0230\u0233\x05b2\x02\u0231\u0233\x05d3\x02\u0232" +
		"\u0230\x03\x02\x02\x02\u0232\u0231\x03\x02\x02\x02\u0233a\x03\x02\x02" +
		"\x02\u0234\u0236\x07i\x02\x02\u0235\u0237\x07\x1A\x02\x02\u0236\u0235" +
		"\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237c\x03\x02\x02\x02\u0238" +
		"\u0239\x07i\x02\x02\u0239\u023A\x07\x1B\x02\x02\u023Ae\x03\x02\x02\x02" +
		"\u023B\u023C\x07I\x02\x02\u023C\u023E\x07f\x02\x02\u023D\u023F\x05h5\x02" +
		"\u023E\u023D\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023Fg\x03\x02" +
		"\x02\x02\u0240\u0241\x07J\x02\x02\u0241\u0242\x07f\x02\x02\u0242i\x03" +
		"\x02\x02\x02\u0243\u0244\t\x02\x02\x02\u0244k\x03\x02\x02\x02\u0245\u0246" +
		"\t\x03\x02\x02\u0246m\x03\x02\x02\x02\u0247\u0248\x05\x8AF\x02\u0248\u0249" +
		"\b8\x01\x02\u0249\u0251\x03\x02\x02\x02\u024A\u024B\x05\x8CG\x02\u024B" +
		"\u024C\b8\x01\x02\u024C\u0251\x03\x02\x02\x02\u024D\u024E\x05\x88E\x02" +
		"\u024E\u024F\b8\x01\x02\u024F\u0251\x03\x02\x02\x02\u0250\u0247\x03\x02" +
		"\x02\x02\u0250\u024A\x03\x02\x02\x02\u0250\u024D\x03\x02\x02\x02\u0251" +
		"o\x03\x02\x02\x02\u0252\u0253\x07\x04\x02\x02\u0253\u025E\b9\x01\x02\u0254" +
		"\u025E\x07\x05\x02\x02\u0255\u0256\x07\x06\x02\x02\u0256\u025E\b9\x01" +
		"\x02\u0257\u0258\x07\x07\x02\x02\u0258\u025E\b9\x01\x02\u0259\u025A\x07" +
		"\b\x02\x02\u025A\u025E\b9\x01\x02\u025B\u025C\x07\t\x02\x02\u025C\u025E" +
		"\b9\x01\x02\u025D\u0252\x03\x02\x02\x02\u025D\u0254\x03\x02\x02\x02\u025D" +
		"\u0255\x03\x02\x02\x02\u025D\u0257\x03\x02\x02\x02\u025D\u0259\x03\x02" +
		"\x02\x02\u025D\u025B\x03\x02\x02\x02\u025Eq\x03\x02\x02\x02\u025F\u0260" +
		"\t\x04\x02\x02\u0260s\x03\x02\x02\x02\u0261\u0266\x05v<\x02\u0262\u0263" +
		"\x07\x03\x02\x02\u0263\u0265\x05x=\x02\u0264\u0262\x03\x02\x02\x02\u0265" +
		"\u0268\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0266\u0267\x03\x02" +
		"\x02\x02\u0267u\x03\x02\x02\x02\u0268\u0266\x03\x02\x02\x02\u0269\u026D" +
		"\x07i\x02\x02\u026A\u026D\x07[\x02\x02\u026B\u026D\x07\\\x02\x02\u026C" +
		"\u0269\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026B\x03\x02" +
		"\x02\x02\u026Dw\x03\x02\x02\x02\u026E\u0271\x07i\x02\x02\u026F\u0271\x07" +
		"\\\x02\x02\u0270\u026E\x03\x02\x02\x02\u0270\u026F\x03\x02\x02\x02\u0271" +
		"y\x03\x02\x02\x02\u0272\u0277\x07i\x02\x02\u0273\u0274\x07\x03\x02\x02" +
		"\u0274\u0276\x07i\x02\x02\u0275\u0273\x03\x02\x02\x02\u0276\u0279\x03" +
		"\x02\x02\x02\u0277\u0275\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278" +
		"{\x03\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u027A\u027B\x05~@\x02\u027B" +
		"}\x03\x02\x02\x02\u027C\u027D\b@\x01\x02\u027D\u027F\x05\x84C\x02\u027E" +
		"\u0280\x05\x80A\x02\u027F\u027E\x03\x02\x02\x02\u027F\u0280\x03\x02\x02" +
		"\x02\u0280\u0284\x03\x02\x02\x02\u0281\u0282\x07_\x02\x02\u0282\u0284" +
		"\x05~@\x05\u0283\u027C\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0284" +
		"\u028D\x03\x02\x02\x02\u0285\u0286\f\x04\x02\x02\u0286\u0287\x07]\x02" +
		"\x02\u0287\u028C\x05~@\x05\u0288\u0289\f\x03\x02\x02\u0289\u028A\x07^" +
		"\x02\x02\u028A\u028C\x05~@\x04\u028B\u0285\x03\x02\x02\x02\u028B\u0288" +
		"\x03\x02\x02\x02\u028C\u028F\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02" +
		"\u028D\u028E\x03\x02\x02\x02\u028E\x7F\x03\x02\x02\x02\u028F\u028D\x03" +
		"\x02\x02\x02\u0290\u0291\x05j6\x02\u0291\u0292\x05\x84C\x02\u0292\u02A4" +
		"\x03\x02\x02\x02\u0293\u0295\x07_\x02\x02\u0294\u0293\x03\x02\x02\x02" +
		"\u0294\u0295\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296\u0297\x07" +
		"a\x02\x02\u0297\u0298\x05\x84C\x02\u0298\u0299\x07]\x02\x02\u0299\u029A" +
		"\x05\x84C\x02\u029A\u02A4\x03\x02\x02\x02\u029B\u029D\x07_\x02\x02\u029C" +
		"\u029B\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029E\x03\x02" +
		"\x02\x02\u029E\u029F\x07`\x02\x02\u029F\u02A0\x07k\x02\x02\u02A0\u02A1" +
		"\x05\x82B\x02\u02A1\u02A2\x07l\x02\x02\u02A2\u02A4\x03\x02\x02\x02\u02A3" +
		"\u0290\x03\x02\x02\x02\u02A3\u0294\x03\x02\x02\x02\u02A3\u029C\x03\x02" +
		"\x02\x02\u02A4\x81\x03\x02\x02\x02\u02A5\u02AA\x05\x84C\x02\u02A6\u02A7" +
		"\x07j\x02\x02\u02A7\u02A9\x05\x84C\x02\u02A8\u02A6\x03\x02\x02\x02\u02A9" +
		"\u02AC\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AA\u02AB\x03\x02" +
		"\x02\x02\u02AB\x83\x03\x02\x02\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD\u02AE" +
		"\x05\x86D\x02\u02AE\x85\x03\x02\x02\x02\u02AF\u02B8\x07i\x02\x02\u02B0" +
		"\u02B8\x05\x8AF\x02\u02B1\u02B8\x05\x88E\x02\u02B2\u02B8\x05\x8CG\x02" +
		"\u02B3\u02B4\x07k\x02\x02\u02B4\u02B5\x05|?\x02\u02B5\u02B6\x07l\x02\x02" +
		"\u02B6\u02B8\x03\x02\x02\x02\u02B7\u02AF\x03\x02\x02\x02\u02B7\u02B0\x03" +
		"\x02\x02\x02\u02B7\u02B1\x03\x02\x02\x02\u02B7\u02B2\x03\x02\x02\x02\u02B7" +
		"\u02B3\x03\x02\x02\x02\u02B8\x87\x03\x02\x02\x02\u02B9\u02BA\t\x05\x02" +
		"\x02\u02BA\x89\x03\x02\x02\x02\u02BB\u02BC\x07g\x02\x02\u02BC\u02C1\b" +
		"F\x01\x02\u02BD\u02BE\x07h\x02\x02\u02BE\u02C1\bF\x01\x02\u02BF\u02C1" +
		"\x07f\x02\x02\u02C0\u02BB\x03\x02\x02\x02\u02C0\u02BD\x03\x02\x02\x02" +
		"\u02C0\u02BF\x03\x02\x02\x02\u02C1\x8B\x03\x02\x02\x02\u02C2\u02C9\x07" +
		"c\x02\x02\u02C3\u02C6\x07d\x02\x02\u02C4\u02C5\x07N\x02\x02\u02C5\u02C7" +
		"\x07c\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02" +
		"\u02C7\u02C9\x03\x02\x02\x02\u02C8\u02C2\x03\x02\x02\x02\u02C8\u02C3\x03" +
		"\x02\x02\x02\u02C9\x8D\x03\x02\x02\x02\u02CA\u02CB\x07\x18\x02\x02\u02CB" +
		"\u02D0\bH\x01\x02\u02CC\u02CD\x07\x19\x02\x02\u02CD\u02D0\bH\x01\x02\u02CE" +
		"\u02D0\x03\x02\x02\x02\u02CF\u02CA\x03\x02\x02\x02\u02CF\u02CC\x03\x02" +
		"\x02\x02\u02CF\u02CE\x03\x02\x02\x02\u02D0\x8F\x03\x02\x02\x02\u02D1\u02D2" +
		"\x05\x92J\x02\u02D2\u02D3\x07P\x02\x02\u02D3\u02D5\x03\x02\x02\x02\u02D4" +
		"\u02D1\x03\x02\x02\x02\u02D5\u02D8\x03\x02\x02\x02\u02D6\u02D4\x03\x02" +
		"\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D9\x03\x02\x02\x02\u02D8" +
		"\u02D6\x03\x02\x02\x02\u02D9\u02DA\x07\x02\x02\x03\u02DA\x91\x03\x02\x02" +
		"\x02\u02DB\u02DC\x07-\x02\x02\u02DC\u02DE\x07i\x02\x02\u02DD\u02DF\x07" +
		"@\x02\x02\u02DE\u02DD\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF" +
		"\u02E0\x03\x02\x02\x02\u02E0\u02E1\x07\x12\x02\x02\u02E1\u02E2\x07k\x02" +
		"\x02\u02E2\u02E3\x05\x9EP\x02\u02E3\u02E4\x07l\x02\x02\u02E4\u0312\x03" +
		"\x02\x02\x02\u02E5\u02E6\x07-\x02\x02\u02E6\u02E8\x07i\x02\x02\u02E7\u02E9" +
		"\x07@\x02\x02\u02E8\u02E7\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02" +
		"\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EB\x07B\x02\x02\u02EB\u02EC\x07" +
		"k\x02\x02\u02EC\u02ED\x05\x9EP\x02\u02ED\u02EE\x07l\x02\x02\u02EE\u0312" +
		"\x03\x02\x02\x02\u02EF\u02F0\x07-\x02\x02\u02F0\u02F2\x07i\x02\x02\u02F1" +
		"\u02F3\x07@\x02\x02\u02F2\u02F1\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02" +
		"\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F5\x07\"\x02\x02\u02F5\u02F6" +
		"\x07(\x02\x02\u02F6\u0312\x07c\x02\x02\u02F7\u02F8\x07-\x02\x02\u02F8" +
		"\u02FA\x07i\x02\x02\u02F9\u02FB\x07@\x02\x02\u02FA\u02F9\x03\x02\x02\x02" +
		"\u02FA\u02FB\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC\u02FD\x07" +
		" \x02\x02\u02FD\u02FE\x07c\x02\x02\u02FE\u02FF\x05\x9AN\x02\u02FF\u0300" +
		"\x05\x94K\x02\u0300\u0301\x05\x9CO\x02\u0301\u0302\x070\x02\x02\u0302" +
		"\u0303\x07c\x02\x02\u0303\u0304\x05\x9CO\x02\u0304\u0305\x05\x96L\x02" +
		"\u0305\u0312\x03\x02\x02\x02\u0306\u0307\x07-\x02\x02\u0307\u0309\x07" +
		"i\x02\x02\u0308\u030A\x07@\x02\x02\u0309\u0308\x03\x02\x02\x02\u0309\u030A" +
		"\x03\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030C\x07!\x02\x02" +
		"\u030C\u030D\x07c\x02\x02\u030D\u030E\x05\x9AN\x02\u030E\u030F\x05\x94" +
		"K\x02\u030F\u0310\x05\x9CO\x02\u0310\u0312\x03\x02\x02\x02\u0311\u02DB" +
		"\x03\x02\x02\x02\u0311\u02E5\x03\x02\x02\x02\u0311\u02EF\x03\x02\x02\x02" +
		"\u0311\u02F7\x03\x02\x02\x02\u0311\u0306\x03\x02\x02\x02\u0312\x93\x03" +
		"\x02\x02\x02\u0313\u0314\x070\x02\x02\u0314\u0315\x07k\x02\x02\u0315\u031A" +
		"\x05\x98M\x02\u0316\u0317\x07j\x02\x02\u0317\u0319\x05\x98M\x02\u0318" +
		"\u0316\x03\x02\x02\x02\u0319\u031C\x03\x02\x02\x02\u031A\u0318\x03\x02" +
		"\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B\u031D\x03\x02\x02\x02\u031C" +
		"\u031A\x03\x02\x02\x02\u031D\u031E\x07l\x02\x02\u031E\u0321\x03\x02\x02" +
		"\x02\u031F\u0321\x03\x02\x02\x02\u0320\u0313\x03\x02\x02\x02\u0320\u031F" +
		"\x03\x02\x02\x02\u0321\x95\x03\x02\x02\x02\u0322\u0323\x07?\x02\x02\u0323" +
		"\u0328\x05z>\x02\u0324\u0325\x07j\x02\x02\u0325\u0327\x05z>\x02\u0326" +
		"\u0324\x03\x02\x02\x02\u0327\u032A\x03\x02\x02\x02\u0328\u0326\x03\x02" +
		"\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032D\x03\x02\x02\x02\u032A" +
		"\u0328\x03\x02\x02\x02\u032B\u032D\x03\x02\x02\x02\u032C\u0322\x03\x02" +
		"\x02\x02\u032C\u032B\x03\x02\x02\x02\u032D\x97\x03\x02\x02\x02\u032E\u032F" +
		"\x07i\x02\x02\u032F\u0330\x07@\x02\x02\u0330\u0331\x05p9\x02\u0331\x99" +
		"\x03\x02\x02\x02\u0332\u0337\x07\x05\x02\x02\u0333\u0334\x07\x04\x02\x02" +
		"\u0334\u0337\bN\x01\x02\u0335\u0337\x03\x02\x02\x02\u0336\u0332\x03\x02" +
		"\x02\x02\u0336\u0333\x03\x02\x02\x02\u0336\u0335\x03\x02\x02\x02\u0337" +
		"\x9B\x03\x02\x02\x02\u0338\u0339\x07M\x02\x02\u0339\u033A\x07\x12\x02" +
		"\x02\u033A\u033B\x07k\x02\x02\u033B\u033C\x05\x9EP\x02\u033C\u033D\x07" +
		"l\x02\x02\u033D\u0341\x03\x02\x02\x02\u033E\u033F\x07M\x02\x02\u033F\u0341" +
		"\x07\x11\x02\x02\u0340\u0338\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02" +
		"\u0341\x9D\x03\x02\x02\x02\u0342\u0347\x05\xA0Q\x02\u0343\u0344\x07j\x02" +
		"\x02\u0344\u0346\x05\xA0Q\x02\u0345\u0343\x03\x02\x02\x02\u0346\u0349" +
		"\x03\x02\x02\x02\u0347\u0345\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02" +
		"\u0348\x9F\x03\x02\x02\x02\u0349\u0347\x03\x02\x02\x02\u034A\u034B\x05" +
		"p9\x02\u034B\u034C\x07i\x02\x02\u034C\xA1\x03\x02\x02\x02]\xA5\xB4\xC0" +
		"\xC5\xD1\xD5\xE3\xF2\xF6\xFD\u0106\u0117\u011D\u0122\u0125\u012B\u012D" +
		"\u0130\u0135\u013C\u0140\u0149\u014C\u0153\u0157\u015B\u016A\u0176\u017A" +
		"\u0184\u018A\u018D\u0192\u0197\u019A\u01A9\u01B1\u01BB\u01C2\u01C6\u01C9" +
		"\u01D4\u01DF\u01E3\u01E9\u01F1\u01F6\u01FD\u0201\u0205\u020B\u0210\u0215" +
		"\u0219\u022D\u0232\u0236\u023E\u0250\u025D\u0266\u026C\u0270\u0277\u027F" +
		"\u0283\u028B\u028D\u0294\u029C\u02A3\u02AA\u02B7\u02C0\u02C6\u02C8\u02CF" +
		"\u02D6\u02DE\u02E8\u02F2\u02FA\u0309\u0311\u031A\u0320\u0328\u032C\u0336" +
		"\u0340\u0347";
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
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public definition(): DefinitionContext | undefined {
		return this.tryGetRuleContext(0, DefinitionContext);
	}
	public actionStmt(): ActionStmtContext | undefined {
		return this.tryGetRuleContext(0, ActionStmtContext);
	}
	public createStmt(): CreateStmtContext | undefined {
		return this.tryGetRuleContext(0, CreateStmtContext);
	}
	public mlStmt(): MlStmtContext | undefined {
		return this.tryGetRuleContext(0, MlStmtContext);
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


export class FunctionCallContext extends ParserRuleContext {
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	public BSTART_(): TerminalNode { return this.getToken(HSQLParser.BSTART_, 0); }
	public functionCallArgs(): FunctionCallArgsContext {
		return this.getRuleContext(0, FunctionCallArgsContext);
	}
	public BEND_(): TerminalNode { return this.getToken(HSQLParser.BEND_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_functionCall; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallArgsContext extends ParserRuleContext {
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
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
	public get ruleIndex(): number { return HSQLParser.RULE_functionCallArgs; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitFunctionCallArgs) {
			return visitor.visitFunctionCallArgs(this);
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
	public BSTART_(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.BSTART_, 0); }
	public selectStmt(): SelectStmtContext | undefined {
		return this.tryGetRuleContext(0, SelectStmtContext);
	}
	public BEND_(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.BEND_, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
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


export class MlStmtContext extends ParserRuleContext {
	public train(): TrainContext {
		return this.getRuleContext(0, TrainContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_mlStmt; }
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
	public _method!: Token;
	public TRAIN(): TerminalNode { return this.getToken(HSQLParser.TRAIN, 0); }
	public FROM(): TerminalNode { return this.getToken(HSQLParser.FROM, 0); }
	public COMMA_(): TerminalNode { return this.getToken(HSQLParser.COMMA_, 0); }
	public METHOD(): TerminalNode { return this.getToken(HSQLParser.METHOD, 0); }
	public trainAddOrderSegment(): TrainAddOrderSegmentContext {
		return this.getRuleContext(0, TrainAddOrderSegmentContext);
	}
	public trainOptions(): TrainOptionsContext {
		return this.getRuleContext(0, TrainOptionsContext);
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
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.OPTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_train; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTrain) {
			return visitor.visitTrain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrainAddOrderSegmentContext extends ParserRuleContext {
	public ADD(): TerminalNode { return this.getToken(HSQLParser.ADD, 0); }
	public ORDER(): TerminalNode { return this.getToken(HSQLParser.ORDER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_trainAddOrderSegment; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTrainAddOrderSegment) {
			return visitor.visitTrainAddOrderSegment(this);
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
	public AS(): TerminalNode { return this.getToken(HSQLParser.AS, 0); }
	public trainValue(): TrainValueContext {
		return this.getRuleContext(0, TrainValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_trainOption; }
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
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_trainValue; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTrainValue) {
			return visitor.visitTrainValue(this);
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
export class TrainDeclarationContext extends DeclarationContext {
	public DECLARE(): TerminalNode { return this.getToken(HSQLParser.DECLARE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public TRAIN(): TerminalNode { return this.getToken(HSQLParser.TRAIN, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.STRING);
		} else {
			return this.getToken(HSQLParser.STRING, i);
		}
	}
	public declarationModelOptions(): DeclarationModelOptionsContext {
		return this.getRuleContext(0, DeclarationModelOptionsContext);
	}
	public modelReturnSegment(): ModelReturnSegmentContext[];
	public modelReturnSegment(i: number): ModelReturnSegmentContext;
	public modelReturnSegment(i?: number): ModelReturnSegmentContext | ModelReturnSegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModelReturnSegmentContext);
		} else {
			return this.getRuleContext(i, ModelReturnSegmentContext);
		}
	}
	public WHERE(): TerminalNode { return this.getToken(HSQLParser.WHERE, 0); }
	public modelImportSegment(): ModelImportSegmentContext {
		return this.getRuleContext(0, ModelImportSegmentContext);
	}
	public declarationModelType(): DeclarationModelTypeContext | undefined {
		return this.tryGetRuleContext(0, DeclarationModelTypeContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.AS, 0); }
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTrainDeclaration) {
			return visitor.visitTrainDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OneShotTrainDeclarationContext extends DeclarationContext {
	public DECLARE(): TerminalNode { return this.getToken(HSQLParser.DECLARE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public PREDICT(): TerminalNode { return this.getToken(HSQLParser.PREDICT, 0); }
	public STRING(): TerminalNode { return this.getToken(HSQLParser.STRING, 0); }
	public declarationModelType(): DeclarationModelTypeContext {
		return this.getRuleContext(0, DeclarationModelTypeContext);
	}
	public declarationModelOptions(): DeclarationModelOptionsContext {
		return this.getRuleContext(0, DeclarationModelOptionsContext);
	}
	public modelReturnSegment(): ModelReturnSegmentContext {
		return this.getRuleContext(0, ModelReturnSegmentContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.AS, 0); }
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitOneShotTrainDeclaration) {
			return visitor.visitOneShotTrainDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationModelOptionsContext extends ParserRuleContext {
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.WHERE, 0); }
	public BSTART_(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.BSTART_, 0); }
	public declarationModeOption(): DeclarationModeOptionContext[];
	public declarationModeOption(i: number): DeclarationModeOptionContext;
	public declarationModeOption(i?: number): DeclarationModeOptionContext | DeclarationModeOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationModeOptionContext);
		} else {
			return this.getRuleContext(i, DeclarationModeOptionContext);
		}
	}
	public BEND_(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.BEND_, 0); }
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
	public get ruleIndex(): number { return HSQLParser.RULE_declarationModelOptions; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDeclarationModelOptions) {
			return visitor.visitDeclarationModelOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModelImportSegmentContext extends ParserRuleContext {
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.IMPORT, 0); }
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
	public get ruleIndex(): number { return HSQLParser.RULE_modelImportSegment; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitModelImportSegment) {
			return visitor.visitModelImportSegment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationModeOptionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public AS(): TerminalNode { return this.getToken(HSQLParser.AS, 0); }
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_declarationModeOption; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDeclarationModeOption) {
			return visitor.visitDeclarationModeOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationModelTypeContext extends ParserRuleContext {
	public declarationIsReal: boolean = false;
	public INTEGER_TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.INTEGER_TYPE, 0); }
	public REAL_TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.REAL_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_declarationModelType; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitDeclarationModelType) {
			return visitor.visitDeclarationModelType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModelReturnSegmentContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(HSQLParser.RETURN, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.TABLE, 0); }
	public BSTART_(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.BSTART_, 0); }
	public colDefs(): ColDefsContext | undefined {
		return this.tryGetRuleContext(0, ColDefsContext);
	}
	public BEND_(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.BEND_, 0); }
	public ANYTABLE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.ANYTABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_modelReturnSegment; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitModelReturnSegment) {
			return visitor.visitModelReturnSegment(this);
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


