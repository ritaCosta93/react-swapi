import type { IFilm } from '../models/films';
import type { IPeople } from '../models/people';
import type { IPlanet } from '../models/planets';
import type { ISpecies } from '../models/species';
import type { IStarship } from '../models/starships';
import type { IVehicle } from '../models/vehicles';

export function isFilm(obj: any): obj is IFilm {
  return obj && typeof obj.title === 'string' && typeof obj.episode_id === 'number' && typeof obj.director === 'string';
}

export function isPeople(obj: any): obj is IPeople {
  return obj && typeof obj.name === 'string' && typeof obj.height === 'string' && typeof obj.mass === 'string' && typeof obj.gender === 'string';
}

export function isPlanet(obj: any): obj is IPlanet {
  return obj && typeof obj.name === 'string' && typeof obj.climate === 'string' && typeof obj.diameter === 'string' && typeof obj.population === 'string';
}

export function isSpecies(obj: any): obj is ISpecies {
  return (
    obj && typeof obj.name === 'string' && typeof obj.classification === 'string' && typeof obj.designation === 'string' && typeof obj.language === 'string'
  );
}

export function isStarship(obj: any): obj is IStarship {
  return obj && typeof obj.name === 'string' && typeof obj.model === 'string' && typeof obj.manufacturer === 'string';
}

export function isVehicle(obj: any): obj is IVehicle {
  return obj && typeof obj.name === 'string' && typeof obj.model === 'string' && typeof obj.manufacturer === 'string' && typeof obj.vehicle_class === 'string';
}
