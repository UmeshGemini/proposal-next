import { TAddressDetails } from "./TermFullJourney/TAddressDetails";
import { TCKYCDetails, THDFCCKYCDetails } from "./TermFullJourney/TCKYCDetails";
import { TDropdownData } from "./TermFullJourney/TDropdownData";
import { THDFCUploadDoc } from "./TermFullJourney/THDFCUploadDoc";
import { TInsuredMemberDetails } from "./TermFullJourney/TInsuredMemberDetails";
import { TNRIDetails } from "./TermFullJourney/TNRIDetails";
import { TNomineeDetails } from "./TermFullJourney/TNomineeDetails";
import { TOTPDetails } from "./TermFullJourney/TOTPDetails";
import { TPolicyDetails } from "./TermFullJourney/TPolicyDetails";
import { TProposerDetails } from "./TermFullJourney/TProposerDetails";
import { TProposerPage } from "./TermFullJourney/TProposerPage";
import { TRidersBenefits } from "./TermFullJourney/TRidersBenefits";
import {
  TTermHDFCMedicalQuestionDetails,
  TTermMedicalQuestionDetails,
} from "./TermFullJourney/TTermMedicalQuestionDetails";

export type TTermFullJourneySlice = {
  PREMIUM_LOADER: boolean;
  proposerPage: TProposerPage;
  dropdownData: TDropdownData;
  // selectedQuote: TSelectedQuote;
  policyDetails: TPolicyDetails;
  proposerDetails: TProposerDetails;
  insuredDetails: TInsuredMemberDetails;
  nomineeDetails: TNomineeDetails;
  addressDetails: TAddressDetails;
  NRIDetails: TNRIDetails;
  TermICICIMedicalQuestion: TTermMedicalQuestionDetails;
  TermHDFCMedicalQuestion: TTermHDFCMedicalQuestionDetails;
  ckycDetails: TCKYCDetails;
  HDFCCKYCDetails: THDFCCKYCDetails;
  HDFCUploadDocDetails: THDFCUploadDoc;
  OTP_DETAILS: TOTPDetails;
  RIDERS_BENEFITS: TRidersBenefits;
};
