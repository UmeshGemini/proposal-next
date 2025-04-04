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
  annual_income: { value: string; warning: boolean };
  qualification: { value: string; warning: boolean };
  member_income: { value: string; warning: boolean };
  grainful_income: { value: string; warning: boolean };
  abha_no: { value: string; warning: boolean };
};

export type TOtherMemberDetails = {
  name: { value: string; warning: boolean };
  dob: { value: Date | null | string; warning: boolean };
  relationship: { value: string; warning: boolean };
  weight: { value: string; warning: boolean };
  heightFeet: { value: string; warning: boolean };
  heightInches: { value: string; warning: boolean };
  image_class?: string;
};

export type TTwoAdultMemberDetails = {
  name: { value: string; warning: boolean };
  dob: { value: Date | null; warning: boolean };
  relationship: { value: string; warning: boolean };
  weight: { value: string; warning: boolean };
  heightFeet: { value: string; warning: boolean };
  heightInches: { value: string; warning: boolean };
  image_class?: string;
  qualification: { value: string; warning: boolean };
  occupation: { value: string; warning: boolean };
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
