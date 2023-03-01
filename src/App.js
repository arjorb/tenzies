import React, { useState, useEffect } from 'react';
import Dice from './components/Dice';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
const App = () => {
  const generateNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return newDice;
  };

  const rollNewDice = () => {
    if (!tenzies) {
      setDice(
        dice.map(die => {
          return die.isHeld ? die : { id: nanoid(), value: Math.ceil(Math.random() * 6), isHeld: false };
        })
      );
    } else {
      setDice(generateNewDice);
      setTenzies(false);
    }
  };

  const handleHold = id => {
    setDice(
      dice.map(die => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const [dice, setDice] = useState(generateNewDice);
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);
    const allSame = dice.every(die => die.value === dice[0].value);

    if (allHeld && allSame) {
      setTenzies(true);
    }
  }, [dice]);

  const diceElement = dice.map(die => (
    <Dice isHeld={die.isHeld} value={die.value} handleHold={() => handleHold(die.id)} />
  ));

  return (
    <div className='flex justify-center mt-32'>
      {tenzies && <Confetti />}
      <h1 className='w-[380px] h-[399px] bg-[#0B2434] rounded-md flex justify-center items-center'>
        <div className='w-[340px] h-[340px] bg-[#F5F5F5] rounded-md'>
          <h1 className='text-center mt-10 font-bold text-2xl text-[#2B283A]'>Tenzies</h1>
          <p className='text-center mt-2 font-light text-sm  w-10/12 mx-auto text-[#4A4E74]'>
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
          </p>
          <div className='flex flex-wrap gap-3 justify-center mx-auto '>{diceElement}</div>
          <div className='flex justify-center mt-3'>
            <button className='bg-blue-400 py-2 px-7 rounded-md text-white font-bold' onClick={rollNewDice}>
              {tenzies ? 'New Game' : 'Roll'}
            </button>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default App;
