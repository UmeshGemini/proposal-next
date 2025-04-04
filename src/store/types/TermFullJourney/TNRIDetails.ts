import { TFieldData } from "../Common/TFieldData";

interface nri_details {
  country_of_nationality: TFieldData;
  country_of_residence: TFieldData;
  passport_number: TFieldData;
  purpose_of_stay_abroad: TFieldData;
  employer_university_details: TFieldData;
  date_of_arriving_india: TFieldData;
  date_of_leaving_india: TFieldData;
  duration_of_stay_abroad_month: TFieldData;
  duration_of_stay_abroad_year: TFieldData;
  intended_duration_of_stay_month: TFieldData;
  intended_duration_of_stay_year: TFieldData;
}

interface nri_travel_details {
  status: boolean;
  name_of_country: TFieldData;
  name_of_city: TFieldData;
  arrival_date: TFieldData;
  departure_date: TFieldData;
  visa_type: TFieldData;
  purpose_of_travel: TFieldData;
  type_residence: TFieldData;
  mode_of_travel: TFieldData;
  name_of_business: TFieldData;
  safety_precaution: TFieldData;
}

interface type_bank_account_held {
  status: "NRE" | "NRO";
  account_number: TFieldData;
}

interface phone_email {
  country_code: TFieldData;
  mobile_number: TFieldData;
  email: TFieldData;
}

interface aadhar_details {
  option: TFieldData;
  doc_no: TFieldData;
  language: TFieldData;
}

export type TNRIDetails = {
  resident_only_india: boolean;
  tin_pan_issuing_country: TFieldData;
  tin_pan_other_country: TFieldData;
  tin_pan_issuing_country_2: TFieldData;
  tin_pan_other_country_2: TFieldData;
  tin_pan_issuing_country_3: TFieldData;
  tin_pan_other_country_3: TFieldData;
  birth_country_india: boolean;
  country_of_birth: TFieldData;
  place_of_birth: TFieldData;
  FATCA_CRS_STATUS: boolean;
  nationality_status: "Indian" | "Non indian";
  resident_status: "Resident Indian" | "NRI" | "PIO" | "Foreign National";
  nri_details: nri_details;
  nri_travel_details: nri_travel_details;
  type_bank_account_held: type_bank_account_held;
  phone_email: phone_email;
  aadhar_details: aadhar_details;
  disclaimer_two: boolean;
  disclaimer_three: boolean;
};
