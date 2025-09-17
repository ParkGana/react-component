import ComponentContainer from '../layout/ComponentContainer';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const Time = () => {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => setTime(dayjs()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ComponentContainer label="TIME">
      <p className="text-body text-center">{time.format('YYYY년 MM월 DD일 HH시 mm분 ss초')}</p>
    </ComponentContainer>
  );
};

export default Time;
