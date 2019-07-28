import React from "react";
import fish from "../fish.png";
import { Textinput, RadioButton } from "../atoms";
import { Form, Formitem, PicturePanel } from "../molecules";

function MainPage() {
  return (
    <>
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
      <PicturePanel name="Jonhy" direction="right" src={fish} />
    </>
  );
}

export default MainPage;
