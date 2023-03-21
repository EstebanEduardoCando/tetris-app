import React from 'react';
import Block from './Block';

const Tetromino = ({ color }) => {
  return (
    <div>
      <Block color={color} />
      <Block color={color} />
      <Block color={color} />
      <Block color={color} />
    </div>
  );
};

export default Tetromino;
