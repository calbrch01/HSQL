import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { DataType } from '../../../ast/data/base/DataType';
import { Col } from '../../../ast/data/Col';
import { ColDefContext, ColDefsContext } from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import { ASTGenerator } from '../ASTGenerator';

export type ColTuple = readonly [string, Col];
/**
 * A commonly used AST Generation for column definitions
 * Use {@link getColDefs} instead
 */
export class ColDefsASTGenerator extends AbstractParseTreeVisitor<ColTuple[]> implements HSQLVisitor<ColTuple[]> {
    protected defaultResult(): ColTuple[] {
        return [];
    }
    protected aggregateResult(prev: ColTuple[], curr: ColTuple[]) {
        return [...prev, ...curr] as ColTuple[];
    }

    constructor(/* protected parent: ASTGenerator */) {
        super();
    }

    visitColDef(ctx: ColDefContext) {
        return [[ctx.IDENTIFIER().text, new Col(ctx.dataType().dt)] as const];
    }

    visitColDefs(ctx: ColDefsContext) {
        return this.visitChildren(ctx);
    }
}
