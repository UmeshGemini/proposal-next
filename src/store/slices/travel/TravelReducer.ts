import {
  TAddressDetails,
  TCareAddon,
  TPAYMENT_DATA,
  TTravelAddForm,
  TTravelSlice,
} from "@/store/types/Travel/TTravelSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function BULK_UPDATE(state: TTravelSlice, action: PayloadAction<TTravelSlice>) {
  const data: TTravelSlice = { ...state, ...action.payload };
  return data;
}

function BULK_UPLOAD(state: TTravelSlice, action: PayloadAction<TTravelSlice>) {
  const data: TTravelSlice = { ...state, ...action.payload };
  return data;
}

const ADDON_DETAILS_DATA = (
  state: TTravelSlice,
  action: PayloadAction<TCareAddon>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS: action.payload,
  };
  return data;
};

function SET_ADD_FORM_DATA(
  state: TTravelSlice,
  action: PayloadAction<TTravelAddForm>
) {
  return {
    ...state,
    ADD_FORM: { ...action.payload },
  };
}

const SAVE_ADDRESS_DETAILS = (
  state: TTravelSlice,
  action: PayloadAction<TAddressDetails>
) => {
  const data: TTravelSlice = {
    ...state,
    ADDRESS_DETAILS: { ...action.payload },
  };
  return data;
};

const SAVE_MEDICAL_QUESTION_DATA_CARE = (
  state: TTravelSlice,
  action: PayloadAction<any>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_CARE: action.payload,
  };

  return data;
};
const UPDATE_QUOTE_LOADER_STATUS = (
  state: TTravelSlice,
  action: PayloadAction<boolean>
) => {
  const data = {
    ...state,
    QUOTE_LOADER: action.payload,
  };

  return data;
};

const CHANGE_PAGE_STATUS = (
  state: TTravelSlice,
  action: PayloadAction<boolean>
) => {
  const data = {
    ...state,

    PAGE_STATUS: action.payload,
  };
  return data;
};

const PAYMENT_DATA = (
  state: TTravelSlice,
  action: PayloadAction<TPAYMENT_DATA>
) => {
  let data = { ...state };
  data = {
    ...state,
    PAYMENT_DATA: action.payload,
  };
  return data;
};

export const TRAVEL_REDUCERS = {
  BULK_UPDATE,
  BULK_UPLOAD,
  SET_ADD_FORM_DATA,
  SAVE_ADDRESS_DETAILS,
  SAVE_MEDICAL_QUESTION_DATA_CARE,
  UPDATE_QUOTE_LOADER_STATUS,
  ADDON_DETAILS_DATA,
  CHANGE_PAGE_STATUS,
  PAYMENT_DATA,
};

export type TRAVEL_REDUCERS = typeof TRAVEL_REDUCERS;
