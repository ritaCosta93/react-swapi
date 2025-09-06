import axios from 'axios';
import { useEffect, useState } from 'react';
import type { TFilms } from '../models/films';
import type { TPeople } from '../models/people';
import type { TPlanets } from '../models/planets';
import type { TSpecies } from '../models/species';
import type { TStarship } from '../models/starships';
import type { TVehicle } from '../models/vehicles';

export const useAPI = <T = any[]>(category: string) => {
  const [data, setData] = useState<T>([] as unknown as T);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [films, setFilms] = useState<TFilms>([]);
  const [people, setPeople] = useState<TPeople>([]);
  const [planets, setPlanets] = useState<TPlanets>([]);
  const [species, setSpecies] = useState<TSpecies>([]);
  const [vehicles, setVehicles] = useState<TVehicle>([]);
  const [starships, setStarships] = useState<TStarship>([]);

  const handleData = (category: string, data: []) => {
    switch (category) {
      case 'films':
        setFilms(data);
        break;
      case 'people':
        setPeople(data);
        break;
      case 'planets':
        setPlanets(data);
        break;
      case 'species':
        setSpecies(data);
        break;
      case 'vehicles':
        setVehicles(data);
        break;
      case 'starship':
        setStarships(data);
        break;
    }
  };

  useEffect(() => {
    if (!category) return;
    setLoading(true);
    setError(null);
    axios
      .get(`https://swapi.info/api/${category}`)
      .then(({ data }) => {
        handleData(category, data);
      })
      .catch((err: any) => {
        setError(err?.message || String(err));
      })
      .finally(() => setLoading(false));
  }, [category]);

  return { data, loading, error, films, people, planets, species, vehicles, starships };
};
