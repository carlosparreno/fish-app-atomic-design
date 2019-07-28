import React from "react";

function Icon(props) {
  return (
    <span role="img" aria-label={props.ariaLabel} onClick={props.onClick}>
      {props.type}
    </span>
  );
}

export default Icon;
