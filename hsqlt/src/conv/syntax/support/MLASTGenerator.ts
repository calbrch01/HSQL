import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { DataType } from '../../../ast/data/base/DataType';
import { BaseASTNode } from '../../../ast/stmt/base/BaseASTNode';
import { HSQLVisitor } from '../../../misc/grammar/HSQLVisitor';
import { VEOMaybe } from '../../../misc/holders/VEO';

export class MLASTGenerator extends AbstractParseTreeVisitor<VEOMaybe> implements HSQLVisitor<VEOMaybe> {
    protected defaultResult(): VEOMaybe<DataType, BaseASTNode> {
        return null;
    }
}
