import clsx from 'clsx';
import ComponentContainer from './layout/ComponentContainer';

type TextFieldProps = {
  value: string;
  placeholder?: string;
  handleChange: (value: string) => void;
  handleKeyDown: (value: string) => void;
};

const TextField = ({ value, placeholder, handleChange, handleKeyDown }: TextFieldProps) => {
  /* Enter 키 입력 */
  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && handleKeyDown(value);
  };

  return (
    <ComponentContainer label="TEXT FIELD">
      <input
        className={clsx(
          'w-full text-body rounded-md border-2 border-gray-400 p-3',
          'focus:border-gray-900 focus:outline-none'
        )}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handlePressEnter}
      />
    </ComponentContainer>
  );
};

export default TextField;
