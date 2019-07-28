import React from "react";

function LinearList(props) {
  return (
    <div className="f-linear-list">
      {props.children.map((item, key) => (
        <div className="f-linear-list-item" key={key}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default LinearList;
