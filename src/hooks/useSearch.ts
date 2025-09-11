import { useEffect } from 'react';
import { useAPI } from '../hooks/useAPI'; // <-- use the hook, not api
import { useStore } from './useStore';

export function useSearch() {
  const { option, setResults } = useStore();
  const { data, loading, error } = useAPI(option);

  useEffect(() => {
    if (data) {
      setResults(data);
    }
  }, [data, setResults]);

  return { data, loading, error };
}
