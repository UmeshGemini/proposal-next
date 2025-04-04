import { TFieldData } from "../Common/TFieldData";

interface field_data {
  value: string | Date | null;
  warning: boolean;
}

export type TInsuredMemberDetails = {
  full_name: TFieldData;
  email: TFieldData;
  dob: TFieldData;
  gender: TFieldData;
  mobile: TFieldData;
  aadhar_number: TFieldData;
  marital_status: TFieldData;
  occupation: TFieldData;
  org_name: TFieldData;
  org_desc: field_data;
  education: TFieldData;
};
