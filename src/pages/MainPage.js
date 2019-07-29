import React, { useState } from 'react';
import fishImage from '../fish.png';
import { Textinput, RadioButton, Label } from '../atoms';
import { Form, Formitem, PicturePanel } from '../molecules';
import { LinearList } from '../organisms';

function MainPage() {
  const [fishes, setFishes] = useState([]);
  const [fishName, setFishName] = useState('');
  const [fishDirection, setFishDirection] = useState(null);
  const [formError, setFormError] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    if (fishName !== '' && fishDirection) {
      setFishes([...fishes, { fishName, fishDirection }]);
      setFishName('');
      setFishDirection(null);
      setFormError(false);
    } else {
      setFormError(true);
    }
  };

  const handleFishNameChange = event => {
    const name = event.target.value;
    setFishName(name);
  };
  const handleFishDirectionChange = event => {
    const name = event.target.value;
    setFishDirection(name);
  };

  return (
    <>
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
        <Formitem label="Direction:" hint="Direction the fish will head">
          <RadioButton
            name="right-left-radio"
            options={['right', 'left']}
            onChange={handleFishDirectionChange}
          />
        </Formitem>
      </Form>
      {fishes && fishes.length === 0 && <Label>There are no fishes</Label>}
      {fishes && fishes.length > 0 && (
        <LinearList>
          {fishes.map((fish, key) => (
            <PicturePanel
              key={key}
              name={fish.fishName}
              direction={fish.fishDirection}
              src={fishImage}
            />
          ))}
        </LinearList>
      )}
    </>
  );
}

export default MainPage;
