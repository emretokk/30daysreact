import React, { Component } from "react";
import Header from "./components/Header";
import Button from "./components/Button";

class App extends Component {
  state = {
    buttonPosition: [0, 0],
    backgroundColor: "gold",
  };
  moveButton = () => {
    this.setState({
      buttonPosition: [
        Math.floor(Math.random() * 1400),
        Math.floor(Math.random() * 500) + 40,
      ],
    });
    console.log(this.state.buttonPosition);
  };
  changeColor = () => {
    this.setState({
      backgroundColor: "red",
    });
  };
  render() {
    return (
      <div className="app-container">
        <Header />
        <Button
          pos={this.state.buttonPosition}
          col={this.state.backgroundColor}
          move={this.moveButton}
          changeColor={this.changeColor}
        />
      </div>
    );
  }
}
export default App;
