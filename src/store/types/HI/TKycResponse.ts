export type TKycResponse = {
  customer_type: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: string;
  city: string;
  state: string;
  pincode: string;
  mobile_number: string;
  email: string;
  panNumber: string;
  gstinNumber: string;
  aadharNumber: string;
  ckycNumber: string;
  dob: string | Date;
  dob_or_doi?: string | Date;
  address_line_1: string;
  address_line_2: string;
  digitKYCId: string;
  kycStatus: KYC_STATUS;
  iciciKYCId: string;
  iciciKycStatus: string;
};

export type ICICI_KYC_RESPONSE = {
  il_kyc_ref_no: string;
  certificate_type: string;
  certificate_number: string;
  first_name: string;
  last_name: string;
  full_name: string;
  gender: string;
  dob: string;
  mobile_number: string;
  email: string;
  ckyc_number: string;
  permanent_address: {
    address_line_1: string;
    address_line_2: string;
    pin_code: string;
    city: string;
    district: string;
    state: string;
  };
  alternate_address: {
    address_line_1: string;
    address_line_2: string;
    pin_code: string;
    city: string;
    district: string;
    state: string;
  };
  customer_type: string;
};

export enum KYC_STATUS {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}
