import { TFieldData } from "../Common/TFieldData";

export enum PROPOSAL_PAGE_SECTION_STATUS_API {
  PROPOSAL_DETAILS = "proposer_details",
  NOMINEE_DETAILS = "nominee_details",
  CKYC_DETAILS = "ckyc_details",
  ADDRESS_DETAILS = "address_details",
  PERSONAL_QUESTION_DETAILS = "question_details",
  HEALTH_DETAILS = "health_details",
  CORONA_DETAILS = "covid_details",
  NRI_DETAILS = "nri_details",
  OTP_DETAILS = "otp_details",
}

export type TProposerDetails = {
  premium_loader: boolean;
  is_proposer_is_insured_member: boolean;
  full_name: TFieldData;
  dob: TFieldData;
  gender: TFieldData;
  mobile: TFieldData;
  email: TFieldData;
  aadhar_number: TFieldData;
  emergency_number: TFieldData;
  marital_status: TFieldData;
  annual_income: TFieldData;
  education: TFieldData;
  occupation: TFieldData;
  occupation_desc: TFieldData;
  org_name: TFieldData;
  org_type: TFieldData;
  org_description: TFieldData;
  industry_type: TFieldData;
  industry_type_desc: TFieldData;
  my_profession: TFieldData;
  org_type_desc: TFieldData;
  obj_of_buying_policy: TFieldData;
  pan_no: TFieldData;
  sum_assured: TFieldData;
  nationality: "indian" | "nri";
  diabetic: boolean;
  housewife: boolean;
};
