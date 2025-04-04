import { PayloadAction } from "@reduxjs/toolkit";
import { TDropdown } from "../types/Common/TDropdown";
import {
  DROPDOWN_MASTER,
  TSelectedQuote,
  TTermQuoteFieldData,
  TTermSlice,
} from "../types/TTermSlice";
import { TRidersBenefitsResponse } from "../types/Term/TRidersBenifits";
import { TTermAddForm, TTermAddFormResponse } from "../types/Term/TTermAddForm";
import { TTermNoQuoteReason } from "../types/Term/TTermNoQuoteReason";

function BULK_UPDATE(
  state: TTermSlice,
  action: PayloadAction<Partial<TTermSlice>>
) {
  return {
    ...state,
    ...action.payload,
  };
}

function UPDATE_LOADER_STATUS(
  state: TTermSlice,
  action: PayloadAction<boolean>
) {
  const data: TTermSlice = { ...state, LOADER: action.payload };
  return data;
}

function UPDATE_ADD_FORM_DATA(
  state: TTermSlice,
  action: PayloadAction<TTermAddForm>
) {
  const data: TTermSlice = { ...state, ADD_FORM: { ...action.payload } };

  return data;
}

function UPDATE_DROPDOWN_DATA(
  state: TTermSlice,
  action: PayloadAction<{ key: keyof DROPDOWN_MASTER; value: TDropdown[] }>
) {
  const { key, value } = action.payload;
  let data: TTermSlice = { ...state };

  data = { ...data, DROPDOWN_DATA: { ...data.DROPDOWN_DATA, [key]: value } };

  return data;
}

function setTermAddFormData(
  state: TTermSlice,
  action: PayloadAction<TTermAddForm>
) {
  let data: TTermSlice = { ...state };
  data = {
    ...data,
    ADD_FORM: {
      ...state.ADD_FORM,
      ...action.payload,
    },
  };
  return data;
}
function UPDATE_QUOTE_FIELD_DATA(
  state: TTermSlice,
  action: PayloadAction<{ key: keyof TTermQuoteFieldData; value: string }[]>
) {
  let data: TTermSlice = { ...state };

  for (const { key, value } of action.payload) {
    data = {
      ...data,
      QUOTE_FIELDS_DATA: {
        ...data.QUOTE_FIELDS_DATA,
        [key]: value,
      },
    };
  }

  return data;
}

// function setTermAddFormDataResponse(
//   state: TTermSlice,
//   action: PayloadAction<TTermAddFormResponse>
// ) {
//   let data: TTermSlice = { ...state };
//   data = { ...data, ADD_FORM_RESPONSE: {...ADD_FORM_RESPONSE,action.payload} };
//   return data;
// }

function setTermAddFormDataResponse(
  state: TTermSlice,
  action: PayloadAction<TTermAddFormResponse>
) {
  const updatedState: TTermSlice = {
    ...state,
    ADD_FORM_RESPONSE: {
      ...state.ADD_FORM_RESPONSE,
      ...action.payload,
    },
  };
  return updatedState;
}

// function UPDATE_ADD_FORM_RESPONSE(
//   state: TTermSlice,
//   action: PayloadAction<
//     { key: keyof TTermAddFormResponse; value: string | number }[]
//   >
// ) {
//   console.log("state", state);

//   let updatedState: TTermSlice = {
//     ...state,
//     ADD_FORM_RESPONSE: {
//       ...state.ADD_FORM_RESPONSE,
//     },
//   };

//   for (const { key, value } of action.payload) {
//     // Ensure key is a valid property of TTermAddFormResponse
//     if (key in updatedState.ADD_FORM_RESPONSE) {
//       updatedState = {
//         ...updatedState,
//         ADD_FORM_RESPONSE: { ...updatedState.ADD_FORM_RESPONSE, [key]: value },
//       };
//     }
//   }

//   return updatedState;
// }

function UPDATE_ADD_FORM_RESPONSE(
  state: TTermSlice,
  action: PayloadAction<TTermAddFormResponse>
) {
  return {
    ...state,
    ADD_FORM_RESPONSE: {
      ...state.ADD_FORM_RESPONSE,
      ...action.payload,
    },
  };
}

function UPDATE_LOCAL_VALUE_HDFC_RIDERS_BENEFIT(
  state: TTermSlice,
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

function SET_RIDERS_BENEFITS_DATA(
  state: TTermSlice,
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

const SET_SELECTED_QUOTE_DATA = (
  state: TTermSlice,
  action: PayloadAction<TSelectedQuote>
) => {
  const data = {
    ...state,
    SELECTED_QUOTE_DATA: action.payload,
  };

  return data;
};

const ADD_PREMIUM = (state: TTermSlice, action: PayloadAction<number>) => {
  const { SELECTED_QUOTE_DATA } = state;

  if (!SELECTED_QUOTE_DATA || !SELECTED_QUOTE_DATA.premiumDetails) {
    return state;
  }

  const { premiumDetails } = SELECTED_QUOTE_DATA;

  return {
    ...state,
    SELECTED_QUOTE_DATA: {
      ...SELECTED_QUOTE_DATA,
      premiumDetails: {
        ...premiumDetails,
        finalPremium: premiumDetails.finalPremium + action.payload,
      },
    },
  };
};

const SUB_PREMIUM = (state: TTermSlice, action: PayloadAction<number>) => {
  const { SELECTED_QUOTE_DATA } = state;

  if (!SELECTED_QUOTE_DATA || !SELECTED_QUOTE_DATA.premiumDetails) {
    return state;
  }

  const { premiumDetails } = SELECTED_QUOTE_DATA;

  return {
    ...state,
    SELECTED_QUOTE_DATA: {
      ...SELECTED_QUOTE_DATA,
      premiumDetails: {
        ...premiumDetails,
        finalPremium: premiumDetails.finalPremium - action.payload,
      },
    },
  };
};

const UPDATE_RIDERS = (state: TTermSlice, action: PayloadAction<any>) => {
  const data = {
    ...state,
    SELECTED_QUOTE_DATA: {
      ...state.SELECTED_QUOTE_DATA,
      premiumDetails: {
        ...state.SELECTED_QUOTE_DATA.premiumDetails,
        riders: action.payload,
      },
    },
  };

  return data;
};
function SET_DROPDOWN_DATA(
  state: TTermSlice,
  action: PayloadAction<{ key: keyof DROPDOWN_MASTER; value: TDropdown[] }>
) {
  const { key, value } = action.payload;
  let data: TTermSlice = { ...state };

  data = {
    ...data,
    DROPDOWN_DATA: { ...data.DROPDOWN_DATA, [key]: value },
  };

  return data;
}

function SET_FIRST_TIME_QUOTE_LOADER(
  state: TTermSlice,
  action: PayloadAction<boolean>
) {
  let data: TTermSlice = { ...state };

  data = {
    ...data,
    QUOTE_LOAD_FIRST_TIME: action.payload,
  };

  return data;
}

type keyOfTSelectedQuote = keyof TSelectedQuote;
function UPDATE_QUOTE_DATA(
  state: TTermSlice,
  action: PayloadAction<{ key: keyOfTSelectedQuote; value: string }[]>
) {
  let data = { ...state };
  let updatedState: TSelectedQuote = { ...data.SELECTED_QUOTE_DATA };

  action.payload.forEach(({ key, value }) => {
    updatedState = { ...updatedState, [key]: value };
  });
  data.SELECTED_QUOTE_DATA = updatedState;

  return data;
}

function UPDATE_LOADER_STATUS_AND_RIDER_RESPONSE(
  state: TTermSlice,
  action: PayloadAction<{
    loader: boolean;
    rider_response: TRidersBenefitsResponse;
  }>
) {
  const { loader, rider_response } = action.payload;
  let data = { ...state };
  data = {
    ...data,
    LOADER: loader,
    RIDERS_BENEFITS: {
      ...data.RIDERS_BENEFITS,
      riders_benefits_response: rider_response,
    },
  };

  return data;
}

const NO_QUOTE_REASONS = (
  state: TTermSlice,
  action: PayloadAction<TTermNoQuoteReason[]>
) => {
  const data = {
    ...state,
    NO_QUOTE_REASONS: action.payload,
  };

  return data;
};

export const TERM_REDUCERS = {
  UPDATE_QUOTE_DATA,
  UPDATE_LOADER_STATUS_AND_RIDER_RESPONSE,
  BULK_UPDATE,
  UPDATE_DROPDOWN_DATA,
  setTermAddFormData,
  setTermAddFormDataResponse,
  UPDATE_ADD_FORM_RESPONSE,
  UPDATE_QUOTE_FIELD_DATA,
  SET_SELECTED_QUOTE_DATA,
  ADD_PREMIUM,
  SUB_PREMIUM,
  UPDATE_RIDERS,
  SET_RIDERS_BENEFITS_DATA,
  UPDATE_LOCAL_VALUE_HDFC_RIDERS_BENEFIT,
  SET_DROPDOWN_DATA,
  UPDATE_ADD_FORM_DATA,
  SET_FIRST_TIME_QUOTE_LOADER,
  UPDATE_LOADER_STATUS,
  NO_QUOTE_REASONS,
};

export type TwoTermReducers = typeof TERM_REDUCERS;
