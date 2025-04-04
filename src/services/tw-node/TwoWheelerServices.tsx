import { URL_CONSTANTS } from "../../URLCollection/URL";
import { TW_URLs } from "../../URLCollection/tw-node/TWURLs";
import { GetAPI, PostAPI } from "../../Axios/AxiosInstanceToken";
import { EmailQuotesDTO } from "../../DTO/TWDTO/EmailQuotesDTO";
import { ADD_TW_DTO } from "../../DTO/TWDTO/Form/AddTWDTO";

const addTwoWheeler = (
  onSuccess: (data: any) => void,

  onError: (data: any) => void,

  dto: ADD_TW_DTO | ADD_TW_DTO
) => {
  PostAPI.call(
    URL_CONSTANTS.ADD_TWO_WHEELER,

    dto,

    (res: any) => onSuccess(res.data),

    onError,

    () => {}
  );
};

const getProductList = (
  onSuccess: (data: any) => void,

  onError: (data: any) => void
) => {
  GetAPI.call(
    URL_CONSTANTS.TWO_WHEELER_PRODUCT_LIST,

    (res: any) => onSuccess(res.data),

    onError
  );
};

const getTwoWheelerFuelType = (
  onSuccess: (data: any) => void,

  onError: (data: any) => void,

  dto: { make_model: string }
) => {
  PostAPI.call(
    URL_CONSTANTS.MASTER_DATA_TWO_WHEELER_FUEL_TYPE,

    dto,

    (res: any) => onSuccess(res.data),

    onError
  );
};

const getTwoWheelerVariant = (
  onSuccess: (data: any) => void,

  onError: (data: any) => void,

  dto: { fuel_type: string; make_model: string }
) => {
  PostAPI.call(
    URL_CONSTANTS.MASTER_DATA_TWO_WHEELER_VARIANT,

    dto,

    (res: any) => onSuccess(res.data),

    onError
  );
};

const getPreviousInsurerList = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  product_code?: any
) => {
  GetAPI.call(
    TW_URLs.GET_PREVIOUS_INSURER_LIST,
    {
      product_code: product_code,
    },
    (res: any) => onSuccess(res.data),

    onError
  );
};

const updateTwoWheelerDetail = (
  onSuccess: (data: any) => void,

  onError: (data: any) => void,

  dto: any
) => {
  PostAPI.call(
    URL_CONSTANTS.TWO_WHEELER_UPDATE_TWO_WHEELER_DETAIL,

    dto,

    (res: any) => onSuccess(res.data),

    onError
  );
};

const getSingleQuote = (
  onSuccess: (data: any) => void,

  onError: (data: any) => void,

  dto: any
) => {
  PostAPI.call(
    URL_CONSTANTS.TWO_WHEELER_SINGLE_QUOTATION,

    dto,

    (res: any) => onSuccess(res.data),

    onError
  );
};

const sendEmailQuote = (
  onSuccess: (data: any) => void,

  onError: (data: any) => void,

  dto: EmailQuotesDTO
) => {
  PostAPI.call(
    URL_CONSTANTS.TW_EMAIL_QUOTES,

    dto,

    (res: any) => onSuccess(res.data),

    onError
  );
};

export const TWO_WHEELER_SERVICES = {
  addTwoWheeler,
  getTwoWheelerFuelType,
  getProductList,
  getTwoWheelerVariant,
  getPreviousInsurerList,
  updateTwoWheelerDetail,
  getSingleQuote,
  sendEmailQuote,
};
