grammar HSQL;

@header {
// for the join clause type
import {SelectJoinType} from '../ast/SelectHelpers';

}
program: (completestmt)* EOF;

completestmt: stmt SEMICOLON;

stmt: definitionStmt | actionStmt | importStmt;

definitionStmt: scope label = IDENTIFIER EQ expr;

expr: definition | actionStmt;
// | transformStmt | mlStmt | moduleStmt;
actionStmt: selectStmt | outputStmt |
/* plotStmt |*/ literal;

// SELECT STATEMENT skipping the having for later
selectStmt:
	SELECT distinctClause? selectColumns selectFromClause (
		WHERE selectWhereClause
	)? selectGroupByClause? (ORDER BY orderByClause)? /* (HAVING selectHavingClause)? */
		limitOffsetClause?;

distinctClause: DISTINCT;
// selectHavingClause: booleanExpression;
selectGroupByClause: GROUP BY groupByClause;

idSet: IDENTIFIER ( COMMA_ IDENTIFIER)*;
selectColumns: selectCol ( COMMA_ selectCol)*;

selectCol: col;

// columns `can` be definitions. This is very helpful in resolving cases of multi-table selects
col:
	IDENTIFIER BSTART_ MULTIPLY BEND_ aliasingCol?				# selectAggregatedEverythingCol
	| IDENTIFIER BSTART_ column = IDENTIFIER BEND_ aliasingCol?	# selectAggregatedOneCol
	| IDENTIFIER aliasingCol?									# selectOneCol
	| MULTIPLY													# wildAll;
/*
 * Allow access to the column it was applied to. this should be helpful while generating the
 * AST/code
 */
aliasingCol: AS alias = IDENTIFIER;

/* note that from can actually have multiple sources. However, while dealing with codegen, we may
 need to split the cases for 1 table and 1+ tables
 */
selectFromClause:
	FROM (
		selectFromRef (COMMA_ selectFromRef)*
		// | joinedTable
	);

// here's a big issue -> antlr does not like mutually left recursive grammar. However, direct left
// recursion works.

// the selectfromtablereference needs a big change due to this
selectFromRef:
	BSTART_ selectStmt BEND_ selectAlias									# selectFromDerivedTable
	| definition selectAlias?												# selectFromDefinition
	| BSTART_ selectFromRef (COMMA_ selectFromRef)* BEND_					# selectBracketedFromTable
	| selectFromRef joinOperator selectFromRef joinConstraint selectAlias?	# selectJoinedTable;
// joinconstraint is mandatory or else the selectAlias will never come up, the selectFromRef will consume it
selectAlias: AS? IDENTIFIER;

// join_operator: COMMA_ | (LEFT OUTER? | RIGHT OUTER? | FULL OUTER? | INNER | CROSS)? JOIN;
joinOperator
	locals[ joinType:SelectJoinType=SelectJoinType.INNER]:
	(
		LEFT OUTER? {$joinType=SelectJoinType.LEFT;}
		| RIGHT OUTER? {$joinType=SelectJoinType.RIGHT;}
		| FULL OUTER? {$joinType=SelectJoinType.OUTER;}
		| INNER
		/* | CROSS {$joinType=SelectJoinType.CROSS;} */
	)? JOIN;
// nestedSelectStmt: BSTART_ selectStmt BEND_;
selectWhereClause: booleanExpression;

joinConstraint: ON joinSpecification;
//we limit it to qualifiedidentifiers only

// joinedTable: selectFromTableReference ( join_operator selectFromTableReference joinConstraint?
// //if no constraint, assume TRUE (can use that to throw an error) )*; colRef: USING BSTART_
// IDENTIFIER (COMMA_ IDENTIFIER)* BEND_

//the clause is allowed to be an entire join condition *but*
joinSpecification:
	leftrecset = definition comparisonOperator rightrecset = definition;
//joinSpecification: ON booleanExpression;

groupByClause: idSet;
orderByClause: sortItem (COMMA_ sortItem)*;
sortItem: ascSortItem | descSortItem;
ascSortItem: IDENTIFIER (ASC)?;
descSortItem: IDENTIFIER DESC;
// joinClause: joinType JOIN joinidentifier = definition ON ( leftrecset = definition joincondition
// = logicalOperator rightrecset = definition );

// joinType: INNER? # innerJoin | (specifier = (LEFT | RIGHT | FULL) OUTER?) # outerJoin |
// (specifier = FULL OUTER) # fullOuterJoin;

limitOffsetClause: LIMIT INTEGER_VALUE offsetClause?;
offsetClause: OFFSET INTEGER_VALUE;

// operators: comparisonOperator | arithmeticOPERATOR | logicalOperator;

// aggregationOperator: COUNT # countAggr | AVG # avgAggr | MIN # minAggr | MAX # maxAggr | SUM #
// sumAggr | TRIM # trimAggr;
comparisonOperator: EQ | NEQ | LT | LTE | GT | GTE;
// arithmeticOPERATOR: PLUS | SUBSTRACT | MULTIPLY | DIVIDE | MODULO;
logicalOperator: AND | OR | NOT | IN | BETWEEN | EXISTS;
literal: number | string | booleanValue;
// todo: More precise defination
dataType:
	REAL_TYPE
	| INTEGER_TYPE
	| DECIMAL_TYPE
	| VARSTRING_TYPE
	| STRING_TYPE
	| BOOLEAN;
alterOperator: ADD | DROP | MODIFY;

// use % instead of $ -> that operator is used in ECL SNIPPETS for now
overDefinition: overDefinitionRoot ('.' overDefinitionTail)*;

overDefinitionRoot:
	IDENTIFIER	# normalIdentifier
	| MODULO	# rootIdentifier
	| XOR		# parentIdentifier;

overDefinitionTail:
	IDENTIFIER	# normalTailIdentifier
	| XOR		# parentTailIdentifier;

definition: IDENTIFIER ('.' IDENTIFIER)*;

expression: booleanExpression;

booleanExpression:
	valueExpression predicate[$valueExpression.ctx]?					# predicated
	| NOT booleanExpression												# logicalNot
	| left = booleanExpression operator = AND right = booleanExpression	# logicalBinary
	| left = booleanExpression operator = OR right = booleanExpression	# logicalBinary;

predicate[ParserRuleContext ctx]:
	comparisonOperator right = valueExpression							# comparison
	| NOT? BETWEEN lower = valueExpression AND upper = valueExpression	# between
	| NOT? IN BSTART_ valueExpression (COMMA_ valueExpression)* BEND_	# inList;

valueExpression: primaryExpression # valueExpressionDefault;

// to use later - expression
/* derivedExpressions: IDENTIFIER BSTART_ fargs BEND_ ; //function args
 * 
 * fargs: expression (COMMA_ expression)* |;
 */

primaryExpression:
	IDENTIFIER					# identifierLiteral
	| number					# numericLiteral
	| booleanValue				# booleanLiteral
	| string					# stringLiteral
	| BSTART_ expression BEND_	# parenthesizedExpression;

number:
	DECIMAL_VALUE	# decimalLiteral
	| DOUBLE_VALUE	# doubleLiteral
	| INTEGER_VALUE	# integerLiteral;

string:
	STRING # basicStringLiteral
	// not sure what to do with unicode yet
	| UNICODE_STRING (UESCAPE STRING)? # unicodeStringLiteral;

booleanValue: TRUE | FALSE;

/* IMPORT STATEMENT
 */

importStmt: IMPORT overDefinition (AS IDENTIFIER)?;

// $.^ AS upperDir

/* OUTPUT STATEMENT
 */

outputStmt: OUTPUT attribute namedOutput? toFile?;

attribute: definition | selectStmt | literal;
namedOutput: (TITLE)? IDENTIFIER;
toFile: (FILE)? STRING (OVERWRITE)?;

/* PLOT STATEMENT
 */
// plotStmt: PLOT FROM definition (TITLE)? IDENTIFIER ((TYPE)? IDENTIFIER)?;

// /* MODULE STATEMENT */

// moduleStmt: MODULE BSTART_ (definitionStmt SEMICOLON)* BEND_;

// /* TRANSFORM STATEMENT */

// transformStmt: ALTER TABLE definition (TO IDENTIFIER)? alterOperator colName = IDENTIFIER (
// COMMA_ dataType )?;

// /* ML STATEMENT SAME AS v0 */ mlStmt: train | predict | elementaryML;

// // This is a standard get model operation train: TRAIN FROM ind = definition COMMA_ dep =
// definition ( COMMA_ test = definition )? METHOD method = IDENTIFIER (OPTION trainOptions)?;

// // This variant of ML is useful in DBScan where a separate model isnt trained elementaryML:
// PREDICT FROM ind = definition (COMMA_ ind2 = definition)? METHOD method = IDENTIFIER ( OPTION
// trainOptions )?;

// trainOptions: (trainOption) ( COMMA_ trainOption)*;

// trainOption: IDENTIFIER EQ trainValue;

// // TAG put expr trainValue: number | string | definition;

// predict: PREDICT model = definition FROM ind = definition ( METHOD method = IDENTIFIER )?;

scope: EXPORT | SHARED |;

//****************************************Lexer Rules******************************************/

// comments -> channel 2, ws -> channel 1 main -> channel 0

///Data Types  ******* Further 
REAL_TYPE: R E A L;
INTEGER_TYPE: I N T E G E R;
DECIMAL_TYPE: D E C I M A L;
VARSTRING_TYPE: V A R STRING;
STRING_TYPE: S T R I N G;
BOOLEAN: B O O L E A N;
//DATE to be added

//Merge types
UNSTABLE: U N STABLE;
STABLE: S T A B L E;

// Alter
TABLE: T A B L E;
ALTER: A L T E R;
TO: T O;
ADD: A D D;
DROP: D R O P;
MODIFY: M O D I F Y;

// Scope 
EXPORT: E X P O R T;
SHARED: S H A R E D;

// SORT
ASC: A S C;
DESC: D E S C;
ORDER: O R D E R;

// Aggregation
GROUP: G R O U P;
BY: B Y;
// COUNT: C O U N T; AVG: A V G; SUM: S U M; MIN: M I N; MAX: M A X; TRIM: T R I M;

TRAIN: T R A I N;
PREDICT: P R E D I C T;
PLOT: P L O T;
OUTPUT: O U T P U T;
OPTION: O P T I O N;
OPTIONS: OPTION S;
OVERWRITE: O V E R W R I T E;
UPDATE: U P D A T E;
ON: O N;
INDEPENDENT: I N D E P E N D E N T;
IDCOLUMN: I D C O L U M N;

// Transformations
PROJECT: P R O J E C T;
SELECT: S E L E C T;
FROM: F R O M;
TOP: T O P;
// added
WHERE: W H E R E;
HAVING: H A V I N G;
DISTINCT: D I S T I N C T;

//For joins
NATURAL: N A T U R A L;
CROSS: C R O S S;
JOIN: J O I N;
INNER: I N N E R;
LEFT: L E F T;
RIGHT: R I G H T;
FULL: F U L L;
OUTER: O U T E R;
ONLY: O N L Y;

// Condition
CASE: C A S E;

// booleans
TRUE: T R U E;
FALSE: F A L S E;

// Import
IMPORT: I M P O R T;
AS: A S;

CREATE: C R E A T E;
LAYOUT: L A Y O U T;
FILE: F I L E;
MAP: M A P;
METHOD: M E T H O D;
DEPENDENT: D E P E N D E N T;
TITLE: T I T L E;
EXPIRE: E X P I R E;
LIMIT: L I M I T;
OFFSET: O F F S E T;
MODULE: M O D U L E;

UESCAPE: U E S C A P E;
TYPE: T Y P E;
//PLOT

SEMICOLON: [;;];

//operators
EQ: '=';
NEQ: '<>' | '!=';
LT: '<';
LTE: '<=';
GT: '>';
GTE: '>=';

PLUS: '+';
SUBSTRACT: '-';
MULTIPLY: '*';
DIVIDE: '/';
MODULO: '%';

XOR: '^';

AND: A N D;
OR: O R;
NOT: N O T;
IN: I N;
BETWEEN: B E T W E E N;
EXISTS: E X I S T S;

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

IDENTIFIER: LETTER (LETTER | DIGIT | '_')*;
COMMA_: ',';
BSTART_: '(';
BEND_: ')';

CURLY_BSTART_: '{';
CURLY_BEND_: '}';

ECL_SNIPPETS: '_$' ~[$]* '$';
SIMPLE_COMMENT: '--' ~[\r\n]* '\r'? '\n'? -> channel(2);
//?

SIMPLE_C_COMMENT: '//' ~[\r\n]* '\r'? '\n'? -> channel(2);

BRACKETED_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

WS: [ \r\n] -> skip;

fragment DIGIT: [0-9];

fragment LETTER: [a-zA-Z];

fragment EXPONENT: E [+-]? DIGIT+;

// match either an 'a' or 'A'
fragment A: [aA];
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
