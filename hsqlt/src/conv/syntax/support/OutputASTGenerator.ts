import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import format from 'string-template';
import { Action, ActionType } from '../../../ast/data/Action';
import { EDataType } from '../../../ast/data/base/DataType';
import { isDataType } from '../../../ast/data/base/typechecks/isDataType';
import { isAny } from '../../../ast/data/base/typechecks/isAny';
import { fileOutputOptionsType, Output } from '../../../ast/stmt/Output';
import { ErrorManager, TranslationIssue } from '../../../managers/ErrorManager';
import { OutputStmtContext } from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import { pullVEO, VEO, VEOMaybe } from '../../../misc/holders/VEO';
import rs from '../../../misc/strings/resultStrings';
import { ASTGenerator } from '../ASTGenerator';

export class OutputASTGenerator extends AbstractParseTreeVisitor<VEOMaybe> implements HSQLVisitor<VEOMaybe> {
    errorManager: ErrorManager;
    constructor(protected parent: ASTGenerator) {
        super();
        this.errorManager = parent.errorManager;
    }
    defaultResult() {
        return null;
    }

    visitOutputStmt(ctx: OutputStmtContext) {
        const dt = new Action(ActionType.OUTPUT);
        const { namedOutputLocation, overwrite, attributeContext } = this.getOutputConfiguration(ctx);

        const attributeResultMaybe = attributeContext.accept(this.parent);
        const attributeResult = pullVEO(attributeResultMaybe, this.errorManager, attributeContext);
        const { datatype: attributeResultDataType } = attributeResult;

        if (isAny(attributeResultDataType)) {
            this.errorManager.push(
                TranslationIssue.semanticWarningToken(
                    format(rs.cannotInfer, [rs.output, EDataType[EDataType.TABLE]]),
                    attributeContext
                )
            );
        }
        // if (!isDataType(attributeResultDataType, EDataType.TABLE)) {
        //     const typeInQuestion = attributeResultDataType.type ?? EDataType.ANY;
        //     this.errorManager.push(
        //         TranslationIssue.semanticErrorToken(format(rs.cannotUse, [EDataType[typeInQuestion], rs.output]))
        //     );
        // }
        const astNode = new Output(ctx, attributeResult.stmt, overwrite, namedOutputLocation);

        return new VEO(dt, astNode);
    }

    protected getOutputConfiguration(ctx: OutputStmtContext) {
        const overwrite = ctx.OVERWRITE() !== undefined;
        const namedOutputLocation = ctx.namedOutput()?.IDENTIFIER().text;
        const attributeContext = ctx.attribute();
        return { namedOutputLocation, overwrite, attributeContext };
    }
}
