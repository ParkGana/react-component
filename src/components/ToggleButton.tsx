import ComponentContainer from './layout/ComponentContainer';
import clsx from 'clsx';

type ToggleButtonProps = {
  value: string;
  handleToggle: (value: 'on' | 'off') => void;
};

const ToggleButton = ({ value, handleToggle }: ToggleButtonProps) => {
  return (
    <ComponentContainer label="TOGGLE BUTTON">
      <div
        className={clsx(
          'w-fit flex items-center rounded-full p-1.5 mx-auto cursor-pointer',
          value === 'on' ? 'justify-end bg-gray-900' : 'justify-start bg-gray-300',
          value === 'on' && 'flex-row-reverse'
        )}
        onClick={() => handleToggle(value === 'on' ? 'off' : 'on')}
      >
        <div className="w-6 h-6 rounded-full bg-white" />
        <p className="w-12 text-body text-white text-center">{value.toLocaleUpperCase()}</p>
      </div>
    </ComponentContainer>
  );
};

export default ToggleButton;
