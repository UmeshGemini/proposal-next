import { TDropdown } from "@/store/types/TermFullJourney/TDropdown";
import { TDropdownData } from "@/store/types/TermFullJourney/TDropdownData";
import { TTermFullJourneySlice } from "@/store/types/TTermFullJourneySlice";
import { PayloadAction } from "@reduxjs/toolkit";

type dropdownDataType = keyof TDropdownData;
const SET_DROPDOWN_MASTER_DATA_BY_NAME = (
  state: TTermFullJourneySlice,
  action: PayloadAction<{
    key: dropdownDataType;
    value: TDropdown[];
  }>
) => {
  const { key, value } = action.payload;

  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, [key]: value },
  };
  return data;
};
const UPDATE_DROPDOWN_MASTER_DATA = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdownData>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, ...action.payload },
  };

  return data;
};
const SET_MODE_OF_TRAVEL = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, modeTravel: action.payload },
  };

  return data;
};
const SET_TYPE_OF_RESIDENCE = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, typeResidence: action.payload },
  };

  return data;
};
const SET_PURPOSE_OF_TRAVEL = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, purposeTravel: action.payload },
  };

  return data;
};
const setICICIInsuranceCompanyLife = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, insuranceComp: action.payload },
  };

  return data;
};
const SET_IDENTITY_PROOF_MASTER = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: {
      ...state.dropdownData,
      IDENTITY_PROOF_MASTER: action.payload,
    },
  };

  return data;
};
const setICICIIndustryType = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, indsType: action.payload },
  };

  return data;
};
const setObjBuyingPolicy = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, buyingPolicy: action.payload },
  };

  return data;
};
const setICICIOrgType = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, orgType: action.payload },
  };

  return data;
};
const setGenderData = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, genderData: action.payload },
  };

  return data;
};
const setMaritalStatusData = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: {
      ...state.dropdownData,
      maritalStatusData: action.payload,
    },
  };

  return data;
};
const setNomineeRelationshipData = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: {
      ...state.dropdownData,
      nomineeRelationshipData: action.payload,
    },
  };

  return data;
};
const setOccupationData = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, occupationData: action.payload },
  };

  return data;
};
const setMyProfession = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, myProf: action.payload },
  };

  return data;
};
const setEducationMaster = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, EDUCATION_MASTER: action.payload },
  };

  return data;
};
const setTobaccoData = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, tobacco: action.payload },
  };

  return data;
};
const setAlcoholData = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, alcohol: action.payload },
  };

  return data;
};
const setEIARepositoryTypeData = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, eia: action.payload },
  };

  return data;
};
const setHDFCCompanyBelongsData = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, COMPANY_BELONGS: action.payload },
  };

  return data;
};
const setHDFCHeightData = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, HDFC_HEIGHT: action.payload },
  };

  return data;
};
const setHDFCWeightData = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, HDFC_WEIGHT: action.payload },
  };

  return data;
};
const setHDFCHobbiesData = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, HOBBIES: action.payload },
  };

  return data;
};
const setAgeProof = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, ageProf: action.payload },
  };

  return data;
};
const setIncomeProof = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, incomeProf: action.payload },
  };

  return data;
};
const setAddressProof = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, addressProf: action.payload },
  };

  return data;
};
const setInsuranceCompany = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: {
      ...state.dropdownData,
      insurance_company: action.payload,
    },
  };

  return data;
};
const setCountryMaster = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, country: action.payload },
  };

  return data;
};
const setHDFCCountryMaster = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, HDFC_COUNTRIES: action.payload },
  };

  return data;
};
const setHDFCDiseaseMaster = (
  state: TTermFullJourneySlice,
  action: PayloadAction<TDropdown[]>
) => {
  const data: TTermFullJourneySlice = {
    ...state,
    dropdownData: { ...state.dropdownData, HDFC_DISEASE: action.payload },
  };

  return data;
};

export const TERM_DROPDOWN_REDUCER = {
  setEducationMaster,
  setGenderData,
  setMaritalStatusData,
  setNomineeRelationshipData,
  setOccupationData,
  setTobaccoData,
  setAlcoholData,
  setAgeProof,
  setInsuranceCompany,
  setCountryMaster,
  setHDFCCountryMaster,
  setHDFCCompanyBelongsData,
  setHDFCHeightData,
  setHDFCWeightData,
  setHDFCHobbiesData,
  setHDFCDiseaseMaster,
  setIncomeProof,
  setAddressProof,
  setEIARepositoryTypeData,
  SET_DROPDOWN_MASTER_DATA_BY_NAME,
  UPDATE_DROPDOWN_MASTER_DATA,
  SET_MODE_OF_TRAVEL,
  SET_TYPE_OF_RESIDENCE,
  setICICIOrgType,
  setObjBuyingPolicy,
  setICICIIndustryType,
  SET_IDENTITY_PROOF_MASTER,
  setICICIInsuranceCompanyLife,
  setMyProfession,
  SET_PURPOSE_OF_TRAVEL,
};
