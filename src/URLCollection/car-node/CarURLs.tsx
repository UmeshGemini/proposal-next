import { NODE_DOMAIN } from "@/lib/domain";

export const CAR_URLS = {
  GET_PROPOSAL_INFO: `${NODE_DOMAIN}/api/v1/premium/proposal-details`,
  GET_PREVIEW_PAGE_DATA: `${NODE_DOMAIN}/api/v1/premium/preview-details`,
  PAYMENT_URL: `${NODE_DOMAIN}/api/v1/premium/save-payment-response`,
  CREATE_INSPECTION: `${NODE_DOMAIN}/api/v1/car-inspection/motor`,
  PREMIUM_RECALCULATION: `${NODE_DOMAIN}/api/v1/recalculate/motor`,
  BUY_ACTION: `${NODE_DOMAIN}/api/v1/premium/buy-action`,
};
