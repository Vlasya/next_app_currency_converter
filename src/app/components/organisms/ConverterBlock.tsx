'use client';
import CurrencyBlock from '@/components/molecules/CurrencyBlock';
import Icon from '@/components/atoms/Icon';
import CustomDatePicker from '@/components/atoms/CustomDatePicker';
import Button from '@/components/atoms/Button';
import getExchangeRate from '../../../../actions/getExchangeRate';
import { useEffect } from 'react';

export default function ConverterBlock() {
  const ss = getExchangeRate({ year: 2024, month: 3, day: 1 });

  return (
    <div className='bg-white h-[400px] min-w-[960px] p-[50px] flex flex-col justify-center'>
      <div className='text-blackText font-bold text-[40px] leading-[56px] pb-[70px]'>
        Конвертер валют
      </div>
      <div className='flex justify-between items-end'>
        <CurrencyBlock title='В мене є:' />
        <div className='mb-[20px]'>
          <Icon src='/icon-arrows.jpg' width={22} height={22} />
        </div>
        <CurrencyBlock title='Хочу придбати:' />
      </div>

      <div className='flex justify-between mt-[20px]'>
        <CustomDatePicker />
        <Button
          isBlueBtn
          text='Зберегти результат'
          onClick={() => console.log('click')}
        />
      </div>
    </div>
  );
}
