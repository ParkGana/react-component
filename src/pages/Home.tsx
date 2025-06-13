import { useState } from 'react';
import TextField from '../components/TextField';

const HomePage = () => {
  const [textField, setTextField] = useState<string>('');

  const handleKeyDown = (value: string) => {
    window.alert(`value : ${value}`);
  };

  return (
    <>
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
