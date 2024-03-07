'use server';
import { REVALIDATE_TAGS } from '@/app/constants';
import { ExchangeData } from '@/app/types';

interface Props {
  initialCurrency?: string;
  year: number;
  month: number;
  day: number;
}

export const getExchangeRateData = async ({
  initialCurrency = 'UAH',
  year,
  month,
  day,
}: Props): Promise<ExchangeData> => {
  try {
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGERATE_API_KEY}/history/${initialCurrency}/${year}/${month}/${day}`,
      { cache: 'no-store' }
      //   { next: { tags: [REVALIDATE_TAGS.exchangeRate] } }
    );

    return res.json();
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
