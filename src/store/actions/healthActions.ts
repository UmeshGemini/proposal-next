import { PayloadAction } from "@reduxjs/toolkit";
import { TAddressDetails } from "../types/Common/TAddressDetails";
import { TDropdown } from "../types/Common/TDropdown";
import { THealthFormResponse } from "../types/Health/Form/THealthFormResponse";
import { TRSAAddon } from "../types/Health/HealthQuotation/TAddonRSA";
import { TADITYABIRLAAddon } from "../types/Health/HealthQuotation/TADITYABIRLAAddon";
import { TAdityaBirlaMedicalQuestion } from "../types/Health/HealthQuotation/TAdityaBirlaMedicalQuestion";
import { TBajajMedicalQuestion } from "../types/Health/HealthQuotation/TBajajMedicalQuestion";
import { TCareHeartMedicalQuestion } from "../types/Health/HealthQuotation/TCareHeartMedicalQuestion";
import { TCareMedicalQuestion } from "../types/Health/HealthQuotation/TCareMedicalQuestion";
import { TCignaMedicalQuestion } from "../types/Health/HealthQuotation/TCignaMedicalQuestion";
import { TGoDigitMedicalQuestion } from "../types/Health/HealthQuotation/TGodigitMedicalQuestion";
import { THealthBuyActionResopnse } from "../types/Health/HealthQuotation/THealthBuyActionResponse";
import { THealthQuote } from "../types/Health/HealthQuotation/THealthQuote";
import { TKotakMedicalQuestion } from "../types/Health/HealthQuotation/TKotakMedicalQuestion";
import { TNivaBupaAddonQuestion } from "../types/Health/HealthQuotation/TNivaBupaAddonQuestion";
import { TNivaBupaMedicalQuestion } from "../types/Health/HealthQuotation/TNivaBupaMedicalQuestion";
import { TRSAMedicalQuestion } from "../types/Health/HealthQuotation/TRSAMedicalQuestion";
import { TBAJAJAddon } from "../types/Health/ProposalDeatail/TBAJAJAddon/TBAJAJAddon";
import {
  TADDON_DETAILS_CIGNA_LIFETIME_INDIA,
  TADDON_DETAILS_CIGNA_PRIME_ACTIVE,
  TADDON_DETAILS_CIGNA_PRIME_ADVANTAGE,
  TADDON_DETAILS_CIGNA_PRIME_PROTECT,
} from "../types/Health/ProposalDeatail/TCIGNAAddon/TCIGNAAddon";
import {
  TGOLDEN_SHIELDICICIAddon,
  TICICAddon,
} from "../types/Health/ProposalDeatail/TICICAddon/TICICAddon";
import { TKOTAK_EDGE } from "../types/Health/ProposalDeatail/TKotak/TKOTAK";
import { TCareAddon } from "../types/Health/TCareAddon";
import { TGoDigitAddon } from "../types/Health/TGoDigitAddon";
import {
  DROPDOWN_MASTER,
  INSURED_MEMBER_DETAILS,
  TCIS_DATA,
  THealthAddForm,
  THealthNomineeDetails,
  THealthSlice,
  TkycDetails,
  TPAYMENT_DATA,
} from "../types/Health/THealthSlice";
import {
  TAdultOneDetails,
  TOtherMemberDetails,
} from "../types/Travel/TTravelSlice";

function BULK_UPLOAD(state: THealthSlice, action: PayloadAction<THealthSlice>) {
  const data: THealthSlice = { ...state, ...action.payload };

  return data;
}
function SET_HEALTH_SLICE(
  state: THealthSlice,
  action: PayloadAction<THealthSlice>
) {
  let data: THealthSlice = action.payload;
  return data;
}

function setAddFormData(
  state: THealthSlice,
  action: PayloadAction<THealthAddForm>
) {
  return {
    ...state,
    ADD_FORM: { ...state.ADD_FORM, ...action.payload },
  };
}

function updateMultipleKeysInAddForm(
  state: THealthSlice,
  action: PayloadAction<Partial<THealthSlice["ADD_FORM"]>>
) {
  state.ADD_FORM = {
    ...state.ADD_FORM,
    ...action.payload,
  };
}

function updateMultipleKeysInAddFormResponse(
  state: THealthSlice,
  action: PayloadAction<Partial<THealthSlice["ADD_FORM_RESPONSE"]>>
) {
  state.ADD_FORM_RESPONSE = {
    ...state.ADD_FORM_RESPONSE,
    ...action.payload,
  };
}

function setAddFormResponse(
  state: THealthSlice,
  action: PayloadAction<THealthFormResponse>
) {
  return { ...state, ADD_FORM_RESPONSE: action.payload };
}

function setAddFormResponseUpdateOneKey(
  state: THealthSlice,
  action: PayloadAction<{ key: keyof THealthFormResponse; value: any }>
) {
  const { key, value } = action.payload;
  return {
    ...state,
    ADD_FORM_RESPONSE: {
      ...state.ADD_FORM_RESPONSE,
      [key]: value,
    },
  };
}

const SAVE_ALL_QUOTES_DATA = (
  state: THealthSlice,
  action: PayloadAction<THealthQuote[]>
) => {
  const data = {
    ...state,
    ALL_QUOTES_DATA: action.payload,
  };

  return data;
};

const SAVE_SELECTED_QUOTE_DATA = (
  state: THealthSlice,
  action: PayloadAction<THealthQuote>
) => {
  console.log("qqqqq", action.payload);
  const data = {
    ...state,
    SELECTED_QUOTE_DATA: action.payload,
  };

  return data;
};

const SAVE_BUYACTION_RESPONSE_DATA = (
  state: THealthSlice,
  action: PayloadAction<THealthBuyActionResopnse>
) => {
  const data = {
    ...state,
    BUYACTION_RESPONSE_DATA: action.payload,
  };

  return data;
};

type KEY_MEMBER_FORM_DATA = keyof INSURED_MEMBER_DETAILS;
const SAVE_INSURED_MEMBER_DETAILS = (
  state: THealthSlice,
  action: PayloadAction<{
    key: KEY_MEMBER_FORM_DATA;
    value: TOtherMemberDetails | TAdultOneDetails | THealthNomineeDetails;
  }>
) => {
  const { key, value } = action.payload;
  const data: THealthSlice = {
    ...state,
    INSURED_MEMBER_DETAILS: { ...state.INSURED_MEMBER_DETAILS, [key]: value },
  };
  return data;
};

const SAVE_ADDRESS_DETAILS = (
  state: THealthSlice,
  action: PayloadAction<TAddressDetails>
) => {
  const data: THealthSlice = {
    ...state,
    ADDRESS_DETAILS: { ...action.payload },
  };
  return data;
};

const SAVE_MEDICAL_QUESTION_DATA_IIFCO = (
  state: THealthSlice,
  action: PayloadAction<any>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_IIFCO: action.payload,
  };

  return data;
};
const SAVE_MEDICAL_QUESTION_DATA_GO_DIGIT = (
  state: THealthSlice,
  action: PayloadAction<TGoDigitMedicalQuestion>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_GO_DIGIT: action.payload,
  };

  return data;
};
const SAVE_MEDICAL_QUESTION_DATA_FUTURE_GENERALI = (
  state: THealthSlice,
  action: PayloadAction<any>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_FUTURE_GENERALI: action.payload,
  };

  return data;
};
const SAVE_MEDICAL_QUESTION_DATA_STAR = (
  state: THealthSlice,
  action: PayloadAction<any>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_STAR: action.payload,
  };

  return data;
};

const SAVE_MEDICAL_QUESTION_DATA_STAR_RED_CARPET = (
  state: THealthSlice,
  action: PayloadAction<any>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_STAR_RED_CARPET: action.payload,
  };

  return data;
};
const SAVE_MEDICAL_QUESTION_DATA_STAR_FHO = (
  state: THealthSlice,
  action: PayloadAction<any>
) => {
  console.log("action", action.payload);
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_STAR_FHO: action.payload,
  };
  console.log("actionData", data);
  return data;
};

const SAVE_MEDICAL_QUESTION_DATA_SUPER_STAR = (
  state: THealthSlice,
  action: PayloadAction<any>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_SUPER_STAR: action.payload,
  };
  return data;
};
const UPDATE_KYC_DETAILS = (
  state: THealthSlice,
  action: PayloadAction<TkycDetails>
) => {
  const data = {
    ...state,

    KYC_DETAILS: action.payload,
  };

  return data;
};

const UPDATE_QUOTE_LOADER_STATUS = (
  state: THealthSlice,
  action: PayloadAction<boolean>
) => {
  const data = {
    ...state,

    QUOTE_LOADER: action.payload,
  };

  return data;
};
const CHANGE_PAGE_STATUS = (
  state: THealthSlice,
  action: PayloadAction<boolean>
) => {
  const data = {
    ...state,

    PAGE_STATUS: action.payload,
  };

  return data;
};

type COMMON_DROPDOWN_DATA_API = keyof DROPDOWN_MASTER;
const HEALTH_DROPDOWNDATA = (
  state: THealthSlice,
  action: PayloadAction<{ key: COMMON_DROPDOWN_DATA_API; value: TDropdown[] }>
) => {
  const { key, value } = action.payload;
  let data = { ...state };
  data = {
    ...state,
    DROPDOWN_DATA: {
      ...state.DROPDOWN_DATA,
      [key]: value,
    },
  };
  return data;
};

const CHANGE_NOMINEE_STATUS = (
  state: THealthSlice,
  action: PayloadAction<"ADULT_2" | "OTHER">
) => {
  let data = { ...state };
  data = {
    ...state,
    NOMINEE_RELATIONSHIP_STATUS: action.payload,
  };
  return data;
};
const ADDON_DETAILS_DATA = (
  state: THealthSlice,
  action: PayloadAction<TCareAddon>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS: action.payload,
  };
  return data;
};

//icic addon_detals_data

const ADDON_DETAILS_DATA_ICIC = (
  state: THealthSlice,
  action: PayloadAction<TICICAddon>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS_ICIC: action.payload,
  };
  return data;
};

const ADDON_DETAILS_DATA_RSA = (
  state: THealthSlice,
  action: PayloadAction<TRSAAddon>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS_RSA: action.payload,
  };
  return data;
};

const ADDON_DETAILS_DATA_ADITYA_BIRLA = (
  state: THealthSlice,
  action: PayloadAction<TADITYABIRLAAddon>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS_ADITYA_BIRLA: action.payload,
  };
  return data;
};

const PREVIEW_LOADER = (
  state: THealthSlice,
  action: PayloadAction<boolean>
) => {
  let data = { ...state };
  data = {
    ...data,
    Preview_Loader: action.payload,
  };
  return data;
};
const SAVE_MEDICAL_QUESTION_DATA_CARE = (
  state: THealthSlice,
  action: PayloadAction<any>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_CARE: action.payload,
  };

  return data;
};
const SAVE_MEDICAL_QUESTION_DATA_HDFC = (
  state: THealthSlice,
  action: PayloadAction<any>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_HDFC: action.payload,
  };

  return data;
};
const SAVE_MEDICAL_QUESTION_DATA_HDFC_OPTIMA_RESTORE = (
  state: THealthSlice,
  action: PayloadAction<any>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_OPTIMA_RESTORE: action.payload,
  };

  return data;
};
const SAVE_MEDICAL_QUESTION_DATA_HDFC_HEALTH = (
  state: THealthSlice,
  action: PayloadAction<any>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_OPTIMA_SECURE: action.payload,
  };

  return data;
};
const SAVE_MEDICAL_QUESTION_DATA_ICIC = (
  state: THealthSlice,
  action: PayloadAction<any>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_ICIC: action.payload,
  };

  return data;
};
const FORM_DOB_MODEL = (
  state: THealthSlice,
  action: PayloadAction<boolean>
) => {
  const data = {
    ...state,

    Form_dob_model: action.payload,
  };

  return data;
};
const FORM_MEMBER_MODEL = (
  state: THealthSlice,
  action: PayloadAction<boolean>
) => {
  const data = {
    ...state,
    Form_member_model: action.payload,
  };
  console.log("data66", data);
  return data;
};

const MEDICAL_POPUP_MHS = (
  state: THealthSlice,
  action: PayloadAction<boolean>
) => {
  console.log(action.payload, "erer");
  const data = {
    ...state,
    medical_popup_mhs: action.payload,
  };
  console.log("data66", data);
  return data;
};
const ADDFORM_DATA = (
  state: THealthSlice,
  action: PayloadAction<THealthAddForm>
) => {
  let data = { ...state };
  data = {
    ...state,
    ADD_FORM: action.payload,
  };
  return data;
};
const PAYMENT_DATA = (
  state: THealthSlice,
  action: PayloadAction<TPAYMENT_DATA>
) => {
  let data = { ...state };
  data = {
    ...state,
    PAYMENT_DATA: action.payload,
  };
  return data;
};
const CIS_DATA = (state: THealthSlice, action: PayloadAction<TCIS_DATA>) => {
  let data = { ...state };
  data = {
    ...state,
    CIS_DATA: action.payload,
  };
  return data;
};

const UPDATE_DEDUCTION_VALUE = (state: any, action: any) => {
  let data = { ...state };
  data = {
    ...state,
    isDeduction_value: action.payload,
  };
  return data;
};
const UPDATE_PAST_HEALTH_INSURANCE_VALUE = (
  state: THealthSlice,
  action: PayloadAction<string>
) => {
  let data = { ...state };
  data = {
    ...state,
    past_health_insurance_value: action.payload,
  };
  return data;
};

const SAVE_MEDICAL_QUESTION_DATA_NIVA_BUPA = (
  state: THealthSlice,
  action: PayloadAction<TNivaBupaMedicalQuestion>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_NIVA_BUPA: action.payload,
  };

  return data;
};

const SAVE_MEDICAL_QUESTION_DATA_BAJAJ = (
  state: THealthSlice,
  action: PayloadAction<TBajajMedicalQuestion>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_BAJAJ: action.payload,
  };

  return data;
};

const SAVE_MEDICAL_QUESTION_DATA_ADITYA_BIRLA = (
  state: THealthSlice,
  action: PayloadAction<TAdityaBirlaMedicalQuestion>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_ADITYA_BIRLA: action.payload,
  };

  return data;
};

const SAVE_MEDICAL_QUESTION_DATA_CIGNA = (
  state: THealthSlice,
  action: PayloadAction<TCignaMedicalQuestion>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_CIGNA: action.payload,
  };
  return data;
};

const ADDON_DETAILS_DATA_NIVA_BUPA = (
  state: THealthSlice,
  action: PayloadAction<TNivaBupaAddonQuestion>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_QUESTION_NIVA_BUPA: action.payload,
  };
  return data;
};

const ADDON_DETAILS_DATA_GOLDEN_SHIELD_ICIC = (
  state: THealthSlice,
  action: PayloadAction<TGOLDEN_SHIELDICICIAddon>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS_GOLDEN_SHIELD_ICICI: action.payload,
  };
  return data;
};

const ADDON_DETAILS_DATA_GODIGIT = (
  state: THealthSlice,
  action: PayloadAction<TGoDigitAddon>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS_GODDIGIT: action.payload,
  };
  return data;
};

const ADDON_DETAILS_DATA_KOTAK_EDGE = (
  state: THealthSlice,
  action: PayloadAction<TKOTAK_EDGE>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS_KOTAK: action.payload,
  };
  return data;
};

const ADDON_DETAILS_DATA_BAJAJ = (
  state: THealthSlice,
  action: PayloadAction<TBAJAJAddon>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS_BAJAJ: action.payload,
  };
  return data;
};

const ADDON_DETAILS_CIGNA_PRIME_ADVANTAGE = (
  state: THealthSlice,
  action: PayloadAction<TADDON_DETAILS_CIGNA_PRIME_ADVANTAGE>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS_CIGNA_PRIME_ADVANTAGE: action.payload,
  };
  return data;
};

const ADDON_DETAILS_CIGNA_PRIME_ACTIVE = (
  state: THealthSlice,
  action: PayloadAction<TADDON_DETAILS_CIGNA_PRIME_ACTIVE>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS_CIGNA_PRIME_ACTIVE: action.payload,
  };
  return data;
};

const ADDON_DETAILS_CIGNA_PRIME_PROTECT = (
  state: THealthSlice,
  action: PayloadAction<TADDON_DETAILS_CIGNA_PRIME_PROTECT>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS_CIGNA_PRIME_PROTECT: action.payload,
  };
  return data;
};

const ADDON_DETAILS_CIGNA_LIFETIME_INDIA = (
  state: THealthSlice,
  action: PayloadAction<TADDON_DETAILS_CIGNA_LIFETIME_INDIA>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS_CIGNA_LIFETIME_INDIA: action.payload,
  };
  return data;
};

const ADDON_DETAILS_CIGNA_LIFETIME_GLOBAL = (
  state: THealthSlice,
  action: PayloadAction<TADDON_DETAILS_CIGNA_LIFETIME_INDIA>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS_CIGNA_LIFETIME_INDIA: action.payload,
  };
  return data;
};

const SAVE_MEDICAL_QUESTION_DATA_KOTAK = (
  state: THealthSlice,
  action: PayloadAction<TKotakMedicalQuestion>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_KOTAK: action.payload,
  };

  return data;
};

const SAVE_MEDICAL_QUESTION_DATA_RSA = (
  state: THealthSlice,
  action: PayloadAction<TRSAMedicalQuestion>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_RSA: action.payload,
  };

  return data;
};
const SAVE_MEDICAL_QUESTION_DATA_CARE_HEART = (
  state: THealthSlice,
  action: PayloadAction<TCareHeartMedicalQuestion>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_CARE_HEART: action.payload,
  };

  return data;
};

const SAVE_MEDICAL_QUESTION_DATA_ICICI_ELEVATE = (
  state: THealthSlice,
  action: PayloadAction<TCareMedicalQuestion>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_ICICI_ELEVATE: action.payload,
  };
  return data;
};

const ADDON_DETAILS_DATA_ELEVATE_ICIC = (
  state: THealthSlice,
  action: PayloadAction<any>
) => {
  let data = { ...state };
  data = {
    ...data,
    ADDON_DETAILS_ELEVATE_ICICI: action.payload,
  };
  return data;
};

const SAVE_MEDICAL_QUESTION_DATA_NIVA_BUPA_ASPIRE_ADULT = (
  state: THealthSlice,
  action: PayloadAction<TNivaBupaMedicalQuestion>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_NIVA_BUPA_ASPIRE_ADULT: action.payload,
  };

  return data;
};

const SAVE_MEDICAL_QUESTION_DATA_NIVA_BUPA_ASPIRE_YOUTH = (
  state: THealthSlice,
  action: PayloadAction<TNivaBupaMedicalQuestion>
) => {
  const data = {
    ...state,
    MEDICAL_QUESTION_DATA_NIVA_BUPA_ASPIRE_YOUTH: action.payload,
  };

  return data;
};

export const HEALTH_REDUCERS = {
  ADDON_DETAILS_DATA_ELEVATE_ICIC,
  SAVE_MEDICAL_QUESTION_DATA_ICICI_ELEVATE,
  BULK_UPLOAD,
  SET_HEALTH_SLICE,
  ADDFORM_DATA,
  MEDICAL_POPUP_MHS,
  setAddFormData,
  setAddFormResponse,
  FORM_MEMBER_MODEL,
  SAVE_ALL_QUOTES_DATA,
  ADDON_DETAILS_DATA,
  PAYMENT_DATA,
  CIS_DATA,
  SAVE_BUYACTION_RESPONSE_DATA,
  SAVE_INSURED_MEMBER_DETAILS,
  SAVE_ADDRESS_DETAILS,
  ADDON_DETAILS_DATA_ICIC,
  SAVE_MEDICAL_QUESTION_DATA_IIFCO,
  ADDON_DETAILS_DATA_RSA,
  ADDON_DETAILS_DATA_ADITYA_BIRLA,
  SAVE_MEDICAL_QUESTION_DATA_GO_DIGIT,
  SAVE_MEDICAL_QUESTION_DATA_FUTURE_GENERALI,
  SAVE_MEDICAL_QUESTION_DATA_STAR,
  SAVE_MEDICAL_QUESTION_DATA_STAR_FHO,
  SAVE_MEDICAL_QUESTION_DATA_CARE,
  SAVE_MEDICAL_QUESTION_DATA_HDFC,
  SAVE_MEDICAL_QUESTION_DATA_ICIC,
  SAVE_MEDICAL_QUESTION_DATA_HDFC_OPTIMA_RESTORE,
  SAVE_MEDICAL_QUESTION_DATA_HDFC_HEALTH,
  HEALTH_DROPDOWNDATA,
  SAVE_SELECTED_QUOTE_DATA,
  CHANGE_PAGE_STATUS,
  CHANGE_NOMINEE_STATUS,
  PREVIEW_LOADER,
  FORM_DOB_MODEL,
  UPDATE_QUOTE_LOADER_STATUS,
  setAddFormResponseUpdateOneKey,
  UPDATE_KYC_DETAILS,
  updateMultipleKeysInAddForm,
  updateMultipleKeysInAddFormResponse,
  UPDATE_DEDUCTION_VALUE,
  UPDATE_PAST_HEALTH_INSURANCE_VALUE,
  SAVE_MEDICAL_QUESTION_DATA_NIVA_BUPA,
  ADDON_DETAILS_DATA_NIVA_BUPA,
  ADDON_DETAILS_DATA_GOLDEN_SHIELD_ICIC,
  ADDON_DETAILS_DATA_GODIGIT,
  ADDON_DETAILS_DATA_BAJAJ,
  ADDON_DETAILS_DATA_KOTAK_EDGE,
  SAVE_MEDICAL_QUESTION_DATA_BAJAJ,
  SAVE_MEDICAL_QUESTION_DATA_ADITYA_BIRLA,
  SAVE_MEDICAL_QUESTION_DATA_KOTAK,
  SAVE_MEDICAL_QUESTION_DATA_RSA,
  ADDON_DETAILS_CIGNA_PRIME_ADVANTAGE,
  ADDON_DETAILS_CIGNA_PRIME_ACTIVE,
  ADDON_DETAILS_CIGNA_PRIME_PROTECT,
  ADDON_DETAILS_CIGNA_LIFETIME_INDIA,
  SAVE_MEDICAL_QUESTION_DATA_CIGNA,
  SAVE_MEDICAL_QUESTION_DATA_CARE_HEART,
  SAVE_MEDICAL_QUESTION_DATA_STAR_RED_CARPET,
  ADDON_DETAILS_CIGNA_LIFETIME_GLOBAL,
  SAVE_MEDICAL_QUESTION_DATA_SUPER_STAR,
  SAVE_MEDICAL_QUESTION_DATA_NIVA_BUPA_ASPIRE_ADULT,
  SAVE_MEDICAL_QUESTION_DATA_NIVA_BUPA_ASPIRE_YOUTH,
};

export type HealthReducers = typeof HEALTH_REDUCERS;
