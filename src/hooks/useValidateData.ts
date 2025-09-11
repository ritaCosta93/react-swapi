import { isFilm, isPeople, isPlanet, isSpecies, isStarship } from '../guards/resultsGuard';
import type { IFilm } from '../models/films';
import type { IPeople } from '../models/people';
import type { IPlanet } from '../models/planets';
import type { TResults } from '../models/result';
import type { ISpecies } from '../models/species';
import type { IStarship } from '../models/starships';

export default function validatedData(data: TResults): IFilm[] | IPeople[] | IPlanet[] | ISpecies[] | IStarship[] | null {
  if (!Array.isArray(data)) return null;

  if (data.every(isFilm)) return data;
  if (data.every(isPeople)) return data;
  if (data.every(isPlanet)) return data;
  if (data.every(isSpecies)) return data;
  if (data.every(isStarship)) return data;

  return null;
}
