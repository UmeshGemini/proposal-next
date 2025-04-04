import { TFieldData } from "../Common/TFieldData";

export type beneficiary = {
  full_name: TFieldData;
  relation_to_proposer: TFieldData;
  date_of_birth: TFieldData;
  share: TFieldData;
};

export type trustee_details = {
  name: TFieldData;
  dob: TFieldData;
  trusteeType: TFieldData;
  address: TFieldData;
  city: TFieldData;
  pincode: TFieldData;
  state: TFieldData;
  panNo: TFieldData;
  mobileNo: TFieldData;
  email: TFieldData;
};

export type TNomineeDetails = {
  full_name: TFieldData;
  gender: TFieldData;
  dob: TFieldData;
  relationship: TFieldData;
  is_beneficiary: boolean;
  beneficiary: beneficiary[];
  trustee_details: trustee_details;
};
