import { ConversionRates, OptionType } from '@/app/types';

export const convertToSelectOptions = (
  records: ConversionRates
): OptionType[] => {
  return Object.keys(records).map((record) => ({
    value: record,
    label: record,
  }));
};
