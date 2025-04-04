import { THouseholdDetails } from "@/store/types/HI/THouseholdDetails";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: THouseholdDetails = {
  youAre: "",
  youHave: "",
  sumInsuredFor: "",
  buildingValue: { value: "0", warning: false },
  householdItems: { value: "0", warning: false },
  carpetArea: { value: "0", warning: false },
  costOfconstruction: { value: "0", warning: false },
  email: "",
  policyTerm: 1,
  mobile: "",
};

export const householdDetailsSlice = createSlice({
  name: "household_details",
  initialState,
  reducers: {
    setHouseholdDetails: (
      state: THouseholdDetails,
      action: PayloadAction<THouseholdDetails>
    ) => {
      return action.payload;
    },
    setPolicyTerm: (
      state: THouseholdDetails,
      action: PayloadAction<number>
    ) => {
      return { ...state, policyTerm: action.payload };
    },
    resetHouseHoldState: (
      state: THouseholdDetails,
      action: PayloadAction<any>
    ) => {
      return initialState;
    },
  },
});

export const { setHouseholdDetails, resetHouseHoldState } =
  householdDetailsSlice.actions;

export default householdDetailsSlice.reducer;
