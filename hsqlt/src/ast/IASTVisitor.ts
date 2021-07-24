import { ErrorManager } from '../managers/ErrorManager';
import { AST } from './AST';
import { BaseASTNode } from './stmt/base/BaseASTNode';
import { CreateFunction } from './stmt/CreateFunction';
import { CreateLayout } from './stmt/CreateLayout';
import { CreateModule } from './stmt/CreateModule';
import { Definition } from './stmt/Definition';
import { EqualDefinition } from './stmt/EqualDefinition';
import { FunctionCall } from './stmt/FunctionCall';
import { Import } from './stmt/Import';
import { Literal } from './stmt/Literal';
import { Output } from './stmt/Output';
import { Plot } from './stmt/Plot';
import { Select } from './stmt/Select';
import { SelectData } from './stmt/SelectData';
import { SelectJoin } from './stmt/SelectJoin';
import { Write } from './stmt/Write';

export abstract class AbstractASTVisitor<T> {
    abstract defaultResult(): T;
    abstract reducer(total: T, current: T): T;
    abstract get errorManager(): ErrorManager;

    public visit(node: BaseASTNode): T {
        const ac = node.accept(this);
        return ac;
    }
}

/**
 * Interface for traversing an AST
 */
export interface IASTVisitor<T> {
    /**
     * The default value for returning to start from
     */
    defaultResult(): T;
    /**
     * How to join elements
     * @param total Total so far
     * @param current Current element
     */
    reducer(total: T, current: T): T;

    visit(node: BaseASTNode): T;

    visitAST?: (x: AST) => T;
    // visitLiteral?: (x: Literal) => T;
    visitSelect?: (x: Select) => T;
    visitEqual?: (x: EqualDefinition) => T;

    visitOutput?: (x: Output) => T;

    visitImport?: (x: Import) => T;

    visitDefinition?: (x: Definition) => T;

    visitLiteral?: (x: Literal) => T;

    visitSelectJoin?: (x: SelectJoin) => T;

    visitSelectData?: (x: SelectData) => T;

    visitPlot?: (x: Plot) => T;

    visitWrite?: (x: Write) => T;

    visitLayout?: (x: CreateLayout) => T;

    visitModule?: (x: CreateModule) => T;

    visitFunction?: (x: CreateFunction) => T;

    visitFunctionCall?: (x: FunctionCall) => T;
}
