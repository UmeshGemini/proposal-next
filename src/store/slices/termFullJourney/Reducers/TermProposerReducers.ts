import { TProposerDetails } from "@/store/types/TermFullJourney/TProposerDetails";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

function SET_LOADER_STATUS(
  state: TTermFullJourneySlice,
  action: PayloadAction<boolean>
) {
  let data: TTermFullJourneySlice = { ...state };
  data = { ...data, PREMIUM_LOADER: action.payload };

  return data;
}

function setProposerDetails(
  state: TTermFullJourneySlice,
  action: PayloadAction<TProposerDetails>
) {
  const data: TTermFullJourneySlice = {
    ...state,
    proposerDetails: { ...action.payload },
  };
  return data;
}

type ValueTypes = keyof TProposerDetails;
function updateProposerDetails(
  state: TTermFullJourneySlice,
  action: PayloadAction<
    { key: ValueTypes; value: { value: string; warning: boolean } }[]
  >
) {
  let data: TTermFullJourneySlice = { ...state };
  let updatedState: TProposerDetails = data.proposerDetails;

  action.payload.forEach(({ key, value }) => {
    updatedState = { ...updatedState, [key]: value };
  });
  data.proposerDetails = updatedState;

  return data;
}

function updatePremiumLoader(
  state: TTermFullJourneySlice,
  action: PayloadAction<boolean>
) {
  const data: TTermFullJourneySlice = {
    ...state,
    proposerDetails: {
      ...state.proposerDetails,
      premium_loader: action.payload,
    },
  };
  return data;
}

export const TERM_PROPOSER_DETAILS_REDUCERS = {
  setProposerDetails,
  updateProposerDetails,
  updatePremiumLoader,
  SET_LOADER_STATUS,
};
