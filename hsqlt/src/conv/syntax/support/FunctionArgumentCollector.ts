import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { Col } from '../../../ast/data/Col';
import { Singular } from '../../../ast/data/Singular';
import { ErrorManager } from '../../../managers/ErrorManager';
import { QualifiedIdentifier } from '../../../misc/ast/QualifiedIdentifier';
import { SingularDataType } from '../../../misc/ast/SingularDataType';
import { FunctionDefaultArgumentContext, FunctionLayoutArgumentContext } from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import { ErrorManagerContainer } from '../ASTGenerator';
import { FunctionArgument, FunctionArgumentType } from '../../../misc/ast/FunctionArgumentType';

/**
 * Collecting the function arguments. This does **not** validate.
 */
export class FunctionArgumentCollector
    extends AbstractParseTreeVisitor<FunctionArgument[]>
    implements HSQLVisitor<FunctionArgument[]>
{
    protected defaultResult(): FunctionArgument[] {
        return [];
    }
    // private _errorManager: ErrorManager;
    // public get errorManager(): ErrorManager {
    //     return this._errorManager;
    // }
    constructor(/* private _parent: ErrorManagerContainer */) {
        super();
        // this._errorManager = _parent.errorManager;
    }

    /**
     * Join lists
     * @param aggregate Total so far
     * @param nextResult Upcoming result from a visit
     * @returns
     */
    aggregateResult(aggregate: FunctionArgument[], nextResult: FunctionArgument[]) {
        return [...aggregate, ...nextResult];
    }
    visitFunctionDefaultArgument(ctx: FunctionDefaultArgumentContext): FunctionArgument[] {
        return [
            {
                type: FunctionArgumentType.PRIMITIVE,
                name: ctx.colDef().IDENTIFIER().text,
                dataType: ctx.colDef().dataType().dt,
            },
        ];
    }

    visitFunctionLayoutArgument(ctx: FunctionLayoutArgumentContext): FunctionArgument[] {
        const layoutqid = QualifiedIdentifier.fromGrammar(ctx.definition());

        return [
            {
                type: FunctionArgumentType.LAYOUT,
                name: ctx.IDENTIFIER().text,
                layoutId: layoutqid,
            },
        ];
    }
}
