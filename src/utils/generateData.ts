import axios from 'axios';
import type dayjs from 'dayjs';

/* 캘린더 데이터 생성 */
export const generateCalendar = (month: dayjs.Dayjs) => {
  const startOfMonth = month.startOf('month');
  const startDay = startOfMonth.day();
  const daysInMonth = month.daysInMonth();

  const prevMonth = month.subtract(1, 'month');
  const nextMonth = month.add(1, 'month');
  const prevMonthDays = prevMonth.daysInMonth();

  const calendar: Array<{ date: dayjs.Dayjs; isCurrentMonth: boolean }> = [];

  for (let i = startDay - 1; i >= 0; i--) {
    calendar.push({
      date: prevMonth.date(prevMonthDays - i),
      isCurrentMonth: false
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push({
      date: month.date(i),
      isCurrentMonth: true
    });
  }

  const remaining = 42 - calendar.length;
  for (let i = 1; i <= remaining; i++) {
    calendar.push({
      date: nextMonth.date(i),
      isCurrentMonth: false
    });
  }

  return calendar;
};

/* 날씨 데이터 생성 */
export const generateWeather = async (latitude: number, longitude: number) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    );

    return {
      icon: generateWeatherIcon(res.data.weather[0].id),
      temperature: `${Math.round(res.data.main.temp)}º`
    };
  } catch (e) {
    console.error(e);
  }
};

/* 날씨 아이콘 생성 */
export const generateWeatherIcon = (code: number) => {
  if (code >= 200 && code < 600) return 'weather-rain';
  if (code >= 600 && code < 700) return 'weatger-snow';
  if ((code >= 700 && code < 800) || code === 801) return 'weather-suncloud';
  if (code === 800) return 'weather-sun';
  if (code >= 802) return 'weather-cloud';
  return '';
};
