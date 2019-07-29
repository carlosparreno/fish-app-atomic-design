import React from 'react';
import fishImage from '../../fish.png';
import { PicturePanel } from '../../molecules';
import { LinearList } from '../../organisms';

function FishList(props) {
  if (!props.fishes || props.fishes.length === 0) return null;

  return (
    <LinearList>
      {props.fishes.map((fish, key) => (
        <PicturePanel
          key={key}
          name={fish.fishName}
          direction={fish.fishDirection}
          src={fishImage}
        />
      ))}
    </LinearList>
  );
}

export default FishList;
