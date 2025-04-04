import { PatchAPI } from "../../Axios/AxiosInstance";
import { GetAPI, PostAPI } from "../../Axios/AxiosInstanceToken";
import { UpdateCarDetailsDTO } from "../../DTO/CarDTO/UpdateCarDeatilsDTO";
import { CAR_URLS } from "../../URLCollection/car-node/CarURLs";

const GET_PREVIOUS_INSURER_LIST = (onSuccess: Function, onError: Function) => {
  GetAPI.call(
    CAR_URLS.GET_PREVIOUS_INSURER_LIST,
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
    `${CAR_URLS.VEHICLE_ON_LOAN}?product_code=${param.product_code}&bankName=${param.term}`,
    (res: any) => onSuccess(res.data),
    onError
  );
};
const GENERATE_OTP = (onSuccess: Function, onError: Function, param: any) => {
  PostAPI.call(
    CAR_URLS.GENERATE_OTP,
    param,
    (res: any) => onSuccess(res.data),
    onError
  );
};
const VERIFY_OTP = (onSuccess: Function, onError: Function, param: any) => {
  PostAPI.call(
    CAR_URLS.VERIFY_OTP,
    param,
    (res: any) => onSuccess(res.data),
    onError
  );
};
const GET_VEHICLE_NO_INFO = (
  onSuccess: Function,
  onError: Function,
  reg_no: string | Date | null,
  type: "CAR" | "TW",
  make_model: string,
  fuel_type: string,
  variant_cc: string
) => {
  PostAPI.call(
    `${CAR_URLS.GET_VEHICLE_NO_INFO}`,
    {
      type: type,
      rc_no: reg_no,
      make_model: make_model,
      variant: variant_cc,
      fuelType: fuel_type,
    },
    (res: any) => onSuccess(res.data),
    onError
  );
};

const UPDATE_DETAILS = (
  onSuccess: Function,
  onError: Function,
  dto: UpdateCarDetailsDTO
) => {
  PatchAPI.call(
    CAR_URLS.UPDATE_DETAILS,
    dto,
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
    CAR_URLS.UPDATE_IDV,
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
    CAR_URLS.GET_SINGLE_QUOTE_COMPREHENSIVE,
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
    CAR_URLS.GET_SINGLE_QUOTE_SAOD,
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
    CAR_URLS.GET_SINGLE_QUOTE_TP,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

export const CAR_ADD_FORM_SERVICES = {
  GET_VEHICLE_NO_INFO,
  GET_PREVIOUS_INSURER_LIST,
  VEHICLE_ON_LOAN,
  GENERATE_OTP,
  VERIFY_OTP,
  UPDATE_DETAILS,
  UPDATE_IDV,
  GET_SINGLE_QUOTE_COMPREHENSIVE,
  GET_SINGLE_QUOTE_SAOD,
  GET_SINGLE_QUOTE_TP,
};
