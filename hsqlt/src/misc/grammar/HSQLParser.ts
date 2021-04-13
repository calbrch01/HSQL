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

import { HSQLVisitor } from "./HSQLVisitor";


export class HSQLParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly OUTER = 6;
	public static readonly ONLY = 7;
	public static readonly REAL_TYPE = 8;
	public static readonly INTEGER_TYPE = 9;
	public static readonly DECIMAL_TYPE = 10;
	public static readonly VARSTRING_TYPE = 11;
	public static readonly STRING_TYPE = 12;
	public static readonly UNSTABLE = 13;
	public static readonly STABLE = 14;
	public static readonly TABLE = 15;
	public static readonly EXPORT = 16;
	public static readonly AND = 17;
	public static readonly AS = 18;
	public static readonly ASC = 19;
	public static readonly BETWEEN = 20;
	public static readonly BY = 21;
	public static readonly DESC = 22;
	public static readonly DEPENDENT = 23;
	public static readonly FROM = 24;
	public static readonly GROUP = 25;
	public static readonly IMPORT = 26;
	public static readonly OPTION = 27;
	public static readonly OPTIONS = 28;
	public static readonly OVERWRITE = 29;
	public static readonly UPDATE = 30;
	public static readonly IN = 31;
	public static readonly ON = 32;
	public static readonly INDEPENDENT = 33;
	public static readonly IDCOLUMN = 34;
	public static readonly CREATE = 35;
	public static readonly LAYOUT = 36;
	public static readonly TRAIN = 37;
	public static readonly FILE = 38;
	public static readonly MAP = 39;
	public static readonly METHOD = 40;
	public static readonly NOT = 41;
	public static readonly OR = 42;
	public static readonly ORDER = 43;
	public static readonly OUTPUT = 44;
	public static readonly PLOT = 45;
	public static readonly PREDICT = 46;
	public static readonly PROJECT = 47;
	public static readonly SELECT = 48;
	public static readonly JOIN = 49;
	public static readonly INNER = 50;
	public static readonly LEFT = 51;
	public static readonly RIGHT = 52;
	public static readonly FULL = 53;
	public static readonly TITLE = 54;
	public static readonly EXPIRE = 55;
	public static readonly TRUE = 56;
	public static readonly FALSE = 57;
	public static readonly UESCAPE = 58;
	public static readonly WHERE = 59;
	public static readonly TYPE = 60;
	public static readonly NCOMPILE = 61;
	public static readonly SEMICOLON = 62;
	public static readonly EQ = 63;
	public static readonly NEQ = 64;
	public static readonly LT = 65;
	public static readonly LTE = 66;
	public static readonly GT = 67;
	public static readonly GTE = 68;
	public static readonly STRING = 69;
	public static readonly UNICODE_STRING = 70;
	public static readonly BINARY_LITERAL = 71;
	public static readonly INTEGER_VALUE = 72;
	public static readonly DECIMAL_VALUE = 73;
	public static readonly DOUBLE_VALUE = 74;
	public static readonly IDENTIFIER = 75;
	public static readonly ECL_SNIPPETS = 76;
	public static readonly SIMPLE_COMMENT = 77;
	public static readonly SIMPLE_C_COMMENT = 78;
	public static readonly BRACKETED_COMMENT = 79;
	public static readonly WS = 80;
	public static readonly RULE_program = 0;
	public static readonly RULE_completestmt = 1;
	public static readonly RULE_stmt = 2;
	public static readonly RULE_actionStmt = 3;
	public static readonly RULE_assignStmt = 4;
	public static readonly RULE_typeDefStmt = 5;
	public static readonly RULE_typeDefExport = 6;
	public static readonly RULE_mapExportable = 7;
	public static readonly RULE_tableExport = 8;
	public static readonly RULE_layoutExport = 9;
	public static readonly RULE_identifierExport = 10;
	public static readonly RULE_importStmt = 11;
	public static readonly RULE_expr = 12;
	public static readonly RULE_simpleIdentifier = 13;
	public static readonly RULE_outputStmt = 14;
	public static readonly RULE_outputVariant = 15;
	public static readonly RULE_namedOutputStatement = 16;
	public static readonly RULE_namedOutputString = 17;
	public static readonly RULE_fileOutputStatement = 18;
	public static readonly RULE_outputUpdateOption = 19;
	public static readonly RULE_outputExpireOption = 20;
	public static readonly RULE_plotStmt = 21;
	public static readonly RULE_mlStmt = 22;
	public static readonly RULE_train = 23;
	public static readonly RULE_elementaryML = 24;
	public static readonly RULE_trainOptions = 25;
	public static readonly RULE_trainOption = 26;
	public static readonly RULE_trainValue = 27;
	public static readonly RULE_predict = 28;
	public static readonly RULE_selectStmt = 29;
	public static readonly RULE_joinClause = 30;
	public static readonly RULE_joinType = 31;
	public static readonly RULE_selectColumns = 32;
	public static readonly RULE_selectCol = 33;
	public static readonly RULE_aggregatedSelectColumn = 34;
	public static readonly RULE_selectColumn = 35;
	public static readonly RULE_selectFromClause = 36;
	public static readonly RULE_nestedSelectStmt = 37;
	public static readonly RULE_selectDataset = 38;
	public static readonly RULE_selectDatasetFile = 39;
	public static readonly RULE_selectTableName = 40;
	public static readonly RULE_selectWhereClause = 41;
	public static readonly RULE_orderByClause = 42;
	public static readonly RULE_sortItem = 43;
	public static readonly RULE_ascSortItem = 44;
	public static readonly RULE_descSortItem = 45;
	public static readonly RULE_groupByClause = 46;
	public static readonly RULE_layoutStmt = 47;
	public static readonly RULE_layoutContent = 48;
	public static readonly RULE_inlineStmt = 49;
	public static readonly RULE_qualifiedIdentifier = 50;
	public static readonly RULE_dataType = 51;
	public static readonly RULE_expression = 52;
	public static readonly RULE_booleanExpression = 53;
	public static readonly RULE_predicate = 54;
	public static readonly RULE_valueExpression = 55;
	public static readonly RULE_primaryExpression = 56;
	public static readonly RULE_number = 57;
	public static readonly RULE_string = 58;
	public static readonly RULE_booleanValue = 59;
	public static readonly RULE_comparisonOperator = 60;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "completestmt", "stmt", "actionStmt", "assignStmt", "typeDefStmt", 
		"typeDefExport", "mapExportable", "tableExport", "layoutExport", "identifierExport", 
		"importStmt", "expr", "simpleIdentifier", "outputStmt", "outputVariant", 
		"namedOutputStatement", "namedOutputString", "fileOutputStatement", "outputUpdateOption", 
		"outputExpireOption", "plotStmt", "mlStmt", "train", "elementaryML", "trainOptions", 
		"trainOption", "trainValue", "predict", "selectStmt", "joinClause", "joinType", 
		"selectColumns", "selectCol", "aggregatedSelectColumn", "selectColumn", 
		"selectFromClause", "nestedSelectStmt", "selectDataset", "selectDatasetFile", 
		"selectTableName", "selectWhereClause", "orderByClause", "sortItem", "ascSortItem", 
		"descSortItem", "groupByClause", "layoutStmt", "layoutContent", "inlineStmt", 
		"qualifiedIdentifier", "dataType", "expression", "booleanExpression", 
		"predicate", "valueExpression", "primaryExpression", "number", "string", 
		"booleanValue", "comparisonOperator",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "','", "')'", "'*'", "'.'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'='", undefined, 
		"'<'", "'<='", "'>'", "'>='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "OUTER", 
		"ONLY", "REAL_TYPE", "INTEGER_TYPE", "DECIMAL_TYPE", "VARSTRING_TYPE", 
		"STRING_TYPE", "UNSTABLE", "STABLE", "TABLE", "EXPORT", "AND", "AS", "ASC", 
		"BETWEEN", "BY", "DESC", "DEPENDENT", "FROM", "GROUP", "IMPORT", "OPTION", 
		"OPTIONS", "OVERWRITE", "UPDATE", "IN", "ON", "INDEPENDENT", "IDCOLUMN", 
		"CREATE", "LAYOUT", "TRAIN", "FILE", "MAP", "METHOD", "NOT", "OR", "ORDER", 
		"OUTPUT", "PLOT", "PREDICT", "PROJECT", "SELECT", "JOIN", "INNER", "LEFT", 
		"RIGHT", "FULL", "TITLE", "EXPIRE", "TRUE", "FALSE", "UESCAPE", "WHERE", 
		"TYPE", "NCOMPILE", "SEMICOLON", "EQ", "NEQ", "LT", "LTE", "GT", "GTE", 
		"STRING", "UNICODE_STRING", "BINARY_LITERAL", "INTEGER_VALUE", "DECIMAL_VALUE", 
		"DOUBLE_VALUE", "IDENTIFIER", "ECL_SNIPPETS", "SIMPLE_COMMENT", "SIMPLE_C_COMMENT", 
		"BRACKETED_COMMENT", "WS",
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
			while (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (HSQLParser.EXPORT - 16)) | (1 << (HSQLParser.IMPORT - 16)) | (1 << (HSQLParser.CREATE - 16)) | (1 << (HSQLParser.TRAIN - 16)) | (1 << (HSQLParser.MAP - 16)) | (1 << (HSQLParser.OUTPUT - 16)) | (1 << (HSQLParser.PLOT - 16)) | (1 << (HSQLParser.PREDICT - 16)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (HSQLParser.SELECT - 48)) | (1 << (HSQLParser.NCOMPILE - 48)) | (1 << (HSQLParser.SEMICOLON - 48)) | (1 << (HSQLParser.IDENTIFIER - 48)) | (1 << (HSQLParser.ECL_SNIPPETS - 48)))) !== 0)) {
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
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 134;
				this.actionStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 135;
				this.assignStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 136;
				this.importStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 137;
				this.typeDefStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 138;
				this.inlineStmt();
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
	public actionStmt(): ActionStmtContext {
		let _localctx: ActionStmtContext = new ActionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, HSQLParser.RULE_actionStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
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
	public assignStmt(): AssignStmtContext {
		let _localctx: AssignStmtContext = new AssignStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, HSQLParser.RULE_assignStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.EXPORT) {
				{
				this.state = 143;
				this.match(HSQLParser.EXPORT);
				}
			}

			this.state = 146;
			_localctx._label = this.match(HSQLParser.IDENTIFIER);
			this.state = 147;
			this.match(HSQLParser.EQ);
			this.state = 148;
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
	public typeDefStmt(): TypeDefStmtContext {
		let _localctx: TypeDefStmtContext = new TypeDefStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, HSQLParser.RULE_typeDefStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.match(HSQLParser.MAP);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.EXPORT) {
				{
				this.state = 151;
				this.typeDefExport();
				}
			}

			this.state = 154;
			this.mapExportable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public typeDefExport(): TypeDefExportContext {
		let _localctx: TypeDefExportContext = new TypeDefExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, HSQLParser.RULE_typeDefExport);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(HSQLParser.EXPORT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public mapExportable(): MapExportableContext {
		let _localctx: MapExportableContext = new MapExportableContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, HSQLParser.RULE_mapExportable);
		try {
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 158;
				this.tableExport();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 159;
				this.layoutExport();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 160;
				this.identifierExport();
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
	public tableExport(): TableExportContext {
		let _localctx: TableExportContext = new TableExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, HSQLParser.RULE_tableExport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 163;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 164;
			this.match(HSQLParser.TABLE);
			this.state = 165;
			this.match(HSQLParser.T__0);
			this.state = 166;
			this.identifierExport();
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.T__1) {
				{
				{
				this.state = 167;
				this.match(HSQLParser.T__1);
				this.state = 168;
				this.identifierExport();
				}
				}
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 174;
			this.match(HSQLParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public layoutExport(): LayoutExportContext {
		let _localctx: LayoutExportContext = new LayoutExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, HSQLParser.RULE_layoutExport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 176;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 177;
			this.match(HSQLParser.LAYOUT);
			this.state = 178;
			this.match(HSQLParser.T__0);
			this.state = 179;
			this.identifierExport();
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.T__1) {
				{
				{
				this.state = 180;
				this.match(HSQLParser.T__1);
				this.state = 181;
				this.identifierExport();
				}
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 187;
			this.match(HSQLParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public identifierExport(): IdentifierExportContext {
		let _localctx: IdentifierExportContext = new IdentifierExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, HSQLParser.RULE_identifierExport);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 190;
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
	public importStmt(): ImportStmtContext {
		let _localctx: ImportStmtContext = new ImportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, HSQLParser.RULE_importStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(HSQLParser.IMPORT);
			this.state = 193;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.AS) {
				{
				this.state = 194;
				this.match(HSQLParser.AS);
				this.state = 195;
				_localctx._alias = this.match(HSQLParser.IDENTIFIER);
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
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, HSQLParser.RULE_expr);
		try {
			this.state = 205;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 198;
				this.simpleIdentifier();
				}
				break;
			case HSQLParser.SELECT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 199;
				this.selectStmt();
				}
				break;
			case HSQLParser.TRAIN:
			case HSQLParser.PREDICT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 200;
				this.mlStmt();
				}
				break;
			case HSQLParser.CREATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 201;
				this.layoutStmt();
				}
				break;
			case HSQLParser.NCOMPILE:
			case HSQLParser.ECL_SNIPPETS:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 202;
				this.inlineStmt();
				}
				break;
			case HSQLParser.OUTPUT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 203;
				this.outputStmt();
				}
				break;
			case HSQLParser.PLOT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 204;
				this.plotStmt();
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
	public simpleIdentifier(): SimpleIdentifierContext {
		let _localctx: SimpleIdentifierContext = new SimpleIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, HSQLParser.RULE_simpleIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.qualifiedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		this.enterRule(_localctx, 28, HSQLParser.RULE_outputStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(HSQLParser.OUTPUT);
			this.state = 210;
			_localctx._label = this.match(HSQLParser.IDENTIFIER);
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.FILE || _la === HSQLParser.TITLE) {
				{
				this.state = 211;
				this.outputVariant();
				}
			}

			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OVERWRITE || _la === HSQLParser.UPDATE) {
				{
				this.state = 214;
				this.outputUpdateOption();
				}
			}

			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.EXPIRE) {
				{
				this.state = 217;
				this.outputExpireOption();
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
	public outputVariant(): OutputVariantContext {
		let _localctx: OutputVariantContext = new OutputVariantContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, HSQLParser.RULE_outputVariant);
		try {
			this.state = 222;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.TITLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 220;
				this.namedOutputStatement();
				}
				break;
			case HSQLParser.FILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 221;
				this.fileOutputStatement();
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
	public namedOutputStatement(): NamedOutputStatementContext {
		let _localctx: NamedOutputStatementContext = new NamedOutputStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, HSQLParser.RULE_namedOutputStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(HSQLParser.TITLE);
			this.state = 225;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public namedOutputString(): NamedOutputStringContext {
		let _localctx: NamedOutputStringContext = new NamedOutputStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, HSQLParser.RULE_namedOutputString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public fileOutputStatement(): FileOutputStatementContext {
		let _localctx: FileOutputStatementContext = new FileOutputStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, HSQLParser.RULE_fileOutputStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(HSQLParser.FILE);
			this.state = 230;
			_localctx._fileName = this.string();
			this.state = 231;
			_localctx._fileType = this.match(HSQLParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public outputUpdateOption(): OutputUpdateOptionContext {
		let _localctx: OutputUpdateOptionContext = new OutputUpdateOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, HSQLParser.RULE_outputUpdateOption);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			_la = this._input.LA(1);
			if (!(_la === HSQLParser.OVERWRITE || _la === HSQLParser.UPDATE)) {
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
	public outputExpireOption(): OutputExpireOptionContext {
		let _localctx: OutputExpireOptionContext = new OutputExpireOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, HSQLParser.RULE_outputExpireOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this.match(HSQLParser.EXPIRE);
			this.state = 236;
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
	public plotStmt(): PlotStmtContext {
		let _localctx: PlotStmtContext = new PlotStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, HSQLParser.RULE_plotStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(HSQLParser.PLOT);
			this.state = 239;
			this.match(HSQLParser.FROM);
			this.state = 240;
			_localctx._labelIdentifier = this.qualifiedIdentifier();
			this.state = 241;
			this.match(HSQLParser.TITLE);
			this.state = 242;
			_localctx._titleIdentifier = this.match(HSQLParser.STRING);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TYPE) {
				{
				this.state = 243;
				this.match(HSQLParser.TYPE);
				this.state = 244;
				_localctx._plottype = this.match(HSQLParser.IDENTIFIER);
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
		this.enterRule(_localctx, 44, HSQLParser.RULE_mlStmt);
		try {
			this.state = 250;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 247;
				this.train();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 248;
				this.predict();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 249;
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
		this.enterRule(_localctx, 46, HSQLParser.RULE_train);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.match(HSQLParser.TRAIN);
			this.state = 253;
			this.match(HSQLParser.FROM);
			this.state = 254;
			_localctx._ind = this.qualifiedIdentifier();
			this.state = 255;
			this.match(HSQLParser.T__1);
			this.state = 256;
			_localctx._dep = this.qualifiedIdentifier();
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.T__1) {
				{
				this.state = 257;
				this.match(HSQLParser.T__1);
				this.state = 258;
				_localctx._test = this.qualifiedIdentifier();
				}
			}

			this.state = 261;
			this.match(HSQLParser.METHOD);
			this.state = 262;
			_localctx._method = this.match(HSQLParser.IDENTIFIER);
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OPTION) {
				{
				this.state = 263;
				this.match(HSQLParser.OPTION);
				this.state = 264;
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
		this.enterRule(_localctx, 48, HSQLParser.RULE_elementaryML);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.match(HSQLParser.PREDICT);
			this.state = 268;
			this.match(HSQLParser.FROM);
			this.state = 269;
			_localctx._ind = this.qualifiedIdentifier();
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.T__1) {
				{
				this.state = 270;
				this.match(HSQLParser.T__1);
				this.state = 271;
				_localctx._ind2 = this.qualifiedIdentifier();
				}
			}

			this.state = 274;
			this.match(HSQLParser.METHOD);
			this.state = 275;
			_localctx._method = this.match(HSQLParser.IDENTIFIER);
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.OPTION) {
				{
				this.state = 276;
				this.match(HSQLParser.OPTION);
				this.state = 277;
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
		this.enterRule(_localctx, 50, HSQLParser.RULE_trainOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 280;
			this.trainOption();
			}
			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.T__1) {
				{
				{
				this.state = 281;
				this.match(HSQLParser.T__1);
				this.state = 282;
				this.trainOption();
				}
				}
				this.state = 287;
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
		this.enterRule(_localctx, 52, HSQLParser.RULE_trainOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 289;
			this.match(HSQLParser.EQ);
			this.state = 290;
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
		this.enterRule(_localctx, 54, HSQLParser.RULE_trainValue);
		try {
			this.state = 295;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 292;
				this.number();
				}
				break;
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 293;
				this.string();
				}
				break;
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 294;
				this.qualifiedIdentifier();
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
		this.enterRule(_localctx, 56, HSQLParser.RULE_predict);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(HSQLParser.PREDICT);
			this.state = 298;
			_localctx._model = this.qualifiedIdentifier();
			this.state = 299;
			this.match(HSQLParser.FROM);
			this.state = 300;
			_localctx._ind = this.qualifiedIdentifier();
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.METHOD) {
				{
				this.state = 301;
				this.match(HSQLParser.METHOD);
				this.state = 302;
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
	public selectStmt(): SelectStmtContext {
		let _localctx: SelectStmtContext = new SelectStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, HSQLParser.RULE_selectStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(HSQLParser.SELECT);
			this.state = 306;
			_localctx._columns = this.selectColumns();
			this.state = 307;
			this.match(HSQLParser.FROM);
			this.state = 308;
			_localctx._fromclause = this.selectFromClause();
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.WHERE) {
				{
				this.state = 309;
				this.match(HSQLParser.WHERE);
				this.state = 310;
				_localctx._whereclause = this.selectWhereClause();
				}
			}

			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.GROUP) {
				{
				this.state = 313;
				this.match(HSQLParser.GROUP);
				this.state = 314;
				this.match(HSQLParser.BY);
				this.state = 315;
				_localctx._groupbyclause = this.groupByClause();
				}
			}

			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.ORDER) {
				{
				this.state = 318;
				this.match(HSQLParser.ORDER);
				this.state = 319;
				this.match(HSQLParser.BY);
				this.state = 320;
				_localctx._orderbyclause = this.orderByClause();
				}
			}

			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (HSQLParser.JOIN - 49)) | (1 << (HSQLParser.INNER - 49)) | (1 << (HSQLParser.LEFT - 49)) | (1 << (HSQLParser.RIGHT - 49)) | (1 << (HSQLParser.FULL - 49)))) !== 0)) {
				{
				this.state = 323;
				this.joinClause();
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
	public joinClause(): JoinClauseContext {
		let _localctx: JoinClauseContext = new JoinClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, HSQLParser.RULE_joinClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this.joinType();
			this.state = 327;
			this.match(HSQLParser.JOIN);
			this.state = 328;
			_localctx._joinidentifier = this.qualifiedIdentifier();
			this.state = 329;
			this.match(HSQLParser.ON);
			{
			this.state = 330;
			_localctx._leftrecset = this.qualifiedIdentifier();
			this.state = 331;
			_localctx._joincondition = this.comparisonOperator();
			this.state = 332;
			_localctx._rightrecset = this.qualifiedIdentifier();
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
	public joinType(): JoinTypeContext {
		let _localctx: JoinTypeContext = new JoinTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, HSQLParser.RULE_joinType);
		let _la: number;
		try {
			this.state = 343;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.JOIN:
			case HSQLParser.INNER:
				_localctx = new InnerJoinContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.INNER) {
					{
					this.state = 334;
					this.match(HSQLParser.INNER);
					}
				}

				}
				break;
			case HSQLParser.LEFT:
			case HSQLParser.RIGHT:
				_localctx = new OuterJoinContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 337;
				(_localctx as OuterJoinContext)._specifier = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === HSQLParser.LEFT || _la === HSQLParser.RIGHT)) {
					(_localctx as OuterJoinContext)._specifier = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.OUTER) {
					{
					this.state = 338;
					this.match(HSQLParser.OUTER);
					}
				}

				}
				}
				break;
			case HSQLParser.FULL:
				_localctx = new FullOuterJoinContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 341;
				(_localctx as FullOuterJoinContext)._specifier = this.match(HSQLParser.FULL);
				this.state = 342;
				this.match(HSQLParser.OUTER);
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
	public selectColumns(): SelectColumnsContext {
		let _localctx: SelectColumnsContext = new SelectColumnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, HSQLParser.RULE_selectColumns);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.selectCol();
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.T__1) {
				{
				{
				this.state = 346;
				this.match(HSQLParser.T__1);
				this.state = 347;
				this.selectCol();
				}
				}
				this.state = 352;
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
		this.enterRule(_localctx, 66, HSQLParser.RULE_selectCol);
		try {
			this.state = 355;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 353;
				this.aggregatedSelectColumn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 354;
				this.selectColumn();
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
	public aggregatedSelectColumn(): AggregatedSelectColumnContext {
		let _localctx: AggregatedSelectColumnContext = new AggregatedSelectColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, HSQLParser.RULE_aggregatedSelectColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			_localctx._aggregate = this.match(HSQLParser.IDENTIFIER);
			this.state = 358;
			this.match(HSQLParser.T__0);
			this.state = 359;
			this.selectColumn();
			this.state = 360;
			this.match(HSQLParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public selectColumn(): SelectColumnContext {
		let _localctx: SelectColumnContext = new SelectColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, HSQLParser.RULE_selectColumn);
		let _la: number;
		try {
			this.state = 371;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.T__3:
				_localctx = new WildColContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 362;
				(_localctx as WildColContext)._wild = this.match(HSQLParser.T__3);
				}
				break;
			case HSQLParser.IDENTIFIER:
				_localctx = new StdcolContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 363;
				(_localctx as StdcolContext)._column = this.match(HSQLParser.IDENTIFIER);
				this.state = 369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.AS) {
					{
					this.state = 364;
					this.match(HSQLParser.AS);
					this.state = 366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HSQLParser.REAL_TYPE) | (1 << HSQLParser.INTEGER_TYPE) | (1 << HSQLParser.DECIMAL_TYPE) | (1 << HSQLParser.VARSTRING_TYPE) | (1 << HSQLParser.STRING_TYPE))) !== 0)) {
						{
						this.state = 365;
						(_localctx as StdcolContext)._type = this.dataType();
						}
					}

					this.state = 368;
					(_localctx as StdcolContext)._alias = this.match(HSQLParser.IDENTIFIER);
					}
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
	public selectFromClause(): SelectFromClauseContext {
		let _localctx: SelectFromClauseContext = new SelectFromClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, HSQLParser.RULE_selectFromClause);
		try {
			this.state = 376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 373;
				this.nestedSelectStmt();
				}
				break;
			case HSQLParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 374;
				this.selectTableName();
				}
				break;
			case HSQLParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 375;
				this.selectDataset();
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
	public nestedSelectStmt(): NestedSelectStmtContext {
		let _localctx: NestedSelectStmtContext = new NestedSelectStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, HSQLParser.RULE_nestedSelectStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.match(HSQLParser.T__0);
			this.state = 379;
			this.selectStmt();
			this.state = 380;
			this.match(HSQLParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public selectDataset(): SelectDatasetContext {
		let _localctx: SelectDatasetContext = new SelectDatasetContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, HSQLParser.RULE_selectDataset);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			_localctx._str = this.match(HSQLParser.STRING);
			this.state = 383;
			this.match(HSQLParser.LAYOUT);
			this.state = 384;
			this.qualifiedIdentifier();
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.TYPE) {
				{
				this.state = 385;
				this.match(HSQLParser.TYPE);
				this.state = 386;
				this.selectDatasetFile();
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
	public selectDatasetFile(): SelectDatasetFileContext {
		let _localctx: SelectDatasetFileContext = new SelectDatasetFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, HSQLParser.RULE_selectDatasetFile);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
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
	public selectTableName(): SelectTableNameContext {
		let _localctx: SelectTableNameContext = new SelectTableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, HSQLParser.RULE_selectTableName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 391;
			this.qualifiedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		this.enterRule(_localctx, 82, HSQLParser.RULE_selectWhereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
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
	public orderByClause(): OrderByClauseContext {
		let _localctx: OrderByClauseContext = new OrderByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, HSQLParser.RULE_orderByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.sortItem();
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.T__1) {
				{
				{
				this.state = 396;
				this.match(HSQLParser.T__1);
				this.state = 397;
				this.sortItem();
				}
				}
				this.state = 402;
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
		this.enterRule(_localctx, 86, HSQLParser.RULE_sortItem);
		try {
			this.state = 405;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 403;
				this.ascSortItem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 404;
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
		this.enterRule(_localctx, 88, HSQLParser.RULE_ascSortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.expression();
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HSQLParser.ASC) {
				{
				this.state = 408;
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
		this.enterRule(_localctx, 90, HSQLParser.RULE_descSortItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.expression();
			{
			this.state = 412;
			this.match(HSQLParser.DESC);
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
	public groupByClause(): GroupByClauseContext {
		let _localctx: GroupByClauseContext = new GroupByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, HSQLParser.RULE_groupByClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.qualifiedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		this.enterRule(_localctx, 94, HSQLParser.RULE_layoutStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this.match(HSQLParser.CREATE);
			this.state = 417;
			this.match(HSQLParser.LAYOUT);
			this.state = 418;
			this.match(HSQLParser.T__0);
			this.state = 419;
			this.layoutContent();
			this.state = 420;
			this.match(HSQLParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		this.enterRule(_localctx, 96, HSQLParser.RULE_layoutContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this.identifierExport();
			this.state = 427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.T__1) {
				{
				{
				this.state = 423;
				this.match(HSQLParser.T__1);
				this.state = 424;
				this.identifierExport();
				}
				}
				this.state = 429;
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
	public inlineStmt(): InlineStmtContext {
		let _localctx: InlineStmtContext = new InlineStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, HSQLParser.RULE_inlineStmt);
		try {
			this.state = 433;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.NCOMPILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 430;
				this.match(HSQLParser.NCOMPILE);
				this.state = 431;
				this.match(HSQLParser.STRING);
				}
				break;
			case HSQLParser.ECL_SNIPPETS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 432;
				this.match(HSQLParser.ECL_SNIPPETS);
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
	public qualifiedIdentifier(): QualifiedIdentifierContext {
		let _localctx: QualifiedIdentifierContext = new QualifiedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, HSQLParser.RULE_qualifiedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(HSQLParser.IDENTIFIER);
			this.state = 440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HSQLParser.T__4) {
				{
				{
				this.state = 436;
				this.match(HSQLParser.T__4);
				this.state = 437;
				this.match(HSQLParser.IDENTIFIER);
				}
				}
				this.state = 442;
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
	public dataType(): DataTypeContext {
		let _localctx: DataTypeContext = new DataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, HSQLParser.RULE_dataType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HSQLParser.REAL_TYPE) | (1 << HSQLParser.INTEGER_TYPE) | (1 << HSQLParser.DECIMAL_TYPE) | (1 << HSQLParser.VARSTRING_TYPE) | (1 << HSQLParser.STRING_TYPE))) !== 0))) {
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, HSQLParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
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
		let _startState: number = 106;
		this.enterRecursionRule(_localctx, 106, HSQLParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.T__0:
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
			case HSQLParser.IDENTIFIER:
				{
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 448;
				(_localctx as PredicatedContext)._valueExpression = this.valueExpression();
				this.state = 450;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 449;
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
				this.state = 452;
				this.match(HSQLParser.NOT);
				this.state = 453;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 464;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 462;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, HSQLParser.RULE_booleanExpression);
						this.state = 456;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 457;
						(_localctx as LogicalBinaryContext)._operator = this.match(HSQLParser.AND);
						this.state = 458;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, HSQLParser.RULE_booleanExpression);
						this.state = 459;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 460;
						(_localctx as LogicalBinaryContext)._operator = this.match(HSQLParser.OR);
						this.state = 461;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 466;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
		this.enterRule(_localctx, 108, HSQLParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				_localctx = new ComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 467;
				this.comparisonOperator();
				this.state = 468;
				(_localctx as ComparisonContext)._right = this.valueExpression();
				}
				break;

			case 2:
				_localctx = new BetweenContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.NOT) {
					{
					this.state = 470;
					this.match(HSQLParser.NOT);
					}
				}

				this.state = 473;
				this.match(HSQLParser.BETWEEN);
				this.state = 474;
				(_localctx as BetweenContext)._lower = this.valueExpression();
				this.state = 475;
				this.match(HSQLParser.AND);
				this.state = 476;
				(_localctx as BetweenContext)._upper = this.valueExpression();
				}
				break;

			case 3:
				_localctx = new InListContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HSQLParser.NOT) {
					{
					this.state = 478;
					this.match(HSQLParser.NOT);
					}
				}

				this.state = 481;
				this.match(HSQLParser.IN);
				this.state = 482;
				this.match(HSQLParser.T__0);
				this.state = 483;
				this.valueExpression();
				this.state = 488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HSQLParser.T__1) {
					{
					{
					this.state = 484;
					this.match(HSQLParser.T__1);
					this.state = 485;
					this.valueExpression();
					}
					}
					this.state = 490;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 491;
				this.match(HSQLParser.T__2);
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
		this.enterRule(_localctx, 110, HSQLParser.RULE_valueExpression);
		try {
			_localctx = new ValueExpressionDefaultContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
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
		this.enterRule(_localctx, 112, HSQLParser.RULE_primaryExpression);
		try {
			this.state = 505;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.IDENTIFIER:
				_localctx = new IdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 497;
				this.match(HSQLParser.IDENTIFIER);
				}
				break;
			case HSQLParser.INTEGER_VALUE:
			case HSQLParser.DECIMAL_VALUE:
			case HSQLParser.DOUBLE_VALUE:
				_localctx = new NumericLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 498;
				this.number();
				}
				break;
			case HSQLParser.TRUE:
			case HSQLParser.FALSE:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 499;
				this.booleanValue();
				}
				break;
			case HSQLParser.STRING:
			case HSQLParser.UNICODE_STRING:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 500;
				this.string();
				}
				break;
			case HSQLParser.T__0:
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 501;
				this.match(HSQLParser.T__0);
				this.state = 502;
				this.expression();
				this.state = 503;
				this.match(HSQLParser.T__2);
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
		this.enterRule(_localctx, 114, HSQLParser.RULE_number);
		try {
			this.state = 510;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.DECIMAL_VALUE:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 507;
				this.match(HSQLParser.DECIMAL_VALUE);
				}
				break;
			case HSQLParser.DOUBLE_VALUE:
				_localctx = new DoubleLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 508;
				this.match(HSQLParser.DOUBLE_VALUE);
				}
				break;
			case HSQLParser.INTEGER_VALUE:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 509;
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
		this.enterRule(_localctx, 116, HSQLParser.RULE_string);
		try {
			this.state = 518;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HSQLParser.STRING:
				_localctx = new BasicStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 512;
				this.match(HSQLParser.STRING);
				}
				break;
			case HSQLParser.UNICODE_STRING:
				_localctx = new UnicodeStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 513;
				this.match(HSQLParser.UNICODE_STRING);
				this.state = 516;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 514;
					this.match(HSQLParser.UESCAPE);
					this.state = 515;
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
		this.enterRule(_localctx, 118, HSQLParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
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
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, HSQLParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			_la = this._input.LA(1);
			if (!(((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (HSQLParser.EQ - 63)) | (1 << (HSQLParser.NEQ - 63)) | (1 << (HSQLParser.LT - 63)) | (1 << (HSQLParser.LTE - 63)) | (1 << (HSQLParser.GT - 63)) | (1 << (HSQLParser.GTE - 63)))) !== 0))) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 53:
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03R\u020F\x04\x02" +
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
		"\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04\x8E\n\x04\x03\x05\x03\x05\x03\x06\x05\x06\x93\n\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07\x9B\n\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\xA4\n\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x07\n\xAC\n\n\f\n\x0E\n\xAF\v\n\x03\n\x03\n\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x07\v\xB9\n\v\f\v\x0E\v\xBC\v\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x05\r\xC7\n\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xD0\n\x0E\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\xD7\n\x10\x03\x10\x05\x10\xDA\n\x10\x03" +
		"\x10\x05\x10\xDD\n\x10\x03\x11\x03\x11\x05\x11\xE1\n\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x05\x17\xF8\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\xFD\n\x18\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0106\n\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u010C\n\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\u0113\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x05\x1A\u0119\n\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u011E\n\x1B\f\x1B" +
		"\x0E\x1B\u0121\v\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03" +
		"\x1D\x05\x1D\u012A\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u0132\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05" +
		"\x1F\u013A\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u013F\n\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u0144\n\x1F\x03\x1F\x05\x1F\u0147\n\x1F\x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03!\x05!\u0152\n!\x03!\x03!\x05!\u0156" +
		"\n!\x03!\x03!\x05!\u015A\n!\x03\"\x03\"\x03\"\x07\"\u015F\n\"\f\"\x0E" +
		"\"\u0162\v\"\x03#\x03#\x05#\u0166\n#\x03$\x03$\x03$\x03$\x03$\x03%\x03" +
		"%\x03%\x03%\x05%\u0171\n%\x03%\x05%\u0174\n%\x05%\u0176\n%\x03&\x03&\x03" +
		"&\x05&\u017B\n&\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x05(" +
		"\u0186\n(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x07,\u0191\n,\f" +
		",\x0E,\u0194\v,\x03-\x03-\x05-\u0198\n-\x03.\x03.\x05.\u019C\n.\x03/\x03" +
		"/\x03/\x030\x030\x031\x031\x031\x031\x031\x031\x032\x032\x032\x072\u01AC" +
		"\n2\f2\x0E2\u01AF\v2\x033\x033\x033\x053\u01B4\n3\x034\x034\x034\x074" +
		"\u01B9\n4\f4\x0E4\u01BC\v4\x035\x035\x036\x036\x037\x037\x037\x057\u01C5" +
		"\n7\x037\x037\x057\u01C9\n7\x037\x037\x037\x037\x037\x037\x077\u01D1\n" +
		"7\f7\x0E7\u01D4\v7\x038\x038\x038\x038\x058\u01DA\n8\x038\x038\x038\x03" +
		"8\x038\x038\x058\u01E2\n8\x038\x038\x038\x038\x038\x078\u01E9\n8\f8\x0E" +
		"8\u01EC\v8\x038\x038\x058\u01F0\n8\x039\x039\x03:\x03:\x03:\x03:\x03:" +
		"\x03:\x03:\x03:\x05:\u01FC\n:\x03;\x03;\x03;\x05;\u0201\n;\x03<\x03<\x03" +
		"<\x03<\x05<\u0207\n<\x05<\u0209\n<\x03=\x03=\x03>\x03>\x03>\x02\x02\x03" +
		"l?\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02\x02" +
		"\x07\x03\x02\x1F \x03\x0256\x03\x02\n\x0E\x03\x02:;\x03\x02AF\x02\u021A" +
		"\x02\x7F\x03\x02\x02\x02\x04\x84\x03\x02\x02\x02\x06\x8D\x03\x02\x02\x02" +
		"\b\x8F\x03\x02\x02\x02\n\x92\x03\x02\x02\x02\f\x98\x03\x02\x02\x02\x0E" +
		"\x9E\x03\x02\x02\x02\x10\xA3\x03\x02\x02\x02\x12\xA5\x03\x02\x02\x02\x14" +
		"\xB2\x03\x02\x02\x02\x16\xBF\x03\x02\x02\x02\x18\xC2\x03\x02\x02\x02\x1A" +
		"\xCF\x03\x02\x02\x02\x1C\xD1\x03\x02\x02\x02\x1E\xD3\x03\x02\x02\x02 " +
		"\xE0\x03\x02\x02\x02\"\xE2\x03\x02\x02\x02$\xE5\x03\x02\x02\x02&\xE7\x03" +
		"\x02\x02\x02(\xEB\x03\x02\x02\x02*\xED\x03\x02\x02\x02,\xF0\x03\x02\x02" +
		"\x02.\xFC\x03\x02\x02\x020\xFE\x03\x02\x02\x022\u010D\x03\x02\x02\x02" +
		"4\u011A\x03\x02\x02\x026\u0122\x03\x02\x02\x028\u0129\x03\x02\x02\x02" +
		":\u012B\x03\x02\x02\x02<\u0133\x03\x02\x02\x02>\u0148\x03\x02\x02\x02" +
		"@\u0159\x03\x02\x02\x02B\u015B\x03\x02\x02\x02D\u0165\x03\x02\x02\x02" +
		"F\u0167\x03\x02\x02\x02H\u0175\x03\x02\x02\x02J\u017A\x03\x02\x02\x02" +
		"L\u017C\x03\x02\x02\x02N\u0180\x03\x02\x02\x02P\u0187\x03\x02\x02\x02" +
		"R\u0189\x03\x02\x02\x02T\u018B\x03\x02\x02\x02V\u018D\x03\x02\x02\x02" +
		"X\u0197\x03\x02\x02\x02Z\u0199\x03\x02\x02\x02\\\u019D\x03\x02\x02\x02" +
		"^\u01A0\x03\x02\x02\x02`\u01A2\x03\x02\x02\x02b\u01A8\x03\x02\x02\x02" +
		"d\u01B3\x03\x02\x02\x02f\u01B5\x03\x02\x02\x02h\u01BD\x03\x02\x02\x02" +
		"j\u01BF\x03\x02\x02\x02l\u01C8\x03\x02\x02\x02n\u01EF\x03\x02\x02\x02" +
		"p\u01F1\x03\x02\x02\x02r\u01FB\x03\x02\x02\x02t\u0200\x03\x02\x02\x02" +
		"v\u0208\x03\x02\x02\x02x\u020A\x03\x02\x02\x02z\u020C\x03\x02\x02\x02" +
		"|~\x05\x04\x03\x02}|\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F}\x03\x02" +
		"\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x82\x03\x02\x02\x02\x81\x7F\x03\x02" +
		"\x02\x02\x82\x83\x07\x02\x02\x03\x83\x03\x03\x02\x02\x02\x84\x85\x05\x06" +
		"\x04\x02\x85\x86\x07@\x02\x02\x86\x05\x03\x02\x02\x02\x87\x8E\x03\x02" +
		"\x02\x02\x88\x8E\x05\b\x05\x02\x89\x8E\x05\n\x06\x02\x8A\x8E\x05\x18\r" +
		"\x02\x8B\x8E\x05\f\x07\x02\x8C\x8E\x05d3\x02\x8D\x87\x03\x02\x02\x02\x8D" +
		"\x88\x03\x02\x02\x02\x8D\x89\x03\x02\x02\x02\x8D\x8A\x03\x02\x02\x02\x8D" +
		"\x8B\x03\x02\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x07\x03\x02\x02\x02\x8F" +
		"\x90\x05\x1A\x0E\x02\x90\t\x03\x02\x02\x02\x91\x93\x07\x12\x02\x02\x92" +
		"\x91\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94" +
		"\x95\x07M\x02\x02\x95\x96\x07A\x02\x02\x96\x97\x05\x1A\x0E\x02\x97\v\x03" +
		"\x02\x02\x02\x98\x9A\x07)\x02\x02\x99\x9B\x05\x0E\b\x02\x9A\x99\x03\x02" +
		"\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x05\x10" +
		"\t\x02\x9D\r\x03\x02\x02\x02\x9E\x9F\x07\x12\x02\x02\x9F\x0F\x03\x02\x02" +
		"\x02\xA0\xA4\x05\x12\n\x02\xA1\xA4\x05\x14\v\x02\xA2\xA4\x05\x16\f\x02" +
		"\xA3\xA0\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA2\x03\x02\x02\x02" +
		"\xA4\x11\x03\x02\x02\x02\xA5\xA6\x07M\x02\x02\xA6\xA7\x07\x11\x02\x02" +
		"\xA7\xA8\x07\x03\x02\x02\xA8\xAD\x05\x16\f\x02\xA9\xAA\x07\x04\x02\x02" +
		"\xAA\xAC\x05\x16\f\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02" +
		"\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB0\x03\x02\x02\x02" +
		"\xAF\xAD\x03\x02\x02\x02\xB0\xB1\x07\x05\x02\x02\xB1\x13\x03\x02\x02\x02" +
		"\xB2\xB3\x07M\x02\x02\xB3\xB4\x07&\x02\x02\xB4\xB5\x07\x03\x02\x02\xB5" +
		"\xBA\x05\x16\f\x02\xB6\xB7\x07\x04\x02\x02\xB7\xB9\x05\x16\f\x02\xB8\xB6" +
		"\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB" +
		"\x03\x02\x02\x02\xBB\xBD\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBE" +
		"\x07\x05\x02\x02\xBE\x15\x03\x02\x02\x02\xBF\xC0\x07M\x02\x02\xC0\xC1" +
		"\x05h5\x02\xC1\x17\x03\x02\x02\x02\xC2\xC3\x07\x1C\x02\x02\xC3\xC6\x07" +
		"M\x02\x02\xC4\xC5\x07\x14\x02\x02\xC5\xC7\x07M\x02\x02\xC6\xC4\x03\x02" +
		"\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\x19\x03\x02\x02\x02\xC8\xD0\x05\x1C" +
		"\x0F\x02\xC9\xD0\x05<\x1F\x02\xCA\xD0\x05.\x18\x02\xCB\xD0\x05`1\x02\xCC" +
		"\xD0\x05d3\x02\xCD\xD0\x05\x1E\x10\x02\xCE\xD0\x05,\x17\x02\xCF\xC8\x03" +
		"\x02\x02\x02\xCF\xC9\x03\x02\x02\x02\xCF\xCA\x03\x02\x02\x02\xCF\xCB\x03" +
		"\x02\x02\x02\xCF\xCC\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xCE\x03" +
		"\x02\x02\x02\xD0\x1B\x03\x02\x02\x02\xD1\xD2\x05f4\x02\xD2\x1D\x03\x02" +
		"\x02\x02\xD3\xD4\x07.\x02\x02\xD4\xD6\x07M\x02\x02\xD5\xD7\x05 \x11\x02" +
		"\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD9\x03\x02\x02\x02" +
		"\xD8\xDA\x05(\x15\x02\xD9\xD8\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02" +
		"\xDA\xDC\x03\x02\x02\x02\xDB\xDD\x05*\x16\x02\xDC\xDB\x03\x02\x02\x02" +
		"\xDC\xDD\x03\x02\x02\x02\xDD\x1F\x03\x02\x02\x02\xDE\xE1\x05\"\x12\x02" +
		"\xDF\xE1\x05&\x14\x02\xE0\xDE\x03\x02\x02\x02\xE0\xDF\x03\x02\x02\x02" +
		"\xE1!\x03\x02\x02\x02\xE2\xE3\x078\x02\x02\xE3\xE4\x05v<\x02\xE4#\x03" +
		"\x02\x02\x02\xE5\xE6\x05v<\x02\xE6%\x03\x02\x02\x02\xE7\xE8\x07(\x02\x02" +
		"\xE8\xE9\x05v<\x02\xE9\xEA\x07M\x02\x02\xEA\'\x03\x02\x02\x02\xEB\xEC" +
		"\t\x02\x02\x02\xEC)\x03\x02\x02\x02\xED\xEE\x079\x02\x02\xEE\xEF\x05t" +
		";\x02\xEF+\x03\x02\x02\x02\xF0\xF1\x07/\x02\x02\xF1\xF2\x07\x1A\x02\x02" +
		"\xF2\xF3\x05f4\x02\xF3\xF4\x078\x02\x02\xF4\xF7\x07G\x02\x02\xF5\xF6\x07" +
		">\x02\x02\xF6\xF8\x07M\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02" +
		"\x02\x02\xF8-\x03\x02\x02\x02\xF9\xFD\x050\x19\x02\xFA\xFD\x05:\x1E\x02" +
		"\xFB\xFD\x052\x1A\x02\xFC\xF9\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02" +
		"\xFC\xFB\x03\x02\x02\x02\xFD/\x03\x02\x02\x02\xFE\xFF\x07\'\x02\x02\xFF" +
		"\u0100\x07\x1A\x02\x02\u0100\u0101\x05f4\x02\u0101\u0102\x07\x04\x02\x02" +
		"\u0102\u0105\x05f4\x02\u0103\u0104\x07\x04\x02\x02\u0104\u0106\x05f4\x02" +
		"\u0105\u0103\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0107\x03" +
		"\x02\x02\x02\u0107\u0108\x07*\x02\x02\u0108\u010B\x07M\x02\x02\u0109\u010A" +
		"\x07\x1D\x02\x02\u010A\u010C\x054\x1B\x02\u010B\u0109\x03\x02\x02\x02" +
		"\u010B\u010C\x03\x02\x02\x02\u010C1\x03\x02\x02\x02\u010D\u010E\x070\x02" +
		"\x02\u010E\u010F\x07\x1A\x02\x02\u010F\u0112\x05f4\x02\u0110\u0111\x07" +
		"\x04\x02\x02\u0111\u0113\x05f4\x02\u0112\u0110\x03\x02\x02\x02\u0112\u0113" +
		"\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0115\x07*\x02\x02" +
		"\u0115\u0118\x07M\x02\x02\u0116\u0117\x07\x1D\x02\x02\u0117\u0119\x05" +
		"4\x1B\x02\u0118\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119" +
		"3\x03\x02\x02\x02\u011A\u011F\x056\x1C\x02\u011B\u011C\x07\x04\x02\x02" +
		"\u011C\u011E\x056\x1C\x02\u011D\u011B\x03\x02\x02\x02\u011E\u0121\x03" +
		"\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120" +
		"5\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0122\u0123\x07M\x02\x02" +
		"\u0123\u0124\x07A\x02\x02\u0124\u0125\x058\x1D\x02\u01257\x03\x02\x02" +
		"\x02\u0126\u012A\x05t;\x02\u0127\u012A\x05v<\x02\u0128\u012A\x05f4\x02" +
		"\u0129\u0126\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u0128\x03" +
		"\x02\x02\x02\u012A9\x03\x02\x02\x02\u012B\u012C\x070\x02\x02\u012C\u012D" +
		"\x05f4\x02\u012D\u012E\x07\x1A\x02\x02\u012E\u0131\x05f4\x02\u012F\u0130" +
		"\x07*\x02\x02\u0130\u0132\x07M\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131" +
		"\u0132\x03\x02\x02\x02\u0132;\x03\x02\x02\x02\u0133\u0134\x072\x02\x02" +
		"\u0134\u0135\x05B\"\x02\u0135\u0136\x07\x1A\x02\x02\u0136\u0139\x05J&" +
		"\x02\u0137\u0138\x07=\x02\x02\u0138\u013A\x05T+\x02\u0139\u0137\x03\x02" +
		"\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013E\x03\x02\x02\x02\u013B" +
		"\u013C\x07\x1B\x02\x02\u013C\u013D\x07\x17\x02\x02\u013D\u013F\x05^0\x02" +
		"\u013E\u013B\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0143\x03" +
		"\x02\x02\x02\u0140\u0141\x07-\x02\x02\u0141\u0142\x07\x17\x02\x02\u0142" +
		"\u0144\x05V,\x02\u0143\u0140\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02" +
		"\u0144\u0146\x03\x02\x02\x02\u0145\u0147\x05> \x02\u0146\u0145\x03\x02" +
		"\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147=\x03\x02\x02\x02\u0148\u0149" +
		"\x05@!\x02\u0149\u014A\x073\x02\x02\u014A\u014B\x05f4\x02\u014B\u014C" +
		"\x07\"\x02\x02\u014C\u014D\x05f4\x02\u014D\u014E\x05z>\x02\u014E\u014F" +
		"\x05f4\x02\u014F?\x03\x02\x02\x02\u0150\u0152\x074\x02\x02\u0151\u0150" +
		"\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u015A\x03\x02\x02\x02" +
		"\u0153\u0155\t\x03\x02\x02\u0154\u0156\x07\b\x02\x02\u0155\u0154\x03\x02" +
		"\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u015A\x03\x02\x02\x02\u0157" +
		"\u0158\x077\x02\x02\u0158\u015A\x07\b\x02\x02\u0159\u0151\x03\x02\x02" +
		"\x02\u0159\u0153\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u015AA\x03" +
		"\x02\x02\x02\u015B\u0160\x05D#\x02\u015C\u015D\x07\x04\x02\x02\u015D\u015F" +
		"\x05D#\x02\u015E\u015C\x03\x02\x02\x02\u015F\u0162\x03\x02\x02\x02\u0160" +
		"\u015E\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161C\x03\x02\x02" +
		"\x02\u0162\u0160\x03\x02\x02\x02\u0163\u0166\x05F$\x02\u0164\u0166\x05" +
		"H%\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0164\x03\x02\x02\x02\u0166E" +
		"\x03\x02\x02\x02\u0167\u0168\x07M\x02\x02\u0168\u0169\x07\x03\x02\x02" +
		"\u0169\u016A\x05H%\x02\u016A\u016B\x07\x05\x02\x02\u016BG\x03\x02\x02" +
		"\x02\u016C\u0176\x07\x06\x02\x02\u016D\u0173\x07M\x02\x02\u016E\u0170" +
		"\x07\x14\x02\x02\u016F\u0171\x05h5\x02\u0170\u016F\x03\x02\x02\x02\u0170" +
		"\u0171\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0174\x07M\x02" +
		"\x02\u0173\u016E\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0176" +
		"\x03\x02\x02\x02\u0175\u016C\x03\x02\x02\x02\u0175\u016D\x03\x02\x02\x02" +
		"\u0176I\x03\x02\x02\x02\u0177\u017B\x05L\'\x02\u0178\u017B\x05R*\x02\u0179" +
		"\u017B\x05N(\x02\u017A\u0177\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02" +
		"\u017A\u0179\x03\x02\x02\x02\u017BK\x03\x02\x02\x02\u017C\u017D\x07\x03" +
		"\x02\x02\u017D\u017E\x05<\x1F\x02\u017E\u017F\x07\x05\x02\x02\u017FM\x03" +
		"\x02\x02\x02\u0180\u0181\x07G\x02\x02\u0181\u0182\x07&\x02\x02\u0182\u0185" +
		"\x05f4\x02\u0183\u0184\x07>\x02\x02\u0184\u0186\x05P)\x02\u0185\u0183" +
		"\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186O\x03\x02\x02\x02\u0187" +
		"\u0188\x07M\x02\x02\u0188Q\x03\x02\x02\x02\u0189\u018A\x05f4\x02\u018A" +
		"S\x03\x02\x02\x02\u018B\u018C\x05l7\x02\u018CU\x03\x02\x02\x02\u018D\u0192" +
		"\x05X-\x02\u018E\u018F\x07\x04\x02\x02\u018F\u0191\x05X-\x02\u0190\u018E" +
		"\x03\x02\x02\x02\u0191\u0194\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02" +
		"\u0192\u0193\x03\x02\x02\x02\u0193W\x03\x02\x02\x02\u0194\u0192\x03\x02" +
		"\x02\x02\u0195\u0198\x05Z.\x02\u0196\u0198\x05\\/\x02\u0197\u0195\x03" +
		"\x02\x02\x02\u0197\u0196\x03\x02\x02\x02\u0198Y\x03\x02\x02\x02\u0199" +
		"\u019B\x05j6\x02\u019A\u019C\x07\x15\x02\x02\u019B\u019A\x03\x02\x02\x02" +
		"\u019B\u019C\x03\x02\x02\x02\u019C[\x03\x02\x02\x02\u019D\u019E\x05j6" +
		"\x02\u019E\u019F\x07\x18\x02\x02\u019F]\x03\x02\x02\x02\u01A0\u01A1\x05" +
		"f4\x02\u01A1_\x03\x02\x02\x02\u01A2\u01A3\x07%\x02\x02\u01A3\u01A4\x07" +
		"&\x02\x02\u01A4\u01A5\x07\x03\x02\x02\u01A5\u01A6\x05b2\x02\u01A6\u01A7" +
		"\x07\x05\x02\x02\u01A7a\x03\x02\x02\x02\u01A8\u01AD\x05\x16\f\x02\u01A9" +
		"\u01AA\x07\x04\x02\x02\u01AA\u01AC\x05\x16\f\x02\u01AB\u01A9\x03\x02\x02" +
		"\x02\u01AC\u01AF\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD\u01AE" +
		"\x03\x02\x02\x02\u01AEc\x03\x02\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01B0" +
		"\u01B1\x07?\x02\x02\u01B1\u01B4\x07G\x02\x02\u01B2\u01B4\x07N\x02\x02" +
		"\u01B3\u01B0\x03\x02\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4e\x03\x02" +
		"\x02\x02\u01B5\u01BA\x07M\x02\x02\u01B6\u01B7\x07\x07\x02\x02\u01B7\u01B9" +
		"\x07M\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02\x02" +
		"\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BBg\x03\x02" +
		"\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BD\u01BE\t\x04\x02\x02\u01BEi" +
		"\x03\x02\x02\x02\u01BF\u01C0\x05l7\x02\u01C0k\x03\x02\x02\x02\u01C1\u01C2" +
		"\b7\x01\x02\u01C2\u01C4\x05p9\x02\u01C3\u01C5\x05n8\x02\u01C4\u01C3\x03" +
		"\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C9\x03\x02\x02\x02\u01C6" +
		"\u01C7\x07+\x02\x02\u01C7\u01C9\x05l7\x05\u01C8\u01C1\x03\x02\x02\x02" +
		"\u01C8\u01C6\x03\x02\x02\x02\u01C9\u01D2\x03\x02\x02\x02\u01CA\u01CB\f" +
		"\x04\x02\x02\u01CB\u01CC\x07\x13\x02\x02\u01CC\u01D1\x05l7\x05\u01CD\u01CE" +
		"\f\x03\x02\x02\u01CE\u01CF\x07,\x02\x02\u01CF\u01D1\x05l7\x04\u01D0\u01CA" +
		"\x03\x02\x02\x02\u01D0\u01CD\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02" +
		"\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3m\x03\x02" +
		"\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5\u01D6\x05z>\x02\u01D6\u01D7" +
		"\x05p9\x02\u01D7\u01F0\x03\x02\x02\x02\u01D8\u01DA\x07+\x02\x02\u01D9" +
		"\u01D8\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DB\x03\x02" +
		"\x02\x02\u01DB\u01DC\x07\x16\x02\x02\u01DC\u01DD\x05p9\x02\u01DD\u01DE" +
		"\x07\x13\x02\x02\u01DE\u01DF\x05p9\x02\u01DF\u01F0\x03\x02\x02\x02\u01E0" +
		"\u01E2\x07+\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02" +
		"\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4\x07!\x02\x02\u01E4\u01E5" +
		"\x07\x03\x02\x02\u01E5\u01EA\x05p9\x02\u01E6\u01E7\x07\x04\x02\x02\u01E7" +
		"\u01E9\x05p9\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01EC\x03\x02\x02\x02" +
		"\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01ED\x03" +
		"\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01ED\u01EE\x07\x05\x02\x02\u01EE" +
		"\u01F0\x03\x02\x02\x02\u01EF\u01D5\x03\x02\x02\x02\u01EF\u01D9\x03\x02" +
		"\x02\x02\u01EF\u01E1\x03\x02\x02\x02\u01F0o\x03\x02\x02\x02\u01F1\u01F2" +
		"\x05r:\x02\u01F2q\x03\x02\x02\x02\u01F3\u01FC\x07M\x02\x02\u01F4\u01FC" +
		"\x05t;\x02\u01F5\u01FC\x05x=\x02\u01F6\u01FC\x05v<\x02\u01F7\u01F8\x07" +
		"\x03\x02\x02\u01F8\u01F9\x05j6\x02\u01F9\u01FA\x07\x05\x02\x02\u01FA\u01FC" +
		"\x03\x02\x02\x02\u01FB\u01F3\x03\x02\x02\x02\u01FB\u01F4\x03\x02\x02\x02" +
		"\u01FB\u01F5\x03\x02\x02\x02\u01FB\u01F6\x03\x02\x02\x02\u01FB\u01F7\x03" +
		"\x02\x02\x02\u01FCs\x03\x02\x02\x02\u01FD\u0201\x07K\x02\x02\u01FE\u0201" +
		"\x07L\x02\x02\u01FF\u0201\x07J\x02\x02\u0200\u01FD\x03\x02\x02\x02\u0200" +
		"\u01FE\x03\x02\x02\x02\u0200\u01FF\x03\x02\x02\x02\u0201u\x03\x02\x02" +
		"\x02\u0202\u0209\x07G\x02\x02\u0203\u0206\x07H\x02\x02\u0204\u0205\x07" +
		"<\x02\x02\u0205\u0207\x07G\x02\x02\u0206\u0204\x03\x02\x02\x02\u0206\u0207" +
		"\x03\x02\x02\x02\u0207\u0209\x03\x02\x02\x02\u0208\u0202\x03\x02\x02\x02" +
		"\u0208\u0203\x03\x02\x02\x02\u0209w\x03\x02\x02\x02\u020A\u020B\t\x05" +
		"\x02\x02\u020By\x03\x02\x02\x02\u020C\u020D\t\x06\x02\x02\u020D{\x03\x02" +
		"\x02\x028\x7F\x8D\x92\x9A\xA3\xAD\xBA\xC6\xCF\xD6\xD9\xDC\xE0\xF7\xFC" +
		"\u0105\u010B\u0112\u0118\u011F\u0129\u0131\u0139\u013E\u0143\u0146\u0151" +
		"\u0155\u0159\u0160\u0165\u0170\u0173\u0175\u017A\u0185\u0192\u0197\u019B" +
		"\u01AD\u01B3\u01BA\u01C4\u01C8\u01D0\u01D2\u01D9\u01E1\u01EA\u01EF\u01FB" +
		"\u0200\u0206\u0208";
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
	public actionStmt(): ActionStmtContext | undefined {
		return this.tryGetRuleContext(0, ActionStmtContext);
	}
	public assignStmt(): AssignStmtContext | undefined {
		return this.tryGetRuleContext(0, AssignStmtContext);
	}
	public importStmt(): ImportStmtContext | undefined {
		return this.tryGetRuleContext(0, ImportStmtContext);
	}
	public typeDefStmt(): TypeDefStmtContext | undefined {
		return this.tryGetRuleContext(0, TypeDefStmtContext);
	}
	public inlineStmt(): InlineStmtContext | undefined {
		return this.tryGetRuleContext(0, InlineStmtContext);
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


export class ActionStmtContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
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


export class AssignStmtContext extends ParserRuleContext {
	public _label!: Token;
	public EQ(): TerminalNode { return this.getToken(HSQLParser.EQ, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.EXPORT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_assignStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitAssignStmt) {
			return visitor.visitAssignStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefStmtContext extends ParserRuleContext {
	public MAP(): TerminalNode { return this.getToken(HSQLParser.MAP, 0); }
	public mapExportable(): MapExportableContext {
		return this.getRuleContext(0, MapExportableContext);
	}
	public typeDefExport(): TypeDefExportContext | undefined {
		return this.tryGetRuleContext(0, TypeDefExportContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_typeDefStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTypeDefStmt) {
			return visitor.visitTypeDefStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefExportContext extends ParserRuleContext {
	public EXPORT(): TerminalNode { return this.getToken(HSQLParser.EXPORT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_typeDefExport; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTypeDefExport) {
			return visitor.visitTypeDefExport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapExportableContext extends ParserRuleContext {
	public tableExport(): TableExportContext | undefined {
		return this.tryGetRuleContext(0, TableExportContext);
	}
	public layoutExport(): LayoutExportContext | undefined {
		return this.tryGetRuleContext(0, LayoutExportContext);
	}
	public identifierExport(): IdentifierExportContext | undefined {
		return this.tryGetRuleContext(0, IdentifierExportContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_mapExportable; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitMapExportable) {
			return visitor.visitMapExportable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableExportContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.IDENTIFIER, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.TABLE, 0); }
	public identifierExport(): IdentifierExportContext[];
	public identifierExport(i: number): IdentifierExportContext;
	public identifierExport(i?: number): IdentifierExportContext | IdentifierExportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierExportContext);
		} else {
			return this.getRuleContext(i, IdentifierExportContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_tableExport; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTableExport) {
			return visitor.visitTableExport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LayoutExportContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.IDENTIFIER, 0); }
	public LAYOUT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.LAYOUT, 0); }
	public identifierExport(): IdentifierExportContext[];
	public identifierExport(i: number): IdentifierExportContext;
	public identifierExport(i?: number): IdentifierExportContext | IdentifierExportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierExportContext);
		} else {
			return this.getRuleContext(i, IdentifierExportContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_layoutExport; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitLayoutExport) {
			return visitor.visitLayoutExport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierExportContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_identifierExport; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitIdentifierExport) {
			return visitor.visitIdentifierExport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStmtContext extends ParserRuleContext {
	public _alias!: Token;
	public IMPORT(): TerminalNode { return this.getToken(HSQLParser.IMPORT, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.IDENTIFIER);
		} else {
			return this.getToken(HSQLParser.IDENTIFIER, i);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.AS, 0); }
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


export class ExprContext extends ParserRuleContext {
	public simpleIdentifier(): SimpleIdentifierContext | undefined {
		return this.tryGetRuleContext(0, SimpleIdentifierContext);
	}
	public selectStmt(): SelectStmtContext | undefined {
		return this.tryGetRuleContext(0, SelectStmtContext);
	}
	public mlStmt(): MlStmtContext | undefined {
		return this.tryGetRuleContext(0, MlStmtContext);
	}
	public layoutStmt(): LayoutStmtContext | undefined {
		return this.tryGetRuleContext(0, LayoutStmtContext);
	}
	public inlineStmt(): InlineStmtContext | undefined {
		return this.tryGetRuleContext(0, InlineStmtContext);
	}
	public outputStmt(): OutputStmtContext | undefined {
		return this.tryGetRuleContext(0, OutputStmtContext);
	}
	public plotStmt(): PlotStmtContext | undefined {
		return this.tryGetRuleContext(0, PlotStmtContext);
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


export class SimpleIdentifierContext extends ParserRuleContext {
	public qualifiedIdentifier(): QualifiedIdentifierContext {
		return this.getRuleContext(0, QualifiedIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_simpleIdentifier; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSimpleIdentifier) {
			return visitor.visitSimpleIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputStmtContext extends ParserRuleContext {
	public _label!: Token;
	public OUTPUT(): TerminalNode { return this.getToken(HSQLParser.OUTPUT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	public outputVariant(): OutputVariantContext | undefined {
		return this.tryGetRuleContext(0, OutputVariantContext);
	}
	public outputUpdateOption(): OutputUpdateOptionContext | undefined {
		return this.tryGetRuleContext(0, OutputUpdateOptionContext);
	}
	public outputExpireOption(): OutputExpireOptionContext | undefined {
		return this.tryGetRuleContext(0, OutputExpireOptionContext);
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


export class OutputVariantContext extends ParserRuleContext {
	public namedOutputStatement(): NamedOutputStatementContext | undefined {
		return this.tryGetRuleContext(0, NamedOutputStatementContext);
	}
	public fileOutputStatement(): FileOutputStatementContext | undefined {
		return this.tryGetRuleContext(0, FileOutputStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_outputVariant; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitOutputVariant) {
			return visitor.visitOutputVariant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedOutputStatementContext extends ParserRuleContext {
	public TITLE(): TerminalNode { return this.getToken(HSQLParser.TITLE, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_namedOutputStatement; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitNamedOutputStatement) {
			return visitor.visitNamedOutputStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedOutputStringContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_namedOutputString; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitNamedOutputString) {
			return visitor.visitNamedOutputString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileOutputStatementContext extends ParserRuleContext {
	public _fileName!: StringContext;
	public _fileType!: Token;
	public FILE(): TerminalNode { return this.getToken(HSQLParser.FILE, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_fileOutputStatement; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitFileOutputStatement) {
			return visitor.visitFileOutputStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputUpdateOptionContext extends ParserRuleContext {
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.UPDATE, 0); }
	public OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.OVERWRITE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_outputUpdateOption; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitOutputUpdateOption) {
			return visitor.visitOutputUpdateOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputExpireOptionContext extends ParserRuleContext {
	public EXPIRE(): TerminalNode { return this.getToken(HSQLParser.EXPIRE, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_outputExpireOption; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitOutputExpireOption) {
			return visitor.visitOutputExpireOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlotStmtContext extends ParserRuleContext {
	public _labelIdentifier!: QualifiedIdentifierContext;
	public _titleIdentifier!: Token;
	public _plottype!: Token;
	public PLOT(): TerminalNode { return this.getToken(HSQLParser.PLOT, 0); }
	public FROM(): TerminalNode { return this.getToken(HSQLParser.FROM, 0); }
	public TITLE(): TerminalNode { return this.getToken(HSQLParser.TITLE, 0); }
	public qualifiedIdentifier(): QualifiedIdentifierContext {
		return this.getRuleContext(0, QualifiedIdentifierContext);
	}
	public STRING(): TerminalNode { return this.getToken(HSQLParser.STRING, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.TYPE, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.IDENTIFIER, 0); }
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
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitMlStmt) {
			return visitor.visitMlStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrainContext extends ParserRuleContext {
	public _ind!: QualifiedIdentifierContext;
	public _dep!: QualifiedIdentifierContext;
	public _test!: QualifiedIdentifierContext;
	public _method!: Token;
	public TRAIN(): TerminalNode { return this.getToken(HSQLParser.TRAIN, 0); }
	public FROM(): TerminalNode { return this.getToken(HSQLParser.FROM, 0); }
	public METHOD(): TerminalNode { return this.getToken(HSQLParser.METHOD, 0); }
	public qualifiedIdentifier(): QualifiedIdentifierContext[];
	public qualifiedIdentifier(i: number): QualifiedIdentifierContext;
	public qualifiedIdentifier(i?: number): QualifiedIdentifierContext | QualifiedIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedIdentifierContext);
		} else {
			return this.getRuleContext(i, QualifiedIdentifierContext);
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
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitTrain) {
			return visitor.visitTrain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementaryMLContext extends ParserRuleContext {
	public _ind!: QualifiedIdentifierContext;
	public _ind2!: QualifiedIdentifierContext;
	public _method!: Token;
	public PREDICT(): TerminalNode { return this.getToken(HSQLParser.PREDICT, 0); }
	public FROM(): TerminalNode { return this.getToken(HSQLParser.FROM, 0); }
	public METHOD(): TerminalNode { return this.getToken(HSQLParser.METHOD, 0); }
	public qualifiedIdentifier(): QualifiedIdentifierContext[];
	public qualifiedIdentifier(i: number): QualifiedIdentifierContext;
	public qualifiedIdentifier(i?: number): QualifiedIdentifierContext | QualifiedIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedIdentifierContext);
		} else {
			return this.getRuleContext(i, QualifiedIdentifierContext);
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
	public get ruleIndex(): number { return HSQLParser.RULE_elementaryML; }
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
	public qualifiedIdentifier(): QualifiedIdentifierContext | undefined {
		return this.tryGetRuleContext(0, QualifiedIdentifierContext);
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


export class PredictContext extends ParserRuleContext {
	public _model!: QualifiedIdentifierContext;
	public _ind!: QualifiedIdentifierContext;
	public _method!: Token;
	public PREDICT(): TerminalNode { return this.getToken(HSQLParser.PREDICT, 0); }
	public FROM(): TerminalNode { return this.getToken(HSQLParser.FROM, 0); }
	public qualifiedIdentifier(): QualifiedIdentifierContext[];
	public qualifiedIdentifier(i: number): QualifiedIdentifierContext;
	public qualifiedIdentifier(i?: number): QualifiedIdentifierContext | QualifiedIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedIdentifierContext);
		} else {
			return this.getRuleContext(i, QualifiedIdentifierContext);
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
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitPredict) {
			return visitor.visitPredict(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectStmtContext extends ParserRuleContext {
	public _columns!: SelectColumnsContext;
	public _fromclause!: SelectFromClauseContext;
	public _whereclause!: SelectWhereClauseContext;
	public _groupbyclause!: GroupByClauseContext;
	public _orderbyclause!: OrderByClauseContext;
	public SELECT(): TerminalNode { return this.getToken(HSQLParser.SELECT, 0); }
	public FROM(): TerminalNode { return this.getToken(HSQLParser.FROM, 0); }
	public selectColumns(): SelectColumnsContext {
		return this.getRuleContext(0, SelectColumnsContext);
	}
	public selectFromClause(): SelectFromClauseContext {
		return this.getRuleContext(0, SelectFromClauseContext);
	}
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.WHERE, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.GROUP, 0); }
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.BY);
		} else {
			return this.getToken(HSQLParser.BY, i);
		}
	}
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.ORDER, 0); }
	public joinClause(): JoinClauseContext | undefined {
		return this.tryGetRuleContext(0, JoinClauseContext);
	}
	public selectWhereClause(): SelectWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, SelectWhereClauseContext);
	}
	public groupByClause(): GroupByClauseContext | undefined {
		return this.tryGetRuleContext(0, GroupByClauseContext);
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
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectStmt) {
			return visitor.visitSelectStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinClauseContext extends ParserRuleContext {
	public _joinidentifier!: QualifiedIdentifierContext;
	public _leftrecset!: QualifiedIdentifierContext;
	public _joincondition!: ComparisonOperatorContext;
	public _rightrecset!: QualifiedIdentifierContext;
	public joinType(): JoinTypeContext {
		return this.getRuleContext(0, JoinTypeContext);
	}
	public JOIN(): TerminalNode { return this.getToken(HSQLParser.JOIN, 0); }
	public ON(): TerminalNode { return this.getToken(HSQLParser.ON, 0); }
	public qualifiedIdentifier(): QualifiedIdentifierContext[];
	public qualifiedIdentifier(i: number): QualifiedIdentifierContext;
	public qualifiedIdentifier(i?: number): QualifiedIdentifierContext | QualifiedIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedIdentifierContext);
		} else {
			return this.getRuleContext(i, QualifiedIdentifierContext);
		}
	}
	public comparisonOperator(): ComparisonOperatorContext | undefined {
		return this.tryGetRuleContext(0, ComparisonOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_joinClause; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitJoinClause) {
			return visitor.visitJoinClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_joinType; }
	public copyFrom(ctx: JoinTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class InnerJoinContext extends JoinTypeContext {
	public INNER(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.INNER, 0); }
	constructor(ctx: JoinTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitInnerJoin) {
			return visitor.visitInnerJoin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OuterJoinContext extends JoinTypeContext {
	public _specifier!: Token;
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.LEFT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.RIGHT, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.OUTER, 0); }
	constructor(ctx: JoinTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitOuterJoin) {
			return visitor.visitOuterJoin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FullOuterJoinContext extends JoinTypeContext {
	public _specifier!: Token;
	public OUTER(): TerminalNode { return this.getToken(HSQLParser.OUTER, 0); }
	public FULL(): TerminalNode { return this.getToken(HSQLParser.FULL, 0); }
	constructor(ctx: JoinTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitFullOuterJoin) {
			return visitor.visitFullOuterJoin(this);
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
	public aggregatedSelectColumn(): AggregatedSelectColumnContext | undefined {
		return this.tryGetRuleContext(0, AggregatedSelectColumnContext);
	}
	public selectColumn(): SelectColumnContext | undefined {
		return this.tryGetRuleContext(0, SelectColumnContext);
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


export class AggregatedSelectColumnContext extends ParserRuleContext {
	public _aggregate!: Token;
	public selectColumn(): SelectColumnContext {
		return this.getRuleContext(0, SelectColumnContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_aggregatedSelectColumn; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitAggregatedSelectColumn) {
			return visitor.visitAggregatedSelectColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectColumnContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectColumn; }
	public copyFrom(ctx: SelectColumnContext): void {
		super.copyFrom(ctx);
	}
}
export class WildColContext extends SelectColumnContext {
	public _wild!: Token;
	constructor(ctx: SelectColumnContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitWildCol) {
			return visitor.visitWildCol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StdcolContext extends SelectColumnContext {
	public _column!: Token;
	public _type!: DataTypeContext;
	public _alias!: Token;
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HSQLParser.IDENTIFIER);
		} else {
			return this.getToken(HSQLParser.IDENTIFIER, i);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.AS, 0); }
	public dataType(): DataTypeContext | undefined {
		return this.tryGetRuleContext(0, DataTypeContext);
	}
	constructor(ctx: SelectColumnContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitStdcol) {
			return visitor.visitStdcol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectFromClauseContext extends ParserRuleContext {
	public nestedSelectStmt(): NestedSelectStmtContext | undefined {
		return this.tryGetRuleContext(0, NestedSelectStmtContext);
	}
	public selectTableName(): SelectTableNameContext | undefined {
		return this.tryGetRuleContext(0, SelectTableNameContext);
	}
	public selectDataset(): SelectDatasetContext | undefined {
		return this.tryGetRuleContext(0, SelectDatasetContext);
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


export class NestedSelectStmtContext extends ParserRuleContext {
	public selectStmt(): SelectStmtContext {
		return this.getRuleContext(0, SelectStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_nestedSelectStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitNestedSelectStmt) {
			return visitor.visitNestedSelectStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectDatasetContext extends ParserRuleContext {
	public _str!: Token;
	public LAYOUT(): TerminalNode { return this.getToken(HSQLParser.LAYOUT, 0); }
	public qualifiedIdentifier(): QualifiedIdentifierContext {
		return this.getRuleContext(0, QualifiedIdentifierContext);
	}
	public STRING(): TerminalNode { return this.getToken(HSQLParser.STRING, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.TYPE, 0); }
	public selectDatasetFile(): SelectDatasetFileContext | undefined {
		return this.tryGetRuleContext(0, SelectDatasetFileContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectDataset; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectDataset) {
			return visitor.visitSelectDataset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectDatasetFileContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(HSQLParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectDatasetFile; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectDatasetFile) {
			return visitor.visitSelectDatasetFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectTableNameContext extends ParserRuleContext {
	public qualifiedIdentifier(): QualifiedIdentifierContext {
		return this.getRuleContext(0, QualifiedIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_selectTableName; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitSelectTableName) {
			return visitor.visitSelectTableName(this);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DESC(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.DESC, 0); }
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


export class GroupByClauseContext extends ParserRuleContext {
	public qualifiedIdentifier(): QualifiedIdentifierContext {
		return this.getRuleContext(0, QualifiedIdentifierContext);
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


export class LayoutStmtContext extends ParserRuleContext {
	public CREATE(): TerminalNode { return this.getToken(HSQLParser.CREATE, 0); }
	public LAYOUT(): TerminalNode { return this.getToken(HSQLParser.LAYOUT, 0); }
	public layoutContent(): LayoutContentContext {
		return this.getRuleContext(0, LayoutContentContext);
	}
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
	public identifierExport(): IdentifierExportContext[];
	public identifierExport(i: number): IdentifierExportContext;
	public identifierExport(i?: number): IdentifierExportContext | IdentifierExportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierExportContext);
		} else {
			return this.getRuleContext(i, IdentifierExportContext);
		}
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


export class InlineStmtContext extends ParserRuleContext {
	public NCOMPILE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.NCOMPILE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.STRING, 0); }
	public ECL_SNIPPETS(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.ECL_SNIPPETS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HSQLParser.RULE_inlineStmt; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitInlineStmt) {
			return visitor.visitInlineStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedIdentifierContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return HSQLParser.RULE_qualifiedIdentifier; }
	// @Override
	public accept<Result>(visitor: HSQLVisitor<Result>): Result {
		if (visitor.visitQualifiedIdentifier) {
			return visitor.visitQualifiedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataTypeContext extends ParserRuleContext {
	public DECIMAL_TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.DECIMAL_TYPE, 0); }
	public REAL_TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.REAL_TYPE, 0); }
	public INTEGER_TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.INTEGER_TYPE, 0); }
	public VARSTRING_TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.VARSTRING_TYPE, 0); }
	public STRING_TYPE(): TerminalNode | undefined { return this.tryGetToken(HSQLParser.STRING_TYPE, 0); }
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
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


