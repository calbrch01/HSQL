import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import format from 'string-template';
import { Action, ActionType } from '../../../ast/data/Action';
import { EDataType } from '../../../ast/data/base/DataType';
import { isAny } from '../../../ast/data/base/typechecks/isAny';
import { isDataType } from '../../../ast/data/base/typechecks/isDataType';
import { Output } from '../../../ast/stmt/Output';
import { Write } from '../../../ast/stmt/Write';
import { ErrorManager, TranslationIssue } from '../../../managers/ErrorManager';
import { FileOutputStmtContext } from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import { pullVEO, VEO, VEOMaybe } from '../../../misc/holders/VEO';
import rs from '../../../misc/strings/resultStrings';
import { ASTGenerator } from '../ASTGenerator';

export class WriteASTGenerator extends AbstractParseTreeVisitor<VEOMaybe> implements HSQLVisitor<VEOMaybe> {
    errorManager: ErrorManager;
    constructor(protected parent: ASTGenerator) {
        super();
        this.errorManager = parent.errorManager;
    }
    defaultResult() {
        return null;
    }

    visitFileOutputStmt(ctx: FileOutputStmtContext) {
        const dt = new Action(ActionType.OUTPUT);
        // get information about the Write context
        const { overwrite, attributeContext, fileOutputLocation, fileType } = this.getWriteFileConfiguration(ctx);
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
        if (!isDataType(attributeResultDataType, EDataType.TABLE)) {
            const typeInQuestion = attributeResultDataType.type ?? EDataType.ANY;
            this.errorManager.push(
                TranslationIssue.semanticErrorToken(format(rs.cannotUse, [EDataType[typeInQuestion], rs.output]))
            );
        }
        const astNode = new Write(
            ctx,
            attributeResult.stmt,
            overwrite,
            fileOutputLocation,
            fileType,
            fileOutputLocation
        );

        return new VEO(dt, astNode);
    }

    protected getWriteFileConfiguration(ctx: FileOutputStmtContext) {
        const attributeContext = ctx.definition();
        const overwrite = ctx.OVERWRITE() !== undefined;
        const fileOutputLocation = ctx.STRING().text;
        const fileType = ctx.fileType().fileOutputType;
        return { attributeContext, overwrite, fileOutputLocation, fileType };
    }
}
