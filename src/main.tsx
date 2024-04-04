import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import ListGroup from "./components/ListGroup.tsx";

let items = ["Ibanez", "Martin", "Les Paul"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ListGroup
      items={items}
      heading={"Guitar Stuff"}
      onSelectItem={handleSelectItem}
    />
  </React.StrictMode>
);
