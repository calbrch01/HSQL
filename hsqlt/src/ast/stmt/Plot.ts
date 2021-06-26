import { ParserRuleContext } from 'antlr4ts';
import { IASTVisitor } from '../IASTVisitor';
import { DataVisualization } from '../symbol/VariableTable';
import { StmtExpression } from './base/StmtExpression';

export class Plot implements StmtExpression {
    constructor(
        protected _node: ParserRuleContext,
        private _src: StmtExpression,
        private _template: DataVisualization,
        private _titleText: string
    ) {}

    get node() {
        return this._node;
    }
    public get dataVisualizationTemplate(): DataVisualization {
        return this._template;
    }
    public get src(): StmtExpression {
        return this._src;
    }
    public get titleText(): string {
        return this._titleText;
    }

    accept<T>(v: IASTVisitor<T>): T {
        return v.visitPlot?.(this) ?? v.defaultResult();
    }
}
