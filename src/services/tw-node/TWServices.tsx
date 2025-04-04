import { PatchAPI } from "../../Axios/AxiosInstance";
import { GetAPI, PostAPI } from "../../Axios/AxiosInstanceToken";
import { saveQuotesForPWYL } from "../../DTO/HealthDTO/QuoteByActionDTO";
import { TW_URLs } from "../../URLCollection/tw-node/TWURLs";

const GET_PROPOSAL_INFO = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  DTO: {
    type: string;
    quote_no: string;
    product_id: string;
  }
) => {
  GetAPI.call(
    `${TW_URLs.GET_PROPOSAL_INFO}?type=${DTO.type}&quote_no=${DTO.quote_no}&product_id=${DTO.product_id}`,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const BULK_UPDATE_ADDON_STATUS = (
  onSuccess: Function,
  onError: Function,
  dto: {
    quote_no: string;
    type: "TW";
    road_side_assistance: 0 | 1;
    driver_cover: 0 | 1;
    pa_owner_driver: 0 | 1;
    passernger_cover: 0 | 1;
  }
) => {
  PatchAPI.call(
    TW_URLs.BULK_UPDATE_ADDON_STATUS,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const GET_DETAILS_BY_QUOTE_NO = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  quote_no: string
) => {
  GetAPI.call(
    `${TW_URLs.GET_DETAILS_BY_QUOTE_NO}?type=TW&quote_no=${quote_no}`,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const UPDATE_ADDON_STATUS = (
  onSuccess: Function,
  onError: Function,
  dto: {
    quote_no: string;
    addon: string;
    value: number;
  }
) => {
  PatchAPI.call(
    TW_URLs.UPDATE_ADDON_STATUS,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const Premium_Recalculation = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    product_code: string;
    quote_no: string;
    tw_master_data_id: number;
  }
) => {
  PostAPI.call(
    TW_URLs.PREMIUM_RECALCULATION,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const CAPTURE_RECORD_ON_EVERY_STEP = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: any
) => {
  PatchAPI.call(
    TW_URLs.CAPTURE_RECORD,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const updateAllPerposalRecords = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: any
) => {
  PostAPI.call(
    TW_URLs.UPDATE_FULL_PERPOSAL_RECORDS,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const saveQuotesForPickUpWhereYouLeft = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: saveQuotesForPWYL
) => {
  PostAPI.call(
    TW_URLs.saveQuotesForPickUpWhereYouLeft,
    dto,
    (res: any) => onSuccess(res.data),
    (res: any) => onError(res.data)
  );
};

const GetCityStateByPin = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    pincode: any;
  }
) => {
  PostAPI.call(
    TW_URLs.GET_CITY_STATE_BY_PINCODE,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const GET_NOMINEE_RELATIONSHIP_LIST = (
  onSuccess: Function,
  onError: Function,
  dto: any
) => {
  GetAPI.call(
    `${TW_URLs.GET_NOMINEE_RELATIONSHIP_LIST}${dto?.product_id}`,
    (res: any) => onSuccess(res.data),
    onError
  );
};
const CREATE_PROPOSAL = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  param: any
) => {
  PostAPI.call(
    TW_URLs.PAYMENT_URL,
    param,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const GET_UPDATED_DATA = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  DTO: {
    type: string;
    quote_no: string;
    product_id: string;
  }
) => {
  GetAPI.call(
    `${TW_URLs.GET_UPDATED_DATA}?insurance_type=${DTO.type}&quote_no=${DTO.quote_no}`,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const ADD_UPDATE_TW_TAG = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: any
) => {
  PostAPI.call(
    TW_URLs.ADD_UPDATE_TW_TAG,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

export const TW_SERVICES = {
  ADD_UPDATE_TW_TAG,
  GET_UPDATED_DATA,
  GET_NOMINEE_RELATIONSHIP_LIST,
  GET_PROPOSAL_INFO,
  GET_DETAILS_BY_QUOTE_NO,
  UPDATE_ADDON_STATUS,
  Premium_Recalculation,
  CAPTURE_RECORD_ON_EVERY_STEP,
  updateAllPerposalRecords,
  GetCityStateByPin,
  saveQuotesForPickUpWhereYouLeft,
  BULK_UPDATE_ADDON_STATUS,
  CREATE_PROPOSAL,
};
