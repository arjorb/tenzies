import React from 'react';

const Dice = props => {
  return <div className='py-3 px-5 bg-white mt-2 cursor-pointer rounded-md font-bold'>{props.value}</div>;
};

export default Dice;
