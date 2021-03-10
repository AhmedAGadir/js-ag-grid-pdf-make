import "./style.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { Grid } from "ag-grid-community";
import gridOptions from "./gridOptions";

import printDoc from "./pdfExport";

new Grid(document.querySelector("#myGrid"), gridOptions);

document.querySelector("button[type='submit']").addEventListener("click", e => {
  e.preventDefault();
  printDoc();
});
