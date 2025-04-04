import { PROPOSER_PAGE_STATE_STATUS } from "@/store/types/TermFullJourney/TProposerPage";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { createSlice } from "@reduxjs/toolkit";
import { TERM_ADDRESS_REDUCERS } from "./Reducers/TermAddressReducer";
import { TERM_DROPDOWN_REDUCER } from "./Reducers/TermDropdownReducer";
import { TERM_HDFC_CKYC_REDUCER } from "./Reducers/TermHDFCCKYCReducer";
import { TERM_HDFC_MEDICAL_QUESTION_REDUCERS } from "./Reducers/TermHDFCMedicalReducer";
import { TERM_HDFC_RIDERS_BENEFITS_REDUCERS } from "./Reducers/TermHDFCRidersBenefitsReducers";
import { TERM_HDFC_UPLOAD_DOC_REDUCER } from "./Reducers/TermHDFCUploadDocReducer";
import { TERM_CKYC_REDUCER } from "./Reducers/TermICICICKYCReducer";
import { TERM_ICICI_MEDICAL_QUESTION_REDUCERS } from "./Reducers/TermICICIMedicalQuestionReducer";
import { TERM_INSURED_REDUCERS } from "./Reducers/TermInsuredReducers";
import { TERM_NOMINEE_DETAILS_REDUCERS } from "./Reducers/TermNomineeReducers";
import { TERM_NRI_DETAILS } from "./Reducers/TermNRIReducer";
import { TERM_OTP_DETAILS_REDUCERS } from "./Reducers/TermOTPReducers";
import { TERM_POLICY_DETAILS_REDUCERS } from "./Reducers/TermPolicyReducers";
import { TERM_PROPOSER_PAGE_REDUCERS } from "./Reducers/TermProposerPageReducers";
import { TERM_PROPOSER_DETAILS_REDUCERS } from "./Reducers/TermProposerReducers";
import { TERM_REDUCERS } from "./Reducers/TermReducers";

const intitialState: TTermFullJourneySlice = {
  PREMIUM_LOADER: false,
  addressDetails: {
    is_mailing_and_permanent_address_same: true,
    mailing_address: {
      pincode: { value: "", warning: false },
      city: "",
      state: "",
      house_no_building: { value: "", warning: false },
      area_town_locality: { value: "", warning: false },
    },
    permanent_address: {
      pincode: { value: "", warning: false },
      city: "",
      state: "",
      area_town_locality: { value: "", warning: false },
      house_no_building: { value: "", warning: false },
    },
  },
  ckycDetails: {
    address_proof: { value: "", warning: false },
    address_proof_doc_no: { value: "", warning: false },
    address_proof_exp_date: { value: "", warning: false },
    age_proof: { value: "", warning: false },
    age_proof_doc_no: { value: "", warning: false },
    age_proof_exp_date: { value: "", warning: false },
    identity_proof: { value: "", warning: false },
    identity_proof_doc_no: { value: "", warning: false },
    identity_proof_exp_date: { value: "", warning: false },
    it_proof: { value: "", warning: false },
  },
  dropdownData: {
    MAX_ANNUAL_INCOME: [],
    MAX_SUM_ASSURED: [],
    state: [],
    vaccine: [],
    modeTravel: [],
    purposeTravel: [],
    typeResidence: [],
    PREGNANCY_WEEKS: [],
    AADHAR_OPTIONS_DATA: [
      { value: "aadhar_no", label: "Aadhar No" },
      { value: "virtual_id", label: "Virtual ID" },
    ],
    IT_PROOF_MASTER: [
      { value: "pancard", label: "PAN" },
      { value: "form 60", label: "FORM 60" },
    ],
    IDENTITY_PROOF_MASTER: [],
    EDUCATION_MASTER: [],
    BENEFICIARY_RELATIONSHIP: [
      { value: "Daughter", label: "Daughter" },
      { value: "Son", label: "Son" },
      { value: "Wife", label: "Wife" },
    ],
    TRUSTEE_TYPE: [
      { value: "Entity", label: "Entity" },
      { value: "Individual", label: "Individual" },
    ],
    eia: [],
    orgType: [],
    myProf: [],
    insurance_company: [],
    indsType: [],
    genderData: [
      { value: "M", label: "Male" },
      { value: "F", label: "Female" },
    ],
    maritalStatusData: [],
    nomineeRelationshipData: [],
    occupationData: [],
    annualIncomeData: [
      { value: "2 Lakhs", label: "2 Lakhs" },
      { value: "3 Lakhs", label: "3 Lakhs" },
      { value: "4 Lakhs", label: "4 Lakhs" },
      { value: "5 Lakhs", label: "5 Lakhs" },
      { value: "6 Lakhs", label: "6 Lakhs" },
    ],
    heightFeetData: [
      { value: "1", label: "1 Feet" },
      { value: "2", label: "2 Feet" },
      { value: "3", label: "3 Feet" },
      { value: "4", label: "4 Feet" },
      { value: "5", label: "5 Feet" },
      { value: "6", label: "6 Feet" },
      { value: "7", label: "7 Feet" },
    ],
    heightInchesData: [
      { value: "1", label: "1 Inch" },
      { value: "2", label: "2 Inch" },
      { value: "3", label: "3 Inch" },
      { value: "4", label: "4 Inch" },
      { value: "5", label: "5 Inch" },
      { value: "6", label: "6 Inch" },
      { value: "7", label: "7 Inch" },
      { value: "8", label: "8 Inch" },
      { value: "9", label: "9 Inch" },
      { value: "10", label: "10 Inch" },
      { value: "11", label: "11 Inch" },
    ],
    alcohol: [],
    tobacco: [],
    addressProf: [{ value: "Adhr", label: "Aadhar card" }],
    ageProf: [],
    identityProf: [],
    incomeProf: [],
    income_tax_proof: [{ value: "pancard", label: "Pan Card" }],
    insuranceComp: [],
    country: [],
    HDFC_CKYC_OCCUPATION: [
      { value: "Service - Public Sector", label: "Service - Public Sector" },
      {
        label: "Service - Goverment Sector",
        value: "Service - Goverment Sector",
      },
      { value: "Service - Private Sector", label: "Service - Private Sector" },
    ],
    HDFC_MEDICAL_DESIGNATION: [
      { value: "OCCUP_AVVP_CD", label: "AVP" },
      { value: "OCCUP_AGAO_CD", label: "Agriculture Farmer" },
      { value: "OCCUP_AUDI_CD", label: "Auditor" },
      { value: "OCCUP_ADAA_CD", label: "Business analyst" },
      { value: "OCCUP_CEOF_CD", label: "CEO" },
      { value: "OCCUP_PRON_CD", label: "Chartered Accountant" },
      { value: "OCCUP_DIR_CD", label: "Director" },
      { value: "OCCUP_DOCT_CD", label: "Doctor" },
      { value: "OCCUP_ENGR_CD", label: "Engineer" },
      { value: "OCCUP_ADMV_CD", label: "General manager" },
      { value: "OCCUP_HEAY_CD", label: "Head Of Department" },
      { value: "OCCUP_MGR_CD", label: "Manager" },
      { value: "OCCUP_MGRD_CD", label: "Managing director" },
      { value: "OCCUP_OTHR_CD", label: "Other Occupation" },
      { value: "OCCUP_BOND_CD", label: "Properietor" },
      { value: "OCCUP_SENT_CD", label: "Senior Accountant" },
      { value: "OCCUP_SRMR_CD", label: "Senior Manager" },
      { value: "OCCUP_SOFE_CD", label: "Software Engineer" },
      { value: "OCCUP_SWPR_CD", label: "Software Professional" },
      { value: "OCCUP_STDN_CD", label: "Student" },
      { value: "OCCUP_SINS_CD", label: "Sub Inspector" },
      { value: "OCCUP_SYAN_CD", label: "System Analyst" },
      { value: "OCCUP_ADM1_CD", label: "Vice president" },
    ],
    AGE_AT_DIAGNOSIS: [],
    COMPANY_BELONGS: [],
    CONSUME_ALCOHOL: [
      { value: "AT_BEER", label: "Beer" },
      { value: "AT_WINE", label: "Wine" },
      { value: "AT_SPIRIT", label: "Spirit" },
      { value: "AT_OTH", label: "Other" },
    ],
    HDFC_ALIVE: [
      { value: "FAD_ALIVE", label: "Alive" },
      { value: "FAD_DESD", label: "Deceased" },
    ],
    HDFC_COUNTRIES: [],
    HDFC_CURRENT_AGE: [],
    HDFC_DISEASE: [],
    HOBBIES: [],
    MAY_UNDERGO_MEDICAL_EXAMINATION: [
      { value: "MEL_RES", label: "Residence" },
      { value: "MEL_WP", label: "Workplace" },
    ],
    NATURE_OF_WORK: [
      { value: "NATW_ADMIN", label: "Administrator" },
      { value: "NATW_CLRC", label: "Clerical" },
      { value: "NATW_LABOR", label: "Manual" },
      { value: "NATW_MANG", label: "Manager" },
      { value: "NATW_MECH", label: "Mechanical" },
      { value: "NATW_SPVR", label: "Supervisor" },
    ],
    RELATION_OF_LIFE_TO_BE_ASSURED: [
      { value: "MGM_BRO", label: "Brother" },
      { value: "MGM_FATH", label: "Father" },
      { value: "MGM_MOTH", label: "Mother" },
      { value: "MGM_SIS", label: "Sister" },
    ],
    SELECT_ANY_SIMULTANEOUS: [
      { value: "SAD_RLP", label: "Reviving lapsed policies" },
      { value: "SAD_SSA", label: "Submitting Simultaneous Applications" },
      { value: "SAD_NOT", label: "Neither of these" },
    ],
    TOBACCO_PRODUCT: [
      { value: "TT_BD", label: "Bidi" },
      { value: "TT_CGR", label: "Cigar" },
      { value: "TT_CGRT", label: "Cigarette" },
      { value: "TT_CT", label: "Chewing Tobaccoher" },
      { value: "TT_NRC", label: "Narcotics" },
    ],
    HDFC_HEIGHT: [],
    HDFC_WEIGHT: [],
    have_you_suffered_from_one: [
      {
        label: "Diabetes/ high blood sugar/ sugar in urine",
        value: "Diabetes/ high blood sugar/ sugar in urine",
      },
      {
        label: "High blood pressure/ hypertension",
        value: "High blood pressure/ hypertension",
      },
      { value: "Heart disease", label: "Heart disease" },
      { value: "Stroke", label: "Stroke" },
    ],
    have_you_suffered_from_two: [
      {
        label: "Respiratory disorders, Arthritis",
        value: "Respiratory disorders, Arthritis",
      },
      {
        label: "Arthritis",
        value: "Arthritis",
      },
      { value: "Back problems", label: "Back problems" },
      { value: "Tuberculosis", label: "Tuberculosis" },
      {
        label: "Any recurrent medical condition/ disability",
        value: "Any recurrent medical condition/ disability",
      },
    ],

    have_you_suffered_from_three: [
      { value: "Liver disorder", label: "Liver disorder" },
      { value: "Kidney disorder", label: "Kidney disorder" },
      {
        label: "Disorder of the digestive system",
        value: "Disorder of the digestive system",
      },
      { value: "Abnormality of thyroid", label: "Abnormality of thyroid" },
      { value: "Blood disorder", label: "Blood disorder" },
    ],

    have_you_suffered_from_four: [
      { value: "Epilepsy", label: "Epilepsy" },
      {
        label: "Any nervous disorder or mental condition",
        value: "Any nervous disorder or mental condition",
      },
      {
        label: "Paralysis or multiple sclerosis",
        value: "Paralysis or multiple sclerosis",
      },
      {
        label: "Depression or psychiatric disorder",
        value: "Depression or psychiatric disorder",
      },
      { value: "Cancer or a tumor", label: "Cancer or a tumor" },
    ],

    have_you_suffered_from_five: [
      { value: "Dengue", label: "Dengue" },
      { value: "Swine Flu", label: "Swine Flu" },
      { value: "Encephalitis", label: "Encephalitis" },
    ],
    buyingPolicy: [],
  },
  HDFCCKYCDetails: {
    ckyc_no: { value: "", warning: false },
    father_full_name: { value: "", warning: false },
    mother_full_name: { value: "", warning: false },
    occupation: { value: "", warning: false },
    spouse_name: { value: "", warning: false },
    employer_address: { value: "", warning: false },
    employer_name: { value: "", warning: false },
  },
  HDFCUploadDocDetails: {
    data: [
      {
        requirement_cd: "REQ_045",
        document_cd: "DOC_0147",
        requirement_desc: "Pending Proposal Form",
        document_nm: "Declaration for Discrepancies",
        document_desc: "Declaration for Discrepancies",
        image_base64: "",
        document_type: "",
        upload_status: false,
        image_name: "",
      },
    ],
  },
  insuredDetails: {
    full_name: { value: "", warning: false },
    email: { value: "", warning: false },
    dob: { value: null, warning: false },
    gender: { value: "", warning: false },
    mobile: { value: "", warning: false },
    aadhar_number: { value: "", warning: false },
    marital_status: { value: { code: "", label: "" }, warning: false },
    occupation: { value: { code: "", label: "" }, warning: false },
    org_desc: { value: "", warning: false },
    org_name: { value: { code: "", label: "" }, warning: false },
    education: { value: { code: "", label: "" }, warning: false },
  },
  nomineeDetails: {
    dob: { value: null, warning: false },
    full_name: { value: "", warning: false },
    gender: { value: "", warning: false },
    relationship: { value: "", warning: false },
    is_beneficiary: false,
    beneficiary: [
      {
        date_of_birth: { value: "", warning: false },
        full_name: { value: "", warning: false },
        relation_to_proposer: { value: "", warning: false },
        share: { value: "", warning: false },
      },
    ],
    trustee_details: {
      address: { value: "", warning: false },
      city: { value: "", warning: false },
      dob: { value: "", warning: false },
      email: { value: "", warning: false },
      mobileNo: { value: "", warning: false },
      name: { value: "", warning: false },
      panNo: { value: "", warning: false },
      pincode: { value: "", warning: false },
      state: { value: "", warning: false },
      trusteeType: { value: "", warning: false },
    },
  },
  NRIDetails: {
    birth_country_india: false,
    country_of_birth: { value: "", warning: false },
    FATCA_CRS_STATUS: false,
    place_of_birth: { value: "", warning: false },
    resident_only_india: false,
    tin_pan_issuing_country: { value: "", warning: false },
    tin_pan_issuing_country_2: { value: "", warning: false },
    tin_pan_issuing_country_3: { value: "", warning: false },
    tin_pan_other_country: { value: "", warning: false },
    tin_pan_other_country_2: { value: "", warning: false },
    tin_pan_other_country_3: { value: "", warning: false },
    aadhar_details: {
      doc_no: { value: "", warning: false },
      language: { value: "", warning: false },
      option: { value: "", warning: false },
    },
    disclaimer_three: false,
    disclaimer_two: false,
    nationality_status: "Indian",
    nri_details: {
      country_of_nationality: { value: "", warning: false },
      country_of_residence: { value: "", warning: false },
      date_of_arriving_india: { value: "", warning: false },
      date_of_leaving_india: { value: "", warning: false },
      duration_of_stay_abroad_month: { value: "", warning: false },
      duration_of_stay_abroad_year: { value: "", warning: false },
      employer_university_details: { value: "", warning: false },
      passport_number: { value: "", warning: false },
      purpose_of_stay_abroad: { value: "", warning: false },
      intended_duration_of_stay_month: { value: "", warning: false },
      intended_duration_of_stay_year: { value: "", warning: false },
    },
    nri_travel_details: {
      arrival_date: { value: "", warning: false },
      departure_date: { value: "", warning: false },
      mode_of_travel: { value: "", warning: false },
      name_of_business: { value: "", warning: false },
      name_of_city: { value: "", warning: false },
      name_of_country: { value: "", warning: false },
      purpose_of_travel: { value: "", warning: false },
      safety_precaution: { value: "", warning: false },
      status: false,
      type_residence: { value: "", warning: false },
      visa_type: { value: "", warning: false },
    },
    phone_email: {
      country_code: { value: "", warning: false },
      email: { value: "", warning: false },
      mobile_number: { value: "", warning: false },
    },
    resident_status: "Resident Indian",
    type_bank_account_held: {
      account_number: { value: "", warning: false },
      status: "NRE",
    },
  },
  OTP_DETAILS: {
    created: "",
    mobile: "",
    otp: "",
    type: "",
    updated: "",
  },
  policyDetails: {
    insurer_logo: "",
    sum_assured: "",
    policy_tenure: "",
    payment_mode: "",
    gross_amount: "",
    gst: "",
    net_premium: "",
  },
  proposerDetails: {
    diabetic: false,
    housewife: false,
    premium_loader: false,
    sum_assured: { value: "", warning: false },
    education: { value: "", warning: false },
    is_proposer_is_insured_member: true,
    full_name: { value: "", warning: false },
    dob: { value: null, warning: false },
    gender: { value: "", warning: false },
    mobile: { value: "", warning: false },
    email: { value: "", warning: false },
    aadhar_number: { value: "", warning: false },
    emergency_number: { value: "", warning: false },
    marital_status: { value: "", warning: false },
    annual_income: { value: "", warning: false },
    occupation: { value: "", warning: false },
    occupation_desc: { value: "", warning: false },
    org_description: { value: "", warning: false },
    org_name: { value: "", warning: false },
    my_profession: { value: "", warning: false },
    industry_type: { value: "", warning: false },
    industry_type_desc: { value: "", warning: false },
    org_type: { value: "", warning: false },
    org_type_desc: { value: "", warning: false },
    obj_of_buying_policy: { value: "", warning: false },
    pan_no: { value: "", warning: false },
    nationality: "indian",
  },
  proposerPage: {
    update_status: false,
    page_name: PROPOSER_PAGE_STATE_STATUS.PROPOSAL_PAGE,
    PAYMENT_URL: "",
  },
  RIDERS_BENEFITS: {
    riders_benefits_response: {
      redirectionUrl: "",
      base_rate: 0,
      modal_factor: "",
      conversion_factor: 0,
      premiumAmount: 0,
      finalPremium: 0,
      pay_term: "",
      term: "",
      appno: "",
      quote_id: "",
      uwtype: "",
      riders: {
        TF001: {
          sum_assured: 0,
          min_sa_percentage: "",
          max_sa_percentage: "",
          sa_percentage: "",
          interval_value: "",
          interval: "",
          change_term: "",
          premium_without_tax: "",
          premium: 0,
          rate: "",
          min_sum_assured: "",
          max_sum_assured: "",
        },
        TF002: {
          sum_assured: 0,
          sa_percentage: "",
          min_sa_percentage: "",
          max_sa_percentage: "",
          interval_value: "",
          interval: "",
          premium_without_tax: "",
          premium: 0,
          rate: "",
          min_sum_assured: "",
          max_sum_assured: "",
        },
        TF003: {
          sum_assured: 0,
          sa_percentage: "",
          min_sa_percentage: "",
          max_sa_percentage: "",
          interval_value: "",
          interval: "",
          premium_without_tax: "",
          premium: 0,
          rate: "",
          min_sum_assured: "",
          max_sum_assured: "",
        },
        TF004: {
          sum_assured: 0,
          sa_percentage: "",
          min_sa_percentage: "",
          max_sa_percentage: "",
          interval_value: "",
          interval: "",
          premium_without_tax: "",
          premium: 0,
          rate: "",
          min_sum_assured: "",
          max_sum_assured: "",
        },
        TF005: {
          sum_assured: 0,
          sa_percentage: "",
          min_sa_percentage: "",
          max_sa_percentage: "",
          interval_value: "",
          interval: "",
          premium_without_tax: "",
          premium: 0,
          rate: "",
          min_sum_assured: "",
          max_sum_assured: "",
        },
      },
      quote_no: "",
      sum_insured: "",
      frequency: "",
    },
    local_value: {
      tf001Status: false,
      tf001Value: "1000000",
      tf002Status: false,
      tf002Value: "1000000",
      tf003Status: false,
      tf003Value: "1000000",
      tf004Status: false,
      tf004Value: "1000000",
      tf005Status: false,
      tf005Value: "1000000",
      BNF001Status: false,
      BNF002Status: false,
      BNF003Status: false,
    },
  },
  TermHDFCMedicalQuestion: {
    height_ft: { value: "", warning: false },
    height_inches: { value: "", warning: false },
    height_cm: { value: "", warning: false },
    weight_kg: { value: "", warning: false },
    question: [
      {
        main_question: {
          code: "PQ01",
          icon_class: "tobaco",
          title: "Existing cover",
          description:
            "Do you have any existing life insurance cover of premium paying and/ or paid-up policies?",
          status: false,
          field_data: [
            {
              code: "PQ01-1",
              title: "A) Sum assured payable on death",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
              column: 6,
            },
            {
              code: "PQ01-2",
              title: "B) Sum assured payable on accidental death (excluding A)",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
              column: 6,
            },
            {
              code: "PQ01-3",
              title: "C) Benefits payable on disability/CI",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
              column: 6,
            },
            {
              code: "PQ01-4",
              title:
                "D) How much of the cover A+B+C was taken out in last 12 months?",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
              column: 6,
            },
            {
              code: "PQ01-5",
              title:
                "E) How much of the cover A was taken out during the last five years?",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
              column: 6,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ02",
          icon_class: "tobaco",
          title: "Simultaneous applications",
          description:
            "Have you submitted any simultaneous application for life insurance company, which is still pending or are you likely to revive lapsed policies?",
          status: false,
          field_data: [
            {
              code: "PQ02-1",
              title: "Select any simultaneous",
              value: "",
              warning: false,
              field_type: "dropdown",
              numbers_only: false,
            },
            {
              code: "PQ02-2",
              title:
                "Sum Assured payable on death (Already proposed/to be processed)",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ02-3",
              title: "Name of the company",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ02-4",
              title: "Type of Product",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ02-5",
              title: "Purpose of cover",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ03",
          icon_class: "tobaco",
          title: "Decisions on previous applications",
          description:
            "Has any application for insurance on your life been postponed?",
          status: false,
          field_data: [
            {
              code: "PQ03-1",
              title: "Policy Number",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ03-2",
              title: "Name of insurance company",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ03-3",
              title: "Reason",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ04",
          icon_class: "tobaco",
          title:
            "Has any application for insurance on your life been accepted with extra premium?",
          status: false,
          field_data: [
            {
              code: "PQ04-1",
              title: "Policy Number",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ04-2",
              title: "Name of insurance company",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ04-3",
              title: "Reason",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ05",
          icon_class: "tobaco",
          title:
            "Has any application for insurance on your life been accepted on other special terms?",
          status: false,
          field_data: [
            {
              code: "PQ05-1",
              title: "Policy Number",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ05-2",
              title: "Name of insurance company",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ05-3",
              title: "Reason",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ06",
          icon_class: "tobaco",
          title:
            "Has any application for insurance on your life been declined?",
          status: false,
          field_data: [
            {
              code: "PQ06-1",
              title: "Policy Number",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ06-2",
              title: "Name of insurance company",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ06-3",
              title: "Reason",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ07",
          icon_class: "tobaco",
          title:
            "Has any application for insurance on your life been withdrawn by you?",
          status: false,
          field_data: [
            {
              code: "PQ07-1",
              title: "Policy Number",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ07-2",
              title: "Name of insurance company",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ07-3",
              title: "Reason",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ08",
          icon_class: "tobaco",
          title: "Travel",
          status: false,
        },
        sub_question: [
          {
            code: "PQ08-SQ01",
            icon_class: "tobaco",
            title:
              "Have you resided overseas for more than six months continuously during the last five years?",
            status: false,
            field_data: [
              {
                code: "PQ08-SQ01-1",
                title: "Name of countries for past travel",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
              },
              {
                code: "PQ08-SQ01-2",
                title: "Duration of stay",
                value: "",
                warning: false,
                field_type: "textField",
                numbers_only: false,
              },
            ],
          },
          {
            code: "PQ08-SQ02",
            icon_class: "tobaco",
            title: "Do you intend to reside overseas in the next six months?",
            status: false,
            field_data: [
              {
                code: "PQ08-SQ02-1",
                title: "Name of countries for future travel",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
              },
              {
                code: "PQ08-SQ02-2",
                title: "Duration of stay",
                value: "",
                warning: false,
                field_type: "textField",
                numbers_only: false,
              },
            ],
          },
        ],
      },
      {
        main_question: {
          code: "PQ09",
          icon_class: "tobaco",
          title: "Avocation",
          description:
            "Do you take part in any hobbies/ activities that could be considered dangerous in any way? E.g. aviation (other than as a fare-paying passenger), mountaineering, deep sea diving or any form of racing.",
          status: false,
          field_data: [
            {
              code: "PQ09-1",
              title: "Select hobbies",
              value: "",
              warning: false,
              field_type: "dropdown",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ20",
          icon_class: "tobaco",
          title: "Impairment questionnaire",
          status: false,
        },
        sub_question: [
          {
            code: "PQ20-SQ01",
            icon_class: "tobaco",
            title: "Have you ever suffered from",
            description:
              "Diabetes/ high blood sugar/ sugar in urine, High blood pressure/ hypertension, Heart disease, Stroke",
            status: false,
            field_data: [
              {
                code: "PQ20-SQ01-1",
                title: "Select",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
                column: 8,
              },
            ],
          },
          {
            code: "PQ20-SQ02",
            icon_class: "tobaco",
            title: "Have you ever suffered from",
            description:
              "Respiratory disorders, Arthritis, Back problems, Tuberculosis, Any recurrent medical condition/ disability.",
            status: false,
            field_data: [
              {
                code: "PQ09-SQ02-1",
                title: "Select",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
                column: 8,
              },
            ],
          },
          {
            code: "PQ20-SQ03",
            icon_class: "tobaco",
            title: "Have you ever suffered from",
            description:
              "Liver disorder, Kidney disorder, Disorder of the digestive system, Abnormality of thyroid, Blood disorder",
            status: false,
            field_data: [
              {
                code: "PQ09-SQ03-1",
                title: "Select",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
                column: 8,
              },
            ],
          },
          {
            code: "PQ20-SQ04",
            icon_class: "tobaco",
            title: "Have you ever suffered from",
            description:
              "Epilepsy, Any nervous disorder or mental condition, Paralysis or multiple sclerosis, Depression or psychiatric disorder, Cancer or a tumor",
            status: false,
            field_data: [
              {
                code: "PQ09-SQ04-1",
                title: "Select",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
                column: 8,
              },
            ],
          },
          {
            code: "PQ20-SQ05",
            icon_class: "tobaco",
            title: "Have you ever suffered from",
            description: "Dengue, Swine Flu, Encephalitis",
            status: false,
            field_data: [
              {
                code: "PQ09-SQ05-1",
                title: "Select",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
                column: 8,
              },
            ],
          },
        ],
      },
      {
        main_question: {
          code: "PQ10",
          icon_class: "tobaco",
          title:
            "Do you have any physical disability which is affecting your day to day activities?",
          status: false,
          field_data: [
            {
              code: "PQ10-1",
              title: "Impairment",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ10-2",
              title: "Date of diagnosis / event",
              value: "",
              warning: false,
              field_type: "datePicker",
              numbers_only: false,
            },
            {
              code: "PQ10-3",
              title: "Name and address of the Doctor",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ10-4",
              title: "Details of investigation done",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
        sub_question: [
          {
            code: "PQ10-SQ01",
            icon_class: "tobaco",
            title: "Under medication?",
            status: false,
          },
          {
            code: "PQ10-SQ02",
            icon_class: "tobaco",
            title: "Fully recovered?",
            status: false,
          },
        ],
      },
      {
        main_question: {
          code: "PQ11",
          icon_class: "tobaco",
          title:
            "Are you currently suffering from any illness, impairment or taking any medication or pills or drugs?",
          status: false,
          field_data: [
            {
              code: "PQ11-1",
              title: "Impairment",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ11-2",
              title: "Date of diagnosis / event",
              value: "",
              warning: false,
              field_type: "datePicker",
              numbers_only: false,
            },
            {
              code: "PQ11-3",
              title: "Name and address of the Doctor",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ11-4",
              title: "Details of investigation done",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
        sub_question: [
          {
            code: "PQ11-SQ01",
            icon_class: "tobaco",
            title: "Under medication?",
            status: false,
          },
          {
            code: "PQ11-SQ02",
            icon_class: "tobaco",
            title: "Fully recovered?",
            status: false,
          },
        ],
      },
      {
        main_question: {
          code: "PQ12",
          icon_class: "tobaco",
          title:
            "Have you ever been tested positive for HIV/ AIDS or Hepatitis B or C, or have you been tested/ treated for other sexually transmitted disease or are you awaiting the results of such a test?",
          status: false,
          field_data: [
            {
              code: "PQ12-1",
              title: "Impairment",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ12-2",
              title: "Date of diagnosis / event",
              value: "",
              warning: false,
              field_type: "datePicker",
              numbers_only: false,
            },
            {
              code: "PQ12-3",
              title: "Name and address of the Doctor",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ12-4",
              title: "Details of investigation done",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
        sub_question: [
          {
            code: "PQ12-SQ01",
            icon_class: "tobaco",
            title: "Under medication?",
            status: false,
          },
          {
            code: "PQ12-SQ02",
            icon_class: "tobaco",
            title: "Fully recovered?",
            status: false,
          },
        ],
      },
      {
        main_question: {
          code: "PQ13",
          icon_class: "tobaco",
          title:
            "Do you have/ had any recurrent medical condition or physical disability or illness or injury that has kept you from working for more than one week in last 5 years?",
          status: false,
          field_data: [
            {
              code: "PQ13-1",
              title: "Impairment",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ13-2",
              title: "Date of diagnosis / event",
              value: "",
              warning: false,
              field_type: "datePicker",
              numbers_only: false,
            },
            {
              code: "PQ13-3",
              title: "Name and address of the Doctor",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ13-4",
              title: "Details of investigation done",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
        sub_question: [
          {
            code: "PQ13-SQ01",
            icon_class: "tobaco",
            title: "Under medication?",
            status: false,
          },
          {
            code: "PQ13-SQ02",
            icon_class: "tobaco",
            title: "Fully recovered?",
            status: false,
          },
        ],
      },
      {
        main_question: {
          code: "PQ14",
          icon_class: "tobaco",
          title:
            "During last 5 years have you undergone or been recommended to undergo hospitalisation?",
          status: false,
          field_data: [
            {
              code: "PQ14-1",
              title: "Impairment",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ14-2",
              title: "Date of diagnosis / event",
              value: "",
              warning: false,
              field_type: "datePicker",
              numbers_only: false,
            },
            {
              code: "PQ14-3",
              title: "Name and address of the Doctor",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ14-4",
              title: "Details of investigation done",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
        sub_question: [
          {
            code: "PQ14-SQ01",
            icon_class: "tobaco",
            title: "Under medication?",
            status: false,
          },
          {
            code: "PQ14-SQ02",
            icon_class: "tobaco",
            title: "Fully recovered?",
            status: false,
          },
        ],
      },
      {
        main_question: {
          code: "PQ15",
          icon_class: "tobaco",
          title:
            "During last 5 years have you undergone or been recommended to undergo operation?",
          status: false,
          field_data: [
            {
              code: "PQ15-1",
              title: "Impairment",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ15-2",
              title: "Date of diagnosis / event",
              value: "",
              warning: false,
              field_type: "datePicker",
              numbers_only: false,
            },
            {
              code: "PQ15-3",
              title: "Name and address of the Doctor",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ15-4",
              title: "Details of investigation done",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
        sub_question: [
          {
            code: "PQ15-SQ01",
            icon_class: "tobaco",
            title: "Under medication?",
            status: false,
          },
          {
            code: "PQ15-SQ02",
            icon_class: "tobaco",
            title: "Fully recovered?",
            status: false,
          },
        ],
      },
      {
        main_question: {
          code: "PQ16",
          icon_class: "tobaco",
          title:
            "During last 5 years have you undergone or been recommended to undergo X-ray any other investigation (excluding check-ups for employment/ insurance/ foreign visit)?",
          status: false,
          field_data: [
            {
              code: "PQ16-1",
              title: "Impairment",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ16-2",
              title: "Date of diagnosis / event",
              value: "",
              warning: false,
              field_type: "datePicker",
              numbers_only: false,
            },
            {
              code: "PQ16-3",
              title: "Name and address of the Doctor",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "PQ16-4",
              title: "Details of investigation done",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
        sub_question: [
          {
            code: "PQ16-SQ01",
            icon_class: "tobaco",
            title: "Under medication?",
            status: false,
          },
          {
            code: "PQ16-SQ02",
            icon_class: "tobaco",
            title: "Fully recovered?",
            status: false,
          },
        ],
      },
      {
        main_question: {
          code: "PQ17",
          icon_class: "tobaco",
          title: "Please provide the following Usual Doctor details",
          status: true,
          hide_toggle_button: true,
          field_data: [
            {
              code: "PQ17-1",
              title: "We may require you to undergo medical examinations/tests",
              value: "",
              warning: false,
              field_type: "dropdown",
              numbers_only: false,
            },
            {
              code: "PQ17-2",
              title: "State the name, address, and telephone number",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ18",
          icon_class: "tobaco",
          title: "Alcohol, tobacco and narcotics",
          status: false,
        },
        sub_question: [
          {
            code: "PQ18-SQ01",
            icon_class: "tobaco",
            title: "Do you consume Alcohol?",
            status: false,
            field_data: [
              {
                code: "PQ18-SQ01-1",
                title: "How often do you consume alchohol?",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
              },
              {
                code: "PQ18-SQ01-2",
                title: "How many units of others do you consume per week?",
                value: "",
                warning: false,
                field_type: "textField",
                numbers_only: true,
                column: 6,
              },
            ],
          },
          {
            code: "PQ18-SQ02",
            icon_class: "tobaco",
            title: "Do you tobacco products?",
            status: false,
            field_data: [
              {
                code: "PQ18-SQ02-1",
                title: "Type",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
              },
              {
                code: "PQ18-SQ02-2",
                title: "How many sticks?",
                value: "",
                warning: false,
                field_type: "textField",
                numbers_only: true,
              },
            ],
          },
          {
            code: "PQ18-SQ03",
            icon_class: "tobaco",
            title:
              "Are you currently consuming or have you ever consumed narcotics or any such other substance whether prescribed or not?",
            status: false,
          },
        ],
      },
      {
        main_question: {
          code: "PQ19",
          icon_class: "tobaco",
          title: "Family history",
          status: false,
        },
        sub_question: [
          {
            code: "PQ19-SQ01",
            icon_class: "tobaco",
            title:
              "Are any of your family members suffering from / have suffered from / have died of",
            description:
              "Heart disease?, High blood pressure?, Stroke?, Diabetes?, Kidney disease?, Cancer?, HIV/AIDS?",
            status: false,
            field_data: [
              {
                code: "PQ19-SQ01-1",
                title: "Relation to life to be assured",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
              },
              {
                code: "PQ19-SQ02-1",
                title: "Disease",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
              },
              {
                code: "PQ19-SQ03-1",
                title: "Age at diagnosis",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
              },
              {
                code: "PQ19-SQ04-1",
                title: "Alive/ Deceased",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
              },
              {
                code: "PQ19-SQ05-1",
                title: "current age/ age when died",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
              },
            ],
          },
        ],
      },
      {
        main_question: {
          code: "PQ20",
          icon_class: "tobaco",
          title: "Are you pregnant?",
          status: false,
          field_data: [
            {
              code: "PQ20-1",
              title: "How many weeks?",
              value: "",
              warning: false,
              field_type: "dropdown",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ21",
          icon_class: "tobaco",
          title:
            "Do you have a history of past Abortion, Miscarriage, Caesarian section or complications during pregnancy? Or have you given birth to a child with any congenital disorder like Down syndrome?",
          status: false,
          field_data: [
            {
              code: "PQ21-1",
              title: "Please give details",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ22",
          icon_class: "tobaco",
          title: "Have you ever had any disease of uterus, cervix, or ovaries?",
          status: false,
          field_data: [
            {
              code: "PQ22-1",
              title: "Please give details",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ23",
          icon_class: "tobaco",
          title: "Have you ever undergone hysterectomy?",
          status: false,
          field_data: [
            {
              code: "PQ23-1",
              title: "Please give details",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
    ],
    FormdataTermMedicalQuestionDetails: {
      designation: { value: "", warning: false },
      business_name: { value: "", warning: false },
      occupation_involve_status: true,
      occupation_involve_value: "",
      gross_annual_income: { value: "", warning: false },
      nature_of_work: { value: "", warning: false },
      industry_type: { value: "", warning: false },
      workplace_city: { value: "", warning: false },
      workplace_address: { value: "", warning: false },
      identification_mark: { value: "", warning: false },
    },
  },
  TermICICIMedicalQuestion: {
    previous_policy: {
      main_question_status: false,
      details: [
        {
          base_sum_assured: { value: "", warning: false },
          company_name: { value: "", warning: false },
        },
      ],
      sub_question_one: false,
      sub_question_two: false,
      sub_question_one_remarks: { value: "", warning: false },
      sub_question_two_remarks: { value: "", warning: false },
    },
    height_ft: { value: "", warning: false },
    height_inches: { value: "", warning: false },
    height_cm: { value: "", warning: false },
    weight_kg: { value: "", warning: false },
    repository_type: { value: "", warning: false },
    question: [
      {
        main_question: {
          code: "PQ03",
          icon_class: "tobaco",
          title: "Do you have an Electronic Insurance Account?",
          status: false,
          field_data: [
            {
              code: "PQ03-1",
              title: "Account Number",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ01",
          icon_class: "tobaco",
          title:
            "Are you engaged in any of the mentioned industries(Export, Jewellery, Real Estate, Scrap Dealing, Shipping, Stock Broking & Agriculture)",
          status: false,
          field_data: [
            {
              code: "PQ01-1",
              title: "Industry Type",
              value: "",
              warning: false,
              field_type: "dropdown",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ02",
          icon_class: "tobaco",
          title: "Are you a Politically Exposed Person?",
          status: false,
        },
      },

      {
        main_question: {
          code: "PQ06",
          icon_class: "tobaco",
          title: "I/we are a tax resident of ONLY India",
          status: true,
        },
      },
      {
        main_question: {
          code: "PQ07",
          icon_class: "tobaco",
          title: "My birth country is India",
          status: true,
        },
      },
      {
        main_question: {
          code: "PQ08",
          icon_class: "tobaco",
          title:
            "Have you ever been or currently being investigated, charge sheeted, prosecuted or convicted or acquittal or having pending charges in respect of any criminal/civil offences in any court of law in India or abroad?",
          status: false,
          field_data: [
            {
              code: "PQ08-1",
              title: "Investigation Details",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "PQ09",
          icon_class: "tobaco",
          title: "Have you travelled abroad in last 1 year?",
          status: false,
        },
      },
      {
        main_question: {
          code: "HQ05",
          icon_class: "tobaco",
          title: "Do you consume or have ever consumed tobacco?",
          status: false,
          field_data: [
            {
              code: "HQ05-1",
              title: "Tobacco consumed as",
              value: "",
              warning: false,
              field_type: "dropdown",
              numbers_only: false,
            },
            {
              code: "HQ05-2",
              title: "Quantity per day",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: true,
            },
            {
              code: "HQ05-3",
              title: "Since How many years",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: true,
            },
          ],
        },
      },
      {
        main_question: {
          code: "HQ06",
          icon_class: "alcohol",
          title: "Do you consume or have ever consumed Alcohol?",
          status: false,
          field_data: [
            {
              code: "HQ06-1",
              title: "Alcohol consumed as",
              value: "",
              warning: false,
              field_type: "dropdown",
              numbers_only: false,
            },
            {
              code: "HQ06-2",
              title: "Quantity per day",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: true,
            },
            {
              code: "HQ06-3",
              title: "Since How many years",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: true,
            },
          ],
        },
      },
      {
        main_question: {
          code: "HQ07",
          icon_class: "intoxication",
          title: "Do you consume or have ever consumed Narcotics?",
          status: false,
        },
      },
      {
        main_question: {
          code: "HQ09",
          icon_class: "hazardousactivity",
          title:
            "Is your occupation associated with any specific hazard or do you take part in activities or have hobbies that could be dangerous in any way ? (eg - occupation - Chemical factory, mines, explosives, radiation, corrosive chemicals j - aviation other than as a fare paying passenger, diving, mountaineering, any form of racing, etc )",
          status: false,
          field_data: [
            {
              code: "HQ09-1",
              title: "Remarks",
              value: "",
              warning: false,
              column: 12,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "HQ125",
          icon_class: "army",
          title:
            "Are you employed in the armed, para military or police forces? (If yes, please provide Rank, Department/Division, Date of last medical & category after medical exam).",
          status: false,
          field_data: [
            {
              code: "HQ125-1",
              title: "Remarks",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
              column: 12,
            },
          ],
        },
      },
      {
        main_question: {
          code: "HQ144",
          icon_class: "healthcheckup",
          title:
            "Have you lost weight of 10 kgs or more in the last six months?",
          status: false,
          field_data: [
            {
              code: "HQ144-1",
              title: "Remarks",
              value: "",
              warning: false,
              column: 12,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "HQ165",
          icon_class: "heartdisease",
          title:
            "Family details of the life assured (include parents/sibling) Are any of your family members suffering from /have suffered from/have died of heart disease, Diabetes Mellitus, cancer or any other hereditary/familial disorder, before 55 years of age. If yes please provide details below.",
          status: false,
          field_data: [
            {
              code: "HQ165-1",
              title: "Remarks",
              value: "",
              warning: false,
              column: 12,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "HQ166",
          icon_class: "healthcheckups",
          title:
            "Have you undergone or been advised to undergo any tests/investigations or any surgery or hospitalized for observation or treatment in the past?",
          status: false,
          field_data: [
            {
              code: "HQ166-1",
              title: "Remarks",
              value: "",
              warning: false,
              column: 12,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "HQ167",
          icon_class: "medicalhistory",
          title: `Have you ever suffered or being diagnosed with or been treated for any of the following?`,
          status: false,
          field_data: [
            {
              code: "HQ167-1",
              title: "Remarks",
              value: "",
              warning: false,
              column: 12,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
        sub_question: [
          {
            code: "HQ167-SQ1",
            icon_class: "medicalhistory",
            title: `Hypertension/ High BP/ high cholesterol`,
            status: false,
          },
          {
            code: "HQ167-SQ2",
            icon_class: "medicalhistory",
            title: `Chest Pain/ Heart Attack/ any other heart disease or problem`,
            status: false,
          },
          {
            code: "HQ167-SQ3",
            icon_class: "medicalhistory",
            title: `Undergone angioplasty, bypass surgery, heart surgery`,
            status: false,
          },
          {
            code: "HQ167-SQ4",
            icon_class: "medicalhistory",
            title: `Diabetes/ High Blood Sugar/ Sugar in Urine`,
            status: false,
          },
          {
            code: "HQ167-SQ5",
            icon_class: "medicalhistory",
            title: `Asthma, Tuberculosis or any other respiratory disorder`,
            status: false,
          },
          {
            code: "HQ167-SQ6",
            icon_class: "medicalhistory",
            title: `Nervous disorders/ stroke/ paralysis/ epilepsy`,
            status: false,
          },
          {
            code: "HQ167-SQ7",
            icon_class: "medicalhistory",
            title: `Any GastroIntestinal disorders like Pancreatitis, Colitis etc.`,
            status: false,
          },
          {
            code: "HQ167-SQ8",
            icon_class: "medicalhistory",
            title: `Liver disorders/ Jaundice/ Hepatitis B or C`,
            status: false,
          },
          {
            code: "HQ167-SQ9",
            icon_class: "medicalhistory",
            title: `Genitourinary disorders related to kidney, prostate, urinary system`,
            status: false,
          },
          {
            code: "HQ167-S10",
            icon_class: "medicalhistory",
            title: `Cancer, Tumor, Growth or Cyst of any Kind`,
            status: false,
          },
          {
            code: "HQ167-S11",
            icon_class: "medicalhistory",
            title: `HIV infection AIDS or positive test for HIV`,
            status: false,
          },
          {
            code: "HQ167-SQ12",
            icon_class: "medicalhistory",
            title: `Any blood disorders like Anaemeia, Thalassemia etc`,
            status: false,
          },
          {
            code: "HQ167-SQ13",
            icon_class: "medicalhistory",
            title: `Psychiatric or mental disorders`,
            status: false,
          },
          {
            code: "HQ167-SQ14",
            icon_class: "medicalhistory",
            title: `Any other disorder not mentioned above`,
            status: false,
            field_data: [
              {
                code: "HQ167-SQ14-1",
                title: "Remarks ",
                value: "",
                warning: false,
                column: 6,
                field_type: "textField",
                numbers_only: false,
              },
            ],
          },
          {
            code: "HQ188",
            icon_class: "insurancepolicy",
            title: "Would you like to fill the Health Declaration Form?",
            status: false,
            field_data: [
              {
                code: "HQ188-1",
                title: "What is the name of the medical condition?",
                value: "",
                warning: false,
                column: 6,
                field_type: "textField",
                numbers_only: false,
              },
              {
                code: "HQ188-2",
                title: "What was the date of diagnosis?",
                value: "",
                warning: false,
                column: 6,
                field_type: "datePicker",
                numbers_only: false,
              },
              {
                code: "HQ188-3",
                title: "How long did the treatment go on for?",
                value: "",
                warning: false,
                column: 6,
                field_type: "textField",
                numbers_only: false,
              },
              {
                code: "HQ188-4",
                title: "What is the current state of the medical condition?",
                value: "",
                warning: false,
                column: 6,
                field_type: "textField",
                numbers_only: false,
              },
              {
                code: "HQ188-5",
                title: "Please provide details of the treatment",
                value: "",
                warning: false,
                column: 6,
                field_type: "textField",
                numbers_only: false,
              },
              {
                code: "HQ188-6",
                title: "What tests have you undergone for treatment?",
                value: "",
                warning: false,
                column: 6,
                field_type: "textField",
                numbers_only: false,
              },
              {
                code: "HQ188-7",
                title: "Any other details you want to provide",
                value: "",
                warning: false,
                column: 6,
                field_type: "textField",
                numbers_only: false,
              },
            ],
          },
        ],
      },
      {
        main_question: {
          code: "HQ168",
          icon_class: "uterus",
          title:
            "Have you ever suffered/are suffering from or have undergone investigations or treatment for any gynecological complications such as disorders of cervix, uterus, ovaries, breast, breast lump, cyst etc.",
          status: false,
          field_data: [
            {
              code: "HQ168-1",
              title: "Remarks",
              value: "",
              warning: false,
              column: 12,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "HQ301",
          icon_class: "handicaped",
          title:
            "Do you have any congenital defect/abnormality/physical deformity/handicap?",
          status: false,
          field_data: [
            {
              code: "HQ301-1",
              title: "Remarks",
              value: "",
              warning: false,
              column: 12,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "HQ24",
          icon_class: "slippeddisc",
          title:
            "Did you have any ailment/injury/accident requiring treatment/medication for more than a week or have you availed leave for more than 5 days on medical grounds in the last two years?",
          status: false,
          field_data: [
            {
              code: "HQ24-1",
              title: "Remarks",
              value: "",
              warning: false,
              column: 12,
              field_type: "textField",
              numbers_only: false,
            },
          ],
        },
      },
      {
        main_question: {
          code: "HQ61",
          icon_class: "pregnancy",
          title: "Are you pregnant at present?",
          status: false,
          field_data: [
            {
              code: "HQ61-1",
              title: "Confirm the Duration (in weeks)",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: true,
            },
          ],
        },
      },
      {
        main_question: {
          code: "CHQ14",
          icon_class: "testpolitive",
          title: "Have you ever been tested positive for COVID-19?",
          status: false,
        },
        sub_question: [
          {
            code: "CHQ14-SQ1",
            icon_class: "hopital",
            title: "Are you fully recovered?",
            status: false,
            field_data: [
              {
                code: "CHQ14-SQ1-1",
                title: "Date of diagnosis",
                value: "",
                warning: false,
                field_type: "datePicker",
                numbers_only: false,
              },
              {
                code: "CHQ14-SQ1-2",
                title: "Date of recovery",
                value: "",
                warning: false,
                field_type: "datePicker",
                numbers_only: false,
              },
            ],
          },
          {
            code: "CHQ14-SQ2",
            icon_class: "treatment",
            title: "Were you hospitalized for COVID-19 treatment?",
            status: false,
          },
        ],
      },
      {
        main_question: {
          code: "CHQ58",
          icon_class: "testpolitive",
          title:
            "In the last 3 months have you been tested positive for COVID-19?",
          status: false,
        },
      },

      {
        main_question: {
          code: "CHQ57",
          icon_class: "preexisting",
          title:
            "In the last 3 months have you been self-isolated with symptoms on medical advice?",
          status: false,
        },
      },
      {
        main_question: {
          code: "CHQ19",
          icon_class: "preexisting",
          title:
            "In the last 1 months have you or any of your family member been self-isolated with symptoms on medical advice? (excluding mandatory government orders to remain at home)",
          status: false,
        },
      },
      {
        main_question: {
          code: "CHQ59",
          icon_class: "cough",
          title:
            "In the last 1 month did you have persistent cough, fever, raised temperature or been in contact with an individual suspected or confirmed to have COVID-19?",
          status: false,
        },
      },
      {
        main_question: {
          code: "CHQ20",
          icon_class: "cough",
          title:
            "In the last 1 month did you have persistent cough, fever, sore throat, nausea, vomiting, diarrhea, difficulty in breathing, loss of smell and taste any other symptoms of coronavirus (COVID-19) and advised to do a Covid test or you/your family member have been in contact with an individual suspected or confirmed to have COVID-19?",
          status: false,
        },
      },
      {
        main_question: {
          code: "CHQ60",
          icon_class: "doctor",
          title:
            "Do you work in an occupation, where you have a higher risk to get in close contact with COVID-19 patients or with coronavirus contaminated material?",
          status: false,
        },
      },
      {
        main_question: {
          code: "CHQ21",
          icon_class: "doctor",
          title:
            "Do you work in an occupation like health care worker/Corona warrior Include (General Practitioners, Doctors, Hospital Doctors, Surgeons, Therapists, Nurses, Pathologist, paramedics, Pharmacist, Ward helpers, Individuals working in Hospitals/ Clinics having novel coronavirus (SARS-CoV-2/COVID-19) Ward?) where you have a higher risk to get in close contact with COVID-19 patients or with coronavirus contaminated material?",
          status: false,
        },
      },
      {
        main_question: {
          code: "CHQ30",
          icon_class: "insulin",
          title: "Have you been vaccinated for COVID-19?",
          status: false,
          field_data: [
            {
              code: "CHQ30-1",
              title: "Date of First dose",
              value: "",
              warning: false,
              field_type: "datePicker",
              numbers_only: false,
            },
            {
              code: "CHQ30-2",
              title: "Name of vaccine",
              value: "",
              warning: false,
              field_type: "dropdown",
              numbers_only: false,
            },
          ],
        },
        sub_question: [
          {
            code: "CHQ33",
            icon_class: "insulin",
            title: "Have you been vaccinated with Second dose?",
            status: false,
            field_data: [
              {
                code: "CHQ33-1",
                title: "Date of Second dose",
                value: "",
                warning: false,
                field_type: "datePicker",
                numbers_only: false,
              },
              {
                code: "CHQ33-2",
                title: "Name of vaccine",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
              },
            ],
          },
          {
            code: "CHQ36",
            icon_class: "headache",
            title:
              "Have you experienced any adverse reaction post vaccination?",
            status: false,
            field_data: [
              {
                code: "CHQ36-1",
                title:
                  "Share details including treatment taken for the same and date of complete recovery",
                value: "",
                warning: false,
                field_type: "textField",
                numbers_only: false,
                column: 12,
              },
            ],
          },
        ],
      },
      {
        main_question: {
          code: "CHQ38",
          icon_class: "abroad",
          title: "Are your currently residing outside of India?",
          status: false,
          field_data: [
            {
              code: "CHQ38-1",
              title: "Name of country",
              value: "",
              warning: false,
              field_type: "dropdown",
              numbers_only: false,
            },
            {
              code: "CHQ38-2",
              title: "City",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "CHQ38-3",
              title: "Date of travel",
              value: "",
              warning: false,
              field_type: "datePicker",
              numbers_only: false,
            },
            {
              code: "CHQ38-4",
              title: "Intended duration (in Months)",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: true,
            },
          ],
        },
      },
      {
        main_question: {
          code: "CHQ43",
          icon_class: "abroad",
          title: "Have you travelled abroad in past 14 days?",
          status: false,
          field_data: [
            {
              code: "CHQ43-1",
              title: "Name of country",
              value: "",
              warning: false,
              field_type: "dropdown",
              numbers_only: false,
            },
            {
              code: "CHQ43-2",
              title: "City",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "CHQ43-3",
              title: "Date Arrived",
              value: "",
              warning: false,
              field_type: "datePicker",
              numbers_only: false,
            },
            {
              code: "CHQ43-4",
              title: "Date Departed",
              value: "",
              warning: false,
              field_type: "datePicker",
              numbers_only: false,
            },
          ],
        },
        sub_question: [
          {
            code: "CHQ43-SQ1",
            icon_class: "abroad",
            title: "2nd Country Details",
            status: false,
            field_data: [
              {
                code: "CHQ43-SQ1-1",
                title: "Name of country",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
              },
              {
                code: "CHQ43-SQ1-2",
                title: "City",
                value: "",
                warning: false,
                field_type: "textField",
                numbers_only: false,
              },
              {
                code: "CHQ43-SQ1-3",
                title: "Date Arrived",
                value: "",
                warning: false,
                field_type: "datePicker",
                numbers_only: false,
              },
              {
                code: "CHQ43-SQ1-4",
                title: "Date Departed",
                value: "",
                warning: false,
                field_type: "datePicker",
                numbers_only: false,
              },
            ],
          },
          {
            code: "CHQ43-SQ2",
            icon_class: "abroad",
            title: "3rd Country Details",
            status: false,
            field_data: [
              {
                code: "CHQ43-SQ2-1",
                title: "Name of country",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
              },
              {
                code: "CHQ43-SQ2-2",
                title: "City",
                value: "",
                warning: false,
                field_type: "textField",
                numbers_only: false,
              },
              {
                code: "CHQ43-SQ2-3",
                title: "Date Arrived",
                value: "",
                warning: false,
                field_type: "datePicker",
                numbers_only: false,
              },
              {
                code: "CHQ43-SQ2-4",
                title: "Date Departed",
                value: "",
                warning: false,
                field_type: "datePicker",
                numbers_only: false,
              },
            ],
          },
        ],
      },
      {
        main_question: {
          code: "CHQ56",
          icon_class: "abroad",
          title: "Do you intend to travel abroad in next 3 month?",
          status: false,
          field_data: [
            {
              code: "CHQ56-1",
              title: "Name of country",
              value: "",
              warning: false,
              field_type: "dropdown",
              numbers_only: false,
            },
            {
              code: "CHQ56-2",
              title: "City",
              value: "",
              warning: false,
              field_type: "textField",
              numbers_only: false,
            },
            {
              code: "CHQ56-3",
              title: "Date Arrived",
              value: "",
              warning: false,
              field_type: "datePicker",
              numbers_only: false,
            },
            {
              code: "CHQ56-4",
              title: "Date Departed",
              value: "",
              warning: false,
              field_type: "datePicker",
              numbers_only: false,
            },
          ],
        },
        sub_question: [
          {
            code: "CHQ56-SQ1",
            icon_class: "abroad",
            title: "2nd Country Details",
            status: false,
            field_data: [
              {
                code: "CHQ56-SQ1-1",
                title: "Name of country",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
              },
              {
                code: "CHQ56-SQ1-2",
                title: "City",
                value: "",
                warning: false,
                field_type: "textField",
                numbers_only: false,
              },
              {
                code: "CHQ56-SQ1-3",
                title: "Date Arrived",
                value: "",
                warning: false,
                field_type: "datePicker",
                numbers_only: false,
              },
              {
                code: "CHQ56-SQ1-4",
                title: "Date Departed",
                value: "",
                warning: false,
                field_type: "datePicker",
                numbers_only: false,
              },
            ],
          },
          {
            code: "CHQ56-SQ2",
            icon_class: "abroad",
            title: "3rd Country Details",
            status: false,
            field_data: [
              {
                code: "CHQ56-SQ2-1",
                title: "Name of country",
                value: "",
                warning: false,
                field_type: "dropdown",
                numbers_only: false,
              },
              {
                code: "CHQ56-SQ2-2",
                title: "City",
                value: "",
                warning: false,
                field_type: "textField",
                numbers_only: false,
              },
              {
                code: "CHQ56-SQ2-3",
                title: "Date Arrived",
                value: "",
                warning: false,
                field_type: "datePicker",
                numbers_only: false,
              },
              {
                code: "CHQ56-SQ2-4",
                title: "Date Departed",
                value: "",
                warning: false,
                field_type: "datePicker",
                numbers_only: false,
              },
            ],
          },
        ],
      },
    ],
  },
};

const incomeData = [];
for (let i = 2; i <= 100; i++) {
  incomeData.push({
    value: `${i * 100000}`,
    label: i === 100 ? "1 Crore" : i + " Lakhs",
  });
}

intitialState.dropdownData.annualIncomeData = incomeData;

const ageOfDiagnosisData = [];
for (let i = 1; i <= 65; i++) {
  ageOfDiagnosisData.push({
    label: `${i}`,
    value: i === 1 ? "1 Year" : i + " Years",
  });
}

intitialState.dropdownData.AGE_AT_DIAGNOSIS = ageOfDiagnosisData;
intitialState.dropdownData.HDFC_CURRENT_AGE = ageOfDiagnosisData;

const PREGNANCY_WEEKS_DATA = [];
for (let i = 1; i <= 36; i++) {
  PREGNANCY_WEEKS_DATA.push({
    label: `${i}`,
    value: `${i}`,
  });
}

intitialState.dropdownData.PREGNANCY_WEEKS = PREGNANCY_WEEKS_DATA;

export const TermFullJourneySlice = createSlice({
  name: "TERM",
  initialState: intitialState,
  reducers: {
    ...TERM_REDUCERS,
    ...TERM_ADDRESS_REDUCERS,
    ...TERM_CKYC_REDUCER,
    ...TERM_DROPDOWN_REDUCER,
    ...TERM_HDFC_CKYC_REDUCER,
    ...TERM_HDFC_MEDICAL_QUESTION_REDUCERS,
    ...TERM_HDFC_RIDERS_BENEFITS_REDUCERS,
    ...TERM_HDFC_UPLOAD_DOC_REDUCER,
    ...TERM_ICICI_MEDICAL_QUESTION_REDUCERS,
    ...TERM_INSURED_REDUCERS,
    ...TERM_NOMINEE_DETAILS_REDUCERS,
    ...TERM_NRI_DETAILS,
    ...TERM_OTP_DETAILS_REDUCERS,
    ...TERM_POLICY_DETAILS_REDUCERS,
    ...TERM_PROPOSER_PAGE_REDUCERS,
    ...TERM_PROPOSER_DETAILS_REDUCERS,
  },
});
