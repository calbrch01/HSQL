import { AnyModule } from '../../ast/data/AnyModule';
import { QualifiedIdentifier } from '../ast';
import { IResolver } from './IResolver';

export class AnyResolver implements IResolver {
    getResult(z: QualifiedIdentifier) {
        return new AnyModule();
    }
}
