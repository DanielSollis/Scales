import { useState } from "react";

function ListGroup() {
  let items = ["Ibanez", "Martin", "Les Paul"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = <p>No Items Found</p>;

  return (
    <>
      <h1>Guitar Stuff</h1>
      {items.length === 0 && message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
