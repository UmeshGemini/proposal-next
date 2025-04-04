import { TNomineeDetails } from "@/store/types/TermFullJourney/TNomineeDetails";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

function setNomineeDetails(
  state: TTermFullJourneySlice,
  action: PayloadAction<TNomineeDetails>
) {
  const data: TTermFullJourneySlice = {
    ...state,
    nomineeDetails: action.payload,
  };
  return data;
}

export const TERM_NOMINEE_DETAILS_REDUCERS = {
  setNomineeDetails,
};
