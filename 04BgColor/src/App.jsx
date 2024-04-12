/** @format */
import { useState } from "react";

function App() {
  const [color, setColor] = useState("navy");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center  pt-80 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-5 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "orange" }}
          >
            Orange
          </button><button
            onClick={() => setColor("lime")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "lime" }}
          >
            Lime
          </button>
          <button
            onClick={() => setColor("crimson")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "crimson" }}
          >
            Crimson
          </button> <button
            onClick={() => setColor("teal")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "teal" }}
          >
            Teal
          </button>
        
         
       
         
        </div>
      </div>
    </div>
  );
}

export default App;
