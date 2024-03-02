import ConverterBlock from '@/app/components/organisms/ConverterBlock';
import getExchangeRate from '../../../../../actions/getExchangeRate';

export default async function Converter() {
  const ss = await getExchangeRate({ year: 2024, month: 3, day: 1 });

  return (
    <div className=' bg-pageBg w-full min-h-fit py-[80px] flex items-center justify-center'>
      <ConverterBlock />
    </div>
  );
}
