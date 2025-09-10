import { useState } from 'react';
import { useSearch } from '../hooks/useSearch';

export const Searchbar = ({ option }: any) => {
  const [searchTerm, setSearchTerm] = useState<string | null>('');

  const handleSearch = useSearch(option, searchTerm);

  return (
    <div className='searchbar flex flex-col p-5 gap-4'>
      <div className='flex flex-row justify-center gap-0'>
        <input
          type='text'
          className='w-3/6 rounded-tl rounded-bl shadow-sm focus:border border-amber-400 border-outset p-2'
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button
          className='bg-yellow-400 shadow-md p-5 rounded-tr rounded-br border border-amber-400 text-black hover:text-white'
          type='button'
          onClick={() => handleSearch}
        >
          May the force be with you
        </button>
      </div>
    </div>
  );
};
