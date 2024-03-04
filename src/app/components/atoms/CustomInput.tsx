interface Props {
  value: number;
}

export default function CustomInput({}: Props) {
  return (
    <input className='block w-[220px] h-[60px] p-2 text-baseColor text-center text-xl font-semibold border border-inputBorder rounded bg-gray-50  focus:border-focusBorder' />
  );
}
