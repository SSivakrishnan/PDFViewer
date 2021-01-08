import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import ControlPanel from "./controlPanel";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PageReader({ select, setActivePdf }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [scaleVal, setScaleVal] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <center>
      <div>
        <ControlPanel
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          scaleVal={scaleVal}
          setScaleVal={setScaleVal}
          setActivePdf={setActivePdf}
          select={select}
        />
        <Document
          file={`assets/docs/${select}.pdf`}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={scaleVal} />
        </Document>
      </div>
    </center>
  );
}

export default PageReader;
