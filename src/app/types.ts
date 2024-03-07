export interface OptionType {
  label: string;
  value: string;
}

export interface DateType {
  year: number;
  month: number;
  day: number;
}

export interface ConversionRates {
  [currencyCode: string]: number;
}

export interface ExchangeData {
  base_code: string;
  conversion_rates: ConversionRates;
  day: number;
  month: number;
  year: number;
}

export interface CurrencyType {
  from: string;
  to: string;
}

export interface InputValueType {
  from: number;
  to: number;
}

export interface CalculateType {
  initialCurrency: string;
  rates: ExchangeData;
  initialInputValue: number;
  targetInputValue: number;
  isInitialChanged?: boolean;
  isTargetChanged?: boolean;
}
