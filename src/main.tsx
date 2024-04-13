import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import FretBoard from "./components/FretBoard.tsx";
import ScaleDropdown from "./components/ScaleDropdown.tsx";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";

const stringLength = 12;
const FretNums = function () {
  return (
    <Table bordered>
      {[...Array(stringLength)].map(function (_, index) {
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
  const [root, setRoot] = useState("C");
  const [currentScale, setCurrentScale] = useState("Major");

  return (
    <React.StrictMode>
      <div className="bg-dark text-white min-vh-100">
        <FretBoard
          root={root}
          currentScale={currentScale}
          stringLength={stringLength}
        ></FretBoard>
        <FretNums></FretNums>
        <ScaleDropdown
          root={root}
          setRoot={setRoot}
          currentScale={currentScale}
          setCurrentScale={setCurrentScale}
        ></ScaleDropdown>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App></App>);
