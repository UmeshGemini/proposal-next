import { TProductType } from "../Common/TProductType";
import { TCarSingleQuoteDetail } from "./TCarSingleQuoteDetail";

export type TCarProduct = {
  company_code: string;
  logo: string;
  id: number;
  product_code: string;
  buy_online_code: string;
  loader: boolean;
  product_type: TProductType;
  quotationDetail?: TCarSingleQuoteDetail;
};
