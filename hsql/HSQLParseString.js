const antlr4 = require('antlr4');
const { HSQLErrorListener } = require("./HSQLErrorListener");
const { HSQLLexer } = require('./gen/HSQLLexer');
const { HSQLParser } = require('./gen/HSQLParser');

/**
 * Parse a string
 * @param {String} data Filedata to parse
 * @param {HSQLErrorListener} antlrErrorListener The error listener to be attached
 */
exports.parseString = function parseString(data, antlrErrorListener) {
    const chars = new antlr4.InputStream(data);
    const lexer = new HSQLLexer(chars);

    lexer.removeErrorListeners();
    lexer.addErrorListener(antlrErrorListener);

    const tokens = new antlr4.CommonTokenStream(lexer);

    const parser = new HSQLParser(tokens);

    parser.removeErrorListeners();
    parser.addErrorListener(antlrErrorListener);

    parser.buildParseTrees = true;
    const tree = parser.program();
    return { lexer, parser, tree };
}