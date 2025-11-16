import { getFormattedDate, getWeekday } from '../utils/date';

export default function DateDisplay() {
  const date = getFormattedDate();
  const weekday = getWeekday();

  return (
    <div>
      <h1 className="mb-4 text-6xl font-bold text-orange-500">
        {date} {weekday}
      </h1>
    </div>
  );
}

