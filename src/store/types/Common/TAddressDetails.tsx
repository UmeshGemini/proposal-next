import { TFieldData } from "./TFieldData";

export type TAddressDetails = {
  pincode: TFieldData;
  city: string;
  state: string;
  addressLineOne: TFieldData;
  addressLineTwo: TFieldData;
  isMailingAddressSame: boolean;
  mailingPinCode: TFieldData;
  mailingCity: string;
  mailingState: string;
  mailingAddressLineOne: TFieldData;
  mailingAddressLineTwo: TFieldData;
  };
  
