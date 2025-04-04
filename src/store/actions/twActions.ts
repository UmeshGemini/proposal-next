import { PayloadAction } from "@reduxjs/toolkit";
import { TAddressDetails } from "../types/Common/TAddressDetails";
import { TDropdown } from "../types/Common/TDropdown";
import { TDropdownData } from "../types/DropdownData/DropdownData";
import { TWDropdown } from "../types/TCarSlice";
import {
  IDV_VALUE,
  TCkycDetails,
  TNomineeDetails,
  TOwnerDetails,
  TTWAddFormResponse,
  TTWForm,
  TTWSlice,
  TVehicleDetails,
} from "../types/TTWSlice";
import { TTWPlanDetails } from "../types/TwoWheeler/TTWAddDetailsForm";
import { TTWAddonStatus } from "../types/TwoWheeler/TTWAddonStatus";
import { TTWNoQuoteReason } from "../types/TwoWheeler/TTWNoQuoteReason";
import { TTWProduct } from "../types/TwoWheeler/TTWProduct";

const SET_SELECTED_QUOTE_DATA = (
  state: TTWSlice,
  action: PayloadAction<TTWProduct>
) => {
  const data = {
    ...state,
    SELECTED_QUOTE_DATA: action.payload,
  };

  return data;
};

const UPDATE_IDV_OPTION_STATUS = (
  state: TTWSlice,
  action: PayloadAction<string>
) => {
  const data: TTWSlice = {
    ...state,
    IDV_SELECTED_OPTION: action.payload,
  };

  return data;
};

const SAVE_ALL_QUOTES_DATA = (
  state: TTWSlice,
  action: PayloadAction<TTWProduct[]>
) => {
  const data = {
    ...state,
    ALL_QUOTES_DATA: action.payload,
  };

  return data;
};

const UPDATE_SORT_BY = (
  state: TTWSlice,
  action: PayloadAction<"Low to high" | "High to low">
) => {
  const data = {
    ...state,
    SORT_BY: action.payload,
  };

  return data;
};
const OLD_QUOTE_DATA = (state: TTWSlice, action: PayloadAction<TTWProduct>) => {
  console.log("action.payload", action.payload);
  const data = {
    ...state,
    OLD_QUOTE_DATA: action.payload,
  };

  return data;
};
const SET_PROCESS_DATA = (
  state: TTWSlice,
  action: PayloadAction<Array<any>>
) => {
  console.log(action.payload, "ooooo");
  const data = {
    ...state,
    PROCESS_DATA: action.payload,
  };

  return data;
};

function SET_TW_SLICE(state: TTWSlice, action: PayloadAction<TTWSlice>) {
  let data: TTWSlice = action.payload;
  return data;
}

function BULK_UPDATE(state: TTWSlice, action: PayloadAction<TTWSlice>) {
  const data: TTWSlice = { ...state, ...action.payload };

  return data;
}

function ADD_FORM_DATA(state: TTWSlice, action: PayloadAction<TTWForm>) {
  let data: TTWSlice = { ...state };

  data = { ...data, ADD_FORM: { ...data.ADD_FORM, ...action.payload } };

  return data;
}

type keyTTWForm = keyof TTWForm;
function UPDATE_FORM_DATA(
  state: TTWSlice,
  action: PayloadAction<{ key: keyTTWForm; value: any }[]>
): TTWSlice {
  const updates = action.payload;

  // Use object destructuring to create a shallow copy of state
  let data: TTWSlice = { ...state };

  const new_data = Object.fromEntries(
    updates.map(({ key, value }) => [key, value])
  );

  data = { ...data, ADD_FORM: { ...data.ADD_FORM, ...new_data } };

  return data;
}

function ADD_FORM_RESPONSE(
  state: TTWSlice,
  action: PayloadAction<TTWAddFormResponse>
) {
  let data: TTWSlice = { ...state };

  data = {
    ...data,
    ADD_FORM_RESPONSE: { ...data.ADD_FORM_RESPONSE, ...action.payload },
  };

  return data;
}

type valueTypeDropdown = keyof TWDropdown;
function SET_DROPDOWN_DATA(
  state: TTWSlice,
  action: PayloadAction<{ key: valueTypeDropdown; value: TDropdownData[] }>
) {
  const { key, value } = action.payload;
  let data: TTWSlice = { ...state };
  data = {
    ...data,
    DROPDOWN_DATA: { ...data.DROPDOWN_DATA, [key]: value },
  };

  return data;
}

type valueTypeAddonStatus = keyof TTWAddonStatus;
function UPDATE_ADDON_STATUS(
  state: TTWSlice,
  action: PayloadAction<{ key: valueTypeAddonStatus; value: boolean }>
) {
  const { key, value } = action.payload;
  let data: TTWSlice = { ...state };

  data = {
    ...data,
    ADDON_STATUS: {
      ...data.ADDON_STATUS,
      [key]: { ...data.ADDON_STATUS[key], value: value },
    },
  };

  return data;
}

function UPDATE_ADDON_STATUS_ALL(
  state: TTWSlice,
  action: PayloadAction<{
    updates: { key: valueTypeAddonStatus; value: boolean }[];
  }>
) {
  const { updates } = action.payload;
  let data: TTWSlice = { ...state };

  updates.forEach(({ key, value }) => {
    if (data.ADDON_STATUS.hasOwnProperty(key)) {
      data = {
        ...data,
        ADDON_STATUS: {
          ...data.ADDON_STATUS,
          [key]: { ...data.ADDON_STATUS[key], value: value },
        },
      };
    }
  });

  return data;
}

function UPDATE_QUOTE_LOADER(state: TTWSlice, action: PayloadAction<boolean>) {
  let data: TTWSlice = { ...state };

  data = { ...data, QUOTE_LOADER: action.payload };

  return data;
}

type KEY_DROPDOWN_MASTER = keyof TWDropdown;
const UPDATE_DROPDOWN_MASTER = (
  state: TTWSlice,
  action: PayloadAction<{ key: KEY_DROPDOWN_MASTER; value: TDropdown[] }>
) => {
  const { key, value } = action.payload;
  const data = {
    ...state,
    DROPDOWN_DATA: {
      ...state.DROPDOWN_DATA,
      [key]: value,
    },
  };

  return data;
};

const UPDATE_PLAN_TYPE = (
  state: TTWSlice,
  action: PayloadAction<
    "Third Party" | "Comprehensive" | "Bundle Policy" | "SAOD"
  >
) => {
  const data = {
    ...state,
    PLAN_TYPE: action.payload,
  };

  return data;
};

function OWNER_DETAILS(state: TTWSlice, action: PayloadAction<TOwnerDetails>) {
  let data: TTWSlice = { ...state };

  data = {
    ...data,
    OWNER_DETAILS: { ...data.OWNER_DETAILS, ...action.payload },
  };

  return data;
}

function VEHICLE_DETAILS(
  state: TTWSlice,
  action: PayloadAction<TVehicleDetails>
) {
  let data: TTWSlice = { ...state };

  data = {
    ...data,
    VEHICLE_DETAILS: { ...data.VEHICLE_DETAILS, ...action.payload },
  };

  return data;
}

type ValueTypes = keyof TVehicleDetails;

function UPDATE_VEHICLE_DEATILS_INDIVISUAL(
  state: TTWSlice,
  action: PayloadAction<TVehicleDetails>
) {
  const updatedState: TTWSlice = {
    ...state,
    VEHICLE_DETAILS: {
      ...state.VEHICLE_DETAILS,
      ...action.payload,
    },
  };

  return updatedState;
}

function CKYC_DETAILS(state: TTWSlice, action: PayloadAction<TCkycDetails>) {
  const updatedState: TTWSlice = {
    ...state,
    CKYC_DETAILS: {
      ...state.CKYC_DETAILS,
      ...action.payload,
    },
  };

  return updatedState;
}
type NomineeValueTypes = keyof TNomineeDetails;

function NOMINEE_DETAILS(
  state: TTWSlice,
  action: PayloadAction<{ key: NomineeValueTypes; value: any }[]>
) {
  const updatedState: TTWSlice = {
    ...state,
    NOMINEE_DETAILS: {
      ...state.NOMINEE_DETAILS,
      ...action.payload,
    },
  };

  return updatedState;
}

function ADD_FORM_RESPONSE_INDIVISUALLY(
  state: TTWSlice,
  action: PayloadAction<Partial<TTWAddFormResponse>>
) {
  const updatedAddFormResponse = {
    ...state.ADD_FORM_RESPONSE,
    ...action.payload,
  };

  return {
    ...state,
    ADD_FORM_RESPONSE: updatedAddFormResponse,
  };
}

function SET_PRODUCT_LIST(
  state: TTWSlice,
  action: PayloadAction<TTWProduct[]>
) {
  return {
    ...state,
    PRODUCT_LIST: action.payload,
  };
}

function ADDRESS_DETAILS(
  state: TTWSlice,
  action: PayloadAction<TAddressDetails>
) {
  const updatedState: TTWSlice = {
    ...state,
    ADDRESS_DETAILS: {
      ...state.ADDRESS_DETAILS,
      ...action.payload,
    },
  };
  return updatedState;
}
const CHANGE_PAGE_STATUS = (
  state: TTWSlice,
  action: PayloadAction<boolean>
) => {
  const data = {
    ...state,

    PAGE_STATUS: action.payload,
  };

  return data;
};
const UPDATE_PREMIUM_DETAILS_IN_SELECTED_QUOTE = (
  state: TTWSlice,
  action: PayloadAction<any>
) => {
  const {} = action.payload;
  let data: TTWSlice = {
    ...state,
  };

  if (data.SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails) {
    data = {
      ...data,
      SELECTED_QUOTE_DATA: {
        ...state.SELECTED_QUOTE_DATA,

        quotationDetail: {
          ...data.SELECTED_QUOTE_DATA.quotationDetail,
          premiumDetails: {
            ...state.SELECTED_QUOTE_DATA.quotationDetail?.premiumDetails,
            ...action.payload,
          },
        },
      },
    };
  }
  return data;
};

function updateMultipleKeysInAddForm(
  state: TTWSlice,
  action: PayloadAction<Partial<TTWSlice["ADD_FORM"]>>
) {
  state.ADD_FORM = {
    ...state.ADD_FORM,
    ...action.payload,
  };
}

function updateMultipleKeysInAddFormResponse(
  state: TTWSlice,
  action: PayloadAction<Partial<TTWSlice["ADD_FORM_RESPONSE"]>>
) {
  state.ADD_FORM_RESPONSE = {
    ...state.ADD_FORM_RESPONSE,
    ...action.payload,
  };
}
const IDVAPPLY_STATUS = (state: TTWSlice, action: PayloadAction<boolean>) => {
  const data = {
    ...state,
    IDVApply_Status: action.payload,
  };
  return data;
};
const IDV_UPDATE = (state: TTWSlice, action: PayloadAction<IDV_VALUE>) => {
  console.log("action.payload ", action.payload);
  const data = {
    ...state,
    IDV_VALUE: {
      ...action.payload,
    },
  };

  return data;
};
const Home_loader = (state: TTWSlice, action: PayloadAction<boolean>) => {
  console.log("action.payload ", action.payload);
  const data = {
    ...state,
    Home_Loader: action.payload,
  };

  return data;
};

const UPDATE_CUS_TYPE = (state: TTWSlice, action: PayloadAction<boolean>) => {
  const data = {
    ...state,
    CUS_TYPE: action.payload,
  };

  return data;
};
const UPDATE_EDIT_PLAN_DETAILS_POPUP = (
  state: TTWSlice,
  action: PayloadAction<boolean>
) => {
  const data = {
    ...state,
    SHOW_EDIT_PLAN_DETAILS_POPUP: action.payload,
  };

  return data;
};
const PRICE_DETAILS_POPUP = (
  state: TTWSlice,
  action: PayloadAction<boolean>
) => {
  const data = {
    ...state,
    SHOW_PRICE_DETAILS_POPUP: action.payload,
  };

  return data;
};

const UPDATE_PLAN_DETAILS = (
  state: TTWSlice,
  action: PayloadAction<TTWPlanDetails>
) => {
  const data = {
    ...state,
    PLAN_DETAILS: {
      ...action.payload,
    },
  };
  return data;
};

const NO_QUOTE_REASONS = (
  state: TTWSlice,
  action: PayloadAction<TTWNoQuoteReason[]>
) => {
  const data = {
    ...state,
    NO_QUOTE_REASONS: action.payload,
  };

  return data;
};

function UPDATE_ADD_FORM_RESPONSE(
  state: TTWSlice,
  action: PayloadAction<TTWAddFormResponse>
) {
  return {
    ...state,
    ADD_FORM_RESPONSE: {
      ...state.ADD_FORM_RESPONSE,
      ...action.payload,
    },
  };
}

export const TW_REDUCERS = {
  BULK_UPDATE,
  SET_TW_SLICE,
  ADD_FORM_DATA,
  UPDATE_FORM_DATA,
  IDVAPPLY_STATUS,
  IDV_UPDATE,
  ADD_FORM_RESPONSE,
  SET_DROPDOWN_DATA,
  UPDATE_ADDON_STATUS,
  UPDATE_QUOTE_LOADER,
  UPDATE_DROPDOWN_MASTER,
  UPDATE_PLAN_TYPE,
  UPDATE_ADDON_STATUS_ALL,
  OWNER_DETAILS,
  VEHICLE_DETAILS,
  Home_loader,
  UPDATE_VEHICLE_DEATILS_INDIVISUAL,
  CKYC_DETAILS,
  ADDRESS_DETAILS,
  NOMINEE_DETAILS,
  CHANGE_PAGE_STATUS,
  ADD_FORM_RESPONSE_INDIVISUALLY,
  UPDATE_PREMIUM_DETAILS_IN_SELECTED_QUOTE,
  updateMultipleKeysInAddForm,
  updateMultipleKeysInAddFormResponse,
  SET_PRODUCT_LIST,
  UPDATE_CUS_TYPE,
  UPDATE_EDIT_PLAN_DETAILS_POPUP,
  PRICE_DETAILS_POPUP,
  UPDATE_PLAN_DETAILS,
  NO_QUOTE_REASONS,
  UPDATE_ADD_FORM_RESPONSE,
};

export type TWReducers = typeof TW_REDUCERS;
