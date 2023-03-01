import React from 'react';

const Dice = props => {
  return (
    <div
      className={`py-3 px-5 mt-2 cursor-pointer rounded-md font-semibold ${
        props.isHeld ? 'bg-yellow-500 text-white' : 'bg-white'
      }`}
      onClick={props.handleHold}
    >
      {props.value}
    </div>
  );
};

export default Dice;
