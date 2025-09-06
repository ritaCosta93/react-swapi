export const Searchbar = () => {
  return (
    <div className='searchbar flex flex-col p-5 gap-4'>
      <div className='flex flex-row justify-center'>
        <input type='text' className='w-3/6 rounded shadow-sm focus:border border-amber-400 border-outset p-2' />
      </div>
      <div className='flex flex-row justify-center'>
        <button className='bg-yellow-400 shadow-md p-5 rounded-full border border-amber-400 text-black hover:text-white'>May the force be with you</button>
      </div>
    </div>
  );
};
