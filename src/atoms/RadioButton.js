import React from "react";

function RadioButton(props) {
  return (
    <span>
      {props.options.map((option, key) => (
        <span key={key}>
          <input type="radio" name={props.name} value={option} />
          <span className="f-radio-item">{option}</span>
        </span>
      ))}
    </span>
  );
}

export default RadioButton;
