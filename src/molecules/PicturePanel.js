import React, { useState } from 'react';
import { Button, Image, Label } from '../atoms';

function PicturePanel(props) {
  const [reverse, setReverse] = useState(false);

  const direction = () => {
    switch (props.direction) {
      case 'Right':
        return reverse ? 'fish-image-left' : 'fish-image-right';
      case 'Left':
        return reverse ? 'fish-image-right' : 'fish-image-left';
      default:
        break;
    }
  };

  const imageClassName = direction();

  return (
    <div className="fish-picture-panel">
      <div className="fish-picture-panel-label">
        <Label>{props.name}</Label>
      </div>
      {props.children}
      <Image className={imageClassName} src={props.src} />
      <Button action={() => setReverse(!reverse)}>Reverse Direction</Button>
    </div>
  );
}

export default PicturePanel;
