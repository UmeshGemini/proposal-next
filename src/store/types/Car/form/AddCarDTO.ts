export type ADD_CAR_DTO = {
  carBusinessType: "Rollover" | "New" | "Expired";
  carMakeModel: Date | string | null;
  carFuelType: Date | string | null;
  carVariantCC: Date | string | null;
  carRegNo: Date | string | null;
  carClaimMade: "No" | "Yes";
  carPreviousInsurer: Date | string | null;
  carRtoCode: Date | string | null;
  carPExpiryDate: Date | string | null;
  carRegDate: Date | string | null;
  carPreviousNCB: "0" | "20" | "25" | "35" | "45" | "50";
  carMobile: Date | string | null;
};
