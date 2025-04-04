export interface TNetworkList {
  hospital_name: string;
  address1: string;
  city_name: string;
  state_name: string;
  pincode: string;
}

export interface TFilterMenu {
  title: string;
  code: string;
  status: boolean;
}

export interface TProductDetailsHealthFormValidation {
  max_no_of_adult: number;
  max_no_of_child: number;
  max_sum_insured: number;
  max_term: number;
  min_no_of_adult: number;
  min_no_of_child: number;
  min_sum_insured: number;
  min_term: number;
  self_max_age: number;
  self_min_age: number;
  sum_insured_factor: number;
}

export interface TProductDetails {
  brochure: string;
  buy_online_code: string;
  company_product_map: { company_code: string };
  discount_calc_action: string;
  health_form_validation: TProductDetailsHealthFormValidation | string;
  id: number;
  is_online: string;
  pre_existing_cover: string;
  prem_calc_action: string;
  product_code: string;
  product_type_code: string;
  product_desc: string;
  product_name: string;
  proposal_method: string;
  rate_calc_method: string;
  rating: string;
  room_cover: string;
}

export interface TPremiumDetails {
  basePremium: number;
  finalPremium: number;
  quoteId: string;
  serviceTax: number;
  term: number;
  sum_insured: number;
  transactionid: string;
  insurance_type: string;
  correlationId?: string;
}

export interface TSpecialFeatureLists {
  code: string;
  description: string;
  show_desc: number;
  title: string;
}

export interface TCompanyDetails {
  claim_ratio: string;
  company_code: string;
  logo: string;
  name: string;
  short_desc: string;
}

export type THealthQuote = {
  CashlessHospitalLists: TNetworkList[];
  sumInsured: string;
  productDetails: TProductDetails;
  premiumDetails: TPremiumDetails;
  SpecialFeatureLists: TSpecialFeatureLists[];
  CompanyDetails: TCompanyDetails;
  loading: boolean;
  compareValue?: boolean;
};
