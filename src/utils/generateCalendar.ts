import type dayjs from 'dayjs';

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
