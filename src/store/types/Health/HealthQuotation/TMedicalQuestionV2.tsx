import { TDropdown } from "../../Common/TDropdown";

export type TFieldData = {
  field_type: "TEXTFIELD" | "DROPDOWN" | "DATEPICKER";
  dropdown_data?: TDropdown[];
};

export type TMemberData = {
  [key: string]: {
    fieldValue?: { value: string; warning: boolean };
    title?: string;
    keyName: string;
    selection_status: boolean;
    field_data: TFieldData[];
    memberId: string;
    name: string | null | Date;
    image_class: string;
  };
};
export type question_data = {
  id: string;
  title: string;
  desc: string;
  status: boolean;
  member_data?: TMemberData;
  icon_class: string;
};

export type TMedicalQuestionFutureGenerali = {
  [key: string]: {
    main_question: question_data;
    sub_question?: { [key: string]: question_data };
  };
};
