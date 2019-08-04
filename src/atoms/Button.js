import React from 'react';

function Button(props) {
  return (
    <button className="fish-button" onClick={props.action}>
      {props.children}
    </button>
  );
}

export default Button;
