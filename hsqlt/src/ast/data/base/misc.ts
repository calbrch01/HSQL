import { Action } from '../Action';
import { Any } from '../Any';
import { AnyModule } from '../AnyModule';
import { Layout } from '../Layout';
import { Module } from '../Module';
import { NoDataType } from '../NoDataType';
import { Singular } from '../Singular';
import { Table } from '../Table';
import { CollectionType } from './CollectionType';
import { DataType, EDataType } from './DataType';

export interface typeMap {
    [EDataType.ANY]: DataType;
    [EDataType.MODULE]: Module;
    [EDataType.LAYOUT]: Layout;
    [EDataType.TABLE]: Table;
    // TODO 30/05 introduce sets
    [EDataType.SET]: Any;
    [EDataType.SINGULAR]: Singular;
    [EDataType.ACTION]: Action;
    [EDataType.NOTHING]: NoDataType;
}

/**
 *
 * @param x
 * @param y
 * @param ignoreDataAny Ignore data being anyized. This allows checking if data is any
 * @returns
 */
export function isDataType<T extends keyof typeMap, U extends typeMap[T]>(
    x: DataType,
    y: T,
    ignoreDataAny: boolean = false
): x is U {
    if (y === EDataType.ANY) {
        return true;
    }
    // if it can be anyized, it doesn't matter
    return (!ignoreDataAny && x.anyized) || x.type === y;
}

export function isAny(x: DataType) {
    return x.anyized;
}

export function isCollection(x: DataType): x is CollectionType {
    return x instanceof CollectionType;
}
