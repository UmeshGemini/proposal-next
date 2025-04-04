import { KYC_STATUS, TKycResponse } from "@/store/types/HI/TKycResponse";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TKycResponse = {
  aadharNumber: "",
  address_line_1: "",
  address_line_2: "",
  city: "",
  ckycNumber: "",
  customer_type: "",
  digitKYCId: "",
  dob: "",
  email: "",
  first_name: "",
  gender: "",
  gstinNumber: "",
  last_name: "",
  middle_name: "",
  mobile_number: "",
  panNumber: "",
  pincode: "",
  state: "",
  kycStatus: KYC_STATUS.FAILED,
  iciciKYCId: "",
  iciciKycStatus: KYC_STATUS.FAILED,
};

export const kycResponseSlice = createSlice({
  name: "kyc_response",
  initialState,
  reducers: {
    reset: () => initialState,
    setKycResonse: (
      state: TKycResponse,
      action: PayloadAction<TKycResponse>
    ) => {
      return action.payload;
    },
    setKycStatus: (state: TKycResponse, action: PayloadAction<KYC_STATUS>) => {
      return { ...state, kycStatus: action.payload };
    },
    setDigitKycId: (state: TKycResponse, action: PayloadAction<string>) => {
      return { ...state, digitKYCId: action.payload };
    },
    resetKYCResponseState: (
      state: TKycResponse,
      action: PayloadAction<any>
    ) => {
      return initialState;
    },
  },
});
export const { resetKYCResponseState } = kycResponseSlice.actions;
