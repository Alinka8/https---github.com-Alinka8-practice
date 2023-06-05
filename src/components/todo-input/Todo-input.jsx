import "./todo-input.style.css";
import React from "react";

function Todoinput() {
  const name = "Alina";
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

export default Todoinput;
