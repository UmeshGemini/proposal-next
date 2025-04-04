import { TFieldData } from "../Common/TFieldData";

export interface medical_question_field_data {
  code: string;
  title: string;
  value: any;
  warning: boolean;
  column?: number;
  field_type: "textField" | "datePicker" | "dropdown";
  numbers_only: boolean;
}

export interface TQuestion {
  icon_class: string;
  code: string;
  title: string;
  description?: string;
  status: boolean;
  hide_toggle_button?: boolean;
  field_data?: medical_question_field_data[];
}

export interface main_question {
  main_question: TQuestion;
  sub_question?: TQuestion[];
}

export type previous_policy_details = {
  company_name: TFieldData;
  base_sum_assured: TFieldData;
};

export type previous_policy = {
  main_question_status: boolean;
  details: previous_policy_details[];
  sub_question_one: boolean;
  sub_question_one_remarks: TFieldData;
  sub_question_two: boolean;
  sub_question_two_remarks: TFieldData;
};

export type TTermMedicalQuestionDetails = {
  height_ft: TFieldData;
  height_inches: TFieldData;
  height_cm: TFieldData;
  weight_kg: TFieldData;
  repository_type: TFieldData;
  question: main_question[];
  previous_policy: previous_policy;
};

export type TFormdataTermMedicalQuestionDetails = {
  identification_mark: { value: string; warning: boolean };
  designation: { value: string; warning: boolean };
  business_name: { value: string; warning: boolean };
  occupation_involve_status: boolean;
  occupation_involve_value: string;
  gross_annual_income: { value: string; warning: boolean };
  nature_of_work: { value: string; warning: boolean };
  industry_type: { value: string; warning: boolean };
  workplace_city: { value: string; warning: boolean };
  workplace_address: { value: string; warning: boolean };
};

export type TTermHDFCMedicalQuestionDetails = {
  height_ft: TFieldData;
  height_inches: TFieldData;
  height_cm: TFieldData;
  weight_kg: TFieldData;
  question: main_question[];
  FormdataTermMedicalQuestionDetails: TFormdataTermMedicalQuestionDetails;
};
