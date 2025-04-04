import { TDropdown } from "../Common/TDropdown";
import { TFieldData } from "../Common/TFieldData";
import { TCareMedicalQuestion } from "../Health/HealthQuotation/TCareMedicalQuestion";

export type TTravelAddForm = {
  frequency: TFieldData;
  travelCountries: TFieldData;
  travelStartDate: TFieldData;
  travelEndDate: TFieldData;
  plan_type: TFieldData;
  travelDays: TFieldData;
  travelName: TFieldData;
  travelEmail: TFieldData;
  travelMobile: TFieldData;
  travelAges: Array<string>;
  memberDetails: {
    adult1_age: TFieldData,
    adult2_age: TFieldData,
    child1_age: TFieldData,
    child2_age: TFieldData,
    child3_age: TFieldData,
    child4_age: TFieldData,
  },
  travel_ped: TFieldData,
  sum_insured: TFieldData,
  spouse_status: boolean,
  mobile: TFieldData,
  members: TFieldData,
};

export type TTravelAddFormResponse = {
  quote_no: string;
  utm_medium: string;
  utm_source: string;
};

export type TTravelQuoteResponse = {
  productDetails: {
    sum_insured: number;
    id: number;
    product_code: string;
    product_name: string;
    product_desc: string;
    buy_online_code: string;
  };
  premiumDetails: {
    id: number,
    quote_no: string,
    insurance_type: string,
    product_id: number,
    product_code: string,
    company_code: string,
    sum_insured: string,
    premium: string,
    prev_premium: string,
    request: null,
    created: string,
    updated: string,
  },
  companyDetails: {
    company_code: string;
    company_name: string;
    company_address: string;
    logo: string;
  };
};

export type TTravelQuote = {
  logo: string;
  companyCode: string;
  productID: string;
  sumInsured: string;
  loader: boolean;
  quote_details: TTravelQuoteResponse;
};

export type DROPDOWN_MASTER = {
  CountryList: TDropdown[];
  SUM_INSURED: TDropdown[];
  OCCUPATION_DATA: TDropdown[];
};

export type TTravelNomineeDetails = {
  full_name: TFieldData;
  dob: TFieldData;
  relationship: TFieldData;
  insured_member?: boolean;
  prosper_details?: boolean;
  localstate?: boolean;
};

export type TAdultOneDetails = {
  IS_PROPOSER_INSURED?: boolean;
  name: { value: string | Date | null; warning: boolean };
  dob: { value: Date | null | string; warning: boolean };
  mobile: { value: string; warning: boolean };
  emergencyPhone: { value: string; warning: boolean };
  email: { value: string; warning: boolean };
  aadhar: { value: string; warning: boolean };
  gender: { value: string; warning: boolean };
  maritalStatus: { value: string; warning: boolean };
  weight: { value: string; warning: boolean };
  heightFeet: { value: string; warning: boolean };
  heightInches: { value: string; warning: boolean };
  occupation: { value: string; warning: boolean };
  proposer_name: { value: string; warning: boolean };
  relationship: { value: string; warning: boolean };
  pan_card: { value: string; warning: boolean };
  qualification: { value: string; warning: boolean };
  passportNumber: { value: string; warning: boolean };
};

export type TOtherMemberDetails = {
  name: { value: string; warning: boolean };
  dob: { value: Date | null | string; warning: boolean };
  relationship: { value: string; warning: boolean };
  passport: { value: string, warning: boolean },
  occupation: { value: string; warning: boolean };
  weight: { value: string; warning: boolean };
  heightFeet: { value: string; warning: boolean };
  heightInches: { value: string; warning: boolean };
};

export type TTwoAdultMemberDetails = {
  name: { value: string; warning: boolean };
  dob: { value: Date | null; warning: boolean };
  relationship: { value: string; warning: boolean };
  occupation: { value: string; warning: boolean };
  spouse_passport: { value: "", warning: false },
  weight: { value: string; warning: boolean };
  heightFeet: { value: string; warning: boolean };
  heightInches: { value: string; warning: boolean };
};

export type TAddressDetails = {
  pincode: { value: string; warning: boolean };
  city: string;
  state: string;
  addressLineOne: { value: string; warning: boolean };
  addressLineTwo: { value: string; warning: boolean };
  isMailingAddressSame: boolean;
  mailingPinCode: { value: string; warning: boolean };
  mailingCity: string;
  mailingState: string;
  mailingAddressLineOne: { value: string; warning: boolean };
  mailingAddressLineTwo: { value: string; warning: boolean };
};


export type TINSURED_MEMBER_DETAILS = {
  NOMINEE__DETAILS: TTravelNomineeDetails;
  PROPOSER_DETAILS: TAdultOneDetails;
  ADULT_ONE_DETAILS: TAdultOneDetails;
  ADULT_TWO_DETAILS: TTwoAdultMemberDetails;
  CHILD_ONE_DETAILS: TOtherMemberDetails;
  CHILD_TWO_DETAILS: TOtherMemberDetails;
  CHILD_THREE_DETAILS: TOtherMemberDetails;
  CHILD_FOUR_DETAILS: TOtherMemberDetails;
};

export type TCareAddon = {
  field_EHA_emergency_hotel: boolean;
  field_LTC_life_threatening: boolean;
  field_RVF_refund_of_visa: boolean;
  field_ASC_adventure_sports_cover: boolean;
  field_SR_staff_replacement: boolean;
  field_SC_sports_cover: boolean;
};

export type TPAYMENT_DATA = {
  quoteId: string;
  proposal_no: string;
  QuoteIdRefNumber: string;
  finalpremium: number;
  payment_link: string;
  err_description: string;
}

export type TTravelSlice = {
  ADD_FORM: TTravelAddForm;
  ADD_FORM_RESPONSE: TTravelAddFormResponse;
  REDIRECTED: boolean;
  SELECTED_QUOTE_DATA: TTravelQuote;
  INSURED_MEMBER_DETAILS: TINSURED_MEMBER_DETAILS;
  ADDRESS_DETAILS: TAddressDetails;
  DROPDOWN_DATA: DROPDOWN_MASTER;
  QUOTE_LOADER: boolean;
  PAGE_STATUS: boolean;
  NOMINEE_RELATIONSHIP_STATUS: string;
  ADDON_DETAILS: TCareAddon,
  MEDICAL_QUESTION_DATA_CARE: TCareMedicalQuestion;
  PAYMENT_DATA: TPAYMENT_DATA
};
