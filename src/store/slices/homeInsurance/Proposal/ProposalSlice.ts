import {
  TAddonCoverages,
  TAddressDetails,
  TDigit_Manual_Ckyc_Verify,
  ThouseholdItemsBreakup,
  TInbuiltCoverages,
  TOwnerDetailsScreen,
  TPropertyDetails,
  TProposal,
  TProposal_Ckyc_Info,
} from "@/store/types/HI/TProposal";
import { TPremiumDetails, TQuickQuote } from "@/store/types/HI/TQuickQuote";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TProposal = {
  policy_information: {
    CompanyDetails: {
      avg_time_to_sttle_claim: "",
      claim_ratio: "",
      company_code: "",
      company_master_id: "",
      created: "",
      customer_satisfaction: "",
      id: "",
      logo: "",
      logoUrl: "",
      net_income_ration: "",
      policy_sales_growth: "",
      product_type_code: "",
      product_type_id: "",
      status: "",
      valid_from: "",
      valid_to: "",
    },
    premiumDetails: {
      sumInsured: "",
      buildingSI: "",
      householdSI: "",
      additionalPremium: "",
      ambulanceChargesCover: "",
      antiTheftDiscount: "",
      associationDiscount: "",
      consumablesCover: "",
      deductibleDiscount: "",
      digit_plan_type: "",
      discountedNetPremium: "",
      discountPremium: "",
      earthquakeDiscountPremium: "",
      earthQuakePremium: "",
      enquiryId: "",
      ePolicyDiscount: "",
      grossPremium: "",
      lossOfRentPremium: "",
      ncbDiscount: "",
      netPremium: "",
      odDiscount: "",
      otherDiscount: "",
      otherDiscountPremium: "",
      passengerCover: "",
      serviceTax: "",
      terrorismDiscountPremium: "",
      terrorismPremium: "",
      basicPremium: "",
      derivedPremium: "",
      planCode: "",
      totalPremium: "",
      totalTax: "",
    },
    productDetails: {
      brochure: "",
      bs_ty_exp: "",
      bs_ty_new: "",
      bs_ty_rollover: "",
      buy_online_code: "",
      created: "",
      discount_calc_action: "",
      discount_calc_method: "",
      id: "",
      is_online: "",
      parent_id: "",
      policy_covers: "",
      prem_calc_action: "",
      product_code: "",
      product_desc: "",
      product_name: "",
      product_type_code: "",
      product_type_id: "",
      proposal_method: "",
      quote_action: "",
      rate_calc_method: "",
      rating: "",
      short_name: "",
      special_feature_codes: "",
      status: "",
      tax_calc_action: "",
      tax_calc_method: "",
      valid_from: "",
      valid_to: "",
    },
    featureCount: 0,
    exclusionCount: 0,
  },
  ckycInfo: {
    propFullName: { value: "", warning: false },
    ProposerDob: { value: "", warning: false },
    docID: { value: "", warning: false },
    customertype: { value: "", warning: false },
    verificationDoc: { value: "", warning: false },
    gender: { value: "", warning: false },
  },
  manualCkycDigit: {
    propFullName: { value: "", warning: false },
    ProposerDob: { value: null, warning: false },
    gender: { value: "", warning: false },
    doiType: { value: "", warning: false },
    doaType: { value: "", warning: false },
    doifile: "",
    doafile: "",
  },
  householdItemsBreakup: {
    electronics: 0,
    furniture: 0,
    others: 0,

    showError: true,
  },
  inbuiltCoverages: {
    lossOfRentSelcted: false,
    num_months_alt: "",
    num_months_rent: "",
    rent_amount: "",
    rent_amount_alt: "",
    rentAltSelected: false,
    isCoverForValuableContent: false,
    coverForValuableContent: 0,
  },
  addonCoverages: {
    isPac: false,
    isPacSpouse: false,
    isEQcover: false,
    pacDetails: {
      insuredAge: { value: "", warning: false },
      insuredGender: { value: "", warning: false },
      insuredName: { value: "", warning: false },
      nomineeAge: { value: "", warning: false },
      nomineeGender: { value: "", warning: false },
      nomineeName: { value: "", warning: false },
      nomineeRelation: { value: "", warning: false },
      nomineeAppointeeName: { value: "", warning: false },
    },
    pacSpouseDetails: {
      age: { value: "", warning: false },
      name: { value: "", warning: false },
      nomineeAge: { value: "", warning: false },
      nomineeAppointeeName: { value: "", warning: false },
      nomineeGender: { value: "", warning: false },
      nomineeName: { value: "", warning: false },
      nomineeRelationWithInsured: { value: "", warning: false },
    },
  },
  ownerDetailsScreen: {
    coOwnerDetails: {
      dob: { value: null, warning: false },
      email: { value: "", warning: false },
      gender: { value: "", warning: false },
      mobile: { value: "", warning: false },
      name: { value: "", warning: false },
    },
    nomineeDetails: {
      appointeeName: { value: "", warning: false },
      nomineeAge: { value: "", warning: false },
      nomineeGender: { value: "", warning: false },
      nomineeName: { value: "", warning: false },
      nomineeRelationshipWithOwner: { value: "", warning: false },
    },
    selectedCoOwner: false,
    ownerDetails: {
      dob: { value: null, warning: false, setFromKycResp: false },
      email: { value: "", warning: false },
      gender: { value: "", warning: false },
      mobile: { value: "", warning: false, setFromKycResp: false },
      name: { value: "", warning: false, setFromKycResp: false },
      pancard: { value: "", warning: false },
    },
  },
  propertyDetails: {
    constructionYear: { value: "", warning: false },
    isLoan: false,
    LoanDetails: {
      accNo: { value: "", warning: false },
      bankName: { value: "", warning: false },
      branchName: { value: "", warning: false },
    },
    typeOfBuilding: { value: "", warning: false },
    floorNo: { value: "", warning: false },
  },
  addressDetails: {
    communicationAddress: {
      address: { value: "", warning: false },
      address2: { value: "", warning: false },
      state: { value: "", warning: false },
      city: { value: "", warning: false },
      pincode: { value: "", warning: false },
    },
    isSame: true,
    propertyAddress: {
      address: { setFromKycResp: false, value: "", warning: false },
      address2: { setFromKycResp: false, value: "", warning: false },
      city: { setFromKycResp: false, value: "", warning: false },
      state: { setFromKycResp: false, value: "", warning: false },
      pincode: { setFromKycResp: false, value: "", warning: false },
    },
  },
};

export const proposalSlice = createSlice({
  name: "proposalInformation",
  initialState,
  reducers: {
    setPolicyInfo: (state: TProposal, action: PayloadAction<TQuickQuote>) => {
      return { ...state, policy_information: action.payload };
    },
    setPolicyPremiumInfo: (
      state: TProposal,
      action: PayloadAction<TPremiumDetails>
    ) => {
      return {
        ...state,
        policy_information: {
          ...state.policy_information,
          premiumDetails: action.payload,
        },
      };
    },
    setCkycInfo: (
      state: TProposal,
      action: PayloadAction<TProposal_Ckyc_Info>
    ) => {
      return { ...state, ckycInfo: action.payload };
    },
    setDigitKycId: (state: TProposal, action: PayloadAction<string>) => {
      return {
        ...state,
        ckycInfo: { ...state.ckycInfo, digitKYCId: action.payload },
      };
    },
    setManualKycInfo: (
      state: TProposal,
      action: PayloadAction<TDigit_Manual_Ckyc_Verify>
    ) => {
      return { ...state, manualCkycDigit: action.payload };
    },
    setDoaFile: (state: TProposal, action: PayloadAction<string>) => {
      return {
        ...state,
        manualCkycDigit: { ...state.manualCkycDigit, doafile: action.payload },
      };
    },
    setDoiFile: (state: TProposal, action: PayloadAction<string>) => {
      return {
        ...state,
        manualCkycDigit: { ...state.manualCkycDigit, doifile: action.payload },
      };
    },
    setHouseholdItemsBreakup: (
      state: TProposal,
      action: PayloadAction<ThouseholdItemsBreakup>
    ) => {
      return {
        ...state,
        householdItemsBreakup: action.payload,
      };
    },
    setInbuiltCoverage: (
      state: TProposal,
      action: PayloadAction<TInbuiltCoverages>
    ) => {
      return {
        ...state,
        inbuiltCoverages: action.payload,
      };
    },
    setAddonCoverage: (
      state: TProposal,
      action: PayloadAction<TAddonCoverages>
    ) => {
      return {
        ...state,
        addonCoverages: action.payload,
      };
    },
    setOwnerDetailsScreen: (
      state: TProposal,
      action: PayloadAction<TOwnerDetailsScreen>
    ) => {
      return {
        ...state,
        ownerDetailsScreen: action.payload,
      };
    },
    setPropertyDetails: (
      state: TProposal,
      action: PayloadAction<TPropertyDetails>
    ) => {
      return {
        ...state,
        propertyDetails: action.payload,
      };
    },
    setAddressDetails: (
      state: TProposal,
      action: PayloadAction<TAddressDetails>
    ) => {
      return {
        ...state,
        addressDetails: action.payload,
      };
    },
    resetProposalState: (state: TProposal, action: PayloadAction<any>) => {
      return initialState;
    },
    setCoOwnerState: (
      state: TProposal,
      action: PayloadAction<TOwnerDetailsScreen>
    ) => {
      return {
        ...state,
        ownerDetailsScreen: action.payload,
      };
    },
  },
});

export const {
  setPolicyInfo,
  setCkycInfo,
  setDigitKycId,
  setManualKycInfo,
  setDoiFile,
  setDoaFile,
  setHouseholdItemsBreakup,
  setAddonCoverage,
  setOwnerDetailsScreen,
  setPropertyDetails,
  setAddressDetails,
  setPolicyPremiumInfo,
  resetProposalState,
  setCoOwnerState,
} = proposalSlice.actions;

export default proposalSlice.reducer;
