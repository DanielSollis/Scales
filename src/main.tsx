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
  const [root, setRoot] = useState("C");
  const [currentScale, setCurrentScale] = useState("Major");
  return (
    <>
      <React.StrictMode>
        <FretBoard root={root} currentScale={currentScale}></FretBoard>
        <FretNums></FretNums>
        <ScaleDropdown
          root={root}
          setRoot={setRoot}
          currentScale={currentScale}
          setCurrentScale={setCurrentScale}
        ></ScaleDropdown>
      </React.StrictMode>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App></App>);
