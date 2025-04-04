import { TFieldData } from "../../Common/TFieldData";

export type ADD_HEALTH_FORM_DTO = {
  healthCover: string;
  healthGender: "M" | "F";
  healthAge: string;
  healthName: string;
  healthMobile: string;
  healthPincode: string;
};
