import { create } from 'zustand';
import type { TResults } from '../models/result';
import type { TOption, TOptions, TTerm } from '../models/search';
import { api } from '../services/api';

type Store = {
  options: TOptions;
  option: TOption;
  searchTerm: TTerm | null;
  results: TResults | null;
  setOption: (newOption: TOption) => void;
  setSearchTerm: (term: TTerm | null) => void;
  setResults: (results: TResults | null) => void;
  handleOptions: (option: TOption) => Promise<void>;
};

export const useStore = create<Store>(set => ({
  options: ['films', 'people', 'planets', 'species', 'vehicles', 'starships'],
  option: 'films',
  searchTerm: null,
  results: null,

  setOption: newOption => set({ option: newOption }),
  setSearchTerm: newSearchTerm => set({ searchTerm: newSearchTerm }),

  setResults: results => set({ results }),

  handleOptions: async option => {
    try {
      const data = await api(option);
      set({ results: data ?? null });
    } catch (err) {
      console.error('Error fetching data:', err);
      set({ results: null });
    }
  }
}));
