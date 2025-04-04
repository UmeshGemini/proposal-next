import { PostAPI, GetAPI } from "../../Axios/AxiosInstanceToken";
import { FormDataPostAPI } from "../../Axios/FormDataAxiosInstanceToken";
import { DTO_CIGNA_VERIFY_MANUAL_KYC } from "../../DTO/HealthDTO/CignaVerifyManualKyc";
import { DTO_VERIFY_MANUAL_KYC } from "../../DTO/HealthDTO/VerifyManualKyc";
import { CKYC_URLS } from "../../URLCollection/ckyc-node/CKYCURLs";

const CKYC_DROPDOWN_MASTER = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    company_code: string;
    list_for: "POA" | "POI" | "POV";
  }
) => {
  GetAPI.call(
    `${CKYC_URLS.CKYC_DROPDOWN_MASTER}${dto?.company_code}/doc/${dto?.list_for}`,
    "",
    (res: any) => onSuccess(res),
    onError
  );
};

const VERIFY_HDFC_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
    companyCode?: string;
    product_code?: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_HDFC_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_FUTURE_GENERALI_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
    companyCode?: string;
    product_code?: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_FUTURE_GENERALI_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_RELIANCE_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
    companyCode?: string;
    product_code?: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_RELIANCE_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_KOTAK_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
    companyCode?: string;
    product_code?: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_KOTAK_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_ICICI_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
    correlationId: string | undefined;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_ICICI_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_ICICI_CKYC_MOTOR = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
    correlationId: string | undefined;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_ICICI_CKYC_MOTOR,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};
const VERIFY_IFFCO_TOKIO_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
    correlationId: string | undefined;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_IFFCO_TOKIO_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};
const VERIFY_ICICI_CKYC_HEALTH = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
    correlationId: string | undefined;
    product_id: number;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_ICICI_CKYC_HEALTH,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};
const VERIFY_BAJAJ_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_BAJAJ_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_BAJAJ_HEALTH_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
    product_id: number;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_BAJAJ_CKYC_HEALTH,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_RSA_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_RSA_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};
const VERIFY_RSA_HP_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_RSA_HP__CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_TATA_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: any
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_TATA_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_GO_DIGIT_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: any
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_GO_DIGIT_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const GET_CKYC_DETAILS_FROM_HDFC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    vehicle_owned: string;
    kyc_id: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.GET_CKYC_DETAILS_FROM_HDFC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const GET_CKYC_DETAILS_FROM_FUTURE_GENERALI = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    vehicle_owned: string;
    kyc_id: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.GET_CKYC_DETAILS_FROM_HDFC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const GET_CKYC_DETAILS_FROM_KOTAK = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: any
) => {
  PostAPI.call(
    CKYC_URLS.GET_CKYC_DETAILS_FROM_KOTAK,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const GET_CKYC_DETAILS_FROM_RSA = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    uniqueId: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.GET_CKYC_DETAILS_FROM_RSA,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};
const VERIFY_NATIONAL_MANUAL_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: any
) => {
  FormDataPostAPI.call(
    CKYC_URLS.VERIFY_NATIONAL_MANUAL_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const ICICI_MANUAL_KYC_MOTOR = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: any
) => {
  PostAPI.call(
    CKYC_URLS.ICICI_MANUAL_KYC_MOTOR,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const ICICI_MANUAL_KYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
    ckycdetails: string;
    docNameForKyc1: string;
    indetityDocument: string;
    product_id?: number | string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.ICICI_MANUAL_KYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const CARE_MANUAL_KYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insurance_type: string;
    ckycdetails: string;
    docNameForKyc1: string;
    indetityDocument: string;
    product_id?: number | string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_CARE_MANUAL_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const IFFCO_TOKIO_MANUAL_KYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    insuranceType: string;
    companyCode: string;
    ckycdetails: string;
    cusType: string;
    genderForKyc: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    otherDocNameForKyc: string;
    otherDocIDNoForKyc: string;
    kycPincode: string;
    addressPHouse: string;
    addressPCity: string;
    addressPState: string;
    document: string;
    otherDocument: string;
    photoDocument: string;
    relationshipType: any;
  }
) => {
  PostAPI.call(
    CKYC_URLS.IFFCO_TOKIO_MANUAL_KYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const BAJAJ_MANUAL_KYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
    transactionId: string | undefined;
    ckycdetails: string;
    docNameForKyc1: string;
    indetityDocument: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.MANUAL_BAJAJ_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const BAJAJ_MANUAL_HEALTH_KYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    product_code: string;
    cusType: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    genderForKyc: string;
    insuranceType: string;
    ckycdetails: string;
    docNameForKyc1: string;
    indetityDocument: string;
    addressDocument: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.MANUAL_BAJAJ_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_CARE_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    product_code: string;
    product_id: string;
    // kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    // genderForKyc: string;
    insuranceType: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_CARE_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_STAR_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    cusType: string;
    quote_no: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    addressPPincode: string;
    addressPCity: string;
    addressPArea: string;
    addressPHouse: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_STAR_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};
const VERIFY_ADITYA_BIRLA_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    cusType: string;
    quote_no: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    // addressPPincode: string;
    // addressPCity: string;
    // addressPArea: string;
    // addressPHouse: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_ADITYA_BIRLA_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_CIGNA_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    cusType: string;
    quote_no: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_CIGNA_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const GET_CITY_BY_PINCODE = (
  onSuccess: Function,
  onError: Function,
  param: any
) => {
  GetAPI.call(
    `${CKYC_URLS.GET_CITY_BY_PINCODE}?pincode=${param}`,
    {},
    (res: any) => onSuccess(res.data),
    onError
  );
};
const GET_AREA_BY_CITY = (
  onSuccess: Function,
  onError: Function,
  pincode: any,
  city_id: any
) => {
  GetAPI.call(
    `${CKYC_URLS.GET_AREA_BY_CITY}?pincode=${pincode}&city_id=${city_id}`,
    {},
    (res: any) => onSuccess(res.data),
    onError
  );
};

const getRelationData = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    product_code: string;
    relationship?: string;
    buy_online_code?: string;
  }
) => {
  GetAPI.call(
    `${CKYC_URLS.GET_RELATION_DATA}?buy_online_code=${dto.buy_online_code}&relationship=${dto.relationship}&product_code=${dto.product_code}`,
    (res: any) => onSuccess(res.data),
    (res: any) => onError(res.data)
  );
};

const VERIFY_STAR_MANUAL_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: DTO_VERIFY_MANUAL_KYC
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_STAR_MANUAL_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_CIGNA_MANUAL_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: DTO_CIGNA_VERIFY_MANUAL_KYC
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_CIGNA_MANUAL_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_NIVA_BUPA_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    cusType: string;
    insuranceType: string;
    companyCode: string;
    kycCusName: string;
    dobForKyc: string;
    docNameForKyc: string;
    docIDNoForKyc: string;
    kycCusMobNo: string;
    kycCusEmail: string;
    genderForKyc: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_NIVA_BUPA_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const GET_KYC_DETAIL_ADITYA_BIRLA = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: {
    quote_no: string;
    TransactionId: string;
  }
) => {
  PostAPI.call(
    CKYC_URLS.GET_KYC_DETAIL_ADITYA_BIRLA,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const get_document_type_list = (
  onSuccess: any,
  onError: any,
  companyCode: string,
  docFor: string
) => {
  GetAPI.call(
    `${CKYC_URLS.get_document_type_list(companyCode, docFor)}`,
    onSuccess,
    onError
  );
};

const VERIFY_NATIONAL_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: any
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_NATIONAL_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_ZUNO_CKYC = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: any
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_ZUNO_CKYC,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

const VERIFY_ZUNO_OVD = (
  onSuccess: (data: any) => void,
  onError: (data: any) => void,
  dto: any
) => {
  PostAPI.call(
    CKYC_URLS.VERIFY_ZUNO_OVD,
    dto,
    (res: any) => onSuccess(res.data),
    onError
  );
};

export const CKYCServcies = {
  VERIFY_ZUNO_OVD,
  VERIFY_ZUNO_CKYC,
  VERIFY_ICICI_CKYC_MOTOR,
  ICICI_MANUAL_KYC_MOTOR,
  CKYC_DROPDOWN_MASTER,
  VERIFY_HDFC_CKYC,
  VERIFY_RELIANCE_CKYC,
  VERIFY_ICICI_CKYC,
  VERIFY_RSA_CKYC,
  VERIFY_RSA_HP_CKYC,
  VERIFY_GO_DIGIT_CKYC,
  GET_CKYC_DETAILS_FROM_HDFC,
  GET_CKYC_DETAILS_FROM_RSA,
  ICICI_MANUAL_KYC,
  VERIFY_CARE_CKYC,
  VERIFY_BAJAJ_CKYC,
  BAJAJ_MANUAL_KYC,
  VERIFY_ICICI_CKYC_HEALTH,
  GET_CKYC_DETAILS_FROM_KOTAK,
  VERIFY_KOTAK_CKYC,
  VERIFY_TATA_CKYC,
  GET_CITY_BY_PINCODE,
  VERIFY_STAR_CKYC,
  GET_AREA_BY_CITY,
  getRelationData,
  VERIFY_STAR_MANUAL_CKYC,
  VERIFY_NIVA_BUPA_CKYC,
  VERIFY_ADITYA_BIRLA_CKYC,
  VERIFY_BAJAJ_HEALTH_CKYC,
  BAJAJ_MANUAL_HEALTH_KYC,
  VERIFY_CIGNA_CKYC,
  VERIFY_CIGNA_MANUAL_CKYC,
  VERIFY_FUTURE_GENERALI_CKYC,
  GET_CKYC_DETAILS_FROM_FUTURE_GENERALI,
  GET_KYC_DETAIL_ADITYA_BIRLA,
  VERIFY_IFFCO_TOKIO_CKYC,
  IFFCO_TOKIO_MANUAL_KYC,
  get_document_type_list,
  CARE_MANUAL_KYC,
  VERIFY_NATIONAL_CKYC,
  VERIFY_NATIONAL_MANUAL_CKYC,
};
