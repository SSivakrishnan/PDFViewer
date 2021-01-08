import React from "react";

function RecentlyVisited({ recentPdf, setSelect, setActivePdf, setRecentPdf }) {
  const reverseRp = recentPdf.reverse();

  const open = (selected) => {
    setSelect(selected);
    setActivePdf(true);
    const copyRecentPdf = recentPdf;
    const filteredRecentPdf = copyRecentPdf.filter((rp) => rp !== selected);
    filteredRecentPdf.push(selected);

    setRecentPdf(filteredRecentPdf);
  };

  return (
    <div>
      {reverseRp.map((name, i) => (
        <button
          key={i}
          className="butt btn btn-primary"
          onClick={() => open(name)}
        >
          {name}.pdf
        </button>
      ))}
      <div>
        <h3 className="text-danger">
          Recently visited <br />
          Files are added here
        </h3>
      </div>
    </div>
  );
}

export default RecentlyVisited;
