import { ECLCode } from '../../code/ECLCode';

export interface ICodeGenerator {
    getCode(): ECLCode[];
}
