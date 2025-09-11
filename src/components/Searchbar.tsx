import { useState } from 'react';
import { useStore } from '../hooks/useStore';

export const Searchbar = () => {
  const [text, setText] = useState<string>('');
  const { handleOptions, option, setSearchTerm } = useStore();

  return (
    <div className='searchbar flex flex-col p-5 gap-4'>
      <div className='flex flex-row justify-center gap-0'>
        <input
          type='text'
          value={text}
          className='w-3/6 rounded-tl rounded-bl shadow-sm focus:border border-amber-400 border-outset p-2'
          onChange={e => setText(e.target.value)}
        />
        <button
          className='bg-yellow-400 shadow-md p-5 rounded-tr rounded-br border border-amber-400 text-black hover:text-white'
          type='button'
          onClick={() => {
            handleOptions(option);
            setSearchTerm(text);
          }}
        >
          May the force be with you
        </button>
      </div>
    </div>
  );
};
