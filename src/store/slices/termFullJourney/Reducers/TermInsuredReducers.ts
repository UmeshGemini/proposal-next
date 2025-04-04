import { TInsuredMemberDetails } from "@/store/types/TermFullJourney/TInsuredMemberDetails";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

function setInsuredDetails(
  state: TTermFullJourneySlice,
  action: PayloadAction<TInsuredMemberDetails>
) {
  const data: TTermFullJourneySlice = {
    ...state,
    insuredDetails: action.payload,
  };
  return data;
}

export const TERM_INSURED_REDUCERS = {
  setInsuredDetails,
};
