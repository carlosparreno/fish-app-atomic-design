import React from "react";
import logo from "./logo.svg";
import { Label, Button, Textinput, Icon } from "./atoms";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Label>
          Edit <code>src/App.js</code> and save to reload.
        </Label>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button action={() => console.log("action")}>Action</Button>
        <Textinput
          value=""
          onChange={() => console.log("textinput on change")}
        />
        <Icon type="🤔" ariaLabel="question-help-icon" />
      </header>
    </div>
  );
}

export default App;
