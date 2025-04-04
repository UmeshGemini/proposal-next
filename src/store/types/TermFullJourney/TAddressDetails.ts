import { TFieldData } from "../Common/TFieldData";

export type addressDetails = {
  pincode: TFieldData;
  city: string;
  state: string;
  house_no_building: TFieldData;
  area_town_locality: TFieldData;
};

export type TAddressDetails = {
  is_mailing_and_permanent_address_same: boolean;
  permanent_address: addressDetails;
  mailing_address: addressDetails;
};
