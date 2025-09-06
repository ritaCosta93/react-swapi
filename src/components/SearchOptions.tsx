import { useState } from 'react';
import { useAPI } from '../hooks/useAPI';

export const SearchOptions = () => {
  const [option, setOption] = useState('');
  const { data, loading, error, films, people, planets, starships } = useAPI(option);

  const handleOption = (selectedOption: string) => {
    setOption(selectedOption);
  };

  return (
    <div className='search-options flex flex-col'>
      <div className='flex flex-row gap-5 justify-center' role='radiogroup'>
        <label className='flex items-center gap-1'>
          <input
            type='radio'
            name='option'
            value='films'
            checked={option === 'films'}
            onChange={e => handleOption(e.target.value)}
            className='px-2 shadow-md focus:ring-2 focus:ring-yellow-500'
          />
          Films
        </label>

        <label className='flex items-center gap-1'>
          <input
            type='radio'
            name='option'
            value='people'
            checked={option === 'people'}
            onChange={e => handleOption(e.target.value)}
            className='shadow-md focus:ring-2 focus:ring-yellow-500'
          />
          People
        </label>

        <label className='flex items-center gap-1'>
          <input
            type='radio'
            name='option'
            value='planets'
            checked={option === 'planets'}
            onChange={e => handleOption(e.target.value)}
            className='shadow-md focus:ring-2 focus:ring-yellow-500'
          />
          Planets
        </label>

        <label className='flex items-center gap-1'>
          <input
            type='radio'
            name='option'
            value='species'
            checked={option === 'species'}
            onChange={e => handleOption(e.target.value)}
            className='shadow-md focus:ring-2 focus:ring-yellow-500'
          />
          Species
        </label>

        <label className='flex items-center gap-1'>
          <input
            type='radio'
            name='option'
            value='vehicles'
            checked={option === 'vehicles'}
            onChange={e => handleOption(e.target.value)}
            className='shadow-md focus:ring-2 focus:ring-yellow-500'
          />
          Vehicles
        </label>

        <label className='flex items-center gap-1'>
          <input
            type='radio'
            name='option'
            value='starships'
            checked={option === 'starships'}
            onChange={e => handleOption(e.target.value)}
            className='shadow-md focus:ring-2 focus:ring-yellow-500'
          />
          Starships
        </label>
      </div>

      {loading && <p>Loading...</p>}

      {error && <p className='text-red-500'>Error: {error}</p>}

      {!loading && !error && planets && planets.length > 0 && <pre className='text-sm bg-gray-100 p-2 rounded'>{JSON.stringify(planets, null, 2)}</pre>}

      {!loading && !error && (!planets || planets.length === 0) && <p>No data available.</p>}
    </div>
  );
};
