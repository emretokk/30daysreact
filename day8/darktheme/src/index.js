import React from "react";
import ReactDOM from "react-dom";
import myImage from "./images/me.jpg";
import "./index.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const darkModeStyle = {
      backgroundColor: "#2D333B",
      color: "#876F43",
    };
    return (
      <header>
        <div
          className="header-wrapper"
          style={this.props.darkMode ? darkModeStyle : {}}
        >
          <h1>Welcome to my website</h1>
          <h2>
            today im trying to create a dark mode switch button with react
            states
          </h2>
        </div>
      </header>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const darkModeStyle = {
      backgroundColor: "#22272E",
    };
    return (
      <div
        className="main-wrapper"
        style={this.props.darkMode ? darkModeStyle : {}}
      >
        <Portfolio data={this.props.data} darkMode={this.props.darkMode} />
        <Switch
          switchDark={this.props.switchDark}
          darkMode={this.props.darkMode}
        />
      </div>
    );
  }
}

class Switch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const styleDarkModeColor = {
      backgroundColor: "black",
      color: "white",
    };
    return (
      <div className="button-wrapper">
        <button
          className="myButton"
          onClick={this.props.switchDark}
          style={this.props.darkMode ? styleDarkModeColor : {}}
        >
          on/off
        </button>
      </div>
    );
  }
}

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, surname, title, photo } = this.props.data;
    const darkModeColor = {
      color: "white",
    };
    return (
      <div
        className="portfolio-wrapper"
        style={this.props.darkMode ? darkModeColor : {}}
      >
        <img src={photo} className="portfolio-pic"></img>
        <div className="portfolio-name">
          {name} {surname}
        </div>
        <div className="portfolio-title">{title}</div>
      </div>
    );
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const darkModeStyle = {
      backgroundColor: "darkgrey",
      color: "white",
    };
    return (
      <div
        className="footer-wrapper"
        style={this.props.darkMode ? darkModeStyle : {}}
      >
        <p className="p-copyright">Copyright 2023</p>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    darkMode: false,
  };
  switchDark = () => {
    this.state.darkMode
      ? this.setState({ darkMode: false })
      : this.setState({ darkMode: true });
  };
  render() {
    const userData = {
      name: "Emre",
      surname: "Tok",
      title: "React Developer",
      photo: myImage,
    };
    return (
      <div className="app-container">
        <Header darkMode={this.state.darkMode} />
        <Main
          data={userData}
          switchDark={this.switchDark}
          darkMode={this.state.darkMode}
        />
        <Footer darkMode={this.state.darkMode} />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
