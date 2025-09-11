import type { SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import type { TResults } from '../models/result';
import { api } from '../services/api';

export function useAPI(category: string | null) {
  const [data, setData] = useState<TResults | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) return;

    setLoading(true);
    setError(null);

    api(category)
      .then((res: SetStateAction<TResults | null>) => setData(res))
      .catch((err: { message: any }) => setError(err?.message || String(err)))
      .finally(() => setLoading(false));
  }, [category]);

  return { data, loading, error };
}
