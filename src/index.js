import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./login";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
