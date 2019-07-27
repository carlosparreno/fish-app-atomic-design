import React from "react";

function Textinput(props) {
  return (
    <>
      <input
        className="f-textinput"
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

export default Textinput;
