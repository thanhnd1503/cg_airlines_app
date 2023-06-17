import React from "react";
import jsPDF from "jspdf";
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

class Invoice extends React.Component {
  printDocument() {
    const doc = new jsPDF();

    // Get HTML
    const pdfTable = document.getElementById("divToPrint");
    // HTML to PDF format
    const html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.getBlob((blob) => {
      // Download the PDF file
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "invoice.pdf";
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  render() {
    return (
      <div className="App container mt-5">
        <button className="btn btn-primary" onClick={this.printDocument}>
          Export To PDF
        </button>
        <div id="divToPrint" className="m-3">
          <div class="row d-flex justify-content-center">
            <div class="col-md-8">
              <div class="card">
                <div class="d-flex flex-row p-2">
                  <div class="d-flex flex-column">
                    {" "}
                    <span class="font-weight-bold">Tax Invoice</span>{" "}
                    <small>INV-001</small>{" "}
                  </div>
                </div>

                <hr />
                <div class="table-responsive p-2">
                  <table class="table table-borderless">
                    <tbody>
                      <tr class="add">
                        <td>To</td>
                        <td>From</td>
                      </tr>
                      <tr class="content">
                        <td class="font-weight-bold">
                          Google <br />
                          Attn: Jassa Smith Pymont <br />
                          Australia
                        </td>
                        <td class="font-weight-bold">
                          Facebook <br /> Attn: Jassa Right Polymont <br /> USA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr />
                <div class="products p-2">
                  <table class="table table-borderless">
                    <tbody>
                      <tr class="add">
                        <td>Description</td>
                        <td>Days</td>
                        <td>Price</td>
                        <td class="text-center">Total</td>
                      </tr>
                      <tr class="content">
                        <td>Website Redesign</td>
                        <td>15</td>
                        <td>$1,500</td>
                        <td class="text-center">$22,500</td>
                      </tr>
                      <tr class="content">
                        <td>Logo & Identity</td>
                        <td>10</td>
                        <td>$1,500</td>
                        <td class="text-center">$15,000</td>
                      </tr>
                      <tr class="content">
                        <td>Marketing Collateral</td>
                        <td>3</td>
                        <td>$1,500</td>
                        <td class="text-center">$4,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr />
                <div class="products p-2">
                  <table class="table table-borderless">
                    <tbody>
                      <tr class="add">
                        <td></td>
                        <td>Subtotal</td>
                        <td>GST(10%)</td>
                        <td class="text-center">Total</td>
                      </tr>
                      <tr class="content">
                        <td></td>
                        <td>$40,000</td>
                        <td>2,500</td>
                        <td class="text-center">$42,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Invoice;
