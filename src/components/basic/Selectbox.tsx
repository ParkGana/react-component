import { useEffect, useRef, useState } from 'react';
import ComponentContainer from '../layout/ComponentContainer';
import clsx from 'clsx';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

type SelectboxProps = {
  value: string;
  options: string[];
  placeholder?: string;
  handleSelect: (value: string) => void;
};

const Selectbox = ({ value, options, placeholder, handleSelect }: SelectboxProps) => {
  const selectboxRef = useRef<HTMLDivElement>(null);

  const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false);

  /* 바깥 영역 클릭 시 option 창 닫기 */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectboxRef.current && !selectboxRef.current.contains(e.target as Node)) {
        setIsOpenOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* option 선택 */
  const handleSelectValue = (value: string) => {
    handleSelect(value);
    setIsOpenOptions(false);
  };

  return (
    <ComponentContainer label="SELECTBOX">
      <div ref={selectboxRef} className="relative w-full">
        <div
          className={clsx(
            'flex items-center justify-between gap-1 rounded-md border-2 border-gray-400 p-3 cursor-pointer',
            'focus:border-gray-900 focus:outline-none'
          )}
          onClick={() => setIsOpenOptions(!isOpenOptions)}
        >
          <p className={clsx('text-body truncate', value ? 'text-gray-900' : 'text-gray-500')}>
            {value ? value : placeholder}
          </p>
          {isOpenOptions ? <FaAngleUp size={16} /> : <FaAngleDown size={16} />}
        </div>
        {isOpenOptions && (
          <div className="absolute inset-x-0 z-10 rounded-md border-2 border-gray-400 bg-white overflow-hidden">
            {options.map((option) => (
              <p
                key={option}
                className={clsx(
                  'text-body truncate px-3 py-2 cursor-pointer',
                  option !== value && 'hover:bg-gray-100',
                  option === value && 'font-bold bg-gray-200'
                )}
                onClick={() => handleSelectValue(option)}
              >
                {option}
              </p>
            ))}
          </div>
        )}
      </div>
    </ComponentContainer>
  );
};

export default Selectbox;
