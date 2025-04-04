export type TICICAddon = {
  Critical_Illness: boolean;
  Maternity: boolean;
  New_Born: boolean;
  Vaccination: boolean;
  Domestic_Air_Ambulance: boolean;
  personal_accident: boolean;
  SI_Protector: boolean;
  Claim_Protector: boolean;
  Compassionate_Visit: boolean;
  Nursing_at_Home: boolean;
  BeFit_A: boolean;
  BeFit_B: boolean;
  BeFit_C: boolean;
  BeFit_D: boolean;
  BeFit_E: boolean;
  BeFit_F: boolean;
  BeFit_G: boolean;
  BeFit_H: boolean;
};

export type TGOLDEN_SHIELDICICIAddon = {
  Claim_protector: boolean;
  Modification_base_co_payment: boolean;
  Voluntary_deduction: boolean;
  Care_management_program: boolean;
  Care_management_plus_program: boolean;
  VoluntaryCopaymentPercentage: number;
};

export type TELEVATEICICIAddon = {
  pageStatus: false;
  addonLabels: {
    Critical_Illness: false;
    Maternity: false;
    New_Born: false;
    Vaccination: false;
    Anuual_Health_Checkup: false;
    Domestic_Air_Ambulance: false;
    Dependent_Accomodation_benefit: false;
    Convalescence_Benefit: false;
    Durable_Medical_Equipment_Cover: false;
    Worldwide_Cover: false;
    Personal_Accident: false;
    // Sum_Insured_Protector: false,
    SI_Protector: false;
    Claim_Protector: false;
    Infinite_Care: false;
    Compassionate_Visit_HP: false;
    Nursing_at_Home_HP: false;

    BeFit_A_HP: false;
    BeFit_B_HP: false;
    BeFit_C_HP: false;
    BeFit_D_HP: false;
    BeFit_E_HP: false;
    BeFit_F_HP: false;
    BeFit_G_HP: false;
    BeFit_H_HP: false;
    Room_Upgrade: false;
    Waiting_Period: false;
    PED: false;
    Jump_Start: false;
    Room_Modifier: false;
    Maternity_waiting: false;
    Specific_Disease: false;
  };
  memberDetails: [];
};
