'use client';

interface Props {
  inputValue: number;
  onInputValueChange: (value: number) => void;
}

export default function CustomInput({ inputValue, onInputValueChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputValueChange(+e.target.value);
  };
  return (
    <input
      type='number'
      value={inputValue}
      onChange={handleChange}
      className='block w-[220px] h-[60px] p-2 text-baseColor text-center text-xl font-semibold border border-inputBorder rounded bg-gray-50  focus:border-focusBorder'
    />
  );
}
