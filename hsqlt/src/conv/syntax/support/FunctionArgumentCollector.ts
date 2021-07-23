import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { Col } from '../../../ast/data/Col';
import { Singular } from '../../../ast/data/Singular';
import { ErrorManager, TranslationIssue } from '../../../managers/ErrorManager';
import { QualifiedIdentifier } from '../../../misc/ast/QualifiedIdentifier';
import { SingularDataType } from '../../../misc/ast/SingularDataType';
import {
    FunctionArgsContext,
    FunctionDefaultArgumentContext,
    FunctionLayoutArgumentContext,
} from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import { ErrorManagerContainer } from '../ASTGenerator';
import { FunctionArgument, FunctionArgumentType } from '../../../misc/ast/FunctionArgumentType';
import resultStrings from '../../../misc/strings/resultStrings';
import format from 'string-template';

/**
 * Collecting the function arguments. (Does not resolve layouts)
 */
export class FunctionArgumentCollectorVisitor extends AbstractParseTreeVisitor<void> implements HSQLVisitor<void> {
    protected defaultResult(): void {}
    private _errorManager: ErrorManager;
    public get errorManager(): ErrorManager {
        return this._errorManager;
    }

    public get argMap(): Map<string, FunctionArgument> {
        return this._argMap;
    }

    constructor(private _parent: ErrorManagerContainer, private _argMap: Map<string, FunctionArgument> = new Map()) {
        super();
        // this._argMap = new Map();
        this._errorManager = _parent.errorManager;
    }

    visitFunctionDefaultArgument(ctx: FunctionDefaultArgumentContext): void {
        const name = ctx.colDef().IDENTIFIER().text;
        if (this._argMap.has(name)) {
            this.errorManager.push(TranslationIssue.semanticErrorToken(format(resultStrings.existsError, name), ctx));
        } else {
            this._argMap.set(name, {
                type: FunctionArgumentType.PRIMITIVE,
                dataType: ctx.colDef().dataType().dt,
            });
        }
    }

    visitFunctionLayoutArgument(ctx: FunctionLayoutArgumentContext): void {
        const name = ctx.IDENTIFIER().text;
        const layoutqid = QualifiedIdentifier.fromGrammar(ctx.definition());
        if (this._argMap.has(name)) {
            this.errorManager.push(TranslationIssue.semanticErrorToken(format(resultStrings.existsError, name), ctx));
        } else {
            this._argMap.set(name, {
                type: FunctionArgumentType.LAYOUT,
                layoutId: layoutqid,
            });
        }
    }
}

/**
 * Abstracted argument collection
 * @param ctx Something containing an errormanager
 * @param rootCtx Parse tree node
 * @returns argument map
 */
export function getFunctionArguments(ctx: ErrorManagerContainer, rootCtx: FunctionArgsContext) {
    const x = new FunctionArgumentCollectorVisitor(ctx);
    x.visit(rootCtx);
    return x.argMap;
}
