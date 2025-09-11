import { useStore } from '../hooks/useStore';

export const SearchOptions = () => {
  const { options, setOption } = useStore();

  return (
    <div className='flex flex-row gap-5 justify-center text-white' role='radiogroup'>
      {options.map((option, index) => (
        <label key={index} className='flex items-center gap-1 active:text-yellow-500'>
          <input
            type='radio'
            name='option'
            value={option}
            onChange={e => setOption(e.target.value)}
            className='px-2 shadow-md focus:ring-2 focus:ring-yellow-500'
          />
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </label>
      ))}
    </div>
  );
};
