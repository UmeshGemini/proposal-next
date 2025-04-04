export interface TCompanyDetailBuyActionResponse {
  company_code: string;
  name: string;
  short_desc: string;
  logo: string;
  claim_ratio: string;
}

export interface TProductDeatilsBuyActionResponse {
  id: number;
  product_name: string;
  brochure: string;
  product_code: string;
  rate_calc_method: string;
  proposal_method: string;
  tax_calc_method: string;
  discount_calc_method: string;
  rating: number;
  product_desc: string;
  buy_online_code: string;
  prem_calc_action: string;
  tax_calc_action: string;
  discount_calc_action: string;
  health_form_validation: {
    self_min_age: number;
    self_max_age: number;
    spouse_min_age: number;
    spouse_max_age: number;
    child_min_age: number;
    child_max_age: number;
  };
}

export type THealthBuyActionResopnse = {
  quote_no: string;
  product_code: string;
  product_id: string;
  company_code: string;
  sum_insured: string;
  premium: string;
  insurance_type: string;
  quoteId: string;
  FinalPremiumm: string;
  ProductDetails: TProductDeatilsBuyActionResponse;
  CompanyDetails: TCompanyDetailBuyActionResponse;
  amountWithGst: string;
  term: string;
  ppterm: string;
  income: string;
  incomeOne: string;
  policyTenure: string;
};
