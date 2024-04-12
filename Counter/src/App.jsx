/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <>
      <h2>Asjad Samdani </h2>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value : {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value: {counter}</button>
    </>
  );
}

export default App;
