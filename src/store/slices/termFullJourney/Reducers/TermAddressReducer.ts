import { TAddressDetails } from "@/store/types/TermFullJourney/TAddressDetails";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

const setAddressDetails = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TAddressDetails>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    addressDetails: action.payload,
  };
  return data;
};

const updateAddressDetails = (
  state: TTermFullJourneySlice,
  action: PayloadAction<{
    key: string;
    value: string;
    address_type: "permanent_address" | "mailing_address";
  }>
) => {
  const { key, value, address_type } = action.payload;

  const data: TTermFullJourneySlice = {
    ...state,
    addressDetails: {
      ...state.addressDetails,
      [address_type]: {
        ...state.addressDetails[address_type],
        [key]: { value: value, warning: false },
      },
    },
  };
  return data;
};

export const TERM_ADDRESS_REDUCERS = {
  setAddressDetails,
  updateAddressDetails,
};
