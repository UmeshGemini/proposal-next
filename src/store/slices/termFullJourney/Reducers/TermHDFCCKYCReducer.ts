import { THDFCCKYCDetails } from "@/store/types/TermFullJourney/TCKYCDetails";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

const SET_HDFC_CKYC_DETAILS = (
  state: TTermFullJourneySlice,
  action: PayloadAction<THDFCCKYCDetails>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    HDFCCKYCDetails: { ...action.payload },
  };
  return data;
};

export const TERM_HDFC_CKYC_REDUCER = {
  SET_HDFC_CKYC_DETAILS,
};
