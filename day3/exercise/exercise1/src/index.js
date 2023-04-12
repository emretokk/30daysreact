import React from "react";
import ReactDOM from "react-dom";
import lawgif from "./photos/law.gif";

const imgElement = (
  <div>
    <img src={lawgif} alt="law using room skill" className="lawImage"></img>
  </div>
);

const header = (
  <header>
    <div className="header-wrapper">
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates</p>
      <input type="text" className="inp" placeholder="First name"></input>
      <input type="text" className="inp" placeholder="Last name"></input>
      <input type="text" className="inp" placeholder="Email"></input>
      <button className="sub-button">Subscribe</button>
    </div>
  </header>
);

const app = <div className="app">{header}</div>;

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
