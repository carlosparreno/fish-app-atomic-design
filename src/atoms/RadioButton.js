import React from "react";

function RadioButton(props) {
  return (
    <span>
      {props.options.map(option => (
        <>
          <input type="radio" name={props.name} value={option} />
          <span className="f-radio-item">{option}</span>
        </>
      ))}
    </span>
  );
}

export default RadioButton;
