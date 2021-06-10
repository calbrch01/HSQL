import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { DataType } from '../../../ast/data/base/DataType';
import { BaseASTNode } from '../../../ast/stmt/base/BaseASTNode';
import { Select } from '../../../ast/stmt/Select';
import { ErrorManager } from '../../../managers/ErrorManager';
import { QualifiedIdentifier } from '../../../misc/ast/QualifiedIdentifier';
import {
    SelectBracketedFromTableContext,
    SelectFromDefinitionContext,
    SelectStmtContext,
} from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';

import { VEO, VEOMaybe } from '../../../misc/holders/VEO';
import { ASTGenerator } from '../ASTGenerator';
import { SelectJob, SelectJobDesc } from '../../../misc/ast/SelectJobDesc';
import { AnyTable } from '../../../ast/data/AnyTable';

export class SelectASTGenerator extends AbstractParseTreeVisitor<VEOMaybe> implements HSQLVisitor<VEOMaybe> {
    errorManager: ErrorManager;
    protected _sources: QualifiedIdentifier[];
    private _jobs: SelectJob[];
    constructor(protected parent: ASTGenerator) {
        super();
        this.errorManager = parent.errorManager;
        this._sources = [];
        this._jobs = [];
    }
    protected get jobs(): SelectJob[] {
        return this._jobs;
    }
    protected defaultResult(): VEOMaybe<DataType, BaseASTNode> {
        return null;
    }

    visitSelectStmt(ctx: SelectStmtContext) {
        const isDistinct = ctx.DISTINCT() !== undefined;

        // push dedup if required
        ctx.DISTINCT() !== undefined && this._jobs.push({ type: SelectJobDesc.DEDUP });

        // create node
        const node = new Select(ctx, isDistinct, [], this._jobs);

        const dt = new AnyTable();
        return new VEO(dt, node);
    }

    visitSelectFromDefinition(ctx: SelectFromDefinitionContext) {
        this._sources.push();
        return null;
    }
    // visitSelectBracketedFromTable(ctx: SelectBracketedFromTableContext) {
    //     return this.visit(ctx);
    // }
}
