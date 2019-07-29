import React, { useState } from 'react';
import FishForm from './components/FishForm';
import FishList from './components/FishList';

function MainPage() {
  const [fishes, setFishes] = useState([]);

  const handleSubmit = newFish => {
    setFishes([...fishes, newFish]);
  };

  return (
    <>
      <FishForm onSubmit={handleSubmit} />
      <FishList fishes={fishes} />
    </>
  );
}

export default MainPage;
