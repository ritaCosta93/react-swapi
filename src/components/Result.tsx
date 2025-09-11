import type { IFilm } from '../models/films';
import type { IPeople } from '../models/people';
import type { IPlanet } from '../models/planets';
import type { ISpecies } from '../models/species';
import type { IStarship } from '../models/starships';
import type { IVehicle } from '../models/vehicles';

interface ResultProps {
  film?: IFilm;
  planet?: IPlanet;
  person?: IPeople;
  species?: ISpecies;
  starship?: IStarship;
  vehicle?: IVehicle;
}

export const Result = ({ film, planet, person, species, starship, vehicle }: ResultProps) => {
  return (
    <div className='grid grid-cols-2'>
      {film ? (
        <div key={film.title}>
          <h2>{film.title}</h2>
          <p>Episode {film.episode_id}</p>
          <p>Directed by {film.director}</p>
          <p>Produced by {film.producer}</p>
        </div>
      ) : (
        <div />
      )}

      {planet ? (
        <div key={planet.name}>
          <h2>{planet.name}</h2>
          <p>Climate: {planet.climate}</p>
          <p>Population: {planet.population}</p>
          <p>Diameter: {planet.diameter}</p>
        </div>
      ) : (
        <div />
      )}

      {species ? (
        <div key={species.name}>
          <h2>{species.name}</h2>
          <p>Classification: {species.classification}</p>
          <p>Designation: {species.designation}</p>
          <p>Language: {species.language}</p>
        </div>
      ) : (
        <div />
      )}

      {person ? (
        <div key={person.name}>
          <h2>{person.name}</h2>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Gender: {person.gender}</p>
        </div>
      ) : (
        <div />
      )}

      {starship ? (
        <div key={starship.name}>
          <h2>{starship.name}</h2>
          <p>Model: {starship.model}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          <p>Length: {starship.length}</p>
        </div>
      ) : (
        <div />
      )}

      {vehicle ? (
        <div key={vehicle.name} className='flex flex-col w-24'>
          <h2>{vehicle.name}</h2>
          <p>Model: {vehicle.model}</p>
          <p>Manufacturer: {vehicle.manufacturer}</p>
          <p>Length: {vehicle.length}</p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};
