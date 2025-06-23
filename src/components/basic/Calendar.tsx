import { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { generateCalendar } from '../../utils/generateCalendar';
import clsx from 'clsx';
import ComponentContainer from '../layout/ComponentContainer';
import { FaCalendarDays } from 'react-icons/fa6';
dayjs.locale('ko');

type CalendarProps = {
  value: dayjs.Dayjs;
  handleSelect: (value: dayjs.Dayjs) => void;
};

const Calendar = ({ value, handleSelect }: CalendarProps) => {
  const today = dayjs();

  const calendarRef = useRef<HTMLDivElement>(null);

  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(today);

  /* 바깥 영역 클릭하면 option 창 닫기 */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
        setIsOpenCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* 이전 달로 이동 */
  const handleMoveToPrev = () => setCurrentMonth((prev) => prev.subtract(1, 'month'));

  /* 다음 달로 이동 */
  const handleMoveToNext = () => setCurrentMonth((prev) => prev.add(1, 'month'));

  /* 날짜 선택 */
  const handleSelectDate = (date: dayjs.Dayjs) => {
    handleSelect(date);
    setIsOpenCalendar(false);
  };

  return (
    <ComponentContainer label="CALENDAR">
      <div ref={calendarRef} className="relative">
        <div
          className={clsx(
            'flex items-center justify-between gap-1 rounded-md border-2 border-gray-400 p-3 cursor-pointer',
            'focus:border-gray-900 focus:outline-none'
          )}
          onClick={() => setIsOpenCalendar(!isOpenCalendar)}
        >
          <p className={clsx('text-body truncate', value ? 'text-gray-900' : 'text-gray-500')}>
            {value.format('YYYY년 M월 D일')}
          </p>
          <FaCalendarDays size={16} />
        </div>
        {isOpenCalendar && (
          <div className="absolute left-0 z-10 flex flex-col gap-2 w-full text-center select-none rounded-md shadow border bg-white p-3">
            <div className="flex items-center justify-center gap-5 text-caption">
              <button onClick={handleMoveToPrev}>◀</button>
              <span className="text-body font-bold">{currentMonth.format('YYYY . MM')}</span>
              <button onClick={handleMoveToNext}>▶</button>
            </div>

            <div className="grid grid-cols-7">
              {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
                <div
                  key={day}
                  className={clsx(
                    'text-caption font-bold text-center',
                    index % 7 === 0 && 'text-red-500',
                    index % 7 === 6 && 'text-blue-500'
                  )}
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7">
              {generateCalendar(currentMonth).map(({ date, isCurrentMonth }, index) => (
                <div
                  key={index}
                  onClick={() => (isCurrentMonth ? handleSelectDate(date) : undefined)}
                  className={clsx(
                    'text-caption text-center rounded-full transition px-2 py-1 m-1 cursor-pointer',
                    date.isSame(value, 'day') && 'bg-blue-500 text-white',
                    index % 7 === 0 && !date.isSame(value, 'day') && isCurrentMonth && 'text-red-500',
                    index % 7 === 6 && !date.isSame(value, 'day') && isCurrentMonth && 'text-blue-500',
                    !isCurrentMonth && 'text-gray-300',
                    !date.isSame(value, 'day') && isCurrentMonth && 'hover:bg-blue-100'
                  )}
                >
                  {date.date()}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ComponentContainer>
  );
};

export default Calendar;
