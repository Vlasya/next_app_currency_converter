import ConverterBlock from '@/app/components/organisms/ConverterBlock';
import { getExchangeRateData } from '@/actions/getExchangeRate';
import { getTodayDate } from '@/helpers/date';

export default async function Converter() {
   const currentDate = getTodayDate().split('-');

   const exchangeData = await getExchangeRateData({
     year: +currentDate[0],
     month: +currentDate[1],
     day: +currentDate[2],
   });

  return (
    <div className=' bg-pageBg w-full min-h-fit py-[80px] flex items-center justify-center'>
      <ConverterBlock currentExchangeData={exchangeData} />
    </div>
  );
}
