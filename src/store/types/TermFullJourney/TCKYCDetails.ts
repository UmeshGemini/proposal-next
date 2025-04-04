export type TCKYCDetails = {
  age_proof: { value: string; warning: boolean };
  age_proof_doc_no: { value: string; warning: boolean };
  age_proof_exp_date: { value: string; warning: boolean };
  address_proof: { value: string; warning: boolean };
  address_proof_doc_no: { value: string; warning: boolean };
  address_proof_exp_date: { value: string; warning: boolean };
  identity_proof: { value: string; warning: boolean };
  identity_proof_doc_no: { value: string; warning: boolean };
  identity_proof_exp_date: { value: string; warning: boolean };
  it_proof: { value: string; warning: boolean };
};

export type THDFCCKYCDetails = {
  ckyc_no: { value: string; warning: boolean };
  father_full_name: { value: string; warning: boolean };
  mother_full_name: { value: string; warning: boolean };
  occupation: { value: string; warning: boolean };
  spouse_name: { value: string; warning: boolean };
  employer_name: { value: string; warning: boolean };
  employer_address: { value: string; warning: boolean };
};
