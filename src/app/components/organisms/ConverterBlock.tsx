'use client';
import CurrencyBlock from '@/components/molecules/CurrencyBlock';
import Icon from '@/components/atoms/icon';
import CustomDatePicker from '@/components/atoms/CustomDatePicker';
import Button from '@/components/atoms/Button';
import { useEffect, useState } from 'react';
import { ExchangeData } from '@/app/types';
import { formatDate, getLastWeeksDate, getTodayDate } from '@/helpers/date';
import { getExchangeRateData } from '@/actions/getExchangeRate';
import { convertToSelectOptions } from '@/helpers/common';

interface Props {
  currentExchangeData: ExchangeData | null;
}

export default function ConverterBlock({ currentExchangeData }: Props) {
  const [exchangeData, setExchangeData] = useState<ExchangeData | null>(
    currentExchangeData
  );
  const options = convertToSelectOptions(exchangeData?.conversion_rates!);

  const [selectedDate, setSelectedDate] = useState(getTodayDate());

  const [initialCurrency, setInitialCurrency] = useState<string>(
    currentExchangeData?.base_code ?? 'UAH'
  );
  const [targetCurrency, setTargetCurrency] = useState<string>('USD');

  const [exchangeRate, setExchangeRate] = useState(
    exchangeData?.conversion_rates['USD']
  );

  const [initialInputValue, setInitialInputValue] = useState<number>(1);
  const [targetInputValue, setTargetInputValue] = useState<number>(
    exchangeRate!
  );

  const currentDate = getTodayDate().split('-');

  const onUpdateExchangeDate = () => {
    getExchangeRateData({
      year: +currentDate[0],
      month: +currentDate[1] - 1,
      day: +currentDate[2],
      initialCurrency: initialCurrency,
    }).then((data) => {
      setExchangeData(data);
      setSelectedDate(
        formatDate({
          year: data?.year,
          month: data?.month,
          day: data?.day,
        })
      );
      setExchangeRate(data.conversion_rates[targetCurrency]);
      setTargetInputValue(
        initialInputValue * data.conversion_rates[targetCurrency]!
      );
    });
  };

  useEffect(() => {
    setExchangeRate(exchangeData?.conversion_rates[targetCurrency]);
    setInitialInputValue(targetInputValue / exchangeRate!);
  }, [targetCurrency]);

  const handleDateChange = (newDate: string) => {
    setSelectedDate(newDate);
  };

  useEffect(() => {
    if (selectedDate) {
      onUpdateExchangeDate();
    }
  }, [selectedDate, initialCurrency]);

  const handleInitialInputValueChange = (value: number) => {
    setInitialInputValue(value);
    const convertedAmount = value * exchangeRate!;

    setTargetInputValue(+convertedAmount.toFixed(2));
  };
  const handleTargetInputValueChange = (value: number) => {
    setTargetInputValue(value);
    const convertedAmount = value / exchangeRate!;
    setInitialInputValue(+convertedAmount.toFixed(2));
  };

  const handleInitialCurrencyChange = (currency: string) => {
    setInitialCurrency(currency);
  };

  const handleTargetCurrencyChange = (currency: string) => {
    setTargetCurrency(currency);
    setExchangeRate(exchangeData?.conversion_rates[currency]);
  };

  return (
    <div className='bg-white h-[400px] min-w-[960px] p-[50px] flex flex-col justify-center'>
      <div className='text-blackText font-bold text-[40px] leading-[56px] pb-[70px]'>
        Конвертер валют
      </div>
      <div className='flex justify-between items-end'>
        <CurrencyBlock
          title='В мене є:'
          options={options}
          selectValue={initialCurrency}
          onChangeSelectValue={handleInitialCurrencyChange}
          inputValue={+initialInputValue.toFixed(2)}
          onInputValueChange={handleInitialInputValueChange}
        />
        <div className='mb-[20px]'>
          <Icon src='/icon-arrows.jpg' width={22} height={22} />
        </div>
        <CurrencyBlock
          title='Хочу придбати:'
          options={options}
          selectValue={targetCurrency}
          onChangeSelectValue={handleTargetCurrencyChange}
          inputValue={+targetInputValue.toFixed(2)}
          onInputValueChange={handleTargetInputValueChange}
        />
      </div>

      <div className='flex justify-between mt-[20px]'>
        <CustomDatePicker
          value={selectedDate}
          lastWeekDate={getLastWeeksDate()}
          maxValue={getTodayDate()}
          onChange={handleDateChange}
        />
        <Button
          isBlueBtn
          text='Зберегти результат'
          onClick={onUpdateExchangeDate}
        />
      </div>
    </div>
  );
}
