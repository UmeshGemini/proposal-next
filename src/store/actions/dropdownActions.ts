import { PayloadAction } from "@reduxjs/toolkit";
import { TDropdownSlice } from "../types/TDropdownSlice";
import { TDropdown } from "../types/Common/TDropdown";

type ValueTypes = keyof TDropdownSlice;
const UPDATE_DROPDOWN_DATA = (
  state: TDropdownSlice,
  action: PayloadAction<{ key: ValueTypes; value: TDropdown[] }>
) => {
  const { key, value } = action.payload;
  const data: TDropdownSlice = {
    ...state,
    [key]: value,
  };

  return data;
};

const UPDATE_NIVA_BUPA_OCCUPATION = (
  state: TDropdownSlice,
  action: PayloadAction<{ key: ValueTypes; value: TDropdown[] }>
) => {
  const { key, value } = action.payload;
  let data = { ...state };
  data = {
    ...state,
    NIVA_BUPA_OCCUPATION: value,
  };
  return data;
};

export const COMMON_DROPDOWN_REDUCERS = {
  UPDATE_DROPDOWN_DATA,
  UPDATE_NIVA_BUPA_OCCUPATION,
};
