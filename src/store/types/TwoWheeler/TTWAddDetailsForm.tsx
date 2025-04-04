import { TNCB } from "../Common/TNCB";

export type TTWAddFormDetails = {
  vehicleNo: { value: string; warning: boolean };
  name: { value: string; warning: boolean };
  rto: { value: string; warning: boolean };
  vehicleType: { value: string; warning: boolean };
  makeModel: { value: string; warning: boolean };
  mobile: { value: string; warning: boolean };
  fuelType: { value: string; warning: boolean };
  variant: { value: string; warning: boolean };
  regDate: { value: string | null; warning: boolean };
  policyExpiry: { value: string | null; warning: boolean };
  previousInsurer: { value: string; warning: boolean };
  manufacturer: { value: string; warning: boolean };
  previousNcb: {
    value: "0" | "20" | "25" | "35" | "45" | "50";
    warning: boolean;
  };
  ncb: "Yes" | "No";
};

export type TTWPlanDetails = {
  idv: { value: string; warning: boolean };
  claimStatus: { value: "No" | "Yes"; warning: boolean };
  existingNcb: { value: TNCB; warning: boolean };
}
