type SearchOptionsProps = {
  selectedOption: string | null;
  onChange: (option: string | null) => void;
};

export const SearchOptions = ({ selectedOption, onChange }: SearchOptionsProps) => {
  const options = ['films', 'people', 'planets', 'species', 'vehicles', 'starships'];

  const handleOption = (option: string) => {
    onChange(option);
  };

  return (
    <div className='flex flex-row gap-5 justify-center text-white' role='radiogroup'>
      {options.map((option, index) => (
        <label key={index} className='flex items-center gap-1 active:text-yellow-500'>
          <input
            type='radio'
            name='option'
            value={option}
            checked={selectedOption === option}
            onChange={e => handleOption(e.target.value)}
            className='px-2 shadow-md focus:ring-2 focus:ring-yellow-500'
          />
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </label>
      ))}
    </div>
  );
};
