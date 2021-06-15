import { Action } from '../Action';
import { Any } from '../Any';
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
    // FUTURE 30/05 introduce sets
    [EDataType.SET]: Any;
    [EDataType.SINGULAR]: Singular;
    [EDataType.ACTION]: Action;
    [EDataType.NOTHING]: NoDataType;
}
