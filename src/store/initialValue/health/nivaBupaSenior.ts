import { TDropdown } from "@/store/types/Common/TDropdown";
import { TNivaBupaMedicalQuestion } from "@/store/types/Health/HealthQuotation/TNivaBupaMedicalQuestion";

const TOBACCO_SINCE_WHEN: TDropdown[] = [
  { label: "School", value: "School" },
  { label: "10+2", value: "10+2" },
  { label: "College", value: "College" },
  {
    label: "When start working",
    value: "When start working",
  },
  { label: "Later", value: "Later" },
];

const ALCOHOL_SINCE_WHEN: TDropdown[] = [
  { label: "1 Year", value: "1" },
  { label: "2 Year", value: "2" },
  { label: "3 Year", value: "3" },
  { label: "4 Year", value: "4" },
  { label: "5 Year", value: "5" },
  { label: "6 Year", value: "6" },
  { label: "7 Year", value: "7" },
  { label: "8 Year", value: "8" },
  { label: "9 Year", value: "9" },
  { label: "10 Year", value: "10" },
];

const ALCOHOL_DAYS_A_WEEK: TDropdown[] = [
  { label: "1 Day", value: "1" },
  { label: "2 Days", value: "2" },
  { label: "3 Days", value: "3" },
  { label: "4 Days", value: "4" },
  { label: "5 Days", value: "5" },
  { label: "6 Days", value: "6" },
  { label: "7 Days", value: "7" },
];

export const NIVA_BUPA_SENIOR_INITIAL_VALUE = (): TNivaBupaMedicalQuestion => {
  return {
    MQ01: {
      main_question: {
        id: "MQ01",
        icon_class: "tobaco",
        title: "",
        description:
          "Heart disease like Heart attack, Heart failure, Ischemic heart disease or Coronary heart disease, Angina etc",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ02: {
      main_question: {
        id: "MQ02",
        icon_class: "tobaco",
        title: "",
        description: "Tumor, Cancer of any organ, Leukemia, Lymphoma, Sarcoma",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ03: {
      main_question: {
        id: "MQ03",
        icon_class: "tobaco",
        title: "",
        description: "Major organ failure (Kidney, Liver, Heart, Lungs etc",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ04: {
      main_question: {
        id: "MQ04",
        icon_class: "tobaco",
        title: "",
        description:
          "Stroke, Encephalopathy, Brain abscess, or any neurological disease",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ05: {
      main_question: {
        id: "MQ05",
        icon_class: "tobaco",
        title: "",
        description:
          "Pulmonary fibrosis, collapse of lungs or Interstitial lung disease (ILD)",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ06: {
      main_question: {
        id: "MQ06",
        icon_class: "tobaco",
        title: "",
        description:
          "Hepatitis B or C, Chronic liver disease, Crohn’s disease, Ulcerative colitis",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ07: {
      main_question: {
        id: "MQ07",
        icon_class: "tobaco",
        title: "",
        description: "Any anaemia other than iron deficiency anaemia",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ08: {
      main_question: {
        id: "MQ08",
        icon_class: "tobaco",
        title: "",
        description: "Ever been hospitalized for more than 5 days",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ09: {
      main_question: {
        id: "MQ09",
        icon_class: "tobaco",
        title: "",
        description:
          "Ever taken any medicines for more than 10 days continuously? Medication includes but not limited to inhalers, injections, oral drugs and external medical applications on body parts.",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ10: {
      main_question: {
        id: "MQ10",
        icon_class: "tobaco",
        title: "",
        description:
          "Awaiting any treatment, surgical or medical that has been advised",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ11: {
      main_question: {
        id: "MQ11",
        icon_class: "tobaco",
        title: "",
        description:
          "Under any periodic / regular follow up for any disease suffered in past, whether cured or not? Follow up means periodic consultations, investigations etc",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ12: {
      main_question: {
        id: "MQ12",
        icon_class: "tobaco",
        title: "",
        description:
          "Has any consultations with doctor(s) or advised any tests for problems currently having or had in last 30 days?",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ13: {
      main_question: {
        id: "MQ13",
        icon_class: "tobaco",
        title: "",
        description:
          "Diabetes (high blood sugar), Pre-diabetes, High or low blood pressure, Chest Pain or any heart disease or Thyroid disorder, Asthma, Bronchitis",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ14: {
      main_question: {
        id: "MQ14",
        icon_class: "tobaco",
        title: "",
        description:
          "Parents have any hereditary or genetic condition? Please mention even if any of them is a carrier state i.e. did not have the disease but was a carrier",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ15: {
      main_question: {
        id: "MQ15",
        icon_class: "tobaco",
        title: "",
        description:
          "Any calculus (stone) disorder in any organ like Gall bladder, Kidneys, Urinary bladder, Ureter etc",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ16: {
      main_question: {
        id: "MQ16",
        icon_class: "tobaco",
        title: "",
        description:
          "Tumor (Swelling)-benign or malignant, any external ulcer/growth/cyst/mass anywhere in the body?",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ17: {
      main_question: {
        id: "MQ17",
        icon_class: "tobaco",
        title: "",
        description:
          "HIV / AIDS, anaemia, thalassemia, haemophilia or any other blood related problem",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ18: {
      main_question: {
        id: "MQ18",
        icon_class: "tobaco",
        title: "",
        description: "Psychiatric/Mental illnesses or sleep disorder?",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ19: {
      main_question: {
        id: "MQ19",
        icon_class: "tobaco",
        title: "",
        description:
          "Any health condition, disease, symptoms or information pertaining to health that is not captured above. If answer to this question is Yes for anyone, provide all medical documents",
        status: false,
        member_data: {
          adult_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          adult_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_one: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_two: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_three: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
          child_four: {
            image_class: "",
            keyName: "",
            name: "",
            selection_status: false,
          },
        },
      },
    },
    MQ20: {
      main_question: {
        id: "MQ20",
        icon_class: "tobaco",
        title: "",
        description:
          "Smokes or consumes tobacco / gutkha /pan masala or alcohol If Yes, please answer the following",
        status: false,
        sub_question: {
          MQ20_SQ01: {
            icon_class: "",
            id: "MQ20_SQ01",
            status: false,
            title: "When did the applicant start smoking / consuming tobacco?",
            member_data: {
              adult_one: {
                image_class: "",
                keyName: "",
                name: "",
                selection_status: false,
                field_data: {
                  MQ20_SQ01_F01: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ01_F01",
                    title: "Since",
                    dropdown_data: TOBACCO_SINCE_WHEN,
                  },
                },
              },
              adult_two: {
                image_class: "",
                keyName: "",
                name: "",
                selection_status: false,
                field_data: {
                  MQ20_SQ01_F01: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ01_F01",
                    title: "Since",
                    dropdown_data: TOBACCO_SINCE_WHEN,
                  },
                },
              },
              child_one: {
                image_class: "",
                keyName: "",
                name: "",
                selection_status: false,
                field_data: {
                  MQ20_SQ01_F01: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ01_F01",
                    title: "Since",
                    dropdown_data: TOBACCO_SINCE_WHEN,
                  },
                },
              },
              child_two: {
                image_class: "",
                keyName: "",
                name: "",
                selection_status: false,
                field_data: {
                  MQ20_SQ01_F01: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ01_F01",
                    title: "Since",
                    dropdown_data: TOBACCO_SINCE_WHEN,
                  },
                },
              },
              child_three: {
                image_class: "",
                keyName: "",
                name: "",
                selection_status: false,
                field_data: {
                  MQ20_SQ01_F01: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ01_F01",
                    title: "Since",
                    dropdown_data: TOBACCO_SINCE_WHEN,
                  },
                },
              },
              child_four: {
                image_class: "",
                keyName: "",
                name: "",
                selection_status: false,
                field_data: {
                  MQ20_SQ01_F01: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ01_F01",
                    title: "Since",
                    dropdown_data: TOBACCO_SINCE_WHEN,
                  },
                },
              },
            },
          },
          MQ20_SQ02: {
            icon_class: "",
            id: "MQ20_SQ02",
            status: false,
            title:
              "How many years since the applicant has been consuming alcohol?",
            member_data: {
              adult_one: {
                image_class: "",
                keyName: "",
                name: "",
                selection_status: false,
                field_data: {
                  MQ20_SQ02_F01: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ02_F01",
                    title: "Since",
                    dropdown_data: ALCOHOL_SINCE_WHEN,
                  },
                  MQ20_SQ02_F02: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ02_F02",
                    title: "Days a week?",
                    dropdown_data: ALCOHOL_DAYS_A_WEEK,
                  },
                },
              },
              adult_two: {
                image_class: "",
                keyName: "",
                name: "",
                selection_status: false,
                field_data: {
                  MQ20_SQ02_F01: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ02_F01",
                    title: "Since",
                    dropdown_data: ALCOHOL_SINCE_WHEN,
                  },
                  MQ20_SQ02_F02: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ02_F02",
                    title: "Days a week?",
                    dropdown_data: ALCOHOL_DAYS_A_WEEK,
                  },
                },
              },
              child_one: {
                image_class: "",
                keyName: "",
                name: "",
                selection_status: false,
                field_data: {
                  MQ20_SQ02_F01: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ02_F01",
                    title: "Since",
                    dropdown_data: ALCOHOL_SINCE_WHEN,
                  },
                  MQ20_SQ02_F02: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ02_F02",
                    title: "Days a week?",
                    dropdown_data: ALCOHOL_DAYS_A_WEEK,
                  },
                },
              },
              child_two: {
                image_class: "",
                keyName: "",
                name: "",
                selection_status: false,
                field_data: {
                  MQ20_SQ02_F01: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ02_F01",
                    title: "Since",
                    dropdown_data: ALCOHOL_SINCE_WHEN,
                  },
                  MQ20_SQ02_F02: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ02_F02",
                    title: "Days a week?",
                    dropdown_data: ALCOHOL_DAYS_A_WEEK,
                  },
                },
              },
              child_three: {
                image_class: "",
                keyName: "",
                name: "",
                selection_status: false,
                field_data: {
                  MQ20_SQ02_F01: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ02_F01",
                    title: "Since",
                    dropdown_data: ALCOHOL_SINCE_WHEN,
                  },
                  MQ20_SQ02_F02: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ02_F02",
                    title: "Days a week?",
                    dropdown_data: ALCOHOL_DAYS_A_WEEK,
                  },
                },
              },
              child_four: {
                image_class: "",
                keyName: "",
                name: "",
                selection_status: false,
                field_data: {
                  MQ20_SQ02_F01: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ02_F01",
                    title: "Since",
                    dropdown_data: ALCOHOL_SINCE_WHEN,
                  },
                  MQ20_SQ02_F02: {
                    field_type: "DROPDOWN",
                    id: "MQ20_SQ02_F02",
                    title: "Days a week?",
                    dropdown_data: ALCOHOL_DAYS_A_WEEK,
                  },
                },
              },
            },
          },
        },
      },
    },
    MQ21: {
      main_question: {
        id: "MQ21",
        icon_class: "tobaco",
        title: "",
        description:
          "Are you a politically exposed person (PEP) or a close relative of PEP?",
        status: false,
        member_data: {
          adult_one: {
            keyName: "",
            name: "",
            image_class: "adult",
            selection_status: false,
          },
          adult_two: {
            keyName: "",
            name: "",
            image_class: "adult",
            selection_status: false,
          },
          child_one: {
            keyName: "",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_two: {
            keyName: "",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_three: {
            keyName: "",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_four: {
            keyName: "",
            name: "",
            image_class: "child",
            selection_status: false,
          },
        },
      },
    },
  };
};
