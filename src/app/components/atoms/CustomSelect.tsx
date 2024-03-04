import { OptionType } from '@/app/types';

interface Props {
  options: OptionType[];
}

export default function CustomSelect({ options }: Props) {
  return (
    <select
      className='cursor-pointer form-select block w-[120px] h-[60px] text-baseColor text-xl font-semibold border border-inputBorder rounded bg-gray-50  focus:border-focusBorder  p-4 appearance-none bg-no-repeat'
    >
      {options?.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
