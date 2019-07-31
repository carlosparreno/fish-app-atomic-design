import React, { useState } from 'react';
import { Button, Image, Label } from '../atoms';

function PicturePanel(props) {
  const [reverse, setReverse] = useState(false);

  const direction = () => {
    switch (props.direction) {
      case 'Right':
        return reverse ? 'f-image-left' : 'f-image-right';
      case 'Left':
        return reverse ? 'f-image-right' : 'f-image-left';
      default:
        break;
    }
  };

  const imageClassName = direction();

  return (
    <div className="f-picture-panel">
      <div className="f-picture-panel-label">
        <Label>{props.name}</Label>
      </div>
      {props.children}
      <Image className={imageClassName} src={props.src} />
      <Button action={() => setReverse(!reverse)}>Reverse Direction</Button>
    </div>
  );
}

export default PicturePanel;
