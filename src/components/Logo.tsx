export const Logo = () => {
  return (
    <div className='logo flex flex-col gap-2'>
      <div className='flex flex-row justify-center'>
        <h1 className='font-semibold font-[Impact] text-yellow-400 text-9xl stroke-black stroke-4'>Swapi</h1>
      </div>
      <div className='flex flex-row justify-center font-sans text-white'>
        <h4>Your source of Starwars info</h4>
      </div>
    </div>
  );
};
