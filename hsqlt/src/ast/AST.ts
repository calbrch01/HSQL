import { QualifiedIdentifier } from '../misc/ast';
import { IResolver } from '../misc/resolvers/IResolver';
import { DataType } from './data/base/DataType';
import { BaseASTNode } from './stmt/base/BaseASTNode';
import { StmtExpression } from './stmt/base/StmtExpression';
import { Import } from './stmt/Import';
import { VariableTable, VariableVisibility } from './symbol/VariableTable';

/**
 * AST root node
 */
export class AST {
    /**
     * Holds existing variables
     */
    variableManager: VariableTable;

    // TODO fix something here
    stmts: BaseASTNode[];

    constructor(protected typeResolver: IResolver) {
        this.variableManager = new VariableTable();
        this.stmts = [];
    }

    addImport(name: string, alias?: string) {
        // FIXME
        // assert that it doesnt exist
        const res = this.typeResolver.getResult(new QualifiedIdentifier(name));
        this.variableManager.add(alias ?? name, {
            data: res,
            vis: VariableVisibility.DEFAULT,
        });
        this.stmts.push(new Import(name, alias));
    }
}
