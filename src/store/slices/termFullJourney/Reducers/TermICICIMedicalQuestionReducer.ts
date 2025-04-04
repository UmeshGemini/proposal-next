import { TTermMedicalQuestionDetails } from "@/store/types/TermFullJourney/TTermMedicalQuestionDetails";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

function SET_ICICI_MEDICAL_QUESTION(
  state: TTermFullJourneySlice,
  action: PayloadAction<TTermMedicalQuestionDetails>
) {
  const data: TTermFullJourneySlice = {
    ...state,
    TermICICIMedicalQuestion: { ...action.payload },
  };
  return data;
}

export const TERM_ICICI_MEDICAL_QUESTION_REDUCERS = {
  SET_ICICI_MEDICAL_QUESTION,
};
