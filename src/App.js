import React from "react";
import logo from "./logo.svg";
import fish from "./fish.png";
import { Label, Button, Textinput, Icon, Image, RadioButton } from "./atoms";

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
        <Image src={fish} />
        <RadioButton name="radioGroup" options={["Right", "Left"]} />
      </header>
    </div>
  );
}

export default App;
