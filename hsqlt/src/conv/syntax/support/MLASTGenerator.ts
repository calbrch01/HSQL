import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import format from 'string-template';
import { DataType, EDataType } from '../../../ast/data/base/DataType';
import { isAny } from '../../../ast/data/base/typechecks/isAny';
import { isDataType } from '../../../ast/data/base/typechecks/isDataType';
import { AnyTable, Table } from '../../../ast/data/Table';
import { BaseASTNode } from '../../../ast/stmt/base/BaseASTNode';
import { OneShotML } from '../../../ast/stmt/OneShotML';
import { Predict } from '../../../ast/stmt/Predict';
import { Train } from '../../../ast/stmt/Train';
import { VariableTable } from '../../../ast/symbol/VariableTable';
import { ErrorManager, TranslationIssue } from '../../../managers/ErrorManager';
import { QualifiedIdentifier } from '../../../misc/ast/QualifiedIdentifier';
import { TrainVarType } from '../../../misc/ast/TrainType';
import { TagStore } from '../../../misc/ds/tagstore';
import { ElementaryMLContext, PredictContext, TrainContext } from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import { pullVEO, VEO, VEOMaybe } from '../../../misc/holders/VEO';
import resultStrings from '../../../misc/strings/resultStrings';
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

        if (visSource === undefined || visSource.type === TrainVarType.ONESHOT) {
            this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.notFound, [templateSource]), ctx));
            // there is no way to generate this statement, yank it.
            // return a bogus empty statement
            return new VEO(
                new AnyTable(),
                new Train(ctx, indDef[1], depDef[1], false, '', new QualifiedIdentifier(''), false, new Map())
            );
        }
        visSource.importList.forEach(e => {
            this.parent.ensureImport(e);
        });

        const args = ctx.trainOptions().trainOption();
        // first match them and remove dedups
        const matchedOptions: Map<string, VEO> = new Map();
        for (const arg of args) {
            const argName = arg.IDENTIFIER().text.toLowerCase();
            if (!visSource.declarationOpts.has(argName)) {
                this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.notFound, argName), arg));
            } else if (matchedOptions.has(argName)) {
                this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.existsError, argName), arg));
            } else {
                // its a valid one and we can go with it
                const child = this.parent.visit(arg.trainValue());
                const childVEO = pullVEO(child, this.errorManager, arg);

                const isChildDataTypeCorrect =
                    visSource.declarationOpts.get(argName)?.isExactType(childVEO.datatype) ?? false;
                if (!isAny(childVEO.datatype) && !isChildDataTypeCorrect) {
                    this.errorManager.push(
                        TranslationIssue.semanticErrorToken(format(rs.functionArgMismatchError, argName), arg)
                    );
                }
                matchedOptions.set(argName, childVEO);
            }
            // if(visSource.declarationOpts.has() matchedOptions.has(argName))
        }

        // what does this line do? If there's no imports, it is added in.
        // if it is not internal, and target is not set, we should try for an import ()
        // if internal is false (ie it is from another bundle) and it isnt from myself (toImport being false), then set the target by importing it.
        if (visSource.target === undefined && visSource.toImport !== undefined && visSource.internal === false) {
            visSource.target = this.parent.addImportWithAlias(visSource.toImport);
        }

        //set tags for the table source
        const modelDataType = visSource.makeResult.cloneType();
        modelDataType.tags.set(TagStore.trainStore, templateSource);

        const stmt = new Train(
            ctx,
            indDef[1],
            depDef[1],
            visSource.isDiscrete,
            visSource.makeTemplate,
            // set the source bundle to either the target which got imported or the toImport
            visSource.target ?? visSource.toImport,
            ctx.trainAddOrderSegment().willAddOrder,
            matchedOptions
        );
        return new VEO(modelDataType, stmt); //new VEO(visSource.);
    }

    visitPredict(ctx: PredictContext) {
        const [modelDef, indepDef] = ctx.definition().map((e, i) => {
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
            // for the first one, which is the model just make sure we check
            if (i === 0 && dataType.tags.getString(TagStore.trainStore) === undefined) {
                this.errorManager.push(
                    TranslationIssue.semanticErrorToken(format(resultStrings.mayNotBeModelWarning, e.text))
                );
            }
            return [dataType, stmt] as [Table, BaseASTNode];
        });

        //get method
        const templateSource = ctx.IDENTIFIER()?.text ?? modelDef[0].tags.getString(TagStore.trainStore);

        const visSource =
            templateSource !== undefined ? this.variableTable.getTrainDeclaration(templateSource) : undefined;

        if (visSource === undefined || visSource.type === TrainVarType.ONESHOT) {
            // decide on the error message, was it that there was no model type or was it given incorrect
            const errorMessage = format(templateSource !== undefined ? rs.notFound : rs.cannotInferModelError, [
                templateSource,
            ]);
            this.errorManager.push(TranslationIssue.semanticErrorToken(errorMessage, ctx));
            // there is no way to generate this statement, yank it.
            // return a bogus empty statement
            return new VEO(
                new AnyTable(),
                new Predict(ctx, modelDef[1], indepDef[1], '', new QualifiedIdentifier(''), false)
            );
        }
        visSource.importList.forEach(e => {
            this.parent.ensureImport(e);
        });

        // what does this line do? If there's no imports, it is added in.
        // if it is not internal, and target is not set, we should try for an import ()
        // if internal is false (ie it is from another bundle) and it isnt from myself (toImport being false), then set the target by importing it.
        if (visSource.target === undefined && visSource.toImport !== undefined && visSource.internal === false) {
            visSource.target = this.parent.addImportWithAlias(visSource.toImport);
        }
        const modelDataType = visSource.makeResult.cloneType();
        return new VEO(
            modelDataType,
            new Predict(
                ctx,
                modelDef[1],
                indepDef[1],
                visSource.predictTemplate,
                visSource.target,
                ctx.trainAddOrderSegment().willAddOrder
            )
        );
    }

    /**
     * Processes oneshot ml
     * Very similar to the visitTrain method,
     * @param ctx
     * @returns
     */
    visitElementaryML(ctx: ElementaryMLContext) {
        const indCtx = ctx.definition();
        const res = this.parent.visit(indCtx);
        let { datatype: resdt, stmt: resStmt } = pullVEO(res, this.errorManager);

        if (isAny(resdt)) {
            this.errorManager.push(
                TranslationIssue.semanticWarningToken(
                    format(rs.cannotInfer, [rs.output, EDataType[EDataType.TABLE]]),
                    indCtx
                )
            );
        }
        let dataType;
        if (!isDataType(resdt, EDataType.TABLE)) {
            const typeInQuestion = resdt.type ?? EDataType.ANY;
            this.errorManager.push(
                TranslationIssue.semanticErrorToken(
                    format(rs.cannotUse, [EDataType[typeInQuestion], rs.output]),
                    indCtx
                )
            );
            dataType = new AnyTable();
        } else {
            dataType = resdt;
        }
        const indDef = [dataType, resStmt] as [Table, BaseASTNode];

        const templateSource = ctx.IDENTIFIER().text;
        const visSource = this.variableTable.getTrainDeclaration(templateSource);

        if (visSource === undefined || visSource.type === TrainVarType.DEFAULT) {
            this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.notFound, [templateSource]), ctx));
            // there is no way to generate this statement, yank it.
            // return a bogus empty statement
            return new VEO(
                new AnyTable(),
                new OneShotML(ctx, indDef[1], false, '', new QualifiedIdentifier(''), false, new Map())
            );
        }
        visSource.importList.forEach(e => {
            this.parent.ensureImport(e);
        });

        const args = ctx.trainOptions().trainOption();
        // first match them and remove dedups
        const matchedOptions: Map<string, VEO> = new Map();
        for (const arg of args) {
            const argName = arg.IDENTIFIER().text.toLowerCase();
            if (!visSource.declarationOpts.has(argName)) {
                this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.notFound, argName), arg));
            } else if (matchedOptions.has(argName)) {
                this.errorManager.push(TranslationIssue.semanticErrorToken(format(rs.existsError, argName), arg));
            } else {
                // its a valid one and we can go with it
                const child = this.parent.visit(arg.trainValue());
                const childVEO = pullVEO(child, this.errorManager, arg);

                const isChildDataTypeCorrect =
                    visSource.declarationOpts.get(argName)?.isExactType(childVEO.datatype) ?? false;
                if (!isAny(childVEO.datatype) && !isChildDataTypeCorrect) {
                    this.errorManager.push(
                        TranslationIssue.semanticErrorToken(format(rs.functionArgMismatchError, argName), arg)
                    );
                }
                matchedOptions.set(argName, childVEO);
            }
            // if(visSource.declarationOpts.has() matchedOptions.has(argName))
        }

        // what does this line do? If there's no imports, it is added in.
        // if it is not internal, and target is not set, we should try for an import ()
        // if internal is false (ie it is from another bundle) and it isnt from myself (toImport being false), then set the target by importing it.
        if (visSource.target === undefined && visSource.toImport !== undefined && visSource.internal === false) {
            visSource.target = this.parent.addImportWithAlias(visSource.toImport);
        }

        //set tags for the table source
        const modelDataType = visSource.predictResult.cloneType();
        modelDataType.tags.set(TagStore.trainStore, templateSource);

        const stmt = new OneShotML(
            ctx,
            indDef[1],
            visSource.isDiscrete,
            visSource.predictTemplate,
            // set the source bundle to either the target which got imported or the toImport
            visSource.target ?? visSource.toImport,
            ctx.trainAddOrderSegment().willAddOrder,
            matchedOptions
        );
        return new VEO(modelDataType, stmt);
    }
}
