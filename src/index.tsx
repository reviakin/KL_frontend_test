import React, { StrictMode } from "react";
import { render } from "react-dom";

const optionsBase = [
  { id: "1", text: "Бабушка надвое сказала" },
  { id: "2", text: "Бабушкины сказки" },
  { id: "3", text: "Бабье лето" },
  { id: "4", text: "Баки забивать" },
  { id: "5", text: "Балансировать на грани" },
  { id: "6", text: "Бальзаковский возраст" },
  { id: "7", text: "Баснями сыт не будешь" },
  { id: "8", text: "Беден как церковная мышь" },
  { id: "9", text: "Бежать, высунув язык" },
  { id: "10", text: "Бежать как от чумы" },
];

const Application: React.FC<{}> = () => 
    <div>
      <input placeholder="Search" />
      <ul>
        <h2>Favorites:</h2>
      </ul>
      <ul>
        <h2>Popular:</h2>
        {optionsBase.map(({ text }) => (
          <li>
            <button>Like</button>
            {text}
          </li>
        ))}
      </ul>
    </div>


render(
  <StrictMode>
    <Application />
  </StrictMode>,
  document.getElementById("root")
);