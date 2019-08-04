import React from 'react';

function Textinput(props) {
  return (
    <>
      <input
        className="fish-textinput"
        name={props.name}
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

export default Textinput;
