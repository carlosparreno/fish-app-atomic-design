import React from "react";

function Icon(props) {
  return (
    <span
      role="img"
      aria-label={props.ariaLabel}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.type}
    </span>
  );
}

export default Icon;
