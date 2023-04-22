import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./ten_most_highest_populations.js";
import { tenHighestPopulation } from "./ten_most_highest_populations.js";

const Header = () => (
  <header>
    <h1 className="asdf">30 Days Of React</h1>
    <h2>World Population</h2>
    <p>Ten most populated countries</p>
  </header>
);

const Country = ({ country: { country, population } }) => {
  const oran = (population / 7693165599) * 500;
  return (
    <div className="country-container">
      <span className="country-name">{country}</span>
      <div className="bar-container">
        <span
          className="bar"
          style={{
            width: oran,
          }}
        ></span>
      </div>
      <span className="population">{population}</span>
    </div>
  );
};

const Countries = ({ countries }) => {
  const countryList = countries.map((asd) => <Country country={asd} />);
  return countryList;
};

const App = () => {
  return (
    <div className="container">
      <Header />
      <Countries countries={tenHighestPopulation} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
