import { useState } from 'react';
import TextField from '../components/TextField';
import PasswordField from '../components/PasswordField';

const HomePage = () => {
  const [passwordField, setPasswordField] = useState<string>('');
  const [textField, setTextField] = useState<string>('');

  const handleKeyDown = (value: string) => {
    window.alert(`value : ${value}`);
  };

  return (
    <>
      <PasswordField
        value={passwordField}
        placeholder="비밀번호를 입력해 주세요."
        handleChange={setPasswordField}
        handleKeyDown={handleKeyDown}
      />

      <TextField
        value={textField}
        placeholder="값을 입력해 주세요."
        handleChange={setTextField}
        handleKeyDown={handleKeyDown}
      />
    </>
  );
};

export default HomePage;
