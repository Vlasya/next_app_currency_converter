'use client';

import { DateType } from '@/app/types';

interface Props {
  value: string;
  lastWeekDate?: string;
  maxValue: string;
  onChange: (newDate: string) => void;
}

export default function CustomDatePicker({
  value,
  lastWeekDate,
  maxValue,
  onChange,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <input
      className='cursor-pointer block w-[220px] h-[60px] p-2 text-baseColor text-center text-xl font-semibold border border-inputBorder rounded bg-gray-50  focus:border-focusBorder'
      type='date'
      value={value}
      min={lastWeekDate}
      max={maxValue}
      onChange={(e) => handleChange(e)}
    />
  );
}
