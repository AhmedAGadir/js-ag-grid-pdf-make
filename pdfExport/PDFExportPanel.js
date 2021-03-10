import { createPicker } from "./utils";

// ************** STATIC OPTIONS ***************

export const PDF_HEADER_COLOR = "#f8f8f8";
export const PDF_INNER_BORDER_COLOR = "#dde2eb";
export const PDF_OUTER_BORDER_COLOR = "#babfc7";
export const PDF_LOGO =
  "https://raw.githubusercontent.com/AhmedAGadir/ag-grid-todo-list-react-typescript/master/src/assets/new-ag-grid-logo.png";

// ************** COLOR PICKER **************

// export let PDF_ODD_BKG_COLOR = "#03A9F4";
// export let PDF_EVEN_BKG_COLOR = "#E91E63";
export let PDF_ODD_BKG_COLOR = "#fcfcfc";
export let PDF_EVEN_BKG_COLOR = "#fff";

const pickrOddRowBkgColor = createPicker(
  ".color-picker-odd-row-bkg",
  PDF_ODD_BKG_COLOR
);

const pickEvenRowBkgColor = createPicker(
  ".color-picker-even-row-bkg",
  PDF_EVEN_BKG_COLOR
);

pickrOddRowBkgColor.on("save", (color, instance) => {
  const updatedColor = color.toHEXA().toString();
  PDF_ODD_BKG_COLOR = updatedColor;
  instance.hide();
});

pickEvenRowBkgColor.on("save", (color, instance) => {
  const updatedColor = color.toHEXA().toString();
  PDF_EVEN_BKG_COLOR = updatedColor;
  instance.hide();
});

// ************** DYNAMIC OPTIONS ***************

export let PDF_PAGE_ORITENTATION;
export let PDF_WITH_HEADER_IMAGE;
export let PDF_WITH_FOOTER_PAGE_COUNT;
export let PDF_HEADER_HEIGHT;
export let PDF_ROW_HEIGHT;
export let PDF_WITH_CELL_FORMATTING;
export let PDF_WITH_COLUMNS_AS_LINKS;
export let PDF_SELECTED_ROWS_ONLY;

// **** DOM Elements ****
let eLandscapeInput = document.querySelector(
  'input[type="radio"]#landscape'
);
let ePortraitInput = document.querySelector(
  'input[type="radio"]#portrait'
);
let eExportWithFormattingInput = document.querySelector(
  "#exportWithFormatting"
);
let eExportColumnsAsLinks = document.querySelector(
  "#exportColumnsAsLink"
);
let eHeaderImage = document.querySelector("#headerImage");
let eFooterPageCount = document.querySelector(
  "#footerPageCount"
);
let eHeaderRowHeight = document.querySelector(
  "#headerRowHeight"
);
let eCellRowHeight = document.querySelector("#cellRowHeight");
let eExportSelectedRowsOnly = document.querySelector(
  "#selectedRowsOnly"
);

// **** Event Listeners ****
eLandscapeInput.addEventListener("change", updateOrientation);
ePortraitInput.addEventListener("change", updateOrientation);
eExportWithFormattingInput.addEventListener(
  "change",
  updateExportWithFormatting
);
eExportColumnsAsLinks.addEventListener("change", updateExportColumnAsLinks);
eHeaderRowHeight.addEventListener("change", updateHeaderRowHeight);
eCellRowHeight.addEventListener("change", updateCellRowHeight);
eExportSelectedRowsOnly.addEventListener("change", updateSelectedRowsOnly);
eHeaderImage.addEventListener("change", updateHeaderImage);
eFooterPageCount.addEventListener("change", updateFooterPageCount);

// **** Event Handlers ****
function updateOrientation() {
  if (eLandscapeInput.checked && !ePortraitInput.checked) {
    PDF_PAGE_ORITENTATION = "landscape";
  } else if (!eLandscapeInput.checked && ePortraitInput.checked) {
    PDF_PAGE_ORITENTATION = "portrait";
  }
}

function updateExportWithFormatting() {
  PDF_WITH_CELL_FORMATTING = eExportWithFormattingInput.checked;
}

function updateExportColumnAsLinks() {
  PDF_WITH_COLUMNS_AS_LINKS = eExportColumnsAsLinks.checked;
}

function updateHeaderRowHeight() {
  PDF_HEADER_HEIGHT = parseInt(eHeaderRowHeight.value);
}

function updateCellRowHeight() {
  PDF_ROW_HEIGHT = parseInt(eCellRowHeight.value);
}

function updateSelectedRowsOnly() {
  PDF_SELECTED_ROWS_ONLY = eExportSelectedRowsOnly.checked;
}

function updateHeaderImage() {
  PDF_WITH_HEADER_IMAGE = eHeaderImage.checked;
}

function updateFooterPageCount() {
  PDF_WITH_FOOTER_PAGE_COUNT = eFooterPageCount.checked;
}

// **** Initialise ****
updateOrientation();
updateExportWithFormatting();
updateExportColumnAsLinks();
updateHeaderRowHeight();
updateCellRowHeight();
updateSelectedRowsOnly();
updateHeaderImage();
updateFooterPageCount();
