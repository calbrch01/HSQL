import { Action } from '../Action';
import { AnyModule } from '../AnyModule';
import { Layout } from '../Layout';
import { Module } from '../Module';
import { NoDataType } from '../NoDataType';
import { Singular } from '../Singular';
import { Table } from '../Table';
import { DataType, EDataType } from './DataType';

export interface typeMap {
    [EDataType.ANY]: DataType;
    [EDataType.MODULE]: Module;
    [EDataType.LAYOUT]: Layout;
    [EDataType.TABLE]: Table;

    [EDataType.SINGULAR]: Singular;
    [EDataType.ACTION]: Action;
    [EDataType.NOTHING]: NoDataType;
}

//TODO 30/05
function isDataType<T extends keyof typeMap, U extends typeMap[T]>(x: DataType, y: T): x is U {
    if (y === EDataType.ANY) {
        return true;
    }
    return x.type === y;
    // switch (y) {
    //     case EDataType.TABLE:
    //     case EDataType.SINGULAR:
    //     case EDataType.SINGULAR:
    //         return x.type === y;
    // }
    // return false;
}

isDataType(new AnyModule(), EDataType.MODULE);
