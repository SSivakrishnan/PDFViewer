import { useState } from "react";
import PageReader from "./pageReader";
import RecentlyVisited from "./reccentlyVisited";

function SelectPDF({ pdfNames, recentPdf, setRecentPdf }) {
  const [select, setSelect] = useState("");
  const [activePdf, setActivePdf] = useState(false);
  const open = (selected) => {
    setSelect(selected);
    setActivePdf(true);
    const copyRecentPdf = recentPdf;
    const filteredRecentPdf = copyRecentPdf.filter((rp) => rp !== selected);
    filteredRecentPdf.push(selected);

    setRecentPdf(filteredRecentPdf);
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <RecentlyVisited
          recentPdf={recentPdf}
          setSelect={setSelect}
          setActivePdf={setActivePdf}
          setRecentPdf={setRecentPdf}
        />
      </div>
      <div className="col-md-9">
        {!activePdf ? (
          <div className="d-flex justify-content-around flex-wrap">
            {pdfNames.map((name, i) => (
              <button
                key={i}
                className="but bg-info p-3 m-5 btn btn-primary border-danger"
                onClick={() => open(name)}
              >
                {name}.pdf
              </button>
            ))}
          </div>
        ) : (
          <PageReader select={select} setActivePdf={setActivePdf} />
        )}
      </div>
    </div>
  );
}
export default SelectPDF;
