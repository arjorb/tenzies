import Dice from './components/Dice';
function App() {
  return (
    <div className='flex justify-center mt-32'>
      <h1 className='w-[360px] h-[379px] bg-[#0B2434] flex justify-center items-center'>
        <div className='w-[320px] h-[320px] bg-[#F5F5F5] rounded-md'>
          <h1 className='text-center mt-10 font-bold text-2xl text-[#2B283A]'>Tenzies</h1>
          <p className='text-center mt-2 font-light text-sm  w-10/12 mx-auto text-[#4A4E74]'>
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
          </p>
          <div className='flex flex-wrap gap-3 w-11/12 mx-auto '>
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
          </div>
          <div className='flex justify-center mt-3'>
            <button className='bg-blue-400 py-2 px-7 rounded-md text-white font-bold'>Roll</button>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default App;
