import { REVALIDATE_TAGS } from '@/app/constants';

interface Props {
  baseCurrency?: string;
  year: number;
  month: number;
  day: number;
}

export default async function getExchangeRate({
  baseCurrency = 'UAH',
  year,
  month,
  day,
}: Props) {
  const res = await fetch(
    `https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGERATE_API_KEY}/history/${baseCurrency}/${year}/${month}/${day}`,
    { next: { tags: [REVALIDATE_TAGS.exchangeRate] } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}