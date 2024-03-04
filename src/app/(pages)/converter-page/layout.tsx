import bg_image from './images/converter_bg_img.png';
import cars_image from './images/card_img.png';
import CustomLink from '@/app/components/molecules/CustomLink';
import Image from 'next/image';
import { Routs } from '@/app/constants';

export default function ConverterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-full'>
      <div
        className='w-full h-[400px] flex justify-around  items-center  bg-auto bg-no-repeat bg-center '
        style={{ backgroundImage: `url(${bg_image.src})` }}
      >
        <div className='flex flex-col text-lightText '>
          <div className='font-bold text-6xl'>Чіп Чендж</div>
          <div className='py-6 font-medium text-xl'>
            Обмінник валют - навчальний
          </div>
          <CustomLink href={Routs.Converter} text='Конвертер валют' />
        </div>
        <div className=' flex'>
          <Image src={cars_image} alt='cars' width={340} height={215} />
        </div>
      </div>
      {children}
    </div>
  );
}
