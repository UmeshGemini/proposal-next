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
  riders: {
    TF001: {
      sum_assured: number;
      min_sa_percentage: string;
      max_sa_percentage: string;
      sa_percentage: string;
      interval_value: string;
      interval: string;
      change_term: string;
      premium_without_tax: string;
      premium: number;
      rate: string;
      min_sum_assured: string;
      max_sum_assured: string;
    };
    TF002: {
      sum_assured: number;
      sa_percentage: string;
      min_sa_percentage: string;
      max_sa_percentage: string;
      interval_value: string;
      interval: string;
      premium_without_tax: string;
      premium: number;
      rate: string;
      min_sum_assured: string;
      max_sum_assured: string;
    };
    TF003: {
      sum_assured: number;
      sa_percentage: string;
      min_sa_percentage: string;
      max_sa_percentage: string;
      interval_value: string;
      interval: string;
      premium_without_tax: string;
      premium: number;
      rate: string;
      min_sum_assured: string;
      max_sum_assured: string;
    };
    TF004: {
      sum_assured: number;
      sa_percentage: string;
      min_sa_percentage: string;
      max_sa_percentage: string;
      interval_value: string;
      interval: string;
      premium_without_tax: string;
      premium: number;
      rate: string;
      min_sum_assured: string;
      max_sum_assured: string;
    };
    TF005: {
      sum_assured: number;
      sa_percentage: string;
      min_sa_percentage: string;
      max_sa_percentage: string;
      interval_value: string;
      interval: string;
      premium_without_tax: string;
      premium: number;
      rate: string;
      min_sum_assured: string;
      max_sum_assured: string;
    };
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
