interface field_data {
  value: string;
  warning: boolean;
}

export type THouseholdDetails = {
  youAre: string;
  youHave: string;
  sumInsuredFor: string;
  householdItems: field_data;
  buildingValue: field_data;
  carpetArea: field_data;
  costOfconstruction: field_data;
  email: string;
  name?: string;
  mobile?: string;
  policyTerm: number;
};
