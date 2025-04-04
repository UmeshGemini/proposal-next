export type TSingleRider = {
  free: number;
  description: string;
  premium: number;
  min_sa_percentage: number;
  interval: number;
  max_sa_percentage: number;
  sa_percentage: number;
  show_sum_insured: string;
  sum_assured: number;
  rider_term: string;
  rider_pay_term: string;
  min_sum_assured: number;
  max_sum_assured: number;
  status: string;
};

export type TRidersBenefitsResponse = {
  redirectionUrl: string;
  base_rate: number;
  modal_factor: string;
  conversion_factor: number;
  premiumAmount: number;
  finalPremium: number;
  pay_term: string;
  term: string;
  appno: string;
  quote_id: string;
  uwtype: string;
  policyPdf: string;
  riders: {
    TF001: TSingleRider;
    TF002: TSingleRider;
    TF003: TSingleRider;
    TF004: TSingleRider;
    TF005: TSingleRider;
  };
  quote_no: string;
  sum_insured: string;
  frequency: string;
};

export type TRidersBenefits = {
  riders_benefits_response: TRidersBenefitsResponse;
  local_value: {
    tf001Status: boolean;
    tf001Value: string;
    tf002Status: boolean;
    tf002Value: string;
    tf003Status: boolean;
    tf003Value: string;
    tf004Status: boolean;
    tf004Value: string;
    tf005Status: boolean;
    tf005Value: string;
    BNF001Status: boolean;
    BNF002Status: boolean;
    BNF003Status: boolean;
  };
};
