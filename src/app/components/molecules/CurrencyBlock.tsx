import { OptionType } from '@/app/types';
import CustomInput from '@/components/atoms/CustomInput';
import CustomSelect from '@/components/atoms/CustomSelect';

interface Props {
  title: string;
}

const options: OptionType[] = [
  {
    label: 'UA',
    value: 'UA',
  },
  {
    label: 'USD',
    value: 'USD',
  },
];

export default function CurrencyBlock({ title }: Props) {
  return (
    <div className='flex flex-col'>
      <div className='text-baseColor font-medium text-xl pb-[30px]'>
        {title}
      </div>
      <div className='w-[350px] flex justify-between'>
        <CustomInput value={0} />
        <CustomSelect options={options} />
      </div>
    </div>
  );
}
