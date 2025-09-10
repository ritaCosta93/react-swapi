import { useState } from 'react';
import { Logo } from './components/Logo';
//import { Results } from './components/Results';
import { SearchOptions } from './components/SearchOptions';
import { Searchbar } from './components/Searchbar';

export const App = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>('');

  return (
    <div className='flex flex-col p-8 bg-sky-950 h-screen'>
      <Logo />
      <Searchbar option={selectedOption} />
      <SearchOptions selectedOption={selectedOption} onChange={setSelectedOption} />
      {/* <Results data={results} /> */}
    </div>
  );
};
