import React from 'react';

function LinearList(props) {
  return (
    <div className="fish-linear-list">
      {props.children.map((item, key) => (
        <div className="fish-linear-list-item" key={key}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default LinearList;
