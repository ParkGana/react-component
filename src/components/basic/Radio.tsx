import React from 'react';
import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked } from 'react-icons/md';
import ComponentContainer from '../layout/ComponentContainer';

type RadioProps = {
  value: string;
  options: string[];
  handleSelect: (value: string) => void;
};

const Radio = ({ value, options, handleSelect }: RadioProps) => {
  return (
    <ComponentContainer label="RADIO">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {options.map((option) => (
          <React.Fragment key={option}>
            <input className="hidden" type="radio" />
            <label
              className="flex items-center gap-1 cursor-pointer"
              htmlFor={option}
              onClick={() => handleSelect(option)}
            >
              {value === option ? (
                <MdOutlineRadioButtonChecked size={20} />
              ) : (
                <MdOutlineRadioButtonUnchecked size={20} />
              )}
              <p className="text-body">{option}</p>
            </label>
          </React.Fragment>
        ))}
      </div>
    </ComponentContainer>
  );
};

export default Radio;
