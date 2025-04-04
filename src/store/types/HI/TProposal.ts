import { TQuickQuote } from "./TQuickQuote";

export type TField = { value: string; warning: boolean };

export type TProposal = {
  policy_information: TQuickQuote;
  ckycInfo: TProposal_Ckyc_Info;
  manualCkycDigit: TDigit_Manual_Ckyc_Verify;
  householdItemsBreakup: ThouseholdItemsBreakup;
  inbuiltCoverages: TInbuiltCoverages;
  addonCoverages: TAddonCoverages;
  ownerDetailsScreen: TOwnerDetailsScreen;
  propertyDetails: TPropertyDetails;
  addressDetails: TAddressDetails;
};

export type TOwnerDetailsScreen = {
  ownerDetails: TOwnerDetails;
  selectedCoOwner: boolean;
  coOwnerDetails: TCoOwnerDetails;
  nomineeDetails: TNomineeDetails;
};
type TAddress = {
  address: { value: string; setFromKycResp?: boolean; warning: boolean };
  address2: { value: string; setFromKycResp?: boolean; warning: boolean };
  city: { value: string; setFromKycResp?: boolean; warning: boolean };
  state: { value: string; setFromKycResp?: boolean; warning: boolean };
  pincode: { value: string; setFromKycResp?: boolean; warning: boolean };
};
export type TAddressDetails = {
  propertyAddress: TAddress;
  communicationAddress: TAddress;
  isSame: boolean;
};

export type TPropertyDetails = {
  floorNo?: { value: string; warning: boolean };
  constructionYear: { value: string; warning: boolean };
  typeOfBuilding: { value: string; warning: boolean };
  LoanDetails: {
    bankName: { value: string; warning: boolean };
    accNo: { value: string; warning: boolean };
    branchName: { value: string; warning: boolean };
  };
  isLoan: boolean;
};

export type TAddonPACDetails = {
  insuredName: TField;
  insuredAge: TField;
  insuredGender: TField;
  nomineeName: TField;
  nomineeAge: TField;
  nomineeGender: TField;
  nomineeRelation: TField;
  nomineeAppointeeName: TField;
};

export type TAddonSpousePACDetails = {
  name: TField;
  age: TField;
  nomineeRelationWithInsured: TField;
  nomineeName: TField;
  nomineeAge: TField;
  nomineeGender: TField;
  nomineeAppointeeName: TField;
};

export type TAddonCoverages = {
  pacDetails: TAddonPACDetails;
  pacSpouseDetails: TAddonSpousePACDetails;
  isPac: boolean;
  isPacSpouse: boolean;
  isEQcover: boolean;
};

export type TInbuiltCoverages = {
  lossOfRentSelcted: boolean;
  rent_amount: string;
  num_months_rent: string;
  rentAltSelected: boolean;
  rent_amount_alt: string;
  num_months_alt: string;
  coverForValuableContent: number;
  isCoverForValuableContent: boolean;
};

export type TProposal_Ckyc_Info = {
  propFullName: { value: string; warning: boolean };
  ProposerDob: { value: string | Date; warning: boolean };
  docID: { value: string; warning: boolean };
  customertype: { value: string; warning: boolean };
  verificationDoc: { value: string; warning: boolean };
  gender: { value: string; warning: boolean };
};

export type ThouseholdItemsBreakup = {
  electronics: number;
  furniture: number;
  others: number;
  showError: boolean;
  clothing?: number;
  durables?: number;
  jewellery?: number;
};

export type TDigit_Ckyc_Verify = {
  docCode: string;
  quote_no: string;
  customerType: string;
  documentID: string;
  dob: string;
  gender: string;
  fullName: string;
  correlationId?: string;
  isPep?: false;
};

export type TDigit_Manual_Ckyc_Verify = {
  propFullName: { value: string; warning: boolean };
  ProposerDob: { value: Date | null; warning: boolean };
  gender: { value: string; warning: boolean };
  doiType: { value: string; warning: boolean };
  doaType: { value: string; warning: boolean };
  doifile: string;
  doafile: string;
  docId?: string;
};

export type TOwnerDetails = {
  name: { value: string; warning: boolean; setFromKycResp: boolean };
  dob: {
    value: Date | null | string;
    warning: boolean;
    setFromKycResp: boolean;
  };
  mobile: { value: string; warning: boolean; setFromKycResp: boolean };
  email: { value: string; warning: boolean };
  gender: { value: string; warning: boolean };
  pancard: { value: string; warning: boolean };
};

export type TCoOwnerDetails = {
  name: { value: string; warning: boolean };
  email: { value: string; warning: boolean };
  dob: { value: Date | null; warning: boolean };
  gender: { value: string; warning: boolean };
  mobile: { value: string; warning: boolean };
};

export type TNomineeDetails = {
  nomineeName: { value: string; warning: boolean };
  nomineeAge: { value: string; warning: boolean };
  nomineeGender: { value: string; warning: boolean };
  appointeeName: { value: string; warning: boolean };
  nomineeRelationshipWithOwner: { value: string; warning: boolean };
};
