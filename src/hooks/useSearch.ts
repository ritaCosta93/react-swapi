export const useSearch = (option: string | null, term: string | null) => {
  if (option) console.log('Option:', option);
  if (term) console.log('Search term:', term);
};
