import type { IFilm } from '../models/films';
import type { IPeople } from '../models/people';
import type { IPlanet } from '../models/planets';
import type { ISpecies } from '../models/species';
import type { IStarship } from '../models/starships';
import type { IVehicle } from '../models/vehicles';

type ResultsProps = {
  data: IFilm[] | IPeople[] | IPlanet[] | ISpecies[] | IStarship[] | IVehicle[] | null;
};

export const Results = ({ data }: ResultsProps) => {
  if (!data) return <p>Invalid data</p>;

  // Film
  if ('title' in data[0]) {
    return (
      <div>
        {(data as IFilm[]).map(film => (
          <div key={film.title}>
            <h2>{film.title}</h2>
            <p>Episode {film.episode_id}</p>
            <p>Directed by {film.director}</p>
          </div>
        ))}
      </div>
    );
  }

  // People
  if ('name' in data[0] && 'height' in data[0]) {
    return (
      <div>
        {(data as IPeople[]).map(person => (
          <div key={person.name}>
            <h2>{person.name}</h2>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Gender: {person.gender}</p>
          </div>
        ))}
      </div>
    );
  }

  // Planet
  if ('name' in data[0] && 'climate' in data[0]) {
    return (
      <div>
        {(data as IPlanet[]).map(planet => (
          <div key={planet.name}>
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Population: {planet.population}</p>
            <p>Diameter: {planet.diameter}</p>
          </div>
        ))}
      </div>
    );
  }

  // Species
  if ('name' in data[0] && 'classification' in data[0]) {
    return (
      <div>
        {(data as ISpecies[]).map(species => (
          <div key={species.name}>
            <h2>{species.name}</h2>
            <p>Classification: {species.classification}</p>
            <p>Designation: {species.designation}</p>
            <p>Language: {species.language}</p>
          </div>
        ))}
      </div>
    );
  }

  // Starship
  if ('name' in data[0] && 'model' in data[0] && 'manufacturer' in data[0]) {
    return (
      <div>
        {(data as IStarship[]).map(starship => (
          <div key={starship.name}>
            <h2>{starship.name}</h2>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Length: {starship.length}</p>
          </div>
        ))}
      </div>
    );
  }

  // Vehicle
  if ('name' in data[0] && 'model' in data[0] && 'vehicle_class' in data[0]) {
    return (
      <div>
        {(data as IVehicle[]).map(vehicle => (
          <div key={vehicle.name}>
            <h2>{vehicle.name}</h2>
            <p>Model: {vehicle.model}</p>
            <p>Manufacturer: {vehicle.manufacturer}</p>
            <p>Vehicle Class: {vehicle.vehicle_class}</p>
          </div>
        ))}
      </div>
    );
  }

  return <p>Unknown data</p>;
};
