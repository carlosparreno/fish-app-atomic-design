import React, { useState } from 'react';
import { Textinput } from '../../atoms';
import { Formitem, RadioButtonGroup } from '../../molecules';
import { Form } from '../../organisms';

function FishForm(props) {
  const [fishName, setFishName] = useState('');
  const [fishDirection, setFishDirection] = useState(null);
  const [formError, setFormError] = useState(false);

  const handleFishNameChange = event => {
    setFishName(event.target.value);
  };

  const handleFishDirectionChange = event => {
    setFishDirection(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (fishName !== '' && fishDirection) {
      props.onSubmit({ fishName, fishDirection });

      setFishName('');
      setFishDirection(null);
      setFormError(false);
    } else {
      setFormError(true);
    }
  };

  return (
    <Form
      name="fish-form"
      label="ADD A FISH"
      handleSubmit={handleSubmit}
      formError={formError}
      errorMessage="Set name and direction"
    >
      <Formitem label="Fish name:" hint="Give me a name">
        <Textinput
          value={fishName}
          name="fish-name"
          onChange={handleFishNameChange}
        />
      </Formitem>
      <Formitem label="Fish direction:" hint="Direction the fish will head">
        <RadioButtonGroup
          name="right-left-radio"
          options={['Left', 'Right']}
          valueSelected={fishDirection}
          onChange={handleFishDirectionChange}
        />
      </Formitem>
    </Form>
  );
}

export default FishForm;
