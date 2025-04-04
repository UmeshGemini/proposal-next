import { THDFCUploadDocSingle } from "@/store/types/TermFullJourney/THDFCUploadDoc";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

const SET_HDFC_UPLOAD_DOC_DETAILS = (
  state: TTermFullJourneySlice,
  action: PayloadAction<THDFCUploadDocSingle[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    HDFCUploadDocDetails: { data: action.payload },
  };
  return data;
};
const SET_HDFC_IMAGE_BASE64 = (
  state: TTermFullJourneySlice,
  action: PayloadAction<{ index: number; value: string }>
) => {
  const { index, value } = action.payload;
  const newState = {
    ...state,
    HDFCUploadDocDetails: {
      ...state.HDFCUploadDocDetails,
      data: state.HDFCUploadDocDetails.data.map((item, i) =>
        i === index ? { ...item, image_base64: value } : item
      ),
    },
  };
  return newState;
};
const SET_HDFC_IMAGE_NAME = (
  state: TTermFullJourneySlice,
  action: PayloadAction<{ index: number; value: string }>
) => {
  const { index, value } = action.payload;
  const newState = {
    ...state,
    HDFCUploadDocDetails: {
      ...state.HDFCUploadDocDetails,
      data: state.HDFCUploadDocDetails.data.map((item, i) =>
        i === index ? { ...item, image_name: value } : item
      ),
    },
  };
  return newState;
};

const SET_HDFC_UPLOAD_DOC_TYPE = (
  state: TTermFullJourneySlice,
  action: PayloadAction<{ index: number; value: string }>
) => {
  const { index, value } = action.payload;
  const newState = {
    ...state,
    HDFCUploadDocDetails: {
      ...state.HDFCUploadDocDetails,
      data: state.HDFCUploadDocDetails.data.map((item, i) =>
        i === index ? { ...item, document_type: value } : item
      ),
    },
  };
  return newState;
};

const SET_HDFC_IMAGE_UPLOAD_STATUS = (
  state: TTermFullJourneySlice,
  action: PayloadAction<{ index: number; value: boolean }>
) => {
  const { index, value } = action.payload;
  const newState = {
    ...state,
    HDFCUploadDocDetails: {
      ...state.HDFCUploadDocDetails,
      data: state.HDFCUploadDocDetails.data.map((item, i) =>
        i === index ? { ...item, upload_status: value } : item
      ),
    },
  };
  return newState;
};

export const TERM_HDFC_UPLOAD_DOC_REDUCER = {
  SET_HDFC_UPLOAD_DOC_DETAILS,
  SET_HDFC_IMAGE_BASE64,
  SET_HDFC_IMAGE_NAME,
  SET_HDFC_UPLOAD_DOC_TYPE,
  SET_HDFC_IMAGE_UPLOAD_STATUS,
};
