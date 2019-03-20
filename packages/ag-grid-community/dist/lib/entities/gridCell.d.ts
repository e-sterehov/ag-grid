// Type definitions for icm-ag-grid-community v20.1.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Column } from "./column";
import { GridRow } from "./gridRow";
export interface GridCellDef {
    floating: string;
    rowIndex: number;
    column: Column;
}
export declare class GridCell {
    floating: string;
    rowIndex: number;
    column: Column;
    constructor(gridCellDef: GridCellDef);
    getGridCellDef(): GridCellDef;
    getGridRow(): GridRow;
    toString(): string;
    createId(): string;
    equals(other: GridCell | null): boolean;
}
