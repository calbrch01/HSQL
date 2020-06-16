// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        mod(require("../../lib/codemirror"));
    else if (typeof define == "function" && define.amd) // AMD
        define(["../../lib/codemirror"], mod);
    else // Plain browser env
        mod(CodeMirror);
})(function(CodeMirror) {
    "use strict";

    CodeMirror.defineMode("haql", function(config) {

        function words(str) {
            var obj = {}, words = str.split(" ");
            for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
            return obj;
        }

        function metaHook(stream, state) {
            if (!state.startOfLine) return false;
            stream.skipToEnd();
            return "meta";
        }

        var indentUnit = config.indentUnit;
        var keyword = words("select output where from project map order group by");
        var variable = words("as asc desc");
        var variable_2 = words("and or");
        var variable_3 = "";
        var builtin = words("checkpoint deprecated failcode failmessage failure global independent onwarning persist priority recovery stored success wait when");
        var blockKeywords = words("catch class do else finally for if switch try while");
        var atoms = words("true false null");
        var hooks = {"#": metaHook};
        var isOperatorChar = /[+\-*&%=<>!?|\/]/;

        var curPunc;

        function tokenBase(stream, state) {
            var ch = stream.next();
            if (hooks[ch]) {
                var result = hooks[ch](stream, state);
                if (result !== false) return result;
            }
            if (ch == '"' || ch == "'") {
                state.tokenize = tokenString(ch);
                return state.tokenize(stream, state);
            }
            if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
                curPunc = ch;
                return null;
            }
            if (/\d/.test(ch)) {
                stream.eatWhile(/[\w\.]/);
                return "number";
            }
            if (ch == "/") {
                if (stream.eat("*")) {
                    state.tokenize = tokenComment;
                    return tokenComment(stream, state);
                }
                if (stream.eat("/")) {
                    stream.skipToEnd();
                    return "comment";
                }
            }
            if (isOperatorChar.test(ch)) {
                stream.eatWhile(isOperatorChar);
                return "operator";
            }
            stream.eatWhile(/[\w\$_]/);
            var cur = stream.current().toLowerCase();
            if (keyword.propertyIsEnumerable(cur)) {
                if (blockKeywords.propertyIsEnumerable(cur)) curPunc = "newstatement";
                return "keyword";
            } else if (variable.propertyIsEnumerable(cur)) {
                if (blockKeywords.propertyIsEnumerable(cur)) curPunc = "newstatement";
                return "variable";
            } else if (variable_2.propertyIsEnumerable(cur)) {
                if (blockKeywords.propertyIsEnumerable(cur)) curPunc = "newstatement";
                return "variable-2";
            } else if (builtin.propertyIsEnumerable(cur)) {
                if (blockKeywords.propertyIsEnumerable(cur)) curPunc = "newstatement";
                return "builtin";
            } else { //Data types are of from KEYWORD##
                var i = cur.length - 1;
                while(i >= 0 && (!isNaN(cur[i]) || cur[i] == '_'))
                    --i;

                if (i > 0) {
                    var cur2 = cur.substr(0, i + 1);
                    if (variable_3.propertyIsEnumerable(cur2)) {
                        if (blockKeywords.propertyIsEnumerable(cur2)) curPunc = "newstatement";
                        return "variable-3";
                    }
                }
            }
            if (atoms.propertyIsEnumerable(cur)) return "atom";
            return null;
        }

        function tokenString(quote) {
            return function(stream, state) {
                var escaped = false, next, end = false;
                while ((next = stream.next()) != null) {
                    if (next == quote && !escaped) {end = true; break;}
                    escaped = !escaped && next == "\\";
                }
                if (end || !escaped)
                    state.tokenize = tokenBase;
                return "string";
            };
        }

        function tokenComment(stream, state) {
            var maybeEnd = false, ch;
            while (ch = stream.next()) {
                if (ch == "/" && maybeEnd) {
                    state.tokenize = tokenBase;
                    break;
                }
                maybeEnd = (ch == "*");
            }
            return "comment";
        }

        function Context(indented, column, type, align, prev) {
            this.indented = indented;
            this.column = column;
            this.type = type;
            this.align = align;
            this.prev = prev;
        }
        function pushContext(state, col, type) {
            return state.context = new Context(state.indented, col, type, null, state.context);
        }
        function popContext(state) {
            var t = state.context.type;
            if (t == ")" || t == "]" || t == "}")
                state.indented = state.context.indented;
            return state.context = state.context.prev;
        }

        // Interface

        return {
            startState: function(basecolumn) {
                return {
                    tokenize: null,
                    context: new Context((basecolumn || 0) - indentUnit, 0, "top", false),
                    indented: 0,
                    startOfLine: true
                };
            },

            token: function(stream, state) {
                var ctx = state.context;
                if (stream.sol()) {
                    if (ctx.align == null) ctx.align = false;
                    state.indented = stream.indentation();
                    state.startOfLine = true;
                }
                if (stream.eatSpace()) return null;
                curPunc = null;
                var style = (state.tokenize || tokenBase)(stream, state);
                if (style == "comment" || style == "meta") return style;
                if (ctx.align == null) ctx.align = true;

                if ((curPunc == ";" || curPunc == ":") && ctx.type == "statement") popContext(state);
                else if (curPunc == "{") pushContext(state, stream.column(), "}");
                else if (curPunc == "[") pushContext(state, stream.column(), "]");
                else if (curPunc == "(") pushContext(state, stream.column(), ")");
                else if (curPunc == "}") {
                    while (ctx.type == "statement") ctx = popContext(state);
                    if (ctx.type == "}") ctx = popContext(state);
                    while (ctx.type == "statement") ctx = popContext(state);
                }
                else if (curPunc == ctx.type) popContext(state);
                else if (ctx.type == "}" || ctx.type == "top" || (ctx.type == "statement" && curPunc == "newstatement"))
                    pushContext(state, stream.column(), "statement");
                state.startOfLine = false;
                return style;
            },

            indent: function(state, textAfter) {
                if (state.tokenize != tokenBase && state.tokenize != null) return 0;
                var ctx = state.context, firstChar = textAfter && textAfter.charAt(0);
                if (ctx.type == "statement" && firstChar == "}") ctx = ctx.prev;
                var closing = firstChar == ctx.type;
                if (ctx.type == "statement") return ctx.indented + (firstChar == "{" ? 0 : indentUnit);
                else if (ctx.align) return ctx.column + (closing ? 0 : 1);
                else return ctx.indented + (closing ? 0 : indentUnit);
            },

            electricChars: "{}"
        };
    });

    CodeMirror.defineMIME("text/x-haql", "haql");

});