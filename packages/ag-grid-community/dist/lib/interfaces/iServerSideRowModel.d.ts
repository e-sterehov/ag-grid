// Type definitions for icm-ag-grid-community v20.1.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { IRowModel } from "./iRowModel";
export interface IServerSideRowModel extends IRowModel {
    purgeCache(route?: string[]): void;
    getBlockState(): any;
}
