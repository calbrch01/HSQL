import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import format from 'string-template';
import { DataType, EDataType } from '../../../ast/data/base/DataType';
import { isAny } from '../../../ast/data/base/typechecks/isAny';
import { isDataType } from '../../../ast/data/base/typechecks/isDataType';
import { AnyTable, Table } from '../../../ast/data/Table';
import { BaseASTNode } from '../../../ast/stmt/base/BaseASTNode';
import { Train } from '../../../ast/stmt/Train';
import { VariableTable } from '../../../ast/symbol/VariableTable';
import { ErrorManager, TranslationIssue } from '../../../managers/ErrorManager';
import { TrainContext } from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import { pullVEO, VEO, VEOMaybe } from '../../../misc/holders/VEO';
import rs from '../../../misc/strings/resultStrings';
import { ASTGenerator } from '../ASTGenerator';

export class MLASTGenerator extends AbstractParseTreeVisitor<VEOMaybe> implements HSQLVisitor<VEOMaybe> {
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
    visitTrain(ctx: TrainContext) {
        const [indDef, depDef] = ctx.definition().map(e => {
            const res = this.parent.visit(e);
            let { datatype: resdt, stmt } = pullVEO(res, this.errorManager);

            if (isAny(resdt)) {
                this.errorManager.push(
                    TranslationIssue.semanticWarningToken(
                        format(rs.cannotInfer, [rs.output, EDataType[EDataType.TABLE]]),
                        e
                    )
                );
            }
            let dataType;
            if (!isDataType(resdt, EDataType.TABLE)) {
                const typeInQuestion = resdt.type ?? EDataType.ANY;
                this.errorManager.push(
                    TranslationIssue.semanticErrorToken(format(rs.cannotUse, [EDataType[typeInQuestion], rs.output]), e)
                );
                dataType = new AnyTable();
            } else {
                dataType = resdt;
            }
            return [dataType, stmt] as [Table, BaseASTNode];
        });

        const templateSource = ctx.IDENTIFIER().text;
        const visSource = this.variableTable.getTrainDeclaration(templateSource);

        if (visSource === undefined) {
            this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.notFound, [templateSource])));
            // there is no way to generate this statement, yank it.
            // this is an action - so it should be fine, hopefully
            return null;
        }

        const stmt = new Train(ctx, indDef[1], depDef[1], true, visSource.makeTemplate);
        return new VEO(visSource.makeResult, stmt); //new VEO(visSource.);
    }
}
