import { PatchAPI } from "../../Axios/AxiosInstance";
import { GetAPI, PostAPI } from "../../Axios/AxiosInstanceToken";
import { UpdateTWDTO } from "../../DTO/TWDTO/UpdateTWDTO";
import { TW_URLs } from "../../URLCollection/tw-node/TWURLs";

const GET_PREVIOUS_INSURER_LIST = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void
) => {
  GetAPI.call(
    TW_URLs.GET_PREVIOUS_INSURER_LIST,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const GET_VEHICLE_INFO = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  regNo: string
) => {
  PostAPI.call(
    TW_URLs.GET_VEHICLE_NO_INFO,
    { regNo: regNo },
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VEHICLE_ON_LOAN = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  param: any
) => {
  GetAPI.call(
    `${TW_URLs.VEHICLE_ON_LOAN}?product_code=${param.product_code}&bankName=${param.term}`,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const PAYMENT = (
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

const GET_CIS_URL = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: any
) => {
  PostAPI.call(
    TW_URLs.CIS_URL,
    dto,
    (res: any) => onSuccess(res.data),
    (res: any) => onError(res.data)
  );
};

const CREATE_RPOPOSAL = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  param: any
) => {
  PostAPI.call(
    TW_URLs.CREATE_RPOPOSAL,
    param,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const UPDATE_IDV = (
  onSuccess: Function,
  onError: Function,
  dto: {
    quote_no: string;
    cusIDV: string;
    type: string;
  }
) => {
  PatchAPI.call(
    TW_URLs.UPDATE_IDV,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const UPDATE_DETAILS = (
  onSuccess: Function,
  onError: Function,
  dto: UpdateTWDTO
) => {
  PatchAPI.call(
    TW_URLs.UPDATE_DETAILS,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const GET_SINGLE_QUOTE_COMPREHENSIVE = (
  onSuccess: Function,
  onError: Function,
  dto: any
) => {
  PostAPI.call(
    TW_URLs.GET_SINGLE_QUOTE_COMPREHENSIVE,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const GET_SINGLE_QUOTE_SAOD = (
  onSuccess: Function,
  onError: Function,
  dto: any
) => {
  PostAPI.call(
    TW_URLs.GET_SINGLE_QUOTE_SAOD,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const GET_SINGLE_QUOTE_TP = (
  onSuccess: Function,
  onError: Function,
  dto: any
) => {
  PostAPI.call(
    TW_URLs.GET_SINGLE_QUOTE_TP,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

export const TW_ADD_FORM_SERVICES = {
  GET_VEHICLE_INFO,
  GET_PREVIOUS_INSURER_LIST,
  VEHICLE_ON_LOAN,
  PAYMENT,
  CREATE_RPOPOSAL,
  GET_CIS_URL,
  UPDATE_IDV,
  UPDATE_DETAILS,
  GET_SINGLE_QUOTE_COMPREHENSIVE,
  GET_SINGLE_QUOTE_SAOD,
  GET_SINGLE_QUOTE_TP,
};
