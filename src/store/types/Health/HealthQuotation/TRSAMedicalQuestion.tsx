import { TDropdown } from "../../Common/TDropdown";

export type TMQFieldData = {
  field_type:
    | "TEXTFIELD"
    | "DROPDOWN"
    | "DATEPICKER"
    | "SERACHDROPDOWN"
    | "CHECKBOX"
    | "DROPDOWN_SURGICAL";
  id: string;
  dropdown_data?: TDropdown[];
  min_date?: string;
  max_date?: string;
  value?: { value: Date | string | null | boolean; warning: boolean };
  title: string;
};

export type TMemberData = {
  keyName: string;
  image_class: string;
  selection_status: boolean;
  name: string;
  field_data?: { [key: string]: TMQFieldData };
};

export type TSubQuestion = {
  id: string;
  title: string;
  status: boolean;
  member_data?: {
    adult_one: TMemberData;
    adult_two: TMemberData;
    child_one: TMemberData;
    child_two: TMemberData;
    child_three: TMemberData;
    child_four: TMemberData;
  };
  icon_class: string;
  description?: string;
  field_data?: { [key: string]: TMQFieldData };
};

export type TMainQuestion = {
  id: string;
  title: string;
  status: boolean;
  member_data?: {
    adult_one: TMemberData;
    adult_two: TMemberData;
    child_one: TMemberData;
    child_two: TMemberData;
    child_three: TMemberData;
    child_four: TMemberData;
  };
  icon_class: string;
  description?: string;
  sub_question?: { [key: string]: TSubQuestion };
  field_data?: { [key: string]: TMQFieldData };
};

export type TRSAMedicalQuestion = {
  [key: string]: { main_question: TMainQuestion };
};
