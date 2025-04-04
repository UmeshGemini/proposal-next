export type DTOTermRiderStatus = {
  product_id: string;
  quote_no: string;
  company_code: string;
  frequency: string;
  gender: string;
  pay_term: string;
  product_code: string;
  smoker: string;
  sum_assured: string;
  term: string;
  dob: string;
  mobile: string;
  pincode: string;
  criticalIllnessSelected: "Yes" | "No";
  accidentalDisSelected: "Yes" | "No";
  personalAccSelected: "Yes" | "No";
  cancerCovSelected: "Yes" | "No";
  accidentalDeathSelected: "Yes" | "No";
  criticalIllnessValue: string;
  accidentalDisValue: string;
  accidentalDeathValue: string;
  adb: "Yes" | "No";
  rop: "Yes" | "No";
  wop: "Yes" | "No";
  annual_income?: "600000";
  wopSelected?: "Yes" | "No";
  income_period?: string;
  name: string;
  occupation?: string;
  product_ids?: any[];
};

export type DTOTermRiderStatusRequest = {
  product_ids: any;
  criticalIllnessSelected: "Yes" | "No";
  accidentalDeathSelected: "Yes" | "No";
  cancerCovSelected: "Yes" | "No";
  accidentalDisSelected: "Yes" | "No";
  criticalIllnessValue: string;
  accidentalDisValue: string;
  accidentalDeathValue: string;
  personalAccSelected: "Yes" | "No";
  quote_no: string;
  adb: "Yes" | "No";
  rop: "Yes" | "No";
  wop: "Yes" | "No";
};

export type DTOBajajTermRiderStatus = {
  product_ids: any[];
  quote_no: string;
  accidentalDeathSelected: string;
  accRiderSumAssured: string;
};
