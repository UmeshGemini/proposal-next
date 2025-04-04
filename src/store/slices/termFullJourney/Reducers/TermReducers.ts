import { TRidersBenefitsResponse } from "@/store/types/TermFullJourney/TRidersBenefits";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

function BULK_UPDATE(
  state: TTermFullJourneySlice,
  action: PayloadAction<TTermFullJourneySlice>
) {
  const data: TTermFullJourneySlice = { ...state, ...action.payload };

  return data;
}

function UPDATE_LOADER_STATUS_AND_RIDER_RESPONSE(
  state: TTermFullJourneySlice,
  action: PayloadAction<{
    loader: boolean;
    rider_response: TRidersBenefitsResponse;
  }>
) {
  const { loader, rider_response } = action.payload;
  let data = { ...state };
  data = {
    ...data,
    PREMIUM_LOADER: loader,
    RIDERS_BENEFITS: {
      ...data.RIDERS_BENEFITS,
      riders_benefits_response: rider_response,
    },
  };
}
export const TERM_REDUCERS = {
  BULK_UPDATE,
  UPDATE_LOADER_STATUS_AND_RIDER_RESPONSE,
};
