import { Action } from '../data/Action';
import { StmtExpression } from './Base';
import { ValuedExpression } from './ValuedExpression';

// FIXME
export class ActionDefinition<T extends StmtExpression> extends ValuedExpression<Action, T> {}
