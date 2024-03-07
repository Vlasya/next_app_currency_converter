import { CurrencyType, InputValueType, OptionType } from '@/app/types';
import CustomInput from '@/components/atoms/CustomInput';
import CustomSelect from '@/components/atoms/CustomSelect';

interface Props {
  title: string;
  options: OptionType[];

  selectValue: string;
  onChangeSelectValue: (value: string) => void;
  inputValue: number;
  onInputValueChange: (value: number) => void;
}

export default function CurrencyBlock({
  title,
  options,

  selectValue,
  onChangeSelectValue,
  inputValue,
  onInputValueChange,
}: Props) {
  return (
    <div className='flex flex-col'>
      <div className='text-baseColor font-medium text-xl pb-[30px]'>
        {title}
      </div>
      <div className='w-[350px] flex justify-between'>
        <CustomInput
          inputValue={inputValue}
          onInputValueChange={onInputValueChange}
        />
        <CustomSelect
          options={options}
          selectValue={selectValue}
          onChangeSelectValue={onChangeSelectValue}
        />
      </div>
    </div>
  );
}
