import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import ReactDOM from "react-dom/client";
import FretBoard from "./components/FretBoard.tsx";
import ScaleDropdowns from "./components/ScaleDropdowns.tsx";
import { Connect, SocketButton } from "./components/websocket.tsx";
import "bootstrap/dist/css/bootstrap.css";

const App = function () {
  const [startingRoot, setRoot] = useState("C");
  const [startingScale, setScale] = useState("Major");
  const [stringLength, setStringLength] = useState(12);

  Connect();

  return (
    <React.StrictMode>
      <Container fluid className="bg-dark text-white min-vh-100">
        <FretBoard
          root={startingRoot}
          scale={startingScale}
          stringLength={stringLength}
        ></FretBoard>

        <ScaleDropdowns
          root={startingRoot}
          setRoot={setRoot}
          scale={startingScale}
          setScale={setScale}
          setStringLength={setStringLength}
        ></ScaleDropdowns>

        <SocketButton></SocketButton>
      </Container>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App></App>);
