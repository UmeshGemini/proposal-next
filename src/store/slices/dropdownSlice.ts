import { createSlice } from "@reduxjs/toolkit";
import { TDropdownSlice } from "../types/TDropdownSlice";

const initialState: TDropdownSlice = {
  MAILING_AREA_TOWN: [],
  MAILING_CITY: [],
  PERMANENT_AREA_TOWN: [],
  PERMANENT_CITY: [],
  CUSTOMER_TYPE: [
    { label: "Individual", value: "Individual" },
    { label: "Organization", value: "Organization" },
  ],
  POA: [],
  POI: [],
  POV: [],
  CITY: [],
  AREA_TOWN: [],
  NIVA_BUPA_OCCUPATION: [],
  OCCUPATION: [
    { label: "Professional", value: "1" },
    { label: "Self Employed", value: "2" },
    { label: "Retired", value: "3" },
    { label: "House-wife", value: "4" },
    { label: "Student", value: "5" },
  ],
  EDUCATION: [
    { label: "Matric", value: "Matric" },
    { label: "Non-Matric", value: "Non-Matric" },
    { label: "Graduate", value: "Graduate" },
    { label: "Post-Graduate", value: "Post-Graduate" },
    { label: "Professional Course", value: "Professional Course" },
  ],
  INCOME_SOURCE: [
    { label: "Salary", value: "1" },
    { label: "Business", value: "2" },
    { label: "Sale of Assets", value: "3" },
    { label: "Inheritence", value: "4" },
  ],
  FAMILY_RELATIONSHIP: [
    { label: "Father", value: "1" },
    { label: "Spouse", value: "2" },
    { label: "Mother", value: "3" },
  ],
  GENDER: [
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
  ],
  AGE: [],
  HEIGHT_FEET: [
    { label: "1 Feet", value: "1" },
    { label: "2 Feet", value: "2" },
    { label: "3 Feet", value: "3" },
    { label: "4 Feet", value: "4" },
    { label: "5 Feet", value: "5" },
    { label: "6 Feet", value: "6" },
    { label: "7 Feet", value: "7" },
  ],
  HEIGHT_INCH: [
    { label: "0 Inch", value: "0" },
    { label: "1 Inch", value: "1" },
    { label: "2 Inch", value: "2" },
    { label: "3 Inch", value: "3" },
    { label: "4 Inch", value: "4" },
    { label: "5 Inch", value: "5" },
    { label: "6 Inch", value: "6" },
    { label: "7 Inch", value: "7" },
    { label: "8 Inch", value: "8" },
    { label: "9 Inch", value: "9" },
    { label: "10 Inch", value: "10" },
    { label: "11 Inch", value: "11" },
  ],
  ANNUAL_INCOME: [],
  ANNUAL_INCOME_NIVA_BUPA: [],
};

const ageData = [];
for (let i = 18; i <= 100; i++) {
  ageData.push({
    label: `${i}`,
    value: `${i} Years`,
  });
}

initialState.AGE = ageData;

const annual_income = [];
for (let incomeValue = 100000; incomeValue <= 1000000; incomeValue += 100000) {
  let label;
  if (incomeValue === 10000000) {
    label = "1 Crore";
  } else {
    label = `${incomeValue / 100000} Lakh`;
  }
  annual_income.push({ label: label, value: `${incomeValue}` });
}

initialState.ANNUAL_INCOME = annual_income;

const annual_income_niva_bupa = [];
for (let incomeValue = 100000; incomeValue <= 10000000; incomeValue += 100000) {
  let label;
  if (incomeValue === 10000000) {
    label = "1 Crore";
  } else {
    label = `${incomeValue / 100000} Lakh`;
  }
  annual_income_niva_bupa.push({ label: label, value: `${incomeValue}` });
}

initialState.ANNUAL_INCOME_NIVA_BUPA = annual_income_niva_bupa;

export const DropdownSlice = createSlice({
  name: "DropdownSlice",
  initialState,
  reducers: COMMON_DROPDOWN_REDUCERS,
});

export default DropdownSlice.reducer;
