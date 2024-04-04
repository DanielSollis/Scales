import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import ListGroup from "./components/ListGroup.tsx";
import Button from "./components/Button.tsx";

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
    <Button onClick={() => console.log("NO!")}>Bass</Button>
  </React.StrictMode>
);
