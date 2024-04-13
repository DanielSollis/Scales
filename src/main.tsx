import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import FretBoard from "./components/FretBoard.tsx";
import FretNums from "./components/FretNums.tsx";
import ScaleDropdowns from "./components/ScaleDropdowns.tsx";
import "bootstrap/dist/css/bootstrap.css";

const stringLength = 12;

const App = function () {
  const [startingRoot, setRoot] = useState("C");
  const [startingScale, setScale] = useState("Major");

  return (
    <React.StrictMode>
      <div className="bg-dark text-white min-vh-100">
        <FretBoard
          root={startingRoot}
          scale={startingScale}
          stringLength={stringLength}
        ></FretBoard>
        <FretNums stringLength={stringLength}></FretNums>
        <ScaleDropdowns
          root={startingRoot}
          setRoot={setRoot}
          scale={startingScale}
          setScale={setScale}
        ></ScaleDropdowns>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App></App>);
