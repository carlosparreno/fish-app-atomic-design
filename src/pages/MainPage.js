import React from "react";
import fish from "../fish.png";
import { Textinput, RadioButton } from "../atoms";
import { Form, Formitem, PicturePanel } from "../molecules";
import { LinearList } from "../organisms";

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
      <LinearList>
        <PicturePanel name="Jonhy" direction="right" src={fish} />
        <PicturePanel name="Tom" direction="right" src={fish} />
        <PicturePanel name="Jimbo" direction="left" src={fish} />
        <PicturePanel name="Tulipan" direction="right" src={fish} />
        <PicturePanel name="Queso" direction="left" src={fish} />
        <PicturePanel name="Jonhy" direction="right" src={fish} />
        <PicturePanel name="Tom" direction="right" src={fish} />
        <PicturePanel name="Jimbo" direction="left" src={fish} />
        <PicturePanel name="Tulipan" direction="right" src={fish} />
        <PicturePanel name="Queso" direction="left" src={fish} />
      </LinearList>
    </>
  );
}

export default MainPage;
