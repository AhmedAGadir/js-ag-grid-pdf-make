
class MyCellRenderer {
  eGui;
  init(params) {
    this.eGui = document.createElement("div");

    if (params.value === undefined) {
      return;
    }

    let innerHTML = params.value;

    const pdfExportOptions = params.column.colDef.pdfExportOptions;

    if (pdfExportOptions) {
      if (pdfExportOptions.styles) {
        const {
          fontSize,
          bold,
          alignment,
          background,
          color
        } = pdfExportOptions.styles;

        this.eGui.style.fontSize = fontSize ? fontSize + "px" : null;
        this.eGui.style.fontWeight = bold ? "bold" : null;
        this.eGui.style.textAlign = alignment ? alignment : null;
        this.eGui.style.background = background ? background : null;
        this.eGui.style.color = color ? color : null;
      }

      if (pdfExportOptions.createURL) {
        var link = pdfExportOptions.createURL(params.value);

        innerHTML = `
    <a
        href="${link}"
        target="popup"
        onclick="window.open('${link}','popup','width=600,height=600'); return false;">${
          params.value
        }</a>`;
      }
    }

    this.eGui.innerHTML = innerHTML;
  }

  getGui() {
    return this.eGui;
  }

  refresh() {
    return false;
  }
}

export default MyCellRenderer;
