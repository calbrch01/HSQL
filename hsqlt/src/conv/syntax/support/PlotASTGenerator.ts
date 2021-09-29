import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import format from 'string-template';
import { DataType, EDataType } from '../../../ast/data/base/DataType';
import { isAny } from '../../../ast/data/base/typechecks/isAny';
import { isDataType } from '../../../ast/data/base/typechecks/isDataType';
import { NoDataType } from '../../../ast/data/NoDataType';
import { BaseASTNode } from '../../../ast/stmt/base/BaseASTNode';
import { Plot } from '../../../ast/stmt/Plot';
import { VariableTable } from '../../../ast/symbol/VariableTable';
import { ErrorManager, TranslationIssue } from '../../../managers/ErrorManager';
import { PlotStmtContext } from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import { pullVEO, VEO, VEOMaybe } from '../../../misc/holders/VEO';
import rs from '../../../misc/strings/resultStrings';
import { ASTGenerator } from '../ASTGenerator';

export class PlotASTGenerator extends AbstractParseTreeVisitor<VEOMaybe> implements HSQLVisitor<VEOMaybe> {
    protected defaultResult(): VEOMaybe<DataType, BaseASTNode> {
        return null;
    }
    errorManager: ErrorManager;
    variableTable: VariableTable;
    constructor(protected parent: ASTGenerator) {
        super();
        this.errorManager = parent.errorManager;
        this.variableTable = parent.variableManager;
    }
    visitPlotStmt(ctx: PlotStmtContext) {
        const fromdef: VEOMaybe = this.parent.visit(ctx._fromdef);
        const { datatype: resdt, stmt } = pullVEO(fromdef, this.errorManager);
        if (isAny(resdt)) {
            this.errorManager.push(
                TranslationIssue.semanticWarningToken(
                    format(rs.cannotInfer, [rs.output, EDataType[EDataType.TABLE]]),
                    ctx._fromdef
                )
            );
        }
        if (!isDataType(resdt, EDataType.TABLE)) {
            const typeInQuestion = resdt.type ?? EDataType.ANY;
            this.errorManager.push(
                TranslationIssue.semanticErrorToken(format(rs.cannotUse, [EDataType[typeInQuestion], rs.output]))
            );
        }

        const titleText = ctx.IDENTIFIER(0).text;

        const templateSource = ctx.IDENTIFIER(1).text;
        const visSource = this.variableTable.getVisualizationDeclaration(templateSource);
        // console.log('tt', visSource);

        if (visSource === undefined) {
            this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.notFound, [templateSource])));
            // there is no way to generate this statement, yank it.
            // this is an action - so it should be fine, hopefully
            return null;
        }

        const plotAST = new Plot(ctx, stmt, visSource, titleText);

        // this.variableTable.getVisualizationDeclaration()
        // const stmt = new Plot(ctx,)
        // return new VEO(new NoDataType,);
        // return null;
        return new VEO(new NoDataType(), plotAST);
    }
}
