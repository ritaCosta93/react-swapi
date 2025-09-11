import { Logo } from './components/Logo';
import { Results } from './components/Results';
import { SearchOptions } from './components/SearchOptions';
import { Searchbar } from './components/Searchbar';

export const App = () => {
  return (
    <div className='flex flex-col p-8 bg-sky-950 h-screen'>
      <Logo />
      <Searchbar />
      <SearchOptions />
      <Results />
    </div>
  );
};
