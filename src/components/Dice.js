import React from 'react';

const Dice = ({ isHeld, value, handleHold }) => {
  return (
    <div
      className={`py-3 px-5 mt-2 cursor-pointer rounded-md font-bold ${
        isHeld ? 'bg-yellow-500 text-white' : 'bg-white'
      }`}
      onClick={handleHold}
    >
      {value}
    </div>
  );
};

export default Dice;
