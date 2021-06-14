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

/*
 * Let's talk about select. its really big.
 * We will have sources, cols and jobs.
 * Jobs are how we can do SELECT.
 * This is the safest order to the query.
 * Only step 1 uses other tables, rest all steps just act on the above
 * 1. from - create the gigantic source table. This involves
 *   a. Enumerating sources
 *   b. filling sources
 *   c. getting the table
 * 2. where - filter from above
 * 3. group
 * 4. sort
 * 5. having
 * 6. limit+offset
 * 7. colfilter
 * 8. distinct
 */

/*
 * Simplifying for ECL, the whole process becomes
 * 1. FROM
 *     a. Enumerate aliases
 *     b. Enumerate joins
 *     c. Store the table
 * 2. where
 * 3. sort
 * 4. groupandColfit
 * 5. LIMITOFFSET
 * 6. distinct
 */

export class SelectASTGenerator extends AbstractParseTreeVisitor<VEOMaybe> implements HSQLVisitor<VEOMaybe> {
    errorManager: ErrorManager;
    /**
     * The table sources that can be used for the rest of the select statement.
     * For these, the columns are looked up.
     */
    protected _changedSources: Map<string, BaseASTNode>;

    /**
     *
     */
    protected _colSelect: Map<string, string>;

    /**
     * What to do in the select, a stack of work to do
     */
    private _jobs: SelectJob[];

    constructor(protected parent: ASTGenerator) {
        super();
        this.errorManager = parent.errorManager;
        this._changedSources = new Map();
        this._jobs = [];
        this._colSelect = new Map();
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
        isDistinct && this._jobs.push({ type: SelectJobDesc.DISTINCT });

        // create node
        const node = new Select(ctx, isDistinct, [], this._jobs);

        //change this data type
        const dt = new AnyTable();
        return new VEO(dt, node);
    }

    visitSelectFromDefinition(ctx: SelectFromDefinitionContext) {
        // this._sources.push();
        this.visitChildren(ctx);
        return null;
    }
    // visitSelectBracketedFromTable(ctx: SelectBracketedFromTableContext) {
    //     return this.visit(ctx);
    // }
}
