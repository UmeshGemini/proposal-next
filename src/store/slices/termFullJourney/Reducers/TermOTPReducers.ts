import { TOTPDetails } from "@/store/types/TermFullJourney/TOTPDetails";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

function setOTPData(
  state: TTermFullJourneySlice,
  action: PayloadAction<TOTPDetails>
) {
  const data: TTermFullJourneySlice = { ...state, OTP_DETAILS: action.payload };

  return data;
}

export const TERM_OTP_DETAILS_REDUCERS = {
  setOTPData,
};
