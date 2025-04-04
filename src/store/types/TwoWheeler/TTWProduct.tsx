import { TTWPlanType } from "../TTWSlice";
import { TTWSingleQuoteDetail } from "./TTWSingleQuoteDetail";

export type TTWProduct = {
  company_code: string;
  logo: string;
  id: number;
  product_code: string;
  buy_online_code: string;
  loader: boolean;
  product_type: TTWPlanType;
  quotationDetail?: TTWSingleQuoteDetail;
};
