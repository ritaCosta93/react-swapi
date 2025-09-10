import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAPI = <T = any[]>(category: string | null) => {
  const [data, setData] = useState<T>([] as unknown as T);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) return;
    setLoading(true);
    setError(null);
    axios
      .get(`https://swapi.info/api/${category}`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err: any) => {
        setError(err?.message || String(err));
      })
      .finally(() => setLoading(false));
  }, [category]);

  return { data, loading, error };
};
