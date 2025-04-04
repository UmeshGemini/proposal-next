export type TCarAddonStatus = {
  rsa: { label: "24x7 Roadside Assistance"; value: boolean };
  pa_owner_cover: { label: "Personal Accident Cover"; value: boolean };
  depreciation_cover: { label: "Zero Depreciation"; value: boolean };
  personalBelonging: {
    label: "Personal Belonging";
    value: boolean;
  };
  driver_cover: { label: "Driver Cover"; value: boolean };
  invoice_cover: { label: "Invoice Cover"; value: boolean };
  engine_cover: { label: "Engine Cover"; value: boolean };
  ncb_cover: { label: "NCB Cover"; value: boolean };
  consumable_cover: { label: "Consumable Cover"; value: boolean };
  key_replacement: { label: "Key Replacement"; value: boolean };
  tyre_cover: { label: "Tyre Cover"; value: boolean };
  cng_kit: { label: "CNG Kit (₹)"; value: boolean };
  passenger_cover: { label: "Passenger Cover (₹)"; value: boolean };
  electrical: { label: "Electrical (₹)"; value: boolean };
  non_electrical: { label: "Non-Electrical (₹)"; value: boolean };
};
