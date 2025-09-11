import axios from 'axios';
import validatedData from '../hooks/useValidateData';
import type { TResults } from '../models/result';

export async function api(category: string | null) {
  if (!category) return null;

  try {
    const { data } = await axios.get<TResults>(`https://swapi.info/api/${category}`);
    return validatedData(data);
  } catch (err: any) {
    console.error(err);
    return null;
  }
}
