import ConverterBlock from '@/app/components/organisms/ConverterBlock';
import { getExchangeRateData } from '@/actions/getExchangeRate';
import { getTodayDate } from '@/helpers/date';
import HistoryBlock from '@/app/components/organisms/HistoryBlock';

export default async function Converter() {
  const currentDate = getTodayDate().split('-');

  const exchangeData = await getExchangeRateData({
    year: +currentDate[0],
    month: +currentDate[1],
    day: +currentDate[2],
  });

  return (
    <div className='flex flex-col w-full'>
      <div className=' bg-pageBg w-full  min-h-fit py-[80px] flex items-center justify-center'>
        <ConverterBlock currentExchangeData={exchangeData} />
      </div>
      <div className='bg-white h-[400px] min-w-[960px] p-[50px] flex items-center justify-center'>
        <HistoryBlock />
      </div>
    </div>
  );
}
