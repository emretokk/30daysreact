import React from "react";
import ReactDOM from "react-dom";

// Hexadecimal color generator
const generateColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

let colors = [];
for (let i = 0; i < 5; i++) {
  colors.push(generateColor());
}

const Header = (props) => (
  <div className="Header" style={{ textAlign: "center", margin: 20 }}>
    <div style={{ backgroundColor: colors[0] }}>{colors[0]}</div>
    <div style={{ backgroundColor: colors[1] }}>{colors[1]}</div>
    <div style={{ backgroundColor: colors[2] }}>{colors[2]}</div>
    <div style={{ backgroundColor: colors[3] }}>{colors[3]}</div>
    <div style={{ backgroundColor: colors[4] }}>{colors[4]}</div>
  </div>
);

const MyButton = () => (
  <div className="button-container" style={{ textAlign: "center" }}>
    <button onClick={changeColor}>Change Color</button>
  </div>
);

const changeColor = () => {
  colors = [];
  for (let i = 0; i < 5; i++) {
    colors.push(generateColor());
  }
  ReactDOM.render(<App />, rootElement);
};

const App = () => {
  return (
    <div className="app">
      <Header colors={colors} />
      <MyButton colors={colors} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
