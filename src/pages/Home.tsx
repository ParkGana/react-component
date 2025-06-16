import { useState } from 'react';
import TextField from '../components/basic/TextField';
import PasswordField from '../components/basic/PasswordField';
import TextareaField from '../components/basic/TextareaField';
import Checkbox from '../components/basic/Checkbox';
import Radio from '../components/basic/Radio';
import Selectbox from '../components/basic/Selectbox';
import ToggleButton from '../components/basic/ToggleButton';
import RangebarVertical from '../components/animation/RangebarVertical';
import RangebarHorizontal from '../components/animation/RangebarHorizontal';
import CategoryContainer from '../components/layout/CategoryContainer';
import SortableList from '../components/animation/SortableList';
import SwitchSection from '../components/animation/SwitchSection';
import ImagePuzzle from '../components/animation/ImagePuzzle';

const HomePage = () => {
  const [checkbox, setCheckbox] = useState<string[]>([]);
  const [passwordField, setPasswordField] = useState<string>('');
  const [radio, setRadio] = useState<string>('');
  const [selectbox, setSelectbox] = useState<string>('');
  const [textField, setTextField] = useState<string>('');
  const [textareaField, setTextareaField] = useState<string>('');
  const [toggleButton, setToggleButton] = useState<'on' | 'off'>('on');

  const [rangebarHorizontalMin, setRangebarHorizontalMin] = useState<number>(20);
  const [rangebarHorizontalMax, setRangebarHorizontalMax] = useState<number>(80);
  const [rangebarVerticalMin, setRangebarVerticalMin] = useState<number>(20);
  const [rangebarVerticalMax, setRangebarVerticalMax] = useState<number>(80);

  const [sortableList, setSortableList] = useState(
    [...Array(5)].map((_, index) => ({ id: index, label: `${index + 1}` }))
  );

  const handleKeyDown = (value: string) => {
    window.alert(`value : ${value}`);
  };

  const handleCheckbox = (value: string) => {
    setCheckbox(checkbox.includes(value) ? checkbox.filter((item: any) => item !== value) : [...checkbox, value]);
  };

  return (
    <>
      <CategoryContainer category="BASIC">
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
      </CategoryContainer>

      <CategoryContainer category="ANIMATION">
        <ImagePuzzle size={2} />

        <RangebarHorizontal
          range={{ min: 0, max: 100 }}
          value={{ min: rangebarHorizontalMin, max: rangebarHorizontalMax }}
          step={20}
          handleMinChange={setRangebarHorizontalMin}
          handleMaxChange={setRangebarHorizontalMax}
        />

        <RangebarVertical
          range={{ min: 0, max: 100 }}
          value={{ min: rangebarVerticalMin, max: rangebarVerticalMax }}
          step={20}
          handleMinChange={setRangebarVerticalMin}
          handleMaxChange={setRangebarVerticalMax}
        />

        <SortableList data={sortableList} handleSort={setSortableList} />

        <SwitchSection data={[...Array(5)].map((_, index) => ({ id: index, label: `${index + 1}` }))} />
      </CategoryContainer>
    </>
  );
};

export default HomePage;
