import {
  TFormdataTermMedicalQuestionDetails,
  TTermHDFCMedicalQuestionDetails,
} from "@/store/types/TermFullJourney/TTermMedicalQuestionDetails";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

function SET_HDFC_MEDICAL_QUESTION(
  state: TTermFullJourneySlice,
  action: PayloadAction<TTermHDFCMedicalQuestionDetails>
) {
  const data: TTermFullJourneySlice = {
    ...state,
    TermHDFCMedicalQuestion: { ...action.payload },
  };
  return data;
}

function SET_HDFC_FORM_DATA_MEDICAL(
  state: TTermFullJourneySlice,
  action: PayloadAction<TFormdataTermMedicalQuestionDetails>
) {
  const data: TTermFullJourneySlice = {
    ...state,
    TermHDFCMedicalQuestion: {
      ...state.TermHDFCMedicalQuestion,
      FormdataTermMedicalQuestionDetails: { ...action.payload },
    },
  };
  return data;
}

export const TERM_HDFC_MEDICAL_QUESTION_REDUCERS = {
  SET_HDFC_MEDICAL_QUESTION,
  SET_HDFC_FORM_DATA_MEDICAL,
};
