export type TTermNoQuoteReason = {
  productDetails: {
    id: number;
    product_name: string;
    brochure: string;
    product_code: string;
    product_type_code?: string;
    rate_calc_method: string;
    proposal_method: string;
    tax_calc_method: string;
    discount_calc_method: string;
    rating: number;
    product_desc: string;
    buy_online_code: string;
    special_feature_codes: string;
    prem_calc_action: string;
    tax_calc_action: string;
    discount_calc_action: string;
    termFormValidations: {
      frequency: number;
      modal_factor: number;
      min_sum_assured: number;
      max_sum_assured: number;
      min_age: number;
      max_age: number;
      min_term: number;
      max_term: number;
      min_p_cess_age: number;
      max_p_cess_age: number;
    };
    companyProductMap: {
      company_code: string;
    };
  };
  companyDetails: {
    company_code: string;
    name: string;
    short_desc: string;
    logo: string;
    claim_ratio: string;
  };
  reason: string;
};
