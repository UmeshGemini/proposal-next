export interface TMemberDataType {
  memberId: string;
  name: string | null | Date;
  image_class: string;
  selectionStatus: boolean;
  fieldValue: { value: string; warning: boolean };
}

export interface TMedicalQuestion {
  id: string;
  icon_class: string;
  title: string;
  description: string;
  selection_status: boolean;
  memberData?: TMemberDataType | undefined;
}

export type TMedicalQuestionType = {
  question: TMedicalQuestion;
  sub_question?: TMedicalQuestion[];
};
