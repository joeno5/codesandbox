import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./login";
import MyMenu from "./menu";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="menu">
        <MyMenu />
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
