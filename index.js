function generatePDF() {
    document.getElementById('btn').style.cssText = 'display: none;'
    const getElement = document.getElementById("invoice");
    html2pdf().from(getElement).save();
  }