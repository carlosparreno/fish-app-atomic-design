import React from "react";
import fish from "./fish.png";
import { Button, Textinput, Image, RadioButton } from "./atoms";
import { Form, Formitem } from "./molecules";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src={fish} />
        <Button action={() => console.log("action")}>Action</Button>
        <Form name="fish-form" label="Add a fish">
          <Formitem label="Fish name:" hint="Give me a name">
            <Textinput
              value=""
              name="fish-name"
              onChange={() => console.log("textinput on change")}
            />
          </Formitem>
          <Formitem
            label="Direcction:"
            hint="Direction the fish will be heading to"
          >
            <RadioButton name="right-left-radio" options={["Right", "Left"]} />
          </Formitem>
        </Form>
      </header>
    </div>
  );
}

export default App;
