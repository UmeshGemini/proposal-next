import { TDropdown } from "../../Common/TDropdown";

export interface medical_question_field_data {
  code: string;
  title: string;
  value: any;
  warning: boolean;
  column?: number;
  field_type: "textField" | "datePicker" | "dropdown";
  numbers_only: boolean;
  dropdown_data: TDropdown[];
}

export type TMemberData = {
  keyName: string;
  name: string | Date | null;
  image_class: string;
  memberId: string;
  selection_status: boolean;
  field_data: medical_question_field_data[];
};

export interface TQuestion {
  icon_class: string;
  code: string;
  title: string;
  description?: string;
  status: boolean;
  hide_toggle_button?: boolean;
  field_data?: medical_question_field_data[];
  member_data: TMemberData[];
}

export interface main_question {
  main_question: TQuestion;
  sub_question?: TQuestion[];
}

export type TMedicalQuestionIffcoTokio = {
  question: main_question[];
};
