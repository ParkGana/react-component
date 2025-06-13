import clsx from 'clsx';
import ComponentContainer from './layout/ComponentContainer';

type TextareaFieldProps = {
  rowCount: number;
  value: string;
  placeholder?: string;
  handleChange: (value: string) => void;
};

const TextareaField = ({ rowCount, value, placeholder, handleChange }: TextareaFieldProps) => {
  return (
    <ComponentContainer label="TEXTAREA FIELD">
      <textarea
        className={clsx(
          'w-full rounded-md border-2 border-gray-400 p-3 resize-none',
          'focus:border-gray-900 focus:outline-none'
        )}
        rows={rowCount}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
    </ComponentContainer>
  );
};

export default TextareaField;
