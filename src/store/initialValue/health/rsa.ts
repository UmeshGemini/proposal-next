import { TRSAMedicalQuestion } from "@/store/types/Health/HealthQuotation/TRSAMedicalQuestion";

export const RSA_QUESTION_INITIAL_VALUE = (): TRSAMedicalQuestion => {
  return {
    MQ01: {
      main_question: {
        id: "MQ01",
        icon_class: "tobaco",
        title: "Medical History",
        description:
          "Within the last 2 years have you consulted a doctor or healthcare professional? (other than Preventive or Pre-Employment Health Check-up)?",
        status: false,
        member_data: {
          adult_one: {
            keyName: "adult_one",
            name: "",
            image_class: "adult",
            selection_status: false,
          },
          adult_two: {
            keyName: "adult_two",
            name: "",
            image_class: "adult",
            selection_status: false,
          },
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
          },
        },
      },
    },
    MQ02: {
      main_question: {
        id: "MQ02",
        icon_class: "tobaco",
        title: "medicalMedicationDiseases",
        description:
          "Health Check-up(Within the last 2 years have you undergone any detailed investigation other than Preventive or Pre-Employment Health Check-up (e.g. X-ray, CT Scan, biopsy, MRI, Sonography, etc)?)",
        status: false,
        member_data: {
          adult_one: {
            keyName: "adult_one",
            name: "",
            image_class: "adult",
            selection_status: false,
          },
          adult_two: {
            keyName: "adult_two",
            name: "",
            image_class: "adult",
            selection_status: false,
          },
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
          },
        },
      },
    },
    MQ03: {
      main_question: {
        id: "MQ03",
        icon_class: "cancer",
        title: "Medical Treatment",
        description:
          "Within the last 5 years have you been to a hospital for an operation/medical treatment?",
        status: false,
        member_data: {
          adult_one: {
            keyName: "adult_one",
            name: "",
            image_class: "adult",
            selection_status: false,
          },
          adult_two: {
            keyName: "adult_two",
            name: "",
            image_class: "adult",
            selection_status: false,
          },
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
          },
        },
      },
    },
    MQ04: {
      main_question: {
        id: "MQ04",
        icon_class: "tobaco",
        title: "Medicines",
        description:
          "Do you take tablets, medicines or drugs on a regular basis?",
        status: false,
        member_data: {
          adult_one: {
            keyName: "adult_one",
            name: "",
            image_class: "adult",
            selection_status: false,
          },
          adult_two: {
            keyName: "adult_two",
            name: "",
            image_class: "adult",
            selection_status: false,
          },
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
          },
        },
      },
    },
    MQ05: {
      main_question: {
        id: "MQ05",
        icon_class: "tobaco",
        title: "Medical conditions",
        description:
          "Within the last 3 months have you experienced any health problems or medical conditions which you/proposed insured person have/has not seen a doctor for?",
        status: false,
        member_data: {
          adult_one: {
            keyName: "adult_one",
            name: "",
            image_class: "adult",
            selection_status: false,
          },
          adult_two: {
            keyName: "adult_two",
            name: "",
            image_class: "adult",
            selection_status: false,
          },
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
          },
        },
      },
    },
    MQ06: {
      main_question: {
        id: "MQ06",
        icon_class: "tobaco",
        title: "Hospitalized",
        description:
          "Have any of the person(s) proposed to be insured ever suffered from or taken treatment, or been hospitalized for or have been recommended to undergo / take investigations / medication / surgery or undergone a surgery for any of the following - Diabetes; Hypertension; Ulcer / Cyst / Cancer; Cardiac Disorder; Kidney or Urinary Tract Disorder; Disorder of muscle / bone / joint; Respiratory disorder; Digestive tract or gastrointestinal disorder; Nervous System disorder; Mental Illness or disorder, HIV or AIDS?",
        status: false,
        member_data: {
          adult_one: {
            keyName: "adult_one",
            name: "",
            image_class: "adult",
            selection_status: false,
          },
          adult_two: {
            keyName: "adult_two",
            name: "",
            image_class: "adult",
            selection_status: false,
          },
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
          },
        },
      },
    },
    MQ07: {
      main_question: {
        id: "MQ07",
        icon_class: "tobaco",
        title: "Alcohol",
        description:
          "Do you consume Alcohol(Beer - No. of Pints/week, Wine & Spirit - ml/week)?",
        status: false,
        member_data: {
          adult_one: {
            keyName: "adult_one",
            name: "",
            image_class: "adult",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          adult_two: {
            keyName: "adult_two",
            name: "",
            image_class: "adult",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
        },
      },
    },
    MQ08: {
      main_question: {
        id: "MQ08",
        icon_class: "tobaco",
        title: "Smoking",
        description: "Do you smoke?",
        status: false,
        member_data: {
          adult_one: {
            keyName: "adult_one",
            name: "",
            image_class: "adult",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          adult_two: {
            keyName: "adult_two",
            name: "",
            image_class: "adult",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
        },
      },
    },
    MQ09: {
      main_question: {
        id: "MQ09",
        icon_class: "tobaco",
        title: "Tobacco",
        description: "Do you consume Tobacco/Gutka/Pan/Pan masala?",
        status: false,
        member_data: {
          adult_one: {
            keyName: "adult_one",
            name: "",
            image_class: "adult",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          adult_two: {
            keyName: "adult_two",
            name: "",
            image_class: "adult",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
        },
      },
    },
    MQ10: {
      main_question: {
        id: "MQ10",
        icon_class: "tobaco",
        title: "Narcotics",
        description: "Do you consume Narcotics?",
        status: false,
        member_data: {
          adult_one: {
            keyName: "adult_one",
            name: "",
            image_class: "adult",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          adult_two: {
            keyName: "adult_two",
            name: "",
            image_class: "adult",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Number of years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
        },
      },
    },
  };
};
