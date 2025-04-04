import { TPolicyDetails } from "@/store/types/TermFullJourney/TPolicyDetails";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

function setPolicyDetails(
  state: TTermFullJourneySlice,
  action: PayloadAction<TPolicyDetails>
) {
  const data: TTermFullJourneySlice = {
    ...state,
    policyDetails: action.payload,
  };
  return data;
}

export const TERM_POLICY_DETAILS_REDUCERS = {
  setPolicyDetails,
};
