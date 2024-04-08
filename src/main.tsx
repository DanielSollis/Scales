import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import FretBoard from "./components/FretBoard.tsx";
import ScaleDropdown from "./components/ScaleDropdown.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FretBoard></FretBoard>
    <ScaleDropdown></ScaleDropdown>
  </React.StrictMode>
);
