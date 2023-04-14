import React from "react";
import ReactDOM from "react-dom";
import myImage from "./images/myImage.png";

const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const firstName = "emre";
const lastName = "tok";
const date = "Oct 3, 2020";
const author = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
};

// JSX element, header
const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Instructor: {firstName} {lastName}
        </p>
        <small>Date: {date}</small>
      </div>
    </header>
  );
};

const numOne = 3;
const numTwo = 2;
const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1820;
const currentYear = 2020;
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

// User Card Component
const UserCard = () => (
  <div className="user-card">
    <img src={myImage} alt="my image" />
    <h2>
      {author.firstName} {author.lastName}
    </h2>
  </div>
);

// JSX element, main
const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

// JSX element, main
const Main = () => (
  <main>
    <div className="main-wrapper">
      <div>
        <p>
          Prerequisite to get started{" "}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>{techsFormatted}</ul>
        {result}
        {personAge}
      </div>
      <UserCard />
      <Buttonmee />
      <HexaColor />
    </div>
  </main>
);

const copyRight = "2020";

// JSX element, footer
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright &copy;{copyRight}</p>
    </div>
  </footer>
);

// JSX element, app
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

const buttonStyles = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0",
  border: "none",
  borderRadius: 5,
};
const Buttonmee = () => <button style={buttonStyles}> action </button>;

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
const HexaColor = () => <div>{generateColor()}</div>;

const rootElement = document.getElementById("root");
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);
