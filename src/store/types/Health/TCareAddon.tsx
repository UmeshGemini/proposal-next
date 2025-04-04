import { TFieldData } from "../Common/TFieldData";

export type TCareAddon = {
  NCBSuper: boolean;
  field_34: boolean;
  SmartSelect: boolean;
  AirAmbulanceCover: boolean;
  CareShield: boolean;
  GlobalCoverage: TFieldData;
  field_WB: boolean;
  field_OPD: boolean;
  field_OPD_data: TFieldData;
  field_43: boolean;
  field_PED_tenure: TFieldData;
  field_AHC: boolean;
  field_IC: boolean;
  field_DK: boolean;
  field_DUE: boolean;
  field_BFB: boolean;
  field_CPW: boolean;
  recharge: boolean;
  critical_illness: boolean;
  hdcSa: TFieldData;
  ipaRiderCheck: boolean;
  unlimitedRiderCheck: boolean;
  ipaSa: TFieldData;
  ipa: boolean;
  IsUnlimitedRestore: boolean;
  optima_well: boolean;
  overseas_travel: boolean;
  health_hospital_cash_benefit: boolean;
  health_hospital_cash_benefit_sum_insured: string;
  critical_suminsured: TFieldData;
  Iscritical_Illness: boolean;
  Iscritical_Illness_sum_insured: string;
  Insured_CriticalIllnessAddonCover_PlanType: string;
  isGlobalRider: boolean;
  field_CS: boolean;
  field_HomeCare: boolean;
  field_UAR: boolean;
  field_COPAY: boolean;
  field_AHC_Care_Advatage: boolean;
};

export type CARE_HEARTH_DTO = {
  field_CS: boolean;
  field_HomeCare: boolean;
  field_OPD: boolean;
};
