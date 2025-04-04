export type TBUYACTION = {
  quote_no: string;
  type: string;
  product_code: string | undefined;
  productId: string | number | undefined;
  company_code: string | undefined;
  IDV: string | number | undefined;
  finalPremium: string | number | undefined;
  utm_medium: Date | string | null;
  utm_source: Date | string | null;
};
