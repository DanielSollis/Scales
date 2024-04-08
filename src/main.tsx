import React from "react";
import ReactDOM from "react-dom/client";
import FretBoard from "./components/FretBoard.tsx";
import ScaleDropdown from "./components/ScaleDropdown.tsx";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";

const FretNums = function () {
  return (
    <Table bordered>
      {[...Array(12)].map(function (_, index) {
        return (
          <td className="text-center" width="1%">
            {index + 1}
          </td>
        );
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
