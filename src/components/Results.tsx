import { isFilmArray, isPeopleArray, isPlanetArray, isSpeciesArray, isStarshipArray, isVehicleArray } from '../guards/resultsGuard';
import { useStore } from '../hooks/useStore';
import { Result } from './Result';

export const Results = () => {
  const { results, searchTerm } = useStore();

  if (!results || !results.length) return <p />;

  // Normalize search term for case-insensitive matching
  const term = searchTerm?.trim().toLowerCase() || '';

  // Filter helper
  const filterByTerm = <T extends { name?: string; title?: string }>(items: T[]) => {
    if (!term) return items;
    return items.filter(item => {
      if ('title' in item && item.title) return item.title.toLowerCase().includes(term);
      if ('name' in item && item.name) return item.name.toLowerCase().includes(term);
      return false;
    });
  };

  // Film
  if (isFilmArray(results)) {
    const filtered = filterByTerm(results);
    return (
      <div>
        {filtered.map(film => (
          <div className='my-2 p-4 rounded bg-white gap-2' key={film.episode_id}>
            <Result film={film} />
          </div>
        ))}
      </div>
    );
  }

  // Planet
  if (isPlanetArray(results)) {
    const filtered = filterByTerm(results);
    return (
      <div>
        {filtered.map(planet => (
          <div className='grid my-2 p-4 rounded bg-white gap-2' key={planet.name}>
            <Result planet={planet} />
          </div>
        ))}
      </div>
    );
  }

  // People
  if (isPeopleArray(results)) {
    const filtered = filterByTerm(results);
    return (
      <div>
        {filtered.map(person => (
          <div className='grid my-2 p-4 rounded bg-white gap-2' key={person.name}>
            <Result person={person} />
          </div>
        ))}
      </div>
    );
  }

  // Species
  if (isSpeciesArray(results)) {
    const filtered = filterByTerm(results);
    return (
      <div>
        {filtered.map(species => (
          <div className='grid my-2 p-4 rounded bg-white gap-2' key={species.name}>
            <Result species={species} />
          </div>
        ))}
      </div>
    );
  }

  // Starship
  if (isStarshipArray(results)) {
    const filtered = filterByTerm(results);
    return (
      <div>
        {filtered.map(starship => (
          <div className='grid my-2 p-4 rounded bg-white gap-2' key={starship.name}>
            <Result starship={starship} />
          </div>
        ))}
      </div>
    );
  }

  // Vehicle
  if (isVehicleArray(results)) {
    const filtered = filterByTerm(results);
    return (
      <div>
        {filtered.map(vehicle => (
          <div className='grid my-2 p-4 rounded bg-white gap-2' key={vehicle.name}>
            <Result vehicle={vehicle} />
          </div>
        ))}
      </div>
    );
  }

  return <p>Unknown data type</p>;
};
