import React, { useState } from "react";
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

const App = function () {
  const [scaleIndex, setScaleIndex] = useState(0);
  return (
    <>
      <React.StrictMode>
        <FretBoard scaleIndex={scaleIndex}></FretBoard>
        <FretNums></FretNums>
        <ScaleDropdown
          scaleIndex={scaleIndex}
          setScaleIndex={setScaleIndex}
        ></ScaleDropdown>
      </React.StrictMode>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App></App>);
