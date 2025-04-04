import { TFieldData } from "../Common/TFieldData";

export type TTermAddForm = {
  annualIncome: TFieldData;
  smoke: "Y" | "N" | string;
  gender: { value: "" | "M" | "F" | string; warning: boolean };
  age: TFieldData;
  pincode: TFieldData;
  name: TFieldData;
  mobile: TFieldData;
  email?: TFieldData;
};

export type TTermAddForm1 = {
  annualIncome: TFieldData;
  smoke: "Y" | "N" | string;
  gender: { value: "" | "M" | "F" | string; warning: boolean };
  age: TFieldData;
  pincode: TFieldData;
  name: TFieldData;
  mobile: TFieldData;
};

export type TTermAddFormResponse = {
  num_brands_listed: number;
  num_plans_listed: number;
  quote_no: string;
  lead_id: string;
  module: string;
  insurance_type: string;
  sum_assured: string;
  pincode: string;
  annual_income: string;
  name: string;
  email: string;
  mobile: string;
  city: string;
  state: string;
  max_sum_assured: number;
  gender: string;
  smoker: string;
  term: string;
  age: string;
  dob_date: string;
  dob_month: string;
  dob_year: string;
  cover_upto: number;
  frequency: number;
  income: string;
  cover_pay_upto: string;
  policy_covers: number;
  monthly_payout: number;
  income_period: number;
  increasing_level: number;
  utm_medium: string;
  utm_source: string;
};

export type TTermAddFormResponseAPI = {
  quote_no: string;
  module: string;
  insurance_type: string;
  sum_assured: string;
  pincode: string;
  annual_income: string;
  name: string;
  email: string;
  mobile: string;
  city: string;
  state: string;
  max_sum_assured: string;
  gender: string;
  smoker: string;
  term: string;
  age: string;
  dob_date: string;
  dob_month: string;
  dob_year: string;
  cover_upto: string;
  frequency: string;
  income: string;
  cover_pay_upto: string;
  policy_covers: string;
  monthly_payout: string;
  income_period: string;
};
