import { TNRIDetails } from "@/store/types/TermFullJourney/TNRIDetails";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

const setNRIDetails = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TNRIDetails>
) => {
  const data: TTermFullJourneySlice = { ...state, NRIDetails: action.payload };
  return data;
};

export const TERM_NRI_DETAILS = {
  setNRIDetails,
};
