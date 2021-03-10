import { GridOptions, simpleHttpRequest } from "ag-grid-community";
import MyCellRenderer from "./MyCellRenderer";
import GRID_OPTIONS_PANEL from "./gridOptionsPanel";

const gridOptions = {
  suppressPropertyNamesCheck: true,
  defaultColDef: {
    cellRenderer: "MyCellRenderer",
    filter: true,
    sortable: true,
    resizable: true,
    enableRowGroup: true,
    menuTabs: ["filterMenuTab"]
  },
  components: {
    MyCellRenderer: MyCellRenderer
  },
  groupSelectsChildren: true,
  rowSelection: "multiple",
  onColumnEverythingChanged: params => {
    let selectionCol = params.columnApi.getColumn("selection-col");
    if (selectionCol) {
      params.columnApi.moveColumn(selectionCol, 0);
    }
  },
  onFirstDataRendered: params => {
    params.columnApi.autoSizeAllColumns();
  },
  onGridReady: params => {
    GRID_OPTIONS_PANEL.updateColumnGrouping();
    GRID_OPTIONS_PANEL.updateGroupByCountry();
    GRID_OPTIONS_PANEL.updateFilterByArgentina();
    GRID_OPTIONS_PANEL.updateSortAthleteAsc();

    simpleHttpRequest({
      url: "https://www.ag-grid.com/example-assets/olympic-winners.json"
    }).then(function(data) {
      data.forEach(r => {
        r.date = new Date();
      });
      params.api.setRowData(data.slice(1500, 2000));
    });
  }
};

export default gridOptions;
