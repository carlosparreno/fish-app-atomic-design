import React, { useState } from 'react';
import { Label, Icon } from '../atoms';

function FormItem(props) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="fish-formitem">
      <div className="fish-formitem-label">
        <Label>
          {props.label}
          <Icon
            type="🤔"
            ariaLabel="question-help-icon"
            onMouseEnter={() => setShowHint(!showHint)}
            onMouseLeave={() => setShowHint(!showHint)}
          />
        </Label>
        <div className="fish-hint">
          {showHint && <Label>{props.hint}</Label>}
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default FormItem;
