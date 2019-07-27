import React from "react";

function Textinput(props) {
  return (
    <>
      <input
        className="f-textinput"
        type="text"
        ref={props.ref}
        onChange={props.onChange}
      />
    </>
  );
}

export default Textinput;
