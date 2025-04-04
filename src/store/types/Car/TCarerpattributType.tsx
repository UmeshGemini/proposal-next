export type TCarNoQuoteReason = {
  CompanyDetails: {
    company_code: "";
    name: "";
    short_desc: "";
    logo: "";
    claim_ratio: "";
  };
  productDetails: {
    id: 0;
    product_name: "";
    brochure: "";
    product_code: "";
    rate_calc_method: "";
    proposal_method: "";
    tax_calc_method: "";
    discount_calc_method: "";
    rating: 3;
    product_desc: "";
    buy_online_code: "";
    policy_covers: "";
    company_product_map: {
      company_code: "";
    };
  };
  reason: string;
};
