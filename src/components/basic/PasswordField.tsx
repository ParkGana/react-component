import { useState } from 'react';
import ComponentContainer from '../layout/ComponentContainer';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import clsx from 'clsx';

type PasswordFieldProps = {
  value: string;
  placeholder?: string;
  handleChange: (value: string) => void;
  handleKeyDown: (value: string) => void;
};

const PasswordField = ({ value, placeholder, handleChange, handleKeyDown }: PasswordFieldProps) => {
  const [isVisibleValue, setIsVisibleValue] = useState<boolean>(false);

  /* Enter 키 입력 */
  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && handleKeyDown(value);
  };

  return (
    <ComponentContainer label="PASSWORD FIELD">
      <div className="relative w-full">
        <input
          className={clsx(
            'w-full text-body rounded-md border-2 border-gray-400 p-3 pr-10',
            'focus:border-gray-900 focus:outline-none'
          )}
          type={isVisibleValue ? 'text' : 'password'}
          value={value}
          placeholder={placeholder}
          autoComplete="off"
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handlePressEnter}
        />
        <div
          className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
          onClick={() => setIsVisibleValue(!isVisibleValue)}
        >
          {isVisibleValue ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
        </div>
      </div>
    </ComponentContainer>
  );
};

export default PasswordField;
