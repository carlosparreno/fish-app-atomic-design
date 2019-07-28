import React from "react";
import fish from "./fish.png";
import { Label, Button, Textinput, Icon, Image, RadioButton } from "./atoms";
import { Form, Formitem } from "./molecules";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Label>This is a label</Label>
        <Button action={() => console.log("action")}>Action</Button>
        <Textinput
          value=""
          onChange={() => console.log("textinput on change")}
        />
        <Icon type="🤔" ariaLabel="question-help-icon" />
        <Image src={fish} />
        <Form name="fish-form" label="Add a fish">
          <Formitem label="Fish name:" hint="Give me a name">
            <Textinput
              value=""
              onChange={() => console.log("textinput on change")}
            />
          </Formitem>
          <Formitem
            label="Direcction:"
            hint="Direction the fish will be heading to"
          >
            <RadioButton name="radioGroup" options={["Right", "Left"]} />
          </Formitem>
        </Form>
      </header>
    </div>
  );
}

export default App;
