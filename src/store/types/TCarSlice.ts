import { TAddonsValueType, TCARPlanDetails } from "./Car/TAddonsValueType";
import { TCarAddonStatus } from "./Car/TCarAddonStatus";
import { TCarNoQuoteReason } from "./Car/TCarerpattributType";
import { TCarProduct } from "./Car/TCarProduct";
import { TAddressDetails } from "./Common/TAddressDetails";
import { TDropdown } from "./Common/TDropdown";
import { TFieldData } from "./Common/TFieldData";
import { TDropdownData } from "./DropdownData/DropdownData";

export type TWDropdown = {
  previous_insurer: TDropdownData[];
  make_model: TDropdownData[];
  fuel_type: TDropdownData[];
  variant: TDropdownData[];
  planType: TDropdownData[];
};

export type TClaimStatus = "Yes" | "No";
export type TNCB = "0" | "20" | "25" | "35" | "45" | "50";

export type TCarAddForm = {
  utm_medium_d: string;
  reg_no: TFieldData;
  previous_policy_type: TFieldData;
  invoice_date: TFieldData;
  reg_date: TFieldData;
  business_type: "Rollover" | "New" | "Expired";
  make: TFieldData;
  model: TFieldData;
  make_model: TFieldData;
  fuel_type: TFieldData;
  variant_cc: TFieldData;
  previous_insurer: TFieldData;
  mobile: TFieldData;
  claimed: TClaimStatus;
  prev_ncb: TNCB;
  new_ncb: TFieldData;
  rto: TFieldData;
  policy_expiry_date: TFieldData;
  name: TFieldData;
  pincode: TFieldData;
};

export type TCarDiscount = {
  vehicle_owned: "Individual" | "Organization";
  anti_theft_device: "No" | "Yes";
  deductible: "0" | "2500" | "5000" | "7500" | "15000";
};

export type TCarAddFormResponse = {
  Selected_Idv_Default: string;
  Plans_Listed_Final: string;
  lead_id: string;
  num_brands_listed: number;
  num_plans_listed: number;
  quote_no: string;
  insurance_type: string;
  make_model: string;
  variant_cc: string;
  fuel_type: string;
  business_type: string;
  tp_policy_start_date: string;
  policy_expiry_date: string;
  new_policy_date: string;
  manufacture_date: string;
  registration_date: string;
  registration_no: string;
  rto_code: string;
  previous_insurer: string;
  tp_previous_insurer: string;
  previous_ncb: "0" | "20" | "25" | "35" | "45" | "50";
  new_ncb: "0" | "20" | "25" | "35" | "45" | "50";
  claim_made: "Yes" | "No";
  car_master_data_id: number;
  make: string;
  model: string;
  variant: string;
  cubic_capacity: string;
  seating_capacity: string;
  actual_reg_no: string;
  idv: string;
  utm_medium: string;
  utm_source: string;
  insurer_types: {};
};
export type TCarVehicleDetails = {
  reg_date: TFieldData;
  chasis_no: TFieldData;
  engine_no: TFieldData;
  pan_no: TFieldData;
  prev_policy_no: TFieldData;
  prev_insurer: TFieldData;
  mfg_year: TFieldData;
  policy_exp_date: TFieldData;
  tp_policy: TFieldData;
  tp_insurer: TFieldData;
  tp_policy_start: TFieldData;
  bank_name: TFieldData;
  city: TFieldData;
  is_vehicle_on_loan: boolean;
  IS_OWNERSHIP_CHANGED: boolean;
  prev_rti_cover: boolean;
  prev_cng_cover: boolean;
  prev_depth_cover: boolean;
  prev_engine_cover: boolean;
  prev_tyre_cover: boolean;
  prev_consumable_cover: boolean;
};

export type TCkycDetails = {
  propFullName: string;
  ProposerDob: string;
  docID: string;
  cusdtomertype: string;
  verificationDoc: string;
  gender: string;
};

export type TCarOwnerDetails = {
  name: TFieldData;
  mobile: TFieldData;
  email: TFieldData;
  dob: TFieldData;
  gender: TFieldData;
  pincode?: TFieldData;
  maritalStatus: TFieldData;
  gst: TFieldData;
  pacover: TFieldData;
  validPuc: boolean;
  vehicleRegistered: boolean;
  isPolicyComprehensive: boolean;
  includePAOwner: boolean;
  customer_type: TFieldData;
  policy_type: TFieldData;
};

export type DROPDOWN_DATA = {
  RTO_LIST: TDropdown[];
  MAKE_LIST: TDropdown[];
  POPULAR_MAKE_LIST: TDropdown[];
  MODEL_LIST: TDropdown[];
  MAKE_MODEL_LIST: TDropdown[];
  FUEL_TYPE_LIST: TDropdown[];
  VARIANT_LIST: TDropdown[];
  PREVIOUS_INSURER_LIST: TDropdown[];
  POPULAR_MAKE: string[];
  PASSENGER_COVER_DATA: TDropdown[];
  PLAN_TYPE: TDropdown[];
  PREVIOUS_POLICY: TDropdown[];
  SORT_BY: TDropdown[];
  GENDER_DATA: TDropdown[];
  RELATIONSHIP_DATA: TDropdown[];
  PA_OWNER_COVER_DATA: TDropdown[];
  OWNER_MARTIAL_STATUS_DATA: TDropdown[];
  VEHICLE_ON_LOAN: string[];
  CLAIM_STATUS: TDropdown[];
  NCB: TDropdown[];
  POLICY_TYPE: TDropdown[];
  PREVIOUS_POLICY_TYPE: TDropdown[];
  NOMINEE_RELATIONSHIP: TDropdown[];
};
export type TNomineeDetails = {
  fullName: TFieldData;
  dob: TFieldData;
  relationship: TFieldData;
};

export type TCreateProposalResponse = {
  QuoteIdRefNumber: string;
  OrderIdRefNumber: string;
  ChannelIdRefNumber: string;
  taxAmount: string;
  policyId: string;
  finalPremium: number;
  paymentId: string;
  pol_start_date: string;
  paymentRequest: {
    actionURL: string;
    actionMethod: string;
    pgiRequest: string;
  };
  BreakinId: string;
  proposal_no: string;
};

export type TCarSlice = {
  REDIRECTED: boolean;
  DROPDOWN_DATA: DROPDOWN_DATA;
  ADD_FORM: TCarAddForm;
  NO_QUOTE_REASONS: TCarNoQuoteReason[];
  CUS_TYPE: boolean;
  DISCOUNT_FORM: TCarDiscount;
  ADD_FORM_RESPONSE: TCarAddFormResponse;
  ADDON_STATUS: TCarAddonStatus;
  ADDON_USER_VALUE: TAddonsValueType;
  PLAN_TYPE: "Comprehensive" | "Third Party" | "Bundle Policy" | "SAOD" | "";
  SORT_BY: "Low to high" | "High to low";
  QUOTE_LOADER: boolean;
  IDV_SELECTED_OPTION: "Best Deal" | "Lowest IDV" | string;
  SELECTED_QUOTE_DATA: TCarProduct;
  ALL_QUOTES_DATA: TCarProduct[];
  OWNER_DETAILS: TCarOwnerDetails;
  VEHICLE_DETAILS: TCarVehicleDetails;
  CKYC_DETAILS: TCkycDetails;
  NOMINEE_DETAILS: TNomineeDetails;
  ADDRESS_DETAILS: TAddressDetails;
  PAGE_STATUS: boolean;
  BreakinId: string;
  policyId: string;
  create_proposal_response: TCreateProposalResponse;
  PLAN_DETAILS: TCARPlanDetails;
  SHOW_EDIT_PLAN_DETAILS_POPUP: boolean;
  SHOW_PRICE_DETAILS_POPUP: boolean;
};
