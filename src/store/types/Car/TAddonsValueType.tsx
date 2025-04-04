import { TNCB } from "../TCarSlice";

export type TAddonsValueType = {
  idv: { value: string; warning: boolean };
  passengerCover: { value: string; warning: boolean };
  cngKitValue: { value: string; warning: boolean };
  electricalAcessories: { value: string; warning: boolean };
  nonElectricalAcessories: { value: string; warning: boolean };
};


export type TCARPlanDetails = {
  idv: { value: string; warning: boolean };
  claimStatus: { value: "No" | "Yes"; warning: boolean };
  existingNcb: { value: TNCB; warning: boolean };
}
