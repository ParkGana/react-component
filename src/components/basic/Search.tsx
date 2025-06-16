import { IoSearch } from 'react-icons/io5';
import ComponentContainer from '../layout/ComponentContainer';
import clsx from 'clsx';

type SearchProps = {
  value: string;
  debouncedValue: string;
  placeholder?: string;
  handleChange: (value: string) => void;
};

const Search = ({ value, debouncedValue, placeholder, handleChange }: SearchProps) => {
  return (
    <ComponentContainer label="SEARCH">
      <div className="flex flex-col gap-2">
        <div className="relative w-full">
          <input
            className={clsx(
              'w-full text-body rounded-md border-2 border-gray-400 p-3 pr-10',
              'focus:border-gray-900 focus:outline-none'
            )}
            value={value}
            placeholder={placeholder}
            autoComplete="off"
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
            <IoSearch size={20} />
          </div>
        </div>
        <p className="text-body px-3">
          <span className="font-bold">입력 값 : </span>
          {debouncedValue}
        </p>
      </div>
    </ComponentContainer>
  );
};

export default Search;
