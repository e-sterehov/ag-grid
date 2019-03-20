// Type definitions for icm-ag-grid-community v20.1.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
export declare class ResizeObserverService {
    private gridOptionsWrapper;
    private frameworkFactory;
    observeResize(element: HTMLElement, callback: () => void): () => void;
}
