import { format, sub } from 'date-fns';

const DAY_FORMAT='yyyy-MM-dd'


export function getLastWeeksDate() {
  return format(sub(new Date(), { weeks: 1 }), DAY_FORMAT);
}

export const getTodayDate = () => {
  return format(new Date(), DAY_FORMAT);
};

export const formatDate = ({
  year,
  month,
  day,
}: {
  year: number;
  month: number;
  day: number;
}) => {
  return format(new Date(year, month-1, day), DAY_FORMAT);
};
