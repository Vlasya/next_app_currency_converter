'use client';

import { OptionType } from '@/app/types';

interface Props {
  options: OptionType[];
  selectValue: string;
  onChangeSelectValue: (value: string) => void;
}

export default function CustomSelect({
  options,
  selectValue,
  onChangeSelectValue,
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
   
    onChangeSelectValue(event.target.value);
  };

  return (
    <div className='m-h-[200px] overflow-scroll'>
      <select
      value={selectValue}
        // defaultValue={selectValue}
        onChange={handleChange}
        className='cursor-pointer form-select block w-[120px] h-[60px] text-baseColor text-xl font-semibold border border-inputBorder rounded bg-gray-50  focus:border-focusBorder  p-4 appearance-none bg-no-repeat '
      >
        {options?.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
