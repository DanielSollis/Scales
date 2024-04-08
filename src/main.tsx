import React from "react";
import ReactDOM from "react-dom/client";
import FretBoard from "./components/FretBoard.tsx";
import ScaleDropdown from "./components/ScaleDropdown.tsx";
import Table from "react-bootstrap/Table";

const FretNums = function () {
  return (
    <Table bordered>
      <style>{`.equal-width-table td {width: 1%;}`}</style>
      {[...Array(12)].map(function (_, index) {
        return <td className="text-center">{index}</td>;
      })}
    </Table>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FretBoard></FretBoard>
    <FretNums></FretNums>
    <ScaleDropdown></ScaleDropdown>
  </React.StrictMode>
);
