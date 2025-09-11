import type { IFilm } from '../models/films';
import type { IPeople } from '../models/people';
import type { IPlanet } from '../models/planets';
import type { TResult, TResults } from '../models/result';
import type { ISpecies } from '../models/species';
import type { IStarship } from '../models/starships';
import type { IVehicle } from '../models/vehicles';

export const isFilm = (film: TResult): film is IFilm => {
  return !!film && typeof (film as IFilm).title === 'string' && typeof (film as IFilm).episode_id === 'number' && typeof (film as IFilm).director === 'string';
};

export function isPeople(person: TResult): person is IPeople {
  return (
    !!person &&
    typeof (person as IPeople).name === 'string' &&
    typeof (person as IPeople).height === 'string' &&
    typeof (person as IPeople).mass === 'string' &&
    typeof (person as IPeople).gender === 'string'
  );
}

export function isPlanet(planet: TResult): planet is IPlanet {
  return (
    !!planet &&
    typeof (planet as IPlanet).name === 'string' &&
    typeof (planet as IPlanet).climate === 'string' &&
    typeof (planet as IPlanet).diameter === 'string' &&
    typeof (planet as IPlanet).population === 'string'
  );
}

export function isSpecies(species: TResult): species is ISpecies {
  return (
    !!species &&
    typeof (species as ISpecies).name === 'string' &&
    typeof (species as ISpecies).classification === 'string' &&
    typeof (species as ISpecies).designation === 'string' &&
    typeof (species as ISpecies).language === 'string'
  );
}

export function isStarship(starship: TResult): starship is IStarship {
  return (
    !!starship &&
    typeof (starship as IStarship).name === 'string' &&
    typeof (starship as IStarship).model === 'string' &&
    typeof (starship as IStarship).manufacturer === 'string'
  );
}

export function isVehicle(vehicle: TResult): vehicle is IVehicle {
  return (
    !!vehicle &&
    typeof (vehicle as IVehicle).name === 'string' &&
    typeof (vehicle as IVehicle).model === 'string' &&
    typeof (vehicle as IVehicle).manufacturer === 'string' &&
    typeof (vehicle as IVehicle).vehicle_class === 'string'
  );
}

export const isFilmArray = (arr: TResults): arr is IFilm[] => Array.isArray(arr) && arr.every(isFilm);
export const isPeopleArray = (arr: TResults): arr is IPeople[] => Array.isArray(arr) && arr.every(isPeople);
export const isPlanetArray = (arr: TResults): arr is IPlanet[] => Array.isArray(arr) && arr.every(isPlanet);
export const isSpeciesArray = (arr: TResults): arr is ISpecies[] => Array.isArray(arr) && arr.every(isSpecies);
export const isStarshipArray = (arr: TResults): arr is IStarship[] => Array.isArray(arr) && arr.every(isStarship);
export const isVehicleArray = (arr: TResults): arr is IVehicle[] => Array.isArray(arr) && arr.every(isVehicle);
