import "./list-group.style.css";
import * as React from "react";
import { useState } from "react";

export default function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleClick = (event) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 && <p>No item found</p>} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
