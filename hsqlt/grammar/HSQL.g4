grammar HSQL;

//Array of identifiers, and imports
@parser::members {
  //Nothing here anymore
}

program: (completestmt)* EOF;

completestmt: stmt SEMICOLON;

stmt:
	actionStmt // actions like output and plot
	| implicitActionStmt // a definition that is an action
	| assignStmt // assignment
	| importStmt // importing
	| typeDefStmt // type definition
	| inlineStmt; // inline ECL statement
assignStmt:
	EXPORT? label = IDENTIFIER '=' expr; //assign and optionally statement

actionStmt: outputStmt | plotStmt;

typeDefStmt: MAP typeDefExport? mapExportable;

typeDefExport: EXPORT;

mapExportable: tableExport | layoutExport | identifierExport;

tableExport: (
		IDENTIFIER TABLE '(' identifierExport (
			',' identifierExport
		)*
	) ')';

layoutExport: (
		IDENTIFIER LAYOUT '(' identifierExport (
			',' identifierExport
		)*
	) ')';

identifierExport: IDENTIFIER dataType;

importStmt: IMPORT IDENTIFIER (AS alias = IDENTIFIER)?;

// TODO Add insert and updates
implicitActionStmt: selectStmt;

expr:
	simpleIdentifier // another variable
	| selectStmt
	| mlStmt
	| layoutStmt
	| inlineStmt;

simpleIdentifier: IDENTIFIER;

//All the varieties of output in ECl need different rules
outputStmt:
	OUTPUT label = IDENTIFIER outputVariant? outputUpdateOption? outputExpireOption?;

//Note for future: Can add record formats to the rules below
outputVariant: namedOutputStatement | fileOutputStatement;

namedOutputStatement: TITLE string;

fileOutputStatement:
	FILE fileName = string fileType = IDENTIFIER;

outputUpdateOption: UPDATE | OVERWRITE;

outputExpireOption: EXPIRE number;

plotStmt:
	PLOT FROM labelIdentifier = qualifiedIdentifier TITLE titleIdentifier = STRING (
		TYPE plottype = IDENTIFIER
	)?;

mlStmt: train | predict | elementaryML;

// This is a standard get model operation
train:
	TRAIN FROM ind = qualifiedIdentifier ',' dep = qualifiedIdentifier (
		',' test = qualifiedIdentifier
	)? METHOD method = IDENTIFIER (OPTION trainOptions)?;

// This variant of ML is useful in DBScan where a separate model isnt trained
elementaryML:
	PREDICT FROM ind = qualifiedIdentifier (
		',' ind2 = qualifiedIdentifier
	)? METHOD method = IDENTIFIER (OPTION trainOptions)?;

trainOptions: (trainOption) ( ',' trainOption)*;

trainOption: IDENTIFIER '=' trainValue;

trainValue: number | string | qualifiedIdentifier;

predict:
	PREDICT model = qualifiedIdentifier FROM ind = qualifiedIdentifier (
		METHOD method = IDENTIFIER
	)?;

selectStmt:
	SELECT columns = selectColumns FROM fromclause = selectFromClause (
		WHERE whereclause = selectWhereClause
	)? (GROUP BY groupbyclause = groupByClause)? (
		ORDER BY orderbyclause = orderByClause
	)? (joinClause)?;

joinClause: (joinType)? JOIN joinidentifier = qualifiedIdentifier ON (
		leftrecset = qualifiedIdentifier joincondition = comparisonOperator rightrecset =
			qualifiedIdentifier
	);

joinType: (INNER) | ((LEFT | RIGHT | FULL) (OUTER | ONLY));

selectColumns: (
		(aggregatedSelectColumn | selectColumn) (
			',' (aggregatedSelectColumn | selectColumn)
		)*
	);

// Allow for aggregates
aggregatedSelectColumn:
	aggregate = IDENTIFIER '(' selectColumn ')';

//Allow for optional data types
selectColumn:
	wild = '*'
	| column = IDENTIFIER (
		AS (type = dataType)? alias = IDENTIFIER
	)?;

selectFromClause:
	nestedSelectStmt
	| selectTableName
	| selectDataset;

nestedSelectStmt: '(' selectStmt ')';
selectDataset:
	str = STRING LAYOUT qualifiedIdentifier (
		TYPE selectDatasetFile
	)?;
selectDatasetFile: IDENTIFIER;

selectTableName: qualifiedIdentifier;

selectWhereClause: booleanExpression;

orderByClause: sortItem (',' sortItem)*;

sortItem: ascSortItem | descSortItem;

ascSortItem: expression (ASC)?;
descSortItem: expression (DESC);
// sortItem: expression ordering = (ASC | DESC)?;

groupByClause: qualifiedIdentifier;

layoutStmt: CREATE LAYOUT '(' layoutContent ')';

layoutContent: identifierExport (',' identifierExport)*;

inlineStmt: NCOMPILE STRING | ECL_SNIPPETS;

qualifiedIdentifier: IDENTIFIER ('.' IDENTIFIER)*;

dataType:
	DECIMAL_TYPE
	| REAL_TYPE
	| INTEGER_TYPE
	| VARSTRING_TYPE
	| STRING_TYPE;

expression: booleanExpression;

booleanExpression:
	valueExpression predicate[$valueExpression.ctx]?					# predicated
	| NOT booleanExpression												# logicalNot
	| left = booleanExpression operator = AND right = booleanExpression	# logicalBinary
	| left = booleanExpression operator = OR right = booleanExpression	# logicalBinary;

predicate[ParserRuleContext value]:
	comparisonOperator right = valueExpression							# comparison
	| NOT? BETWEEN lower = valueExpression AND upper = valueExpression	# between
	| NOT? IN '(' valueExpression (',' valueExpression)* ')'			# inList;

valueExpression: primaryExpression # valueExpressionDefault;

primaryExpression:
	IDENTIFIER				# identifier
	| number				# numericLiteral
	| booleanValue			# booleanLiteral
	| string				# stringLiteral
	| '(' expression ')'	# parenthesizedExpression;

number:
	DECIMAL_VALUE	# decimalLiteral
	| DOUBLE_VALUE	# doubleLiteral
	| INTEGER_VALUE	# integerLiteral;

string:
	STRING								# basicStringLiteral
	| UNICODE_STRING (UESCAPE STRING)?	# unicodeStringLiteral;

booleanValue: TRUE | FALSE;

//For joins
OUTER: O U T E R;
ONLY: O N L Y;

///Data Types
REAL_TYPE: R E A L;
INTEGER_TYPE: I N T E G E R;
DECIMAL_TYPE: D E C I M A L;
VARSTRING_TYPE: V A R STRING;
STRING_TYPE: S T R I N G;

//Merge types
UNSTABLE: U N STABLE;
STABLE: S T A B L E;
TABLE: T A B L E;

EXPORT: E X P O R T;

AND: A N D;
AS: A S;
ASC: A S C;
// AVG: A V G;
BETWEEN: B E T W E E N;
BY: B Y;
// COUNT: C O U N T;
DESC: D E S C;
DEPENDENT: D E P E N D E N T;
FROM: F R O M;
GROUP: G R O U P;
IMPORT: I M P O R T;
OPTION: O P T I O N;
OPTIONS: OPTION S;
OVERWRITE: O V E R W R I T E;
UPDATE: U P D A T E;
IN: I N;
ON: O N;
INDEPENDENT: I N D E P E N D E N T;
IDCOLUMN: I D C O L U M N;
CREATE: C R E A T E;
LAYOUT: L A Y O U T;
TRAIN: T R A I N;
FILE: F I L E;
MAP: M A P;
METHOD: M E T H O D;
NOT: N O T;
OR: O R;
ORDER: O R D E R;
OUTPUT: O U T P U T;
PLOT: P L O T;
PREDICT: P R E D I C T;
PROJECT: P R O J E C T;
SELECT: S E L E C T;
JOIN: J O I N;
INNER: I N N E R;
LEFT: L E F T;
RIGHT: R I G H T;
FULL: F U L L;
SUM: S U M;
TITLE: T I T L E;
EXPIRE: E X P I R E;

//Writing tRue is not very pleasant to code
TRUE: 'TRUE' | 'true' | 'True';
FALSE: 'FALSE' | 'false' | 'False';

UESCAPE: U E S C A P E;
WHERE: W H E R E;
TYPE: T Y P E;
NCOMPILE: '__' E C L;

//Greek question mark proof
SEMICOLON: ';' | ';';

comparisonOperator: EQ | NEQ | LT | LTE | GT | GTE;

EQ: '=';
NEQ: '<>' | '!=';
LT: '<';
LTE: '<=';
GT: '>';
GTE: '>=';

STRING: '\'' ( '\\\'' | ~'\'' | '\'\'')* '\'';

UNICODE_STRING: 'U&\'' ( ~'\'' | '\'\'')* '\'';

// Note: we allow any character inside the binary literal and validate its a correct literal when
// the AST is being constructed. This allows us to provide more meaningful error messages to the
// user
BINARY_LITERAL: 'X\'' (~'\'')* '\'';

INTEGER_VALUE: DIGIT+;

DECIMAL_VALUE: DIGIT+ '.' DIGIT* | '.' DIGIT+;

DOUBLE_VALUE:
	DIGIT+ ('.' DIGIT*)? EXPONENT
	| '.' DIGIT+ EXPONENT;

IDENTIFIER: (LETTER | '_') (LETTER | DIGIT | '_' | '@' | ':')*;

ECL_SNIPPETS: '$' ~[$]* '$';
SIMPLE_COMMENT: '--' ~[\r\n]* '\r'? '\n'? -> channel(HIDDEN);

SIMPLE_C_COMMENT: '//' ~[\r\n]* '\r'? '\n'? -> channel(HIDDEN);

BRACKETED_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

WS: [ \r\n] -> skip;

fragment DIGIT: [0-9];

fragment LETTER: [a-zA-Z];

fragment EXPONENT: 'E' [+-]? DIGIT+;

fragment A: [aA]; // match either an 'a' or 'A'
fragment B: [bB];
fragment C: [cC];
fragment D: [dD];
fragment E: [eE];
fragment F: [fF];
fragment G: [gG];
fragment H: [hH];
fragment I: [iI];
fragment J: [jJ];
fragment K: [kK];
fragment L: [lL];
fragment M: [mM];
fragment N: [nN];
fragment O: [oO];
fragment P: [pP];
fragment Q: [qQ];
fragment R: [rR];
fragment S: [sS];
fragment T: [tT];
fragment U: [uU];
fragment V: [vV];
fragment W: [wW];
fragment X: [xX];
fragment Y: [yY];
fragment Z: [zZ];

