import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import ReactDOM from "react-dom/client";
import FretBoard from "./components/FretBoard.tsx";
import FretNums from "./components/FretNums.tsx";
import ScaleDropdowns from "./components/ScaleDropdowns.tsx";
import "bootstrap/dist/css/bootstrap.css";

const App = function () {
  const [startingRoot, setRoot] = useState("C");
  const [startingScale, setScale] = useState("Major");
  const [stringLength, setStringLength] = useState(12);

  return (
    <React.StrictMode>
      <Container fluid className="bg-dark text-white min-vh-100">
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
          setStringLength={setStringLength}
        ></ScaleDropdowns>
      </Container>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App></App>);
