import { useState } from 'react';
import TextField from '../components/TextField';
import PasswordField from '../components/PasswordField';
import TextareaField from '../components/TextareaField';
import Checkbox from '../components/Checkbox';
import Radio from '../components/Radio';
import Selectbox from '../components/Selectbox';
import ToggleButton from '../components/ToggleButton';

const HomePage = () => {
  const [checkbox, setCheckbox] = useState<string[]>([]);
  const [passwordField, setPasswordField] = useState<string>('');
  const [radio, setRadio] = useState<string>('');
  const [selectbox, setSelectbox] = useState<string>('');
  const [textField, setTextField] = useState<string>('');
  const [textareaField, setTextareaField] = useState<string>('');
  const [toggleButton, setToggleButton] = useState<'on' | 'off'>('on');

  const handleKeyDown = (value: string) => {
    window.alert(`value : ${value}`);
  };

  const handleCheckbox = (value: string) => {
    setCheckbox(checkbox.includes(value) ? checkbox.filter((item: any) => item !== value) : [...checkbox, value]);
  };

  return (
    <>
      <Checkbox values={checkbox} options={['A', 'B', 'C', 'D']} handleSelect={handleCheckbox} />

      <PasswordField
        value={passwordField}
        placeholder="비밀번호를 입력해 주세요."
        handleChange={setPasswordField}
        handleKeyDown={handleKeyDown}
      />

      <Radio value={radio} options={['A', 'B', 'C', 'D']} handleSelect={setRadio} />

      <Selectbox
        value={selectbox}
        options={['A', 'B', 'C', 'D']}
        placeholder="옵션을 선택해 주세요."
        handleSelect={setSelectbox}
      />

      <TextField
        value={textField}
        placeholder="값을 입력해 주세요."
        handleChange={setTextField}
        handleKeyDown={handleKeyDown}
      />

      <TextareaField
        rowCount={2}
        value={textareaField}
        placeholder="내용을 입력해 주세요."
        handleChange={setTextareaField}
      />

      <ToggleButton value={toggleButton} handleToggle={setToggleButton} />
    </>
  );
};

export default HomePage;
