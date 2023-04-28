// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./styles/index.css";
// If a component is exported as default we do not need curly bracket during importing

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
