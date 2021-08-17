import { QualifiedIdentifier } from '../../../misc/ast/QualifiedIdentifier';
import { BaseASTNode } from './BaseASTNode';

/**
 * All nodes which can be a part of an assignment.
 * Tag interface currently so does not have any specific members.
 */
export interface StmtExpression extends BaseASTNode {}
