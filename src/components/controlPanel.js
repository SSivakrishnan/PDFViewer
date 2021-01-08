//rfce
import React from "react";

function ControlPanel(props) {
  const {
    pageNumber,
    numPages,
    setPageNumber,
    scaleVal,
    setScaleVal,
    setActivePdf,
    select,
  } = props;
  const isFirstPage = 1 === pageNumber;
  const isLastPage = numPages === pageNumber;

  function firstpage() {
    if (!isFirstPage) setPageNumber(1);
  }
  function previouspage() {
    if (!isFirstPage) setPageNumber(pageNumber - 1);
  }
  function nextpage() {
    if (!isLastPage) setPageNumber(pageNumber + 1);
  }
  function lastpage() {
    if (!isLastPage) setPageNumber(numPages);
  }
  const zoomin = () => {
    if (scaleVal <= 2) setScaleVal(scaleVal + 0.5);
  };
  const zoomout = () => {
    if (scaleVal >= 1) setScaleVal(scaleVal - 0.5);
  };
  const close = () => {
    setActivePdf(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 m-5 p-4 d-flex justify-content-around bg-light">
          <i className="fa fa-fast-backward" onClick={firstpage}></i>
          <i className="fa fa-backward" onClick={previouspage}></i>
          <p>
            {select}.pdf [{pageNumber}/{numPages}]
          </p>
          <i className="fa fa-forward" onClick={nextpage}></i>{" "}
          <i className="fa fa-fast-forward" onClick={lastpage}></i>
        </div>
        <div className="col-md-3 m-5 p-4 d-flex justify-content-around bg-light">
          <i className="fa fa-search-plus" onClick={zoomin}></i>
          <i className="fa fa-search-minus" onClick={zoomout}></i>
          <button className="btn btn-danger" onClick={close}>
            close
          </button>
        </div>{" "}
      </div>
    </div>
  );
}

export default ControlPanel;
