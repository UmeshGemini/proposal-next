export type TNIVABUPAAddons = {
  Hospital_Cash: boolean;
  Acute_Care_Opted: boolean;
  Safeguard_Opted: boolean;
  Safeguard_Plus_Opted: boolean;
  Personal_Accident_Cover: boolean;
  Disease_Management: boolean;
  best_consult: boolean;
  best_care: boolean;
  best_care_value: string;
  platinum_adult_one: boolean;
  gold_adult_one: boolean;
  platinum_adult_two: boolean;
  gold_adult_two: boolean;
};

export type TNIVABUPATiereNetworkListAddons = {
  description: string;
  discount: number;
  tiered_network_list_id: string;
  url: string;
};
