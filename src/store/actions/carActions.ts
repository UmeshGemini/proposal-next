import { PayloadAction } from "@reduxjs/toolkit";
import { TCarAddonStatus } from "../types/Car/TCarAddonStatus";
import { TCarProduct } from "../types/Car/TCarProduct";
import { TDropdown } from "../types/Common/TDropdown";
import { DROPDOWN_DATA, TCarSlice } from "../types/TCarSlice";

const SET_SELECTED_QUOTE_DATA = (
  state: TCarSlice,
  action: PayloadAction<TCarProduct>
) => ({
  ...state,
  SELECTED_QUOTE_DATA: action.payload,
});
const UPDATE_FIELD = <T extends keyof TCarSlice>(
  state: TCarSlice,
  action: PayloadAction<{ key: keyof TCarSlice[T]; value: any }[]>,
  field: T
) => {
  const fieldData = state[field];

  if (typeof fieldData !== "object" || fieldData === null) {
    console.error(`Invalid field update: ${field} is not an object.`);
    return state;
  }

  const updates = action.payload.reduce(
    (acc, { key, value }) => ({ ...acc, [key]: value }),
    {} as Partial<TCarSlice[T]> // Ensure correct typing
  );

  return {
    ...state,
    [field]: { ...fieldData, ...updates }, // Ensure spreading works
  };
};

const BULK_UPDATE = (
  state: TCarSlice,
  action: PayloadAction<Partial<TCarSlice>>
) => ({
  ...state,
  ...action.payload,
});

const UPDATE_PREMIUM_DETAILS_IN_SELECTED_QUOTE = (
  state: TCarSlice,
  action: PayloadAction<any>
) => {
  if (state.SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails) {
    return {
      ...state,
      SELECTED_QUOTE_DATA: {
        ...state.SELECTED_QUOTE_DATA,
        quotationDetail: {
          ...state.SELECTED_QUOTE_DATA.quotationDetail,
          premiumDetails: {
            ...state.SELECTED_QUOTE_DATA.quotationDetail.premiumDetails,
            ...action.payload,
          },
        },
      },
    };
  }
  return state;
};

const UPDATE_ADDON_STATUS = (
  state: TCarSlice,
  action: PayloadAction<{ key: keyof TCarAddonStatus; value: boolean }[]>
) => {
  const updatedStatus = action.payload.reduce(
    (acc, { key, value }) => ({
      ...acc,
      [key]: { ...state.ADDON_STATUS[key], value },
    }),
    {}
  );
  return {
    ...state,
    ADDON_STATUS: { ...state.ADDON_STATUS, ...updatedStatus },
  };
};

const UPDATE_DROPDOWN_MASTER = (
  state: TCarSlice,
  action: PayloadAction<{ key: keyof DROPDOWN_DATA; value: TDropdown[] }>
) => ({
  ...state,
  DROPDOWN_DATA: {
    ...state.DROPDOWN_DATA,
    [action.payload.key]: action.payload.value,
  },
});

const UPDATE_BOOLEAN_FIELD = (
  state: TCarSlice,
  action: PayloadAction<boolean>,
  field: keyof TCarSlice
) => ({
  ...state,
  [field]: action.payload,
});

export const CAR_REDUCERS = {
  SET_SELECTED_QUOTE_DATA,
  BULK_UPDATE,
  UPDATE_FIELD,
  UPDATE_PREMIUM_DETAILS_IN_SELECTED_QUOTE,
  UPDATE_ADDON_STATUS,
  UPDATE_DROPDOWN_MASTER,
  UPDATE_BOOLEAN_FIELD,
};

export type CarReducers = typeof CAR_REDUCERS;
