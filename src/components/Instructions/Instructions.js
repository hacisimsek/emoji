import React from 'react';
import emoji from './emoji.svg';

const Instructions = () => {
  return (
    <div>
      <div className="instructions">
        <img alt="laughing crying emoji" src={emoji} />
        <p>Click on an emoji to view the emoji short name.</p>
      </div>
    </div>
  );
};
export default Instructions;
