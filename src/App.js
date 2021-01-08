import "./App.css";
import React from "react";
import SelectPDF from "./components/selectPDF";
import { useState } from "react";

function App() {
  const [pdfNames] = useState([
    "IBM_workshop",
    "MERN_Stack",
    "React_Notes",
    "Sample",
    "Security_Laboratory",
    "UML_DIAGRAMS",
  ]);

  const [recentPdf, setRecentPdf] = useState([]);

  return (
    <div className="App">
      <h1>PDF Reader </h1>
      <SelectPDF
        pdfNames={pdfNames}
        recentPdf={recentPdf}
        setRecentPdf={setRecentPdf}
      />
    </div>
  );
}
export default App;
