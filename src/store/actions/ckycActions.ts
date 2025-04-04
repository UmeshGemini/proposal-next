import { PayloadAction } from "@reduxjs/toolkit";
import { TCKYC, TVerifyCKYCForm } from "../types/CKYC/TCKYC";

function SET_HDFC_VERIFY_FORM_DATA(
  state: TCKYC,
  action: PayloadAction<TVerifyCKYCForm>
) {
  let data: TCKYC = { ...state };

  data = { ...data, VERIFY_KYC_FORM: { ...action.payload } };

  return data;
}

function SET_THIRD_PARTY_MANUAL_KYC_URL(
  state: TCKYC,
  action: PayloadAction<string>
) {
  let data: TCKYC = { ...state };
  data = { ...data, MANUAL_KYC_THIRD_PARTY_URL: action.payload };

  return data;
}

function BULK_UPDATE(state: TCKYC, action: PayloadAction<TCKYC>) {
  let data: TCKYC = { ...state };

  data = { ...data, ...action.payload };

  return data;
}

type ValueTypes = keyof TCKYC;
const UPDATE_CKYC_DETAILS = (
  state: TCKYC,
  action: PayloadAction<{ key: ValueTypes; value: any }>
) => {
  const { key, value } = action.payload;
  const data: TCKYC = {
    ...state,
    [key]: value,
  };

  return data;
};

function SET_MANUAL_KYC_STATUS(state: TCKYC, action: PayloadAction<boolean>) {
  let data: TCKYC = { ...state };
  data = { ...data, MANUAL_KYC_STATUS: action.payload };

  return data;
}

export const CKYC_REDUCERS = {
  SET_HDFC_VERIFY_FORM_DATA,
  SET_THIRD_PARTY_MANUAL_KYC_URL,
  UPDATE_CKYC_DETAILS,
  BULK_UPDATE,
  SET_MANUAL_KYC_STATUS,
};
