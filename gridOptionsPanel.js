import { COLDEFS_WITH_GROUPING, COLDEFS_WITHOUT_GROUPING } from "./columnDefs";
import gridOptions from "./gridOptions";

// **** DOM Elements ****
const eColumnGroups = document.querySelector("#grid-setting-column-groups");
const eGroupByCountry = document.querySelector("#grid-setting-group-country");
const eFilterArgentina = document.querySelector(
  "#grid-setting-filter-argentina"
);
const eSortAthleteAsc = document.querySelector(
  "#grid-setting-sort-athlete-asc"
);

// **** Event Listeners ****
eColumnGroups.addEventListener("change", updateColumnGrouping);
eGroupByCountry.addEventListener("change", updateGroupByCountry);
eFilterArgentina.addEventListener("change", updateFilterByArgentina);
eSortAthleteAsc.addEventListener("change", updateSortAthleteAsc);

// **** Event Handlers ****
function updateColumnGrouping() {
  const withColumnGroups = eColumnGroups.checked;

  gridOptions.api.setColumnDefs(
    withColumnGroups ? COLDEFS_WITH_GROUPING : COLDEFS_WITHOUT_GROUPING
  );
}

function updateGroupByCountry() {
  gridOptions.columnApi.applyColumnState({
    state: [
      {
        colId: "country",
        rowGroup: eGroupByCountry.checked
      }
    ]
  });
}

function updateFilterByArgentina() {
  const countryFilterComponent = gridOptions.api.getFilterInstance("country");
  const filterModel = eFilterArgentina.checked
    ? { values: ["Argentina"] }
    : null;
  countryFilterComponent.setModel(filterModel);
  gridOptions.api.onFilterChanged();
}

function updateSortAthleteAsc() {
  let athleteSort = eSortAthleteAsc.checked ? "asc" : null;

  gridOptions.columnApi.applyColumnState({
    state: [{ colId: "athlete", sort: athleteSort }],
    defaultState: { sort: null }
  });
}

export default {
  updateColumnGrouping,
  updateGroupByCountry,
  updateFilterByArgentina,
  updateSortAthleteAsc
};
