export interface field_data {
  value: string | Date | null;
  warning: boolean;
}

export interface searchable_dropdown_field_data {
  value: { label: string; code: string };
  warning: boolean;
}

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

export type TTermHDFCProposerDetails = {
  premium_loader: boolean;
  is_proposer_is_insured_member: boolean;
  full_name: field_data;
  dob: field_data;
  gender: field_data;
  mobile: field_data;
  email: field_data;
  aadhar_number: field_data;
  emergency_number: field_data;
  marital_status: searchable_dropdown_field_data;
  annual_income: searchable_dropdown_field_data;
  education: searchable_dropdown_field_data;
  occupation: searchable_dropdown_field_data;
  occupation_desc: field_data;
  org_name: searchable_dropdown_field_data;
  org_type: searchable_dropdown_field_data;
  org_description: field_data;
  industry_type: searchable_dropdown_field_data;
  industry_type_desc: field_data;
  my_profession: searchable_dropdown_field_data;
  org_type_desc: field_data;
  obj_of_buying_policy: searchable_dropdown_field_data;
  pan_no: field_data;
  sum_assured: searchable_dropdown_field_data;
  nationality: "indian" | "nri";
  diabetic: boolean;
};
