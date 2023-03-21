import React from 'react';

const Block = ({ color }) => {
  const style = {
    backgroundColor: color,
    border: '1px solid black',
    width: '25px',
    height: '25px',
  };

  return <div style={style}></div>;
};

export default Block;
