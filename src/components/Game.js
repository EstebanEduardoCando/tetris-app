import React from 'react';
import Board from './Board';
import Tetromino from './Tetromino';
import Score from './Score';
import Controls from './Controls';

const Game = () => {
  return (
    <div>
      <h1>Tetris</h1>
      <Board />
      <Tetromino color="yellow" />
      <Score score={0} />
      <Controls />
    </div>
  );
};

export default Game;
