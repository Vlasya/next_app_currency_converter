export default function CustomDatePicker() {
  return (
    <input
      className='cursor-pointer block w-[220px] h-[60px] p-2 text-baseColor text-center text-xl font-semibold border border-inputBorder rounded bg-gray-50  focus:border-focusBorder'
      type='date'
      value='2018-06-12T19:30'
      min='2018-06-07T00:00'
      max='2018-06-14T00:00'
    />
  );
}
