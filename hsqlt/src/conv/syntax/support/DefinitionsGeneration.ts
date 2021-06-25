import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { DataType } from '../../../ast/data/base/DataType';
import { Col } from '../../../ast/data/Col';
import { Table } from '../../../ast/data/Table';
import { DataMetaData, VariableVisibility } from '../../../ast/symbol/VariableTable';
import { ColDefContext, DeclarationContext, TableClauseContext } from '../../../misc/grammar/HSQLParser';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
// import { HSQLVisitor } from '../../../lib';
import { ASTGenerator } from '../ASTGenerator';

export class DefinitionGeneration
    extends AbstractParseTreeVisitor<readonly [string, DataType] | undefined>
    implements HSQLVisitor<readonly [string, DataType] | undefined>
{
    // protected parent:ASTGenerator;
    protected defaultResult(): undefined {
        return undefined;
    }
    constructor(protected parent: ASTGenerator) {
        super();
    }

    visitColDef(ctx: ColDefContext) {
        return [ctx.IDENTIFIER().text, new Col(ctx.dataType().dt)] as const;
    }
    visitTableClause(ctx: TableClauseContext): [string, Table] {
        const entries = ctx
            .colDefs()
            .colDef()
            // .map(e => e.accept(this))
            .reduce((t, e, i) => {
                const res = this.visit(e); //e.accept(this);
                if (res === undefined) return t;
                else {
                    const y = [...t, res];
                    // safe, syntax allows it
                    return y as [string, Col][];
                }
            }, [] as [string, Col][]);

        const table: Table = new Table(new Map(entries));
        // this.parent.variableManager.add()
        return ['', table];
    }
    visitDeclaration(ctx: DeclarationContext) {
        const res = ctx.typeClauses().accept(this);
        if (res !== undefined) {
            const text = ctx.IDENTIFIER().text;
            const [_, dt] = res;

            // console.log(res);
            this.parent.variableManager.add(text, DataMetaData(dt, VariableVisibility.PUBLIC));
        }
        return undefined;
    }
}
