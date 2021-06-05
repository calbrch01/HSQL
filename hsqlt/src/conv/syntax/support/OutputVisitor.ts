import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Action, ActionType } from '../../../ast/data/Action';
import { isAny, isDataType } from '../../../ast/data/base/misc';

import { IASTVisitor } from '../../../ast/IASTVisitor';
import { fileOutputOptionsType, Output } from '../../../ast/stmt/Output';
import { ErrorManager, TranslationError } from '../../../managers/ErrorManager';
import { OutputStmtContext } from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import { pullVEO, VEO, VEOMaybe } from '../../../misc/holders/VEO';
import { ASTGenerator } from '../ASTGenerator';
import format from 'string-template';
import rs from '../../../misc/strings/resultStrings.json';
import { EDataType } from '../../../ast/data/base/DataType';
export class OutputVisitor extends AbstractParseTreeVisitor<VEOMaybe> implements HSQLVisitor<VEOMaybe> {
    errorManager: ErrorManager;
    constructor(protected parent: ASTGenerator) {
        super();
        this.errorManager = parent.errorManager;
    }
    defaultResult() {
        return null;
    }

    public getOutputFileOptions(ctx: OutputStmtContext): fileOutputOptionsType {
        const fileName = ctx.toFile()?.STRING().text;
        // if it is undefined, leave
        if (fileName === undefined) {
            return { fileName, overwrite: false };
        } else {
            return {
                fileName,
                overwrite: ctx.toFile()?.OVERWRITE() !== undefined,
            };
        }
    }

    visitOutputStmt(ctx: OutputStmtContext) {
        const dt = new Action(ActionType.OUTPUT);
        const { namedOutputLocation, outputFileOptions, attributeContext } = this.getOutputConfiguration(ctx);

        const attributeResultMaybe = attributeContext.accept(this.parent);
        const attributeResult = pullVEO(attributeResultMaybe, this.errorManager, attributeContext);
        const { datatype: attributeResultDataType } = attributeResult;

        if (isAny(attributeResultDataType)) {
            this.errorManager.push(
                TranslationError.semanticWarningToken(
                    format(rs.cannotInfer, [rs.output, EDataType[EDataType.TABLE]]),
                    attributeContext
                )
            );
        }
        if (isDataType(attributeResultDataType, EDataType.SINGULAR, true)) {
            const typeInQuestion = attributeResultDataType.type ?? EDataType.ANY;
            this.errorManager.push(
                TranslationError.semanticErrorToken(format(rs.cannotUse, [EDataType[typeInQuestion], rs.output]))
            );
        }
        const astNode = new Output(ctx, attributeResult.stmt, namedOutputLocation, outputFileOptions);

        return new VEO(dt, astNode);
    }

    protected getOutputConfiguration(ctx: OutputStmtContext) {
        const outputFileOptions = this.getOutputFileOptions(ctx);
        const namedOutputLocation = ctx.namedOutput()?.IDENTIFIER().text;
        const attributeContext = ctx.attribute();
        return { namedOutputLocation, outputFileOptions, attributeContext };
    }
}
