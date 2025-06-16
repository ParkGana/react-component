import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import ComponentContainer from '../layout/ComponentContainer';

type CheckboxProps = {
  values: string[];
  options: string[];
  handleSelect: (value: string) => void;
};

const Checkbox = ({ values, options, handleSelect }: CheckboxProps) => {
  return (
    <ComponentContainer label="CHECKBOX">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {options.map((option) => (
          <React.Fragment key={option}>
            <input type="checkbox" className="hidden" />
            <label
              htmlFor={option}
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {values.includes(option) ? <MdCheckBox size={20} /> : <MdCheckBoxOutlineBlank size={20} />}
              <p className="text-body">{option}</p>
            </label>
          </React.Fragment>
        ))}
      </div>
    </ComponentContainer>
  );
};

export default Checkbox;
