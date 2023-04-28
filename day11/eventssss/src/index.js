// index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge");
  };
  render() {
    return <button onClick={this.greetPeople}>click me</button>;
  }
}

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
