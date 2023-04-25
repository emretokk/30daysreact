import React from "react";
import ReactDOM from "react-dom";
import { countriesData } from "./countries.js";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const headerStyles = {
      backgroundColor: "lightblue",
      textAlign: "center",
    };
    return (
      <div className="header-container" style={headerStyles}>
        <h1 style={{ margin: 0 }}>30 Days of React</h1>
        <h2 style={{ fontWeight: 100, margin: 0 }}>Country Selector</h2>
      </div>
    );
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const footerStyles = {
      position: "absolute",
      bottom: 0,
      width: "99%",
      height: "3rem",
      backgroundColor: "darkgrey",
    };
    return (
      <div className="footer-container" style={footerStyles}>
        <p>Copyright 2023</p>
      </div>
    );
  }
}

class Main extends React.Component {
  setLanguages = () => {
    let langCount =
      this.props.countries[this.props.curCountry].languages.length;
    if (langCount > 1) {
      let text = "Languages: ";
      let curLang = 0;
      for (let lang of this.props.countries[this.props.curCountry].languages) {
        if (curLang == langCount - 1) text += lang;
        else text += lang + ", ";
        curLang += 1;
      }
      return text;
    } else {
      let text =
        "Language: " + this.props.countries[this.props.curCountry].languages[0];
      return text;
    }
  };
  constructor(props) {
    super(props);
  }
  render() {
    const boxStyle = {
      display: "block",
      backgroundColor: "#FBF9C4",
      width: 400,
      height: 300,
      marginTop: 10,
    };
    return (
      <div
        className="main-container"
        style={{
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="box-container" style={boxStyle}>
          <div className="country" style={{ textAlign: "center" }}>
            <img src={this.props.countries[this.props.curCountry].flag}></img>
            <p>{this.props.countries[this.props.curCountry].name}</p>
          </div>
          <div className="info" style={{ textAlign: "left", marginTop: 40 }}>
            <p>
              Capital:{" "}
              <span>{this.props.countries[this.props.curCountry].capital}</span>
            </p>
            <div className="languages">{this.setLanguages()}</div>
            <p>
              Population:{" "}
              <span>
                {this.props.countries[this.props.curCountry].population}
              </span>
            </p>
            <p>
              Currency:{" "}
              <span>
                {this.props.countries[this.props.curCountry].currency}
              </span>
            </p>
          </div>
        </div>
        <button
          onClick={this.props.switchCountry}
          style={{ display: "block", marginTop: 10 }}
        >
          Select Country
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  switchCountry = () => {
    this.setState({ curCountry: Math.floor(Math.random() * 249) });
  };
  state = {
    curCountry: Math.floor(Math.random() * 249),
  };
  constructor(props) {
    super(props);
  }
  render() {
    const countries = countriesData;
    console.log(countries[this.state.curCountry]);
    return (
      <div className="app">
        <Header />
        <Main
          switchCountry={this.switchCountry}
          countries={countries}
          curCountry={this.state.curCountry}
        />
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
