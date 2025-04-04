import { TCashlessGarage } from "../Common/TCashlessGarage";

export type TTWPremiumDetails = {
  netPremiumWithoutAddons: number;
  antiTheftDiscount: number;
  paymentId: string;
  UniqueRequestID: string;
  exshowroomPrice: string;
  minimumIDV: number;
  maximumIDV: number;
  IDV: number;
  basicOD: number;
  basicTP: number;
  netPremium: number;
  serviceTax: number;
  ncbDiscount: number;
  depreciationCover: number;
  paOwnerDriver: number;
  odDiscount: number;
  driverCover: number;
  secondYear: null;
  thirdYear: null;
  product_code: string;
  company_code: string;
  roadSideAssistance: number;
  includedPAOwnerDriver: 0 | 1;
  freeRoadSideAssistance: 0 | 1;
  totalTPPremium?: string;
  correlationId?: string;
  pTransactionId: string;
  withAddonnBasicOD: number;
  withoutAddonnBasicOD: number;
  withAddonNetPremium: number;
  withoutAddonNetPremium: number;
  RSQUOTEID: any;
};

export type TTWSingleQuoteDetail = {
  premiumDetails: TTWPremiumDetails;
  cashlessGarageLists: TCashlessGarage[];
  CompanyDetails: {
    company_code: string;
    name: string;
    short_desc: string;
    logo: string;
    claim_ratio: string;
  };
  productDetails: {
    id: number;
    product_name: string;
    brochure: string;
    product_code: string;
    quote_action: string;
    rate_calc_method: string;
    proposal_method: string;
    tax_calc_method: string;
    discount_calc_method: string;
    product_desc: string;
    buy_online_code: string;
    policy_covers: string;
  };
};
