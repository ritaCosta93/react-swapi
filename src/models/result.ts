import type { IFilm } from './films';
import type { IPeople } from './people';
import type { IPlanet } from './planets';
import type { ISpecies } from './species';
import type { IStarship } from './starships';
import type { IVehicle } from './vehicles';

export type TResult = IFilm | IPlanet | ISpecies | IPeople | IStarship | IVehicle;
export type TResults = TResult[];
