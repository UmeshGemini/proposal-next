import { TADITYABIRLAAddon } from "../../Type/Health/ProposalDeatail/TADITYABIRLAAddon/TADITYABIRLAAddon";
import { TDropdown } from "../Common/TDropdown";
import { TFieldData } from "../Common/TFieldData";
import { THealthFormResponse } from "./Form/THealthFormResponse";
import { TRSAAddon } from "./HealthQuotation/TAddonRSA";
import { TAdityaBirlaMedicalQuestion } from "./HealthQuotation/TAdityaBirlaMedicalQuestion";
import { TBajajMedicalQuestion } from "./HealthQuotation/TBajajMedicalQuestion";
import { TCareHeartMedicalQuestion } from "./HealthQuotation/TCareHeartMedicalQuestion";
import { TCareMedicalQuestion } from "./HealthQuotation/TCareMedicalQuestion";
import { TCignaMedicalQuestion } from "./HealthQuotation/TCignaMedicalQuestion";
import { TGoDigitMedicalQuestion } from "./HealthQuotation/TGodigitMedicalQuestion";
import { THealthQuote } from "./HealthQuotation/THealthQuote";
import { TKotakMedicalQuestion } from "./HealthQuotation/TKotakMedicalQuestion";
import { TMedicalQuestionFutureGenerali } from "./HealthQuotation/TMedicalQuestionV2";
import { TMedicalQuestionIffcoTokio } from "./HealthQuotation/TMedicalQuestionv3";
import { TNivaBupaAddonQuestion } from "./HealthQuotation/TNivaBupaAddonQuestion";
import { TNivaBupaMedicalQuestion } from "./HealthQuotation/TNivaBupaMedicalQuestion";
import { TRSAMedicalQuestion } from "./HealthQuotation/TRSAMedicalQuestion";
import { TStarMedicalQuestion } from "./HealthQuotation/TStarMedicalQuestion";
// import { TADITYABIRLAAddon } from "./ProposalDeatail/TADITYABIRLAAddon/TADITYABIRLAAddon";
import { TBAJAJAddon } from "./ProposalDeatail/TBAJAJAddon/TBAJAJAddon";
import {
  TADDON_DETAILS_CIGNA_LIFETIME_GLOBAL,
  TADDON_DETAILS_CIGNA_LIFETIME_INDIA,
  TADDON_DETAILS_CIGNA_PRIME_ACTIVE,
  TADDON_DETAILS_CIGNA_PRIME_ADVANTAGE,
  TADDON_DETAILS_CIGNA_PRIME_PROTECT,
} from "./ProposalDeatail/TCIGNAAddon/TCIGNAAddon";
import {
  TELEVATEICICIAddon,
  TGOLDEN_SHIELDICICIAddon,
  TICICAddon,
} from "./ProposalDeatail/TICICAddon/TICICAddon";
import { TKOTAK_EDGE } from "./ProposalDeatail/TKotak/TKOTAK";
import { TNIVABUPAAddons } from "./ProposalDeatail/TNIVABUPA/TNIVABUPAAddon";
import {
  TAddressDetails,
  TAdultOneDetails,
  TOtherMemberDetails,
  TTwoAdultMemberDetails,
} from "./ProposalDeatail/TProposalDetail";
import { TCareAddon } from "./TCareAddon";
import { TGoDigitAddon } from "./TGoDigitAddon";

export type THealthAddForm = {
  whom_to_insure: "One Adult" | "Two Adults" | "Self + Spouse";
  children: number;
  gender: { value: "M" | "F" | ""; warning: boolean };
  age: TFieldData;
  pincode: TFieldData;
  name: TFieldData;
  mobile: TFieldData;
  son_count: TFieldData;
  daughter_count: TFieldData;
  self_status: boolean;
  spouse_status: boolean;
  son_status: boolean;
  daughter_status: boolean;
  self_dob: TFieldData;
  spouse_dob: TFieldData;
  spouse_relationship: TFieldData;
  child_one_dob: TFieldData;
  child_two_dob: TFieldData;
  child_three_dob: TFieldData;
  child_four_dob: TFieldData;
};

export type DROPDOWN_MASTER = {
  AGE: TDropdown[];
  SUM_INSURED: TDropdown[];
  TERM: TDropdown[];
  SORT_BY: TDropdown[];
  OCCUPATION: TDropdown[];
  MARTIAL: TDropdown[];
  ADULT1_RELATIONSHIP: TDropdown[];
  ADULT2_RELATIONSHIP: TDropdown[];
  NOMINEE_RELATIONSHIP: TDropdown[];
  CHILD_RELATIONSHIP: TDropdown[];
  GLOBALCOVERAGE: TDropdown[];
  CRITICAL_SUMINSURED: TDropdown[];
  DEDUCTION_DATA: TDropdown[];
};

export type THealthNomineeDetails = {
  full_name: TFieldData;
  dob: TFieldData;
  relationship: TFieldData;
  insured_member?: boolean;
  prosper_details?: boolean;
  localstate?: boolean;
};
export type TkycDetails = {
  propFullName: TFieldData;
  ProposerDob: TFieldData;
  verificationDoc: TFieldData;
  docID: TFieldData;
  cusdtomertype: TFieldData;
  gender: TFieldData;
  addressDoc: TFieldData;
  verificationDocFile: TFieldData;
  addressDocFile: TFieldData;
  pincode_zone: string;
};

export type INSURED_MEMBER_DETAILS = {
  NOMINEE__DETAILS: THealthNomineeDetails;
  PROPOSER_DETAILS: TAdultOneDetails;
  ADULT_ONE_DETAILS: TAdultOneDetails;
  ADULT_TWO_DETAILS: TTwoAdultMemberDetails;
  CHILD_ONE_DETAILS: TOtherMemberDetails;
  CHILD_TWO_DETAILS: TOtherMemberDetails;
  CHILD_THREE_DETAILS: TOtherMemberDetails;
  CHILD_FOUR_DETAILS: TOtherMemberDetails;
};
export type TPAYMENT_DATA = {
  proposal_no: string;
  finalPremium: number;
  quote_no: string;
  PartnerId: string;
  transactionNumber: string;
  applicationNumber: number;
  transactionID: string;
  SubscriptionID: string;
  paymentRequest: {
    actionURL: string;
    actionMethod: string;
    Chksum: string;
    Trnsno: string;
    Amt: number;
    Appid: number;
    Subid: string;
    Surl: string;
    Furl: string;
    Src: string;
  };
};

export type TCIS_DATA = {
  document_url: "";
  ProposalNumber: "";
  TransactionID: "";
};

export type TBank_Details_NIVABUPA = {
  BankAccountNumber: { value: string; warning: boolean };
  BankAccountType: { value: string; warning: boolean };
  BankName: { value: string; warning: boolean };
  IFSCCode: { value: string; warning: boolean };
  CustomerBankBranch: { value: string; warning: boolean };
  BankCity: { value: string; warning: boolean };
};

export type TBank_Details_SUPERSTAR = {
  BankAccountHolderName: { value: string; warning: boolean };
  BankAccountNumber: { value: string; warning: boolean };
  BankAccountType: { value: string; warning: boolean };
  BankName: { value: string; warning: boolean };
  IFSCCode: { value: string; warning: boolean };
  CustomerBankBranch: { value: string; warning: boolean };
  BankCity: { value: string; warning: boolean };
};

export type TBank_Details_CARE = {
  BankAccountNumber: { value: string; warning: boolean };
  IFSCCode: { value: string; warning: boolean };
};
export type TBank_Details_AdityaBirla = {
  Bank_Account_No: { value: string; warning: boolean };
  Bank_Account_Type: { value: string; warning: boolean };
  Bank_Name: { value: string; warning: boolean };
  IFSC_Code: { value: string; warning: boolean };
  Branch_Name: { value: string; warning: boolean };
  MICR_Code: { value: string; warning: boolean };
};

export type TBank_Details_HDFC = {
  DispatchFlag: { value: boolean; warning: boolean };
  Name_In_Bank_Account: { value: string; warning: boolean };
  Bank_Account_No: { value: string; warning: boolean };
  Bank_Name: { value: string; warning: boolean };
  IFSC_Code: { value: string; warning: boolean };
  Cheque_No: { value: string; warning: boolean };
  Cheque_Date: { value: string; warning: boolean };
  Cheque_Amount_For: { value: string; warning: boolean };
  MICR_Code: { value: string; warning: boolean };
  Branch_Name: { value: string; warning: boolean };
};
export type TBank_Details_CIGNA = {
  AccountCategoryCd: { value: string; warning: boolean };
  AccountTypeCd: { value: string; warning: boolean };
  BankCd: { value: string; warning: boolean };
  SortCd: { value: string; warning: boolean };
  BranchCd: { value: string; warning: boolean };
  BankName: { value: string; warning: boolean };
  BranchName: { value: string; warning: boolean };
  AccountNum: { value: string; warning: boolean };
  LedgerFolioNum: { value: string; warning: boolean };
  AccountHolderName: { value: string; warning: boolean };
  CardTypeCd: { value: string; warning: boolean };
  CardExpiryDt: { value: string; warning: boolean };
  IfscCd: { value: string; warning: boolean };
  State: { value: string; warning: boolean };
  City: { value: string; warning: boolean };
  MicrNum: { value: string; warning: boolean };
};

export type TSUPER_STAR_ADDON = {
  SMART_NETWORK: boolean;
  QUICK_SHIELD: boolean;
  CONSUMABLES_COVER: boolean;
  FUTURE_SHIELD: boolean;
  MATERNITY_EXPENSES: boolean;
  WOMEN_CARE: boolean;
  HIGHEND_DIAGNOSTICS: boolean;
  PERSONAL_ACCIDENT_COVER: boolean;
  ANNUAL_HEALTH_CHECKUP: boolean;
  VOLUNTARY_COPAYMENT: boolean;
  VOLUNTARY_DEDUCTIBLE: boolean;
  ROOM_RENT_MODIFICATION: boolean;
  E_INTERNATIONAL_SECOND_OPINION: boolean;
  DURABLE_MEDICAL_EQUIPMENT_COVER: boolean;
  COMPASSIONATE_VISIT: boolean;
  HOSPITAL_CASH_BENEFIT: boolean;
  REDUCTION_SPECIFIC_DISEASE_PROCEDURE: boolean;
  REDUCTION_PRE_EXISTING_DISEASE: boolean;
  LIMITLESS_CARE: boolean;
  SUPER_STAR_BONUS: boolean;
  NRI_ADVANTAGE: boolean;
  voluntaryDeductible: number;
  MATERNITY_EXPENSES_OPTION: string;
  roomRentModification: string;
  coPaymentOption: number;
  deliveryPremium: string;
  newBornPremium: string;
  premiumForArt: string;
  maternityPremiumType: string;
};

export type THealthSlice = {
  CUS_TYPE: boolean;
  REDIRECTED: boolean;
  POLICY_TENURE: 1 | 2 | 3;
  DROPDOWN_DATA: DROPDOWN_MASTER;
  ADD_FORM: THealthAddForm;
  ADDON_DETAILS: TCareAddon;
  ADDON_DETAILS_ICIC: TICICAddon;
  ADDON_DETAILS_RSA: TRSAAddon;
  ADDON_DETAILS_ADITYA_BIRLA: TADITYABIRLAAddon;
  KYC_DETAILS: TkycDetails;
  ADD_FORM_RESPONSE: THealthFormResponse;
  ALL_QUOTES_DATA: THealthQuote[];
  SELECTED_QUOTE_DATA: THealthQuote;
  NOMINEE_RELATIONSHIP_STATUS: "ADULT_2" | "OTHER";
  INSURED_MEMBER_DETAILS: INSURED_MEMBER_DETAILS;
  ADDRESS_DETAILS: TAddressDetails;
  PAYMENT_DATA: TPAYMENT_DATA;
  CIS_DATA: TCIS_DATA;
  MEDICAL_QUESTION_DATA_IIFCO: TMedicalQuestionIffcoTokio;
  MEDICAL_QUESTION_DATA_GO_DIGIT: TGoDigitMedicalQuestion;
  MEDICAL_QUESTION_DATA_FUTURE_GENERALI: TMedicalQuestionFutureGenerali;
  MEDICAL_QUESTION_DATA_STAR: TStarMedicalQuestion;
  MEDICAL_QUESTION_DATA_STAR_FHO: TStarMedicalQuestion;
  MEDICAL_QUESTION_DATA_STAR_RED_CARPET: TStarMedicalQuestion;
  MEDICAL_QUESTION_DATA_CARE: TCareMedicalQuestion;
  MEDICAL_QUESTION_DATA_HDFC: TCareMedicalQuestion;
  MEDICAL_QUESTION_DATA_ICIC: TCareMedicalQuestion;
  MEDICAL_QUESTION_DATA_OPTIMA_RESTORE: TCareMedicalQuestion;
  MEDICAL_QUESTION_DATA_OPTIMA_SECURE: TCareMedicalQuestion;
  MEDICAL_QUESTION_DATA_BAJAJ: TBajajMedicalQuestion;
  MEDICAL_QUESTION_DATA_ADITYA_BIRLA: TAdityaBirlaMedicalQuestion;
  MEDICAL_QUESTION_DATA_ICICI_ELEVATE: TCareMedicalQuestion;
  PAGE_STATUS: boolean;
  QUOTE_LOADER: boolean;
  Preview_Loader: boolean;
  Form_dob_model: boolean;
  Form_member_model: boolean;
  medical_popup_mhs: boolean;
  isDeduction_value: string;
  past_health_insurance_value: string;
  ADDON_DETAILS_NIVA_BUPA: TNIVABUPAAddons;
  ADDON_QUESTION_NIVA_BUPA: TNivaBupaAddonQuestion;
  MEDICAL_QUESTION_DATA_NIVA_BUPA: TNivaBupaMedicalQuestion;
  MEDICAL_QUESTION_DATA_NIVA_BUPA_SENIOR: TNivaBupaMedicalQuestion;
  ADDON_DETAILS_GOLDEN_SHIELD_ICICI: TGOLDEN_SHIELDICICIAddon;
  ADDON_DETAILS_GODDIGIT: TGoDigitAddon;
  ADDON_DETAILS_BAJAJ: TBAJAJAddon;
  MEDICAL_QUESTION_DATA_KOTAK: TKotakMedicalQuestion;
  MEDICAL_QUESTION_DATA_RSA: TRSAMedicalQuestion;
  ADDON_DETAILS_KOTAK: TKOTAK_EDGE;
  ADDON_DETAILS_CIGNA_PRIME_ADVANTAGE: TADDON_DETAILS_CIGNA_PRIME_ADVANTAGE;
  ADDON_DETAILS_CIGNA_PRIME_ACTIVE: TADDON_DETAILS_CIGNA_PRIME_ACTIVE;
  ADDON_DETAILS_CIGNA_PRIME_PROTECT: TADDON_DETAILS_CIGNA_PRIME_PROTECT;
  ADDON_DETAILS_CIGNA_LIFETIME_INDIA: TADDON_DETAILS_CIGNA_LIFETIME_INDIA;
  ADDON_DETAILS_CIGNA_LIFETIME_GLOBAL: TADDON_DETAILS_CIGNA_LIFETIME_GLOBAL;
  ADDON_DETAILS_ELEVATE_ICICI: TELEVATEICICIAddon;
  MEDICAL_QUESTION_DATA_CIGNA: TCignaMedicalQuestion;
  MEDICAL_QUESTION_DATA_CARE_HEART: TCareHeartMedicalQuestion;
  BANK_DETAILS_NIVABUPA: TBank_Details_NIVABUPA;
  BANK_DETAILS_ADITYABIRLA: TBank_Details_AdityaBirla;
  BANK_DETAILS_HDFC: TBank_Details_HDFC;
  BANK_DETAILS_CIGNA: TBank_Details_CIGNA;
  SUPER_STAR_ADDON: TSUPER_STAR_ADDON;
  MEDICAL_QUESTION_DATA_SUPER_STAR: TStarMedicalQuestion;
  BANK_DETAILS_SUPERSTAR: TBank_Details_SUPERSTAR;
  BANK_DETAILS_CARE: TBank_Details_CARE;
};
