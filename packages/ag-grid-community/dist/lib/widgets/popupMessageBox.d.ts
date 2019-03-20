// Type definitions for icm-ag-grid-community v20.1.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { PopupWindow } from "./popupWindow";
export declare class PopupMessageBox extends PopupWindow {
    private readonly title;
    private readonly message;
    constructor(title: string, message: string);
    protected postConstruct(): void;
}
