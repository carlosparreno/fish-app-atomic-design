import React from "react";

function Textinput(props) {
  return (
    <>
      <input
        className="f-textinput"
        name={props.name}
        type="text"
        ref={props.ref}
        onChange={props.onChange}
      />
    </>
  );
}

export default Textinput;
