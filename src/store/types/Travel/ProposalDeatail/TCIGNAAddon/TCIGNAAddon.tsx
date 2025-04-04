export type TADDON_DETAILS_CIGNA_PRIME_ADVANTAGE = {
  critical_illness: boolean;
  outpatient: boolean;
  cumulative: boolean;
  healthAddSumInsured: string;
  non_medical: boolean;
  personal_accident: boolean;
  prime_enhance: boolean;
  room_rent: boolean,
  supreme_bonus: boolean,
  surplus_benifit: boolean,
  premium_management: boolean,
};

export type TADDON_DETAILS_CIGNA_PRIME_ACTIVE = {
  non_medical: boolean;
  health_ckeck: boolean;
  waiver: boolean;
  world_accident: boolean;
  wellness: boolean;
};

export type TADDON_DETAILS_CIGNA_PRIME_PROTECT = {
  critical_illness: boolean;
  cumulative: boolean;
  reduction: boolean;
  healthAddSumInsured: string;
  non_medical: boolean;
  personal_accident: boolean;
  prime_enhance: boolean;
  prime_freedom: boolean;
  prime_assure: boolean;
  infertility_treatement: boolean;
  room_rent: boolean,
  supreme_bonus: boolean,
  surplus_benifit: boolean,
  premium_management: boolean,
  woman_care: boolean,
};

export type TADDON_DETAILS_CIGNA_LIFETIME_INDIA = {
  critical_illness: boolean;
  cumulative: boolean;
  wwhospitalized: boolean;
  wwh_suminsured: string;
  maternity_expenses: boolean;
  infertility: boolean;
  Oocyte: boolean;
  health_360_advance: boolean;
  health_360_opd: boolean;
  health_360_shield: boolean;
  health_plus: boolean;
  woman_plus: boolean;
};

export type TADDON_DETAILS_CIGNA_LIFETIME_GLOBAL = {
  critical_illness: boolean;
  cumulative: boolean;
  wwhospitalized: boolean;
  maternity_expenses: boolean;
  infertility: boolean;
  Oocyte: boolean;
  health_360_advance: boolean;
  health_360_opd: boolean;
  health_360_shield: boolean;
  global: boolean;
  global_plus: boolean;
  coverage_type: string;
  coverage_illness: string;
  wwh_suminsured: string;
  global_suminsured: string;
  coverage_type_toggle: boolean;
  coverage_illness_toggle: boolean;
};
