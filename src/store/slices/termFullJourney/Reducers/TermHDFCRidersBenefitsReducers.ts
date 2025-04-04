import { TRidersBenefitsResponse } from "@/store/types/TermFullJourney/TRidersBenefits";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

function SET_RIDERS_BENEFITS_DATA(
  state: TTermFullJourneySlice,
  action: PayloadAction<TRidersBenefitsResponse>
) {
  let data = { ...state };
  data = {
    ...data,
    RIDERS_BENEFITS: {
      ...state.RIDERS_BENEFITS,
      riders_benefits_response: action.payload,
    },
  };

  return data;
}

function UPDATE_LOCAL_VALUE_HDFC_RIDERS_BENEFIT(
  state: TTermFullJourneySlice,
  action: PayloadAction<{
    updates: Array<{ key: string; value: boolean | string }>;
  }>
) {
  const { updates } = action.payload;
  let data = { ...state };

  data = {
    ...data,
    RIDERS_BENEFITS: {
      ...data.RIDERS_BENEFITS,
      local_value: {
        ...data.RIDERS_BENEFITS.local_value,
        ...updates.reduce((updatedProperties, { key, value }) => {
          return { ...updatedProperties, [key]: value };
        }, {}),
      },
    },
  };

  return data;
}

function UPDATE_LOCAL_VALUE_ICICI_RIDERS_BENEFIT(
  state: TTermFullJourneySlice,
  action: PayloadAction<{
    updates: Array<{ key: string; value: boolean | string }>;
  }>
) {
  const { updates } = action.payload;
  let data = { ...state };

  data = {
    ...data,
    RIDERS_BENEFITS: {
      ...data.RIDERS_BENEFITS,
      local_value: {
        ...data.RIDERS_BENEFITS.local_value,
        ...updates.reduce((updatedProperties, { key, value }) => {
          return { ...updatedProperties, [key]: value };
        }, {}),
      },
    },
  };

  return data;
}

export const TERM_HDFC_RIDERS_BENEFITS_REDUCERS = {
  SET_RIDERS_BENEFITS_DATA,
  UPDATE_LOCAL_VALUE_HDFC_RIDERS_BENEFIT,
  UPDATE_LOCAL_VALUE_ICICI_RIDERS_BENEFIT,
};
