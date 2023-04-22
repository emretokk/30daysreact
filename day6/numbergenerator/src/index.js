import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Stealen code
function isPrime(n) {
  // Corner case
  if (n <= 1) return false;

  // Check from 2 to n-1
  for (let i = 2; i < n; i++) if (n % i == 0) return false;

  return true;
}

const Header = () => {
  return (
    <header>
      <h1>30 Days of React</h1>
      <h2>Number Generator</h2>
    </header>
  );
};

const Main = () => {
  const numbers_1 = [];
  for (let i = 0; i < 32; i++) {
    if (isPrime(i)) {
      numbers_1.push(
        <div
          className="number"
          id={"number-" + String(i)}
          style={{ backgroundColor: "red" }}
        >
          <p>{i}</p>
        </div>
      );
    } else if (i % 2 == 0) {
      numbers_1.push(
        <div
          className="number"
          id={"number-" + String(i)}
          style={{ backgroundColor: "green" }}
        >
          <p>{i}</p>
        </div>
      );
    } else {
      numbers_1.push(
        <div
          className="number"
          id={"number-" + String(i)}
          style={{ backgroundColor: "yellow" }}
        >
          <p>{i}</p>
        </div>
      );
    }
  }
  return (
    <main>
      <div className="col">{numbers_1.slice(0, 8)}</div>
      <div className="col">{numbers_1.slice(8, 16)}</div>
      <div className="col">{numbers_1.slice(16, 24)}</div>
      <div className="col">{numbers_1.slice(24, 32)}</div>
    </main>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Main />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
