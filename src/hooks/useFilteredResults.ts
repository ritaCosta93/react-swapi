import { useMemo } from 'react';
import { useStore } from '../hooks/useStore';

import type { IFilm } from '../models/films';
import type { IPeople } from '../models/people';
import type { IPlanet } from '../models/planets';
import type { ISpecies } from '../models/species';
import type { IStarship } from '../models/starships';
import type { IVehicle } from '../models/vehicles';

import { isFilmArray, isPeopleArray, isPlanetArray, isSpeciesArray, isStarshipArray, isVehicleArray } from '../guards/resultsGuard';

export function useFilteredResults(): IFilm[] | IPeople[] | IPlanet[] | ISpecies[] | IStarship[] | IVehicle[] | null {
  const { results, searchTerm } = useStore();

  return useMemo(() => {
    if (!results) return null;
    const term = searchTerm?.trim().toLowerCase();

    if (isFilmArray(results)) {
      return term ? results.filter(film => film.title.toLowerCase().includes(term)) : results;
    }

    if (isPeopleArray(results)) {
      return term ? results.filter(person => person.name.toLowerCase().includes(term)) : results;
    }

    if (isPlanetArray(results)) {
      return term ? results.filter(planet => planet.name.toLowerCase().includes(term)) : results;
    }

    if (isSpeciesArray(results)) {
      return term ? results.filter(species => species.name.toLowerCase().includes(term)) : results;
    }

    if (isStarshipArray(results)) {
      return term ? results.filter(starship => starship.name.toLowerCase().includes(term)) : results;
    }

    if (isVehicleArray(results)) {
      return term ? results.filter(vehicle => vehicle.name.toLowerCase().includes(term)) : results;
    }

    return null;
  }, [results, searchTerm]);
}
