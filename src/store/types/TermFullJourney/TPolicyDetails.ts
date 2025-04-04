export type TPolicyDetails = {
  insurer_logo: string;
  sum_assured: string;
  policy_tenure: string;
  payment_mode: string;
  gross_amount: string;
  gst: string;
  net_premium: string;
};

export enum PaymentModeStatus {
  CREDIT_CARD = "CC",
  NET_BANKING = "net_banking",
}
