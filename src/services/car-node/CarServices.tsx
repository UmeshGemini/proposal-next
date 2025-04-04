import { PatchAPI } from "../../Axios/AxiosInstance";
import { GetAPI, PostAPI } from "../../Axios/AxiosInstanceToken";
import { UpdateCarDetailsDTO } from "../../DTO/CarDTO/UpdateCarDeatilsDTO";
import { UpdateCarDiscountDTO } from "../../DTO/CarDTO/UpdateCarDiscountDTO";
import { saveQuotesForPWYL } from "../../DTO/HealthDTO/QuoteByActionDTO";
import { TBUYACTION } from "../../types/TwoWheeler/BuyAction";
import { CAR_URLS } from "../../URLCollection/car-node/CarURLs";
import { HealthURLs } from "../../URLCollection/health-php/HealthURLS";
import { URL_CONSTANTS } from "../../URLCollection/URL";

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
    `${CAR_URLS.GET_PROPOSAL_INFO}?type=${DTO.type}&quote_no=${DTO.quote_no}&product_id=${DTO.product_id}`,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const GET_PREVIEW_DATA = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  DTO: {
    type: string;
    quote_no: string;
    companyCode: string;
    product_id: string;
  }
) => {
  GetAPI.call(
    `${CAR_URLS.GET_PREVIEW_PAGE_DATA}?type=${DTO.type}&quote_no=${DTO.quote_no}&companyCode=${DTO.companyCode}&product_id=${DTO.product_id}`,
    (res: any) => onSuccess(res.data),
    onError
  );
};

// const UPDATE_ADDON_STATUS = (
//   onSuccess: Function,
//   onError: Function,
//   dto: {
//     quote_no: string;
//     addon: string;
//     value: "0" | "1";
//   }
// ) => {
//   PostAPI.call(
//     CAR_URLS.UPDATE_ADDON_STATUS,
//     dto,
//     (res: any) => onSuccess(res.data),
//     onError
//   );
// };
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
    CAR_URLS.UPDATE_ADDON_STATUS,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const UPDATE_ACCESSORIES_AMOUNT = (
  onSuccess: Function,
  onError: Function,
  dto: {
    quote_no: string;
    electric_accessory: string;
    non_electric_accessory: string;
    type: string;
  }
) => {
  PatchAPI.call(
    URL_CONSTANTS.UPDATE_CAR_ACCESSORIES,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const UPDATE_DISCOUNT_DETAILS = (
  onSuccess: Function,
  onError: Function,
  dto: UpdateCarDiscountDTO
) => {
  PatchAPI.call(
    URL_CONSTANTS.UPDATE_CAR_DISCOUNT,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const PREMIUM_RECALCULATION = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    product_code: string;
    quote_no: string;
    company_code: string;
  }
) => {
  PostAPI.call(
    CAR_URLS.PREMIUM_RECALCULATION,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const Capture_data = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: any
) => {
  PatchAPI.call(
    CAR_URLS.CAPTURE_RECORD,
    dto,
    (res: any) => onSuccess(res.data),
    onError
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
    CAR_URLS.GET_CITY_STATE_BY_PINCODE_ONLY,
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
    HealthURLs.saveQuotesForPickUpWhereYouLeft,
    dto,
    (res: any) => onSuccess(res.data),
    (res: any) => onError(res.data)
  );
};

const CREATE_PROPOSAL = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  param: any
) => {
  PostAPI.call(
    CAR_URLS.PAYMENT_URL,
    param,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const CREATE_INSPECTION = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  param: any
) => {
  PostAPI.call(
    CAR_URLS.CREATE_INSPECTION,
    param,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const BULK_UPDATE_ADDON_STATUS = (
  onSuccess: Function,
  onError: Function,
  dto: {
    quote_no: string;
    type: "CAR";
    invoice_cover: 0 | 1;
    depreciation_cover: 0 | 1;
    road_side_assistance: 0 | 1;
    consumables_cover: 0 | 1;
    no_claim_bonus_same_slab: 0 | 1;
    engine_gear_box_protection: 0 | 1;
    driver_cover: 0 | 1;
    pa_owner_driver: 1 | 0;
    key_replacement_cover: 0 | 1;
    tyre_secure_cover: 0 | 1;
    passernger_cover: any;
    personal_belonging: 0 | 1;
    cng_kit: any;
    electric_accessory: any;
    non_electric_accessory: any;
  }
) => {
  PatchAPI.call(
    CAR_URLS.BULK_UPDATE_ADDON_STATUS,
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
    `${CAR_URLS.GET_NOMINEE_RELATIONSHIP_LIST}${dto?.product_id}`,
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

const BUY_ACTION = (
  onSuccess: Function,
  onError: Function,
  dto: TBUYACTION
) => {
  PostAPI.call(
    CAR_URLS.BUY_ACTION,
    dto,
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
    `${CAR_URLS.GET_UPDATED_DATA}?insurance_type=${DTO.type}&quote_no=${DTO.quote_no}`,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const ADD_UPDATE_CAR_TAG = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: any
) => {
  PostAPI.call(
    CAR_URLS.ADD_UPDATE_CAR_TAG,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

export const CAR_SERVICES = {
  GET_NOMINEE_RELATIONSHIP_LIST,
  GET_PROPOSAL_INFO,
  UPDATE_ADDON_STATUS,
  UPDATE_ACCESSORIES_AMOUNT,
  UPDATE_DISCOUNT_DETAILS,
  PREMIUM_RECALCULATION,
  GetCityStateByPin,
  Capture_data,
  saveQuotesForPickUpWhereYouLeft,
  CREATE_PROPOSAL,
  BULK_UPDATE_ADDON_STATUS,
  CREATE_INSPECTION,
  GET_PREVIEW_DATA,
  UPDATE_IDV,
  GET_SINGLE_QUOTE_TP,
  GET_SINGLE_QUOTE_COMPREHENSIVE,
  GET_SINGLE_QUOTE_SAOD,
  BUY_ACTION,
  GET_UPDATED_DATA,
  ADD_UPDATE_CAR_TAG,
};
