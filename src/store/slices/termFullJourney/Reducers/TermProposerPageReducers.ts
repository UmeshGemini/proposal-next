import { PROPOSER_PAGE_STATE_STATUS } from "@/store/types/TermFullJourney/TProposerPage";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

function setProposalPage(
  state: TTermFullJourneySlice,
  action: PayloadAction<PROPOSER_PAGE_STATE_STATUS>
) {
  const data: TTermFullJourneySlice = {
    ...state,
    proposerPage: { ...state.proposerPage, page_name: action.payload },
  };
  return data;
}

function updateUpdateStatus(
  state: TTermFullJourneySlice,
  action: PayloadAction<boolean>
) {
  const data: TTermFullJourneySlice = {
    ...state,
    proposerPage: { ...state.proposerPage, update_status: action.payload },
  };
  return data;
}

function SAVE_PAYMENT_URL(
  state: TTermFullJourneySlice,
  action: PayloadAction<string>
) {
  const data: TTermFullJourneySlice = {
    ...state,
    proposerPage: { ...state.proposerPage, PAYMENT_URL: action.payload },
  };
  return data;
}

export const TERM_PROPOSER_PAGE_REDUCERS = {
  setProposalPage,
  updateUpdateStatus,
  SAVE_PAYMENT_URL,
};
