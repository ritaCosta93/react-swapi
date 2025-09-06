import { Logo } from './components/Logo';
import { Searchbar } from './components/Searchbar';
import { SearchOptions } from './components/SearchOptions';

export const App = () => {
  return (
    <div className='flex flex-col p-8 bg-sky-950 h-screen'>
      <Logo />
      <Searchbar />
      <SearchOptions />
    </div>
  );
};
