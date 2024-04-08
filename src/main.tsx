import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import FretBoard from "./components/FretBoard.tsx";
import ScaleDropdown from "./components/ScaleDropdown.tsx";

const FretNums = function () {
  return (
    <>
      <table className="table table-bordered">
        <style>{`.equal-width-table td {width: 1%;}`}</style>
        {[...Array(12)].map(function (_, index) {
          return <td className="text-center">{index}</td>;
        })}
      </table>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FretBoard></FretBoard>
    <FretNums></FretNums>
    <ScaleDropdown></ScaleDropdown>
  </React.StrictMode>
);
