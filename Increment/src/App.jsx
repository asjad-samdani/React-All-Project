/** @format */

import React, { useReducer } from "react";
import "./App.css";
import "./index.css"

let initialValue = 0;

function reducer(state, action) {
  switch (action) {
    case "Increment":
      return state + 1;
      break;

    case "Decrement":
      return state - 1;
      break;

    default:
      return state;
      break;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <br />
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </>
  );
}

export default App;
