// Generated from HSQL.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var HSQLVisitor = require('./HSQLVisitor').HSQLVisitor;

var grammarFileName = "HSQL.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003T\u022c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004?\t?\u0004@\t@\u0004",
    "A\tA\u0003\u0002\u0007\u0002\u0084\n\u0002\f\u0002\u000e\u0002\u0087",
    "\u000b\u0002\u0003\u0002\u0005\u0002\u008a\n\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u009d\n\u0003",
    "\u0003\u0004\u0003\u0004\u0005\u0004\u00a1\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007",
    "\u0006\u00aa\n\u0006\f\u0006\u000e\u0006\u00ad\u000b\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0005\t",
    "\u00b7\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0005\u000b\u00c0\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0007\f\u00c8\n\f\f\f\u000e\f\u00cb\u000b\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u00d5\n\r",
    "\f\r\u000e\r\u00d8\u000b\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00e3",
    "\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00e8\n\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00ed\n\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0005\u0012\u00f3\n\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0005\u0015\u00fd\n\u0015\u0003\u0015\u0005",
    "\u0015\u0100\n\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u010f\n\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u0116",
    "\n\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0120\n\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0126\n\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c",
    "\u012d\n\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005",
    "\u001c\u0133\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0007\u001d",
    "\u0138\n\u001d\f\u001d\u000e\u001d\u013b\u000b\u001d\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0005",
    "\u001f\u0144\n\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0005",
    " \u014c\n \u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0005!\u0154\n",
    "!\u0003!\u0003!\u0003!\u0005!\u0159\n!\u0003!\u0003!\u0003!\u0005!\u015e",
    "\n!\u0003!\u0005!\u0161\n!\u0003\"\u0005\"\u0164\n\"\u0003\"\u0003\"",
    "\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0005",
    "#\u0170\n#\u0003$\u0003$\u0005$\u0174\n$\u0003$\u0003$\u0003$\u0005",
    "$\u0179\n$\u0007$\u017b\n$\f$\u000e$\u017e\u000b$\u0003%\u0003%\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'\u0005",
    "\'\u018b\n\'\u0003\'\u0005\'\u018e\n\'\u0005\'\u0190\n\'\u0003(\u0003",
    "(\u0003(\u0005(\u0195\n(\u0003)\u0003)\u0003)\u0005)\u019a\n)\u0003",
    "*\u0003*\u0003*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003+\u0005+\u01a5",
    "\n+\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u0003/\u0007",
    "/\u01b0\n/\f/\u000e/\u01b3\u000b/\u00030\u00030\u00050\u01b7\n0\u0003",
    "1\u00031\u00051\u01bb\n1\u00032\u00032\u00032\u00033\u00033\u00034\u0003",
    "4\u00034\u00034\u00034\u00034\u00035\u00035\u00035\u00075\u01cb\n5\f",
    "5\u000e5\u01ce\u000b5\u00036\u00036\u00036\u00037\u00037\u00037\u0007",
    "7\u01d6\n7\f7\u000e7\u01d9\u000b7\u00038\u00038\u00039\u00039\u0003",
    ":\u0003:\u0003:\u0005:\u01e2\n:\u0003:\u0003:\u0005:\u01e6\n:\u0003",
    ":\u0003:\u0003:\u0003:\u0003:\u0003:\u0007:\u01ee\n:\f:\u000e:\u01f1",
    "\u000b:\u0003;\u0003;\u0003;\u0003;\u0005;\u01f7\n;\u0003;\u0003;\u0003",
    ";\u0003;\u0003;\u0003;\u0005;\u01ff\n;\u0003;\u0003;\u0003;\u0003;\u0003",
    ";\u0007;\u0206\n;\f;\u000e;\u0209\u000b;\u0003;\u0003;\u0005;\u020d",
    "\n;\u0003<\u0003<\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003",
    "=\u0005=\u0219\n=\u0003>\u0003>\u0003>\u0005>\u021e\n>\u0003?\u0003",
    "?\u0003?\u0003?\u0005?\u0224\n?\u0005?\u0226\n?\u0003@\u0003@\u0003",
    "A\u0003A\u0003A\u0002\u0003rB\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ",
    "\\^`bdfhjlnprtvxz|~\u0080\u0002\b\u0003\u0002\"#\u0003\u00028:\u0003",
    "\u0002\b\t\u0003\u0002\n\u000e\u0004\u0002\u001c\u001c>>\u0003\u0002",
    "DI\u0002\u0231\u0002\u0085\u0003\u0002\u0002\u0002\u0004\u009c\u0003",
    "\u0002\u0002\u0002\u0006\u00a0\u0003\u0002\u0002\u0002\b\u00a2\u0003",
    "\u0002\u0002\u0002\n\u00a6\u0003\u0002\u0002\u0002\f\u00ae\u0003\u0002",
    "\u0002\u0002\u000e\u00b0\u0003\u0002\u0002\u0002\u0010\u00b4\u0003\u0002",
    "\u0002\u0002\u0012\u00ba\u0003\u0002\u0002\u0002\u0014\u00bf\u0003\u0002",
    "\u0002\u0002\u0016\u00c1\u0003\u0002\u0002\u0002\u0018\u00ce\u0003\u0002",
    "\u0002\u0002\u001a\u00db\u0003\u0002\u0002\u0002\u001c\u00de\u0003\u0002",
    "\u0002\u0002\u001e\u00e7\u0003\u0002\u0002\u0002 \u00e9\u0003\u0002",
    "\u0002\u0002\"\u00f2\u0003\u0002\u0002\u0002$\u00f4\u0003\u0002\u0002",
    "\u0002&\u00f7\u0003\u0002\u0002\u0002(\u00fc\u0003\u0002\u0002\u0002",
    "*\u0101\u0003\u0002\u0002\u0002,\u0103\u0003\u0002\u0002\u0002.\u0106",
    "\u0003\u0002\u0002\u00020\u0110\u0003\u0002\u0002\u00022\u0115\u0003",
    "\u0002\u0002\u00024\u0117\u0003\u0002\u0002\u00026\u0127\u0003\u0002",
    "\u0002\u00028\u0134\u0003\u0002\u0002\u0002:\u013c\u0003\u0002\u0002",
    "\u0002<\u0143\u0003\u0002\u0002\u0002>\u0145\u0003\u0002\u0002\u0002",
    "@\u014d\u0003\u0002\u0002\u0002B\u0163\u0003\u0002\u0002\u0002D\u016f",
    "\u0003\u0002\u0002\u0002F\u0173\u0003\u0002\u0002\u0002H\u017f\u0003",
    "\u0002\u0002\u0002J\u0181\u0003\u0002\u0002\u0002L\u018f\u0003\u0002",
    "\u0002\u0002N\u0194\u0003\u0002\u0002\u0002P\u0199\u0003\u0002\u0002",
    "\u0002R\u019b\u0003\u0002\u0002\u0002T\u019f\u0003\u0002\u0002\u0002",
    "V\u01a6\u0003\u0002\u0002\u0002X\u01a8\u0003\u0002\u0002\u0002Z\u01aa",
    "\u0003\u0002\u0002\u0002\\\u01ac\u0003\u0002\u0002\u0002^\u01b6\u0003",
    "\u0002\u0002\u0002`\u01b8\u0003\u0002\u0002\u0002b\u01bc\u0003\u0002",
    "\u0002\u0002d\u01bf\u0003\u0002\u0002\u0002f\u01c1\u0003\u0002\u0002",
    "\u0002h\u01c7\u0003\u0002\u0002\u0002j\u01cf\u0003\u0002\u0002\u0002",
    "l\u01d2\u0003\u0002\u0002\u0002n\u01da\u0003\u0002\u0002\u0002p\u01dc",
    "\u0003\u0002\u0002\u0002r\u01e5\u0003\u0002\u0002\u0002t\u020c\u0003",
    "\u0002\u0002\u0002v\u020e\u0003\u0002\u0002\u0002x\u0218\u0003\u0002",
    "\u0002\u0002z\u021d\u0003\u0002\u0002\u0002|\u0225\u0003\u0002\u0002",
    "\u0002~\u0227\u0003\u0002\u0002\u0002\u0080\u0229\u0003\u0002\u0002",
    "\u0002\u0082\u0084\u0005\u0004\u0003\u0002\u0083\u0082\u0003\u0002\u0002",
    "\u0002\u0084\u0087\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002",
    "\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0089\u0003\u0002\u0002",
    "\u0002\u0087\u0085\u0003\u0002\u0002\u0002\u0088\u008a\u0005\b\u0005",
    "\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008c\u0007\u0002\u0002",
    "\u0003\u008c\u0003\u0003\u0002\u0002\u0002\u008d\u008e\u0005\u0006\u0004",
    "\u0002\u008e\u008f\u0007C\u0002\u0002\u008f\u009d\u0003\u0002\u0002",
    "\u0002\u0090\u0091\u0005\u000e\b\u0002\u0091\u0092\u0007C\u0002\u0002",
    "\u0092\u009d\u0003\u0002\u0002\u0002\u0093\u0094\u0005\u001c\u000f\u0002",
    "\u0094\u0095\u0007C\u0002\u0002\u0095\u009d\u0003\u0002\u0002\u0002",
    "\u0096\u0097\u0005\u0010\t\u0002\u0097\u0098\u0007C\u0002\u0002\u0098",
    "\u009d\u0003\u0002\u0002\u0002\u0099\u009a\u0005j6\u0002\u009a\u009b",
    "\u0007C\u0002\u0002\u009b\u009d\u0003\u0002\u0002\u0002\u009c\u008d",
    "\u0003\u0002\u0002\u0002\u009c\u0090\u0003\u0002\u0002\u0002\u009c\u0093",
    "\u0003\u0002\u0002\u0002\u009c\u0096\u0003\u0002\u0002\u0002\u009c\u0099",
    "\u0003\u0002\u0002\u0002\u009d\u0005\u0003\u0002\u0002\u0002\u009e\u00a1",
    "\u0005 \u0011\u0002\u009f\u00a1\u0005.\u0018\u0002\u00a0\u009e\u0003",
    "\u0002\u0002\u0002\u00a0\u009f\u0003\u0002\u0002\u0002\u00a1\u0007\u0003",
    "\u0002\u0002\u0002\u00a2\u00a3\u0007\u0012\u0002\u0002\u00a3\u00a4\u0005",
    "\n\u0006\u0002\u00a4\u00a5\u0007C\u0002\u0002\u00a5\t\u0003\u0002\u0002",
    "\u0002\u00a6\u00ab\u0005\f\u0007\u0002\u00a7\u00a8\u0007\u0003\u0002",
    "\u0002\u00a8\u00aa\u0005\f\u0007\u0002\u00a9\u00a7\u0003\u0002\u0002",
    "\u0002\u00aa\u00ad\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002",
    "\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u000b\u0003\u0002\u0002",
    "\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ae\u00af\u0007P\u0002",
    "\u0002\u00af\r\u0003\u0002\u0002\u0002\u00b0\u00b1\u0005H%\u0002\u00b1",
    "\u00b2\u0007D\u0002\u0002\u00b2\u00b3\u0005\u001e\u0010\u0002\u00b3",
    "\u000f\u0003\u0002\u0002\u0002\u00b4\u00b6\u0007,\u0002\u0002\u00b5",
    "\u00b7\u0005\u0012\n\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b6",
    "\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8",
    "\u00b9\u0005\u0014\u000b\u0002\u00b9\u0011\u0003\u0002\u0002\u0002\u00ba",
    "\u00bb\u0007\u0012\u0002\u0002\u00bb\u0013\u0003\u0002\u0002\u0002\u00bc",
    "\u00c0\u0005\u0016\f\u0002\u00bd\u00c0\u0005\u0018\r\u0002\u00be\u00c0",
    "\u0005\u001a\u000e\u0002\u00bf\u00bc\u0003\u0002\u0002\u0002\u00bf\u00bd",
    "\u0003\u0002\u0002\u0002\u00bf\u00be\u0003\u0002\u0002\u0002\u00c0\u0015",
    "\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007P\u0002\u0002\u00c2\u00c3",
    "\u0007\u0011\u0002\u0002\u00c3\u00c4\u0007\u0004\u0002\u0002\u00c4\u00c9",
    "\u0005\u001a\u000e\u0002\u00c5\u00c6\u0007\u0003\u0002\u0002\u00c6\u00c8",
    "\u0005\u001a\u000e\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c8\u00cb",
    "\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00c9\u00ca",
    "\u0003\u0002\u0002\u0002\u00ca\u00cc\u0003\u0002\u0002\u0002\u00cb\u00c9",
    "\u0003\u0002\u0002\u0002\u00cc\u00cd\u0007\u0005\u0002\u0002\u00cd\u0017",
    "\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007P\u0002\u0002\u00cf\u00d0",
    "\u0007)\u0002\u0002\u00d0\u00d1\u0007\u0004\u0002\u0002\u00d1\u00d6",
    "\u0005\u001a\u000e\u0002\u00d2\u00d3\u0007\u0003\u0002\u0002\u00d3\u00d5",
    "\u0005\u001a\u000e\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d5\u00d8",
    "\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d6\u00d7",
    "\u0003\u0002\u0002\u0002\u00d7\u00d9\u0003\u0002\u0002\u0002\u00d8\u00d6",
    "\u0003\u0002\u0002\u0002\u00d9\u00da\u0007\u0005\u0002\u0002\u00da\u0019",
    "\u0003\u0002\u0002\u0002\u00db\u00dc\u0007P\u0002\u0002\u00dc\u00dd",
    "\u0005n8\u0002\u00dd\u001b\u0003\u0002\u0002\u0002\u00de\u00df\u0007",
    "\u001f\u0002\u0002\u00df\u00e2\u0007P\u0002\u0002\u00e0\u00e1\u0007",
    "\u0014\u0002\u0002\u00e1\u00e3\u0007P\u0002\u0002\u00e2\u00e0\u0003",
    "\u0002\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3\u001d\u0003",
    "\u0002\u0002\u0002\u00e4\u00e8\u0005@!\u0002\u00e5\u00e8\u00052\u001a",
    "\u0002\u00e6\u00e8\u0005f4\u0002\u00e7\u00e4\u0003\u0002\u0002\u0002",
    "\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e7\u00e6\u0003\u0002\u0002\u0002",
    "\u00e8\u001f\u0003\u0002\u0002\u0002\u00e9\u00ea\u00071\u0002\u0002",
    "\u00ea\u00ec\u0007P\u0002\u0002\u00eb\u00ed\u0005\"\u0012\u0002\u00ec",
    "\u00eb\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed",
    "\u00ee\u0003\u0002\u0002\u0002\u00ee\u00ef\u0005(\u0015\u0002\u00ef",
    "!\u0003\u0002\u0002\u0002\u00f0\u00f3\u0005$\u0013\u0002\u00f1\u00f3",
    "\u0005&\u0014\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f1",
    "\u0003\u0002\u0002\u0002\u00f3#\u0003\u0002\u0002\u0002\u00f4\u00f5",
    "\u0007<\u0002\u0002\u00f5\u00f6\u0005|?\u0002\u00f6%\u0003\u0002\u0002",
    "\u0002\u00f7\u00f8\u0007+\u0002\u0002\u00f8\u00f9\u0005|?\u0002\u00f9",
    "\u00fa\u0007P\u0002\u0002\u00fa\'\u0003\u0002\u0002\u0002\u00fb\u00fd",
    "\u0005*\u0016\u0002\u00fc\u00fb\u0003\u0002\u0002\u0002\u00fc\u00fd",
    "\u0003\u0002\u0002\u0002\u00fd\u00ff\u0003\u0002\u0002\u0002\u00fe\u0100",
    "\u0005,\u0017\u0002\u00ff\u00fe\u0003\u0002\u0002\u0002\u00ff\u0100",
    "\u0003\u0002\u0002\u0002\u0100)\u0003\u0002\u0002\u0002\u0101\u0102",
    "\t\u0002\u0002\u0002\u0102+\u0003\u0002\u0002\u0002\u0103\u0104\u0007",
    "=\u0002\u0002\u0104\u0105\u0005z>\u0002\u0105-\u0003\u0002\u0002\u0002",
    "\u0106\u0107\b\u0018\u0001\u0002\u0107\u0108\u00072\u0002\u0002\u0108",
    "\u0109\u0007\u001d\u0002\u0002\u0109\u010a\u0005l7\u0002\u010a\u010b",
    "\u0007<\u0002\u0002\u010b\u010e\u0007J\u0002\u0002\u010c\u010d\u0007",
    "A\u0002\u0002\u010d\u010f\u00050\u0019\u0002\u010e\u010c\u0003\u0002",
    "\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f/\u0003\u0002",
    "\u0002\u0002\u0110\u0111\u0007P\u0002\u0002\u01111\u0003\u0002\u0002",
    "\u0002\u0112\u0116\u00054\u001b\u0002\u0113\u0116\u0005> \u0002\u0114",
    "\u0116\u00056\u001c\u0002\u0115\u0112\u0003\u0002\u0002\u0002\u0115",
    "\u0113\u0003\u0002\u0002\u0002\u0115\u0114\u0003\u0002\u0002\u0002\u0116",
    "3\u0003\u0002\u0002\u0002\u0117\u0118\b\u001b\u0001\u0002\u0118\u0119",
    "\u0007*\u0002\u0002\u0119\u011a\u0007\u001d\u0002\u0002\u011a\u011b",
    "\u0005l7\u0002\u011b\u011c\u0007\u0003\u0002\u0002\u011c\u011f\u0005",
    "l7\u0002\u011d\u011e\u0007\u0003\u0002\u0002\u011e\u0120\u0005l7\u0002",
    "\u011f\u011d\u0003\u0002\u0002\u0002\u011f\u0120\u0003\u0002\u0002\u0002",
    "\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u0122\u0007-\u0002\u0002",
    "\u0122\u0125\u0007P\u0002\u0002\u0123\u0124\u0007 \u0002\u0002\u0124",
    "\u0126\u00058\u001d\u0002\u0125\u0123\u0003\u0002\u0002\u0002\u0125",
    "\u0126\u0003\u0002\u0002\u0002\u01265\u0003\u0002\u0002\u0002\u0127",
    "\u0128\u00073\u0002\u0002\u0128\u0129\u0007\u001d\u0002\u0002\u0129",
    "\u012c\u0005l7\u0002\u012a\u012b\u0007\u0003\u0002\u0002\u012b\u012d",
    "\u0005l7\u0002\u012c\u012a\u0003\u0002\u0002\u0002\u012c\u012d\u0003",
    "\u0002\u0002\u0002\u012d\u012e\u0003\u0002\u0002\u0002\u012e\u012f\u0007",
    "-\u0002\u0002\u012f\u0132\u0007P\u0002\u0002\u0130\u0131\u0007 \u0002",
    "\u0002\u0131\u0133\u00058\u001d\u0002\u0132\u0130\u0003\u0002\u0002",
    "\u0002\u0132\u0133\u0003\u0002\u0002\u0002\u01337\u0003\u0002\u0002",
    "\u0002\u0134\u0139\u0005:\u001e\u0002\u0135\u0136\u0007\u0003\u0002",
    "\u0002\u0136\u0138\u0005:\u001e\u0002\u0137\u0135\u0003\u0002\u0002",
    "\u0002\u0138\u013b\u0003\u0002\u0002\u0002\u0139\u0137\u0003\u0002\u0002",
    "\u0002\u0139\u013a\u0003\u0002\u0002\u0002\u013a9\u0003\u0002\u0002",
    "\u0002\u013b\u0139\u0003\u0002\u0002\u0002\u013c\u013d\u0007P\u0002",
    "\u0002\u013d\u013e\u0007D\u0002\u0002\u013e\u013f\u0005<\u001f\u0002",
    "\u013f;\u0003\u0002\u0002\u0002\u0140\u0144\u0005z>\u0002\u0141\u0144",
    "\u0005|?\u0002\u0142\u0144\u0005l7\u0002\u0143\u0140\u0003\u0002\u0002",
    "\u0002\u0143\u0141\u0003\u0002\u0002\u0002\u0143\u0142\u0003\u0002\u0002",
    "\u0002\u0144=\u0003\u0002\u0002\u0002\u0145\u0146\u00073\u0002\u0002",
    "\u0146\u0147\u0005l7\u0002\u0147\u0148\u0007\u001d\u0002\u0002\u0148",
    "\u014b\u0005l7\u0002\u0149\u014a\u0007-\u0002\u0002\u014a\u014c\u0007",
    "P\u0002\u0002\u014b\u0149\u0003\u0002\u0002\u0002\u014b\u014c\u0003",
    "\u0002\u0002\u0002\u014c?\u0003\u0002\u0002\u0002\u014d\u014e\u0007",
    "5\u0002\u0002\u014e\u014f\u0005F$\u0002\u014f\u0150\u0007\u001d\u0002",
    "\u0002\u0150\u0153\u0005P)\u0002\u0151\u0152\u0007@\u0002\u0002\u0152",
    "\u0154\u0005Z.\u0002\u0153\u0151\u0003\u0002\u0002\u0002\u0153\u0154",
    "\u0003\u0002\u0002\u0002\u0154\u0158\u0003\u0002\u0002\u0002\u0155\u0156",
    "\u0007\u001e\u0002\u0002\u0156\u0157\u0007\u0018\u0002\u0002\u0157\u0159",
    "\u0005d3\u0002\u0158\u0155\u0003\u0002\u0002\u0002\u0158\u0159\u0003",
    "\u0002\u0002\u0002\u0159\u015d\u0003\u0002\u0002\u0002\u015a\u015b\u0007",
    "0\u0002\u0002\u015b\u015c\u0007\u0018\u0002\u0002\u015c\u015e\u0005",
    "\\/\u0002\u015d\u015a\u0003\u0002\u0002\u0002\u015d\u015e\u0003\u0002",
    "\u0002\u0002\u015e\u0160\u0003\u0002\u0002\u0002\u015f\u0161\u0005B",
    "\"\u0002\u0160\u015f\u0003\u0002\u0002\u0002\u0160\u0161\u0003\u0002",
    "\u0002\u0002\u0161A\u0003\u0002\u0002\u0002\u0162\u0164\u0005D#\u0002",
    "\u0163\u0162\u0003\u0002\u0002\u0002\u0163\u0164\u0003\u0002\u0002\u0002",
    "\u0164\u0165\u0003\u0002\u0002\u0002\u0165\u0166\u00076\u0002\u0002",
    "\u0166\u0167\u0005l7\u0002\u0167\u0168\u0007%\u0002\u0002\u0168\u0169",
    "\u0005l7\u0002\u0169\u016a\u0005\u0080A\u0002\u016a\u016b\u0005l7\u0002",
    "\u016bC\u0003\u0002\u0002\u0002\u016c\u0170\u00077\u0002\u0002\u016d",
    "\u016e\t\u0003\u0002\u0002\u016e\u0170\t\u0004\u0002\u0002\u016f\u016c",
    "\u0003\u0002\u0002\u0002\u016f\u016d\u0003\u0002\u0002\u0002\u0170E",
    "\u0003\u0002\u0002\u0002\u0171\u0174\u0005J&\u0002\u0172\u0174\u0005",
    "L\'\u0002\u0173\u0171\u0003\u0002\u0002\u0002\u0173\u0172\u0003\u0002",
    "\u0002\u0002\u0174\u017c\u0003\u0002\u0002\u0002\u0175\u0178\u0007\u0003",
    "\u0002\u0002\u0176\u0179\u0005J&\u0002\u0177\u0179\u0005L\'\u0002\u0178",
    "\u0176\u0003\u0002\u0002\u0002\u0178\u0177\u0003\u0002\u0002\u0002\u0179",
    "\u017b\u0003\u0002\u0002\u0002\u017a\u0175\u0003\u0002\u0002\u0002\u017b",
    "\u017e\u0003\u0002\u0002\u0002\u017c\u017a\u0003\u0002\u0002\u0002\u017c",
    "\u017d\u0003\u0002\u0002\u0002\u017dG\u0003\u0002\u0002\u0002\u017e",
    "\u017c\u0003\u0002\u0002\u0002\u017f\u0180\u0007P\u0002\u0002\u0180",
    "I\u0003\u0002\u0002\u0002\u0181\u0182\u0005N(\u0002\u0182\u0183\u0007",
    "\u0004\u0002\u0002\u0183\u0184\u0005L\'\u0002\u0184\u0185\u0007\u0005",
    "\u0002\u0002\u0185K\u0003\u0002\u0002\u0002\u0186\u0190\u0007\u0006",
    "\u0002\u0002\u0187\u018d\u0007P\u0002\u0002\u0188\u018a\u0007\u0014",
    "\u0002\u0002\u0189\u018b\u0005n8\u0002\u018a\u0189\u0003\u0002\u0002",
    "\u0002\u018a\u018b\u0003\u0002\u0002\u0002\u018b\u018c\u0003\u0002\u0002",
    "\u0002\u018c\u018e\u0007P\u0002\u0002\u018d\u0188\u0003\u0002\u0002",
    "\u0002\u018d\u018e\u0003\u0002\u0002\u0002\u018e\u0190\u0003\u0002\u0002",
    "\u0002\u018f\u0186\u0003\u0002\u0002\u0002\u018f\u0187\u0003\u0002\u0002",
    "\u0002\u0190M\u0003\u0002\u0002\u0002\u0191\u0195\u0007\u0019\u0002",
    "\u0002\u0192\u0195\u0007;\u0002\u0002\u0193\u0195\u0007\u0016\u0002",
    "\u0002\u0194\u0191\u0003\u0002\u0002\u0002\u0194\u0192\u0003\u0002\u0002",
    "\u0002\u0194\u0193\u0003\u0002\u0002\u0002\u0195O\u0003\u0002\u0002",
    "\u0002\u0196\u019a\u0005R*\u0002\u0197\u019a\u0005X-\u0002\u0198\u019a",
    "\u0005T+\u0002\u0199\u0196\u0003\u0002\u0002\u0002\u0199\u0197\u0003",
    "\u0002\u0002\u0002\u0199\u0198\u0003\u0002\u0002\u0002\u019aQ\u0003",
    "\u0002\u0002\u0002\u019b\u019c\u0007\u0004\u0002\u0002\u019c\u019d\u0005",
    "@!\u0002\u019d\u019e\u0007\u0005\u0002\u0002\u019eS\u0003\u0002\u0002",
    "\u0002\u019f\u01a0\u0007J\u0002\u0002\u01a0\u01a1\u0007)\u0002\u0002",
    "\u01a1\u01a4\u0005l7\u0002\u01a2\u01a3\u0007A\u0002\u0002\u01a3\u01a5",
    "\u0005V,\u0002\u01a4\u01a2\u0003\u0002\u0002\u0002\u01a4\u01a5\u0003",
    "\u0002\u0002\u0002\u01a5U\u0003\u0002\u0002\u0002\u01a6\u01a7\u0007",
    "P\u0002\u0002\u01a7W\u0003\u0002\u0002\u0002\u01a8\u01a9\u0005l7\u0002",
    "\u01a9Y\u0003\u0002\u0002\u0002\u01aa\u01ab\u0005r:\u0002\u01ab[\u0003",
    "\u0002\u0002\u0002\u01ac\u01b1\u0005^0\u0002\u01ad\u01ae\u0007\u0003",
    "\u0002\u0002\u01ae\u01b0\u0005^0\u0002\u01af\u01ad\u0003\u0002\u0002",
    "\u0002\u01b0\u01b3\u0003\u0002\u0002\u0002\u01b1\u01af\u0003\u0002\u0002",
    "\u0002\u01b1\u01b2\u0003\u0002\u0002\u0002\u01b2]\u0003\u0002\u0002",
    "\u0002\u01b3\u01b1\u0003\u0002\u0002\u0002\u01b4\u01b7\u0005`1\u0002",
    "\u01b5\u01b7\u0005b2\u0002\u01b6\u01b4\u0003\u0002\u0002\u0002\u01b6",
    "\u01b5\u0003\u0002\u0002\u0002\u01b7_\u0003\u0002\u0002\u0002\u01b8",
    "\u01ba\u0005p9\u0002\u01b9\u01bb\u0007\u0015\u0002\u0002\u01ba\u01b9",
    "\u0003\u0002\u0002\u0002\u01ba\u01bb\u0003\u0002\u0002\u0002\u01bba",
    "\u0003\u0002\u0002\u0002\u01bc\u01bd\u0005p9\u0002\u01bd\u01be\u0007",
    "\u001a\u0002\u0002\u01bec\u0003\u0002\u0002\u0002\u01bf\u01c0\u0005",
    "l7\u0002\u01c0e\u0003\u0002\u0002\u0002\u01c1\u01c2\u0007(\u0002\u0002",
    "\u01c2\u01c3\u0007)\u0002\u0002\u01c3\u01c4\u0007\u0004\u0002\u0002",
    "\u01c4\u01c5\u0005h5\u0002\u01c5\u01c6\u0007\u0005\u0002\u0002\u01c6",
    "g\u0003\u0002\u0002\u0002\u01c7\u01cc\u0005\u001a\u000e\u0002\u01c8",
    "\u01c9\u0007\u0003\u0002\u0002\u01c9\u01cb\u0005\u001a\u000e\u0002\u01ca",
    "\u01c8\u0003\u0002\u0002\u0002\u01cb\u01ce\u0003\u0002\u0002\u0002\u01cc",
    "\u01ca\u0003\u0002\u0002\u0002\u01cc\u01cd\u0003\u0002\u0002\u0002\u01cd",
    "i\u0003\u0002\u0002\u0002\u01ce\u01cc\u0003\u0002\u0002\u0002\u01cf",
    "\u01d0\u0007B\u0002\u0002\u01d0\u01d1\u0007J\u0002\u0002\u01d1k\u0003",
    "\u0002\u0002\u0002\u01d2\u01d7\u0007P\u0002\u0002\u01d3\u01d4\u0007",
    "\u0007\u0002\u0002\u01d4\u01d6\u0007P\u0002\u0002\u01d5\u01d3\u0003",
    "\u0002\u0002\u0002\u01d6\u01d9\u0003\u0002\u0002\u0002\u01d7\u01d5\u0003",
    "\u0002\u0002\u0002\u01d7\u01d8\u0003\u0002\u0002\u0002\u01d8m\u0003",
    "\u0002\u0002\u0002\u01d9\u01d7\u0003\u0002\u0002\u0002\u01da\u01db\t",
    "\u0005\u0002\u0002\u01dbo\u0003\u0002\u0002\u0002\u01dc\u01dd\u0005",
    "r:\u0002\u01ddq\u0003\u0002\u0002\u0002\u01de\u01df\b:\u0001\u0002\u01df",
    "\u01e1\u0005v<\u0002\u01e0\u01e2\u0005t;\u0002\u01e1\u01e0\u0003\u0002",
    "\u0002\u0002\u01e1\u01e2\u0003\u0002\u0002\u0002\u01e2\u01e6\u0003\u0002",
    "\u0002\u0002\u01e3\u01e4\u0007.\u0002\u0002\u01e4\u01e6\u0005r:\u0005",
    "\u01e5\u01de\u0003\u0002\u0002\u0002\u01e5\u01e3\u0003\u0002\u0002\u0002",
    "\u01e6\u01ef\u0003\u0002\u0002\u0002\u01e7\u01e8\f\u0004\u0002\u0002",
    "\u01e8\u01e9\u0007\u0013\u0002\u0002\u01e9\u01ee\u0005r:\u0005\u01ea",
    "\u01eb\f\u0003\u0002\u0002\u01eb\u01ec\u0007/\u0002\u0002\u01ec\u01ee",
    "\u0005r:\u0004\u01ed\u01e7\u0003\u0002\u0002\u0002\u01ed\u01ea\u0003",
    "\u0002\u0002\u0002\u01ee\u01f1\u0003\u0002\u0002\u0002\u01ef\u01ed\u0003",
    "\u0002\u0002\u0002\u01ef\u01f0\u0003\u0002\u0002\u0002\u01f0s\u0003",
    "\u0002\u0002\u0002\u01f1\u01ef\u0003\u0002\u0002\u0002\u01f2\u01f3\u0005",
    "\u0080A\u0002\u01f3\u01f4\u0005v<\u0002\u01f4\u020d\u0003\u0002\u0002",
    "\u0002\u01f5\u01f7\u0007.\u0002\u0002\u01f6\u01f5\u0003\u0002\u0002",
    "\u0002\u01f6\u01f7\u0003\u0002\u0002\u0002\u01f7\u01f8\u0003\u0002\u0002",
    "\u0002\u01f8\u01f9\u0007\u0017\u0002\u0002\u01f9\u01fa\u0005v<\u0002",
    "\u01fa\u01fb\u0007\u0013\u0002\u0002\u01fb\u01fc\u0005v<\u0002\u01fc",
    "\u020d\u0003\u0002\u0002\u0002\u01fd\u01ff\u0007.\u0002\u0002\u01fe",
    "\u01fd\u0003\u0002\u0002\u0002\u01fe\u01ff\u0003\u0002\u0002\u0002\u01ff",
    "\u0200\u0003\u0002\u0002\u0002\u0200\u0201\u0007$\u0002\u0002\u0201",
    "\u0202\u0007\u0004\u0002\u0002\u0202\u0207\u0005v<\u0002\u0203\u0204",
    "\u0007\u0003\u0002\u0002\u0204\u0206\u0005v<\u0002\u0205\u0203\u0003",
    "\u0002\u0002\u0002\u0206\u0209\u0003\u0002\u0002\u0002\u0207\u0205\u0003",
    "\u0002\u0002\u0002\u0207\u0208\u0003\u0002\u0002\u0002\u0208\u020a\u0003",
    "\u0002\u0002\u0002\u0209\u0207\u0003\u0002\u0002\u0002\u020a\u020b\u0007",
    "\u0005\u0002\u0002\u020b\u020d\u0003\u0002\u0002\u0002\u020c\u01f2\u0003",
    "\u0002\u0002\u0002\u020c\u01f6\u0003\u0002\u0002\u0002\u020c\u01fe\u0003",
    "\u0002\u0002\u0002\u020du\u0003\u0002\u0002\u0002\u020e\u020f\u0005",
    "x=\u0002\u020fw\u0003\u0002\u0002\u0002\u0210\u0219\u0007P\u0002\u0002",
    "\u0211\u0219\u0005z>\u0002\u0212\u0219\u0005~@\u0002\u0213\u0219\u0005",
    "|?\u0002\u0214\u0215\u0007\u0004\u0002\u0002\u0215\u0216\u0005p9\u0002",
    "\u0216\u0217\u0007\u0005\u0002\u0002\u0217\u0219\u0003\u0002\u0002\u0002",
    "\u0218\u0210\u0003\u0002\u0002\u0002\u0218\u0211\u0003\u0002\u0002\u0002",
    "\u0218\u0212\u0003\u0002\u0002\u0002\u0218\u0213\u0003\u0002\u0002\u0002",
    "\u0218\u0214\u0003\u0002\u0002\u0002\u0219y\u0003\u0002\u0002\u0002",
    "\u021a\u021e\u0007N\u0002\u0002\u021b\u021e\u0007O\u0002\u0002\u021c",
    "\u021e\u0007M\u0002\u0002\u021d\u021a\u0003\u0002\u0002\u0002\u021d",
    "\u021b\u0003\u0002\u0002\u0002\u021d\u021c\u0003\u0002\u0002\u0002\u021e",
    "{\u0003\u0002\u0002\u0002\u021f\u0226\u0007J\u0002\u0002\u0220\u0223",
    "\u0007K\u0002\u0002\u0221\u0222\u0007?\u0002\u0002\u0222\u0224\u0007",
    "J\u0002\u0002\u0223\u0221\u0003\u0002\u0002\u0002\u0223\u0224\u0003",
    "\u0002\u0002\u0002\u0224\u0226\u0003\u0002\u0002\u0002\u0225\u021f\u0003",
    "\u0002\u0002\u0002\u0225\u0220\u0003\u0002\u0002\u0002\u0226}\u0003",
    "\u0002\u0002\u0002\u0227\u0228\t\u0006\u0002\u0002\u0228\u007f\u0003",
    "\u0002\u0002\u0002\u0229\u022a\t\u0007\u0002\u0002\u022a\u0081\u0003",
    "\u0002\u0002\u0002:\u0085\u0089\u009c\u00a0\u00ab\u00b6\u00bf\u00c9",
    "\u00d6\u00e2\u00e7\u00ec\u00f2\u00fc\u00ff\u010e\u0115\u011f\u0125\u012c",
    "\u0132\u0139\u0143\u014b\u0153\u0158\u015d\u0160\u0163\u016f\u0173\u0178",
    "\u017c\u018a\u018d\u018f\u0194\u0199\u01a4\u01b1\u01b6\u01ba\u01cc\u01d7",
    "\u01e1\u01e5\u01ed\u01ef\u01f6\u01fe\u0207\u020c\u0218\u021d\u0223\u0225"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "'('", "')'", "'*'", "'.'", null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, "'='", null, "'<'", "'<='", 
                     "'>'", "'>='" ];

var symbolicNames = [ null, null, null, null, null, null, "OUTER", "ONLY", 
                      "REAL_TYPE", "INTEGER_TYPE", "DECIMAL_TYPE", "VARSTRING_TYPE", 
                      "STRING_TYPE", "UNSTABLE", "STABLE", "TABLE", "EXPORT", 
                      "AND", "AS", "ASC", "AVG", "BETWEEN", "BY", "COUNT", 
                      "DESC", "DEPENDENT", "FALSE", "FROM", "GROUP", "IMPORT", 
                      "OPTION", "OPTIONS", "OVERWRITE", "UPDATE", "IN", 
                      "ON", "INDEPENDENT", "IDCOLUMN", "CREATE", "LAYOUT", 
                      "TRAIN", "FILE", "MAP", "METHOD", "NOT", "OR", "ORDER", 
                      "OUTPUT", "PLOT", "PREDICT", "PROJECT", "SELECT", 
                      "JOIN", "INNER", "LEFT", "RIGHT", "FULL", "SUM", "TITLE", 
                      "EXPIRE", "TRUE", "UESCAPE", "WHERE", "TYPE", "NCOMPILE", 
                      "SEMICOLON", "EQ", "NEQ", "LT", "LTE", "GT", "GTE", 
                      "STRING", "UNICODE_STRING", "BINARY_LITERAL", "INTEGER_VALUE", 
                      "DECIMAL_VALUE", "DOUBLE_VALUE", "IDENTIFIER", "SIMPLE_COMMENT", 
                      "SIMPLE_C_COMMENT", "BRACKETED_COMMENT", "WS" ];

var ruleNames =  [ "program", "stmt", "actionStmt", "exportStmt", "exportList", 
                   "exportableIdentifier", "assignStmt", "typeDefStmt", 
                   "typeDefExport", "mapExportable", "tableExport", "layoutExport", 
                   "identifierExport", "importStmt", "expr", "outputStmt", 
                   "outputVariant", "namedOutputStatement", "fileOutputStatement", 
                   "outputOptions", "outputUpdateOption", "outputExpireOption", 
                   "plotStmt", "plotType", "mlStmt", "train", "elementaryML", 
                   "trainOptions", "trainOption", "trainValue", "predict", 
                   "selectStmt", "joinClause", "joinType", "selectColumns", 
                   "exprLabel", "aggregatedSelectColumn", "selectColumn", 
                   "aggregateIdentifier", "selectFromClause", "nestedSelectStmt", 
                   "selectDataset", "selectDatasetFile", "selectTableName", 
                   "selectWhereClause", "orderByClause", "sortItem", "ascSortItem", 
                   "descSortItem", "groupByClause", "layoutStmt", "layoutContent", 
                   "inlineStmt", "qualifiedIdentifier", "dataType", "expression", 
                   "booleanExpression", "predicate", "valueExpression", 
                   "primaryExpression", "number", "string", "booleanValue", 
                   "comparisonOperator" ];

function HSQLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;

	  //these flags are set as required
	  this.flags = {ML:0,plot:0};

    return this;
}

HSQLParser.prototype = Object.create(antlr4.Parser.prototype);
HSQLParser.prototype.constructor = HSQLParser;

Object.defineProperty(HSQLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

HSQLParser.EOF = antlr4.Token.EOF;
HSQLParser.T__0 = 1;
HSQLParser.T__1 = 2;
HSQLParser.T__2 = 3;
HSQLParser.T__3 = 4;
HSQLParser.T__4 = 5;
HSQLParser.OUTER = 6;
HSQLParser.ONLY = 7;
HSQLParser.REAL_TYPE = 8;
HSQLParser.INTEGER_TYPE = 9;
HSQLParser.DECIMAL_TYPE = 10;
HSQLParser.VARSTRING_TYPE = 11;
HSQLParser.STRING_TYPE = 12;
HSQLParser.UNSTABLE = 13;
HSQLParser.STABLE = 14;
HSQLParser.TABLE = 15;
HSQLParser.EXPORT = 16;
HSQLParser.AND = 17;
HSQLParser.AS = 18;
HSQLParser.ASC = 19;
HSQLParser.AVG = 20;
HSQLParser.BETWEEN = 21;
HSQLParser.BY = 22;
HSQLParser.COUNT = 23;
HSQLParser.DESC = 24;
HSQLParser.DEPENDENT = 25;
HSQLParser.FALSE = 26;
HSQLParser.FROM = 27;
HSQLParser.GROUP = 28;
HSQLParser.IMPORT = 29;
HSQLParser.OPTION = 30;
HSQLParser.OPTIONS = 31;
HSQLParser.OVERWRITE = 32;
HSQLParser.UPDATE = 33;
HSQLParser.IN = 34;
HSQLParser.ON = 35;
HSQLParser.INDEPENDENT = 36;
HSQLParser.IDCOLUMN = 37;
HSQLParser.CREATE = 38;
HSQLParser.LAYOUT = 39;
HSQLParser.TRAIN = 40;
HSQLParser.FILE = 41;
HSQLParser.MAP = 42;
HSQLParser.METHOD = 43;
HSQLParser.NOT = 44;
HSQLParser.OR = 45;
HSQLParser.ORDER = 46;
HSQLParser.OUTPUT = 47;
HSQLParser.PLOT = 48;
HSQLParser.PREDICT = 49;
HSQLParser.PROJECT = 50;
HSQLParser.SELECT = 51;
HSQLParser.JOIN = 52;
HSQLParser.INNER = 53;
HSQLParser.LEFT = 54;
HSQLParser.RIGHT = 55;
HSQLParser.FULL = 56;
HSQLParser.SUM = 57;
HSQLParser.TITLE = 58;
HSQLParser.EXPIRE = 59;
HSQLParser.TRUE = 60;
HSQLParser.UESCAPE = 61;
HSQLParser.WHERE = 62;
HSQLParser.TYPE = 63;
HSQLParser.NCOMPILE = 64;
HSQLParser.SEMICOLON = 65;
HSQLParser.EQ = 66;
HSQLParser.NEQ = 67;
HSQLParser.LT = 68;
HSQLParser.LTE = 69;
HSQLParser.GT = 70;
HSQLParser.GTE = 71;
HSQLParser.STRING = 72;
HSQLParser.UNICODE_STRING = 73;
HSQLParser.BINARY_LITERAL = 74;
HSQLParser.INTEGER_VALUE = 75;
HSQLParser.DECIMAL_VALUE = 76;
HSQLParser.DOUBLE_VALUE = 77;
HSQLParser.IDENTIFIER = 78;
HSQLParser.SIMPLE_COMMENT = 79;
HSQLParser.SIMPLE_C_COMMENT = 80;
HSQLParser.BRACKETED_COMMENT = 81;
HSQLParser.WS = 82;

HSQLParser.RULE_program = 0;
HSQLParser.RULE_stmt = 1;
HSQLParser.RULE_actionStmt = 2;
HSQLParser.RULE_exportStmt = 3;
HSQLParser.RULE_exportList = 4;
HSQLParser.RULE_exportableIdentifier = 5;
HSQLParser.RULE_assignStmt = 6;
HSQLParser.RULE_typeDefStmt = 7;
HSQLParser.RULE_typeDefExport = 8;
HSQLParser.RULE_mapExportable = 9;
HSQLParser.RULE_tableExport = 10;
HSQLParser.RULE_layoutExport = 11;
HSQLParser.RULE_identifierExport = 12;
HSQLParser.RULE_importStmt = 13;
HSQLParser.RULE_expr = 14;
HSQLParser.RULE_outputStmt = 15;
HSQLParser.RULE_outputVariant = 16;
HSQLParser.RULE_namedOutputStatement = 17;
HSQLParser.RULE_fileOutputStatement = 18;
HSQLParser.RULE_outputOptions = 19;
HSQLParser.RULE_outputUpdateOption = 20;
HSQLParser.RULE_outputExpireOption = 21;
HSQLParser.RULE_plotStmt = 22;
HSQLParser.RULE_plotType = 23;
HSQLParser.RULE_mlStmt = 24;
HSQLParser.RULE_train = 25;
HSQLParser.RULE_elementaryML = 26;
HSQLParser.RULE_trainOptions = 27;
HSQLParser.RULE_trainOption = 28;
HSQLParser.RULE_trainValue = 29;
HSQLParser.RULE_predict = 30;
HSQLParser.RULE_selectStmt = 31;
HSQLParser.RULE_joinClause = 32;
HSQLParser.RULE_joinType = 33;
HSQLParser.RULE_selectColumns = 34;
HSQLParser.RULE_exprLabel = 35;
HSQLParser.RULE_aggregatedSelectColumn = 36;
HSQLParser.RULE_selectColumn = 37;
HSQLParser.RULE_aggregateIdentifier = 38;
HSQLParser.RULE_selectFromClause = 39;
HSQLParser.RULE_nestedSelectStmt = 40;
HSQLParser.RULE_selectDataset = 41;
HSQLParser.RULE_selectDatasetFile = 42;
HSQLParser.RULE_selectTableName = 43;
HSQLParser.RULE_selectWhereClause = 44;
HSQLParser.RULE_orderByClause = 45;
HSQLParser.RULE_sortItem = 46;
HSQLParser.RULE_ascSortItem = 47;
HSQLParser.RULE_descSortItem = 48;
HSQLParser.RULE_groupByClause = 49;
HSQLParser.RULE_layoutStmt = 50;
HSQLParser.RULE_layoutContent = 51;
HSQLParser.RULE_inlineStmt = 52;
HSQLParser.RULE_qualifiedIdentifier = 53;
HSQLParser.RULE_dataType = 54;
HSQLParser.RULE_expression = 55;
HSQLParser.RULE_booleanExpression = 56;
HSQLParser.RULE_predicate = 57;
HSQLParser.RULE_valueExpression = 58;
HSQLParser.RULE_primaryExpression = 59;
HSQLParser.RULE_number = 60;
HSQLParser.RULE_string = 61;
HSQLParser.RULE_booleanValue = 62;
HSQLParser.RULE_comparisonOperator = 63;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(HSQLParser.EOF, 0);
};

ProgramContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

ProgramContext.prototype.exportStmt = function() {
    return this.getTypedRuleContext(ExportStmtContext,0);
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.ProgramContext = ProgramContext;

HSQLParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, HSQLParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (HSQLParser.IMPORT - 29)) | (1 << (HSQLParser.MAP - 29)) | (1 << (HSQLParser.OUTPUT - 29)) | (1 << (HSQLParser.PLOT - 29)))) !== 0) || _la===HSQLParser.NCOMPILE || _la===HSQLParser.IDENTIFIER) {
            this.state = 128;
            this.stmt();
            this.state = 133;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.EXPORT) {
            this.state = 134;
            this.exportStmt();
        }

        this.state = 137;
        this.match(HSQLParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.actionStmt = function() {
    return this.getTypedRuleContext(ActionStmtContext,0);
};

StmtContext.prototype.SEMICOLON = function() {
    return this.getToken(HSQLParser.SEMICOLON, 0);
};

StmtContext.prototype.assignStmt = function() {
    return this.getTypedRuleContext(AssignStmtContext,0);
};

StmtContext.prototype.importStmt = function() {
    return this.getTypedRuleContext(ImportStmtContext,0);
};

StmtContext.prototype.typeDefStmt = function() {
    return this.getTypedRuleContext(TypeDefStmtContext,0);
};

StmtContext.prototype.inlineStmt = function() {
    return this.getTypedRuleContext(InlineStmtContext,0);
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.StmtContext = StmtContext;

HSQLParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, HSQLParser.RULE_stmt);
    try {
        this.state = 154;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HSQLParser.OUTPUT:
        case HSQLParser.PLOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 139;
            this.actionStmt();
            this.state = 140;
            this.match(HSQLParser.SEMICOLON);
            break;
        case HSQLParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 142;
            this.assignStmt();
            this.state = 143;
            this.match(HSQLParser.SEMICOLON);
            break;
        case HSQLParser.IMPORT:
            this.enterOuterAlt(localctx, 3);
            this.state = 145;
            this.importStmt();
            this.state = 146;
            this.match(HSQLParser.SEMICOLON);
            break;
        case HSQLParser.MAP:
            this.enterOuterAlt(localctx, 4);
            this.state = 148;
            this.typeDefStmt();
            this.state = 149;
            this.match(HSQLParser.SEMICOLON);
            break;
        case HSQLParser.NCOMPILE:
            this.enterOuterAlt(localctx, 5);
            this.state = 151;
            this.inlineStmt();
            this.state = 152;
            this.match(HSQLParser.SEMICOLON);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ActionStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_actionStmt;
    return this;
}

ActionStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActionStmtContext.prototype.constructor = ActionStmtContext;

ActionStmtContext.prototype.outputStmt = function() {
    return this.getTypedRuleContext(OutputStmtContext,0);
};

ActionStmtContext.prototype.plotStmt = function() {
    return this.getTypedRuleContext(PlotStmtContext,0);
};

ActionStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitActionStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.ActionStmtContext = ActionStmtContext;

HSQLParser.prototype.actionStmt = function() {

    var localctx = new ActionStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, HSQLParser.RULE_actionStmt);
    try {
        this.state = 158;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HSQLParser.OUTPUT:
            this.enterOuterAlt(localctx, 1);
            this.state = 156;
            this.outputStmt();
            break;
        case HSQLParser.PLOT:
            this.enterOuterAlt(localctx, 2);
            this.state = 157;
            this.plotStmt();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExportStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_exportStmt;
    return this;
}

ExportStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExportStmtContext.prototype.constructor = ExportStmtContext;

ExportStmtContext.prototype.EXPORT = function() {
    return this.getToken(HSQLParser.EXPORT, 0);
};

ExportStmtContext.prototype.exportList = function() {
    return this.getTypedRuleContext(ExportListContext,0);
};

ExportStmtContext.prototype.SEMICOLON = function() {
    return this.getToken(HSQLParser.SEMICOLON, 0);
};

ExportStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitExportStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.ExportStmtContext = ExportStmtContext;

HSQLParser.prototype.exportStmt = function() {

    var localctx = new ExportStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, HSQLParser.RULE_exportStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.match(HSQLParser.EXPORT);
        this.state = 161;
        this.exportList();
        this.state = 162;
        this.match(HSQLParser.SEMICOLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExportListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_exportList;
    return this;
}

ExportListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExportListContext.prototype.constructor = ExportListContext;

ExportListContext.prototype.exportableIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExportableIdentifierContext);
    } else {
        return this.getTypedRuleContext(ExportableIdentifierContext,i);
    }
};

ExportListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitExportList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.ExportListContext = ExportListContext;

HSQLParser.prototype.exportList = function() {

    var localctx = new ExportListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, HSQLParser.RULE_exportList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.exportableIdentifier();
        this.state = 169;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HSQLParser.T__0) {
            this.state = 165;
            this.match(HSQLParser.T__0);
            this.state = 166;
            this.exportableIdentifier();
            this.state = 171;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExportableIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_exportableIdentifier;
    return this;
}

ExportableIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExportableIdentifierContext.prototype.constructor = ExportableIdentifierContext;

ExportableIdentifierContext.prototype.IDENTIFIER = function() {
    return this.getToken(HSQLParser.IDENTIFIER, 0);
};

ExportableIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitExportableIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.ExportableIdentifierContext = ExportableIdentifierContext;

HSQLParser.prototype.exportableIdentifier = function() {

    var localctx = new ExportableIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, HSQLParser.RULE_exportableIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(HSQLParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_assignStmt;
    return this;
}

AssignStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStmtContext.prototype.constructor = AssignStmtContext;

AssignStmtContext.prototype.exprLabel = function() {
    return this.getTypedRuleContext(ExprLabelContext,0);
};

AssignStmtContext.prototype.EQ = function() {
    return this.getToken(HSQLParser.EQ, 0);
};

AssignStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitAssignStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.AssignStmtContext = AssignStmtContext;

HSQLParser.prototype.assignStmt = function() {

    var localctx = new AssignStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, HSQLParser.RULE_assignStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.exprLabel();
        this.state = 175;
        this.match(HSQLParser.EQ);
        this.state = 176;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeDefStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_typeDefStmt;
    return this;
}

TypeDefStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeDefStmtContext.prototype.constructor = TypeDefStmtContext;

TypeDefStmtContext.prototype.MAP = function() {
    return this.getToken(HSQLParser.MAP, 0);
};

TypeDefStmtContext.prototype.mapExportable = function() {
    return this.getTypedRuleContext(MapExportableContext,0);
};

TypeDefStmtContext.prototype.typeDefExport = function() {
    return this.getTypedRuleContext(TypeDefExportContext,0);
};

TypeDefStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitTypeDefStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.TypeDefStmtContext = TypeDefStmtContext;

HSQLParser.prototype.typeDefStmt = function() {

    var localctx = new TypeDefStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, HSQLParser.RULE_typeDefStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this.match(HSQLParser.MAP);
        this.state = 180;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.EXPORT) {
            this.state = 179;
            this.typeDefExport();
        }

        this.state = 182;
        this.mapExportable();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeDefExportContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_typeDefExport;
    return this;
}

TypeDefExportContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeDefExportContext.prototype.constructor = TypeDefExportContext;

TypeDefExportContext.prototype.EXPORT = function() {
    return this.getToken(HSQLParser.EXPORT, 0);
};

TypeDefExportContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitTypeDefExport(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.TypeDefExportContext = TypeDefExportContext;

HSQLParser.prototype.typeDefExport = function() {

    var localctx = new TypeDefExportContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, HSQLParser.RULE_typeDefExport);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.match(HSQLParser.EXPORT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MapExportableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_mapExportable;
    return this;
}

MapExportableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapExportableContext.prototype.constructor = MapExportableContext;

MapExportableContext.prototype.tableExport = function() {
    return this.getTypedRuleContext(TableExportContext,0);
};

MapExportableContext.prototype.layoutExport = function() {
    return this.getTypedRuleContext(LayoutExportContext,0);
};

MapExportableContext.prototype.identifierExport = function() {
    return this.getTypedRuleContext(IdentifierExportContext,0);
};

MapExportableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitMapExportable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.MapExportableContext = MapExportableContext;

HSQLParser.prototype.mapExportable = function() {

    var localctx = new MapExportableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, HSQLParser.RULE_mapExportable);
    try {
        this.state = 189;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 186;
            this.tableExport();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 187;
            this.layoutExport();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 188;
            this.identifierExport();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TableExportContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_tableExport;
    return this;
}

TableExportContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TableExportContext.prototype.constructor = TableExportContext;

TableExportContext.prototype.IDENTIFIER = function() {
    return this.getToken(HSQLParser.IDENTIFIER, 0);
};

TableExportContext.prototype.TABLE = function() {
    return this.getToken(HSQLParser.TABLE, 0);
};

TableExportContext.prototype.identifierExport = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierExportContext);
    } else {
        return this.getTypedRuleContext(IdentifierExportContext,i);
    }
};

TableExportContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitTableExport(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.TableExportContext = TableExportContext;

HSQLParser.prototype.tableExport = function() {

    var localctx = new TableExportContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, HSQLParser.RULE_tableExport);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(HSQLParser.IDENTIFIER);
        this.state = 192;
        this.match(HSQLParser.TABLE);
        this.state = 193;
        this.match(HSQLParser.T__1);
        this.state = 194;
        this.identifierExport();
        this.state = 199;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HSQLParser.T__0) {
            this.state = 195;
            this.match(HSQLParser.T__0);
            this.state = 196;
            this.identifierExport();
            this.state = 201;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 202;
        this.match(HSQLParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LayoutExportContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_layoutExport;
    return this;
}

LayoutExportContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LayoutExportContext.prototype.constructor = LayoutExportContext;

LayoutExportContext.prototype.IDENTIFIER = function() {
    return this.getToken(HSQLParser.IDENTIFIER, 0);
};

LayoutExportContext.prototype.LAYOUT = function() {
    return this.getToken(HSQLParser.LAYOUT, 0);
};

LayoutExportContext.prototype.identifierExport = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierExportContext);
    } else {
        return this.getTypedRuleContext(IdentifierExportContext,i);
    }
};

LayoutExportContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitLayoutExport(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.LayoutExportContext = LayoutExportContext;

HSQLParser.prototype.layoutExport = function() {

    var localctx = new LayoutExportContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, HSQLParser.RULE_layoutExport);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.match(HSQLParser.IDENTIFIER);
        this.state = 205;
        this.match(HSQLParser.LAYOUT);
        this.state = 206;
        this.match(HSQLParser.T__1);
        this.state = 207;
        this.identifierExport();
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HSQLParser.T__0) {
            this.state = 208;
            this.match(HSQLParser.T__0);
            this.state = 209;
            this.identifierExport();
            this.state = 214;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 215;
        this.match(HSQLParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdentifierExportContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_identifierExport;
    return this;
}

IdentifierExportContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierExportContext.prototype.constructor = IdentifierExportContext;

IdentifierExportContext.prototype.IDENTIFIER = function() {
    return this.getToken(HSQLParser.IDENTIFIER, 0);
};

IdentifierExportContext.prototype.dataType = function() {
    return this.getTypedRuleContext(DataTypeContext,0);
};

IdentifierExportContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitIdentifierExport(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.IdentifierExportContext = IdentifierExportContext;

HSQLParser.prototype.identifierExport = function() {

    var localctx = new IdentifierExportContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, HSQLParser.RULE_identifierExport);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.match(HSQLParser.IDENTIFIER);
        this.state = 218;
        this.dataType();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ImportStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_importStmt;
    this.alias = null; // Token
    return this;
}

ImportStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportStmtContext.prototype.constructor = ImportStmtContext;

ImportStmtContext.prototype.IMPORT = function() {
    return this.getToken(HSQLParser.IMPORT, 0);
};

ImportStmtContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HSQLParser.IDENTIFIER);
    } else {
        return this.getToken(HSQLParser.IDENTIFIER, i);
    }
};


ImportStmtContext.prototype.AS = function() {
    return this.getToken(HSQLParser.AS, 0);
};

ImportStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitImportStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.ImportStmtContext = ImportStmtContext;

HSQLParser.prototype.importStmt = function() {

    var localctx = new ImportStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, HSQLParser.RULE_importStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.match(HSQLParser.IMPORT);
        this.state = 221;
        this.match(HSQLParser.IDENTIFIER);
        this.state = 224;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.AS) {
            this.state = 222;
            this.match(HSQLParser.AS);
            this.state = 223;
            localctx.alias = this.match(HSQLParser.IDENTIFIER);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.selectStmt = function() {
    return this.getTypedRuleContext(SelectStmtContext,0);
};

ExprContext.prototype.mlStmt = function() {
    return this.getTypedRuleContext(MlStmtContext,0);
};

ExprContext.prototype.layoutStmt = function() {
    return this.getTypedRuleContext(LayoutStmtContext,0);
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.ExprContext = ExprContext;

HSQLParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, HSQLParser.RULE_expr);
    try {
        this.state = 229;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HSQLParser.SELECT:
            this.enterOuterAlt(localctx, 1);
            this.state = 226;
            this.selectStmt();
            break;
        case HSQLParser.TRAIN:
        case HSQLParser.PREDICT:
            this.enterOuterAlt(localctx, 2);
            this.state = 227;
            this.mlStmt();
            break;
        case HSQLParser.CREATE:
            this.enterOuterAlt(localctx, 3);
            this.state = 228;
            this.layoutStmt();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OutputStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_outputStmt;
    this.label = null; // Token
    return this;
}

OutputStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OutputStmtContext.prototype.constructor = OutputStmtContext;

OutputStmtContext.prototype.OUTPUT = function() {
    return this.getToken(HSQLParser.OUTPUT, 0);
};

OutputStmtContext.prototype.outputOptions = function() {
    return this.getTypedRuleContext(OutputOptionsContext,0);
};

OutputStmtContext.prototype.IDENTIFIER = function() {
    return this.getToken(HSQLParser.IDENTIFIER, 0);
};

OutputStmtContext.prototype.outputVariant = function() {
    return this.getTypedRuleContext(OutputVariantContext,0);
};

OutputStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitOutputStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.OutputStmtContext = OutputStmtContext;

HSQLParser.prototype.outputStmt = function() {

    var localctx = new OutputStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, HSQLParser.RULE_outputStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 231;
        this.match(HSQLParser.OUTPUT);
        this.state = 232;
        localctx.label = this.match(HSQLParser.IDENTIFIER);
        this.state = 234;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.FILE || _la===HSQLParser.TITLE) {
            this.state = 233;
            this.outputVariant();
        }

        this.state = 236;
        this.outputOptions();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OutputVariantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_outputVariant;
    return this;
}

OutputVariantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OutputVariantContext.prototype.constructor = OutputVariantContext;

OutputVariantContext.prototype.namedOutputStatement = function() {
    return this.getTypedRuleContext(NamedOutputStatementContext,0);
};

OutputVariantContext.prototype.fileOutputStatement = function() {
    return this.getTypedRuleContext(FileOutputStatementContext,0);
};

OutputVariantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitOutputVariant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.OutputVariantContext = OutputVariantContext;

HSQLParser.prototype.outputVariant = function() {

    var localctx = new OutputVariantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, HSQLParser.RULE_outputVariant);
    try {
        this.state = 240;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HSQLParser.TITLE:
            this.enterOuterAlt(localctx, 1);
            this.state = 238;
            this.namedOutputStatement();
            break;
        case HSQLParser.FILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 239;
            this.fileOutputStatement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NamedOutputStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_namedOutputStatement;
    return this;
}

NamedOutputStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamedOutputStatementContext.prototype.constructor = NamedOutputStatementContext;

NamedOutputStatementContext.prototype.TITLE = function() {
    return this.getToken(HSQLParser.TITLE, 0);
};

NamedOutputStatementContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

NamedOutputStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitNamedOutputStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.NamedOutputStatementContext = NamedOutputStatementContext;

HSQLParser.prototype.namedOutputStatement = function() {

    var localctx = new NamedOutputStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, HSQLParser.RULE_namedOutputStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this.match(HSQLParser.TITLE);
        this.state = 243;
        this.string();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FileOutputStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_fileOutputStatement;
    this.fileName = null; // StringContext
    this.fileType = null; // Token
    return this;
}

FileOutputStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileOutputStatementContext.prototype.constructor = FileOutputStatementContext;

FileOutputStatementContext.prototype.FILE = function() {
    return this.getToken(HSQLParser.FILE, 0);
};

FileOutputStatementContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

FileOutputStatementContext.prototype.IDENTIFIER = function() {
    return this.getToken(HSQLParser.IDENTIFIER, 0);
};

FileOutputStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitFileOutputStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.FileOutputStatementContext = FileOutputStatementContext;

HSQLParser.prototype.fileOutputStatement = function() {

    var localctx = new FileOutputStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, HSQLParser.RULE_fileOutputStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.match(HSQLParser.FILE);
        this.state = 246;
        localctx.fileName = this.string();
        this.state = 247;
        localctx.fileType = this.match(HSQLParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OutputOptionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_outputOptions;
    return this;
}

OutputOptionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OutputOptionsContext.prototype.constructor = OutputOptionsContext;

OutputOptionsContext.prototype.outputUpdateOption = function() {
    return this.getTypedRuleContext(OutputUpdateOptionContext,0);
};

OutputOptionsContext.prototype.outputExpireOption = function() {
    return this.getTypedRuleContext(OutputExpireOptionContext,0);
};

OutputOptionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitOutputOptions(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.OutputOptionsContext = OutputOptionsContext;

HSQLParser.prototype.outputOptions = function() {

    var localctx = new OutputOptionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, HSQLParser.RULE_outputOptions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.OVERWRITE || _la===HSQLParser.UPDATE) {
            this.state = 249;
            this.outputUpdateOption();
        }

        this.state = 253;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.EXPIRE) {
            this.state = 252;
            this.outputExpireOption();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OutputUpdateOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_outputUpdateOption;
    return this;
}

OutputUpdateOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OutputUpdateOptionContext.prototype.constructor = OutputUpdateOptionContext;

OutputUpdateOptionContext.prototype.UPDATE = function() {
    return this.getToken(HSQLParser.UPDATE, 0);
};

OutputUpdateOptionContext.prototype.OVERWRITE = function() {
    return this.getToken(HSQLParser.OVERWRITE, 0);
};

OutputUpdateOptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitOutputUpdateOption(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.OutputUpdateOptionContext = OutputUpdateOptionContext;

HSQLParser.prototype.outputUpdateOption = function() {

    var localctx = new OutputUpdateOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, HSQLParser.RULE_outputUpdateOption);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        _la = this._input.LA(1);
        if(!(_la===HSQLParser.OVERWRITE || _la===HSQLParser.UPDATE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OutputExpireOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_outputExpireOption;
    return this;
}

OutputExpireOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OutputExpireOptionContext.prototype.constructor = OutputExpireOptionContext;

OutputExpireOptionContext.prototype.EXPIRE = function() {
    return this.getToken(HSQLParser.EXPIRE, 0);
};

OutputExpireOptionContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

OutputExpireOptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitOutputExpireOption(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.OutputExpireOptionContext = OutputExpireOptionContext;

HSQLParser.prototype.outputExpireOption = function() {

    var localctx = new OutputExpireOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, HSQLParser.RULE_outputExpireOption);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 257;
        this.match(HSQLParser.EXPIRE);
        this.state = 258;
        this.number();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PlotStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_plotStmt;
    this.labelIdentifier = null; // QualifiedIdentifierContext
    this.titleIdentifier = null; // Token
    this.plottype = null; // PlotTypeContext
    return this;
}

PlotStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlotStmtContext.prototype.constructor = PlotStmtContext;

PlotStmtContext.prototype.PLOT = function() {
    return this.getToken(HSQLParser.PLOT, 0);
};

PlotStmtContext.prototype.FROM = function() {
    return this.getToken(HSQLParser.FROM, 0);
};

PlotStmtContext.prototype.TITLE = function() {
    return this.getToken(HSQLParser.TITLE, 0);
};

PlotStmtContext.prototype.qualifiedIdentifier = function() {
    return this.getTypedRuleContext(QualifiedIdentifierContext,0);
};

PlotStmtContext.prototype.STRING = function() {
    return this.getToken(HSQLParser.STRING, 0);
};

PlotStmtContext.prototype.TYPE = function() {
    return this.getToken(HSQLParser.TYPE, 0);
};

PlotStmtContext.prototype.plotType = function() {
    return this.getTypedRuleContext(PlotTypeContext,0);
};

PlotStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitPlotStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.PlotStmtContext = PlotStmtContext;

HSQLParser.prototype.plotStmt = function() {

    var localctx = new PlotStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, HSQLParser.RULE_plotStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.flags.plot=1;
        this.state = 261;
        this.match(HSQLParser.PLOT);
        this.state = 262;
        this.match(HSQLParser.FROM);
        this.state = 263;
        localctx.labelIdentifier = this.qualifiedIdentifier();
        this.state = 264;
        this.match(HSQLParser.TITLE);
        this.state = 265;
        localctx.titleIdentifier = this.match(HSQLParser.STRING);
        this.state = 268;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.TYPE) {
            this.state = 266;
            this.match(HSQLParser.TYPE);
            this.state = 267;
            localctx.plottype = this.plotType();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PlotTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_plotType;
    return this;
}

PlotTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlotTypeContext.prototype.constructor = PlotTypeContext;

PlotTypeContext.prototype.IDENTIFIER = function() {
    return this.getToken(HSQLParser.IDENTIFIER, 0);
};

PlotTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitPlotType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.PlotTypeContext = PlotTypeContext;

HSQLParser.prototype.plotType = function() {

    var localctx = new PlotTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, HSQLParser.RULE_plotType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.match(HSQLParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MlStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_mlStmt;
    return this;
}

MlStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MlStmtContext.prototype.constructor = MlStmtContext;

MlStmtContext.prototype.train = function() {
    return this.getTypedRuleContext(TrainContext,0);
};

MlStmtContext.prototype.predict = function() {
    return this.getTypedRuleContext(PredictContext,0);
};

MlStmtContext.prototype.elementaryML = function() {
    return this.getTypedRuleContext(ElementaryMLContext,0);
};

MlStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitMlStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.MlStmtContext = MlStmtContext;

HSQLParser.prototype.mlStmt = function() {

    var localctx = new MlStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, HSQLParser.RULE_mlStmt);
    try {
        this.state = 275;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 272;
            this.train();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 273;
            this.predict();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 274;
            this.elementaryML();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TrainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_train;
    this.ind = null; // QualifiedIdentifierContext
    this.dep = null; // QualifiedIdentifierContext
    this.test = null; // QualifiedIdentifierContext
    this.method = null; // Token
    return this;
}

TrainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TrainContext.prototype.constructor = TrainContext;

TrainContext.prototype.TRAIN = function() {
    return this.getToken(HSQLParser.TRAIN, 0);
};

TrainContext.prototype.FROM = function() {
    return this.getToken(HSQLParser.FROM, 0);
};

TrainContext.prototype.METHOD = function() {
    return this.getToken(HSQLParser.METHOD, 0);
};

TrainContext.prototype.qualifiedIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QualifiedIdentifierContext);
    } else {
        return this.getTypedRuleContext(QualifiedIdentifierContext,i);
    }
};

TrainContext.prototype.IDENTIFIER = function() {
    return this.getToken(HSQLParser.IDENTIFIER, 0);
};

TrainContext.prototype.OPTION = function() {
    return this.getToken(HSQLParser.OPTION, 0);
};

TrainContext.prototype.trainOptions = function() {
    return this.getTypedRuleContext(TrainOptionsContext,0);
};

TrainContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitTrain(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.TrainContext = TrainContext;

HSQLParser.prototype.train = function() {

    var localctx = new TrainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, HSQLParser.RULE_train);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
         this.flags.ML = 1;
        this.state = 278;
        this.match(HSQLParser.TRAIN);
        this.state = 279;
        this.match(HSQLParser.FROM);
        this.state = 280;
        localctx.ind = this.qualifiedIdentifier();
        this.state = 281;
        this.match(HSQLParser.T__0);
        this.state = 282;
        localctx.dep = this.qualifiedIdentifier();
        this.state = 285;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.T__0) {
            this.state = 283;
            this.match(HSQLParser.T__0);
            this.state = 284;
            localctx.test = this.qualifiedIdentifier();
        }

        this.state = 287;
        this.match(HSQLParser.METHOD);
        this.state = 288;
        localctx.method = this.match(HSQLParser.IDENTIFIER);
        this.state = 291;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.OPTION) {
            this.state = 289;
            this.match(HSQLParser.OPTION);
            this.state = 290;
            this.trainOptions();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElementaryMLContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_elementaryML;
    this.ind = null; // QualifiedIdentifierContext
    this.ind2 = null; // QualifiedIdentifierContext
    this.method = null; // Token
    return this;
}

ElementaryMLContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementaryMLContext.prototype.constructor = ElementaryMLContext;

ElementaryMLContext.prototype.PREDICT = function() {
    return this.getToken(HSQLParser.PREDICT, 0);
};

ElementaryMLContext.prototype.FROM = function() {
    return this.getToken(HSQLParser.FROM, 0);
};

ElementaryMLContext.prototype.METHOD = function() {
    return this.getToken(HSQLParser.METHOD, 0);
};

ElementaryMLContext.prototype.qualifiedIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QualifiedIdentifierContext);
    } else {
        return this.getTypedRuleContext(QualifiedIdentifierContext,i);
    }
};

ElementaryMLContext.prototype.IDENTIFIER = function() {
    return this.getToken(HSQLParser.IDENTIFIER, 0);
};

ElementaryMLContext.prototype.OPTION = function() {
    return this.getToken(HSQLParser.OPTION, 0);
};

ElementaryMLContext.prototype.trainOptions = function() {
    return this.getTypedRuleContext(TrainOptionsContext,0);
};

ElementaryMLContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitElementaryML(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.ElementaryMLContext = ElementaryMLContext;

HSQLParser.prototype.elementaryML = function() {

    var localctx = new ElementaryMLContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, HSQLParser.RULE_elementaryML);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        this.match(HSQLParser.PREDICT);
        this.state = 294;
        this.match(HSQLParser.FROM);
        this.state = 295;
        localctx.ind = this.qualifiedIdentifier();
        this.state = 298;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.T__0) {
            this.state = 296;
            this.match(HSQLParser.T__0);
            this.state = 297;
            localctx.ind2 = this.qualifiedIdentifier();
        }

        this.state = 300;
        this.match(HSQLParser.METHOD);
        this.state = 301;
        localctx.method = this.match(HSQLParser.IDENTIFIER);
        this.state = 304;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.OPTION) {
            this.state = 302;
            this.match(HSQLParser.OPTION);
            this.state = 303;
            this.trainOptions();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TrainOptionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_trainOptions;
    return this;
}

TrainOptionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TrainOptionsContext.prototype.constructor = TrainOptionsContext;

TrainOptionsContext.prototype.trainOption = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TrainOptionContext);
    } else {
        return this.getTypedRuleContext(TrainOptionContext,i);
    }
};

TrainOptionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitTrainOptions(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.TrainOptionsContext = TrainOptionsContext;

HSQLParser.prototype.trainOptions = function() {

    var localctx = new TrainOptionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, HSQLParser.RULE_trainOptions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 306;
        this.trainOption();
        this.state = 311;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HSQLParser.T__0) {
            this.state = 307;
            this.match(HSQLParser.T__0);
            this.state = 308;
            this.trainOption();
            this.state = 313;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TrainOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_trainOption;
    return this;
}

TrainOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TrainOptionContext.prototype.constructor = TrainOptionContext;

TrainOptionContext.prototype.IDENTIFIER = function() {
    return this.getToken(HSQLParser.IDENTIFIER, 0);
};

TrainOptionContext.prototype.EQ = function() {
    return this.getToken(HSQLParser.EQ, 0);
};

TrainOptionContext.prototype.trainValue = function() {
    return this.getTypedRuleContext(TrainValueContext,0);
};

TrainOptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitTrainOption(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.TrainOptionContext = TrainOptionContext;

HSQLParser.prototype.trainOption = function() {

    var localctx = new TrainOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, HSQLParser.RULE_trainOption);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        this.match(HSQLParser.IDENTIFIER);
        this.state = 315;
        this.match(HSQLParser.EQ);
        this.state = 316;
        this.trainValue();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TrainValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_trainValue;
    return this;
}

TrainValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TrainValueContext.prototype.constructor = TrainValueContext;

TrainValueContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

TrainValueContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

TrainValueContext.prototype.qualifiedIdentifier = function() {
    return this.getTypedRuleContext(QualifiedIdentifierContext,0);
};

TrainValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitTrainValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.TrainValueContext = TrainValueContext;

HSQLParser.prototype.trainValue = function() {

    var localctx = new TrainValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, HSQLParser.RULE_trainValue);
    try {
        this.state = 321;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HSQLParser.INTEGER_VALUE:
        case HSQLParser.DECIMAL_VALUE:
        case HSQLParser.DOUBLE_VALUE:
            this.enterOuterAlt(localctx, 1);
            this.state = 318;
            this.number();
            break;
        case HSQLParser.STRING:
        case HSQLParser.UNICODE_STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 319;
            this.string();
            break;
        case HSQLParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 3);
            this.state = 320;
            this.qualifiedIdentifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PredictContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_predict;
    this.model = null; // QualifiedIdentifierContext
    this.ind = null; // QualifiedIdentifierContext
    this.method = null; // Token
    return this;
}

PredictContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredictContext.prototype.constructor = PredictContext;

PredictContext.prototype.PREDICT = function() {
    return this.getToken(HSQLParser.PREDICT, 0);
};

PredictContext.prototype.FROM = function() {
    return this.getToken(HSQLParser.FROM, 0);
};

PredictContext.prototype.qualifiedIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QualifiedIdentifierContext);
    } else {
        return this.getTypedRuleContext(QualifiedIdentifierContext,i);
    }
};

PredictContext.prototype.METHOD = function() {
    return this.getToken(HSQLParser.METHOD, 0);
};

PredictContext.prototype.IDENTIFIER = function() {
    return this.getToken(HSQLParser.IDENTIFIER, 0);
};

PredictContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitPredict(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.PredictContext = PredictContext;

HSQLParser.prototype.predict = function() {

    var localctx = new PredictContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, HSQLParser.RULE_predict);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 323;
        this.match(HSQLParser.PREDICT);
        this.state = 324;
        localctx.model = this.qualifiedIdentifier();
        this.state = 325;
        this.match(HSQLParser.FROM);
        this.state = 326;
        localctx.ind = this.qualifiedIdentifier();
        this.state = 329;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.METHOD) {
            this.state = 327;
            this.match(HSQLParser.METHOD);
            this.state = 328;
            localctx.method = this.match(HSQLParser.IDENTIFIER);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_selectStmt;
    this.columns = null; // SelectColumnsContext
    this.fromclause = null; // SelectFromClauseContext
    this.whereclause = null; // SelectWhereClauseContext
    this.groupbyclause = null; // GroupByClauseContext
    this.orderbyclause = null; // OrderByClauseContext
    return this;
}

SelectStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectStmtContext.prototype.constructor = SelectStmtContext;

SelectStmtContext.prototype.SELECT = function() {
    return this.getToken(HSQLParser.SELECT, 0);
};

SelectStmtContext.prototype.FROM = function() {
    return this.getToken(HSQLParser.FROM, 0);
};

SelectStmtContext.prototype.selectColumns = function() {
    return this.getTypedRuleContext(SelectColumnsContext,0);
};

SelectStmtContext.prototype.selectFromClause = function() {
    return this.getTypedRuleContext(SelectFromClauseContext,0);
};

SelectStmtContext.prototype.WHERE = function() {
    return this.getToken(HSQLParser.WHERE, 0);
};

SelectStmtContext.prototype.GROUP = function() {
    return this.getToken(HSQLParser.GROUP, 0);
};

SelectStmtContext.prototype.BY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HSQLParser.BY);
    } else {
        return this.getToken(HSQLParser.BY, i);
    }
};


SelectStmtContext.prototype.ORDER = function() {
    return this.getToken(HSQLParser.ORDER, 0);
};

SelectStmtContext.prototype.joinClause = function() {
    return this.getTypedRuleContext(JoinClauseContext,0);
};

SelectStmtContext.prototype.selectWhereClause = function() {
    return this.getTypedRuleContext(SelectWhereClauseContext,0);
};

SelectStmtContext.prototype.groupByClause = function() {
    return this.getTypedRuleContext(GroupByClauseContext,0);
};

SelectStmtContext.prototype.orderByClause = function() {
    return this.getTypedRuleContext(OrderByClauseContext,0);
};

SelectStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitSelectStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.SelectStmtContext = SelectStmtContext;

HSQLParser.prototype.selectStmt = function() {

    var localctx = new SelectStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, HSQLParser.RULE_selectStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 331;
        this.match(HSQLParser.SELECT);
        this.state = 332;
        localctx.columns = this.selectColumns();
        this.state = 333;
        this.match(HSQLParser.FROM);
        this.state = 334;
        localctx.fromclause = this.selectFromClause();
        this.state = 337;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.WHERE) {
            this.state = 335;
            this.match(HSQLParser.WHERE);
            this.state = 336;
            localctx.whereclause = this.selectWhereClause();
        }

        this.state = 342;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.GROUP) {
            this.state = 339;
            this.match(HSQLParser.GROUP);
            this.state = 340;
            this.match(HSQLParser.BY);
            this.state = 341;
            localctx.groupbyclause = this.groupByClause();
        }

        this.state = 347;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.ORDER) {
            this.state = 344;
            this.match(HSQLParser.ORDER);
            this.state = 345;
            this.match(HSQLParser.BY);
            this.state = 346;
            localctx.orderbyclause = this.orderByClause();
        }

        this.state = 350;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 52)) & ~0x1f) == 0 && ((1 << (_la - 52)) & ((1 << (HSQLParser.JOIN - 52)) | (1 << (HSQLParser.INNER - 52)) | (1 << (HSQLParser.LEFT - 52)) | (1 << (HSQLParser.RIGHT - 52)) | (1 << (HSQLParser.FULL - 52)))) !== 0)) {
            this.state = 349;
            this.joinClause();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function JoinClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_joinClause;
    this.joinidentifier = null; // QualifiedIdentifierContext
    this.leftrecset = null; // QualifiedIdentifierContext
    this.joincondition = null; // ComparisonOperatorContext
    this.rightrecset = null; // QualifiedIdentifierContext
    return this;
}

JoinClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JoinClauseContext.prototype.constructor = JoinClauseContext;

JoinClauseContext.prototype.JOIN = function() {
    return this.getToken(HSQLParser.JOIN, 0);
};

JoinClauseContext.prototype.ON = function() {
    return this.getToken(HSQLParser.ON, 0);
};

JoinClauseContext.prototype.qualifiedIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QualifiedIdentifierContext);
    } else {
        return this.getTypedRuleContext(QualifiedIdentifierContext,i);
    }
};

JoinClauseContext.prototype.joinType = function() {
    return this.getTypedRuleContext(JoinTypeContext,0);
};

JoinClauseContext.prototype.comparisonOperator = function() {
    return this.getTypedRuleContext(ComparisonOperatorContext,0);
};

JoinClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitJoinClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.JoinClauseContext = JoinClauseContext;

HSQLParser.prototype.joinClause = function() {

    var localctx = new JoinClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, HSQLParser.RULE_joinClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 353;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (HSQLParser.INNER - 53)) | (1 << (HSQLParser.LEFT - 53)) | (1 << (HSQLParser.RIGHT - 53)) | (1 << (HSQLParser.FULL - 53)))) !== 0)) {
            this.state = 352;
            this.joinType();
        }

        this.state = 355;
        this.match(HSQLParser.JOIN);
        this.state = 356;
        localctx.joinidentifier = this.qualifiedIdentifier();
        this.state = 357;
        this.match(HSQLParser.ON);

        this.state = 358;
        localctx.leftrecset = this.qualifiedIdentifier();
        this.state = 359;
        localctx.joincondition = this.comparisonOperator();
        this.state = 360;
        localctx.rightrecset = this.qualifiedIdentifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function JoinTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_joinType;
    return this;
}

JoinTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JoinTypeContext.prototype.constructor = JoinTypeContext;

JoinTypeContext.prototype.INNER = function() {
    return this.getToken(HSQLParser.INNER, 0);
};

JoinTypeContext.prototype.LEFT = function() {
    return this.getToken(HSQLParser.LEFT, 0);
};

JoinTypeContext.prototype.RIGHT = function() {
    return this.getToken(HSQLParser.RIGHT, 0);
};

JoinTypeContext.prototype.FULL = function() {
    return this.getToken(HSQLParser.FULL, 0);
};

JoinTypeContext.prototype.OUTER = function() {
    return this.getToken(HSQLParser.OUTER, 0);
};

JoinTypeContext.prototype.ONLY = function() {
    return this.getToken(HSQLParser.ONLY, 0);
};

JoinTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitJoinType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.JoinTypeContext = JoinTypeContext;

HSQLParser.prototype.joinType = function() {

    var localctx = new JoinTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, HSQLParser.RULE_joinType);
    var _la = 0; // Token type
    try {
        this.state = 365;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HSQLParser.INNER:
            this.enterOuterAlt(localctx, 1);
            this.state = 362;
            this.match(HSQLParser.INNER);
            break;
        case HSQLParser.LEFT:
        case HSQLParser.RIGHT:
        case HSQLParser.FULL:
            this.enterOuterAlt(localctx, 2);
            this.state = 363;
            _la = this._input.LA(1);
            if(!(((((_la - 54)) & ~0x1f) == 0 && ((1 << (_la - 54)) & ((1 << (HSQLParser.LEFT - 54)) | (1 << (HSQLParser.RIGHT - 54)) | (1 << (HSQLParser.FULL - 54)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 364;
            _la = this._input.LA(1);
            if(!(_la===HSQLParser.OUTER || _la===HSQLParser.ONLY)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectColumnsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_selectColumns;
    return this;
}

SelectColumnsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectColumnsContext.prototype.constructor = SelectColumnsContext;

SelectColumnsContext.prototype.aggregatedSelectColumn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AggregatedSelectColumnContext);
    } else {
        return this.getTypedRuleContext(AggregatedSelectColumnContext,i);
    }
};

SelectColumnsContext.prototype.selectColumn = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SelectColumnContext);
    } else {
        return this.getTypedRuleContext(SelectColumnContext,i);
    }
};

SelectColumnsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitSelectColumns(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.SelectColumnsContext = SelectColumnsContext;

HSQLParser.prototype.selectColumns = function() {

    var localctx = new SelectColumnsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, HSQLParser.RULE_selectColumns);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 369;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HSQLParser.AVG:
        case HSQLParser.COUNT:
        case HSQLParser.SUM:
            this.state = 367;
            this.aggregatedSelectColumn();
            break;
        case HSQLParser.T__3:
        case HSQLParser.IDENTIFIER:
            this.state = 368;
            this.selectColumn();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 378;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HSQLParser.T__0) {
            this.state = 371;
            this.match(HSQLParser.T__0);
            this.state = 374;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case HSQLParser.AVG:
            case HSQLParser.COUNT:
            case HSQLParser.SUM:
                this.state = 372;
                this.aggregatedSelectColumn();
                break;
            case HSQLParser.T__3:
            case HSQLParser.IDENTIFIER:
                this.state = 373;
                this.selectColumn();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 380;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprLabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_exprLabel;
    this.identifier = null; // Token
    return this;
}

ExprLabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprLabelContext.prototype.constructor = ExprLabelContext;

ExprLabelContext.prototype.IDENTIFIER = function() {
    return this.getToken(HSQLParser.IDENTIFIER, 0);
};

ExprLabelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitExprLabel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.ExprLabelContext = ExprLabelContext;

HSQLParser.prototype.exprLabel = function() {

    var localctx = new ExprLabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, HSQLParser.RULE_exprLabel);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 381;
        localctx.identifier = this.match(HSQLParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AggregatedSelectColumnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_aggregatedSelectColumn;
    this.aggregate = null; // AggregateIdentifierContext
    this.selectedCol = null; // SelectColumnContext
    return this;
}

AggregatedSelectColumnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AggregatedSelectColumnContext.prototype.constructor = AggregatedSelectColumnContext;

AggregatedSelectColumnContext.prototype.aggregateIdentifier = function() {
    return this.getTypedRuleContext(AggregateIdentifierContext,0);
};

AggregatedSelectColumnContext.prototype.selectColumn = function() {
    return this.getTypedRuleContext(SelectColumnContext,0);
};

AggregatedSelectColumnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitAggregatedSelectColumn(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.AggregatedSelectColumnContext = AggregatedSelectColumnContext;

HSQLParser.prototype.aggregatedSelectColumn = function() {

    var localctx = new AggregatedSelectColumnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, HSQLParser.RULE_aggregatedSelectColumn);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 383;
        localctx.aggregate = this.aggregateIdentifier();
        this.state = 384;
        this.match(HSQLParser.T__1);
        this.state = 385;
        localctx.selectedCol = this.selectColumn();
        this.state = 386;
        this.match(HSQLParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectColumnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_selectColumn;
    this.wild = null; // Token
    this.column = null; // Token
    this.type = null; // DataTypeContext
    this.alias = null; // Token
    return this;
}

SelectColumnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectColumnContext.prototype.constructor = SelectColumnContext;

SelectColumnContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HSQLParser.IDENTIFIER);
    } else {
        return this.getToken(HSQLParser.IDENTIFIER, i);
    }
};


SelectColumnContext.prototype.AS = function() {
    return this.getToken(HSQLParser.AS, 0);
};

SelectColumnContext.prototype.dataType = function() {
    return this.getTypedRuleContext(DataTypeContext,0);
};

SelectColumnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitSelectColumn(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.SelectColumnContext = SelectColumnContext;

HSQLParser.prototype.selectColumn = function() {

    var localctx = new SelectColumnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, HSQLParser.RULE_selectColumn);
    var _la = 0; // Token type
    try {
        this.state = 397;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HSQLParser.T__3:
            this.enterOuterAlt(localctx, 1);
            this.state = 388;
            localctx.wild = this.match(HSQLParser.T__3);
            break;
        case HSQLParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 389;
            localctx.column = this.match(HSQLParser.IDENTIFIER);
            this.state = 395;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===HSQLParser.AS) {
                this.state = 390;
                this.match(HSQLParser.AS);
                this.state = 392;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HSQLParser.REAL_TYPE) | (1 << HSQLParser.INTEGER_TYPE) | (1 << HSQLParser.DECIMAL_TYPE) | (1 << HSQLParser.VARSTRING_TYPE) | (1 << HSQLParser.STRING_TYPE))) !== 0)) {
                    this.state = 391;
                    localctx.type = this.dataType();
                }

                this.state = 394;
                localctx.alias = this.match(HSQLParser.IDENTIFIER);
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AggregateIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_aggregateIdentifier;
    this.count = null; // Token
    this.sum = null; // Token
    this.avg = null; // Token
    return this;
}

AggregateIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AggregateIdentifierContext.prototype.constructor = AggregateIdentifierContext;

AggregateIdentifierContext.prototype.COUNT = function() {
    return this.getToken(HSQLParser.COUNT, 0);
};

AggregateIdentifierContext.prototype.SUM = function() {
    return this.getToken(HSQLParser.SUM, 0);
};

AggregateIdentifierContext.prototype.AVG = function() {
    return this.getToken(HSQLParser.AVG, 0);
};

AggregateIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitAggregateIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.AggregateIdentifierContext = AggregateIdentifierContext;

HSQLParser.prototype.aggregateIdentifier = function() {

    var localctx = new AggregateIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, HSQLParser.RULE_aggregateIdentifier);
    try {
        this.state = 402;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HSQLParser.COUNT:
            this.enterOuterAlt(localctx, 1);
            this.state = 399;
            localctx.count = this.match(HSQLParser.COUNT);
            break;
        case HSQLParser.SUM:
            this.enterOuterAlt(localctx, 2);
            this.state = 400;
            localctx.sum = this.match(HSQLParser.SUM);
            break;
        case HSQLParser.AVG:
            this.enterOuterAlt(localctx, 3);
            this.state = 401;
            localctx.avg = this.match(HSQLParser.AVG);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectFromClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_selectFromClause;
    return this;
}

SelectFromClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectFromClauseContext.prototype.constructor = SelectFromClauseContext;

SelectFromClauseContext.prototype.nestedSelectStmt = function() {
    return this.getTypedRuleContext(NestedSelectStmtContext,0);
};

SelectFromClauseContext.prototype.selectTableName = function() {
    return this.getTypedRuleContext(SelectTableNameContext,0);
};

SelectFromClauseContext.prototype.selectDataset = function() {
    return this.getTypedRuleContext(SelectDatasetContext,0);
};

SelectFromClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitSelectFromClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.SelectFromClauseContext = SelectFromClauseContext;

HSQLParser.prototype.selectFromClause = function() {

    var localctx = new SelectFromClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, HSQLParser.RULE_selectFromClause);
    try {
        this.state = 407;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HSQLParser.T__1:
            this.enterOuterAlt(localctx, 1);
            this.state = 404;
            this.nestedSelectStmt();
            break;
        case HSQLParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 405;
            this.selectTableName();
            break;
        case HSQLParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 406;
            this.selectDataset();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NestedSelectStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_nestedSelectStmt;
    return this;
}

NestedSelectStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NestedSelectStmtContext.prototype.constructor = NestedSelectStmtContext;

NestedSelectStmtContext.prototype.selectStmt = function() {
    return this.getTypedRuleContext(SelectStmtContext,0);
};

NestedSelectStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitNestedSelectStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.NestedSelectStmtContext = NestedSelectStmtContext;

HSQLParser.prototype.nestedSelectStmt = function() {

    var localctx = new NestedSelectStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, HSQLParser.RULE_nestedSelectStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 409;
        this.match(HSQLParser.T__1);
        this.state = 410;
        this.selectStmt();
        this.state = 411;
        this.match(HSQLParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectDatasetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_selectDataset;
    this.str = null; // Token
    return this;
}

SelectDatasetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectDatasetContext.prototype.constructor = SelectDatasetContext;

SelectDatasetContext.prototype.LAYOUT = function() {
    return this.getToken(HSQLParser.LAYOUT, 0);
};

SelectDatasetContext.prototype.qualifiedIdentifier = function() {
    return this.getTypedRuleContext(QualifiedIdentifierContext,0);
};

SelectDatasetContext.prototype.STRING = function() {
    return this.getToken(HSQLParser.STRING, 0);
};

SelectDatasetContext.prototype.TYPE = function() {
    return this.getToken(HSQLParser.TYPE, 0);
};

SelectDatasetContext.prototype.selectDatasetFile = function() {
    return this.getTypedRuleContext(SelectDatasetFileContext,0);
};

SelectDatasetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitSelectDataset(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.SelectDatasetContext = SelectDatasetContext;

HSQLParser.prototype.selectDataset = function() {

    var localctx = new SelectDatasetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, HSQLParser.RULE_selectDataset);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 413;
        localctx.str = this.match(HSQLParser.STRING);
        this.state = 414;
        this.match(HSQLParser.LAYOUT);
        this.state = 415;
        this.qualifiedIdentifier();
        this.state = 418;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.TYPE) {
            this.state = 416;
            this.match(HSQLParser.TYPE);
            this.state = 417;
            this.selectDatasetFile();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectDatasetFileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_selectDatasetFile;
    return this;
}

SelectDatasetFileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectDatasetFileContext.prototype.constructor = SelectDatasetFileContext;

SelectDatasetFileContext.prototype.IDENTIFIER = function() {
    return this.getToken(HSQLParser.IDENTIFIER, 0);
};

SelectDatasetFileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitSelectDatasetFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.SelectDatasetFileContext = SelectDatasetFileContext;

HSQLParser.prototype.selectDatasetFile = function() {

    var localctx = new SelectDatasetFileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, HSQLParser.RULE_selectDatasetFile);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 420;
        this.match(HSQLParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectTableNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_selectTableName;
    return this;
}

SelectTableNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectTableNameContext.prototype.constructor = SelectTableNameContext;

SelectTableNameContext.prototype.qualifiedIdentifier = function() {
    return this.getTypedRuleContext(QualifiedIdentifierContext,0);
};

SelectTableNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitSelectTableName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.SelectTableNameContext = SelectTableNameContext;

HSQLParser.prototype.selectTableName = function() {

    var localctx = new SelectTableNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, HSQLParser.RULE_selectTableName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 422;
        this.qualifiedIdentifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectWhereClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_selectWhereClause;
    return this;
}

SelectWhereClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectWhereClauseContext.prototype.constructor = SelectWhereClauseContext;

SelectWhereClauseContext.prototype.booleanExpression = function() {
    return this.getTypedRuleContext(BooleanExpressionContext,0);
};

SelectWhereClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitSelectWhereClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.SelectWhereClauseContext = SelectWhereClauseContext;

HSQLParser.prototype.selectWhereClause = function() {

    var localctx = new SelectWhereClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, HSQLParser.RULE_selectWhereClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 424;
        this.booleanExpression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrderByClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_orderByClause;
    return this;
}

OrderByClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrderByClauseContext.prototype.constructor = OrderByClauseContext;

OrderByClauseContext.prototype.sortItem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SortItemContext);
    } else {
        return this.getTypedRuleContext(SortItemContext,i);
    }
};

OrderByClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitOrderByClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.OrderByClauseContext = OrderByClauseContext;

HSQLParser.prototype.orderByClause = function() {

    var localctx = new OrderByClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, HSQLParser.RULE_orderByClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 426;
        this.sortItem();
        this.state = 431;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HSQLParser.T__0) {
            this.state = 427;
            this.match(HSQLParser.T__0);
            this.state = 428;
            this.sortItem();
            this.state = 433;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SortItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_sortItem;
    return this;
}

SortItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SortItemContext.prototype.constructor = SortItemContext;

SortItemContext.prototype.ascSortItem = function() {
    return this.getTypedRuleContext(AscSortItemContext,0);
};

SortItemContext.prototype.descSortItem = function() {
    return this.getTypedRuleContext(DescSortItemContext,0);
};

SortItemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitSortItem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.SortItemContext = SortItemContext;

HSQLParser.prototype.sortItem = function() {

    var localctx = new SortItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, HSQLParser.RULE_sortItem);
    try {
        this.state = 436;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 434;
            this.ascSortItem();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 435;
            this.descSortItem();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AscSortItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_ascSortItem;
    return this;
}

AscSortItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AscSortItemContext.prototype.constructor = AscSortItemContext;

AscSortItemContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AscSortItemContext.prototype.ASC = function() {
    return this.getToken(HSQLParser.ASC, 0);
};

AscSortItemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitAscSortItem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.AscSortItemContext = AscSortItemContext;

HSQLParser.prototype.ascSortItem = function() {

    var localctx = new AscSortItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, HSQLParser.RULE_ascSortItem);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 438;
        this.expression();
        this.state = 440;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===HSQLParser.ASC) {
            this.state = 439;
            this.match(HSQLParser.ASC);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DescSortItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_descSortItem;
    return this;
}

DescSortItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescSortItemContext.prototype.constructor = DescSortItemContext;

DescSortItemContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DescSortItemContext.prototype.DESC = function() {
    return this.getToken(HSQLParser.DESC, 0);
};

DescSortItemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitDescSortItem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.DescSortItemContext = DescSortItemContext;

HSQLParser.prototype.descSortItem = function() {

    var localctx = new DescSortItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, HSQLParser.RULE_descSortItem);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 442;
        this.expression();
        this.state = 443;
        this.match(HSQLParser.DESC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function GroupByClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_groupByClause;
    return this;
}

GroupByClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupByClauseContext.prototype.constructor = GroupByClauseContext;

GroupByClauseContext.prototype.qualifiedIdentifier = function() {
    return this.getTypedRuleContext(QualifiedIdentifierContext,0);
};

GroupByClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitGroupByClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.GroupByClauseContext = GroupByClauseContext;

HSQLParser.prototype.groupByClause = function() {

    var localctx = new GroupByClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, HSQLParser.RULE_groupByClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 445;
        this.qualifiedIdentifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LayoutStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_layoutStmt;
    return this;
}

LayoutStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LayoutStmtContext.prototype.constructor = LayoutStmtContext;

LayoutStmtContext.prototype.CREATE = function() {
    return this.getToken(HSQLParser.CREATE, 0);
};

LayoutStmtContext.prototype.LAYOUT = function() {
    return this.getToken(HSQLParser.LAYOUT, 0);
};

LayoutStmtContext.prototype.layoutContent = function() {
    return this.getTypedRuleContext(LayoutContentContext,0);
};

LayoutStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitLayoutStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.LayoutStmtContext = LayoutStmtContext;

HSQLParser.prototype.layoutStmt = function() {

    var localctx = new LayoutStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, HSQLParser.RULE_layoutStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 447;
        this.match(HSQLParser.CREATE);
        this.state = 448;
        this.match(HSQLParser.LAYOUT);
        this.state = 449;
        this.match(HSQLParser.T__1);
        this.state = 450;
        this.layoutContent();
        this.state = 451;
        this.match(HSQLParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LayoutContentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_layoutContent;
    return this;
}

LayoutContentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LayoutContentContext.prototype.constructor = LayoutContentContext;

LayoutContentContext.prototype.identifierExport = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierExportContext);
    } else {
        return this.getTypedRuleContext(IdentifierExportContext,i);
    }
};

LayoutContentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitLayoutContent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.LayoutContentContext = LayoutContentContext;

HSQLParser.prototype.layoutContent = function() {

    var localctx = new LayoutContentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, HSQLParser.RULE_layoutContent);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 453;
        this.identifierExport();
        this.state = 458;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HSQLParser.T__0) {
            this.state = 454;
            this.match(HSQLParser.T__0);
            this.state = 455;
            this.identifierExport();
            this.state = 460;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InlineStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_inlineStmt;
    return this;
}

InlineStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InlineStmtContext.prototype.constructor = InlineStmtContext;

InlineStmtContext.prototype.NCOMPILE = function() {
    return this.getToken(HSQLParser.NCOMPILE, 0);
};

InlineStmtContext.prototype.STRING = function() {
    return this.getToken(HSQLParser.STRING, 0);
};

InlineStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitInlineStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.InlineStmtContext = InlineStmtContext;

HSQLParser.prototype.inlineStmt = function() {

    var localctx = new InlineStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, HSQLParser.RULE_inlineStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 461;
        this.match(HSQLParser.NCOMPILE);
        this.state = 462;
        this.match(HSQLParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function QualifiedIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_qualifiedIdentifier;
    return this;
}

QualifiedIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualifiedIdentifierContext.prototype.constructor = QualifiedIdentifierContext;

QualifiedIdentifierContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HSQLParser.IDENTIFIER);
    } else {
        return this.getToken(HSQLParser.IDENTIFIER, i);
    }
};


QualifiedIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitQualifiedIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.QualifiedIdentifierContext = QualifiedIdentifierContext;

HSQLParser.prototype.qualifiedIdentifier = function() {

    var localctx = new QualifiedIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, HSQLParser.RULE_qualifiedIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 464;
        this.match(HSQLParser.IDENTIFIER);
        this.state = 469;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HSQLParser.T__4) {
            this.state = 465;
            this.match(HSQLParser.T__4);
            this.state = 466;
            this.match(HSQLParser.IDENTIFIER);
            this.state = 471;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DataTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_dataType;
    return this;
}

DataTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataTypeContext.prototype.constructor = DataTypeContext;

DataTypeContext.prototype.DECIMAL_TYPE = function() {
    return this.getToken(HSQLParser.DECIMAL_TYPE, 0);
};

DataTypeContext.prototype.REAL_TYPE = function() {
    return this.getToken(HSQLParser.REAL_TYPE, 0);
};

DataTypeContext.prototype.INTEGER_TYPE = function() {
    return this.getToken(HSQLParser.INTEGER_TYPE, 0);
};

DataTypeContext.prototype.VARSTRING_TYPE = function() {
    return this.getToken(HSQLParser.VARSTRING_TYPE, 0);
};

DataTypeContext.prototype.STRING_TYPE = function() {
    return this.getToken(HSQLParser.STRING_TYPE, 0);
};

DataTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitDataType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.DataTypeContext = DataTypeContext;

HSQLParser.prototype.dataType = function() {

    var localctx = new DataTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, HSQLParser.RULE_dataType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 472;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HSQLParser.REAL_TYPE) | (1 << HSQLParser.INTEGER_TYPE) | (1 << HSQLParser.DECIMAL_TYPE) | (1 << HSQLParser.VARSTRING_TYPE) | (1 << HSQLParser.STRING_TYPE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.booleanExpression = function() {
    return this.getTypedRuleContext(BooleanExpressionContext,0);
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.ExpressionContext = ExpressionContext;

HSQLParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, HSQLParser.RULE_expression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 474;
        this.booleanExpression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BooleanExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_booleanExpression;
    return this;
}

BooleanExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanExpressionContext.prototype.constructor = BooleanExpressionContext;


 
BooleanExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function LogicalNotContext(parser, ctx) {
	BooleanExpressionContext.call(this, parser);
    BooleanExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalNotContext.prototype = Object.create(BooleanExpressionContext.prototype);
LogicalNotContext.prototype.constructor = LogicalNotContext;

HSQLParser.LogicalNotContext = LogicalNotContext;

LogicalNotContext.prototype.NOT = function() {
    return this.getToken(HSQLParser.NOT, 0);
};

LogicalNotContext.prototype.booleanExpression = function() {
    return this.getTypedRuleContext(BooleanExpressionContext,0);
};
LogicalNotContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitLogicalNot(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PredicatedContext(parser, ctx) {
	BooleanExpressionContext.call(this, parser);
    this._valueExpression = null; // ValueExpressionContext;
    BooleanExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PredicatedContext.prototype = Object.create(BooleanExpressionContext.prototype);
PredicatedContext.prototype.constructor = PredicatedContext;

HSQLParser.PredicatedContext = PredicatedContext;

PredicatedContext.prototype.valueExpression = function() {
    return this.getTypedRuleContext(ValueExpressionContext,0);
};

PredicatedContext.prototype.predicate = function() {
    return this.getTypedRuleContext(PredicateContext,0);
};
PredicatedContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitPredicated(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalBinaryContext(parser, ctx) {
	BooleanExpressionContext.call(this, parser);
    this.left = null; // BooleanExpressionContext;
    this.operator = null; // Token;
    this.right = null; // BooleanExpressionContext;
    BooleanExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalBinaryContext.prototype = Object.create(BooleanExpressionContext.prototype);
LogicalBinaryContext.prototype.constructor = LogicalBinaryContext;

HSQLParser.LogicalBinaryContext = LogicalBinaryContext;

LogicalBinaryContext.prototype.booleanExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BooleanExpressionContext);
    } else {
        return this.getTypedRuleContext(BooleanExpressionContext,i);
    }
};

LogicalBinaryContext.prototype.AND = function() {
    return this.getToken(HSQLParser.AND, 0);
};

LogicalBinaryContext.prototype.OR = function() {
    return this.getToken(HSQLParser.OR, 0);
};
LogicalBinaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitLogicalBinary(this);
    } else {
        return visitor.visitChildren(this);
    }
};



HSQLParser.prototype.booleanExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new BooleanExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 112;
    this.enterRecursionRule(localctx, 112, HSQLParser.RULE_booleanExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 483;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HSQLParser.T__1:
        case HSQLParser.FALSE:
        case HSQLParser.TRUE:
        case HSQLParser.STRING:
        case HSQLParser.UNICODE_STRING:
        case HSQLParser.INTEGER_VALUE:
        case HSQLParser.DECIMAL_VALUE:
        case HSQLParser.DOUBLE_VALUE:
        case HSQLParser.IDENTIFIER:
            localctx = new PredicatedContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 477;
            localctx._valueExpression = this.valueExpression();
            this.state = 479;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
            if(la_===1) {
                this.state = 478;
                this.predicate(localctx._valueExpression);

            }
            break;
        case HSQLParser.NOT:
            localctx = new LogicalNotContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 481;
            this.match(HSQLParser.NOT);
            this.state = 482;
            this.booleanExpression(3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 493;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,47,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 491;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, HSQLParser.RULE_booleanExpression);
                    this.state = 485;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 486;
                    localctx.operator = this.match(HSQLParser.AND);
                    this.state = 487;
                    localctx.right = this.booleanExpression(3);
                    break;

                case 2:
                    localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, HSQLParser.RULE_booleanExpression);
                    this.state = 488;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 489;
                    localctx.operator = this.match(HSQLParser.OR);
                    this.state = 490;
                    localctx.right = this.booleanExpression(2);
                    break;

                } 
            }
            this.state = 495;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,47,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function PredicateContext(parser, parent, invokingState, value) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_predicate;
    this.value = null
    this.value = value || null;
    return this;
}

PredicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateContext.prototype.constructor = PredicateContext;


 
PredicateContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
    this.value = ctx.value;
};


function ComparisonContext(parser, ctx) {
	PredicateContext.call(this, parser);
    this.right = null; // ValueExpressionContext;
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComparisonContext.prototype = Object.create(PredicateContext.prototype);
ComparisonContext.prototype.constructor = ComparisonContext;

HSQLParser.ComparisonContext = ComparisonContext;

ComparisonContext.prototype.comparisonOperator = function() {
    return this.getTypedRuleContext(ComparisonOperatorContext,0);
};

ComparisonContext.prototype.valueExpression = function() {
    return this.getTypedRuleContext(ValueExpressionContext,0);
};
ComparisonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitComparison(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InListContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InListContext.prototype = Object.create(PredicateContext.prototype);
InListContext.prototype.constructor = InListContext;

HSQLParser.InListContext = InListContext;

InListContext.prototype.IN = function() {
    return this.getToken(HSQLParser.IN, 0);
};

InListContext.prototype.valueExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueExpressionContext);
    } else {
        return this.getTypedRuleContext(ValueExpressionContext,i);
    }
};

InListContext.prototype.NOT = function() {
    return this.getToken(HSQLParser.NOT, 0);
};
InListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitInList(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BetweenContext(parser, ctx) {
	PredicateContext.call(this, parser);
    this.lower = null; // ValueExpressionContext;
    this.upper = null; // ValueExpressionContext;
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BetweenContext.prototype = Object.create(PredicateContext.prototype);
BetweenContext.prototype.constructor = BetweenContext;

HSQLParser.BetweenContext = BetweenContext;

BetweenContext.prototype.BETWEEN = function() {
    return this.getToken(HSQLParser.BETWEEN, 0);
};

BetweenContext.prototype.AND = function() {
    return this.getToken(HSQLParser.AND, 0);
};

BetweenContext.prototype.valueExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueExpressionContext);
    } else {
        return this.getTypedRuleContext(ValueExpressionContext,i);
    }
};

BetweenContext.prototype.NOT = function() {
    return this.getToken(HSQLParser.NOT, 0);
};
BetweenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitBetween(this);
    } else {
        return visitor.visitChildren(this);
    }
};



HSQLParser.PredicateContext = PredicateContext;

HSQLParser.prototype.predicate = function(value) {

    var localctx = new PredicateContext(this, this._ctx, this.state, value);
    this.enterRule(localctx, 114, HSQLParser.RULE_predicate);
    var _la = 0; // Token type
    try {
        this.state = 522;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ComparisonContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 496;
            this.comparisonOperator();
            this.state = 497;
            localctx.right = this.valueExpression();
            break;

        case 2:
            localctx = new BetweenContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 500;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===HSQLParser.NOT) {
                this.state = 499;
                this.match(HSQLParser.NOT);
            }

            this.state = 502;
            this.match(HSQLParser.BETWEEN);
            this.state = 503;
            localctx.lower = this.valueExpression();
            this.state = 504;
            this.match(HSQLParser.AND);
            this.state = 505;
            localctx.upper = this.valueExpression();
            break;

        case 3:
            localctx = new InListContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 508;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===HSQLParser.NOT) {
                this.state = 507;
                this.match(HSQLParser.NOT);
            }

            this.state = 510;
            this.match(HSQLParser.IN);
            this.state = 511;
            this.match(HSQLParser.T__1);
            this.state = 512;
            this.valueExpression();
            this.state = 517;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===HSQLParser.T__0) {
                this.state = 513;
                this.match(HSQLParser.T__0);
                this.state = 514;
                this.valueExpression();
                this.state = 519;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 520;
            this.match(HSQLParser.T__2);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_valueExpression;
    return this;
}

ValueExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueExpressionContext.prototype.constructor = ValueExpressionContext;


 
ValueExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ValueExpressionDefaultContext(parser, ctx) {
	ValueExpressionContext.call(this, parser);
    ValueExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValueExpressionDefaultContext.prototype = Object.create(ValueExpressionContext.prototype);
ValueExpressionDefaultContext.prototype.constructor = ValueExpressionDefaultContext;

HSQLParser.ValueExpressionDefaultContext = ValueExpressionDefaultContext;

ValueExpressionDefaultContext.prototype.primaryExpression = function() {
    return this.getTypedRuleContext(PrimaryExpressionContext,0);
};
ValueExpressionDefaultContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitValueExpressionDefault(this);
    } else {
        return visitor.visitChildren(this);
    }
};



HSQLParser.ValueExpressionContext = ValueExpressionContext;

HSQLParser.prototype.valueExpression = function() {

    var localctx = new ValueExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, HSQLParser.RULE_valueExpression);
    try {
        localctx = new ValueExpressionDefaultContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 524;
        this.primaryExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrimaryExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_primaryExpression;
    return this;
}

PrimaryExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryExpressionContext.prototype.constructor = PrimaryExpressionContext;


 
PrimaryExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function IdentifierContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierContext.prototype = Object.create(PrimaryExpressionContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

HSQLParser.IdentifierContext = IdentifierContext;

IdentifierContext.prototype.IDENTIFIER = function() {
    return this.getToken(HSQLParser.IDENTIFIER, 0);
};
IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenthesizedExpressionContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesizedExpressionContext.prototype = Object.create(PrimaryExpressionContext.prototype);
ParenthesizedExpressionContext.prototype.constructor = ParenthesizedExpressionContext;

HSQLParser.ParenthesizedExpressionContext = ParenthesizedExpressionContext;

ParenthesizedExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ParenthesizedExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitParenthesizedExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringLiteralContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringLiteralContext.prototype = Object.create(PrimaryExpressionContext.prototype);
StringLiteralContext.prototype.constructor = StringLiteralContext;

HSQLParser.StringLiteralContext = StringLiteralContext;

StringLiteralContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};
StringLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitStringLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumericLiteralContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumericLiteralContext.prototype = Object.create(PrimaryExpressionContext.prototype);
NumericLiteralContext.prototype.constructor = NumericLiteralContext;

HSQLParser.NumericLiteralContext = NumericLiteralContext;

NumericLiteralContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
NumericLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitNumericLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BooleanLiteralContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanLiteralContext.prototype = Object.create(PrimaryExpressionContext.prototype);
BooleanLiteralContext.prototype.constructor = BooleanLiteralContext;

HSQLParser.BooleanLiteralContext = BooleanLiteralContext;

BooleanLiteralContext.prototype.booleanValue = function() {
    return this.getTypedRuleContext(BooleanValueContext,0);
};
BooleanLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitBooleanLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};



HSQLParser.PrimaryExpressionContext = PrimaryExpressionContext;

HSQLParser.prototype.primaryExpression = function() {

    var localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, HSQLParser.RULE_primaryExpression);
    try {
        this.state = 534;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HSQLParser.IDENTIFIER:
            localctx = new IdentifierContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 526;
            this.match(HSQLParser.IDENTIFIER);
            break;
        case HSQLParser.INTEGER_VALUE:
        case HSQLParser.DECIMAL_VALUE:
        case HSQLParser.DOUBLE_VALUE:
            localctx = new NumericLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 527;
            this.number();
            break;
        case HSQLParser.FALSE:
        case HSQLParser.TRUE:
            localctx = new BooleanLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 528;
            this.booleanValue();
            break;
        case HSQLParser.STRING:
        case HSQLParser.UNICODE_STRING:
            localctx = new StringLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 529;
            this.string();
            break;
        case HSQLParser.T__1:
            localctx = new ParenthesizedExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 530;
            this.match(HSQLParser.T__1);
            this.state = 531;
            this.expression();
            this.state = 532;
            this.match(HSQLParser.T__2);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;


 
NumberContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DecimalLiteralContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DecimalLiteralContext.prototype = Object.create(NumberContext.prototype);
DecimalLiteralContext.prototype.constructor = DecimalLiteralContext;

HSQLParser.DecimalLiteralContext = DecimalLiteralContext;

DecimalLiteralContext.prototype.DECIMAL_VALUE = function() {
    return this.getToken(HSQLParser.DECIMAL_VALUE, 0);
};
DecimalLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitDecimalLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DoubleLiteralContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DoubleLiteralContext.prototype = Object.create(NumberContext.prototype);
DoubleLiteralContext.prototype.constructor = DoubleLiteralContext;

HSQLParser.DoubleLiteralContext = DoubleLiteralContext;

DoubleLiteralContext.prototype.DOUBLE_VALUE = function() {
    return this.getToken(HSQLParser.DOUBLE_VALUE, 0);
};
DoubleLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitDoubleLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntegerLiteralContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntegerLiteralContext.prototype = Object.create(NumberContext.prototype);
IntegerLiteralContext.prototype.constructor = IntegerLiteralContext;

HSQLParser.IntegerLiteralContext = IntegerLiteralContext;

IntegerLiteralContext.prototype.INTEGER_VALUE = function() {
    return this.getToken(HSQLParser.INTEGER_VALUE, 0);
};
IntegerLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitIntegerLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};



HSQLParser.NumberContext = NumberContext;

HSQLParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, HSQLParser.RULE_number);
    try {
        this.state = 539;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HSQLParser.DECIMAL_VALUE:
            localctx = new DecimalLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 536;
            this.match(HSQLParser.DECIMAL_VALUE);
            break;
        case HSQLParser.DOUBLE_VALUE:
            localctx = new DoubleLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 537;
            this.match(HSQLParser.DOUBLE_VALUE);
            break;
        case HSQLParser.INTEGER_VALUE:
            localctx = new IntegerLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 538;
            this.match(HSQLParser.INTEGER_VALUE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;


 
StringContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function UnicodeStringLiteralContext(parser, ctx) {
	StringContext.call(this, parser);
    StringContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnicodeStringLiteralContext.prototype = Object.create(StringContext.prototype);
UnicodeStringLiteralContext.prototype.constructor = UnicodeStringLiteralContext;

HSQLParser.UnicodeStringLiteralContext = UnicodeStringLiteralContext;

UnicodeStringLiteralContext.prototype.UNICODE_STRING = function() {
    return this.getToken(HSQLParser.UNICODE_STRING, 0);
};

UnicodeStringLiteralContext.prototype.UESCAPE = function() {
    return this.getToken(HSQLParser.UESCAPE, 0);
};

UnicodeStringLiteralContext.prototype.STRING = function() {
    return this.getToken(HSQLParser.STRING, 0);
};
UnicodeStringLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitUnicodeStringLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BasicStringLiteralContext(parser, ctx) {
	StringContext.call(this, parser);
    StringContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BasicStringLiteralContext.prototype = Object.create(StringContext.prototype);
BasicStringLiteralContext.prototype.constructor = BasicStringLiteralContext;

HSQLParser.BasicStringLiteralContext = BasicStringLiteralContext;

BasicStringLiteralContext.prototype.STRING = function() {
    return this.getToken(HSQLParser.STRING, 0);
};
BasicStringLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitBasicStringLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};



HSQLParser.StringContext = StringContext;

HSQLParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, HSQLParser.RULE_string);
    try {
        this.state = 547;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HSQLParser.STRING:
            localctx = new BasicStringLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 541;
            this.match(HSQLParser.STRING);
            break;
        case HSQLParser.UNICODE_STRING:
            localctx = new UnicodeStringLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 542;
            this.match(HSQLParser.UNICODE_STRING);
            this.state = 545;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
            if(la_===1) {
                this.state = 543;
                this.match(HSQLParser.UESCAPE);
                this.state = 544;
                this.match(HSQLParser.STRING);

            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BooleanValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_booleanValue;
    return this;
}

BooleanValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanValueContext.prototype.constructor = BooleanValueContext;

BooleanValueContext.prototype.TRUE = function() {
    return this.getToken(HSQLParser.TRUE, 0);
};

BooleanValueContext.prototype.FALSE = function() {
    return this.getToken(HSQLParser.FALSE, 0);
};

BooleanValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitBooleanValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.BooleanValueContext = BooleanValueContext;

HSQLParser.prototype.booleanValue = function() {

    var localctx = new BooleanValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, HSQLParser.RULE_booleanValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 549;
        _la = this._input.LA(1);
        if(!(_la===HSQLParser.FALSE || _la===HSQLParser.TRUE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ComparisonOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HSQLParser.RULE_comparisonOperator;
    return this;
}

ComparisonOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparisonOperatorContext.prototype.constructor = ComparisonOperatorContext;

ComparisonOperatorContext.prototype.EQ = function() {
    return this.getToken(HSQLParser.EQ, 0);
};

ComparisonOperatorContext.prototype.NEQ = function() {
    return this.getToken(HSQLParser.NEQ, 0);
};

ComparisonOperatorContext.prototype.LT = function() {
    return this.getToken(HSQLParser.LT, 0);
};

ComparisonOperatorContext.prototype.LTE = function() {
    return this.getToken(HSQLParser.LTE, 0);
};

ComparisonOperatorContext.prototype.GT = function() {
    return this.getToken(HSQLParser.GT, 0);
};

ComparisonOperatorContext.prototype.GTE = function() {
    return this.getToken(HSQLParser.GTE, 0);
};

ComparisonOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HSQLVisitor ) {
        return visitor.visitComparisonOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HSQLParser.ComparisonOperatorContext = ComparisonOperatorContext;

HSQLParser.prototype.comparisonOperator = function() {

    var localctx = new ComparisonOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, HSQLParser.RULE_comparisonOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 551;
        _la = this._input.LA(1);
        if(!(((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (HSQLParser.EQ - 66)) | (1 << (HSQLParser.NEQ - 66)) | (1 << (HSQLParser.LT - 66)) | (1 << (HSQLParser.LTE - 66)) | (1 << (HSQLParser.GT - 66)) | (1 << (HSQLParser.GTE - 66)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


HSQLParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 56:
			return this.booleanExpression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

HSQLParser.prototype.booleanExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.HSQLParser = HSQLParser;
