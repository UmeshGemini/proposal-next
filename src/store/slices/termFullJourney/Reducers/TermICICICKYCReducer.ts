import { TCKYCDetails } from "@/store/types/TermFullJourney/TCKYCDetails";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

const SET_ICICI_CKYC_DETAILS = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TCKYCDetails>
) => {
  const data: TTermFullJourneySlice = { ...state, ckycDetails: action.payload };
  return data;
};

export const TERM_CKYC_REDUCER = { SET_ICICI_CKYC_DETAILS };
