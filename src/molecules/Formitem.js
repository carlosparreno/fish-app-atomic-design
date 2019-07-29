import React, { useState } from 'react';
import { Label, Icon } from '../atoms';

function Formitem(props) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="f-formitem">
      <div className="f-formitem-label">
        <Label>
          {props.label}
          <Icon
            type="🤔"
            ariaLabel="question-help-icon"
            onMouseEnter={() => setShowHint(!showHint)}
            onMouseLeave={() => setShowHint(!showHint)}
          />
        </Label>
        <div className="f-hint">{showHint && <Label>{props.hint}</Label>}</div>
      </div>
      {props.children}
    </div>
  );
}

export default Formitem;
