/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    username: "Asjad",
    age: 21,
  };
  let Array = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-green-400 text-white p-4 rounded-xl mb-4 ">Tailwind</h1>
      <Card
        username="Samdani"
        btnText="click me"
        text="A playing card is a piece of specially prepared card stock, heavy paper, thin cardboard, plastic-coated paper, cotton-paper blend, or thin plastic that is marked with distinguishing motifs. Often the front (face) and back of each card has a finish to make handling easier. They are most commonly used for playing card games, and are also used in magic tricks, cardistry"
      />
      <br />
      <Card
        username="Asjad"
        text="Other games revolving around alcoholic drinking involved using playing cards of a sort from the Tang dynasty onward. However, these cards did not contain suits or numbers. Instead, they were printed with instructions or forfeits for whoever drew them.[31]
The earliest dated instance of a game involving cards occurred on 17 July 1294 when the Ming Department of Punishments caught two gamblers, Yan Sengzhu and Zheng Pig-Dog, playing with paper cards. Wood blocks for printing the cards were impounded, together with nine of the actual cards.[31]"
      />
    </>
  );
}

export default App;
