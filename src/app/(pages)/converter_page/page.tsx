import CustomLink from '@/app/components/molecules/customLink';
import { Routs } from '@/app/constants';
import Image from 'next/image';
import converter_page_img from './images/converter_img.png';

export default function Converter() {
  return (
    <div className='w-full py-[120px] flex justify-around h=[555px] '>
      <div className='flex flex-col '>
        <div className='text-blackText font-bold text-4xl'>
          Конвертер валют{' '}
        </div>
        <div className=' text-baseColor py-6 font-normal text-sm max-w-[360px]'>
          Переважна діяльність банківської групи за останні чотири звітні
          квартали становить 50 і більше відсотків.
        </div>
        <CustomLink
          href={Routs.Converter}
          text='Конвертувати валюту'
          textColor='lightText'
          bgColor='blueBg'
        />
      </div>
      <div className='flex'>
        <Image src={converter_page_img} alt='cars' width={436} height={314} />
      </div>
    </div>
  );
}
